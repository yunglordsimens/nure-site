export interface Department {
  code: string;
  name: { uk: string; en: string };
  head?: string;
  email?: string;
  phone?: string;
}

export interface Faculty {
  code: string;
  name: { uk: string; en: string };
  fullName: { uk: string; en: string };
  dean: string;
  email: string;
  phone: string;
  building: string;
  room: string;
  description: { uk: string; en: string };
  specialties: string[];
  departments: Department[];
}

export const faculties: Record<string, Faculty> = {
  kn: {
    code: 'КН',
    name: { uk: 'Комп\'ютерних наук', en: 'Computer Science' },
    fullName: { uk: 'Факультет комп\'ютерних наук', en: 'Faculty of Computer Science' },
    dean: 'Чумаченко О.І.',
    email: 'kn@nure.ua',
    phone: '+380 57 702 13 64',
    building: 'Д',
    room: '404',
    description: {
      uk: 'Факультет комп\'ютерних наук — найбільший факультет ХНУРЕ. Готує фахівців з програмної інженерії, комп\'ютерних наук, інформаційних систем та штучного інтелекту. Випускники працюють в EPAM, GlobalLogic, SoftServe, Microsoft та інших провідних IT-компаніях.',
      en: 'The Faculty of Computer Science is the largest faculty at NURE. It trains specialists in software engineering, computer science, information systems, and artificial intelligence.',
    },
    specialties: ['121', '122', '126'],
    departments: [
      { code: 'ПІ', name: { uk: 'Кафедра програмної інженерії', en: 'Software Engineering' }, head: 'Дудар З.В.', email: 'pi@nure.ua', phone: '+380 57 702 13 54' },
      { code: 'ІТ', name: { uk: 'Кафедра інформаційних технологій', en: 'Information Technologies' }, head: 'Шматков С.І.', email: 'it@nure.ua' },
      { code: 'ШІ', name: { uk: 'Кафедра штучного інтелекту', en: 'Artificial Intelligence' }, head: 'Бодянський Є.В.', email: 'ai@nure.ua' },
      { code: 'МІТС', name: { uk: 'Кафедра медіа-інженерії та інформаційних технологічних систем', en: 'Media Engineering' }, email: 'mits@nure.ua' },
    ],
  },
  ki: {
    code: 'КІ',
    name: { uk: 'Комп\'ютерної інженерії та управління', en: 'Computer Engineering & Control' },
    fullName: { uk: 'Факультет комп\'ютерної інженерії та управління', en: 'Faculty of Computer Engineering and Control' },
    dean: 'Хаханов В.І.',
    email: 'ki@nure.ua',
    phone: '+380 57 702 14 26',
    building: 'А',
    room: '326',
    description: {
      uk: 'Факультет готує фахівців з комп\'ютерної інженерії, системного аналізу та управління. Кафедри факультету ведуть дослідження в галузі вбудованих систем, FPGA, високопродуктивних обчислень та автоматизованого проєктування.',
      en: 'The faculty trains specialists in computer engineering, system analysis and control systems.',
    },
    specialties: ['123', '124'],
    departments: [
      { code: 'АПОТ', name: { uk: 'Кафедра автоматизації проєктування обчислювальної техніки', en: 'Computer-Aided Design' }, head: 'Хаханов В.І.', email: 'apot@nure.ua' },
      { code: 'КІТ', name: { uk: 'Кафедра комп\'ютерних інтелектуальних технологій', en: 'Computer Intelligent Technologies' }, email: 'kit@nure.ua' },
      { code: 'СА', name: { uk: 'Кафедра системотехніки', en: 'System Engineering' }, email: 'sa@nure.ua' },
    ],
  },
  ikm: {
    code: 'ІКМ',
    name: { uk: 'Інфокомунікацій', en: 'Infocommunications' },
    fullName: { uk: 'Факультет інфокомунікацій', en: 'Faculty of Infocommunications' },
    dean: 'Безрук В.М.',
    email: 'ikm@nure.ua',
    phone: '+380 57 702 15 13',
    building: 'А',
    room: '418',
    description: {
      uk: 'Факультет інфокомунікацій готує спеціалістів з телекомунікацій, радіотехніки та мережевих технологій. Дослідження охоплюють 5G, SDR, антенні системи, оптичні мережі та супутникові комунікації.',
      en: 'The Faculty of Infocommunications trains specialists in telecommunications, radio engineering, and network technologies.',
    },
    specialties: ['172'],
    departments: [
      { code: 'МТС', name: { uk: 'Кафедра медіа та телекомунікаційних систем', en: 'Media & Telecommunication Systems' }, email: 'mts@nure.ua' },
      { code: 'ІКІ', name: { uk: 'Кафедра інфокомунікаційної інженерії', en: 'Infocommunication Engineering' }, email: 'iki@nure.ua' },
    ],
  },
  kb: {
    code: 'КБ',
    name: { uk: 'Комп\'ютерної безпеки', en: 'Computer Security' },
    fullName: { uk: 'Факультет комп\'ютерної безпеки', en: 'Faculty of Computer Security' },
    dean: 'Руженцев В.І.',
    email: 'kb@nure.ua',
    phone: '+380 57 702 14 87',
    building: 'Д',
    room: '508',
    description: {
      uk: 'Факультет комп\'ютерної безпеки готує фахівців з кібербезпеки, захисту інформації та криптографії. Студенти отримують практичні навички з penetration testing, аналізу вразливостей та побудови захищених систем.',
      en: 'The Faculty of Computer Security trains specialists in cybersecurity, information protection, and cryptography.',
    },
    specialties: ['125'],
    departments: [
      { code: 'БІТ', name: { uk: 'Кафедра безпеки інформаційних технологій', en: 'Information Security' }, head: 'Руженцев В.І.', email: 'bit@nure.ua' },
      { code: 'КЗІ', name: { uk: 'Кафедра комп\'ютерного захисту інформації', en: 'Computer Information Protection' }, email: 'kzi@nure.ua' },
    ],
  },
  am: {
    code: 'АМ',
    name: { uk: 'Автоматики та комп\'ютерних технологій', en: 'Automation & Computer Technologies' },
    fullName: { uk: 'Факультет автоматики та комп\'ютерних технологій', en: 'Faculty of Automation and Computer Technologies' },
    dean: 'Невлюдов І.Ш.',
    email: 'am@nure.ua',
    phone: '+380 57 702 13 28',
    building: 'А',
    room: '510',
    description: {
      uk: 'Факультет автоматики та комп\'ютерних технологій готує фахівців з автоматизації, робототехніки, IoT та вбудованих систем. Дослідження охоплюють промислову автоматизацію, мехатроніку та інтелектуальні системи управління.',
      en: 'The faculty trains specialists in automation, robotics, IoT, and embedded systems.',
    },
    specialties: ['151'],
    departments: [
      { code: 'АЕІТ', name: { uk: 'Кафедра автоматизації та електроінженерії', en: 'Automation & Electrical Engineering' }, email: 'aeit@nure.ua' },
      { code: 'ПКІТ', name: { uk: 'Кафедра промислової кібернетики та інформаційних технологій', en: 'Industrial Cybernetics' }, email: 'pkit@nure.ua' },
    ],
  },
  eb: {
    code: 'ЕБ',
    name: { uk: 'Електроніки та біомедичної інженерії', en: 'Electronics & Biomedical Engineering' },
    fullName: { uk: 'Факультет електроніки та біомедичної інженерії', en: 'Faculty of Electronics and Biomedical Engineering' },
    dean: 'Аврунін О.Г.',
    email: 'eb@nure.ua',
    phone: '+380 57 702 14 39',
    building: 'А',
    room: '220',
    description: {
      uk: 'Факультет електроніки та біомедичної інженерії поєднує електроніку з медичними технологіями. Студенти вивчають проєктування медичних приладів, обробку біосигналів, телемедицину та мікроелектроніку.',
      en: 'The faculty combines electronics with medical technologies, training specialists in biomedical device design and signal processing.',
    },
    specialties: ['171', '163'],
    departments: [
      { code: 'БМІ', name: { uk: 'Кафедра біомедичної інженерії', en: 'Biomedical Engineering' }, head: 'Аврунін О.Г.', email: 'bmi@nure.ua' },
      { code: 'МЕ', name: { uk: 'Кафедра мікроелектроніки', en: 'Microelectronics' }, email: 'me@nure.ua' },
    ],
  },
};

export function getFaculty(code: string): Faculty | undefined {
  return faculties[code];
}

export function getAllFacultyCodes(): string[] {
  return Object.keys(faculties);
}
