import { AbstractGenerator, GeneratorConfigType } from './generator';

export class FontWeightGenerator extends AbstractGenerator {
  fontWeights: GeneratorConfigType['fontWeights'];

  constructor(config: GeneratorConfigType) {
    super('Font sizes');

    this.fontWeights = config.fontWeights;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-fw="*"
    for (const [key, value] of Object.entries(this.fontWeights)) {
      output += `*[data-fw='${key}'] {\n  font-weight: ${value};\n}\n`;
    }

    return output;
  }
}
