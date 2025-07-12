import { AbstractGenerator, GeneratorConfigType } from "../generator";

export class MaxHeightsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super("Max heights");
  }

  generateCss(): string {
    let output = "";

    // Regular display: data-max-height="*"
    for (const [key, value] of Object.entries(this.config.MaxHeights)) {
      output += `*[data-max-height='${key}'] {\n  max-height: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.MaxHeights)) {
        output += `*[data-${name}-max-height='${key}'] {\n  max-height: ${value};\n}\n`;
      }

      output += "}\n";
    }

    return output;
  }
}
