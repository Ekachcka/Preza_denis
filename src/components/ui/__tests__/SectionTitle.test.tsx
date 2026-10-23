import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SectionTitle } from "../SectionTitle";

describe("SectionTitle", () => {
  it("renders a level 2 heading with text", () => {
    render(<SectionTitle>Про мене</SectionTitle>);
    expect(
      screen.getByRole("heading", { level: 2, name: "Про мене" }),
    ).toBeInTheDocument();
  });

  it("merges a custom className", () => {
    render(<SectionTitle className="custom">Title</SectionTitle>);
    expect(screen.getByRole("heading", { level: 2 })).toHaveClass("custom");
  });

  it("passes id through", () => {
    render(<SectionTitle id="t">Title</SectionTitle>);
    expect(screen.getByRole("heading", { level: 2 })).toHaveAttribute(
      "id",
      "t",
    );
  });

  it("renders long text", () => {
    const text = "Дуже довгий заголовок ".repeat(20).trim();
    render(<SectionTitle>{text}</SectionTitle>);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(text);
  });
});
