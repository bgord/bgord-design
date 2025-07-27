import { TokenConfigType, TokenGenerator } from "./template";

export class RadiusTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "radius-none": "0",
    "radius-xs": "2px",
    "radius-sm": "4px",
    "radius-md": "8px",
    "radius-lg": "12px",
    "radius-xl": "16px",
    "radius-pill": "9999px",
    "radius-circle": "50%",
    "radius-unset": "unset",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Radius", overrides);
  }
}
