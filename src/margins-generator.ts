import { AbstractGenerator, GeneratorConfigType } from './generator';

export class Margins extends AbstractGenerator {
  spacing: GeneratorConfigType['spacing'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super();
    this.spacing = config.spacing;
    this.breakpoints = config.breakpoints;
  }

  generateHeader(): string {
    return '/* Margins */\n\n';
  }

  generateCss(): string {
    let output = '';

    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-m='${key}'] {\n  margin: ${value};\n}\n`;
    }

    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-mx='${key}'] {\n  margin-left: ${value};\n  margin-right: ${value};\n}\n`;
    }

    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-my='${key}'] {\n  margin-top: ${value};\n  margin-bottom: ${value};\n}\n`;
    }

    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-mt='${key}'] {\n  margin-top: ${value};\n}\n`;
    }

    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-mr='${key}'] {\n  margin-right: ${value};\n}\n`;
    }

    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-mb='${key}'] {\n  margin-bottom: ${value};\n}\n`;
    }

    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-ml='${key}'] {\n  margin-left: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.spacing)) {
        output += `  *[data-${name}-m='${key}'] {\n    margin: ${value};\n  }\n`;
      }

      for (const [key, value] of Object.entries(this.spacing)) {
        output += `  *[data-${name}-mx='${key}'] {\n    margin-left: ${value};\n    margin-right: ${value};\n  }\n`;
      }

      for (const [key, value] of Object.entries(this.spacing)) {
        output += `  *[data-${name}-my='${key}'] {\n    margin-top: ${value};\n    margin-bottom: ${value};\n  }\n`;
      }

      for (const [key, value] of Object.entries(this.spacing)) {
        output += `  *[data-${name}-mt='${key}'] {\n    margin-top: ${value};\n  }\n`;
      }

      for (const [key, value] of Object.entries(this.spacing)) {
        output += `  *[data-${name}-mr='${key}'] {\n    margin-right: ${value};\n  }\n`;
      }

      for (const [key, value] of Object.entries(this.spacing)) {
        output += `  *[data-${name}-mb='${key}'] {\n    margin-bottom: ${value};\n  }\n`;
      }

      for (const [key, value] of Object.entries(this.spacing)) {
        output += `  *[data-${name}-ml='${key}'] {\n    margin-left: ${value};\n  }\n`;
      }

      output += `}\n`;
    }

    return output;
  }
}
