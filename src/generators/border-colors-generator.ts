import { AbstractGenerator, GeneratorConfigType } from '../generator';

export class BorderColorsGenerator extends AbstractGenerator {
  borderColors: GeneratorConfigType['BorderColors'];
  greens: GeneratorConfigType['Greens'];
  oranges: GeneratorConfigType['Oranges'];
  reds: GeneratorConfigType['Reds'];

  constructor(config: GeneratorConfigType) {
    super('Border colors');

    this.borderColors = config.BorderColors;
    this.greens = config.Greens;
    this.oranges = config.Oranges;
    this.reds = config.Reds;
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
}
