import { AbstractGenerator, GeneratorConfigType } from './generator';

export class AxisPlacementsGenerator extends AbstractGenerator {
  axisPlacements: GeneratorConfigType['axisPlacements'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super();
    this.axisPlacements = config.axisPlacements;
    this.breakpoints = config.breakpoints;
  }

  generateHeader(): string {
    return '/* Axis placements */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Main axis placement: data-main="*"
    for (const [key, value] of Object.entries(this.axisPlacements)) {
      output += `*[data-main='${key}'] {\n  justify-content: ${value};\n}\n`;
    }

    // Cross axis placement: data-cross="*"
    for (const [key, value] of Object.entries(this.axisPlacements)) {
      output += `*[data-cross='${key}'] {\n  align-items: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.axisPlacements)) {
        output += `  *[data-${name}-main='${key}'] {\n    justify-content: ${value};\n  }\n`;
      }

      for (const [key, value] of Object.entries(this.axisPlacements)) {
        output += `  *[data-${name}-cross='${key}'] {\n    align-items: ${value};\n  }\n`;
      }

      output += `}\n`;
    }

    return output;
  }
}
