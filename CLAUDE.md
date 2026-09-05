# idea-bootstrap — instructions for the session working in this copy

This is a duplicated copy of `idea-bootstrap`, a landing-page template. Your job
is to fill it in for one specific idea and ship it — not to rebuild it.

## 1. Ask three things before writing anything

- Who is this for, specifically?
- What's the pain, in their own words (not "efficiency" or "productivity")?
- What happens after someone emails — what do they get back?

## 2. Edit exactly two files

- `src/content.ts` — every `TODO` value. `problems` and `steps` are fixed-length
  tuples; `tsc` will refuse to build if one is missing.
- `index.html` — the four lines marked in a comment near the top: `<title>`,
  the favicon emoji, and the three `og:`/`twitter:` meta tags. These can't be
  driven by `content.ts` because OG scrapers and the browser tab read this file
  directly, not the rendered app.

Do not add sections, files, dependencies, or restructure anything else.

## 3. Copy rules

- Headline states the **outcome for the user**, not the technology. Not "an
  AI-powered platform for X" — what changes for them.
- Subhead names who it's for, in one sentence.
- The three problems are written in the reader's own words — the way they'd
  describe the pain to a friend, not the way a spec describes a gap.
- No "revolutionary", no invented testimonials, no fabricated metrics or
  customer counts, no fake logos.

## 4. Branding budget

Set `content.accent` to something that isn't the default blue (`#2f5bd7`). A
different hex is the entire branding budget for a landing page — don't ask for
a logo, don't add a font.

## 5. GoatCounter (optional, off by default)

`content.goatcounter` is `null` by default — no script loads, no request fires.
To turn it on: create a free site at goatcounter.com, then set
`content.goatcounter` to its subdomain (the part before `.goatcounter.com`).
Never leave it half-configured — it's either a real subdomain or `null`.

## 6. Verify, then ship

```bash
npm install
npm run dev        # http://localhost:5173 — look at it
npm test            # must pass: no leftover TODOs, mailto CTA present
./ship.sh <repo-name>
```

`ship.sh` runs `npm ci && npm run build && npm test` before creating anything,
so a broken page fails locally, not in CI. Report the printed URL back to Idan
when it's done — Pages takes ~1 minute to build after the push.

## 7. Do not add unless Idan explicitly asks

Tailwind or any CSS framework, a component library, a form backend (Formspree
etc.), a router, a cookie banner, a pricing table, a newsletter signup, more
tests, a CMS. All of these cost more than this page needs to answer one
question: does anyone want this?
