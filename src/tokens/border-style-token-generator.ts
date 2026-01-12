import { type TokenConfigType, TokenGenerator } from "./template";

export class BorderStyleTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "border-style-none": "none",
    "border-style-solid": "solid",
    "border-style-dashed": "dashed",
    "border-style-dotted": "dotted",
    "border-style-double": "double",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("BorderStyle", overrides);
  }
}
