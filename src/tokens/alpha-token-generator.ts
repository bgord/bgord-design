import { type TokenConfigType, TokenGenerator } from "./template";

export class AlphaTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "color-alpha-subtle": "rgba(255 255 255 / 0.06)", // hairline dividers
    "color-alpha-soft": "rgba(255 255 255 / 0.1)", // default borders, hover overlay
    "color-alpha-medium": "rgba(255 255 255 / 0.16)", // emphasis and hover borders, pressed overlay
    "color-alpha-strong": "rgba(255 255 255 / 0.24)", // outlines that read as shapes: dashed drop targets, avatar rings
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Alpha", overrides);
  }
}
