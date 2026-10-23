import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { NumberedCard } from "../NumberedCard";

describe("NumberedCard", () => {
  it("renders the number", () => {
    render(<NumberedCard number="01" />);
    expect(screen.getByText("01")).toBeInTheDocument();
  });

  it("renders children after the number", () => {
    render(
      <NumberedCard number="02">
        <p>text</p>
      </NumberedCard>,
    );
    expect(screen.getByText("text")).toBeInTheDocument();
  });

  it("applies the compact variant and custom className", () => {
    const { container } = render(
      <NumberedCard number="03" variant="compact" className="extra" />,
    );
    expect(container.firstChild).toHaveClass("pl-[19px]", "extra");
  });
});
