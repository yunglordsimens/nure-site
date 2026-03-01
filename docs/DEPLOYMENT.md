# Deployment Guide

## Вимоги

- Node.js 18+
- npm 9+
- Git

## Варіанти хостингу

### Vercel (рекомендовано)

1. Підключіть GitHub-репозиторій до Vercel
2. Vercel автоматично визначить Astro і налаштує build
3. Встановіть Environment Variables:
   - `PUBLIC_USE_MOCK=false`
   - `WP_API_URL=https://nure.ua/wp-json/wp/v2`
   - `WP_WEBHOOK_SECRET=ваш_секретний_ключ`
4. Скопіюйте Deploy Hook URL для webhook

### Netlify

1. Підключіть GitHub-репозиторій
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Environment Variables — як для Vercel

### Self-hosted (VPS)

```bash
git clone https://github.com/4rnbay/nure-site.git
cd nure-site
cp .env.example .env
# Відредагуйте .env
npm install
npm run build
# Результат у dist/ — покладіть за Nginx/Caddy
```

Приклад Nginx:
```nginx
server {
    listen 80;
    server_name nure.ua;
    root /var/www/nure-site/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /404.html;
    }

    # Cache static assets
    location ~* \.(css|js|woff2|webp|svg|png|jpg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## WordPress інтеграція

### Підключення до API

1. В `.env` встановіть `PUBLIC_USE_MOCK=false`
2. Перевірте що WordPress REST API доступний:
   ```bash
   curl https://nure.ua/wp-json/wp/v2/posts?per_page=1
   ```
3. Якщо API закритий — встановіть плагін "JWT Auth" або налаштуйте public access

### Налаштування Webhook

1. В WordPress встановіть плагін "WP Webhooks" або додайте в `functions.php`:
   ```php
   add_action('save_post', function($post_id) {
       wp_remote_post('https://ваш-сайт.vercel.app/api/webhook', [
           'body' => json_encode([
               'action' => 'save_post',
               'post_type' => get_post_type($post_id),
               'post_id' => $post_id,
           ]),
           'headers' => [
               'Content-Type' => 'application/json',
               'X-Webhook-Secret' => 'Bearer ваш_секретний_ключ',
           ],
       ]);
   });
   ```
2. Встановіть `DEPLOY_HOOK_URL` (з Vercel або Netlify) для автоматичної перебудови

## Моніторинг

Web Vitals автоматично логуються в консоль (dev mode). Для production:
1. Розкоментуйте analytics блок у `src/components/WebVitals.astro`
2. Встановіть `PUBLIC_ANALYTICS_URL` в `.env`

## Performance Budget

| Метрика | Бюджет | Поточний |
|---------|--------|----------|
| LCP | <2500ms | ~800ms |
| FID | <100ms | ~20ms |
| CLS | <0.1 | ~0.01 |
| FCP | <1800ms | ~600ms |
| TTFB | <800ms | ~100ms |
| JS Bundle | <10KB | ~5KB |
| Total Page | <200KB | ~80KB |
