import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

Object.defineProperty(HTMLMediaElement.prototype, "play", {
  configurable: true,
  value: function play(this: HTMLMediaElement) {
    Object.defineProperty(this, "paused", { configurable: true, value: false });
    this.dispatchEvent(new Event("play"));
    return Promise.resolve();
  },
});
Object.defineProperty(HTMLMediaElement.prototype, "pause", {
  configurable: true,
  value: function pause(this: HTMLMediaElement) {
    Object.defineProperty(this, "paused", { configurable: true, value: true });
    this.dispatchEvent(new Event("pause"));
  },
});
Object.defineProperty(HTMLMediaElement.prototype, "load", {
  configurable: true,
  value: () => {},
});
