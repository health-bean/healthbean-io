import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Hero } from "@/components/hero";

describe("Hero", () => {
  it("renders the headline", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { name: /better health/i })).toBeDefined();
  });

  it("renders both CTAs", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /explore our products/i })).toBeDefined();
    expect(screen.getByRole("link", { name: /our mission/i })).toBeDefined();
  });

  it("has correct CTA hrefs", () => {
    render(<Hero />);
    const productsCta = screen.getByRole("link", { name: /explore our products/i });
    expect(productsCta.getAttribute("href")).toBe("#products");
  });
});
