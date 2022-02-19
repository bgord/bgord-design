import { AbstractGenerator, GeneratorConfigType } from './generator';

export class BackgroundsGenerator extends AbstractGenerator {
  colors: GeneratorConfigType['grayscale'];

  constructor(config: GeneratorConfigType) {
    super();
    this.colors = {
      ...config.grayscale,
      ...config.greens,
      ...config.reds,
      ...config.oranges,
    };
  }

  generateHeader(): string {
    return '/* Backgrounds */\n\n';
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
