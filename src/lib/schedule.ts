/**
 * CIST Schedule Integration
 * 
 * CIST API: https://cist.nure.ua/ias/app/tt/
 * When university provides API access, set:
 *   .env: CIST_API_URL=https://cist.nure.ua/ias/app/tt
 *   .env: PUBLIC_USE_MOCK=false
 * 
 * The mock data below simulates a week of classes for demo purposes.
 */

const CIST_API_URL = import.meta.env.CIST_API_URL || 'https://cist.nure.ua/ias/app/tt';
const USE_MOCK = import.meta.env.PUBLIC_USE_MOCK !== 'false';

export interface ScheduleGroup {
  id: number;
  name: string;
  faculty: string;
}

export interface ScheduleLesson {
  id: number;
  subject: string;
  type: 'lecture' | 'practice' | 'lab';
  teacher: string;
  room: string;
  building: string;
  startTime: string; // "08:30"
  endTime: string;   // "10:05"
  day: number;       // 1=Mon ... 6=Sat
  week: 1 | 2;      // odd/even week
}

export interface ScheduleDay {
  dayNum: number;
  dayName: string;
  lessons: ScheduleLesson[];
}

const dayNames: Record<number, { uk: string; en: string }> = {
  1: { uk: 'Понеділок', en: 'Monday' },
  2: { uk: 'Вівторок', en: 'Tuesday' },
  3: { uk: 'Середа', en: 'Wednesday' },
  4: { uk: 'Четвер', en: 'Thursday' },
  5: { uk: 'П\'ятниця', en: 'Friday' },
  6: { uk: 'Субота', en: 'Saturday' },
};

