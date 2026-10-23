export type FocusTarget = {
  selector: string;
  parent?: boolean;
};

export const FOCUS_TARGETS = {
  arrows: { selector: 'img[src*="imgGroup14"], img[src*="imgGroup18"]' },
  "hero-name": { selector: "#hero h1" },
  "hero-tagline": { selector: "#hero p.font-semibold" },
  "about-text": { selector: "#about h2", parent: true },
  "stock-text": { selector: '#stock-strip [class*="max-w-[654px]"]' },
  "why-me": { selector: "#why-me ul" },
  contacts: { selector: "#contacts ul" },
  tracks: { selector: "#album ul" },
  "samples-text": { selector: "#samples-strip p" },
} as const satisfies Record<string, FocusTarget>;

export type FocusKey = keyof typeof FOCUS_TARGETS;
