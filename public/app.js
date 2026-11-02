
/* =========================================
   TUTORHUB — MAIN JAVASCRIPT
   Languages: Russian, Uzbek, English
   200 demo tutors
========================================= */

"use strict";


/* =========================================
   1. TRANSLATIONS
========================================= */

const translations = {
    ru: {
        navHome: "Главная",
        navTutors: "Репетиторы",
        navAbout: "О нас",
        navPricing: "Тарифы",
        navContact: "Контакты",

        findTutor: "Найти репетитора",
        heroBadge: "Обучение начинается здесь",

        heroTitle: 'Твой путь к знаниям начинается с <span class="gradient-text">правильного учителя.</span>',
        heroDescription: "Находи лучших репетиторов, изучай любимые предметы и достигай своих целей вместе с TutorHub.",
        heroButton: "Найти преподавателя →",
        exploreSubjects: "Изучить предметы",

        heroTutors: "демонстрационных профилей",
        heroProgress: "Твой прогресс",
        heroProgressText: "Новые знания каждый день",
        heroRating: "Средний рейтинг в демо",

        studyCardTitle: "Учись у лучших",
        studyCardText: "В своём темпе и формате",
        studyProgressText: "Твой путь к успеху",

        statTutors: "профилей репетиторов",
        statSubjects: "предметов",
        statLanguages: "языка интерфейса",
        statAccess: "доступ к сайту",

        subjectsLabel: "ЧТО ТЫ ХОЧЕШЬ ИЗУЧАТЬ?",
        subjectsTitle: "Найди свой предмет",
        subjectsDescription: "Выбирай направление и находи подходящего преподавателя.",
        allSubjects: "Все предметы →",

        subjectMath: "Математика",
        subjectEnglish: "Английский язык",
        subjectPhysics: "Физика",
        subjectChemistry: "Химия",
        subjectBiology: "Биология",
        subjectProgramming: "Программирование",
        subjectHistory: "История",
        subjectRussian: "Русский язык",
        subjectUzbek: "Узбекский язык",

        tutorsLabel: "ПРЕПОДАВАТЕЛИ",
        featuredTitle: "Познакомься с репетиторами",
        featuredDescription: "Изучай профили и выбирай подходящего преподавателя.",
        allTutors: "Все репетиторы →",

        loading: "Загружаем преподавателей...",

        howLabel: "ВСЁ ПРОСТО",
        howTitle: "Начни учиться за три шага",
        howDescription: "Никаких сложностей — только твой путь к знаниям.",

        stepOneTitle: "Найди репетитора",
        stepOneText: "Выбери предмет, цену и формат занятий.",
        stepTwoTitle: "Изучи профиль",
        stepTwoText: "Посмотри опыт, рейтинг и информацию преподавателя.",
        stepThreeTitle: "Начни обучение",
        stepThreeText: "Отправь заявку и согласуй детали занятия.",

        ctaLabel: "ТВОЁ БУДУЩЕЕ НАЧИНАЕТСЯ СЕЙЧАС",
        ctaTitle: "Готов открыть новые возможности?",
        ctaDescription: "Найди своего преподавателя и сделай первый шаг к цели.",
        ctaButton: "Найти репетитора →",

        footerDescription: "Находим путь к знаниям вместе.",
        footerPlatform: "Платформа",
        footerInformation: "Информация",
        footerLanguages: "Языки",
        footerRights: "Все права защищены.",
        demoNotice: "Демонстрационный проект",

        searchPlaceholder: "Имя или предмет",
        allSubjectsOption: "Все предметы",
        allFormats: "Любой формат",
        online: "Онлайн",
        offline: "Офлайн",
        maxPrice: "Цена до (сум)",
        searchButton: "Найти",
        resetFilters: "Сбросить фильтры",

        experience: "Опыт",
        years: "лет",
        reviews: "отзывов",
        perHour: "/ час",
        verified: "Проверен",
        bookLesson: "Записаться",
        noResults: "По вашему запросу ничего не найдено.",
        chooseSubject: "Предмет",
        chooseFormat: "Формат",

        bookingTitle: "Заявка на занятие",
        bookingName: "Твоё имя",
        bookingPhone: "Номер телефона",
        bookingDate: "Дата занятия",
        bookingMessage: "Комментарий",
        bookingSubmit: "Отправить заявку",
        bookingCancel: "Отмена",
        bookingSuccess: "Заявка сохранена в демонстрационном режиме.",
        bookingDemo: "Это демоверсия. Заявка не отправлена репетитору.",

        darkMode: "Включить тёмную тему",
        lightMode: "Включить светлую тему",

        currency: "сум",
        perHourLabel: "за час",
        location: "Город",

        menuOpen: "Открыть меню",
        menuClose: "Закрыть меню"
    },

    uz: {
        navHome: "Bosh sahifa",
        navTutors: "Repetitorlar",
        navAbout: "Biz haqimizda",
        navPricing: "Tariflar",
        navContact: "Aloqa",

        findTutor: "Repetitor topish",
        heroBadge: "Ta'lim shu yerdan boshlanadi",

        heroTitle: 'Bilim sari yo‘ling <span class="gradient-text">to‘g‘ri ustozdan boshlanadi.</span>',
        heroDescription: "Eng yaxshi repetitorlarni toping, sevimli fanlaringizni o‘rganing va TutorHub bilan maqsadlaringizga erishing.",
        heroButton: "Ustoz topish →",
        exploreSubjects: "Fanlarni ko‘rish",

        heroTutors: "namunaviy profillar",
        heroProgress: "Sizning natijangiz",
        heroProgressText: "Har kuni yangi bilimlar",
        heroRating: "Demo o‘rtacha reytingi",

        studyCardTitle: "Eng yaxshilardan o‘rganing",
        studyCardText: "O‘zingizga qulay sur'atda",
        studyProgressText: "Muvaffaqiyat sari yo‘l",

        statTutors: "repetitor profillari",
        statSubjects: "ta fan",
        statLanguages: "ta interfeys tili",
        statAccess: "saytga kirish",

        subjectsLabel: "NIMANI O‘RGANMOQCHISIZ?",
        subjectsTitle: "O‘z faningizni toping",
        subjectsDescription: "Yo‘nalishni tanlang va mos ustozni toping.",
        allSubjects: "Barcha fanlar →",

        subjectMath: "Matematika",
        subjectEnglish: "Ingliz tili",
        subjectPhysics: "Fizika",
        subjectChemistry: "Kimyo",
        subjectBiology: "Biologiya",
        subjectProgramming: "Dasturlash",
        subjectHistory: "Tarix",
        subjectRussian: "Rus tili",
        subjectUzbek: "O‘zbek tili",

        tutorsLabel: "O‘QITUVCHILAR",
        featuredTitle: "Repetitorlar bilan tanishing",
        featuredDescription: "Profillarni ko‘rib, mos ustozni tanlang.",
        allTutors: "Barcha repetitorlar →",

        loading: "O‘qituvchilar yuklanmoqda...",

        howLabel: "HAMMASI OSON",
        howTitle: "Uch qadamda o‘rganishni boshlang",
        howDescription: "Oddiy va qulay — bilim sari yo‘lingiz.",

        stepOneTitle: "Repetitor toping",
        stepOneText: "Fan, narx va dars formatini tanlang.",
        stepTwoTitle: "Profilni ko‘ring",
        stepTwoText: "Ustozning tajribasi va reytingini o‘rganing.",
        stepThreeTitle: "O‘qishni boshlang",
        stepThreeText: "So‘rov yuboring va dars vaqtini kelishing.",

        ctaLabel: "KELAJAGINGIZ HOZIRDAN BOSHLANADI",
        ctaTitle: "Yangi imkoniyatlarni ochishga tayyormisiz?",
        ctaDescription: "Ustozingizni toping va maqsadingiz sari birinchi qadamni tashlang.",
        ctaButton: "Repetitor topish →",

        footerDescription: "Bilim sari birgalikda.",
        footerPlatform: "Platforma",
        footerInformation: "Ma'lumot",
        footerLanguages: "Tillar",
        footerRights: "Barcha huquqlar himoyalangan.",
        demoNotice: "Namoyish loyihasi",

        searchPlaceholder: "Ism yoki fan",
        allSubjectsOption: "Barcha fanlar",
        allFormats: "Barcha formatlar",
        online: "Onlayn",
        offline: "Oflayn",
        maxPrice: "Eng yuqori narx (so‘m)",
        searchButton: "Qidirish",
        resetFilters: "Filtrlarni tozalash",

        experience: "Tajriba",
        years: "yil",
        reviews: "ta sharh",
        perHour: "/ soat",
        verified: "Tekshirilgan",
        bookLesson: "Darsga yozilish",
        noResults: "So‘rovingiz bo‘yicha natija topilmadi.",
        chooseSubject: "Fan",
        chooseFormat: "Format",

        bookingTitle: "Dars uchun so‘rov",
        bookingName: "Ismingiz",
        bookingPhone: "Telefon raqamingiz",
        bookingDate: "Dars sanasi",
        bookingMessage: "Izoh",
        bookingSubmit: "So‘rov yuborish",
        bookingCancel: "Bekor qilish",
        bookingSuccess: "So‘rov demo rejimida saqlandi.",
        bookingDemo: "Bu demo versiya. So‘rov repetitorga yuborilmadi.",

        darkMode: "Tungi rejimni yoqish",
        lightMode: "Kunduzgi rejimni yoqish",

        currency: "so‘m",
        perHourLabel: "soatiga",
        location: "Shahar",

        menuOpen: "Menyuni ochish",
        menuClose: "Menyuni yopish"
    },

    en: {
        navHome: "Home",
        navTutors: "Tutors",
        navAbout: "About",
        navPricing: "Pricing",
        navContact: "Contact",

        findTutor: "Find a tutor",
        heroBadge: "Your learning journey starts here",

        heroTitle: 'Your journey to knowledge starts with the <span class="gradient-text">right teacher.</span>',
        heroDescription: "Find great tutors, learn your favorite subjects, and achieve your goals with TutorHub.",
        heroButton: "Find a tutor →",
        exploreSubjects: "Explore subjects",

        heroTutors: "demo profiles",
        heroProgress: "Your progress",
        heroProgressText: "New knowledge every day",
        heroRating: "Average demo rating",

        studyCardTitle: "Learn from the best",
        studyCardText: "At your own pace",
        studyProgressText: "Your path to success",

        statTutors: "tutor profiles",
        statSubjects: "subjects",
        statLanguages: "interface languages",
        statAccess: "website access",

        subjectsLabel: "WHAT DO YOU WANT TO LEARN?",
        subjectsTitle: "Find your subject",
        subjectsDescription: "Choose a subject and find the right tutor.",
        allSubjects: "All subjects →",

        subjectMath: "Mathematics",
        subjectEnglish: "English",
        subjectPhysics: "Physics",
        subjectChemistry: "Chemistry",
        subjectBiology: "Biology",
        subjectProgramming: "Programming",
        subjectHistory: "History",
        subjectRussian: "Russian",
        subjectUzbek: "Uzbek",

        tutorsLabel: "TEACHERS",
        featuredTitle: "Meet our tutors",
        featuredDescription: "Explore profiles and find the right teacher.",
        allTutors: "All tutors →",

        loading: "Loading tutors...",

        howLabel: "IT'S SIMPLE",
        howTitle: "Start learning in three steps",
        howDescription: "No complications — just your learning journey.",

        stepOneTitle: "Find a tutor",
        stepOneText: "Choose a subject, price, and lesson format.",
        stepTwoTitle: "Explore the profile",
        stepTwoText: "Check the teacher's experience and rating.",
        stepThreeTitle: "Start learning",
        stepThreeText: "Send a request and arrange your lesson.",

        ctaLabel: "YOUR FUTURE STARTS NOW",
        ctaTitle: "Ready to unlock new opportunities?",
        ctaDescription: "Find your tutor and take the first step towards your goal.",
        ctaButton: "Find a tutor →",

        footerDescription: "Finding the path to knowledge together.",
        footerPlatform: "Platform",
        footerInformation: "Information",
        footerLanguages: "Languages",
        footerRights: "All rights reserved.",
        demoNotice: "Demo project",

        searchPlaceholder: "Name or subject",
        allSubjectsOption: "All subjects",
        allFormats: "Any format",
        online: "Online",
        offline: "In person",
        maxPrice: "Maximum price (UZS)",
        searchButton: "Search",
        resetFilters: "Reset filters",

        experience: "Experience",
        years: "years",
        reviews: "reviews",
        perHour: "/ hour",
        verified: "Verified",
        bookLesson: "Book a lesson",
        noResults: "No tutors found.",
        chooseSubject: "Subject",
        chooseFormat: "Format",

        bookingTitle: "Lesson request",
        bookingName: "Your name",
        bookingPhone: "Phone number",
        bookingDate: "Lesson date",
        bookingMessage: "Message",
        bookingSubmit: "Send request",
        bookingCancel: "Cancel",
        bookingSuccess: "Your request was saved in demo mode.",
        bookingDemo: "This is a demo. The request was not sent to the tutor.",

        darkMode: "Enable dark mode",
        lightMode: "Enable light mode",

        currency: "UZS",
        perHourLabel: "per hour",
        location: "City",

        menuOpen: "Open menu",
        menuClose: "Close menu"
    }
};


