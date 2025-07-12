import { AbstractGenerator, GeneratorConfigType } from '../generator';

export class BackdropsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Backdrops');
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-backdrop="*"
    for (const [key, value] of Object.entries(this.config.Backdrops)) {
      output += `*[data-backdrop='${key}']::backdrop {\n  background: ${value};\n}\n`;
    }

    return output;
  }
}
