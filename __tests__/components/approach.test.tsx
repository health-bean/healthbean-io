import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Approach } from "@/components/approach";

describe("Approach (Showcase)", () => {
  it("renders the section label", () => {
    render(<Approach />);
    expect(screen.getByText(/see it in action/i)).toBeDefined();
  });

  it("renders the insight card with oxalate pattern", () => {
    render(<Approach />);
    expect(screen.getByText(/high oxalate/i)).toBeDefined();
    expect(screen.getByText("Spinach")).toBeDefined();
    expect(screen.getByText("Almonds")).toBeDefined();
  });

  it("renders the timeline card", () => {
    render(<Approach />);
    expect(screen.getByText(/sauerkraut/i)).toBeDefined();
    expect(screen.getByText(/mold/i)).toBeDefined();
  });

  it("tracks the menstrual cycle", () => {
    render(<Approach />);
    expect(screen.getByText(/luteal phase/i)).toBeDefined();
  });

  it("does not show old product badges on the example cards", () => {
    render(<Approach />);
    expect(screen.queryByText("ChewIQ")).toBeNull();
    expect(screen.queryByText("HoneyDoIQ")).toBeNull();
  });

  it("renders the home health card with score and sub-scores", () => {
    render(<Approach />);
    expect(screen.getByText("85")).toBeDefined();
    expect(screen.getByText("92%")).toBeDefined();
    expect(screen.getByText("Replace HVAC Filter")).toBeDefined();
  });
});
