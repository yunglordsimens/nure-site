import type { Lang } from './i18n';

export interface SpecialtyDetail {
  code: string;
  name: { uk: string; en: string };
  faculty: { uk: string; en: string };
  facultyCode: string;
  degrees: ('bachelor' | 'master' | 'phd')[];
  description: { uk: string; en: string };
  duration: { bachelor: string; master: string; phd?: string };
  credits: { bachelor: number; master: number };
  languages: ('uk' | 'en')[];
  careers: { uk: string[]; en: string[] };
  skills: { uk: string[]; en: string[] };
  subjects: { uk: string[]; en: string[] };
  contacts: {
    department: { uk: string; en: string };
    head: { uk: string; en: string };
    email: string;
    phone: string;
  };
}

export const specialties: Record<string, SpecialtyDetail> = {
  '121': {
    code: '121',
    name: { uk: 'Інженерія програмного забезпечення', en: 'Software Engineering' },
    faculty: { uk: 'Факультет комп\'ютерних наук', en: 'Faculty of Computer Science' },
    facultyCode: 'КН',
    degrees: ['bachelor', 'master'],
    description: {
      uk: 'Спеціальність готує фахівців з проєктування, розробки та супроводу програмних систем. Студенти вивчають повний цикл створення програмного забезпечення — від аналізу вимог до розгортання та підтримки. Акцент на практичних навичках, роботі в команді та сучасних методологіях розробки.',
      en: 'The specialty trains professionals in software system design, development, and maintenance. Students learn the full software development lifecycle — from requirements analysis to deployment and support. Emphasis on practical skills, teamwork, and modern development methodologies.',
    },
    duration: { bachelor: '3 роки 10 місяців', master: '1 рік 4 місяці' },
    credits: { bachelor: 240, master: 90 },
    languages: ['uk', 'en'],
    careers: {
      uk: ['Software Engineer', 'Full-Stack Developer', 'DevOps Engineer', 'QA Engineer', 'Technical Lead', 'Solution Architect', 'Product Manager'],
      en: ['Software Engineer', 'Full-Stack Developer', 'DevOps Engineer', 'QA Engineer', 'Technical Lead', 'Solution Architect', 'Product Manager'],
    },
    skills: {
      uk: ['Java, C++, Python, JavaScript/TypeScript', 'Бази даних та SQL', 'Web-технології та фреймворки', 'CI/CD та DevOps', 'Agile та Scrum', 'Тестування та QA', 'Архітектура програмних систем'],
      en: ['Java, C++, Python, JavaScript/TypeScript', 'Databases & SQL', 'Web technologies & frameworks', 'CI/CD & DevOps', 'Agile & Scrum', 'Testing & QA', 'Software architecture'],
    },
    subjects: {
      uk: ['Об\'єктно-орієнтоване програмування', 'Алгоритми та структури даних', 'Бази даних', 'Web-програмування', 'Програмна інженерія', 'Операційні системи', 'Комп\'ютерні мережі', 'Управління проєктами'],
      en: ['Object-Oriented Programming', 'Algorithms & Data Structures', 'Databases', 'Web Programming', 'Software Engineering', 'Operating Systems', 'Computer Networks', 'Project Management'],
    },
    contacts: {
      department: { uk: 'Кафедра програмної інженерії', en: 'Department of Software Engineering' },
      head: { uk: 'Проф. Петров І.В.', en: 'Prof. Petrov I.V.' },
      email: 'pi@nure.ua',
      phone: '+380 57 702 13 54',
    },
  },
  '122': {
    code: '122',
    name: { uk: 'Комп\'ютерні науки', en: 'Computer Science' },
    faculty: { uk: 'Факультет комп\'ютерних наук', en: 'Faculty of Computer Science' },
    facultyCode: 'КН',
    degrees: ['bachelor', 'master', 'phd'],
    description: {
      uk: 'Комп\'ютерні науки — це фундаментальна спеціальність, що охоплює теорію обчислень, штучний інтелект, машинне навчання, аналіз даних та високопродуктивні обчислення. Випускники працюють як дослідники, аналітики даних та розробники AI-систем.',
      en: 'Computer Science is a foundational specialty covering computational theory, artificial intelligence, machine learning, data analysis, and high-performance computing. Graduates work as researchers, data analysts, and AI system developers.',
    },
    duration: { bachelor: '3 роки 10 місяців', master: '1 рік 4 місяці', phd: '4 роки' },
    credits: { bachelor: 240, master: 90 },
    languages: ['uk', 'en'],
    careers: {
      uk: ['Data Scientist', 'ML Engineer', 'Research Scientist', 'Backend Developer', 'Systems Analyst', 'AI Engineer'],
      en: ['Data Scientist', 'ML Engineer', 'Research Scientist', 'Backend Developer', 'Systems Analyst', 'AI Engineer'],
    },
    skills: {
      uk: ['Python, R, C++', 'Machine Learning та Deep Learning', 'Статистичний аналіз', 'Big Data технології', 'Алгоритмічне мислення', 'Наукові дослідження'],
      en: ['Python, R, C++', 'Machine Learning & Deep Learning', 'Statistical analysis', 'Big Data technologies', 'Algorithmic thinking', 'Scientific research'],
    },
    subjects: {
      uk: ['Математичний аналіз', 'Лінійна алгебра', 'Теорія ймовірностей', 'Штучний інтелект', 'Машинне навчання', 'Аналіз даних', 'Паралельні обчислення'],
      en: ['Calculus', 'Linear Algebra', 'Probability Theory', 'Artificial Intelligence', 'Machine Learning', 'Data Analysis', 'Parallel Computing'],
    },
    contacts: {
      department: { uk: 'Кафедра штучного інтелекту', en: 'Department of Artificial Intelligence' },
      head: { uk: 'Проф. Бодянський Є.В.', en: 'Prof. Bodyanskiy Ye.V.' },
      email: 'ai@nure.ua',
      phone: '+380 57 702 14 83',
    },
  },
  '125': {
    code: '125',
    name: { uk: 'Кібербезпека', en: 'Cybersecurity' },
    faculty: { uk: 'Факультет комп\'ютерної безпеки', en: 'Faculty of Computer Security' },
    facultyCode: 'КБ',
    degrees: ['bachelor', 'master'],
    description: {
      uk: 'Спеціальність з кібербезпеки готує фахівців із захисту інформаційних систем, мереж та даних. Студенти вивчають криптографію, мережеву безпеку, аналіз вразливостей та реагування на інциденти. Високий попит на ринку праці.',
      en: 'The Cybersecurity specialty trains professionals in protecting information systems, networks, and data. Students study cryptography, network security, vulnerability analysis, and incident response. High demand in the job market.',
    },
    duration: { bachelor: '3 роки 10 місяців', master: '1 рік 4 місяці' },
    credits: { bachelor: 240, master: 90 },
    languages: ['uk'],
    careers: {
      uk: ['Security Engineer', 'Penetration Tester', 'SOC Analyst', 'Security Architect', 'Cryptographer', 'Incident Response Specialist'],
      en: ['Security Engineer', 'Penetration Tester', 'SOC Analyst', 'Security Architect', 'Cryptographer', 'Incident Response Specialist'],
    },
    skills: {
      uk: ['Мережева безпека', 'Криптографія', 'Аналіз вразливостей', 'SIEM системи', 'Linux/Windows адміністрування', 'Forensics'],
      en: ['Network security', 'Cryptography', 'Vulnerability analysis', 'SIEM systems', 'Linux/Windows administration', 'Forensics'],
    },
    subjects: {
      uk: ['Основи кібербезпеки', 'Криптографічні методи захисту', 'Безпека комп\'ютерних мереж', 'Операційні системи', 'Правові аспекти кібербезпеки'],
      en: ['Cybersecurity Fundamentals', 'Cryptographic Methods', 'Network Security', 'Operating Systems', 'Legal Aspects of Cybersecurity'],
    },
    contacts: {
      department: { uk: 'Кафедра безпеки інформаційних технологій', en: 'Department of IT Security' },
      head: { uk: 'Проф. Руженцев В.І.', en: 'Prof. Ruzhentsev V.I.' },
      email: 'bit@nure.ua',
      phone: '+380 57 702 15 21',
    },
  },
  '123': {
    code: '123',
    name: { uk: 'Комп\'ютерна інженерія', en: 'Computer Engineering' },
    faculty: { uk: 'Факультет комп\'ютерної інженерії та управління', en: 'Faculty of Computer Engineering and Control' },
    facultyCode: 'КІ',
    degrees: ['bachelor', 'master'],
    description: {
      uk: 'Комп\'ютерна інженерія — спеціальність, що поєднує апаратне та програмне забезпечення. Студенти вивчають проєктування цифрових систем, вбудовані системи, FPGA, мікропроцесорну техніку та комп\'ютерні мережі. Випускники працюють hardware-інженерами, embedded-розробниками, системними архітекторами.',
      en: 'Computer Engineering combines hardware and software design. Students study digital systems, embedded systems, FPGA, microprocessor technology, and computer networks.',
    },
    duration: { bachelor: '3 роки 10 місяців', master: '1 рік 4 місяці' },
    credits: { bachelor: 240, master: 90 },
    languages: ['uk'],
    careers: {
      uk: ['Embedded-розробник', 'Hardware-інженер', 'Системний архітектор', 'FPGA-інженер', 'DevOps-інженер', 'IoT-розробник'],
      en: ['Embedded Developer', 'Hardware Engineer', 'System Architect', 'FPGA Engineer', 'DevOps Engineer', 'IoT Developer'],
    },
    skills: {
      uk: ['Цифрова схемотехніка', 'VHDL/Verilog', 'ARM/RISC-V', 'PCB Design', 'Linux Kernel', 'Real-time системи'],
      en: ['Digital Circuit Design', 'VHDL/Verilog', 'ARM/RISC-V', 'PCB Design', 'Linux Kernel', 'Real-time Systems'],
    },
    subjects: {
      uk: ['Архітектура комп\'ютерів', 'Мікропроцесорні системи', 'Проєктування на FPGA', 'Комп\'ютерні мережі', 'Операційні системи', 'Цифрова обробка сигналів'],
      en: ['Computer Architecture', 'Microprocessor Systems', 'FPGA Design', 'Computer Networks', 'Operating Systems', 'Digital Signal Processing'],
    },
    contacts: { department: { uk: 'Кафедра АПОТ', en: 'Department of CAD' }, head: { uk: 'Хаханов В.І.', en: 'Khakhanov V.I.' }, email: 'apot@nure.ua', phone: '+380 57 702 14 26' },
  },
  '124': {
    code: '124',
    name: { uk: 'Системний аналіз', en: 'System Analysis' },
    faculty: { uk: 'Факультет комп\'ютерної інженерії та управління', en: 'Faculty of Computer Engineering and Control' },
    facultyCode: 'КІ',
    degrees: ['bachelor', 'master'],
    description: {
      uk: 'Системний аналіз — спеціальність на стику математики, інформатики та управління. Студенти вчаться моделювати складні системи, приймати рішення на основі даних, оптимізувати процеси. Випускники працюють аналітиками даних, системними аналітиками, консультантами з управління.',
      en: 'System Analysis is at the intersection of mathematics, computer science, and management. Students learn to model complex systems and make data-driven decisions.',
    },
    duration: { bachelor: '3 роки 10 місяців', master: '1 рік 4 місяці' },
    credits: { bachelor: 240, master: 90 },
    languages: ['uk'],
    careers: {
      uk: ['Data Analyst', 'Системний аналітик', 'Business Analyst', 'Консультант з оптимізації', 'Product Manager', 'Data Scientist'],
      en: ['Data Analyst', 'Systems Analyst', 'Business Analyst', 'Optimization Consultant', 'Product Manager', 'Data Scientist'],
    },
    skills: {
      uk: ['Математичне моделювання', 'Теорія прийняття рішень', 'Статистичний аналіз', 'Python / R', 'Оптимізація', 'Системне мислення'],
      en: ['Mathematical Modeling', 'Decision Theory', 'Statistical Analysis', 'Python / R', 'Optimization', 'Systems Thinking'],
    },
    subjects: {
      uk: ['Теорія систем', 'Дослідження операцій', 'Математична статистика', 'Моделювання систем', 'Теорія прийняття рішень', 'Інтелектуальний аналіз даних'],
      en: ['Systems Theory', 'Operations Research', 'Mathematical Statistics', 'System Modeling', 'Decision Theory', 'Data Mining'],
    },
    contacts: { department: { uk: 'Кафедра системотехніки', en: 'Department of System Engineering' }, head: { uk: '', en: '' }, email: 'sa@nure.ua', phone: '+380 57 702 14 26' },
  },
  '126': {
    code: '126',
    name: { uk: 'Інформаційні системи та технології', en: 'Information Systems & Technologies' },
    faculty: { uk: 'Факультет комп\'ютерних наук', en: 'Faculty of Computer Science' },
    facultyCode: 'КН',
    degrees: ['bachelor', 'master'],
    description: {
      uk: 'Інформаційні системи та технології — спеціальність, що готує фахівців з проєктування, розробки та впровадження інформаційних систем для бізнесу. Студенти вивчають бази даних, ERP-системи, бізнес-аналіз, веб-технології та управління IT-проєктами.',
      en: 'Information Systems and Technologies trains specialists in designing, developing, and implementing information systems for business.',
    },
    duration: { bachelor: '3 роки 10 місяців', master: '1 рік 4 місяці' },
    credits: { bachelor: 240, master: 90 },
    languages: ['uk'],
    careers: {
      uk: ['IT-консультант', 'Бізнес-аналітик', 'ERP-спеціаліст', 'Проєктний менеджер', 'Full-stack розробник', 'Database Administrator'],
      en: ['IT Consultant', 'Business Analyst', 'ERP Specialist', 'Project Manager', 'Full-stack Developer', 'Database Administrator'],
    },
    skills: {
      uk: ['Проєктування БД', 'SQL / NoSQL', 'UML моделювання', 'ERP / CRM системи', 'Веб-розробка', 'Управління проєктами'],
      en: ['Database Design', 'SQL / NoSQL', 'UML Modeling', 'ERP / CRM Systems', 'Web Development', 'Project Management'],
    },
    subjects: {
      uk: ['Бази даних', 'Інформаційні системи', 'Веб-технології', 'Управління IT-проєктами', 'Бізнес-аналіз', 'Хмарні технології'],
      en: ['Databases', 'Information Systems', 'Web Technologies', 'IT Project Management', 'Business Analysis', 'Cloud Technologies'],
    },
    contacts: { department: { uk: 'Кафедра інформаційних технологій', en: 'Department of IT' }, head: { uk: 'Шматков С.І.', en: 'Shmatkov S.I.' }, email: 'it@nure.ua', phone: '+380 57 702 13 64' },
  },
  '151': {
    code: '151',
    name: { uk: 'Автоматизація та комп\'ютерно-інтегровані технології', en: 'Automation & Computer-Integrated Technologies' },
    faculty: { uk: 'Факультет автоматики та комп\'ютерних технологій', en: 'Faculty of Automation and Computer Technologies' },
    facultyCode: 'АМ',
    degrees: ['bachelor', 'master'],
    description: {
      uk: 'Автоматизація та КІТІ — спеціальність, що поєднує робототехніку, IoT, промислову автоматизацію та мехатроніку. Студенти проєктують системи управління, працюють з PLC, SCADA, вбудованими системами та промисловими роботами.',
      en: 'Automation and Computer-Integrated Technologies combines robotics, IoT, industrial automation, and mechatronics.',
    },
    duration: { bachelor: '3 роки 10 місяців', master: '1 рік 4 місяці' },
    credits: { bachelor: 240, master: 90 },
    languages: ['uk'],
    careers: {
      uk: ['Інженер-автоматик', 'Робототехнік', 'IoT-розробник', 'SCADA-інженер', 'PLC-програміст', 'Мехатронік'],
      en: ['Automation Engineer', 'Robotics Engineer', 'IoT Developer', 'SCADA Engineer', 'PLC Programmer', 'Mechatronics Engineer'],
    },
    skills: {
      uk: ['PLC програмування', 'SCADA системи', 'Робототехніка', 'IoT протоколи', 'Теорія управління', 'CAD/CAM'],
      en: ['PLC Programming', 'SCADA Systems', 'Robotics', 'IoT Protocols', 'Control Theory', 'CAD/CAM'],
    },
    subjects: {
      uk: ['Теорія автоматичного управління', 'Мікропроцесорні системи', 'Промислові контролери', 'Робототехніка', 'SCADA-системи', 'Мехатроніка'],
      en: ['Automatic Control Theory', 'Microprocessor Systems', 'Industrial Controllers', 'Robotics', 'SCADA Systems', 'Mechatronics'],
    },
    contacts: { department: { uk: 'Кафедра АЕІТ', en: 'Department of Automation' }, head: { uk: 'Невлюдов І.Ш.', en: 'Nevliudov I.Sh.' }, email: 'aeit@nure.ua', phone: '+380 57 702 13 28' },
  },
  '172': {
    code: '172',
    name: { uk: 'Телекомунікації та радіотехніка', en: 'Telecommunications & Radio Engineering' },
    faculty: { uk: 'Факультет інфокомунікацій', en: 'Faculty of Infocommunications' },
    facultyCode: 'ІКМ',
    degrees: ['bachelor', 'master', 'phd'],
    description: {
      uk: 'Телекомунікації та радіотехніка — базова спеціальність ХНУРЕ з часів заснування. Студенти вивчають 5G, оптичні мережі, SDR, антенні системи, супутниковий зв\'язок та мережеве адміністрування. Факультет має унікальне лабораторне обладнання.',
      en: 'Telecommunications and Radio Engineering is NURE\'s core specialty since its founding. Students study 5G, optical networks, SDR, antenna systems, and satellite communications.',
    },
    duration: { bachelor: '3 роки 10 місяців', master: '1 рік 4 місяці', phd: '4 роки' },
    credits: { bachelor: 240, master: 90 },
    languages: ['uk', 'en'],
    careers: {
      uk: ['Мережевий інженер', 'RF-інженер', 'Телеком-архітектор', 'Інженер зв\'язку', '5G-спеціаліст', 'Network Administrator'],
      en: ['Network Engineer', 'RF Engineer', 'Telecom Architect', 'Communications Engineer', '5G Specialist', 'Network Administrator'],
    },
    skills: {
      uk: ['Мережеві протоколи', 'RF проєктування', 'SDR', 'Оптоволоконні мережі', '5G NR', 'Антенні системи'],
      en: ['Network Protocols', 'RF Design', 'SDR', 'Fiber Optics', '5G NR', 'Antenna Systems'],
    },
    subjects: {
      uk: ['Теорія сигналів', 'Антени та поширення радіохвиль', 'Мережі мобільного зв\'язку', 'Оптичні системи', 'Цифрова обробка сигналів', 'Супутникові комунікації'],
      en: ['Signal Theory', 'Antennas & Wave Propagation', 'Mobile Networks', 'Optical Systems', 'Digital Signal Processing', 'Satellite Communications'],
    },
    contacts: { department: { uk: 'Кафедра МТС', en: 'Department of MTS' }, head: { uk: 'Безрук В.М.', en: 'Bezruk V.M.' }, email: 'mts@nure.ua', phone: '+380 57 702 15 13' },
  },
  '171': {
    code: '171',
    name: { uk: 'Електроніка', en: 'Electronics' },
    faculty: { uk: 'Факультет електроніки та біомедичної інженерії', en: 'Faculty of Electronics and Biomedical Engineering' },
    facultyCode: 'ЕБ',
    degrees: ['bachelor', 'master', 'phd'],
    description: {
      uk: 'Електроніка — спеціальність, що охоплює мікроелектроніку, напівпровідникові прилади, аналогову та цифрову схемотехніку. Студенти проєктують електронні пристрої від мікросхем до готових виробів.',
      en: 'Electronics covers microelectronics, semiconductor devices, and analog/digital circuit design.',
    },
    duration: { bachelor: '3 роки 10 місяців', master: '1 рік 4 місяці', phd: '4 роки' },
    credits: { bachelor: 240, master: 90 },
    languages: ['uk'],
    careers: {
      uk: ['Інженер-електронник', 'Схемотехнік', 'Мікроелектронік', 'Тестувальник мікросхем', 'R&D інженер'],
      en: ['Electronics Engineer', 'Circuit Designer', 'Microelectronics Engineer', 'IC Test Engineer', 'R&D Engineer'],
    },
    skills: {
      uk: ['Аналогова схемотехніка', 'Цифрова електроніка', 'PCB Layout', 'SPICE моделювання', 'Мікроконтролери', 'ЕМС'],
      en: ['Analog Circuit Design', 'Digital Electronics', 'PCB Layout', 'SPICE Simulation', 'Microcontrollers', 'EMC'],
    },
    subjects: {
      uk: ['Фізика напівпровідників', 'Аналогова схемотехніка', 'Мікроелектроніка', 'Силова електроніка', 'Сенсори та перетворювачі', 'ЕМС'],
      en: ['Semiconductor Physics', 'Analog Circuits', 'Microelectronics', 'Power Electronics', 'Sensors & Transducers', 'EMC'],
    },
    contacts: { department: { uk: 'Кафедра мікроелектроніки', en: 'Department of Microelectronics' }, head: { uk: '', en: '' }, email: 'me@nure.ua', phone: '+380 57 702 14 39' },
  },
  '163': {
    code: '163',
    name: { uk: 'Біомедична інженерія', en: 'Biomedical Engineering' },
    faculty: { uk: 'Факультет електроніки та біомедичної інженерії', en: 'Faculty of Electronics and Biomedical Engineering' },
    facultyCode: 'ЕБ',
    degrees: ['bachelor', 'master'],
    description: {
      uk: 'Біомедична інженерія поєднує інженерію з медициною. Студенти проєктують медичні прилади, системи моніторингу здоров\'я, обробляють біосигнали (ЕКГ, ЕЕГ), розробляють телемедичні рішення та медичне програмне забезпечення.',
      en: 'Biomedical Engineering combines engineering with medicine. Students design medical devices, health monitoring systems, and process biosignals.',
    },
    duration: { bachelor: '3 роки 10 місяців', master: '1 рік 4 місяці' },
    credits: { bachelor: 240, master: 90 },
    languages: ['uk'],
    careers: {
      uk: ['Біомедичний інженер', 'Розробник медтехніки', 'Інженер клінічних систем', 'Телемедицина-спеціаліст', 'Дослідник'],
      en: ['Biomedical Engineer', 'Medical Device Developer', 'Clinical Systems Engineer', 'Telemedicine Specialist', 'Researcher'],
    },
    skills: {
      uk: ['Обробка біосигналів', 'Медичні прилади', 'Телемедицина', 'MATLAB / Python', 'Медична візуалізація', '3D-друк в медицині'],
      en: ['Biosignal Processing', 'Medical Devices', 'Telemedicine', 'MATLAB / Python', 'Medical Imaging', 'Medical 3D Printing'],
    },
    subjects: {
      uk: ['Анатомія та фізіологія', 'Медична електроніка', 'Обробка біосигналів', 'Медична візуалізація', 'Телемедичні системи', 'Біомеханіка'],
      en: ['Anatomy & Physiology', 'Medical Electronics', 'Biosignal Processing', 'Medical Imaging', 'Telemedicine Systems', 'Biomechanics'],
    },
    contacts: { department: { uk: 'Кафедра БМІ', en: 'Department of BME' }, head: { uk: 'Аврунін О.Г.', en: 'Avrunin O.G.' }, email: 'bmi@nure.ua', phone: '+380 57 702 14 39' },
  },
};

// Функції для роботи зі спеціальностями
export function getSpecialty(code: string): SpecialtyDetail | undefined {
  return specialties[code];
}

export function getAllSpecialtyCodes(): string[] {
  return Object.keys(specialties);
}