import { AbstractGenerator, GeneratorConfigType } from "../generator";

export class Margins extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super("Margins");
  }

  generateCss(): string {
    let output = "";

    for (const [key, value] of Object.entries(this.config.Spacing)) {
      output += `*[data-m='${key}'] {\n  margin: ${value};\n}\n`;
    }

    for (const [key, value] of Object.entries(this.config.Spacing)) {
      output += `*[data-mx='${key}'] {\n  margin-left: ${value};\n  margin-right: ${value};\n}\n`;
    }

    for (const [key, value] of Object.entries(this.config.Spacing)) {
      output += `*[data-my='${key}'] {\n  margin-top: ${value};\n  margin-bottom: ${value};\n}\n`;
    }

    for (const [key, value] of Object.entries(this.config.Spacing)) {
      output += `*[data-mt='${key}'] {\n  margin-top: ${value};\n}\n`;
    }

    for (const [key, value] of Object.entries(this.config.Spacing)) {
      output += `*[data-mr='${key}'] {\n  margin-right: ${value};\n}\n`;
    }

    for (const [key, value] of Object.entries(this.config.Spacing)) {
      output += `*[data-mb='${key}'] {\n  margin-bottom: ${value};\n}\n`;
    }

    for (const [key, value] of Object.entries(this.config.Spacing)) {
      output += `*[data-ml='${key}'] {\n  margin-left: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.Spacing)) {
        output += `  *[data-${name}-m='${key}'] {\n    margin: ${value};\n  }\n`;
      }

      for (const [key, value] of Object.entries(this.config.Spacing)) {
        output += `  *[data-${name}-mx='${key}'] {\n    margin-left: ${value};\n    margin-right: ${value};\n  }\n`;
      }

      for (const [key, value] of Object.entries(this.config.Spacing)) {
        output += `  *[data-${name}-my='${key}'] {\n    margin-top: ${value};\n    margin-bottom: ${value};\n  }\n`;
      }

      for (const [key, value] of Object.entries(this.config.Spacing)) {
        output += `  *[data-${name}-mt='${key}'] {\n    margin-top: ${value};\n  }\n`;
      }

      for (const [key, value] of Object.entries(this.config.Spacing)) {
        output += `  *[data-${name}-mr='${key}'] {\n    margin-right: ${value};\n  }\n`;
      }

      for (const [key, value] of Object.entries(this.config.Spacing)) {
        output += `  *[data-${name}-mb='${key}'] {\n    margin-bottom: ${value};\n  }\n`;
      }

      for (const [key, value] of Object.entries(this.config.Spacing)) {
        output += `  *[data-${name}-ml='${key}'] {\n    margin-left: ${value};\n  }\n`;
      }

      output += "}\n";
    }

    return output;
  }
}
