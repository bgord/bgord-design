import { AbstractGenerator, GeneratorConfigType } from '../generator';

export class ShadowsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Shadows');
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-shadow="*"
    for (const [key, value] of Object.entries(this.config.Shadows)) {
      output += `*[data-shadow='${key}'] {\n  box-shadow: ${value};\n}\n`;
    }

    return output;
  }
}
