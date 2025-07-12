import { AbstractGenerator, GeneratorConfigType } from "../generator";

export class HeightsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super("Heights");
  }

  generateCss(): string {
    let output = "";

    // Regular display: data-height="*"
    for (const [key, value] of Object.entries(this.config.Heights)) {
      output += `*[data-height='${key}'] {\n  height: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.Heights)) {
        output += `  *[data-${name}-height='${key}'] {\n    height: ${value};\n  }\n`;
      }

      output += "}\n";
    }

    return output;
  }
}