/* =========================================
   2. SUBJECTS AND DEMO TUTORS
========================================= */

const subjectList = [
    { key: "subjectMath", name: "Математика", emoji: "📐" },
    { key: "subjectEnglish", name: "Английский язык", emoji: "🌍" },
    { key: "subjectPhysics", name: "Физика", emoji: "⚛️" },
    { key: "subjectChemistry", name: "Химия", emoji: "🧪" },
    { key: "subjectBiology", name: "Биология", emoji: "🧬" },
    { key: "subjectProgramming", name: "Программирование", emoji: "💻" },
    { key: "subjectHistory", name: "История", emoji: "🏛️" },
    { key: "subjectRussian", name: "Русский язык", emoji: "📖" },
    { key: "subjectIELTS", name: "IELTS", emoji: "🎯" },
    { key: "subjectUzbek", name: "Узбекский язык", emoji: "🇺🇿" }
];

const tutorNames = [
    "Александр Иванов",
    "Мадина Каримова",
    "Дилшод Рахимов",
    "София Петрова",
    "Азизбек Юсупов",
    "Алина Садыкова",
    "Мухаммад Алиев",
    "Малика Абдуллаева",
    "Даниил Смирнов",
    "Сабина Ахмедова",
    "Бекзод Турсунов",
    "Нилуфар Исмоилова",
    "Тимур Хамидов",
    "Зарина Мирзаева",
    "Илья Кузнецов",
    "Шахноза Усманова",
    "Амир Саидов",
    "Диана Волкова",
    "Фаррух Азимов",
    "Лола Рустамова"
];

