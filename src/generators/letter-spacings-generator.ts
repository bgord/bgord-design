import { AbstractGenerator, GeneratorConfigType } from "../generator";

export class LetterSpacingsGenerator extends AbstractGenerator {
  constructor(private readonly config: GeneratorConfigType) {
    super("Letter spacings");
  }

  generateCss(): string {
    let output = "";

    // Regular display: data-ls="*"
    for (const [key, value] of Object.entries(this.config.LetterSpacings)) {
      output += `*[data-ls='${key}'] {\n  letter-spacing: ${value}px;\n}\n`;
    }

    return output;
  }
}
