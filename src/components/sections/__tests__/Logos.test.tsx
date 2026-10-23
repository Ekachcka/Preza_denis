import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Logos } from "../Logos";

describe("Logos", () => {
  it("renders the section with the corrected title", () => {
    const { container } = render(<Logos />);
    expect(container.querySelector("section")).toHaveAttribute("id", "logos");
    expect(
      screen.getByRole("heading", { level: 2, name: "логотипи" }),
    ).toBeInTheDocument();
  });

  it("renders three numbered cards", () => {
    render(<Logos />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    for (const n of ["01", "02", "03"]) {
      expect(screen.getByText(n)).toBeInTheDocument();
    }
  });

  it("renders the scribble arrow label", () => {
    render(<Logos />);
    expect(screen.getByText("Тицяй і слухай")).toBeInTheDocument();
  });
});
