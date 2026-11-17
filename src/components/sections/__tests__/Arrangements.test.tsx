import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Arrangements, ARRANGEMENTS } from "../Arrangements";

describe("Arrangements", () => {
  it("renders the section heading and anchor", () => {
    const { container } = render(<Arrangements />);
    expect(
      screen.getByRole("heading", { name: "аранжування" }),
    ).toBeInTheDocument();
    expect(container.querySelector("section#arrangements")).not.toBeNull();
  });

  it("renders three cards with number, title, artist and cover alt", () => {
    render(<Arrangements />);
    expect(ARRANGEMENTS).toHaveLength(3);
    for (const { number, title, artist } of ARRANGEMENTS) {
      if (!artist) continue;
      const img = screen.getByAltText(`${title} — ${artist}`);
      const card = img.closest("article") as HTMLElement;
      expect(within(card).getByText(number)).toBeInTheDocument();
      expect(within(card).getByText(title)).toBeInTheDocument();
      expect(within(card).getByText(artist)).toBeInTheDocument();
    }
  });

  it("opens a video dialog from the process button", () => {
    const { container } = render(<Arrangements />);
    const buttons = screen.getAllByRole("button", { name: "Процес роботи" });
    expect(buttons).toHaveLength(3);
    expect(container.querySelectorAll("dialog")).toHaveLength(3);
    expect(container.querySelector("video")?.getAttribute("src")).toContain(
      "/video/process-",
    );
  });

  it("renders a player per card", () => {
    render(<Arrangements />);
    expect(screen.getAllByRole("button", { name: /^Слухати:/ })).toHaveLength(
      3,
    );
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
