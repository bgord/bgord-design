import { type TokenConfigType, TokenGenerator } from "./template";

export class FocusRingTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "focus-ring-brand": "var(--color-brand-500)",
    "focus-ring-neutral": "var(--color-neutral-400)",
    "focus-ring-danger": "var(--color-danger-200)",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("FocusRing", overrides);
  }
}
