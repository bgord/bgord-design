import { AbstractGenerator, GeneratorConfigType } from './generator';

export class FlexGrowsGenerator extends AbstractGenerator {
  flexGrows: GeneratorConfigType['flexGrows'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Flex grows');

    this.flexGrows = config.flexGrows;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-grow="*"
    for (const [key, value] of Object.entries(this.flexGrows)) {
      output += `*[data-grow='${key}'] {\n  flex-grow: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.flexGrows)) {
        output += `  *[data-${name}-grow='${key}'] {\n    flex-grow: ${value};\n  }\n`;
      }

      output += `}\n`;
    }

    return output;
  }
}
