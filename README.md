# bzhoff.com

Personal website for Brandon Z. Hoff, founder of RUDI.

This site is for Brandon's public-facing work: speaking, keynotes, advisory, media kit, essays, press credibility, and founder story. Organizational AI adoption leads should be routed to RUDI/learnrudi.com.

Remote:

```text
https://github.com/rudijetson/bzhoff.git
```

## Brand Role

Use this site for:

- keynote and conference speaking
- workshops and executive briefings
- founder/operator advisory
- media kit and press references
- essays and public point of view
- proof that points back to RUDI client work

Use learnrudi.com for:

- strategic AI adoption
- enterprise AI training
- implementation consulting
- readiness assessment
- responsible AI governance
- organizational pilots and resources

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Radix UI
- MDX-ready content support

## Commands

```bash
npm install
npm run dev
npm run build
npm run start
```

## Current App Structure

```text
app/
├── page.tsx
├── about/page.tsx
├── essays/
├── privacy/page.tsx
├── api/facebook-deletion/route.ts
├── components/
├── data/
├── robots.ts
└── sitemap.ts
```

## Target App Structure

```text
app/
├── page.tsx                          # Brandon positioning and primary CTAs
├── about/page.tsx                    # founder story and credibility
├── speaking/page.tsx                 # keynotes, talks, workshops
├── advisory/page.tsx                 # strategy/advisory work with Brandon
├── media-kit/page.tsx                # bio, headshots, intros, links
├── essays/page.tsx                   # writing and public point of view
├── contact/page.tsx                  # booking and inquiry path
├── data/                             # profile, speaking, press, timeline, proof data
└── api/                              # site-specific API routes only
```

## Source Material

Canonical founder/profile source lives at:

```text
/Users/hoff/dev/RUDI/content/
```

Useful source folders:

- `profile/` - bios, CV, narrative, About-page source
- `proof/` - RUDI framework and case studies
- `media/` - headshots, event photos, screenshots, manifests
- `press/` - articles and local press archives
- `events/` - event-specific bios and material
- `sendable/` - ready-to-send assets

Existing standalone HTML references that should be integrated into this app:

- `/Users/hoff/dev/RUDI/content/sendable/media-kit/`
- `/Users/hoff/dev/RUDI/content/sendable/work-with-me/`

## Cleanup Notes

- `.next/`, `node_modules/`, and `tsconfig.tsbuildinfo` are rebuildable local artifacts.
- `.claude/` is local agent state and should not be committed.
- Keep profile facts aligned with `content/`.
