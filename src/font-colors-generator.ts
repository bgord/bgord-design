import { GeneratorInterface, GeneratorConfigType } from './generator';

export class FontColorsGenerator implements GeneratorInterface {
  colors: GeneratorConfigType['colors'];

  constructor(config: GeneratorConfigType) {
    this.colors = config.colors;
  }

  generateHeader(): string {
    return '/* Font colors */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-color="*"
    for (const [key, value] of Object.entries(this.colors)) {
      output += `*[data-color='${key}'] {\n  color: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
