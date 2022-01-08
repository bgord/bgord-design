import { GeneratorInterface, GeneratorConfigType } from './generator';

export class OverflowsGenerator implements GeneratorInterface {
  overflows: GeneratorConfigType['overflows'];

  constructor(config: GeneratorConfigType) {
    this.overflows = config.overflows;
  }

  generateHeader(): string {
    return '/* Overflows */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-overflow="*"
    for (const [key, value] of Object.entries(this.overflows)) {
      output += `*[data-overflow='${key}'] {\n  overflow: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
