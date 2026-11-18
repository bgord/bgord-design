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

export class CssRuleMedia implements CssRuleStrategy {
  constructor(
    private readonly query: string,
    private readonly rules: ReadonlyArray<CssRuleStrategy>,
  ) {}

  get(): string {
    // Stryker disable all
    return `@media ${this.query} { ${this.rules.map((rule) => rule.get()).join("\n")} }`;
    // Stryker restore all
  }
}
