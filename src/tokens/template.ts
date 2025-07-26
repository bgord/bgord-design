export type TokenType = string;

export type TokenConfigType = Record<string, TokenType>;

export abstract class TokenGenerator {
  abstract base: TokenConfigType;
  overrides: TokenConfigType;

  name: string;

  constructor(name: string, overrides: TokenConfigType) {
    this.name = name;
    this.overrides = overrides;
  }

  getConfig() {
    return { ...this.base, ...this.overrides };
  }

  getTokens(): string {
    const config = this.getConfig();

    let result = `/* ${this.name} */\n`;

    for (const [name, value] of Object.entries(config)) {
      result += `--${name}: ${value};\n`;
    }

    return result;
  }

  toTypeScript(): string {
    const cfg = this.getConfig();
    const constName = `${this.name}Tokens`;

    return [
      `export const ${constName} = ${JSON.stringify(cfg, null, 2)} as const;`,
      `export type ${this.name}TokenType = keyof typeof ${constName};`,
      "",
    ].join("\n");
  }
}
