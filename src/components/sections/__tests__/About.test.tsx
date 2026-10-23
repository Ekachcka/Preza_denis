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
    expect(screen.getByText("Мене звати Денис Булах!")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Мені 23 роки. Я гітарист, музикант! Прагну працювати в сфері аранжування і звукозапису з вами!",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Я маю досвід роботи на студії в онлайн форматі вже 4 роки.  Ось деякі треки на які я прописував гітарні партії і аранжування та докази, що робив їх саме я:",
        { normalizer: (s) => s },
      ),
    ).toBeInTheDocument();
  });

  it("keeps the second paragraph whitespace", () => {
    render(<About />);
    const p = screen.getByText(/Я маю досвід/, { normalizer: (s) => s });
    expect(p).toHaveClass("whitespace-pre-wrap");
  });

  it("hides the decorative Denis word", () => {
    const { container } = render(<About />);
    const denis = Array.from(container.querySelectorAll("p")).find(
      (p) => p.textContent === "Denis",
    );
    expect(denis).toHaveAttribute("aria-hidden", "true");
  });

  it("renders all images as decorative with empty alt", () => {
    const { container } = render(<About />);
    const images = container.querySelectorAll("img");
    expect(images).toHaveLength(4);
    images.forEach((img) => expect(img).toHaveAttribute("alt", ""));
  });

  it("does not reference external asset urls", () => {
    const { container } = render(<About />);
    expect(container.innerHTML).not.toContain("figma.com");
  });
});
