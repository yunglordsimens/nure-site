import type { Lang } from './i18n';

export interface NewsArticle {
  id: number;
  slug: string;
  title: { uk: string; en: string };
  excerpt: { uk: string; en: string };
  content: { uk: string; en: string };
  date: string;
  tag: string;
  image?: string;
  imageCaption?: { uk: string; en: string };
  author?: string;
  related?: string[];
}

export const articles: Record<string, NewsArticle> = {
  'nure-qs-europe-2026': {
    id: 1,
    slug: 'nure-qs-europe-2026',
    title: {
      uk: 'ХНУРЕ у QS World University Rankings: Europe — 2026',
      en: 'NURE in QS World University Rankings: Europe — 2026',
    },
    excerpt: {
      uk: '28 січня британське рейтингове агентство Quacquarelli Symonds (QS) опублікувало третій випуск регіонального рейтингу QS World University Rankings: Europe — 2026.',
      en: 'On January 28, the British rating agency Quacquarelli Symonds (QS) published the third release of the QS World University Rankings: Europe — 2026.',
    },
    content: {
      uk: `<p>28 січня британське рейтингове агентство Quacquarelli Symonds (QS) опублікувало третій випуск регіонального рейтингу QS World University Rankings: Europe — 2026.</p>

<p>ХНУРЕ вкотре підтвердив свої позиції серед найкращих університетів Європи. Рейтинг оцінює заклади вищої освіти за кількома ключовими показниками:</p>

<ul>
<li><strong>Академічна репутація</strong> — експертна оцінка якості досліджень та викладання</li>
<li><strong>Репутація серед роботодавців</strong> — оцінка підготовки випускників до ринку праці</li>
<li><strong>Цитування наукових публікацій</strong> — вплив наукових досліджень університету</li>
<li><strong>Міжнародна мобільність</strong> — частка іноземних студентів та викладачів</li>
</ul>

<p>Ректор ХНУРЕ зазначив: «Це результат системної роботи всього колективу університету. Ми продовжуємо розвивати міжнародне співробітництво, покращувати якість наукових досліджень та впроваджувати інноваційні підходи до навчання».</p>

<p>ХНУРЕ є одним з небагатьох технічних університетів України, які стабільно присутні у міжнародних рейтингах. Університет також входить до рейтингів Times Higher Education та має публікації, індексовані у Scopus.</p>`,
      en: `<p>On January 28, the British rating agency Quacquarelli Symonds (QS) published the third release of the QS World University Rankings: Europe — 2026.</p>

<p>NURE has once again confirmed its position among the best universities in Europe. The ranking evaluates higher education institutions across several key indicators:</p>

<ul>
<li><strong>Academic Reputation</strong> — expert assessment of research and teaching quality</li>
<li><strong>Employer Reputation</strong> — assessment of graduate preparedness for the job market</li>
<li><strong>Citations per Publication</strong> — impact of the university's scientific research</li>
<li><strong>International Mobility</strong> — share of international students and faculty</li>
</ul>

<p>NURE is one of the few technical universities in Ukraine that consistently appears in international rankings. The university is also featured in Times Higher Education rankings and has publications indexed in Scopus.</p>`,
    },
    date: '2026-01-28',
    tag: 'rankings',
    image: '/images/news/qs-ranking.jpg',
    imageCaption: {
      uk: 'Церемонія оголошення результатів QS World University Rankings',
      en: 'QS World University Rankings announcement ceremony',
    },
    related: ['the-natural-sciences', 'scopus-journal'],
  },
  'the-natural-sciences': {
    id: 2,
    slug: 'the-natural-sciences',
    title: {
      uk: 'ХНУРЕ вперше увійшов у THE Natural Sciences та покращив позиції у двох інших галузях',
      en: 'NURE Ranked in THE Natural Sciences for the First Time',
    },
    excerpt: {
      uk: '21 січня Times Higher Education опублікував предметні рейтинги.',
      en: 'On 21 January, Times Higher Education published its subject rankings.',
    },
    content: {
      uk: `<p>21 січня 2026 року Times Higher Education (THE) опублікував оновлені предметні рейтинги World University Rankings by Subject.</p>

<p>ХНУРЕ вперше увійшов до рейтингу за напрямом Natural Sciences (природничі науки), що підтверджує зростання якості фундаментальних досліджень університету.</p>

<p>Крім того, ХНУРЕ покращив свої позиції у двох інших предметних рейтингах THE — Computer Science та Engineering, зміцнивши свій статус як провідного технічного університету України.</p>`,
      en: `<p>On January 21, 2026, Times Higher Education (THE) published updated World University Rankings by Subject.</p>

<p>NURE entered the Natural Sciences ranking for the first time, confirming the growing quality of the university's fundamental research.</p>

<p>Additionally, NURE improved its positions in two other THE subject rankings — Computer Science and Engineering, strengthening its status as a leading technical university in Ukraine.</p>`,
    },
    date: '2026-01-21',
    tag: 'science',
    related: ['nure-qs-europe-2026', 'scopus-journal'],
  },
  'scopus-journal': {
    id: 3,
    slug: 'scopus-journal',
    title: {
      uk: 'Науковий журнал університету прийнято до Scopus та категорії А',
      en: "University's Scientific Journal Accepted into Scopus and Category A",
    },
    excerpt: {
      uk: 'Відкритий журнал «Innovative Technologies and Scientific Solutions for Industries» офіційно прийнято до Scopus.',
      en: 'The open-access journal "Innovative Technologies and Scientific Solutions for Industries" has been officially accepted for Scopus.',
    },
    content: {
      uk: `<p>Науковий журнал ХНУРЕ «Innovative Technologies and Scientific Solutions for Industries» (ITSSI) отримав офіційне підтвердження про включення до міжнародної наукометричної бази даних Scopus.</p>

<p>Одночасно журнал отримав категорію А у переліку наукових фахових видань України. Це найвищий рівень визнання для наукового видання в Україні.</p>

<p>Головний редактор журналу зазначив, що це досягнення відкриває нові можливості для українських науковців публікувати результати своїх досліджень у визнаному міжнародному виданні, не виїжджаючи за кордон.</p>`,
      en: `<p>NURE's scientific journal "Innovative Technologies and Scientific Solutions for Industries" (ITSSI) received official confirmation of inclusion in the international Scopus database.</p>

<p>Simultaneously, the journal received Category A status in the list of professional scientific publications of Ukraine — the highest recognition level for a scientific publication in the country.</p>`,
    },
    date: '2026-01-06',
    tag: 'science',
    related: ['nure-qs-europe-2026', 'the-natural-sciences'],
  },
};

export function getArticle(slug: string): NewsArticle | undefined {
  return articles[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(articles);
}
