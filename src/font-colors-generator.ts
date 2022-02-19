import { AbstractGenerator, GeneratorConfigType } from './generator';

export class FontColorsGenerator extends AbstractGenerator {
  colors: GeneratorConfigType['grayscale'];

  constructor(config: GeneratorConfigType) {
    super('Font colors');

    this.colors = {
      ...config.grayscale,
      ...config.greens,
      ...config.reds,
      ...config.oranges,
    };
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-color="*"
    for (const [key, value] of Object.entries(this.colors)) {
      output += `*[data-color='${key}'] {\n  color: ${value};\n}\n`;
    }

    return output;
  }
}
