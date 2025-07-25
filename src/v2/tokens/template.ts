export type TokenConfigType = Record<string, string>;

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
}
