import { GeneratorInterface, GeneratorConfigType } from './generator';

export class AxisPlacementsGenerator implements GeneratorInterface {
  spacing: GeneratorConfigType['spacing'];
  displays: GeneratorConfigType['displays'];
  axisPlacements: GeneratorConfigType['axisPlacements'];

  constructor(config: GeneratorConfigType) {
    this.spacing = config.spacing;
    this.displays = config.displays;
    this.axisPlacements = config.axisPlacements;
  }

  generateHeader(): string {
    return '/* Axis placements */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Main axis placement: data-main="*"
    for (const [key, value] of Object.entries(this.axisPlacements)) {
      output += `*[data-main='${key}'] {\n  justify-content: ${value};\n}\n`;
    }

    // Cross axis placement: data-cross="*"
    for (const [key, value] of Object.entries(this.axisPlacements)) {
      output += `*[data-cross='${key}'] {\n  align-items: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
