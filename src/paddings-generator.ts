import { GeneratorInterface, GeneratorConfigType } from './generator';

export class Paddings implements GeneratorInterface {
  spacing: GeneratorConfigType['spacing'];
  displays: GeneratorConfigType['displays'];

  constructor(config: GeneratorConfigType) {
    this.spacing = config.spacing;
    this.displays = config.displays;
  }

  generateHeader(): string {
    return '/* Paddings */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular padding: data-p="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-p='${key}'] {\n  padding: ${value};\n}\n`;
    }

    // Horizontal padding: data-px="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-px='${key}'] {\n  padding-left: ${value};\n  padding-right: ${value};\n}\n`;
    }

    // Vertical padding: data-py="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-py='${key}'] {\n  padding-top: ${value};\n  padding-bottom: ${value};\n}\n`;
    }

    // Top padding: data-pt="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-pt='${key}'] {\n  padding-top: ${value};\n}\n`;
    }

    // Right padding: data-pr="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-pr='${key}'] {\n  padding-right: ${value};\n}\n`;
    }

    // Bottom padding: data-pb="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-pb='${key}'] {\n  padding-bottom: ${value};\n}\n`;
    }

    // Left padding: data-pl="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-pl='${key}'] {\n  padding-left: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
