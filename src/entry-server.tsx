/**
 * SSR entry used only at build time by scripts/prerender.mjs — never shipped
 * to the browser. Renders the exact same <App/> the client hydrates over, so
 * there's one component tree to maintain, not two.
 *
 * renderToStaticMarkup (not renderToString) because main.tsx does a plain
 * createRoot(...).render(...) rather than hydrateRoot(...) — see its comment
 * for why a full client re-render is fine here — so there's no need for the
 * data-reactroot hydration markers renderToString would add.
 */
import { renderToStaticMarkup } from "react-dom/server";

import App from "./App";

export function render(): string {
  return renderToStaticMarkup(<App />);
}
