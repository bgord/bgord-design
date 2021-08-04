import { GeneratorInterface, GeneratorConfigType } from './generator';

export class FontSizeGenerator implements GeneratorInterface {
  spacing: GeneratorConfigType['spacing'];
  displays: GeneratorConfigType['displays'];
  fontSizes: GeneratorConfigType['fontSizes'];

  constructor(config: GeneratorConfigType) {
    this.spacing = config.spacing;
    this.displays = config.displays;
    this.fontSizes = config.fontSizes;
  }

  generateHeader(): string {
    return '/* Font sizes */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-fs="*"
    for (const [key, value] of Object.entries(this.fontSizes)) {
      output += `*[data-fs='${key}'] {\n  font-size: ${value}px;\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
