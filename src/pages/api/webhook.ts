import type { APIRoute } from 'astro';

const WEBHOOK_SECRET = import.meta.env.WP_WEBHOOK_SECRET || '';
const DEPLOY_HOOK = import.meta.env.VERCEL_DEPLOY_HOOK || '';

export const POST: APIRoute = async ({ request }) => {
  const secret = request.headers.get('X-Webhook-Secret') || '';
  
  if (!WEBHOOK_SECRET) {
    return new Response(JSON.stringify({ error: 'Webhook not configured' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
  }

  if (secret !== WEBHOOK_SECRET) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
  }

  let payload: any = {};
  try { payload = await request.json(); } catch {}

  console.log(`[Webhook] action=${payload?.action || 'ping'}, type=${payload?.post_type || '-'}`);

  if (DEPLOY_HOOK) {
    try {
      const res = await fetch(DEPLOY_HOOK, { method: 'POST' });
      if (!res.ok) return new Response(JSON.stringify({ error: 'Deploy hook failed' }), { status: 502, headers: { 'Content-Type': 'application/json' } });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Deploy hook unreachable' }), { status: 502, headers: { 'Content-Type': 'application/json' } });
    }
  }

  return new Response(JSON.stringify({ ok: true, timestamp: new Date().toISOString(), rebuild: DEPLOY_HOOK ? 'triggered' : 'no hook' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
};

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({ status: 'ok', webhook: WEBHOOK_SECRET ? 'configured' : 'pending', deploy_hook: DEPLOY_HOOK ? 'configured' : 'pending' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
};
