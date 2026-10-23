import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Section } from "../Section";

describe("Section", () => {
  it("renders a section element with the given id", () => {
    const { container } = render(<Section id="about" />);
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "about");
  });

  it("renders children", () => {
    render(
      <Section id="x">
        <p>content</p>
      </Section>,
    );
    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("wraps children in a container by default", () => {
    const { container } = render(
      <Section id="x">
        <p>content</p>
      </Section>,
    );
    const section = container.querySelector("section")!;
    expect(section.firstElementChild).not.toBe(screen.getByText("content"));
    expect(section.firstElementChild).toContainElement(
      screen.getByText("content"),
    );
  });

  it("renders children directly when contained is false", () => {
    const { container } = render(
      <Section id="x" contained={false}>
        <p>content</p>
      </Section>,
    );
    expect(container.querySelector("section")!.firstElementChild).toBe(
      screen.getByText("content"),
    );
  });

  it("merges a custom className", () => {
    const { container } = render(<Section id="x" className="custom" />);
    expect(container.querySelector("section")).toHaveClass("custom");
  });

  it("passes aria attributes through", () => {
    render(<Section aria-label="Про мене" />);
    expect(screen.getByRole("region", { name: "Про мене" })).toBeInTheDocument();
  });

  it("renders without children", () => {
    const { container } = render(<Section id="empty" />);
    expect(container.querySelector("section")).toHaveTextContent("");
  });
});
