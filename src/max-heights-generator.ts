import { AbstractGenerator, GeneratorConfigType } from './generator';

export class MaxHeightsGenerator extends AbstractGenerator {
  maxHeights: GeneratorConfigType['maxHeights'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Max heights');

    this.maxHeights = config.maxHeights;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-max-height="*"
    for (const [key, value] of Object.entries(this.maxHeights)) {
      output += `*[data-max-height='${key}'] {\n  max-height: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.maxHeights)) {
        output += `*[data-${name}-max-height='${key}'] {\n  max-height: ${value};\n}\n`;
      }

      output += `}\n`;
    }

    return output;
  }
}
