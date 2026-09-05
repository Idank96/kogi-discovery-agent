import { describe, expect, it } from "vitest";

import { content } from "./content";
import { render } from "./entry-server";

describe("entry-server render()", () => {
  it("returns real markup, not an empty shell", () => {
    const html = render();
    expect(html).toContain(content.headlineLines[0]);
    expect(html).toContain(content.headlineLines[1]);
  });

  it("has no leftover TODO placeholders", () => {
    expect(render()).not.toMatch(/TODO/);
  });
});
