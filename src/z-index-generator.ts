import { GeneratorInterface, GeneratorConfigType } from './generator';

export class ZIndexGenerator implements GeneratorInterface {
  zIndexes: GeneratorConfigType['zIndexes'];

  constructor(config: GeneratorConfigType) {
    this.zIndexes = config.zIndexes;
  }

  generateHeader(): string {
    return '/* Displays */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-z="*"
    for (const [key, value] of Object.entries(this.zIndexes)) {
      output += `*[data-z='${key}'] {\n  z-index: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
