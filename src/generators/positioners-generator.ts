import { AbstractGenerator, GeneratorConfigType } from "../generator";

export class PositionersGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super("Positioners");
  }

  generateCss(): string {
    let output = "";

    for (const [key, value] of Object.entries(this.config.Spacing)) {
      output += `*[data-top='${key}'] {\n  top: ${value};\n}\n`;
      output += `*[data-right='${key}'] {\n  right: ${value};\n}\n`;
      output += `*[data-bottom='${key}'] {\n  bottom: ${value};\n}\n`;
      output += `*[data-left='${key}'] {\n  left: ${value};\n}\n`;
      output += `*[data-inset='${key}'] {\n  inset: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.Spacing)) {
        output += `*[data-${name}-top='${key}'] {\n  top: ${value};\n}\n`;
        output += `*[data-${name}-right='${key}'] {\n  right: ${value};\n}\n`;
        output += `*[data-${name}-bottom='${key}'] {\n  bottom: ${value};\n}\n`;
        output += `*[data-${name}-left='${key}'] {\n  left: ${value};\n}\n`;
        output += `*[data-${name}-inset='${key}'] {\n  inset: ${value};\n}\n`;
      }

      output += "}\n";
    }

    return output;
  }
}
