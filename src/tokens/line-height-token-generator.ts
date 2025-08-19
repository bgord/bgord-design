import { type TokenConfigType, TokenGenerator } from "./template";

export class LineHeightTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "line-height-none": "1", // tightest, icon buttons
    "line-height-tight": "1.25", // headings h1–h3
    "line-height-base": "1.5", // body copy (16 px → 24 px)
    "line-height-loose": "1.65", // long-form prose / lists
    "line-height-display": "1.1", // hero display text
    "line-height-unset": "unset",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("LineHeight", overrides);
  }
}
