export const languages = {
  uk: 'Українська',
  en: 'English',
} as const;

export const defaultLang = 'uk';

export type Lang = keyof typeof languages;

export const ui = {
  uk: {
    // Nav
    'nav.university': 'Університет',
    'nav.applicants': 'Абітурієнтам',
    'nav.students': 'Студентам',
    'nav.science': 'Наука',
    'nav.education': 'Освіта',
    'nav.news': 'Новини',
    'nav.contacts': 'Контакти',
    'nav.apply': 'Вступити →',
    'nav.lang': 'EN',

    // Hero
    'hero.badge': 'QS Europe 2026 — у рейтингу',
    'hero.title.line1': 'Там, де',
    'hero.title.accent1': 'інженерія',
    'hero.title.line2': 'зустрічає',
    'hero.title.accent2': 'інновації',
    'hero.desc': 'Один з найбільш профільних технічних університетів України — прикладні IT, радіоелектроніка та сталий розвиток у тісній співпраці з індустрією.',
    'hero.cta.programs': 'Спеціальності',
    'hero.cta.tour': 'Віртуальний тур',

    // Stats
    'stats.years': 'Років академічної досконалості',
    'stats.students': 'Студентів',
    'stats.programs': 'Спеціальностей',
    'stats.partners': 'Індустріальних партнерів',
    'stats.faculties': 'Факультетів',

    // Quick Links
    'quick.title': 'Я — ...',
    'quick.applicant': 'Абітурієнт',
    'quick.applicant.desc': 'Спеціальності, вступна кампанія, подання документів — бакалаврат, магістратура, PhD.',
    'quick.student': 'Студент',
    'quick.student.desc': 'Розклад занять, кампус, бібліотека, працевлаштування та студентське життя.',
    'quick.international': 'Іноземний студент',
    'quick.international.desc': 'Програми англійською, вступ для іноземців, підготовче відділення, візова підтримка.',
    'quick.researcher': 'Дослідник / Партнер',
    'quick.researcher.desc': 'Наукові лабораторії, публікації, конференції та можливості співпраці.',

    // News
    'news.title': 'Новини',
    'news.all': 'Усі новини →',
    'news.readmore': 'Детальніше →',

    // Programs
    'programs.label': 'Академічні програми',
    'programs.title': 'Спеціальності',
    'programs.all': 'Усі спеціальності →',
    'programs.bachelor': 'Бакалаврат',
    'programs.master': 'Магістратура',
    'programs.phd': 'PhD',

    // Partners
    'partners.label': 'Індустріальне партнерство',
    'partners.title': 'Наші партнери',
    'partners.global': 'Глобальні технологічні партнери',
    'partners.regional': 'Регіональні партнери',
    'partners.programs': 'Міжнародні програми',

    // Footer
    'footer.applicants': 'Абітурієнтам',
    'footer.university': 'Університет',
    'footer.students': 'Студентам',
    'footer.rights': 'Усі права захищено',
    'footer.programs': 'Спеціальності',
    'footer.foreign': 'Вступ для іноземців',
    'footer.english': 'Навчання англійською',
    'footer.prep': 'Підготовче відділення',
    'footer.faq': 'FAQ',
    'footer.about': 'Про ХНУРЕ',
    'footer.structure': 'Структура',
    'footer.rankings': 'Світові рейтинги',
    'footer.international': 'Міжнародна діяльність',
    'footer.timetable': 'Розклад',
    'footer.campus': 'Кампус',
    'footer.library': 'Бібліотека',
    'footer.employment': 'Працевлаштування',
    'footer.distance': 'Дистанційне навчання',

    // Meta
    'meta.title': 'ХНУРЕ — Харківський національний університет радіоелектроніки',
    'meta.description': 'Один з найбільш профільних технічних університетів України. Прикладні IT, радіоелектроніка, кібербезпека та автоматизація.',
    'meta.university.full': 'Харківський національний університет радіоелектроніки',
    'meta.university.short': 'ХНУРЕ',
  },

  en: {
    'nav.university': 'University',
    'nav.applicants': 'Applicants',
    'nav.students': 'Students',
    'nav.science': 'Science',
    'nav.education': 'Education',
    'nav.news': 'News',
    'nav.contacts': 'Contacts',
    'nav.apply': 'Apply Now →',
    'nav.lang': 'UA',

    'hero.badge': 'QS Europe 2026 Ranked University',
    'hero.title.line1': 'Where',
    'hero.title.accent1': 'Engineering',
    'hero.title.line2': 'Meets',
    'hero.title.accent2': 'Innovation',
    'hero.desc': 'One of Ukraine\'s most distinctly profiled universities — integrating applied IT, radio electronics, and sustainable engineering with real-world industry collaboration.',
    'hero.cta.programs': 'Explore Programs',
    'hero.cta.tour': 'Virtual Tour',

    'stats.years': 'Years of Academic Excellence',
    'stats.students': 'Students',
    'stats.programs': 'Specialties & Programs',
    'stats.partners': 'Industry Partners',
    'stats.faculties': 'Faculties',

    'quick.title': 'I am a...',
    'quick.applicant': 'Prospective Student',
    'quick.applicant.desc': 'Explore programs, admission requirements, and apply for Bachelor\'s, Master\'s, or PhD degrees.',
    'quick.student': 'Current Student',
    'quick.student.desc': 'Timetable, student portal, campus services, employment opportunities, and student life.',
    'quick.international': 'International Student',
    'quick.international.desc': 'English-taught programs, admission for foreign citizens, preparatory department, and visa support.',
    'quick.researcher': 'Researcher / Partner',
    'quick.researcher.desc': 'Scientific laboratories, publications, conferences, and collaboration opportunities with NURE.',

    'news.title': 'News',
    'news.all': 'All News →',
    'news.readmore': 'Read more →',

    'programs.label': 'Academic Programs',
    'programs.title': 'Fields of Study',
    'programs.all': 'All Specialties →',
    'programs.bachelor': 'Bachelor\'s',
    'programs.master': 'Master\'s',
    'programs.phd': 'PhD',

    'partners.label': 'Industry Collaboration',
    'partners.title': 'Our Partners',
    'partners.global': 'Global Technology Partners',
    'partners.regional': 'Regional Partners',
    'partners.programs': 'International Programs',

    'footer.applicants': 'Applicants',
    'footer.university': 'University',
    'footer.students': 'Students',
    'footer.rights': 'All Rights Reserved',
    'footer.programs': 'Programs & Specialties',
    'footer.foreign': 'Admission for Foreigners',
    'footer.english': 'Education in English',
    'footer.prep': 'Preparatory Department',
    'footer.faq': 'FAQ',
    'footer.about': 'About NURE',
    'footer.structure': 'Structure',
    'footer.rankings': 'World Rankings',
    'footer.international': 'International Activity',
    'footer.timetable': 'Timetable',
    'footer.campus': 'Campus',
    'footer.library': 'Library',
    'footer.employment': 'Employment',
    'footer.distance': 'Distance Learning',

    'meta.title': 'NURE — Kharkiv National University of Radio Electronics',
    'meta.description': 'One of the most distinctly profiled technical universities in Ukraine. Applied IT, radio electronics, cybersecurity, and automation.',
    'meta.university.full': 'Kharkiv National University of Radio Electronics',
    'meta.university.short': 'NURE',
  },
} as const;

export function t(key: keyof typeof ui.uk, lang: Lang = defaultLang): string {
  return ui[lang][key] || ui.uk[key] || key;
}

export function getLocalePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
