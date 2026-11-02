
const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const PORT = process.env.PORT || 3000;
const ADMIN_CODE = process.env.ADMIN_CODE || "Sardor2013";
const PUBLIC = path.join(__dirname, "public");
const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "analytics.json");

fs.mkdirSync(DATA_DIR, { recursive: true });

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(
    DATA_FILE,
    JSON.stringify({
      visitors: {},
      pageViews: 0
    }, null, 2)
  );
}

const sessions = new Map();

function readData() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return { visitors: {}, pageViews: 0 };
  }
}

function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function send(res, status, data, headers = {}) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": "no-store",
    ...headers
  });

  res.end(JSON.stringify(data));
}

function getCookie(req, name) {
  const cookies = (req.headers.cookie || "").split(";");

  for (const cookie of cookies) {
    const [key, ...parts] = cookie.trim().split("=");

    if (key === name) {
      return decodeURIComponent(parts.join("="));
    }
  }

  return null;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", chunk => {
      body += chunk;

      if (body.length > 10000) {
        reject(new Error("Request too large"));
        req.destroy();
      }
    });

    req.on("end", () => {
      try {
        resolve(JSON.parse(body || "{}"));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });

    req.on("error", reject);
  });
}

function isAdmin(req) {
  const sid = getCookie(req, "tutorhub_admin");
  return Boolean(sid && sessions.has(sid));
}

function respondError(res, status, message) {
  return send(res, status, { error: message });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(
    req.url,
    `http://${req.headers.host || "localhost"}`
  );

  // Record visits on the server.
  if (req.method === "POST" && url.pathname === "/api/visit") {
    const data = readData();
    let visitorId = getCookie(req, "tutorhub_visitor");

    if (!visitorId) {
      visitorId = crypto.randomUUID();
    }

    const now = new Date().toISOString();

    if (!data.visitors[visitorId]) {
      data.visitors[visitorId] = {
        firstSeen: now,
        lastSeen: now,
        visits: 1
      };
    } else {
      data.visitors[visitorId].lastSeen = now;
      data.visitors[visitorId].visits += 1;
    }

    data.pageViews += 1;
    saveData(data);

    return send(res, 200, { ok: true }, {
      "Set-Cookie":
        `tutorhub_visitor=${visitorId}; Path=/; Max-Age=31536000; HttpOnly; SameSite=Lax`
    });
  }

  // Admin login.
  if (req.method === "POST" && url.pathname === "/api/admin/login") {
    let body;

    try {
      body = await readBody(req);
    } catch {
      return respondError(res, 400, "Invalid request");
    }

    if (body.code !== ADMIN_CODE) {
      return respondError(res, 401, "Wrong code");
    }

    const sid = crypto.randomBytes(32).toString("hex");
    sessions.set(sid, true);

    return send(res, 200, { ok: true }, {
      "Set-Cookie":
        `tutorhub_admin=${sid}; Path=/; HttpOnly; SameSite=Strict; Max-Age=28800`
    });
  }

  // Admin analytics — protected by a server-side session.
  if (req.method === "GET" && url.pathname === "/api/admin/stats") {
    if (!isAdmin(req)) {
      return respondError(res, 401, "Unauthorized");
    }

    const data = readData();
    const visitors = Object.values(data.visitors);
    const today = new Date().toISOString().slice(0, 10);

    return send(res, 200, {
      uniqueVisitors: visitors.length,
      pageViews: data.pageViews,
      newToday: visitors.filter(
        v => v.firstSeen.slice(0, 10) === today
      ).length,
      returning: visitors.filter(v => v.visits > 1).length,
      recent: visitors
        .sort((a, b) => b.lastSeen.localeCompare(a.lastSeen))
        .slice(0, 10)
    });
  }

  if (req.method === "POST" && url.pathname === "/api/admin/logout") {
    const sid = getCookie(req, "tutorhub_admin");

    if (sid) sessions.delete(sid);

    return send(res, 200, { ok: true }, {
      "Set-Cookie":
        "tutorhub_admin=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0"
    });
  }

  // Serve the website files.
  if (req.method !== "GET" && req.method !== "HEAD") {
    return respondError(res, 405, "Method not allowed");
  }

  let pathname;

  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    return respondError(res, 400, "Invalid path");
  }

  if (pathname === "/") pathname = "/index.html";

  const file = path.resolve(PUBLIC, "." + pathname);

  if (!file.startsWith(PUBLIC + path.sep)) {
    return respondError(res, 403, "Forbidden");
  }

  const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".svg": "image/svg+xml"
  };

  fs.readFile(file, (err, content) => {
    if (err) {
      res.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8"
      });
      return res.end("Page not found");
    }

    res.writeHead(200, {
      "Content-Type":
        types[path.extname(file)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff"
    });

    res.end(req.method === "HEAD" ? undefined : content);
  });
});

server.listen(PORT, () => {
  console.log(`TutorHub: http://localhost:${PORT}`);
});
