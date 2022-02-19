import { AbstractGenerator, GeneratorConfigType } from './generator';

export class ZIndexGenerator extends AbstractGenerator {
  zIndexes: GeneratorConfigType['zIndexes'];

  constructor(config: GeneratorConfigType) {
    super('Z indexes');
    this.zIndexes = config.zIndexes;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-z="*"
    for (const [key, value] of Object.entries(this.zIndexes)) {
      output += `*[data-z='${key}'] {\n  z-index: ${value};\n}\n`;
    }

    return output;
  }
}
