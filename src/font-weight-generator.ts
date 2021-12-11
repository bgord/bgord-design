import { GeneratorInterface, GeneratorConfigType } from './generator';

export class FontWeightGenerator implements GeneratorInterface {
  spacing: GeneratorConfigType['spacing'];
  displays: GeneratorConfigType['displays'];
  fontWeights: GeneratorConfigType['fontWeights'];

  constructor(config: GeneratorConfigType) {
    this.spacing = config.spacing;
    this.displays = config.displays;
    this.fontWeights = config.fontWeights;
  }

  generateHeader(): string {
    return '/* Font sizes */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-fw="*"
    for (const [key, value] of Object.entries(this.fontWeights)) {
      output += `*[data-fw='${key}'] {\n  font-weight: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
