import { AbstractGenerator, GeneratorConfigType } from '../generator';

export class RotatesGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Rotates');
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-rotate="*"
    for (const [key, value] of Object.entries(this.config.Rotates)) {
      output += `*[data-rotate='${key}'] {\n  transform: rotate(${value}deg);\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.Rotates)) {
        output += `  *[data-${name}-rotate='${key}'] {\n    transform: rotate(${value}deg);\n  }\n`;
      }

      output += '}\n';
    }

    return output;
  }
}
