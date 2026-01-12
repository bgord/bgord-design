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
      // Stryker disable all
      return `${this.selector} { ${this.lines.map(([key, value]) => `${key}: ${value};`).join("\n")} }`;
      // Stryker restore all
    }
    return `${this.selector} { ${this.lines[0]}: ${this.lines[1]}; }`;
  }
}
