type CssRuleLineType = [string, string];

export interface CssRuleStrategy {
  get(): string;
}

export class CssRuleRegular implements CssRuleStrategy {
  constructor(
    private readonly selector: string,
    private readonly lines: CssRuleLineType[],
  ) {}

  get(): string {
    return `${this.selector} { ${this.lines.map(([key, value]) => `${key}: ${value};`).join("\n")} }`;
  }
}
