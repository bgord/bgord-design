import { GeneratorInterface, GeneratorConfigType } from './generator';

export class LetterSpacingsGenerator implements GeneratorInterface {
  letterSpacings: GeneratorConfigType['letterSpacings'];

  constructor(config: GeneratorConfigType) {
    this.letterSpacings = config.letterSpacings;
  }

  generateHeader(): string {
    return '/* Font sizes */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-ls="*"
    for (const [key, value] of Object.entries(this.letterSpacings)) {
      output += `*[data-ls='${key}'] {\n  letter-spacing: ${value}px;\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}