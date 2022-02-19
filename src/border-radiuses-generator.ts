import { AbstractGenerator, GeneratorConfigType } from './generator';

export class BorderRadiusesGenerator extends AbstractGenerator {
  borderRadiuses: GeneratorConfigType['borderRadiuses'];

  constructor(config: GeneratorConfigType) {
    super('Border radiuses');
    this.borderRadiuses = config.borderRadiuses;
  }

  generateCss(): string {
    let output = '';

    for (const [key, value] of Object.entries(this.borderRadiuses)) {
      output += `*[data-br='${key}'] {\n  border-radius: ${value};\n}\n`;
    }

    return output;
  }
}
