import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Cta } from "@/components/cta";

describe("Cta", () => {
  it("renders the headline", () => {
    render(<Cta />);
    expect(
      screen.getByRole("heading", { name: /first to know/i })
    ).toBeDefined();
  });

  it("renders the early access form", () => {
    render(<Cta />);
    expect(screen.getAllByPlaceholderText(/email/i).length).toBeGreaterThan(0);
  });
});
