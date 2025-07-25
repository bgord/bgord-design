import * as TokenGenerators from "./tokens";

class GeneratorProcessor {
  static async process() {
    const BackdropsTokenGenerator = new TokenGenerators.BackdropsTokenGenerator();
    const BorderWidthTokenGenerator = new TokenGenerators.BorderWidthTokenGenerator();
    const BrandTokenGenerator = new TokenGenerators.BrandTokenGenerator();
    const BreakpointTokenGenerator = new TokenGenerators.BreakpointTokenGenerator();
    const DangerTokenGenerator = new TokenGenerators.DangerTokenGenerator();
    const FontFamilyTokenGenerator = new TokenGenerators.FontFamilyTokenGenerator();
    const FontSizeTokenGenerator = new TokenGenerators.FontSizeTokenGenerator();
    const FontWeightTokenGenerator = new TokenGenerators.FontWeightTokenGenerator();
    const GrayscaleTokenGenerator = new TokenGenerators.GrayscaleTokenGenerator();
    const LetterSpacingTokenGenerator = new TokenGenerators.LetterSpacingTokenGenerator();
    const LineHeightTokenGenerator = new TokenGenerators.LineHeightTokenGenerator();
    const MotionTokenGenerator = new TokenGenerators.MotionTokenGenerator();
    const OpacityTokenGenerator = new TokenGenerators.OpacityTokenGenerator();
    const PositiveTokenGenerator = new TokenGenerators.PositiveTokenGenerator();
    const RadiusTokenGenerator = new TokenGenerators.RadiusTokenGenerator();
    const ShadowTokenGenerator = new TokenGenerators.ShadowTokenGenerator();
    const SpacingTokenGenerator = new TokenGenerators.SpacingTokenGenerator();
    const WarningTokenGenerator = new TokenGenerators.WarningTokenGenerator();
    const ZIndexTokenGenerator = new TokenGenerators.ZIndexTokenGenerator();

    let output = ":root {";

    output += BackdropsTokenGenerator.getTokens();
    output += BorderWidthTokenGenerator.getTokens();
    output += BrandTokenGenerator.getTokens();
    output += BreakpointTokenGenerator.getTokens();
    output += DangerTokenGenerator.getTokens();
    output += FontFamilyTokenGenerator.getTokens();
    output += FontSizeTokenGenerator.getTokens();
    output += FontWeightTokenGenerator.getTokens();
    output += GrayscaleTokenGenerator.getTokens();
    output += LetterSpacingTokenGenerator.getTokens();
    output += LineHeightTokenGenerator.getTokens();
    output += MotionTokenGenerator.getTokens();
    output += OpacityTokenGenerator.getTokens();
    output += PositiveTokenGenerator.getTokens();
    output += RadiusTokenGenerator.getTokens();
    output += ShadowTokenGenerator.getTokens();
    output += SpacingTokenGenerator.getTokens();
    output += WarningTokenGenerator.getTokens();
    output += ZIndexTokenGenerator.getTokens();

    output += "}";

    await Bun.file("dist/v2/main.css").write(output);
  }
}

export async function main() {
  await GeneratorProcessor.process();
}
