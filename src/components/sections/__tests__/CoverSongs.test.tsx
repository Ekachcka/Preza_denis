import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CoverSongs } from "../CoverSongs";

describe("CoverSongs", () => {
  it("renders the section with its title", () => {
    const { container } = render(<CoverSongs />);
    expect(container.querySelector("section")).toHaveAttribute(
      "id",
      "cover-songs",
    );
    expect(
      screen.getByRole("heading", { level: 2, name: "трохи каверів" }),
    ).toBeInTheDocument();
  });

  it("renders five numbered cards in order", () => {
    render(<CoverSongs />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(5);
    expect(items.map((li) => li.textContent)).toEqual([
      "01",
      "02",
      "03",
      "04",
      "05",
    ]);
  });

  it("renders the scribble arrow label", () => {
    render(<CoverSongs />);
    expect(screen.getByText("Тицяй і слухай")).toBeInTheDocument();
  });
});
