import { TokenConfigType, TokenGenerator } from "./template";

export class SizeTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "size-icon-xs": "12px", // used in tight toolbars or micro-UI
    "size-icon-sm": "16px", // standard small icon (e.g. inline links)
    "size-icon-md": "20px", // most button icons & inputs
    "size-icon-lg": "24px", // primary action buttons, cards
    "size-icon-xl": "32px", // featured widgets, dashboards
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Size", overrides);
  }
}
