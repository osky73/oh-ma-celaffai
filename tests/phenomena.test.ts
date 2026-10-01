import { describe, expect, it } from "vitest";
import { phenomena } from "@/data/phenomena";

describe("struttura dei fenomeni", () => {
  it("sono 20 con slug unici", () => {
    expect(phenomena).toHaveLength(20);
    expect(new Set(phenomena.map((p) => p.slug)).size).toBe(20);
  });

  it("rispettano le macro-categorie della SPEC (10/5/2/3)", () => {
    const count = (c: string) => phenomena.filter((p) => p.category === c).length;
    expect(count("Slang")).toBe(10);
    expect(count("Creator")).toBe(5);
    expect(count("Meme e gesti")).toBe(2);
    expect(count("Moda e brand")).toBe(3);
  });

  it("ogni fenomeno ha una domanda (stem)", () => {
    for (const p of phenomena) expect(p.stem.length).toBeGreaterThan(0);
  });
});
