import { AbstractGenerator, GeneratorConfigType } from './generator';

export class PointerEventsGenerator extends AbstractGenerator {
  pointerEvents: GeneratorConfigType['pointerEvents'];
  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Pointer events');

    this.pointerEvents = config.pointerEvents;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-pointer-events="*"
    for (const [key, value] of Object.entries(this.pointerEvents)) {
      output += `*[data-pointer-events='${key}'] {\n  pointer-events: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.pointerEvents)) {
        output += `  *[data-${name}-pointer-events='${key}'] {\n    pointer-events: ${value};\n  }\n`;
      }

      output += `}\n`;
    }

    return output;
  }
}
