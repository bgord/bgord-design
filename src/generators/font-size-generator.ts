import { AbstractGenerator, GeneratorConfigType } from "../generator";

export class FontSizeGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super("Font sizes");
  }

  generateCss(): string {
    let output = "";

    // Regular display: data-fs="*"
    for (const [key, value] of Object.entries(this.config.FontSizes)) {
      output += `*[data-fs='${key}'] {\n  font-size: ${value}px;\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.FontSizes)) {
        output += `  *[data-${name}-fs='${key}'] {\n    font-size: ${value}px;\n  }\n`;
      }

      output += "}\n";
    }

    return output;
  }
}