const cities = [
    "Ташкент",
    "Самарканд",
    "Бухара",
    "Фергана",
    "Андижан"
];

const avatarEmojis = [
    "👨🏻‍🏫",
    "👩🏻‍🏫",
    "👨🏽‍🏫",
    "👩🏽‍🏫",
    "👨🏼‍💻",
    "👩🏼‍💻",
    "👨🏻‍🎓",
    "👩🏻‍🎓"
];

const tutorBios = {
    ru: [
        "Объясняю сложные темы простым и понятным языком.",
        "Помогаю ученикам уверенно достигать своих целей.",
        "Индивидуальный подход к каждому ученику.",
        "Составляю программу обучения под твой уровень.",
        "Делаю занятия интересными и результативными."
    ],

    uz: [
        "Murakkab mavzularni sodda va tushunarli qilib tushuntiraman.",
        "O‘quvchilarga maqsadlariga ishonch bilan erishishda yordam beraman.",
        "Har bir o‘quvchiga individual yondashuv.",
        "Bilimingiz darajasiga mos dastur tuzaman.",
        "Darslarni qiziqarli va samarali qilaman."
    ],

    en: [
        "I explain difficult topics in a simple and clear way.",
        "I help students confidently achieve their goals.",
        "I offer an individual approach to every student.",
        "I create a learning plan for your level.",
        "I make lessons engaging and effective."
    ]
};

