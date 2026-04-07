import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Hero } from "@/components/hero";

describe("Hero", () => {
  it("renders the brand name in nav", () => {
    render(<Hero />);
    expect(screen.getByText("Health Bean")).toBeDefined();
  });

  it("renders the pattern detected badge", () => {
    render(<Hero />);
    expect(screen.getByText("Pattern Detected")).toBeDefined();
  });
});
