import { AbstractGenerator, GeneratorConfigType } from "../generator";

export class WidthsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super("Widths");
  }

  generateCss(): string {
    let output = "";

    // Regular display: data-width="*"
    for (const [key, value] of Object.entries(this.config.Widths)) {
      output += `*[data-width='${key}'] {\n  width: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.Widths)) {
        output += `  *[data-${name}-width='${key}'] {\n    width: ${value};\n  }\n`;
      }

      output += "}\n";
    }

    return output;
  }
}