function getSubjectName(subject, language = "ru") {
    const subjectTranslations = {
        "Математика": {
            ru: "Математика",
            uz: "Matematika",
            en: "Mathematics"
        },
        "Английский язык": {
            ru: "Английский язык",
            uz: "Ingliz tili",
            en: "English"
        },
        "Английский": {
            ru: "Английский язык",
            uz: "Ingliz tili",
            en: "English"
        },
        "Физика": {
            ru: "Физика",
            uz: "Fizika",
            en: "Physics"
        },
        "Химия": {
            ru: "Химия",
            uz: "Kimyo",
            en: "Chemistry"
        },
        "Биология": {
            ru: "Биология",
            uz: "Biologiya",
            en: "Biology"
        },
        "Программирование": {
            ru: "Программирование",
            uz: "Dasturlash",
            en: "Programming"
        },
        "История": {
            ru: "История",
            uz: "Tarix",
            en: "History"
        },
        "Русский язык": {
            ru: "Русский язык",
            uz: "Rus tili",
            en: "Russian"
        },
        "IELTS": {
            ru: "IELTS",
            uz: "IELTS",
            en: "IELTS"
        },
        "Узбекский язык": {
            ru: "Узбекский язык",
            uz: "O‘zbek tili",
            en: "Uzbek"
        }
    };

    return subjectTranslations[subject]?.[language] || subject;
}

