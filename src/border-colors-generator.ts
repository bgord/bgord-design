import { GeneratorInterface, GeneratorConfigType } from './generator';

export class BorderColorsGenerator implements GeneratorInterface {
  borderColors: GeneratorConfigType['borderColors'];
  greens: GeneratorConfigType['greens'];
  oranges: GeneratorConfigType['oranges'];
  reds: GeneratorConfigType['reds'];

  constructor(config: GeneratorConfigType) {
    this.borderColors = config.borderColors;
    this.greens = config.greens;
    this.oranges = config.oranges;
    this.reds = config.reds;
  }

  generateHeader(): string {
    return '/* Border colors */\n\n';
  }

  generateCss(): string {
    let output = '';

    for (const [key, value] of Object.entries({
      ...this.borderColors,
      ...this.greens,
      ...this.oranges,
      ...this.reds,
    })) {
      output += `*[data-bc='${key}'] {\n  border-color: ${value};\n  border-style: solid;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.borderColors)) {
      output += `*[data-bcx='${key}'] {\n  border-right-color: ${value};\n  border-left-color: ${value};\n border-right-style: solid;\n  border-left-style: solid;\n}\n`;
    }
    for (const [key, value] of Object.entries(this.borderColors)) {
      output += `*[data-bcy='${key}'] {\n  border-top-color: ${value};\n  border-bottom-color: ${value};\n border-top-style: solid;\n  border-bottom-style: solid;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.borderColors)) {
      output += `*[data-bct='${key}'] {\n  border-top-color: ${value};\n  border-top-style: solid;\n}\n`;
    }
    for (const [key, value] of Object.entries(this.borderColors)) {
      output += `*[data-bcr='${key}'] {\n  border-right-color: ${value};\n  border-right-style: solid;\n}\n`;
    }
    for (const [key, value] of Object.entries(this.borderColors)) {
      output += `*[data-bcb='${key}'] {\n  border-bottom-color: ${value};\n  border-bottom-style: solid;\n}\n`;
    }
    for (const [key, value] of Object.entries(this.borderColors)) {
      output += `*[data-bcl='${key}'] {\n  border-left-color: ${value};\n  border-left-style: solid;\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
