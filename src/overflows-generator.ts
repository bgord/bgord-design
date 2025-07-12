import { AbstractGenerator, GeneratorConfigType } from './generator';

export class OverflowsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Overflows');
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-overflow="*"
    for (const [key, value] of Object.entries(this.config.Overflows)) {
      output += `*[data-overflow='${key}'] {\n  overflow: ${value};\n}\n`;
    }

    return output;
  }
}
