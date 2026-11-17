import { fireEvent, render, screen } from "@testing-library/react";
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

  it("toggles playback with the listen button", () => {
    render(<SamplesStrip />);
    fireEvent.click(screen.getByRole("button", { name: "Слухати" }));
    const pause = screen.getByRole("button", { name: "Пауза" });
    fireEvent.click(pause);
    expect(screen.getByRole("button", { name: "Слухати" })).toBeInTheDocument();
  });

  it("shows the sample pack cover and a progress slider", () => {
    render(<SamplesStrip />);
    expect(screen.getByAltText("Funk Guitar Sample Pack")).toBeInTheDocument();
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });
});
