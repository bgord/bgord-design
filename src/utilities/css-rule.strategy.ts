import type { BreakpointNameType, BreakpointValueType } from "../breakpoint-registry";

type CssRuleLineType = [string, string];

export interface CssRuleStrategy {
  get(): string;
}

export class CssRuleRegular implements CssRuleStrategy {
  constructor(
    private readonly selector: string,
    private readonly lines: CssRuleLineType[] | CssRuleLineType,
  ) {}

  get(): string {
    if (Array.isArray(this.lines[0])) {
      return `${this.selector} { ${this.lines.map(([key, value]) => `${key}: ${value};`).join("\n")} }`;
    }
    return `${this.selector} { ${this.lines[0]}: ${this.lines[1]}; }`;
  }
}

export class CssRuleResponsive implements CssRuleStrategy {
  constructor(
    private readonly selector: string,
    private readonly lines: CssRuleLineType[] | CssRuleLineType,
    private readonly breakpoint: { name: BreakpointNameType; value: BreakpointValueType },
  ) {}

  get(): string {
    const selector = this.selector.replace("data-", `data-${this.breakpoint.name}-`);

    if (Array.isArray(this.lines[0])) {
      return `${selector} { ${this.lines.map(([key, value]) => `${key}: ${value};`).join("\n")} }`;
    }
    return `${selector} { ${this.lines[0]}: ${this.lines[1]}; }`;
  }
}
