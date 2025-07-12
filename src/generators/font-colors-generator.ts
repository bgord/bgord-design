import { AbstractGenerator, GeneratorConfigType } from "../generator";

export class FontColorsGenerator extends AbstractGenerator {
  colors: GeneratorConfigType["Grayscale"];

  constructor(config: GeneratorConfigType) {
    super("Font colors");

    this.colors = {
      ...config.Grayscale,
      ...config.Greens,
      ...config.Reds,
      ...config.Oranges,
    };
  }

  generateCss(): string {
    let output = "";

    // Regular display: data-color="*"
    for (const [key, value] of Object.entries(this.colors)) {
      output += `*[data-color='${key}'] {\n  color: ${value};\n}\n`;
    }

    return output;
  }
}
