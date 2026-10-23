import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ScribbleArrow } from "../ScribbleArrow";

describe("ScribbleArrow", () => {
  it("renders a decorative image and accepts a class name", () => {
    const { container } = render(<ScribbleArrow className="extra" />);
    const image = container.querySelector("img");
    expect(image).toHaveAttribute("alt", "");
    expect(image).toHaveClass("extra");
  });
});