function createTutors() {
    return subjectList.flatMap((subject, subjectIndex) => {
        return tutorNames.map((name, index) => {
            const id = subjectIndex * 20 + index + 1;

            return {
                id,
                name,
                subject: subject.name,
                emoji: avatarEmojis[(index + subjectIndex) % avatarEmojis.length],
                city: cities[(index + subjectIndex) % cities.length],

                price: 50000 + ((index * 7 + subjectIndex * 3) % 11) * 10000,

                format: index % 2 === 0 ? "online" : "offline",

                rating: Number(
                    (4.5 + ((index * 3 + subjectIndex) % 6) / 10).toFixed(1)
                ),

                reviews: 8 + ((index * 7 + subjectIndex * 5) % 93),

                experience: 1 + ((index + subjectIndex * 2) % 15),

                verified: index % 4 === 0,

                bioIndex: (index + subjectIndex) % 5
            };
        });
    });
}

const tutors = createTutors();

console.log("TutorHub: total demo tutors =", tutors.length);


/* =========================================
   3. APPLICATION STATE
========================================= */

const state = {
    language: localStorage.getItem("th_language") || "ru",
    darkMode: localStorage.getItem("th_dark") === "true",
    search: "",
    subject: "",
    format: "",
    maxPrice: ""
};

if (!translations[state.language]) {
    state.language = "ru";
}

let currentBookingTutor = null;


/* =========================================
   4. TRANSLATION HELPERS
========================================= */

function t(key) {
    return translations[state.language]?.[key]
        ?? translations.ru[key]
        ?? key;
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function formatPrice(price) {
    const formatted = new Intl.NumberFormat(
        state.language === "uz" ? "uz-UZ" :
        state.language === "en" ? "en-US" : "ru-RU"
    ).format(price);

    return `${formatted} ${t("currency")}`;
}

function getTutorBio(tutor) {
    return tutorBios[state.language][tutor.bioIndex];
}


/* =========================================
   5. TRANSLATE HTML
========================================= */

function translatePage() {
    document.documentElement.lang = state.language;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        const value = t(key);

        // Only known translation strings may contain markup.
        if (key === "heroTitle") {
            element.innerHTML = value;
        } else {
            element.textContent = value;
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        element.placeholder = t(element.dataset.i18nPlaceholder);
    });

    document.querySelectorAll("[data-subject-count]").forEach(element => {
        const subject = element.dataset.subjectCount;

        const count = tutors.filter(tutor =>
            tutor.subject === subject
        ).length;

        const text = {
            ru: `${count} преподавателей`,
            uz: `${count} nafar o‘qituvchi`,
            en: `${count} tutors`
        };

        element.textContent = text[state.language];
    });

    const languageSelect = document.getElementById("languageSelect");

    if (languageSelect) {
        languageSelect.value = state.language;
    }

    const menuToggle = document.getElementById("menuToggle");

    if (menuToggle) {
        const isOpen = document
            .getElementById("navigation")
            ?.classList.contains("open");

        menuToggle.setAttribute("aria-label", isOpen ? t("menuClose") : t("menuOpen"));
    }

    updateThemeButton();
}


/* =========================================
   6. LANGUAGE SWITCHER
========================================= */

