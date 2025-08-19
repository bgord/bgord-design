import { type TokenConfigType, TokenGenerator } from "./template";

export class BreakpointTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "breakpoint-md": "768px",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Breakpoint", overrides);
  }
}
