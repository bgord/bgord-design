import { AbstractGenerator, GeneratorConfigType } from '../generator';

export class BorderRadiusesGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Border radiuses');
  }

  generateCss(): string {
    let output = '';

    for (const [key, value] of Object.entries(this.config.BorderRadiuses)) {
      output += `*[data-br='${key}'] {\n  border-radius: ${value};\n}\n`;
    }

    return output;
  }
}
