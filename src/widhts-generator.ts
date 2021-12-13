import { GeneratorInterface, GeneratorConfigType } from './generator';

export class WidthsGenerator implements GeneratorInterface {
  widhts: GeneratorConfigType['widths'];

  constructor(config: GeneratorConfigType) {
    this.widhts = config.widths;
  }

  generateHeader(): string {
    return '/* Widths */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-width="*"
    for (const [key, value] of Object.entries(this.widhts)) {
      output += `*[data-width='${key}'] {\n  width: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
