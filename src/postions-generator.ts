import { AbstractGenerator, GeneratorConfigType } from './generator';

export class PositionsGenerator extends AbstractGenerator {
  positions: GeneratorConfigType['positions'];

  constructor(config: GeneratorConfigType) {
    super();
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
}
