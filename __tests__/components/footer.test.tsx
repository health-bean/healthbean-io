import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "@/components/footer";

describe("Footer", () => {
  it("renders copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/health bean/i)).toBeDefined();
  });
});
