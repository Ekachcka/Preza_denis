import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ScribbleArrow } from "../ScribbleArrow";

describe("ScribbleArrow", () => {
  it("renders the default label", () => {
    render(<ScribbleArrow />);
    expect(screen.getByText("Тицяй і слухай")).toBeInTheDocument();
  });

  it("renders a decorative image", () => {
    const { container } = render(<ScribbleArrow />);
    expect(container.querySelector("img")).toHaveAttribute("alt", "");
  });
});
