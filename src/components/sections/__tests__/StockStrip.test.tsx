import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StockStrip } from "../StockStrip";

describe("StockStrip", () => {
  it("renders both text paragraphs", () => {
    render(<StockStrip />);
    expect(
      screen.getByText(
        "Я писав стокову музику в різних стилях таких як Corporate, Funk, Pop, Disco, Cinematic, Rock, Lo-Fi",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Також трохи писав аудіо логотипи (Logo)"),
    ).toBeInTheDocument();
  });

  it("renders a decorative photo", () => {
    const { container } = render(<StockStrip />);
    expect(container.querySelector("img")).toHaveAttribute("alt", "");
  });

  it("exposes the section anchor", () => {
    const { container } = render(<StockStrip />);
    expect(container.querySelector("section#stock-strip")).not.toBeNull();
  });
});
