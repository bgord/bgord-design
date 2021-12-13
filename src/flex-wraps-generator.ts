import { GeneratorInterface, GeneratorConfigType } from './generator';

export class FlexWrapGenerator implements GeneratorInterface {
  flexWraps: GeneratorConfigType['flexWraps'];

  constructor(config: GeneratorConfigType) {
    this.flexWraps = config.flexWraps;
  }

  generateHeader(): string {
    return '/* Flex wraps */\n\n';
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-wrap="*"
    for (const [key, value] of Object.entries(this.flexWraps)) {
      output += `*[data-wrap='${key}'] {\n  flex-wrap: ${value};\n}\n`;
    }

    return output;
  }

  generateFooter(): string {
    return '/* ===================== */\n\n';
  }
}
