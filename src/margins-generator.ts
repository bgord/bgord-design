import { GeneratorInterface } from './generator';
import { Spacing } from './tokens';

export class Margins implements GeneratorInterface {
  spacing: typeof Spacing;

  constructor(spacing: typeof Spacing) {
    this.spacing = spacing;
  }

  generateHeader(): string {
    return '/* Margins */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular margin: data-m="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-m='${key}'] {\n  margin: ${value};\n}\n`;
    }

    // Horizontal margin: data-mx="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-m='${key}'] {\n  margin-left: ${value};\n  margin-right: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
