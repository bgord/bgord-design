import { GeneratorInterface, GeneratorConfigType } from './generator';

export class FlexGrowsGenerator implements GeneratorInterface {
  flexGrows: GeneratorConfigType['flexGrows'];

  constructor(config: GeneratorConfigType) {
    this.flexGrows = config.flexGrows;
  }

  generateHeader(): string {
    return '/* Line heights */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-grow="*"
    for (const [key, value] of Object.entries(this.flexGrows)) {
      output += `*[data-grow='${key}'] {\n  flex-grow: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
