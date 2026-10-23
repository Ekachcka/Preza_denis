import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Album } from "../Album";

describe("Album", () => {
  it("renders the album title and subtitle", () => {
    render(<Album />);
    expect(
      screen.getByRole("heading", { name: "Kostiantyn Kukushkin Accordion" }),
    ).toBeInTheDocument();
    expect(screen.getByText('Album "Any price"')).toBeInTheDocument();
  });

  it("renders 7 numbered tracks in order", () => {
    render(<Album />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(7);
    const expected = [
      ["01", "Any Price"],
      ["02", "Libertango"],
      ["03", "Promenade"],
      ["04", "Now or never"],
      ["05", "Night"],
      ["06", "TIMe"],
      ["07", "Winter"],
    ];
    expected.forEach(([number, title], index) => {
      const item = within(items[index]);
      expect(item.getByText(number)).toBeInTheDocument();
      expect(item.getByText(title)).toBeInTheDocument();
    });
  });

  it("gives each track a stub process button", () => {
    render(<Album />);
    const buttons = screen.getAllByRole("button", { name: "Процес роботи" });
    expect(buttons).toHaveLength(7);
    buttons.forEach((button) => expect(button).toHaveAttribute("type", "button"));
  });

  it("describes the album cover", () => {
    const { container } = render(<Album />);
    expect(container.querySelector("img")).toHaveAttribute(
      "alt",
      "Обкладинка альбому «Any price» — Kostiantyn Kukushkin",
    );
  });

  it("exposes the section anchor", () => {
    const { container } = render(<Album />);
    expect(container.querySelector("section#album")).not.toBeNull();
  });
});
