import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { StockStrip } from "../StockStrip";

describe("StockStrip", () => {
  it("renders both text paragraphs", () => {
    render(<StockStrip />);
    expect(
      screen.getByText(
        "Пишу стокову музику в стилях: Corporate, Funk, Pop, Disco, Cinematic, Rock, Lo-Fi, Upbeat, Ambient, Chillhop, Acoustic, Epic, Motivational, Hip-Hop, Indie, Synthwave, Tropical House, Jazz, Orchestral.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText("А ще — аудіологотипи (Logo)."),
    ).toBeInTheDocument();
  });

  it("describes the photo", () => {
    const { container } = render(<StockStrip />);
    expect(container.querySelector("img")).toHaveAttribute(
      "alt",
      "Денис Булах, гітарист і музикант",
    );
  });

  it("exposes the section anchor", () => {
    const { container } = render(<StockStrip />);
    expect(container.querySelector("section#stock-strip")).not.toBeNull();
  });
});
