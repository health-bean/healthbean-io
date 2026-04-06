import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Connection } from "@/components/connection";

describe("Connection", () => {
  it("renders the quote", () => {
    render(<Connection />);
    expect(screen.getByText(/navigate chronic illness alone/i)).toBeDefined();
  });
});
