import { AbstractGenerator, GeneratorConfigType } from './generator';

export class ObjectFitsGenerator extends AbstractGenerator {
  objectFits: GeneratorConfigType['objectFits'];

  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Object fits');

    this.objectFits = config.objectFits;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-object-fit="*"
    for (const [key, value] of Object.entries(this.objectFits)) {
      output += `*[data-object-fit='${key}'] {\n  object-fit: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.objectFits)) {
        output += `  *[data-${name}-object-fit='${key}'] {\n    object-fit: ${value};\n  }\n`;
      }

      output += '}\n';
    }

    return output;
  }
}
