import { GeneratorInterface, GeneratorConfigType } from './generator';

export class FlexDirectionsGenerator implements GeneratorInterface {
  flexDirections: GeneratorConfigType['flexDirections'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    this.flexDirections = config.flexDirections;
    this.breakpoints = config.breakpoints;
  }

  generateHeader(): string {
    return '/* Flex directions */\n\n';
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

      output += `}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
