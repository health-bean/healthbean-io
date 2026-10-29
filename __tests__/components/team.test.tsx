import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Team } from "@/components/team";

describe("Team", () => {
  it("renders both team members", () => {
    render(<Team />);
    expect(screen.getByText("Amy Mandell")).toBeDefined();
    expect(screen.getByText("Dee Byrne")).toBeDefined();
  });

  it("renders roles", () => {
    render(<Team />);
    expect(screen.getByText("Co-Founder")).toBeDefined();
    expect(screen.getByText("Co-Founder & CEO")).toBeDefined();
  });

  it("describes Amy as a Certified Health Coach in functional and alternative medicine", () => {
    render(<Team />);
    expect(screen.getByText(/Certified Health Coach/)).toBeDefined();
    expect(screen.getByText(/functional and alternative medicine/)).toBeDefined();
  });
});
