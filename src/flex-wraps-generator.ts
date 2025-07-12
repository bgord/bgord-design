import { AbstractGenerator, GeneratorConfigType } from './generator';

export class FlexWrapGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Flex wraps');
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-wrap="*"
    for (const [key, value] of Object.entries(this.config.FlexWraps)) {
      output += `*[data-wrap='${key}'] {\n  flex-wrap: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.FlexWraps)) {
        output += `  *[data-${name}-wrap='${key}'] {\n    flex-wrap: ${value};\n  }\n`;
      }

      output += '}\n';
    }

    return output;
  }
}
