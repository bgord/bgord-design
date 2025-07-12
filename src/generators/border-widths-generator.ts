import { AbstractGenerator, GeneratorConfigType } from "../generator";

export class BorderWidthsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super("Border widths");
  }

  generateCss(): string {
    let output = "";

    for (const [key, value] of Object.entries(this.config.BorderWidths)) {
      output += `*[data-bw='${key}'] {\n  border-width: ${value}px;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.config.BorderWidths)) {
      output += `*[data-bwx='${key}'] {\n  border-left-width: ${value}px;\n  border-right-width: ${value}px;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.config.BorderWidths)) {
      output += `*[data-bwy='${key}'] {\n  border-top-width: ${value}px;\n  border-bottom-width: ${value}px;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.config.BorderWidths)) {
      output += `*[data-bwt='${key}'] {\n  border-top-width: ${value}px;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.config.BorderWidths)) {
      output += `*[data-bwr='${key}'] {\n  border-right-width: ${value}px;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.config.BorderWidths)) {
      output += `*[data-bwb='${key}'] {\n  border-bottom-width: ${value}px;\n}\n`;
    }

    for (const [key, value] of Object.entries(this.config.BorderWidths)) {
      output += `*[data-bwl='${key}'] {\n  border-left-width: ${value}px;\n}\n`;
    }

    return output;
  }
}
