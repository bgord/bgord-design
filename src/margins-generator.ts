import { GeneratorInterface, GeneratorConfigType } from './generator';

export class Margins implements GeneratorInterface {
  spacing: GeneratorConfigType['spacing'];

  constructor(config: GeneratorConfigType) {
    this.spacing = config.spacing;
  }

  generateHeader(): string {
    return '/* Margins */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular margin: data-m="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-m='${key}'] {\n  margin: ${value};\n}\n`;
    }

    // Horizontal margin: data-mx="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-mx='${key}'] {\n  margin-left: ${value};\n  margin-right: ${value};\n}\n`;
    }

    // Vertical margin: data-my="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-my='${key}'] {\n  margin-top: ${value};\n  margin-bottom: ${value};\n}\n`;
    }

    // Top margin: data-mt="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-mt='${key}'] {\n  margin-top: ${value};\n}\n`;
    }

    // Right margin: data-mr="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-mr='${key}'] {\n  margin-right: ${value};\n}\n`;
    }

    // Bottom margin: data-mb="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-mb='${key}'] {\n  margin-bottom: ${value};\n}\n`;
    }

    // Left margin: data-ml="*"
    for (const [key, value] of Object.entries(this.spacing)) {
      output += `*[data-ml='${key}'] {\n  margin-left: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
