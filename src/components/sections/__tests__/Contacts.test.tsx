import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Contacts } from "../Contacts";

describe("Contacts", () => {
  it("renders the section with its muted title", () => {
    const { container } = render(<Contacts />);
    expect(container.querySelector("section")).toHaveAttribute(
      "id",
      "contacts",
    );
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "контакти Для співпраці",
      }),
    ).toBeInTheDocument();
  });

  it("links the phone, email and instagram", () => {
    render(<Contacts />);
    expect(
      screen.getByRole("link", { name: "+38 096 731 39 92" }),
    ).toHaveAttribute("href", "tel:+380967313992");
    expect(
      screen.getByRole("link", { name: "bulakhdenis2002@gmail.com" }),
    ).toHaveAttribute("href", "mailto:bulakhdenis2002@gmail.com");
    expect(screen.getByRole("link", { name: "@bulakh_denis" })).toHaveAttribute(
      "href",
      "https://instagram.com/bulakh_denis",
    );
  });

  it("renders icons as decorative images", () => {
    const { container } = render(<Contacts />);
    container
      .querySelectorAll("img")
      .forEach((img) => expect(img).toHaveAttribute("alt", ""));
  });
});
