import { AbstractGenerator, GeneratorConfigType } from './generator';

export class WidthsGenerator extends AbstractGenerator {
  widhts: GeneratorConfigType['widths'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super();
    this.widhts = config.widths;
    this.breakpoints = config.breakpoints;
  }

  generateHeader(): string {
    return '/* Widths */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-width="*"
    for (const [key, value] of Object.entries(this.widhts)) {
      output += `*[data-width='${key}'] {\n  width: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.widhts)) {
        output += `  *[data-${name}-width='${key}'] {\n    width: ${value};\n  }\n`;
      }

      output += `}\n`;
    }

    return output;
  }
}
