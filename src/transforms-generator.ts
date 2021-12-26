import { GeneratorInterface, GeneratorConfigType } from './generator';

export class TransformsGenerator implements GeneratorInterface {
  transforms: GeneratorConfigType['transforms'];

  constructor(config: GeneratorConfigType) {
    this.transforms = config.transforms;
  }

  generateHeader(): string {
    return '/* Transforms */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-transform="*"
    for (const [key, value] of Object.entries(this.transforms)) {
      output += `*[data-transform='${key}'] {\n  text-transform: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
