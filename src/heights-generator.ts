import { AbstractGenerator, GeneratorConfigType } from './generator';

export class HeightsGenerator extends AbstractGenerator {
  heights: GeneratorConfigType['heights'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Heights');

    this.heights = config.heights;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-height="*"
    for (const [key, value] of Object.entries(this.heights)) {
      output += `*[data-height='${key}'] {\n  height: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.heights)) {
        output += `  *[data-${name}-height='${key}'] {\n    height: ${value};\n  }\n`;
      }

      output += '}\n';
    }

    return output;
  }
}
