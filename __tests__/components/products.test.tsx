import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Products } from "@/components/products";

describe("Products", () => {
  it("renders section headline", () => {
    render(<Products />);
    expect(screen.getByRole("heading", { name: /two tools/i })).toBeDefined();
  });

  it("renders ChewIQ card", () => {
    render(<Products />);
    expect(screen.getByText("Your Intelligent Protocol Coach")).toBeDefined();
  });

  it("renders HoneyDoIQ card", () => {
    render(<Products />);
    expect(screen.getByText("Smart Home Health Tracking")).toBeDefined();
  });

  it("renders all feature bullets for both products", () => {
    render(<Products />);
    expect(screen.getByText(/correlation engine/i)).toBeDefined();
    expect(screen.getByText(/100\+ maintenance/i)).toBeDefined();
  });
});
