import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Cta } from "@/components/cta";

describe("Cta", () => {
  it("renders the headline", () => {
    render(<Cta />);
    expect(screen.getByRole("heading", { name: /take control/i })).toBeDefined();
  });

  it("renders both product links", () => {
    render(<Cta />);
    expect(screen.getByRole("link", { name: /try chewiq/i })).toBeDefined();
    expect(screen.getByRole("link", { name: /try honeydoiq/i })).toBeDefined();
  });
});
