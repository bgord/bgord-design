import { AbstractGenerator, GeneratorConfigType } from './generator';

export class RotatesGenerator extends AbstractGenerator {
  rotates: GeneratorConfigType['rotates'];

  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Rotates');

    this.rotates = config.rotates;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-rotate="*"
    for (const [key, value] of Object.entries(this.rotates)) {
      output += `*[data-rotate='${key}'] {\n  transform: rotate(${value}deg);\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.rotates)) {
        output += `  *[data-${name}-rotate='${key}'] {\n    transform: rotate(${value}deg);\n  }\n`;
      }

      output += `}\n`;
    }

    return output;
  }
}
