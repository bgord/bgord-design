import { GeneratorInterface, GeneratorConfigType } from './generator';

export class FlexDirectionsGenerator implements GeneratorInterface {
  spacing: GeneratorConfigType['spacing'];
  displays: GeneratorConfigType['displays'];
  flexDirections: GeneratorConfigType['flexDirections'];

  constructor(config: GeneratorConfigType) {
    this.spacing = config.spacing;
    this.displays = config.displays;
    this.flexDirections = config.flexDirections;
  }

  generateHeader(): string {
    return '/* Flex directions */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-direction="*"
    for (const [key, value] of Object.entries(this.flexDirections)) {
      output += `*[data-direction='${key}'] {\n  flex-direction: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
