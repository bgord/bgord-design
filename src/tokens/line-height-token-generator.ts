import { type TokenConfigType, TokenGenerator } from "./template";

export class LineHeightTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "line-height-none": "1", // tightest, icon buttons
    "line-height-display": "1.05", // hero display text
    "line-height-tight": "1.15", // large headings h1–h2
    "line-height-snug": "1.3", // small headings h3–h6, lead copy
    "line-height-base": "1.5", // body copy (16 px → 24 px)
    "line-height-loose": "1.65", // long-form prose / lists
    "line-height-unset": "unset",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("LineHeight", overrides);
  }
}
