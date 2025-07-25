import { TokenConfigType, TokenGenerator } from "./template";

export class BorderWidthTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "border-width-none": "0",
    "border-width-hairline": "1px",
    "border-width-thin": "2px",
    "border-width-base": "4px",
    "border-width-thick": "6px",
    "border-width-heavy": "12px",
    "border-width-unset": "unset",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Border width", overrides);
  }
}
