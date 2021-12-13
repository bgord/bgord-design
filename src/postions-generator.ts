import { GeneratorInterface, GeneratorConfigType } from './generator';

export class PositionsGenerator implements GeneratorInterface {
  positions: GeneratorConfigType['positions'];

  constructor(config: GeneratorConfigType) {
    this.positions = config.positions;
  }

  generateHeader(): string {
    return '/* Positions */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-position="*"
    for (const [key, value] of Object.entries(this.positions)) {
      output += `*[data-position='${key}'] {\n  position: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
