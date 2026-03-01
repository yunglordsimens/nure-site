export interface Building {
  id: string;
  name: { uk: string; en: string };
  letter: string;
  address: string;
  lat: number;
  lng: number;
  floors: number;
  description: { uk: string; en: string };
  facilities: string[];
}

export const buildings: Building[] = [
  {
    id: 'a',
    name: { uk: 'Корпус А (Головний)', en: 'Building A (Main)' },
    letter: 'А',
    address: 'пр. Науки, 14',
    lat: 49.9994,
    lng: 36.2468,
    floors: 5,
    description: {
      uk: 'Головний адміністративний корпус. Ректорат, деканати факультетів КІ, ІКМ, АМ, ЕБ. Актовий зал, конференц-зали.',
      en: 'Main administrative building. Rectorate, dean offices for CI, ICM, AM, EB faculties. Assembly hall, conference rooms.',
    },
    facilities: ['Ректорат', 'Актовий зал', 'Конференц-зали', 'Бухгалтерія', 'Відділ кадрів'],
  },
  {
    id: 'd',
    name: { uk: 'Корпус Д', en: 'Building D' },
    letter: 'Д',
    address: 'пр. Науки, 14',
    lat: 49.9988,
    lng: 36.2475,
    floors: 6,
    description: {
      uk: 'Навчальний корпус. Деканати факультетів КН та КБ. Комп\'ютерні лабораторії, аудиторії.',
      en: 'Educational building. Dean offices for CS and CS faculties. Computer labs, lecture halls.',
    },
    facilities: ['Факультет КН', 'Факультет КБ', 'Комп\'ютерні лабораторії', 'Приймальна комісія'],
  },
  {
    id: 'b',
    name: { uk: 'Корпус Б', en: 'Building B' },
    letter: 'Б',
    address: 'пр. Науки, 14',
    lat: 49.9991,
    lng: 36.2458,
    floors: 4,
    description: {
      uk: 'Навчально-лабораторний корпус. Радіотехнічні та телекомунікаційні лабораторії.',
      en: 'Teaching and laboratory building. Radio engineering and telecommunications labs.',
    },
    facilities: ['Радіотехнічні лабораторії', 'Телеком лабораторії', 'Аудиторії'],
  },
  {
    id: 'v',
    name: { uk: 'Корпус В', en: 'Building V' },
    letter: 'В',
    address: 'пр. Науки, 14',
    lat: 49.9996,
    lng: 36.2455,
    floors: 3,
    description: {
      uk: 'Навчальний корпус. Аудиторії, лабораторії електроніки та мікроелектроніки.',
      en: 'Educational building. Lecture halls, electronics and microelectronics labs.',
    },
    facilities: ['Лабораторії електроніки', 'Аудиторії'],
  },
  {
    id: 'lib',
    name: { uk: 'Бібліотека', en: 'Library' },
    letter: 'Біб',
    address: 'пр. Науки, 14',
    lat: 49.9992,
    lng: 36.2462,
    floors: 3,
    description: {
      uk: 'Наукова бібліотека ХНУРЕ. 500 000+ томів, читальні зали, електронні ресурси, IEEE Xplore, Scopus.',
      en: 'NURE Scientific Library. 500,000+ volumes, reading halls, digital resources, IEEE Xplore, Scopus.',
    },
    facilities: ['Читальні зали', 'Електронний каталог', 'Книговидача', 'IEEE Xplore'],
  },
  {
    id: 'sport',
    name: { uk: 'Спортивний комплекс', en: 'Sports Complex' },
    letter: 'СК',
    address: 'пр. Науки, 14',
    lat: 49.9986,
    lng: 36.2470,
    floors: 2,
    description: {
      uk: 'Спортивний комплекс з басейном, тренажерним залом, спортивними залами для баскетболу, волейболу, настільного тенісу.',
      en: 'Sports complex with swimming pool, gym, and halls for basketball, volleyball, table tennis.',
    },
    facilities: ['Басейн', 'Тренажерний зал', 'Спортивні зали', 'Стадіон'],
  },
  {
    id: 'dorm1',
    name: { uk: 'Гуртожиток №1', en: 'Dormitory #1' },
    letter: 'Г1',
    address: 'вул. Бакуліна, 8',
    lat: 50.0002,
    lng: 36.2480,
    floors: 9,
    description: {
      uk: 'Студентський гуртожиток на 500 місць. Кімнати на 2-3 особи.',
      en: 'Student dormitory for 500 residents. Rooms for 2-3 persons.',
    },
    facilities: ['Кімнати', 'Кухні', 'Пральня', 'Навчальні кімнати'],
  },
];

export function getBuilding(id: string): Building | undefined {
  return buildings.find(b => b.id === id);
}
