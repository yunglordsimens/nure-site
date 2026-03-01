/**
 * WordPress REST API Client
 * 
 * Toggle between mock and live data:
 *   .env: PUBLIC_USE_MOCK=true   → mock data (default, no WP needed)
 *   .env: PUBLIC_USE_MOCK=false  → live WordPress API
 *   .env: WP_API_URL=https://nure.ua/wp-json/wp/v2
 *   .env: WP_WEBHOOK_SECRET=xxx  → for rebuild webhook
 */

const WP_API_URL = import.meta.env.WP_API_URL || 'https://nure.ua/wp-json/wp/v2';
const USE_MOCK = import.meta.env.PUBLIC_USE_MOCK !== 'false';

export interface NewsItem {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  tag: 'rankings' | 'science' | 'events' | 'university';
  image?: string;
  featured?: boolean;
}

export interface Program {
  code: string;
  name: { uk: string; en: string };
  degrees: ('bachelor' | 'master' | 'phd')[];
  faculty: string;
}

export interface Partner {
  name: string;
  url: string;
  logoUrl: string;
  tier: 'global' | 'regional' | 'international';
}

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  featured_media: number;
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
    'wp:term'?: Array<Array<{ slug: string; name: string }>>;
  };
}

function mapWPTagToTag(categories: string[]): NewsItem['tag'] {
  if (categories.some(c => c.includes('рейтинг') || c.includes('ranking'))) return 'rankings';
  if (categories.some(c => c.includes('наук') || c.includes('science'))) return 'science';
  if (categories.some(c => c.includes('подія') || c.includes('event'))) return 'events';
  return 'university';
}

function stripHTML(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\n+/g, ' ').trim();
}

function mapWPPost(post: WPPost): NewsItem {
  const cats = post._embedded?.['wp:term']?.[0]?.map(t => t.slug) || [];
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  return {
    id: post.id,
    slug: post.slug,
    title: stripHTML(post.title.rendered),
    excerpt: stripHTML(post.excerpt.rendered),
    content: post.content.rendered,
    date: post.date.split('T')[0],
    tag: mapWPTagToTag(cats),
    image,
  };
}

