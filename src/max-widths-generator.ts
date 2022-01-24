import { GeneratorInterface, GeneratorConfigType } from './generator';

export class MaxWidthsGenerator implements GeneratorInterface {
  maxWidths: GeneratorConfigType['maxWidths'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    this.maxWidths = config.maxWidths;
    this.breakpoints = config.breakpoints;
  }

  generateHeader(): string {
    return '/* Max widths */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-max-width="*"
    for (const [key, value] of Object.entries(this.maxWidths)) {
      output += `*[data-max-width='${key}'] {\n  max-width: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.maxWidths)) {
        output += `*[data-${name}-max-width='${key}'] {\n  max-width: ${value};\n}\n`;
      }

      output += `}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
