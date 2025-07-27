import { TokenConfigType, TokenGenerator } from "./template";

export class ShadowTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "shadow-none": "none",
    "shadow-xs": "0 1px 2px 0 rgba(0 0 0 / 0.03)",
    "shadow-sm": "0 1px 3px 0 rgba(0 0 0 / 0.05), 0 1px 2px -1px rgba(0 0 0 / 0.05)",
    "shadow-md": "0 4px 6px -1px rgba(0 0 0 / 0.06), 0 2px 4px -2px rgba(0 0 0 / 0.05)",
    "shadow-lg": "0 10px 15px -3px rgba(0 0 0 / 0.07), 0 4px 6px -4px rgba(0 0 0 / 0.06)",
    "shadow-xl": "0 20px 25px -5px rgba(0 0 0 / 0.08), 0 8px 10px -6px rgba(0 0 0 / 0.07)",
    "shadow-inner": "inset 0 2px 4px 0 rgba(0 0 0 / 0.06)",
    "shadow-unset": "unset",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Shadow", overrides);
  }
}
