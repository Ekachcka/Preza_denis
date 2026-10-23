import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SamplesStrip } from "../SamplesStrip";

describe("SamplesStrip", () => {
  it("renders the section with the text", () => {
    const { container } = render(<SamplesStrip />);
    expect(container.querySelector("section")).toHaveAttribute(
      "id",
      "samples-strip",
    );
    expect(
      screen.getByText(/Також я писав семпли і далі продовжую займатись цим/),
    ).toBeInTheDocument();
  });

  it("renders a stub listen button", () => {
    render(<SamplesStrip />);
    const button = screen.getByRole("button", { name: "Слухати" });
    expect(button).toHaveAttribute("type", "button");
  });

  it("renders images as decorative", () => {
    const { container } = render(<SamplesStrip />);
    const images = container.querySelectorAll("img");
    expect(images.length).toBeGreaterThan(0);
    images.forEach((img) => expect(img).toHaveAttribute("alt", ""));
  });
});
