import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Problem } from "@/components/problem";

describe("Problem", () => {
  it("renders the headline", () => {
    render(<Problem />);
    expect(screen.getByRole("heading", { name: /doing everything right/i })).toBeDefined();
  });

  it("renders stats", () => {
    render(<Problem />);
    expect(screen.getByText("50M+")).toBeDefined();
    expect(screen.getByText("Billions")).toBeDefined();
  });

  it("renders the updated problem body", () => {
    render(<Problem />);
    expect(screen.getByText(/mold and mycotoxin exposure/i)).toBeDefined();
  });
});
