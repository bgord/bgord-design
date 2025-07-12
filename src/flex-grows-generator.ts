import { AbstractGenerator, GeneratorConfigType } from './generator';

export class FlexGrowsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Flex grows');
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-grow="*"
    for (const [key, value] of Object.entries(this.config.FlexGrows)) {
      output += `*[data-grow='${key}'] {\n  flex-grow: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.FlexGrows)) {
        output += `  *[data-${name}-grow='${key}'] {\n    flex-grow: ${value};\n  }\n`;
      }

      output += '}\n';
    }

    return output;
  }
}
