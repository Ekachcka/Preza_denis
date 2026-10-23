import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WhyMe } from "../WhyMe";

describe("WhyMe", () => {
  it("renders the section with its title", () => {
    const { container } = render(<WhyMe />);
    expect(container.querySelector("section")).toHaveAttribute("id", "why-me");
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "чому варто співпрацювати зі мною",
      }),
    ).toBeInTheDocument();
  });

  it("renders four cards with number and text", () => {
    render(<WhyMe />);
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(4);
    expect(items[0]).toHaveTextContent(
      "01Я приступаю до проекту відразу, не відкладаючи на потім",
    );
    expect(items[1]).toHaveTextContent(
      "Я можу придумати ідеї для пісні і прописати партію гітари в різних стилях (рок, фанк, поп, блюз)",
    );
    expect(items[2]).toHaveTextContent(
      "Я граю на класичній, акустичній та електрогітарі",
    );
    expect(items[3]).toHaveTextContent("Я не бухаю, і завжди на зв’язку!");
  });
});