function initLanguageSwitcher() {
    const languageSelect = document.getElementById("languageSelect");

    if (!languageSelect) return;

    languageSelect.value = state.language;

    languageSelect.addEventListener("change", () => {
        const selectedLanguage = languageSelect.value;

        if (!translations[selectedLanguage]) return;

        state.language = selectedLanguage;

        localStorage.setItem("th_language", state.language);

        translatePage();
        renderFeaturedTutors();
        renderTutorsPage();
        renderBookingModalContent();
    });
}


/* =========================================
   7. DARK MODE
========================================= */

function updateThemeButton() {
    const themeToggle = document.getElementById("themeToggle");

    if (!themeToggle) return;

    themeToggle.textContent = state.darkMode ? "☀️" : "🌙";

    themeToggle.setAttribute(
        "aria-label",
        state.darkMode ? t("lightMode") : t("darkMode")
    );

    themeToggle.title = state.darkMode ? t("lightMode") : t("darkMode");
}

function applyTheme() {
    document.body.classList.toggle("dark", state.darkMode);

    localStorage.setItem("th_dark", String(state.darkMode));

    updateThemeButton();
}

function initTheme() {
    applyTheme();

    const themeToggle = document.getElementById("themeToggle");

    if (!themeToggle) return;

    themeToggle.addEventListener("click", () => {
        state.darkMode = !state.darkMode;
        applyTheme();
    });
}


/* =========================================
   8. MOBILE NAVIGATION
========================================= */

function initMobileMenu() {
    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    if (!menuToggle || !navigation) return;

    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? t("menuClose") : t("menuOpen"));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });

    document.addEventListener("click", event => {
        if (
            !navigation.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            navigation.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        }
    });
}


/* =========================================
   9. SCROLL REVEAL ANIMATIONS
========================================= */

