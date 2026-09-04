type TokenType = string;

export type TokenConfigType = Record<string, TokenType>;

export abstract class TokenGenerator {
  abstract base: TokenConfigType;

  /* Values that replace `base` under the light theme. Empty for theme-independent tokens. */
  light: TokenConfigType = {};

  overrides: TokenConfigType;
  lightOverrides: TokenConfigType;

  name: string;

  constructor(name: string, overrides: TokenConfigType, lightOverrides: TokenConfigType = {}) {
    this.name = name;
    this.overrides = overrides;
    this.lightOverrides = lightOverrides;
  }

  getConfig() {
    return { ...this.base, ...this.overrides };
  }

  getLightConfig() {
    return { ...this.light, ...this.lightOverrides };
  }

  getTokens(): string {
    const config = this.getConfig();

    return Object.entries(config).reduce((result, [name, value]) => `${result}--${name}: ${value};\n`, "");
  }

  getLightTokens(): string {
    const config = this.getLightConfig();

    return Object.entries(config).reduce((result, [name, value]) => `${result}--${name}: ${value};\n`, "");
  }

  toTypeScript(): string {
    const config = this.getConfig();
    const token = `${this.name}Tokens`;

    // Stryker disable all
    return [
      `export const ${token} = ${JSON.stringify(config, null, 2)} as const;`,
      `export type ${this.name}TokenType = keyof typeof ${token};`,
    ].join("\n");
    // Stryker restore all
  }
}
