import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TrackPlayer } from "../TrackPlayer";

describe("TrackPlayer", () => {
  it("toggles between play and pause", () => {
    render(<TrackPlayer src="/audio/a.mp3" title="A" />);
    fireEvent.click(screen.getByRole("button", { name: "Слухати: A" }));
    expect(
      screen.getByRole("button", { name: "Пауза: A" }),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Пауза: A" }));
    expect(
      screen.getByRole("button", { name: "Слухати: A" }),
    ).toBeInTheDocument();
  });

  it("plays one track at a time", () => {
    render(
      <>
        <TrackPlayer src="/audio/a.mp3" title="A" />
        <TrackPlayer src="/audio/b.mp3" title="B" />
      </>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Слухати: A" }));
    fireEvent.click(screen.getByRole("button", { name: "Слухати: B" }));
    expect(
      screen.getByRole("button", { name: "Слухати: A" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Пауза: B" }),
    ).toBeInTheDocument();
  });

  it("has a labelled progress slider", () => {
    render(<TrackPlayer src="/audio/a.mp3" title="A" />);
    expect(
      screen.getByRole("slider", { name: "Прогрес: A" }),
    ).toBeInTheDocument();
  });
});

describe("TrackCard", () => {
  it("starts playback on a click anywhere on the card", async () => {
    const { TrackCard } = await import("../TrackCard");
    const { container } = render(
      <TrackCard number="01" title="A" src="/audio/a.mp3" />,
    );
    fireEvent.click(container.firstElementChild as HTMLElement);
    expect(
      screen.getByRole("button", { name: "Пауза: A" }),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("slider"));
    expect(
      screen.getByRole("button", { name: "Пауза: A" }),
    ).toBeInTheDocument();
  });
});
