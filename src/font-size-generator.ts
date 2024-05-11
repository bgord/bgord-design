import { AbstractGenerator, GeneratorConfigType } from './generator';

export class FontSizeGenerator extends AbstractGenerator {
  fontSizes: GeneratorConfigType['fontSizes'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Font sizes');

    this.fontSizes = config.fontSizes;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-fs="*"
    for (const [key, value] of Object.entries(this.fontSizes)) {
      output += `*[data-fs='${key}'] {\n  font-size: ${value}px;\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.fontSizes)) {
        output += `  *[data-${name}-fs='${key}'] {\n    font-size: ${value}px;\n  }\n`;
      }

      output += '}\n';
    }

    return output;
  }
}
