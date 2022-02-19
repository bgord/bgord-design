import { AbstractGenerator, GeneratorConfigType } from './generator';

export class LineHeightsGenerator extends AbstractGenerator {
  lineHeights: GeneratorConfigType['lineHeights'];

  constructor(config: GeneratorConfigType) {
    super();
    this.lineHeights = config.lineHeights;
  }

  generateHeader(): string {
    return '/* Line heights */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-lh="*"
    for (const [key, value] of Object.entries(this.lineHeights)) {
      output += `*[data-lh='${key}'] {\n  line-height: ${value}px;\n}\n`;
    }

    return output;
  }
}