const typeLabels: Record<string, { uk: string; en: string; color: string }> = {
  lecture: { uk: 'Лекція', en: 'Lecture', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400' },
  practice: { uk: 'Практика', en: 'Practice', color: 'bg-green-500/10 text-green-600 dark:text-green-400' },
  lab: { uk: 'Лабораторна', en: 'Lab', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400' },
};

export function getTypeLabel(type: string, lang: 'uk' | 'en' = 'uk') {
  return typeLabels[type] || typeLabels.lecture;
}

export function getDayName(day: number, lang: 'uk' | 'en' = 'uk'): string {
  return dayNames[day]?.[lang] || '';
}

// ─── Mock Groups ───
export const mockGroups: ScheduleGroup[] = [
  { id: 10306631, name: 'ПЗПІ-23-1', faculty: 'КН' },
  { id: 10306632, name: 'ПЗПІ-23-2', faculty: 'КН' },
  { id: 10306633, name: 'ПЗПІ-23-3', faculty: 'КН' },
  { id: 10306641, name: 'КН-23-1', faculty: 'КН' },
  { id: 10306651, name: 'КІБС-23-1', faculty: 'КБ' },
  { id: 10306661, name: 'ІКІ-23-1', faculty: 'ІКМ' },
  { id: 10306671, name: 'АЕІТ-23-1', faculty: 'АМ' },
  { id: 10306681, name: 'БМІ-23-1', faculty: 'ЕБ' },
];

// ─── Mock Schedule (ПЗПІ-23-1, week 1) ───
const mockLessons: ScheduleLesson[] = [
  { id: 1, subject: 'Об\'єктно-орієнтоване програмування', type: 'lecture', teacher: 'Дудар З.В.', room: '285', building: 'Д', startTime: '08:30', endTime: '10:05', day: 1, week: 1 },
  { id: 2, subject: 'Бази даних', type: 'practice', teacher: 'Шматков С.І.', room: '415', building: 'Д', startTime: '10:25', endTime: '12:00', day: 1, week: 1 },
  { id: 3, subject: 'Дискретна математика', type: 'lecture', teacher: 'Іванов О.П.', room: '307', building: 'А', startTime: '08:30', endTime: '10:05', day: 2, week: 1 },
  { id: 4, subject: 'Web-програмування', type: 'lab', teacher: 'Петренко А.М.', room: '512', building: 'Д', startTime: '10:25', endTime: '12:00', day: 2, week: 1 },
  { id: 5, subject: 'Алгоритми та структури даних', type: 'lecture', teacher: 'Бодянський Є.В.', room: '285', building: 'Д', startTime: '12:20', endTime: '13:55', day: 2, week: 1 },
  { id: 6, subject: 'Комп\'ютерні мережі', type: 'lecture', teacher: 'Безрук В.М.', room: '210', building: 'А', startTime: '08:30', endTime: '10:05', day: 3, week: 1 },
  { id: 7, subject: 'Об\'єктно-орієнтоване програмування', type: 'lab', teacher: 'Дудар З.В.', room: '513', building: 'Д', startTime: '10:25', endTime: '12:00', day: 3, week: 1 },
  { id: 8, subject: 'Англійська мова', type: 'practice', teacher: 'Сидоренко Л.К.', room: '305', building: 'В', startTime: '08:30', endTime: '10:05', day: 4, week: 1 },
  { id: 9, subject: 'Алгоритми та структури даних', type: 'practice', teacher: 'Бодянський Є.В.', room: '415', building: 'Д', startTime: '10:25', endTime: '12:00', day: 4, week: 1 },
  { id: 10, subject: 'Фізика', type: 'lecture', teacher: 'Коваленко В.С.', room: '101', building: 'А', startTime: '08:30', endTime: '10:05', day: 5, week: 1 },
  { id: 11, subject: 'Web-програмування', type: 'practice', teacher: 'Петренко А.М.', room: '512', building: 'Д', startTime: '10:25', endTime: '12:00', day: 5, week: 1 },
];

// ─── Live API calls (ready for production) ───

async function cistFetch<T>(endpoint: string): Promise<T | null> {
  try {
    const res = await fetch(`${CIST_API_URL}${endpoint}`, {
      headers: { 'Accept': 'application/json' },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

export async function getGroups(): Promise<ScheduleGroup[]> {
  if (USE_MOCK) return mockGroups;
  
  const data = await cistFetch<any>('/P_API_GROUP_JSON');
  if (!data?.university?.faculties) return mockGroups;
  
  const groups: ScheduleGroup[] = [];
  for (const faculty of data.university.faculties) {
    for (const dir of faculty.directions || []) {
      for (const group of dir.groups || []) {
        groups.push({
          id: group.id,
          name: group.name,
          faculty: faculty.short_name,
        });
      }
    }
  }
  return groups.length > 0 ? groups : mockGroups;
}

export async function getSchedule(groupId: number): Promise<ScheduleLesson[]> {
  // Always return an array, even in error cases
  if (USE_MOCK) return [...mockLessons]; // Return a copy to avoid mutations
  
  try {
    const now = Math.floor(Date.now() / 1000);
    const weekLater = now + 7 * 86400;
    const data = await cistFetch<any>(`/P_API_EVENT_JSON?timetable_id=${groupId}&type_id=1&time_from=${now}&time_to=${weekLater}`);
    
    // Check if data and events exist and are arrays
    if (!data || !Array.isArray(data.events)) {
      console.warn('No events data received from API, using mock data');
      return [...mockLessons];
    }
    
    // Map events to ScheduleLesson format
    const lessons = data.events.map((e: any, i: number) => ({
      id: i,
      subject: e.subject_title || 'Unknown',
      type: e.type === 0 ? 'lecture' : e.type === 1 ? 'practice' : 'lab',
      teacher: e.teachers?.[0]?.full_name || '',
      room: e.auditory || '',
      building: '',
      startTime: new Date(e.start_time * 1000).toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' }),
      endTime: new Date(e.end_time * 1000).toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' }),
      day: new Date(e.start_time * 1000).getDay() || 7,
      week: 1,
    }));
    
    return lessons.length > 0 ? lessons : [...mockLessons];
  } catch (error) {
    console.error('Error fetching schedule:', error);
    return [...mockLessons];
  }
}

export function groupByDay(lessons: ScheduleLesson[] | null | undefined, lang: 'uk' | 'en' = 'uk'): ScheduleDay[] {
  // Ensure lessons is an array
  if (!lessons || !Array.isArray(lessons)) {
    console.warn('Invalid lessons data provided to groupByDay, returning empty array');
    return [];
  }
  
  const days = new Map<number, ScheduleLesson[]>();
  for (const lesson of lessons) {
    if (!days.has(lesson.day)) days.set(lesson.day, []);
    days.get(lesson.day)!.push(lesson);
  }
  
  return Array.from(days.entries())
    .sort(([a], [b]) => a - b)
    .map(([dayNum, lessons]) => ({
      dayNum,
      dayName: getDayName(dayNum, lang),
      lessons: lessons.sort((a, b) => a.startTime.localeCompare(b.startTime)),
    }));
}