function initRevealAnimations() {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
        elements.forEach(element => element.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    elements.forEach(element => observer.observe(element));
}


/* =========================================
   10. TUTOR CARDS
========================================= */

function createTutorCard(tutor) {
    const verifiedBadge = tutor.verified
        ? `<span class="verified-badge" title="${escapeHTML(t("verified"))}">✓</span>`
        : "";

    return `
        <article class="tutor-card">

            <div class="tutor-card-content">

                <div class="tutor-card-top">

                    <div class="tutor-avatar">
                        ${tutor.emoji}
                    </div>

                    <div class="tutor-rating">
                        ★ ${tutor.rating}
                        <span style="color:var(--text-soft)">
                            (${tutor.reviews})
                        </span>
                    </div>

                </div>

                <h3 class="tutor-name">
                    ${escapeHTML(tutor.name)}
                    ${verifiedBadge}
                </h3>

                <p class="tutor-subject">
                    ${escapeHTML(getSubjectName(tutor.subject, state.language))}
                </p>

                <p class="tutor-bio">
                    ${escapeHTML(getTutorBio(tutor))}
                </p>

                <div class="tutor-meta">

                    <span class="tutor-tag">
                        ${escapeHTML(t("experience"))}: ${tutor.experience}
                        ${escapeHTML(t("years"))}
                    </span>

                    <span class="tutor-tag">
                        ${tutor.format === "online" ? "🌐 " + escapeHTML(t("online")) : "📍 " + escapeHTML(t("offline"))}
                    </span>

                    <span class="tutor-tag">
                        📍 ${escapeHTML(tutor.city)}
                    </span>

                </div>

                <div class="tutor-card-bottom">

                    <div class="tutor-price">
                        ${escapeHTML(formatPrice(tutor.price))}
                        <small>${escapeHTML(t("perHourLabel"))}</small>
                    </div>

                    <button
                        type="button"
                        class="button"
                        data-book-tutor="${tutor.id}"
                    >
                        ${escapeHTML(t("bookLesson"))}
                    </button>

                </div>

            </div>

        </article>
    `;
}

function renderFeaturedTutors() {
    const grid = document.getElementById("featuredTutorGrid");

    if (!grid) return;

    const featured = tutors
        .filter(tutor => tutor.verified)
        .slice(0, 3);

    grid.innerHTML = featured.map(createTutorCard).join("");
}


/* =========================================
   11. TUTORS PAGE SEARCH AND FILTERS
========================================= */

function renderTutorsPage() {
    const grid = document.getElementById("tutorGrid");

    if (!grid) return;

    const searchInput = document.getElementById("searchInput");
    const subjectFilter = document.getElementById("subjectFilter");
    const formatFilter = document.getElementById("formatFilter");
    const maxPriceInput = document.getElementById("maxPrice");

    const search = (searchInput?.value || "").trim().toLocaleLowerCase();
    const selectedSubject = subjectFilter?.value || "";
    const selectedFormat = formatFilter?.value || "";
    const maxPrice = Number(maxPriceInput?.value || 0);

    const filtered = tutors.filter(tutor => {
        const translatedSubject = getSubjectName(
            tutor.subject,
            state.language
        ).toLocaleLowerCase();

        const matchesSearch =
            tutor.name.toLocaleLowerCase().includes(search) ||
            tutor.subject.toLocaleLowerCase().includes(search) ||
            translatedSubject.includes(search) ||
            tutor.city.toLocaleLowerCase().includes(search);

        const matchesSubject =
            !selectedSubject || tutor.subject === selectedSubject;

        const matchesFormat =
            !selectedFormat || tutor.format === selectedFormat;

        const matchesPrice =
            !maxPrice || tutor.price <= maxPrice;

        return matchesSearch &&
            matchesSubject &&
            matchesFormat &&
            matchesPrice;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="loading-message">
                ${escapeHTML(t("noResults"))}
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(createTutorCard).join("");

    const resultCount = document.getElementById("resultCount");

    if (resultCount) {
        const resultLabels = {
            ru: "Найдено преподавателей",
            uz: "Topilgan o‘qituvchilar",
            en: "Tutors found"
        };

        resultCount.textContent =
            `${resultLabels[state.language]}: ${filtered.length}`;
    }
}

function initTutorFilters() {
    const searchInput = document.getElementById("searchInput");
    const subjectFilter = document.getElementById("subjectFilter");
    const formatFilter = document.getElementById("formatFilter");
    const maxPriceInput = document.getElementById("maxPrice");
    const resetButton = document.getElementById("resetFilters");

    [
        searchInput,
        subjectFilter,
        formatFilter,
        maxPriceInput
    ].forEach(element => {
        if (!element) return;

        element.addEventListener("input", renderTutorsPage);
        element.addEventListener("change", renderTutorsPage);
    });

    if (resetButton) {
        resetButton.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            if (subjectFilter) subjectFilter.value = "";
            if (formatFilter) formatFilter.value = "";
            if (maxPriceInput) maxPriceInput.value = "";

            renderTutorsPage();
        });
    }

    // Support links such as tutors.html?subject=Физика
    const params = new URLSearchParams(window.location.search);
    const requestedSubject = params.get("subject");

    if (requestedSubject && subjectFilter) {
        const matchingOption = [...subjectFilter.options].find(option =>
            option.value === requestedSubject ||
            getSubjectName(option.value, state.language) === requestedSubject
        );

        if (matchingOption) {
            subjectFilter.value = matchingOption.value;
        }
    }

    renderTutorsPage();
}


/* =========================================
   12. BOOKING MODAL
========================================= */

function ensureBookingModal() {
    if (document.getElementById("bookingModal")) return;

    const modal = document.createElement("div");

    modal.id = "bookingModal";
    modal.className = "booking-modal";
    modal.hidden = true;

    modal.innerHTML = `
        <div class="booking-backdrop" data-close-booking></div>

        <section
            class="booking-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="bookingTitle"
        >
            <button
                type="button"
                class="booking-close"
                data-close-booking
                aria-label="Close"
            >✕</button>

            <div id="bookingModalContent"></div>
        </section>
    `;

    document.body.appendChild(modal);

    modal.addEventListener("click", event => {
        if (event.target.closest("[data-close-booking]")) {
            closeBookingModal();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeBookingModal();
        }
    });
}

function renderBookingModalContent() {
    const content = document.getElementById("bookingModalContent");

    if (!content || !currentBookingTutor) return;

    content.innerHTML = `
        <h2 id="bookingTitle">${escapeHTML(t("bookingTitle"))}</h2>

        <p class="booking-tutor-name">
            ${escapeHTML(currentBookingTutor.name)}
            · ${escapeHTML(getSubjectName(currentBookingTutor.subject, state.language))}
        </p>

        <p class="booking-demo-note">
            ${escapeHTML(t("bookingDemo"))}
        </p>

        <form id="bookingForm">

            <label for="bookingName">${escapeHTML(t("bookingName"))}</label>
            <input id="bookingName" name="name" required maxlength="100">

            <label for="bookingPhone">${escapeHTML(t("bookingPhone"))}</label>
            <input id="bookingPhone" name="phone" type="tel" required maxlength="30">

            <label for="bookingDate">${escapeHTML(t("bookingDate"))}</label>
            <input id="bookingDate" name="date" type="date" required>

            <label for="bookingMessage">${escapeHTML(t("bookingMessage"))}</label>
            <textarea id="bookingMessage" name="message" rows="3" maxlength="1000"></textarea>

            <div class="booking-actions">
                <button type="button" class="button button-outline" data-close-booking>
                    ${escapeHTML(t("bookingCancel"))}
                </button>

                <button type="submit" class="button">
                    ${escapeHTML(t("bookingSubmit"))}
                </button>
            </div>

        </form>

        <p id="bookingStatus" role="status"></p>
    `;

    const dateInput = content.querySelector("#bookingDate");

    if (dateInput) {
        const today = new Date();
        const localDate = new Date(
            today.getTime() - today.getTimezoneOffset() * 60000
        ).toISOString().slice(0, 10);

        dateInput.min = localDate;
    }

    const form = content.querySelector("#bookingForm");

    form?.addEventListener("submit", handleBookingSubmit);
}

function openBookingModal(tutorId) {
    currentBookingTutor = tutors.find(tutor => tutor.id === Number(tutorId));

    if (!currentBookingTutor) return;

    ensureBookingModal();

    const modal = document.getElementById("bookingModal");

    modal.hidden = false;
    document.body.classList.add("modal-open");

    renderBookingModalContent();

    document.getElementById("bookingName")?.focus();
}

function closeBookingModal() {
    const modal = document.getElementById("bookingModal");

    if (!modal) return;

    modal.hidden = true;
    document.body.classList.remove("modal-open");

    currentBookingTutor = null;
}

function handleBookingSubmit(event) {
    event.preventDefault();

    if (!currentBookingTutor) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const booking = {
        id: Date.now(),
        tutorId: currentBookingTutor.id,
        tutorName: currentBookingTutor.name,
        subject: currentBookingTutor.subject,
        name: String(formData.get("name") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        date: String(formData.get("date") || ""),
        message: String(formData.get("message") || "").trim(),
        createdAt: new Date().toISOString()
    };

    const existingBookings = JSON.parse(
        localStorage.getItem("th_demo_bookings") || "[]"
    );

    existingBookings.push(booking);

    localStorage.setItem(
        "th_demo_bookings",
        JSON.stringify(existingBookings)
    );

    const status = document.getElementById("bookingStatus");

    if (status) {
        status.textContent = t("bookingSuccess");
        status.className = "booking-success";
    }

    form.reset();
}

function initBookingButtons() {
    document.addEventListener("click", event => {
        const button = event.target.closest("[data-book-tutor]");

        if (!button) return;

        openBookingModal(button.dataset.bookTutor);
    });
}


/* =========================================
   13. SUBJECT COUNT
========================================= */

function updateSubjectCounts() {
    document.querySelectorAll("[data-subject-count]").forEach(element => {
        const subject = element.dataset.subjectCount;

        const count = tutors.filter(tutor =>
            tutor.subject === subject
        ).length;

        const labels = {
            ru: `${count} преподавателей`,
            uz: `${count} nafar o‘qituvchi`,
            en: `${count} tutors`
        };

        element.textContent = labels[state.language];
    });
}


/* =========================================
   14. INIT
========================================= */

function initTutorHub() {
    translatePage();

    initLanguageSwitcher();
    initTheme();
    initMobileMenu();
    initRevealAnimations();

    initTutorFilters();
    initBookingButtons();

    renderFeaturedTutors();
    updateSubjectCounts();

    console.log("TutorHub initialized successfully.");
    console.log("Total demo tutors:", tutors.length);
    console.log("Subjects:", subjectList.length);
}

document.addEventListener("DOMContentLoaded", initTutorHub);
