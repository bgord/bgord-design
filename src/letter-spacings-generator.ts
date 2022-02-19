import { AbstractGenerator, GeneratorConfigType } from './generator';

export class LetterSpacingsGenerator extends AbstractGenerator {
  letterSpacings: GeneratorConfigType['letterSpacings'];

  constructor(config: GeneratorConfigType) {
    super('Letter spacings');

    this.letterSpacings = config.letterSpacings;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-ls="*"
    for (const [key, value] of Object.entries(this.letterSpacings)) {
      output += `*[data-ls='${key}'] {\n  letter-spacing: ${value}px;\n}\n`;
    }

    return output;
  }
}
