import { AbstractGenerator, GeneratorConfigType } from './generator';

export class WidthsGenerator extends AbstractGenerator {
  widths: GeneratorConfigType['widths'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Widths');

    this.widths = config.widths;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-width="*"
    for (const [key, value] of Object.entries(this.widths)) {
      output += `*[data-width='${key}'] {\n  width: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.widths)) {
        output += `  *[data-${name}-width='${key}'] {\n    width: ${value};\n  }\n`;
      }

      output += `}\n`;
    }

    return output;
  }
}
