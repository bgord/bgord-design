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

    let result = `/* ${this.name} */\n`;

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
    "spacing-0-5": "0.125rem", // 2 px
    "spacing-1": "0.25rem", // 4 px
    "spacing-1-5": "0.375rem", // 6 px
    "spacing-2": "0.5rem", // 8 px
    "spacing-2-5": "0.625rem", // 10 px
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

export class FontWeightTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "font-weight-light": "300",
    "font-weight-regular": "400",
    "font-weight-medium": "500",
    "font-weight-bold": "700",
    "font-weight-black": "900",
    "font-weight-unset": "unset",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Font weight", overrides);
  }
}

export class LineHeightTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "line-height-none": "1", // tightest, icon buttons
    "line-height-tight": "1.25", // headings h1–h3
    "line-height-base": "1.5", // body copy (16 px → 24 px)
    "line-height-loose": "1.65", // long-form prose / lists
    "line-height-display": "1.1", // hero display text
    "line-height-unset": "unset",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Line height", overrides);
  }
}

export class LetterSpacingTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "letter-spacing-tight": "-0.01em", // logo lock-ups, large headlines
    "letter-spacing-normal": "0em", // default
    "letter-spacing-wide": "0.025em", // buttons, small caps
    "letter-spacing-wider": "0.05em", // overlines, badge labels
    "letter-spacing-widest": "0.1em", // tiny UI meta text
    "letter-spacing-unset": "unset",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Letter spacing", overrides);
  }
}

export class ShadowTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "shadow-none": "none",
    "shadow-xs": "0 1px 2px 0 rgba(0 0 0 / 0.03)",
    "shadow-sm": "0 1px 3px 0 rgba(0 0 0 / 0.05), 0 1px 2px -1px rgba(0 0 0 / 0.05)",
    "shadow-md": "0 4px 6px -1px rgba(0 0 0 / 0.06), 0 2px 4px -2px rgba(0 0 0 / 0.05)",
    "shadow-lg": "0 10px 15px -3px rgba(0 0 0 / 0.07), 0 4px 6px -4px rgba(0 0 0 / 0.06)",
    "shadow-xl": "0 20px 25px -5px rgba(0 0 0 / 0.08), 0 8px 10px -6px rgba(0 0 0 / 0.07)",
    "shadow-inner": "inset 0 2px 4px 0 rgba(0 0 0 / 0.06)",
    "shadow-unset": "unset",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Shadow", overrides);
  }
}

export class BackdropsTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "backdrop-none": "none",
    "backdrop-weak": "rgba(0 0 0 / 0.35)",
    "backdrop-medium": "rgba(0 0 0 / 0.6)",
    "backdrop-strong": "rgba(0 0 0 / 0.75)",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Backdrops", overrides);
  }
}

export class RadiusTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "radius-none": "0",
    "radius-xs": "2px",
    "radius-sm": "4px",
    "radius-md": "8px",
    "radius-lg": "12px",
    "radius-xl": "16px",
    "radius-pill": "9999px",
    "radius-circle": "50%",
    "radius-unset": "unset",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Radius", overrides);
  }
}

export class BorderWidthTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "border-width-none": "0",
    "border-width-hairline": "1px",
    "border-width-thin": "2px",
    "border-width-base": "4px",
    "border-width-thick": "6px",
    "border-width-heavy": "12px",
    "border-width-unset": "unset",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Border width", overrides);
  }
}

export class BreakpointTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    md: "768px",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Breakpoint", overrides);
  }
}

// Generate

const all = [
  new FontSizeTokenGenerator(),
  new SpacingTokenGenerator(),
  new ZIndexTokenGenerator(),
  new FontWeightTokenGenerator(),
  new LineHeightTokenGenerator(),
  new LetterSpacingTokenGenerator(),
  new ShadowTokenGenerator(),
  new BackdropsTokenGenerator(),
  new RadiusTokenGenerator(),
  new BorderWidthTokenGenerator(),
  new BreakpointTokenGenerator(),
];

all.forEach((generator) => console.log(generator.getTokens()));
