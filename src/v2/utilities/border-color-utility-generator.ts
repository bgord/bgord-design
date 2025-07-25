import { BrandTokenGenerator } from "../tokens/brand-token-generator";
import { DangerTokenGenerator } from "../tokens/danger-token-generator";
import { GrayscaleTokenGenerator } from "../tokens/grayscale-token-generator";
import { PositiveTokenGenerator } from "../tokens/positive-token-generator";
import { WarningTokenGenerator } from "../tokens/warning-token-generator";
import { UtilityGenerator } from "./template";

export class BorderColorUtilityGenerator extends UtilityGenerator {
  constructor(
    private readonly GrayscaleTokenGenerator: GrayscaleTokenGenerator,
    private readonly BrandTokenGenerator: BrandTokenGenerator,
    private readonly PositiveTokenGenerator: PositiveTokenGenerator,
    private readonly DangerTokenGenerator: DangerTokenGenerator,
    private readonly WarningTokenGenerator: WarningTokenGenerator,
  ) {
    super("Border color utilities");
  }

  css(): string {
    const grayscale = this.GrayscaleTokenGenerator.getConfig();
    const brand = this.BrandTokenGenerator.getConfig();
    const positive = this.PositiveTokenGenerator.getConfig();
    const danger = this.DangerTokenGenerator.getConfig();
    const warning = this.WarningTokenGenerator.getConfig();

    const tokens = { ...grayscale, ...brand, ...positive, ...danger, ...warning };

    const lines: string[] = [];

    for (const variable of Object.keys(tokens)) {
      const key = variable.replace("color-", "");

      lines.push(`[data-bc='${key}'] { border-color: var(--${variable}); }`);
    }

    return lines.join("\n");
  }
}
