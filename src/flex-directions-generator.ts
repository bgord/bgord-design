import { AbstractGenerator, GeneratorConfigType } from './generator';

export class FlexDirectionsGenerator extends AbstractGenerator {
  flexDirections: GeneratorConfigType['flexDirections'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Flex directions');

    this.flexDirections = config.flexDirections;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    for (const [key, value] of Object.entries(this.flexDirections)) {
      output += `*[data-direction='${key}'] {\n  flex-direction: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.flexDirections)) {
        output += `  *[data-${name}-direction='${key}'] {\n    flex-direction: ${value};\n  }\n`;
      }

      output += "}\n";
    }

    return output;
  }
}
