/**
 * The one file to edit per idea. Fixed-length tuples turn a missing entry
 * into a `tsc` compile error instead of a silently half-filled page — see
 * `npm run build`.
 *
 * Read CLAUDE.md before editing this file.
 */
export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  title: string;
  copy: string;
}

export interface Turn {
  speaker: "employee" | "agent";
  who: string;
  msg: string;
  time: string;
  savedIdea?: { idea: string; meta: string };
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Content {
  product: string;
  emoji: string;
  tagline: string;
  headline: string;
  headlineLines: [string, string];
  subhead: string;
  cta: string;
  email: string;
  nav: NavLink[];
  statsKicker: string;
  stats: [Stat, Stat, Stat, Stat];
  benefitsKicker: string;
  benefits: [Feature, Feature, Feature, Feature];
  stepsKicker: string;
  steps: [Feature, Feature, Feature];
  transcriptKicker: string;
  transcript: Turn[];
  closingLines: [string, string];
  accent: string;
  goatcounter: string | null;
  url: string;
}

export const content: Content = {
  product: "Kogi",
  emoji: "🔍",
  tagline: "AI product discovery for the enterprise",
  headline: "Your employees know which AI tool they need.",
  headlineLines: ["Your employees know", "which AI tool they need."],
  subhead:
    "Kogi is an AI agent your whole company talks to. It runs one-on-one discovery conversations with every employee, then turns the results into a ranked, costed roadmap of the AI products actually worth building.",
  cta: "Contact sales",
  email: "idan.kog@gmail.com",
  nav: [
    { label: "Product", href: "#product" },
    { label: "How it works", href: "#how" },
    { label: "Contact", href: "#start" },
  ],
  statsKicker: "What a discovery report looks like — illustrative figures",
  stats: [
    {
      value: "73%",
      label: "of employees want an AI tool nobody in leadership has asked them about",
    },
    { value: "12hrs", label: "of weekly busywork the top request would eliminate, per team" },
    { value: "4.2x", label: "average projected ROI on the requests that get funded" },
    { value: "1 week", label: "to interview every employee — no workshops, no surveys" },
  ],
  benefitsKicker: "What you get",
  benefits: [
    {
      title: "From the fog to the surface",
      copy: "Thousands of scattered frustrations, distilled into the handful of ideas actually worth building — instead of staying buried in inboxes and hallway complaints.",
    },
    {
      title: "Every team gets sharper",
      copy: "Not just the loudest department. Discovery reaches every employee and every team alike, so the efficiency gains compound across the whole company.",
    },
    {
      title: "One roadmap, not a hundred requests",
      copy: "Leadership stops fielding one-off asks in hallway conversations and starts working from a single, ranked list of what to build next.",
    },
    {
      title: "Adoption that's already earned",
      copy: "Employees were asked before the tool shipped, not handed something built without them — so they use it, instead of quietly ignoring it.",
    },
  ],
  stepsKicker: "How it works",
  steps: [
    {
      title: "Deploy in a week",
      copy: "Kogi drops into Slack or Teams and starts one-on-one discovery conversations with every employee — no scheduling, no facilitators, no survey fatigue.",
    },
    {
      title: "Discovery at scale",
      copy: "Structured interviews probe the daily friction behind each request, then cluster thousands of answers into a small number of real, buildable product ideas.",
    },
    {
      title: "A costed roadmap",
      copy: "Every idea arrives ranked by demand, hours saved and build cost, so your team funds the AI products employees will actually use — not the ones that sounded good in a meeting.",
    },
  ],
  transcriptKicker: "A sample discovery conversation",
  transcript: [
    {
      speaker: "employee",
      who: "Employee — Operations",
      msg: "Honestly? I spend two hours a day reformatting reports for the exec deck.",
      time: "9:14 AM",
    },
    {
      speaker: "agent",
      who: "Kogi",
      msg: "How many people on the team do that same reformatting, and how often?",
      time: "9:14 AM",
    },
    {
      speaker: "employee",
      who: "Employee — Operations",
      msg: "All six of us. Every Friday, without fail.",
      time: "9:15 AM",
    },
    {
      speaker: "agent",
      who: "Kogi",
      msg: "If you had an AI product that pulled straight from the source data into the exec deck template automatically — would that help, or am I missing something?",
      time: "9:15 AM",
    },
    {
      speaker: "employee",
      who: "Employee — Operations",
      msg: "You're missing that it also needs to flag any numbers that look off before it goes out.",
      time: "9:16 AM",
    },
    {
      speaker: "agent",
      who: "Kogi",
      msg: "Noted. So: an auto-formatter that builds the exec deck from source data and flags anomalies before it goes out.",
      time: "9:16 AM",
    },
    {
      speaker: "employee",
      who: "Employee — Operations",
      msg: "Great, thanks!",
      time: "9:16 AM",
    },
    {
      speaker: "agent",
      who: "Kogi",
      msg: "Thanks! If you have more ideas, I'm here.",
      time: "9:17 AM",
      savedIdea: {
        idea: "Exec deck auto-formatter with anomaly flagging",
        meta: "~12 hrs/week saved across the team",
      },
    },
  ],
  closingLines: ["Stop guessing which AI", "product to build."],
  accent: "#4f46e5",
  goatcounter: null,
  url: "https://discovery-agent.kogi-ai.com",
};
