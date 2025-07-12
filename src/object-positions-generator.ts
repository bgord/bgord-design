import { AbstractGenerator, GeneratorConfigType } from './generator';

export class ObjectPositionsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Object positions');
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-object-position="*"
    for (const [key, value] of Object.entries(this.config.ObjectPositions)) {
      output += `*[data-object-position='${key}'] {\n  object-position: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.ObjectPositions)) {
        output += `  *[data-${name}-object-position='${key}'] {\n    object-position: ${value};\n  }\n`;
      }

      output += '}\n';
    }

    return output;
  }
}
