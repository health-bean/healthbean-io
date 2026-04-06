import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Products } from "@/components/products";

describe("Products", () => {
  it("renders section headline", () => {
    render(<Products />);
    expect(screen.getByRole("heading", { name: /two platforms/i })).toBeDefined();
  });

  it("renders ChewIQ card", () => {
    render(<Products />);
    expect(screen.getByText("The Protocol Management & Healing Platform")).toBeDefined();
  });

  it("renders HoneyDoIQ card", () => {
    render(<Products />);
    expect(screen.getByText("Smart Preventive Home Maintenance")).toBeDefined();
  });

  it("renders key features for both products", () => {
    render(<Products />);
    expect(screen.getByText(/correlation engine/i)).toBeDefined();
    expect(screen.getByText(/100\+ maintenance/i)).toBeDefined();
  });
});
