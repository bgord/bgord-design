import { AbstractGenerator, GeneratorConfigType } from "../generator";

export class DisplaysGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super("Displays");
  }

  generateCss(): string {
    let output = "";

    // Regular display: data-display="*"
    for (const [key, value] of Object.entries(this.config.Displays)) {
      if (value === "flex") {
        output += `*[data-display='${key}'] {\n  display: ${value};\nflex-wrap: wrap;\n}\n`;
      } else {
        output += `*[data-display='${key}'] {\n  display: ${value};\n}\n`;
      }
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.Displays)) {
        if (value === "flex") {
          output += `*[data-${name}-display='${key}'] {\n  display: ${value};\nflex-wrap: wrap;\n}\n`;
        } else {
          output += `*[data-${name}-display='${key}'] {\n  display: ${value};\n}\n`;
        }
      }

      output += "}\n";
    }

    return output;
  }
}
