import { AbstractGenerator, GeneratorConfigType } from './generator';

export class OverflowsGenerator extends AbstractGenerator {
  overflows: GeneratorConfigType['overflows'];

  constructor(config: GeneratorConfigType) {
    super('Overflows');

    this.overflows = config.overflows;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-overflow="*"
    for (const [key, value] of Object.entries(this.overflows)) {
      output += `*[data-overflow='${key}'] {\n  overflow: ${value};\n}\n`;
    }

    return output;
  }
}
