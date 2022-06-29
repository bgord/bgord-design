import { AbstractGenerator, GeneratorConfigType } from './generator';

export class GapGenerator extends AbstractGenerator {
  spacing: GeneratorConfigType['spacing'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Gaps');

    this.spacing = config.spacing;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    // Regular gap: data-gap="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-gap='${key}'] {\n  gap: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.spacing)) {
        output += `  *[data-${name}-gap='${key}'] {\n    gap: ${value};\n  }\n`;
      }

      output += `}\n`;
    }

    return output;
  }
}
