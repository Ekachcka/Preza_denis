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

  it("links the process button to the drive file per card", () => {
    render(<Arrangements />);
    const links = screen.getAllByRole("link", { name: "Процес роботи" });
    expect(links).toHaveLength(2);
    links.forEach((a) =>
      expect(a.getAttribute("href")).toMatch(/^https:\/\/drive\.google\.com\//),
    );
  });

  it("renders a player per card", () => {
    render(<Arrangements />);
    expect(screen.getAllByRole("button", { name: /^Слухати:/ })).toHaveLength(2);
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
