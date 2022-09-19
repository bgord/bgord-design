import { AbstractGenerator, GeneratorConfigType } from './generator';

export class CursorsGenerator extends AbstractGenerator {
  cursors: GeneratorConfigType['cursors'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Cursors');

    this.cursors = config.cursors;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-cursor="*"
    for (const [key, value] of Object.entries(this.cursors)) {
      output += `*[data-cursor='${key}'] {\n  cursor: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.cursors)) {
        output += `  *[data-${name}-cursor='${key}'] {\n    cursor: ${value};\n  }\n`;
      }

      output += `}\n`;
    }

    return output;
  }
}
