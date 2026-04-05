import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Approach } from "@/components/approach";

describe("Approach", () => {
  it("renders the headline", () => {
    render(<Approach />);
    expect(screen.getByRole("heading", { name: /every layer/i })).toBeDefined();
  });

  it("renders all three pillars", () => {
    render(<Approach />);
    expect(screen.getByText("AI-Powered")).toBeDefined();
    expect(screen.getByText("Patient-First")).toBeDefined();
    expect(screen.getByText("Holistic")).toBeDefined();
  });
});
