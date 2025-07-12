import { AbstractGenerator, GeneratorConfigType } from './generator';

export class BackgroundsGenerator extends AbstractGenerator {
  colors: GeneratorConfigType['Grayscale'];

  constructor(config: GeneratorConfigType) {
    super('Backgrounds');

    this.colors = {
      ...config.Grayscale,
      ...config.Greens,
      ...config.Reds,
      ...config.Oranges,
    };
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-bg="*"
    for (const [key, value] of Object.entries(this.colors)) {
      output += `*[data-bg='${key}'] {\n  background-color: ${value};\n}\n`;
    }

    return output;
  }
}
