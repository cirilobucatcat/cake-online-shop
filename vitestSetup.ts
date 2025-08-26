import * as matchers from "@testing-library/jest-dom/matchers";
import { expect, vi } from "vitest";

expect.extend(matchers);

if (!window.matchMedia) {
  window.matchMedia = (query: string) => ({
    matches: false, // default: nothing matches
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}