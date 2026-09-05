import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "./App";
import { content } from "./content";

describe("App", () => {
  it("renders the headline", () => {
    render(<App />);
    const h1 = screen.getByRole("heading", { level: 1 });
    for (const line of content.headlineLines) {
      expect(h1).toHaveTextContent(line);
    }
  });

  it("has a mailto CTA with the right address", () => {
    render(<App />);
    const links = screen.getAllByRole("link", { name: content.cta });
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link).toHaveAttribute("href", expect.stringContaining(`mailto:${content.email}`));
    }
  });

  it("has no leftover TODO placeholders", () => {
    render(<App />);
    expect(document.body.textContent).not.toMatch(/TODO/);
  });

  it("renders one transcript turn per content.transcript entry", () => {
    render(<App />);
    for (const turn of content.transcript) {
      expect(screen.getByText(turn.msg)).toBeInTheDocument();
    }
  });

  it("frames the stats row as illustrative, not measured results", () => {
    render(<App />);
    expect(screen.getByText(content.statsKicker)).toHaveTextContent(/illustrative/i);
  });
});
