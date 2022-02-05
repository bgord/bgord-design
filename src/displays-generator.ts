import { GeneratorInterface, GeneratorConfigType } from './generator';

export class DisplaysGenerator implements GeneratorInterface {
  displays: GeneratorConfigType['displays'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    this.displays = config.displays;
    this.breakpoints = config.breakpoints;
  }

  generateHeader(): string {
    return '/* Displays */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-display="*"
    for (const [key, value] of Object.entries(this.displays)) {
      if (value === 'flex') {
        output += `*[data-display='${key}'] {\n  display: ${value};\nflex-wrap: wrap;\n}\n`;
      } else {
        output += `*[data-display='${key}'] {\n  display: ${value};\n}\n`;
      }
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.displays)) {
        if (value === 'flex') {
          output += `*[data-${name}-display='${key}'] {\n  display: ${value};\nflex-wrap: wrap;\n}\n`;
        } else {
          output += `*[data-${name}-display='${key}'] {\n  display: ${value};\n}\n`;
        }
      }

      output += `}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
