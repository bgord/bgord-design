import { AbstractGenerator, GeneratorConfigType } from './generator';

export class BackdropsGenerator extends AbstractGenerator {
  backdrops: GeneratorConfigType['backdrops'];

  constructor(config: GeneratorConfigType) {
    super('Backdrops');

    this.backdrops = config.backdrops;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-backdrop="*"
    for (const [key, value] of Object.entries(this.backdrops)) {
      output += `*[data-backdrop='${key}']::backdrop {\n  background: ${value};\n}\n`;
    }

    return output;
  }
}
