import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Nav } from "@/components/nav";

describe("Nav", () => {
  it("renders the brand name", () => {
    render(<Nav />);
    expect(screen.getByText("health bean")).toBeDefined();
  });

  it("renders all nav links", () => {
    render(<Nav />);
    expect(screen.getByRole("link", { name: /products/i })).toBeDefined();
    expect(screen.getByRole("link", { name: /about/i })).toBeDefined();
    expect(screen.getByRole("link", { name: /team/i })).toBeDefined();
  });

  it("has correct href anchors", () => {
    render(<Nav />);
    const productsLink = screen.getByRole("link", { name: /products/i });
    expect(productsLink.getAttribute("href")).toBe("#products");
  });
});
