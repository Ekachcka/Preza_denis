import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProcessButton } from "../ProcessButton";

describe("ProcessButton", () => {
  it("renders a button with the default label", () => {
    render(<ProcessButton />);
    const button = screen.getByRole("button", { name: "Процес роботи" });
    expect(button).toHaveAttribute("type", "button");
  });

  it("accepts custom children and className", () => {
    render(<ProcessButton className="extra">Слухати</ProcessButton>);
    expect(screen.getByRole("button", { name: "Слухати" })).toHaveClass("extra");
  });
});
