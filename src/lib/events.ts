export interface CalendarEvent {
  id: number;
  title: { uk: string; en: string };
  date: string;
  endDate?: string;
  type: 'academic' | 'admission' | 'science' | 'culture' | 'sport';
  description?: { uk: string; en: string };
  location?: string;
  url?: string;
}

export const typeColors: Record<string, string> = {
  academic: 'bg-blue-500',
  admission: 'bg-green-500',
  science: 'bg-purple-500',
  culture: 'bg-pink-500',
  sport: 'bg-orange-500',
};

export const typeLabels: Record<string, { uk: string; en: string }> = {
  academic: { uk: 'Навчання', en: 'Academic' },
  admission: { uk: 'Вступ', en: 'Admission' },
  science: { uk: 'Наука', en: 'Science' },
  culture: { uk: 'Культура', en: 'Culture' },
  sport: { uk: 'Спорт', en: 'Sport' },
};

export const mockEvents: CalendarEvent[] = [
  {
    id: 1,
    title: { uk: 'Початок весняного семестру', en: 'Spring semester start' },
    date: '2026-02-02',
    type: 'academic',
    description: { uk: 'Початок навчальних занять весняного семестру 2025/2026.', en: 'Spring semester 2025/2026 classes begin.' },
  },
  {
    id: 2,
    title: { uk: 'День відкритих дверей', en: 'Open Day' },
    date: '2026-03-15',
    type: 'admission',
    description: { uk: 'Запрошуємо абітурієнтів та їх батьків на День відкритих дверей ХНУРЕ.', en: 'We invite applicants and parents to NURE Open Day.' },
    location: 'Актова зала, корпус А',
  },
  {
    id: 3,
    title: { uk: 'Хакатон NURE AI Challenge', en: 'NURE AI Challenge Hackathon' },
    date: '2026-03-22',
    endDate: '2026-03-23',
    type: 'science',
    description: { uk: '48-годинний хакатон з AI/ML. Призовий фонд 50 000 грн.', en: '48-hour AI/ML hackathon. Prize pool 50,000 UAH.' },
    location: 'Корпус Д, коворкінг',
  },
  {
    id: 4,
    title: { uk: 'Наукова конференція «Радіоелектроніка та інформатика»', en: 'Scientific Conference "Radioelectronics and Informatics"' },
    date: '2026-04-10',
    endDate: '2026-04-12',
    type: 'science',
    location: 'Корпус А, конференц-зала',
  },
  {
    id: 5,
    title: { uk: 'Весняний спортивний фестиваль', en: 'Spring Sports Festival' },
    date: '2026-04-19',
    type: 'sport',
    location: 'Стадіон ХНУРЕ',
  },
  {
    id: 6,
    title: { uk: 'Початок вступної кампанії', en: 'Admission campaign start' },
    date: '2026-07-01',
    type: 'admission',
    description: { uk: 'Початок реєстрації електронних кабінетів та подання заяв.', en: 'Electronic registration and application submission begins.' },
  },
  {
    id: 7,
    title: { uk: 'Літня сесія', en: 'Summer examination session' },
    date: '2026-06-01',
    endDate: '2026-06-21',
    type: 'academic',
  },
  {
    id: 8,
    title: { uk: 'Концерт до Дня студента', en: 'Student Day Concert' },
    date: '2026-11-17',
    type: 'culture',
    location: 'Актова зала',
  },
];

export function getUpcomingEvents(count = 5): CalendarEvent[] {
  const now = new Date().toISOString().split('T')[0];
  return mockEvents
    .filter(e => e.date >= now)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, count);
}

export function getEventsByMonth(year: number, month: number): CalendarEvent[] {
  const prefix = `${year}-${String(month).padStart(2, '0')}`;
  return mockEvents.filter(e => e.date.startsWith(prefix));
}
