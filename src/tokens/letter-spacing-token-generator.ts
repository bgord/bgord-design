import { TokenConfigType, TokenGenerator } from "./template";

export class LetterSpacingTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "letter-spacing-tight": "-0.01em", // logo lock-ups, large headlines
    "letter-spacing-normal": "0em", // default
    "letter-spacing-wide": "0.025em", // buttons, small caps
    "letter-spacing-wider": "0.05em", // overlines, badge labels
    "letter-spacing-widest": "0.1em", // tiny UI meta text
    "letter-spacing-unset": "unset",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("LetterSpacing", overrides);
  }
}
