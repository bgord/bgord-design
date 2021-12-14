import { GeneratorInterface, GeneratorConfigType } from './generator';

export class FontSizeGenerator implements GeneratorInterface {
  fontSizes: GeneratorConfigType['fontSizes'];

  constructor(config: GeneratorConfigType) {
    this.fontSizes = config.fontSizes;
  }

  generateHeader(): string {
    return '/* Font sizes */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-fs="*"
    for (const [key, value] of Object.entries(this.fontSizes)) {
      output += `*[data-fs='${key}'] {\n  font-size: ${value}px;\n}\n`;
    }

    for (const [name, value] of Object.entries(this.fontSizes)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.fontSizes)) {
        output += `  *[data-${name}-fs='${key}'] {\n    font-size: ${value}px;\n  }\n`;
      }

      output += `}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
