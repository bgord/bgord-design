import { type TokenConfigType, TokenGenerator } from "./template";

export class ShadowTokenGenerator extends TokenGenerator {
  /* Dark needs far more opacity than light: a 0.05 alpha is invisible on a near-black ground. */
  base: TokenConfigType = {
    "shadow-none": "none",
    "shadow-xs": "0 1px 2px 0 rgba(0 0 0 / 0.3)",
    "shadow-sm": "0 1px 3px 0 rgba(0 0 0 / 0.4), 0 1px 2px -1px rgba(0 0 0 / 0.4)",
    "shadow-md": "0 4px 6px -1px rgba(0 0 0 / 0.45), 0 2px 4px -2px rgba(0 0 0 / 0.4)",
    "shadow-lg": "0 10px 15px -3px rgba(0 0 0 / 0.5), 0 4px 6px -4px rgba(0 0 0 / 0.45)",
    "shadow-xl": "0 20px 25px -5px rgba(0 0 0 / 0.55), 0 8px 10px -6px rgba(0 0 0 / 0.5)",
    "shadow-inner": "inset 0 1px 2px 0 rgba(0 0 0 / 0.35)",
    "shadow-unset": "unset",
  };

  light: TokenConfigType = {
    "shadow-none": "none",
    "shadow-xs": "0 1px 2px 0 rgba(0 0 0 / 0.04)",
    "shadow-sm": "0 1px 3px 0 rgba(0 0 0 / 0.08), 0 1px 2px -1px rgba(0 0 0 / 0.06)",
    "shadow-md": "0 4px 6px -1px rgba(0 0 0 / 0.09), 0 2px 4px -2px rgba(0 0 0 / 0.06)",
    "shadow-lg": "0 10px 15px -3px rgba(0 0 0 / 0.1), 0 4px 6px -4px rgba(0 0 0 / 0.07)",
    "shadow-xl": "0 20px 25px -5px rgba(0 0 0 / 0.12), 0 8px 10px -6px rgba(0 0 0 / 0.08)",
    "shadow-inner": "inset 0 1px 2px 0 rgba(0 0 0 / 0.06)",
    "shadow-unset": "unset",
  };

  constructor(overrides: TokenConfigType = {}, lightOverrides: TokenConfigType = {}) {
    super("Shadow", overrides, lightOverrides);
  }
}
