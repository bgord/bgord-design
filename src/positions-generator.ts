import { AbstractGenerator, GeneratorConfigType } from './generator';

export class PositionsGenerator extends AbstractGenerator {
  positions: GeneratorConfigType['positions'];

  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Positions');

    this.positions = config.positions;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-position="*"
    for (const [key, value] of Object.entries(this.positions)) {
      output += `*[data-position='${key}'] {\n  position: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.positions)) {
        output += `  *[data-${name}-position='${key}'] {\n    position: ${value};\n  }\n`;
      }

      output += '}\n';
    }

    return output;
  }
}
