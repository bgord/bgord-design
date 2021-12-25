import { GeneratorInterface, GeneratorConfigType } from './generator';

export class BorderRadiusesGenerator implements GeneratorInterface {
  borderRadiuses: GeneratorConfigType['borderRadiuses'];

  constructor(config: GeneratorConfigType) {
    this.borderRadiuses = config.borderRadiuses;
  }

  generateHeader(): string {
    return '/* Border radiuses */\n\n';
  }

  generateCss(): string {
    let output = '';

    for (const [key, value] of Object.entries(this.borderRadiuses)) {
      output += `*[data-br='${key}'] {\n  border-radius: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
