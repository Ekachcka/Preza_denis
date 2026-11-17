import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { About } from "../About";

describe("About", () => {
  it("renders the about section with id", () => {
    const { container } = render(<About />);
    expect(container.querySelector("section#about")).toBeInTheDocument();
  });

  it("has an h2 greeting", () => {
    render(<About />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Вітаю!" }),
    ).toBeInTheDocument();
  });

  it("renders the texts verbatim", () => {
    render(<About />);
    expect(screen.getByText("Мене звати Денис Булах.")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Мені 23 роки, я гітарист і музикант. Працюю в сфері аранжування та звукозапису й готовий робити це для вас.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Уже 4 роки співпрацюю зі студіями в онлайн-форматі. Нижче — треки, в яких гітарні партії та аранжування зробив я. Послухайте самі:",
        { normalizer: (s) => s },
      ),
    ).toBeInTheDocument();
  });

  it("keeps the second paragraph whitespace", () => {
    render(<About />);
    const p = screen.getByText(/Уже 4 роки/, { normalizer: (s) => s });
    expect(p).toHaveClass("whitespace-pre-wrap");
  });

  it("hides the decorative Denis word", () => {
    const { container } = render(<About />);
    const denis = Array.from(container.querySelectorAll("p")).find(
      (p) => p.textContent === "Denis",
    );
    expect(denis).toHaveAttribute("aria-hidden", "true");
  });

  it("describes the portrait and keeps the rest decorative", () => {
    const { container } = render(<About />);
    const images = Array.from(container.querySelectorAll("img"));
    expect(images).toHaveLength(4);
    const described = images.filter((img) => img.getAttribute("alt") !== "");
    expect(described).toHaveLength(1);
    expect(described[0]).toHaveAttribute("alt", "Денис Булах, гітарист і музикант");
  });

  it("does not reference external asset urls", () => {
    const { container } = render(<About />);
    expect(container.innerHTML).not.toContain("figma.com");
  });
});
