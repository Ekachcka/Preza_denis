import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AdsMusic } from "../AdsMusic";

describe("AdsMusic", () => {
  it("renders the section title", () => {
    render(<AdsMusic />);
    expect(
      screen.getByRole("heading", {
        name: "МУЗИКА ДЛЯ РЕКЛАМИ, БЛОГІВ І МЕДІА ПРОЕКТІВ",
      }),
    ).toBeInTheDocument();
  });

  it("renders nine numbered cards in order", () => {
    render(<AdsMusic />);
    const items = screen.getAllByRole("listitem");
    expect(items.map((item) => item.textContent)).toEqual([
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
    ]);
  });

  it("renders the scribble arrow caption", () => {
    render(<AdsMusic />);
    expect(screen.getByText("Тицяй і слухай")).toBeInTheDocument();
  });

  it("keeps all images decorative", () => {
    const { container } = render(<AdsMusic />);
    const images = container.querySelectorAll("img");
    expect(images.length).toBeGreaterThan(0);
    images.forEach((image) => expect(image).toHaveAttribute("alt", ""));
  });

  it("exposes the section anchor", () => {
    const { container } = render(<AdsMusic />);
    expect(container.querySelector("section#ads-music")).not.toBeNull();
  });
});
