@AGENTS.md

# Health Bean — healthbean.io

## Stack
Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript (strict), Vitest, Vercel

## Commands
- `npm run dev` — local dev server (Turbopack)
- `npm run build` — production build
- `npm test` — run vitest
- `npm run lint` — eslint

## Deploy
- Production: healthbean.io (Vercel, auto-deploys from main)

## Architecture
- Single-page marketing site — all sections composed in `app/page.tsx`
- Static rendering, no API routes, no database, no auth
- All text content lives in `lib/content.ts` — never hardcode strings in components
- Components are pure presentational, receive data via content imports

## Design System — "Warm Olive"
- Olive green brand palette + warm cream neutrals
- Product accent colors: teal (ChewIQ), amber (HoneyDoIQ)
- Fraunces (display/serif), Source Sans 3 (body/sans)
- All tokens defined in `app/globals.css` @theme block
- WCAG 2.1 AA compliant — all text/bg combos >= 4.5:1
- Zero inline styles, zero raw hex values in components
- Forced light mode (no dark mode)

## Key Conventions
- All colors via Tailwind tokens: `text-olive-900`, `bg-cream`, etc.
- Font classes: `font-display` (Fraunces), `font-body` (Source Sans 3)
- Components in `components/`, one per file, named export
- Tests in `__tests__/components/`, smoke tests for every component
- Security headers in `next.config.ts` (CSP, HSTS, X-Frame-Options, etc.)

## Sister Projects
- ChewIQ: `/Users/health-bean/Coding/chewiq` — Protocol management & healing platform
- HoneyDoIQ: `/Users/health-bean/Coding/honeydo-iq` — Smart home maintenance tracking
