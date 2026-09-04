import { type TokenConfigType, TokenGenerator } from "./template";

export class LetterSpacingTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "letter-spacing-tighter": "-0.03em", // hero display text
    "letter-spacing-tight": "-0.02em", // large headlines
    "letter-spacing-snug": "-0.01em", // medium headings, lead copy
    "letter-spacing-normal": "0em", // default
    "letter-spacing-wide": "0.025em", // buttons, small caps
    "letter-spacing-wider": "0.05em", // badge labels
    "letter-spacing-widest": "0.1em", // tiny UI meta text
    "letter-spacing-unset": "unset",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("LetterSpacing", overrides);
  }
}
