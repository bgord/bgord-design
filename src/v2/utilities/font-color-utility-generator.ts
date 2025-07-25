import { BrandTokenGenerator } from "../tokens/brand-token-generator";
import { DangerTokenGenerator } from "../tokens/danger-token-generator";
import { GrayscaleTokenGenerator } from "../tokens/grayscale-token-generator";
import { PositiveTokenGenerator } from "../tokens/positive-token-generator";
import { WarningTokenGenerator } from "../tokens/warning-token-generator";
import { UtilityGenerator } from "./template";

export class FontColorUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    GrayscaleTokenGenerator: GrayscaleTokenGenerator,
    BrandTokenGenerator: BrandTokenGenerator,
    PositiveTokenGenerator: PositiveTokenGenerator,
    DangerTokenGenerator: DangerTokenGenerator,
    WarningTokenGenerator: WarningTokenGenerator,
  ) {
    super("Font-color utilities");
    this.config = {
      ...GrayscaleTokenGenerator.getConfig(),
      ...BrandTokenGenerator.getConfig(),
      ...PositiveTokenGenerator.getConfig(),
      ...DangerTokenGenerator.getConfig(),
      ...WarningTokenGenerator.getConfig(),
    };
  }

  css() {
    const lines: string[] = [];

    for (const variable of Object.keys(this.config)) {
      const key = variable.replace("color-", "");

      lines.push(`[data-color='${key}'] { color: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}
