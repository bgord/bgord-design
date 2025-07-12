import { AbstractGenerator, GeneratorConfigType } from './generator';

export class FlexShrinksGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Flex shrinks');
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-shrink="*"
    for (const [key, value] of Object.entries(this.config.FlexShrinks)) {
      output += `*[data-shrink='${key}'] {\n  flex-shrink: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.FlexShrinks)) {
        output += `  *[data-${name}-shrink='${key}'] {\n    flex-shrink: ${value};\n  }\n`;
      }

      output += '}\n';
    }

    return output;
  }
}
