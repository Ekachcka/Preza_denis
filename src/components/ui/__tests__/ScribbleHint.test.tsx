import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ScribbleHint } from "../ScribbleHint";

describe("ScribbleHint", () => {
  it("renders the default label", () => {
    render(<ScribbleHint />);
    expect(screen.getByText("Тицяй і слухай")).toBeInTheDocument();
  });

  it("renders a decorative image", () => {
    const { container } = render(<ScribbleHint />);
    expect(container.querySelector("img")).toHaveAttribute("alt", "");
  });
});
