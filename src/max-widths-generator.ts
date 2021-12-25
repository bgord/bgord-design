import { GeneratorInterface, GeneratorConfigType } from './generator';

export class MaxWidthsGenerator implements GeneratorInterface {
  maxWidths: GeneratorConfigType['maxWidths'];

  constructor(config: GeneratorConfigType) {
    this.maxWidths = config.maxWidths;
  }

  generateHeader(): string {
    return '/* Max widths */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-max-width="*"
    for (const [key, value] of Object.entries(this.maxWidths)) {
      output += `*[data-max-width='${key}'] {\n  max-width: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
