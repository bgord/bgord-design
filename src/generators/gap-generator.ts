import { AbstractGenerator, GeneratorConfigType } from "../generator";

export class GapGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super("Gaps");
  }

  generateCss(): string {
    let output = "";

    // Regular gap: data-gap="*"
    for (const [key, value] of Object.entries(this.config.Spacing)) {
      output += `*[data-gap='${key}'] {\n  gap: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.Spacing)) {
        output += `  *[data-${name}-gap='${key}'] {\n    gap: ${value};\n  }\n`;
      }

      output += "}\n";
    }

    return output;
  }
}
