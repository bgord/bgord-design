import { AbstractGenerator } from './generator';

export class PositionersGenerator extends AbstractGenerator {
  generateHeader(): string {
    return '/* Positioners */\n\n';
  }

  generateCss(): string {
    let output = '';

    output += `*[data-top='0'] {\n  top: 0;\n}\n`;
    output += `*[data-right='0'] {\n  right: 0;\n}\n`;
    output += `*[data-bottom='0'] {\n  bottom: 0;\n}\n`;
    output += `*[data-left='0'] {\n  left: 0;\n}\n`;
    output += `*[data-inset='0'] {\n  inset: 0;\n}\n`;

    return output;
  }
}
