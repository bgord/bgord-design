import { AbstractGenerator, GeneratorConfigType } from './generator';

export class FlexShrinksGenerator extends AbstractGenerator {
  flexShrinks: GeneratorConfigType['flexShrinks'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Flex shrinks');

    this.flexShrinks = config.flexShrinks;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-shrink="*"
    for (const [key, value] of Object.entries(this.flexShrinks)) {
      output += `*[data-shrink='${key}'] {\n  flex-shrink: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.flexShrinks)) {
        output += `  *[data-${name}-shrink='${key}'] {\n    flex-shrink: ${value};\n  }\n`;
      }

      output += `}\n`;
    }

    return output;
  }
}
