import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Problem } from "@/components/problem";

describe("Problem", () => {
  it("renders the headline", () => {
    render(<Problem />);
    expect(screen.getByRole("heading", { name: /more than what you eat/i })).toBeDefined();
  });

  it("renders all three stats", () => {
    render(<Problem />);
    expect(screen.getByText("50M+")).toBeDefined();
    expect(screen.getByText("$88.7B")).toBeDefined();
    expect(screen.getByText("0")).toBeDefined();
  });
});
