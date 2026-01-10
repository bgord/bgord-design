import type { TokenConfigType } from "../tokens/template";

export abstract class UtilityGenerator {
  abstract config: TokenConfigType;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract css(): string;

  abstract toTypeScript(): string;
}

type CssRuleLineType = [string, string];

export class CssRule {
  constructor(
    private readonly selector: string,
    private readonly lines: CssRuleLineType[],
  ) {}

  get(): string {
    return `${this.selector} { ${this.lines.map(([key, value]) => `${key}: ${value};`).join("\n")} }`;
  }
}
