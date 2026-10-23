import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProfileStrip } from "../ProfileStrip";

describe("ProfileStrip", () => {
  it("renders children and a photo with the given alt", () => {
    render(
      <ProfileStrip photoSrc="/images/imgImage10.png" photoAlt="Фото">
        <p>Текст</p>
      </ProfileStrip>,
    );
    expect(screen.getByText("Текст")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Фото" })).toBeInTheDocument();
  });

  it("renders the optional action slot", () => {
    render(
      <ProfileStrip
        photoSrc="/images/imgImage10.png"
        action={<button type="button">Слухати</button>}
      >
        <p>Текст</p>
      </ProfileStrip>,
    );
    expect(screen.getByRole("button", { name: "Слухати" })).toBeInTheDocument();
  });

  it("renders without an action", () => {
    render(
      <ProfileStrip photoSrc="/images/imgImage10.png">
        <p>Текст</p>
      </ProfileStrip>,
    );
    expect(screen.queryByRole("button")).toBeNull();
  });
});
