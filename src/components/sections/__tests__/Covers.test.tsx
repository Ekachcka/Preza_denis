import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Covers, COVERS } from "../Covers";

describe("Covers", () => {
  it("renders the section heading", () => {
    render(<Covers />);
    expect(
      screen.getByRole("heading", { name: "Клікай на обкладинки — слухай музику!" }),
    ).toBeInTheDocument();
  });

  it("renders six cover cards with title, artist and alt", () => {
    render(<Covers />);
    expect(COVERS).toHaveLength(6);
    for (const { title, artist } of COVERS) {
      const img = screen.getByAltText(`${title} — ${artist}`);
      const card = img.closest("button") as HTMLElement;
      expect(within(card).getByText(title)).toBeInTheDocument();
      expect(within(card).getByText(artist)).toBeInTheDocument();
    }
  });

  it("renders a process button under every card", () => {
    render(<Covers />);
    const buttons = screen.getAllByRole("button", { name: "Процес роботи" });
    expect(buttons).toHaveLength(6);
    buttons.forEach((b) => expect(b).toHaveAttribute("type", "button"));
  });

  it("renders the caption and keeps decor hidden from assistive tech", () => {
    const { container } = render(<Covers />);
    expect(
      screen.getByText("Натисни, щоб побачити творчий процес"),
    ).toBeInTheDocument();
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
    expect(container.querySelector('img[src*="imgGroup14"]')).toHaveAttribute(
      "alt",
      "",
    );
  });

  it("exposes the covers anchor", () => {
    const { container } = render(<Covers />);
    expect(container.querySelector("section#covers")).not.toBeNull();
  });
});
