import pick from 'lodash.pick';
import { AbstractGenerator, GeneratorConfigType } from '../generator';

export class AxisPlacementsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super('Axis placements');
  }

  generateCss(): string {
    let output = '';

    // Main axis placement: data-main="*"
    for (const [key, value] of Object.entries(this.config.AxisPlacements)) {
      output += `*[data-main='${key}'] {\n  justify-content: ${value};\n}\n`;
    }

    // Cross axis placement: data-cross="*"
    for (const [key, value] of Object.entries(this.config.AxisPlacements)) {
      output += `*[data-cross='${key}'] {\n  align-items: ${value};\n}\n`;
    }

    // Self placement alongside the cross axis: data-self="*"
    for (const [key, value] of Object.entries(
      pick(this.config.AxisPlacements, ['start', 'end', 'center', 'baseline'])
    )) {
      output += `*[data-self='${key}'] {\n  align-self: ${value};\n}\n`;
    }

    for (const [name, value] of Object.entries(this.config.Breakpoints)) {
      output += `@media (max-width: ${value}px) {\n`;

      for (const [key, value] of Object.entries(this.config.AxisPlacements)) {
        output += `  *[data-${name}-main='${key}'] {\n    justify-content: ${value};\n  }\n`;
      }

      for (const [key, value] of Object.entries(this.config.AxisPlacements)) {
        output += `  *[data-${name}-cross='${key}'] {\n    align-items: ${value};\n  }\n`;
      }

      for (const [key, value] of Object.entries(
        pick(this.config.AxisPlacements, ['start', 'end', 'center', 'baseline'])
      )) {
        output += `  *[data-${name}-self='${key}'] {\n    align-self: ${value};\n  }\n`;
      }

      output += '}\n';
    }

    return output;
  }
}
