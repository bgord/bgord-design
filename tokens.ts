export type TokenConfigType = Record<string, string>;

abstract class TokenGenerator {
  base: TokenConfigType;
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

    let result = `// ${this.name}\n`;

    for (const [name, value] of Object.entries(config)) {
      result += `--${name}: ${value};\n`;
    }

    return result;
  }
}

export class FontSizeTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "font-size-xs": "0.75rem", // 12 px
    "font-size-sm": "0.875rem", // 14 px
    "font-size-base": "1rem", // 16 px  ← default body
    "font-size-lg": "1.125rem", // 18 px
    "font-size-xl": "1.25rem", // 20 px
    "font-size-2xl": "1.5rem", // 24 px
    "font-size-3xl": "1.875rem", // 30 px
    "font-size-4xl": "2.25rem", // 36 px
    "font-size-5xl": "3rem", // 48 px
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Font size", overrides);
  }
}

export class SpacingTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "spacing-0": "0rem", // 0 px
    "spacing-0.5": "0.125rem", // 2 px
    "spacing-1": "0.25rem", // 4 px
    "spacing-1.5": "0.375rem", // 6 px
    "spacing-2": "0.5rem", // 8 px
    "spacing-2.5": "0.625rem", // 10 px
    "spacing-3": "0.75rem", // 12 px
    "spacing-4": "1rem", // 16 px - default body
    "spacing-5": "1.25rem", // 20 px
    "spacing-6": "1.5rem", // 24 px
    "spacing-8": "2rem", //  32 px
    "spacing-12": "3rem", // 48 px
    "spacing-16": "4rem", // 64 px
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Spacing", overrides);
  }
}

export class ZIndexTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "z-index-negative": "-1",
    "z-index-0": "0",
    "z-index-1": "1",
    "z-index-2": "2",
    "z-index-3": "3",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("z index", overrides);
  }
}

// Generate

const all = [new FontSizeTokenGenerator(), new SpacingTokenGenerator(), new ZIndexTokenGenerator()];

all.forEach((generator) => console.log(generator.getTokens()));
