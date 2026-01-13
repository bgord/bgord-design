export interface CssRuleStrategy {
  get(): string;
}

export class CssRuleRegular implements CssRuleStrategy {
  constructor(
    private readonly selector: string,
    private readonly attributes: Record<string, string>,
  ) {}

  get(): string {
    // Stryker disable all
    return `${this.selector} { ${Object.entries(this.attributes)
      .map(([key, value]) => `${key}: ${value};`)
      .join("\n")} }`;
    // Stryker restore all
  }
}
