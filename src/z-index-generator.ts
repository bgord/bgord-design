import { AbstractGenerator, GeneratorConfigType } from './generator';

export class ZIndexGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Z indexes');
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-z="*"
    for (const [key, value] of Object.entries(this.config.ZIndexes)) {
      output += `*[data-z='${key}'] {\n  z-index: ${value};\n}\n`;
    }

    return output;
  }
}
