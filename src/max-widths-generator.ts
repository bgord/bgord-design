import { AbstractGenerator, GeneratorConfigType } from './generator';

export class MaxWidthsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Max widths');
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-max-width="*"
    for (const [key, value] of Object.entries(this.config.MaxWidths)) {
      output += `*[data-max-width='${key}'] {\n  max-width: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.MaxWidths)) {
        output += `*[data-${name}-max-width='${key}'] {\n  max-width: ${value};\n}\n`;
      }

      output += '}\n';
    }

    return output;
  }
}
