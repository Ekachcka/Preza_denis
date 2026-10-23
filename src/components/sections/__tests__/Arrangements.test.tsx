import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Arrangements, ARRANGEMENTS } from "../Arrangements";

describe("Arrangements", () => {
  it("renders the section heading and anchor", () => {
    const { container } = render(<Arrangements />);
    expect(screen.getByRole("heading", { name: "аранжування" })).toBeInTheDocument();
    expect(container.querySelector("section#arrangements")).not.toBeNull();
  });

  it("renders two cards with number, title, artist and cover alt", () => {
    render(<Arrangements />);
    expect(ARRANGEMENTS).toHaveLength(2);
    for (const { number, title, artist } of ARRANGEMENTS) {
      const img = screen.getByAltText(`${title} — ${artist}`);
      const card = img.closest("article") as HTMLElement;
      expect(within(card).getByText(number)).toBeInTheDocument();
      expect(within(card).getByText(title)).toBeInTheDocument();
      expect(within(card).getByText(artist)).toBeInTheDocument();
    }
  });

  it("renders a stub process button per card", () => {
    render(<Arrangements />);
    const buttons = screen.getAllByRole("button", { name: "Процес роботи" });
    expect(buttons).toHaveLength(2);
    buttons.forEach((b) => expect(b).toHaveAttribute("type", "button"));
  });

  it("renders the caption with a decorative arrow", () => {
    const { container } = render(<Arrangements />);
    expect(screen.getByText("Тицяй і слухай")).toBeInTheDocument();
    expect(container.querySelector('img[src*="imgGroup14"]')).toHaveAttribute(
      "alt",
      "",
    );
  });
});
