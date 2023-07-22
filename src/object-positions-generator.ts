import { AbstractGenerator, GeneratorConfigType } from './generator';

export class ObjectPositionsGenerator extends AbstractGenerator {
  objectPositions: GeneratorConfigType['objectPositions'];

  breakpoints: GeneratorConfigType['breakpoints'];

  constructor(config: GeneratorConfigType) {
    super('Object positions');

    this.objectPositions = config.objectPositions;
    this.breakpoints = config.breakpoints;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-object-position="*"
    for (const [key, value] of Object.entries(this.objectPositions)) {
      output += `*[data-object-position='${key}'] {\n  object-position: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.objectPositions)) {
        output += `  *[data-${name}-object-position='${key}'] {\n    object-position: ${value};\n  }\n`;
      }

      output += `}\n`;
    }

    return output;
  }
}
