import { AbstractGenerator, GeneratorConfigType } from '../generator';

export class PositionsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Positions');
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-position="*"
    for (const [key, value] of Object.entries(this.config.Positions)) {
      output += `*[data-position='${key}'] {\n  position: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.Positions)) {
        output += `  *[data-${name}-position='${key}'] {\n    position: ${value};\n  }\n`;
      }

      output += '}\n';
    }

    return output;
  }
}
