import { AbstractGenerator, GeneratorConfigType } from './generator';

export class PositionsGenerator extends AbstractGenerator {
  positions: GeneratorConfigType['positions'];

  constructor(config: GeneratorConfigType) {
    super('Positions');

    this.positions = config.positions;
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
