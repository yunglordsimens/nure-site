
# KhNURE // DIGITAL ECOSYSTEM REDESIGN

A comprehensive, high-performance redesign of the **Kharkiv National University of Radio Electronics** web ecosystem. This architectural overhaul bridges the gap between the university's strong engineering legacy and modern web standards.

Conceived as a formal proposal by a 2024 Computer Science alumnus, the project prioritizes performance (Astro 5), accessibility, and headless CMS integration.

🔗 **[View Live Prototype](https://nure-site.vercel.app/)**
📊 **[View Project Dashboard & Audit](https://nure-site.vercel.app/audit)**

---

### / SYSTEM PREVIEW

> **Frontend Foundation.** Multilingual navigation, dynamic content rendering, and modern typographic hierarchy.
<br>
<img src="preview_khnure_main.gif" width="100%" alt="KhNURE Prototype Interaction" style="border-radius: 8px; margin-bottom: 20px;">

---

### / PERFORMANCE METRICS & SCALE

Unlike typical concept redesigns, this project is built for production scale with strict performance budgets.

* **Scale:** 35+ fully responsive pages, including 6 Faculty hubs and 10 Specialty templates.
* **Lighthouse Target:** 95+ (Performance & Accessibility).
* **Speed:** First Contentful Paint (FCP) **<1s** (compared to 3-6s on the current site).
* **Optimization:** JavaScript bundle size **<10KB** per page.

*(Full technical audit and roadmap available on the Project Dashboard).*

---

### / ARCHITECTURE & TECH STACK

Built for scale, speed, and seamless content management. The application uses a hybrid rendering approach (SSG + API routes) to deliver static pages alongside dynamic endpoints.

| Technology | Implementation Role |
| :--- | :--- |
| **Astro 5** | Core framework. Configured in hybrid mode for lightning-fast static pages. |
| **Headless WordPress** | CMS integration via REST API for news and announcements. |
| **TypeScript** | Strict type-safe data layers for APIs, specialties, and schedules. |
| **Tailwind CSS 4** | Utility-first styling engine with CSS custom properties for Dark/Light mode. |
| **CIST API Integration** | Custom connection to the university's scheduling system. |

---

### / KEY ENGINEERING FEATURES

* **Bilingual Architecture (i18n):** Deeply integrated translation layers (UA/EN) with automatic routing.
* **Component-Driven:** Built with modular Astro components, ensuring strict UI consistency.
* **Global Search & Filtering:** Client-side Cmd+K search and multi-tag filtering for university specialties.
* **SEO & Accessibility:** Automated `sitemap.xml`, semantic HTML schema (`EducationalOrganization`), and strict ARIA standards.

---

### / PROJECT PHASES

This is an ongoing initiative structured for a formal handover to the university administration.

- [x] **Phase 1:** Frontend Foundation & Typography
- [x] **Phase 2:** Content Structure & i18n Navigation
- [x] **Phase 3:** Infrastructure & External API Integrations (WP / CIST)
- [x] **Phase 4:** Polish, Accessibility Audit, and Documentation
- [ ] **Phase 5:** Formal Pitch & Launch *(Pending university access)*

> 📄 *Note: Formal pitch documentation, Content Manager guidelines, and Deployment instructions are available in the `/docs` directory.*

## / INSTALLATION

```bash
# Clone and install dependencies
git clone [https://github.com/yunglordsimens/nure-site.git](https://github.com/yunglordsimens/khnure-redesign.git)
cd nure-site
npm install

# Setup environment (Toggle PUBLIC_USE_MOCK=true/false)
cp .env.example .env

# Run local development server
npm run dev

```

## / CREDITS

**Maria Chernobay** — Lead Architect, Design & Frontend.
*BSc Computer Science, KhNURE '24.*
