import { GeneratorInterface, GeneratorConfigType } from './generator';

export class ZIndexGenerator implements GeneratorInterface {
  spacing: GeneratorConfigType['spacing'];
  displays: GeneratorConfigType['displays'];
  zIndexes: GeneratorConfigType['zIndexes'];

  constructor(config: GeneratorConfigType) {
    this.spacing = config.spacing;
    this.displays = config.displays;
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