async function wpFetch<T>(endpoint: string): Promise<T | null> {
  try {
    const res = await fetch(`${WP_API_URL}${endpoint}`, {
      headers: { 'Accept': 'application/json' },
    });
    if (!res.ok) {
      console.error(`WP API ${res.status}: ${endpoint}`);
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error(`WP API error: ${endpoint}`, err);
    return null;
  }
}

// ─── Mock Data ───

export const mockNews: { uk: NewsItem[]; en: NewsItem[] } = {
  uk: [
    {
      id: 1,
      slug: 'nure-qs-europe-2026',
      title: 'ХНУРЕ у QS World University Rankings: Europe — 2026',
      excerpt: '28 січня британське рейтингове агентство Quacquarelli Symonds (QS) опублікувало третій випуск регіонального рейтингу QS World University Rankings: Europe — 2026.',
      date: '2026-01-28',
      tag: 'rankings',
      featured: true,
    },
    {
      id: 2,
      slug: 'the-natural-sciences',
      title: 'ХНУРЕ в THE: серед найкращих університетів світу з природничих наук',
      excerpt: 'За результатами THE World University Rankings by Subject — Natural Sciences 2025, ХНУРЕ увійшов до рейтингу 1001–1200 серед університетів світу.',
      date: '2026-01-12',
      tag: 'rankings',
    },
    {
      id: 3,
      slug: 'scopus-journal',
      title: 'Науковий журнал прийнятий до Scopus та категорії А',
      excerpt: 'Журнал «Innovative Technologies and Scientific Solutions for Industries» офіційно прийнятий до Scopus.',
      date: '2026-01-06',
      tag: 'science',
    },
    {
      id: 4,
      slug: 'education-career-kremenchuk',
      title: 'ХНУРЕ на виставці «Освіта та Кар\'єра» у Кременчуці',
      excerpt: 'Представники ХНУРЕ взяли участь у щорічній XXIII Міжрегіональній спеціалізованій виставці.',
      date: '2025-12-18',
      tag: 'events',
    },
  ],
  en: [
    {
      id: 1,
      slug: 'nure-qs-europe-2026',
      title: 'NURE in QS World University Rankings: Europe — 2026',
      excerpt: 'On January 28, the British rating agency QS published the third edition of the regional ranking QS World University Rankings: Europe — 2026.',
      date: '2026-01-28',
      tag: 'rankings',
      featured: true,
    },
    {
      id: 2,
      slug: 'the-natural-sciences',
      title: 'NURE in THE: among the best universities in natural sciences',
      excerpt: 'According to THE World University Rankings by Subject — Natural Sciences 2025, NURE entered the 1001–1200 ranking.',
      date: '2026-01-12',
      tag: 'rankings',
    },
    {
      id: 3,
      slug: 'scopus-journal',
      title: 'University\'s Scientific Journal Accepted into Scopus and Category A',
      excerpt: 'The open-access journal "Innovative Technologies and Scientific Solutions for Industries" has been officially accepted for Scopus.',
      date: '2026-01-06',
      tag: 'science',
    },
    {
      id: 4,
      slug: 'education-career-kremenchuk',
      title: 'NURE at the "Education and Career" Exhibition in Kremenchuk',
      excerpt: 'Representatives of NURE took part in the annual XXIII Interregional Specialized Exhibition.',
      date: '2025-12-18',
      tag: 'events',
    },
  ],
};

export const programs: Program[] = [
  { code: '121', name: { uk: 'Інженерія програмного забезпечення', en: 'Software Engineering' }, degrees: ['bachelor', 'master'], faculty: 'КН' },
  { code: '122', name: { uk: 'Комп\'ютерні науки', en: 'Computer Science' }, degrees: ['bachelor', 'master', 'phd'], faculty: 'КН' },
  { code: '126', name: { uk: 'Інформаційні системи та технології', en: 'Information Systems & Technologies' }, degrees: ['bachelor', 'master'], faculty: 'КН' },
  { code: '123', name: { uk: 'Комп\'ютерна інженерія', en: 'Computer Engineering' }, degrees: ['bachelor', 'master'], faculty: 'КІ' },
  { code: '124', name: { uk: 'Системний аналіз', en: 'System Analysis' }, degrees: ['bachelor', 'master'], faculty: 'КІ' },
  { code: '125', name: { uk: 'Кібербезпека', en: 'Cybersecurity' }, degrees: ['bachelor', 'master'], faculty: 'КБ' },
  { code: '172', name: { uk: 'Телекомунікації та радіотехніка', en: 'Telecommunications & Radio Engineering' }, degrees: ['bachelor', 'master', 'phd'], faculty: 'ІКМ' },
  { code: '151', name: { uk: 'Автоматизація та комп\'ютерно-інтегровані технології', en: 'Automation & Computer-Integrated Technologies' }, degrees: ['bachelor', 'master'], faculty: 'АМ' },
  { code: '171', name: { uk: 'Електроніка', en: 'Electronics' }, degrees: ['bachelor', 'master', 'phd'], faculty: 'ЕБ' },
  { code: '163', name: { uk: 'Біомедична інженерія', en: 'Biomedical Engineering' }, degrees: ['bachelor', 'master'], faculty: 'ЕБ' },
  { code: '186', name: { uk: 'Видавництво та поліграфія', en: 'Publishing & Printing' }, degrees: ['bachelor'], faculty: 'КН' },
  { code: '141', name: { uk: 'Електроенергетика', en: 'Electrical Power Engineering' }, degrees: ['bachelor', 'master'], faculty: 'АМ' },
];

export const partners: Partner[] = [
  { name: 'Microsoft', url: 'https://www.microsoft.com/', logoUrl: '/images/partners/microsoft.svg', tier: 'global' },
  { name: 'EPAM', url: 'https://www.epam.com/', logoUrl: '/images/partners/epam.svg', tier: 'global' },
  { name: 'GlobalLogic', url: 'https://www.globallogic.com/', logoUrl: '/images/partners/globallogic.svg', tier: 'global' },
  { name: 'Cisco', url: 'https://www.cisco.com/', logoUrl: '/images/partners/cisco.svg', tier: 'global' },
  { name: 'SoftServe', url: 'https://www.softserveinc.com/', logoUrl: '/images/partners/softserve.svg', tier: 'global' },
  { name: 'Sigma Software', url: 'https://sigma.software/', logoUrl: '/images/partners/sigma.svg', tier: 'global' },
  { name: 'NIX Solutions', url: 'https://www.nixsolutions.com/', logoUrl: '/images/partners/nix.svg', tier: 'regional' },
  { name: 'Gameloft', url: 'https://www.gameloft.com/', logoUrl: '/images/partners/gameloft.svg', tier: 'regional' },
  { name: 'DataArt', url: 'https://dataart.team/', logoUrl: '/images/partners/dataart.svg', tier: 'regional' },
  { name: 'Andersen', url: 'https://www.andersenlab.com/', logoUrl: '/images/partners/andersen.svg', tier: 'regional' },
  { name: 'Promodo', url: 'https://promodo.ua/', logoUrl: '/images/partners/promodo.svg', tier: 'regional' },
  { name: 'Erasmus+', url: 'https://ec.europa.eu/programmes/erasmus-plus/', logoUrl: '/images/partners/erasmus.svg', tier: 'international' },
  { name: 'IT Ukraine Association', url: 'https://itukraine.org.ua/', logoUrl: '/images/partners/itukraine.svg', tier: 'international' },
  { name: 'IT Cluster Kharkiv', url: 'https://it-kharkiv.com/', logoUrl: '/images/partners/itcluster.svg', tier: 'international' },
];

// ─── Public API ───

export async function getNews(lang: 'uk' | 'en' = 'uk'): Promise<NewsItem[]> {
  if (USE_MOCK) return mockNews[lang];

  const posts = await wpFetch<WPPost[]>(`/posts?per_page=10&_embed&lang=${lang}`);
  if (!posts) return mockNews[lang]; // fallback
  return posts.map(mapWPPost);
}

export async function getNewsPost(slug: string, lang: 'uk' | 'en' = 'uk'): Promise<NewsItem | null> {
  if (USE_MOCK) {
    return mockNews[lang].find(n => n.slug === slug) || null;
  }

  const posts = await wpFetch<WPPost[]>(`/posts?slug=${slug}&_embed&lang=${lang}`);
  if (!posts || posts.length === 0) return null;
  return mapWPPost(posts[0]);
}

export async function getFeaturedNews(lang: 'uk' | 'en' = 'uk'): Promise<NewsItem | undefined> {
  const news = await getNews(lang);
  return news.find(n => n.featured) || news[0];
}

export function getPrograms(): Program[] {
  return programs;
}

export function getPartnersByTier(tier: Partner['tier']): Partner[] {
  return partners.filter(p => p.tier === tier);
}

export function formatDate(dateStr: string, lang: 'uk' | 'en' = 'uk'): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === 'uk' ? 'uk-UA' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
