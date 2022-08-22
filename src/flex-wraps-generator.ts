import { AbstractGenerator, GeneratorConfigType } from './generator';

export class FlexWrapGenerator extends AbstractGenerator {
  flexWraps: GeneratorConfigType['flexWraps'];

  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Flex wraps');

    this.flexWraps = config.flexWraps;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-wrap="*"
    for (const [key, value] of Object.entries(this.flexWraps)) {
      output += `*[data-wrap='${key}'] {\n  flex-wrap: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.flexWraps)) {
        output += `  *[data-${name}-wrap='${key}'] {\n    flex-wrap: ${value};\n  }\n`;
      }

      output += `}\n`;
    }

    return output;
  }
}
