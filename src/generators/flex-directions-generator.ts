import { AbstractGenerator, GeneratorConfigType } from "../generator";

export class FlexDirectionsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super("Flex directions");
  }

  generateCss(): string {
    let output = "";

    for (const [key, value] of Object.entries(this.config.FlexDirections)) {
      output += `*[data-direction='${key}'] {\n  flex-direction: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.FlexDirections)) {
        output += `  *[data-${name}-direction='${key}'] {\n    flex-direction: ${value};\n  }\n`;
      }

      output += "}\n";
    }

    return output;
  }
}
