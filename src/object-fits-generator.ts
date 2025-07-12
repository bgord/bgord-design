import { AbstractGenerator, GeneratorConfigType } from './generator';

export class ObjectFitsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Object fits');
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-object-fit="*"
    for (const [key, value] of Object.entries(this.config.ObjectFits)) {
      output += `*[data-object-fit='${key}'] {\n  object-fit: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.ObjectFits)) {
        output += `  *[data-${name}-object-fit='${key}'] {\n    object-fit: ${value};\n  }\n`;
      }

      output += '}\n';
    }

    return output;
  }
}
