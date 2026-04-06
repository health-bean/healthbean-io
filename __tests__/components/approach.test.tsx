import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Approach } from "@/components/approach";

describe("Approach", () => {
  it("renders the headline", () => {
    render(<Approach />);
    expect(screen.getByRole("heading", { name: /real data/i })).toBeDefined();
  });

  it("renders all three pillars", () => {
    render(<Approach />);
    expect(screen.getByText("AI-Powered Analysis")).toBeDefined();
    expect(screen.getByText("Built for Chronic Illness")).toBeDefined();
    expect(screen.getByText(/Body \+ Environment/)).toBeDefined();
  });
});
