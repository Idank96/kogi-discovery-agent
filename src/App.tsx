import { useEffect } from "react";

import { content } from "./content";
import { Benefits, ClosingCta, Footer, Hero, HowItWorks, Nav, Stats } from "./sections";
import { Transcript } from "./components/Transcript";

/**
 * Loads the GoatCounter script when content.goatcounter is set, and skips
 * it (no broken tag, no network request) when it's null. Static index.html
 * can't do this conditionally, so it lives here instead.
 */
function useGoatCounter(site: string | null): void {
  useEffect(() => {
    if (!site) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = "//gc.zgo.at/count.js";
    script.dataset["goatcounter"] = `https://${site}.goatcounter.com/count`;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [site]);
}

export default function App() {
  useGoatCounter(content.goatcounter);

  return (
    // The Modernist accent ramp (100-900) is baked into modernist.css at
    // content.accent's value, so overriding --color-accent here only
    // recolors the base tone — good enough while content.accent stays
    // this exact indigo, but a different hex would need the ramp
    // regenerated in modernist.css too.
    <div style={{ "--color-accent": content.accent } as React.CSSProperties}>
      <Nav content={content} />
      <div className="wrap">
        <Hero content={content} />
        <hr className="rule2" />
        <Stats content={content} />
        <hr className="rule2" />
        <Benefits content={content} />
        <hr className="rule2" />
        <HowItWorks content={content} />
        <Transcript content={content} />
      </div>
      <ClosingCta content={content} />
      <div className="wrap">
        <Footer content={content} />
      </div>
    </div>
  );
}
