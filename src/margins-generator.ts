import { GeneratorInterface } from './generator';
import { Spacing } from './tokens';

export class Margins implements GeneratorInterface {
  generateHeader(): string {
    return '/* Margins */\n\n';
  }

  generateCss(spacing: typeof Spacing): string {
    let output = '';

    // Regular margin: data-m="*"
    for (const [key, value] of Object.entries(spacing)) {
      output += `*[data-m="${key}"] {\n  margin: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
