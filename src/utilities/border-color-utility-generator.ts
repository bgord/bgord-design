import type { BrandTokenGenerator } from "../tokens/brand-token-generator";
import type { DangerTokenGenerator } from "../tokens/danger-token-generator";
import type { GrayscaleTokenGenerator } from "../tokens/grayscale-token-generator";
import type { PositiveTokenGenerator } from "../tokens/positive-token-generator";
import type { WarningTokenGenerator } from "../tokens/warning-token-generator";
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

      lines.push(`[data-bc='${key}'] { border-color: var(--${variable}); border-style: solid; }`);
      lines.push(`[data-bct='${key}'] { border-top-color: var(--${variable}); border-top-style: solid; }`);
      lines.push(
        `[data-bcr='${key}'] { border-right-color: var(--${variable}); border-right-style: solid; }`,
      );
      lines.push(
        `[data-bcb='${key}'] { border-bottom-color: var(--${variable}); border-bottom-style: solid; }`,
      );
      lines.push(`[data-bcl='${key}'] { border-left-color: var(--${variable}); border-left-style: solid; }`);
      lines.push(
        `[data-bcx='${key}'] { border-left-color: var(--${variable}); border-right-color: var(--${variable}); border-left-style: solid; border-right-style: solid; }`,
      );
      lines.push(
        `[data-bcy='${key}'] { border-top-color: var(--${variable}); border-bottom-color: var(--${variable}); border-top-style: solid; border-bottom-style: solid; }`,
      );
    }

    // Stryker disable all
    return lines.join("\n");
    // Stryker restore all
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => key.replace("color-", ""))
      .map((key) => `"${key}"`)
      .join(" | ");

    return [
      `"data-bc"?: ${type};`,
      `"data-bct"?: ${type};`,
      `"data-bcr"?: ${type};`,
      `"data-bcb"?: ${type};`,
      `"data-bcl"?: ${type};`,
      `"data-bcx"?: ${type};`,
      `"data-bcy"?: ${type};`,
    ].join(" ");
  }
}
