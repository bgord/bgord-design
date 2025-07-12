import { AbstractGenerator, GeneratorConfigType } from './generator';

export class ShadowsGenerator extends AbstractGenerator {
  shadows: GeneratorConfigType['shadows'];

  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Shadows');

    this.shadows = config.shadows;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-shadow="*"
    for (const [key, value] of Object.entries(this.shadows)) {
      output += `*[data-shadow='${key}'] {\n  box-shadow: ${value};\n}\n`;
    }

    return output;
  }
}
