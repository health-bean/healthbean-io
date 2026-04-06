import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Hero } from "@/components/hero";

describe("Hero", () => {
  it("renders the headline", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /everyone deserves/i })
    ).toBeDefined();
  });

  it("renders the early access form", () => {
    render(<Hero />);
    expect(screen.getByPlaceholderText(/email/i)).toBeDefined();
  });
});
