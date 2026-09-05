/**
 * Section components in one file rather than one-per-file under
 * components/ — see components/Transcript.tsx for the one section that
 * outgrew this file (its own rule: split out past ~40 lines or once a
 * section needs its own test).
 */
import type { Content, Feature } from "./content";

declare global {
  interface Window {
    goatcounter?: { count: (opts: { path: string; title?: string; event?: boolean }) => void };
  }
}

function mailtoHref(content: Content): string {
  const subject = encodeURIComponent(`Interested in ${content.product}`);
  return `mailto:${content.email}?subject=${subject}`;
}

function trackEmailClick(): void {
  window.goatcounter?.count({ path: "email-click", title: "Email CTA", event: true });
}

function EmailCta({ content, className }: { content: Content; className: string }) {
  return (
    <a href={mailtoHref(content)} className={className} onClick={trackEmailClick}>
      {content.cta}
    </a>
  );
}

export function Nav({ content }: { content: Content }) {
  return (
    <nav className="nav">
      <span className="nav-brand">{content.product}</span>
      {content.nav.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
      <EmailCta content={content} className="btn btn-primary" />
    </nav>
  );
}

export function Hero({ content }: { content: Content }) {
  return (
    <section className="hero">
      <h1 className="display">
        {content.headlineLines.map((line) => (
          <span key={line} className="line">
            {line}
          </span>
        ))}
      </h1>
      <p className="sub">{content.subhead}</p>
      <div className="row">
        <EmailCta content={content} className="btn btn-primary" />
      </div>
    </section>
  );
}

export function Stats({ content }: { content: Content }) {
  return (
    <section className="stats" aria-label="Sample discovery insights">
      <span className="kicker">{content.statsKicker}</span>
      <div className="grid">
        {content.stats.map((stat) => (
          <div key={stat.label}>
            <p className="stat-num">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  return (
    <div className="feature">
      <p className="f-num">{String(index + 1).padStart(2, "0")}</p>
      <h2 className="f-title">{feature.title}</h2>
      <p className="f-copy">{feature.copy}</p>
    </div>
  );
}

export function Benefits({ content }: { content: Content }) {
  return (
    <section className="features" aria-labelledby="benefits-heading">
      <span id="benefits-heading" className="kicker">
        {content.benefitsKicker}
      </span>
      {content.benefits.map((feature, i) => (
        <FeatureRow key={feature.title} feature={feature} index={i} />
      ))}
    </section>
  );
}

export function HowItWorks({ content }: { content: Content }) {
  return (
    <section className="features" id="product" aria-labelledby="steps-heading">
      <span id="steps-heading" className="kicker">
        {content.stepsKicker}
      </span>
      {content.steps.map((feature, i) => (
        <FeatureRow key={feature.title} feature={feature} index={i} />
      ))}
    </section>
  );
}

export function ClosingCta({ content }: { content: Content }) {
  return (
    <section className="close" id="start">
      <div className="wrap">
        <h3>
          {content.closingLines.map((line) => (
            <span key={line} className="line">
              {line}
            </span>
          ))}
        </h3>
        <div className="row">
          <EmailCta content={content} className="btn btn-ghost" />
        </div>
      </div>
    </section>
  );
}

export function Footer({ content }: { content: Content }) {
  return (
    <footer>
      <span>&copy; 2026 {content.product}</span>
      <span>{content.tagline}</span>
    </footer>
  );
}
