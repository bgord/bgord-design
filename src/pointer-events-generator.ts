import { AbstractGenerator, GeneratorConfigType } from './generator';

export class PointerEventsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Pointer events');
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-pointer-events="*"
    for (const [key, value] of Object.entries(this.config.PointerEvents)) {
      output += `*[data-pointer-events='${key}'] {\n  pointer-events: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.PointerEvents)) {
        output += `  *[data-${name}-pointer-events='${key}'] {\n    pointer-events: ${value};\n  }\n`;
      }

      output += '}\n';
    }

    return output;
  }
}
