import { AbstractGenerator, GeneratorConfigType } from '../generator';

export class FontWeightGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Font weights');
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-fw="*"
    for (const [key, value] of Object.entries(this.config.FontWeights)) {
      output += `*[data-fw='${key}'] {\n  font-weight: ${value};\n}\n`;
    }

    return output;
  }
}
