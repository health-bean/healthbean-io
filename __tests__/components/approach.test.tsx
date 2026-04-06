import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Approach } from "@/components/approach";

describe("Approach (Showcase)", () => {
  it("renders the section headline", () => {
    render(<Approach />);
    expect(
      screen.getByRole("heading", { name: /intelligent health/i })
    ).toBeDefined();
  });

  it("renders the insight card", () => {
    render(<Approach />);
    expect(screen.getByText(/histamine/i)).toBeDefined();
    expect(screen.getByText("87%")).toBeDefined();
  });

  it("renders the timeline card", () => {
    render(<Approach />);
    expect(screen.getByText(/sauerkraut/i)).toBeDefined();
    expect(screen.getByText(/mold/i)).toBeDefined();
  });

  it("renders the home health card", () => {
    render(<Approach />);
    expect(screen.getByText("85")).toBeDefined();
    expect(screen.getByText("Replace HVAC Filter")).toBeDefined();
  });
});
