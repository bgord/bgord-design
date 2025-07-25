import { BrandTokenGenerator } from "../tokens/brand-token-generator";
import { DangerTokenGenerator } from "../tokens/danger-token-generator";
import { GrayscaleTokenGenerator } from "../tokens/grayscale-token-generator";
import { PositiveTokenGenerator } from "../tokens/positive-token-generator";
import { WarningTokenGenerator } from "../tokens/warning-token-generator";
import { UtilityGenerator } from "./template";

export class BorderColorUtilityGenerator extends UtilityGenerator {
  config = {};

  constructor(
    GrayscaleTokenGenerator: GrayscaleTokenGenerator,
    BrandTokenGenerator: BrandTokenGenerator,
    PositiveTokenGenerator: PositiveTokenGenerator,
    DangerTokenGenerator: DangerTokenGenerator,
    WarningTokenGenerator: WarningTokenGenerator,
  ) {
    super("Border color utilities");

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

      lines.push(`[data-bc='${key}'] { border-color: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}
