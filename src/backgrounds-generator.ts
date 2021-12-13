import { GeneratorInterface, GeneratorConfigType } from './generator';

export class BackgroundsGenerator implements GeneratorInterface {
  colors: GeneratorConfigType['colors'];

  constructor(config: GeneratorConfigType) {
    this.colors = config.colors;
  }

  generateHeader(): string {
    return '/* Backgrounds */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-bg="*"
    for (const [key, value] of Object.entries(this.colors)) {
      output += `*[data-bg='${key}'] {\n  background-color: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
