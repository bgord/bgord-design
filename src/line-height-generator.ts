import { GeneratorInterface, GeneratorConfigType } from './generator';

export class LineHeightGenerator implements GeneratorInterface {
  spacing: GeneratorConfigType['spacing'];
  displays: GeneratorConfigType['displays'];
  lineHeights: GeneratorConfigType['lineHeights'];

  constructor(config: GeneratorConfigType) {
    this.spacing = config.spacing;
    this.displays = config.displays;
    this.lineHeights = config.lineHeights;
  }

  generateHeader(): string {
    return '/* Line heights */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-lh="*"
    for (const [key, value] of Object.entries(this.lineHeights)) {
      output += `*[data-lh='${key}'] {\n  line-height: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
