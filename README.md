# idea-bootstrap

Duplicate-and-ship landing page template. One idea per copy.

```bash
cp -R ~/Scripts/idea-bootstrap ~/Scripts/<my-idea> && cd ~/Scripts/<my-idea>
claude   # "read CLAUDE.md, the idea is: <one paragraph>"
npm install && npm run dev      # http://localhost:5173
./ship.sh <my-idea>             # live on GitHub Pages in ~1 min
```

Stack: React 19 + TypeScript + Vite, plain CSS token palette, Vitest — same
choices as `Opsfleet/agentic-bootstrap`'s `app/ui`. No form backend (mailto
only), no CSS framework, no e2e layer. See `CLAUDE.md` for what to edit and
what not to add.

**The page is not the validation — the traffic is.** After it's live, the real
next step is sending the link to 10 named people, one at a time, not waiting
for it to be found.
