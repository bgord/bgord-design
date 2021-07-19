import { GeneratorInterface, GeneratorConfigType } from './generator';

export class DisplaysGenerator implements GeneratorInterface {
  spacing: GeneratorConfigType['spacing'];
  displays: GeneratorConfigType['displays'];

  constructor(config: GeneratorConfigType) {
    this.spacing = config.spacing;
    this.displays = config.displays;
  }

  generateHeader(): string {
    return '/* Displays */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-display="*"
    for (const [key, value] of Object.entries(this.displays)) {
      output += `*[data-display='${key}'] {\n  display: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
