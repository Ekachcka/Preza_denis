import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "../Hero";
import { HERO_LINES } from "../hero/decorLines";

describe("Hero", () => {
  it("renders the hero section with id", () => {
    const { container } = render(<Hero />);
    expect(container.querySelector("section#hero")).toBeInTheDocument();
  });

  it("has a single h1 with the name", () => {
    render(<Hero />);
    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(1);
    expect(headings[0]).toHaveTextContent("Bulakh Denis");
  });

  it("renders the tagline and PORTFOLIO text", () => {
    render(<Hero />);
    expect(
      screen.getByText("Guitar is my voice, music is my story."),
    ).toBeInTheDocument();
    expect(screen.getByText("PORTFOLIO")).toBeInTheDocument();
  });

  it("hides decorative big letters from assistive tech", () => {
    const { container } = render(<Hero />);
    for (const letter of ["Denis", "Bulakh", "P", "o"]) {
      const el = Array.from(container.querySelectorAll("p")).find(
        (p) => p.textContent === letter,
      );
      expect(el?.closest("[aria-hidden='true']")).not.toBeNull();
    }
  });

  it("describes the two photos and keeps the rest decorative", () => {
    const { container } = render(<Hero />);
    const images = Array.from(container.querySelectorAll("img"));
    expect(images.length).toBeGreaterThan(HERO_LINES.length);
    const described = images.map((img) => img.getAttribute("alt")).filter(Boolean);
    expect(described.sort()).toEqual([
      "Денис Булах з акустичною гітарою",
      "Денис Булах з електрогітарою на сцені",
    ]);
  });

  it("renders one image per decor line", () => {
    render(<Hero />);
    const lines = screen.getByTestId("hero-lines");
    expect(lines.querySelectorAll("img")).toHaveLength(HERO_LINES.length);
    expect(lines).toHaveAttribute("aria-hidden", "true");
  });

  it("does not reference external asset urls", () => {
    const { container } = render(<Hero />);
    expect(container.innerHTML).not.toContain("figma.com");
  });
});
