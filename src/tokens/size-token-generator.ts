import { TokenConfigType, TokenGenerator } from "./template";

export class SizeTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "size-xs": "12px", // used in tight toolbars or micro-UI
    "size-sm": "16px", // standard small icon (e.g. inline links)
    "size-md": "20px", // most button icons & inputs
    "size-lg": "24px", // primary action buttons, cards
    "size-xl": "32px", // featured widgets, dashboards
    "size-2xl": "36px", // button heights
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Size", overrides);
  }
}
