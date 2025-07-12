import { AbstractGenerator, GeneratorConfigType } from "../generator";

export class LineHeightsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super("Line heights");
  }

  generateCss(): string {
    let output = "";

    // Regular display: data-lh="*"
    for (const [key, value] of Object.entries(this.config.LineHeights)) {
      output += `*[data-lh='${key}'] {\n  line-height: ${value}px;\n}\n`;
    }

    return output;
  }
}
