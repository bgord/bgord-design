import { TokenConfigType, TokenGenerator } from "./template";

export class FontWeightTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "font-weight-light": "300",
    "font-weight-regular": "400",
    "font-weight-medium": "500",
    "font-weight-bold": "700",
    "font-weight-black": "900",
    "font-weight-unset": "unset",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Font weight", overrides);
  }
}
