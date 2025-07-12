import { AbstractGenerator, GeneratorConfigType } from "../generator";

export class CursorsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super("Cursors");
  }

  generateCss(): string {
    let output = "";

    // Regular display: data-cursor="*"
    for (const [key, value] of Object.entries(this.config.Cursors)) {
      output += `*[data-cursor='${key}'] {\n  cursor: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.Cursors)) {
        output += `  *[data-${name}-cursor='${key}'] {\n    cursor: ${value};\n  }\n`;
      }

      output += "}\n";
    }

    return output;
  }
}
