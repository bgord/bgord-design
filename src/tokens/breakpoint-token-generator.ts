import type { BreakpointRegistry } from "../breakpoint-registry";
import { type TokenConfigType, TokenGenerator } from "./template";

export class BreakpointTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {};

  constructor(breakpointRegistry: BreakpointRegistry) {
    super(
      "Breakpoint",
      Object.fromEntries(
        breakpointRegistry.entries.map(([name, value]) => [`breakpoint-${name}`, `${value}px`]),
      ),
    );
  }
}
