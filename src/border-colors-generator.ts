import { GeneratorInterface, GeneratorConfigType } from './generator';

export class BorderColorsGenerator implements GeneratorInterface {
  borderColors: GeneratorConfigType['borderColors'];

  constructor(config: GeneratorConfigType) {
    this.borderColors = config.borderColors;
  }

  generateHeader(): string {
    return '/* Border colors */\n\n';
  }

  generateCss(): string {
    let output = '';

    for (const [key, value] of Object.entries(this.borderColors)) {
      output += `*[data-bc='${key}'] {\n  border-color: ${value};\n  border-style: solid;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.borderColors)) {
      output += `*[data-bcx='${key}'] {\n  border-right-color: ${value};\n  border-left-color: ${value};\n border-style: solid;\n}\n`;
    }
    for (const [key, value] of Object.entries(this.borderColors)) {
      output += `*[data-bcy='${key}'] {\n  border-top-color: ${value};\n  border-bottom-color: ${value};\n border-style: solid;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.borderColors)) {
      output += `*[data-bct='${key}'] {\n  border-top-color: ${value};\n  border-style: solid;\n}\n`;
    }
    for (const [key, value] of Object.entries(this.borderColors)) {
      output += `*[data-bcr='${key}'] {\n  border-right-color: ${value};\n  border-style: solid;\n}\n`;
    }
    for (const [key, value] of Object.entries(this.borderColors)) {
      output += `*[data-bcb='${key}'] {\n  border-bottom-color: ${value};\n  border-style: solid;\n}\n`;
    }
    for (const [key, value] of Object.entries(this.borderColors)) {
      output += `*[data-bcl='${key}'] {\n  border-left-color: ${value};\n  border-style: solid;\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
