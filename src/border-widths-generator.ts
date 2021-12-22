import { GeneratorInterface, GeneratorConfigType } from './generator';

export class BorderWidthsGenerator implements GeneratorInterface {
  borderWidths: GeneratorConfigType['borderWidths'];

  constructor(config: GeneratorConfigType) {
    this.borderWidths = config.borderWidths;
  }

  generateHeader(): string {
    return '/* Border widths */\n\n';
  }

  generateCss(): string {
    let output = '';

    for (const [key, value] of Object.entries(this.borderWidths)) {
      output += `*[data-bw='${key}'] {\n  border-width: ${value}px;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.borderWidths)) {
      output += `*[data-bwx='${key}'] {\n  border-left-width: ${value}px;\n  border-right-width: ${value}px;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.borderWidths)) {
      output += `*[data-bwy='${key}'] {\n  border-top-width: ${value}px;\n  border-bottom-width: ${value}px;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.borderWidths)) {
      output += `*[data-bwt='${key}'] {\n  border-top-width: ${value}px;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.borderWidths)) {
      output += `*[data-bwr='${key}'] {\n  border-right-width: ${value}px;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.borderWidths)) {
      output += `*[data-bwb='${key}'] {\n  border-bottom-width: ${value}px;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.borderWidths)) {
      output += `*[data-bwl='${key}'] {\n  border-left-width: ${value}px;\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
