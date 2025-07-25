import * as TokenGenerators from "./tokens";
import * as UtilityGenerators from "./utilities";

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
    output += OpacityTokenGenerator.getTokens();
    output += PositiveTokenGenerator.getTokens();
    output += RadiusTokenGenerator.getTokens();
    output += ShadowTokenGenerator.getTokens();
    output += SpacingTokenGenerator.getTokens();
    output += WarningTokenGenerator.getTokens();
    output += ZIndexTokenGenerator.getTokens();

    output += "}";

    const generators = [
      new UtilityGenerators.BackdropUtilityGenerator(BackdropsTokenGenerator),
      new UtilityGenerators.BorderWidthUtilityGenerator(BorderWidthTokenGenerator),
      new UtilityGenerators.FontFamilyUtilityGenerator(FontFamilyTokenGenerator),
      new UtilityGenerators.FontSizeUtilityGenerator(FontSizeTokenGenerator),
      new UtilityGenerators.FontWeightUtilityGenerator(FontWeightTokenGenerator),
      new UtilityGenerators.LetterSpacingUtilityGenerator(LetterSpacingTokenGenerator),
      new UtilityGenerators.LineHeightUtilityGenerator(LineHeightTokenGenerator),
      new UtilityGenerators.OpacityUtilityGenerator(OpacityTokenGenerator),
      new UtilityGenerators.RadiusUtilityGenerator(RadiusTokenGenerator),
      new UtilityGenerators.ShadowUtilityGenerator(ShadowTokenGenerator),
      new UtilityGenerators.ZIndexUtilityGenerator(ZIndexTokenGenerator),
      new UtilityGenerators.FontColorUtilityGenerator(
        GrayscaleTokenGenerator,
        BrandTokenGenerator,
        PositiveTokenGenerator,
        DangerTokenGenerator,
        WarningTokenGenerator,
      ),
      new UtilityGenerators.BackgroundUtilityGenerator(
        GrayscaleTokenGenerator,
        BrandTokenGenerator,
        PositiveTokenGenerator,
        DangerTokenGenerator,
        WarningTokenGenerator,
      ),
      new UtilityGenerators.BorderColorUtilityGenerator(
        GrayscaleTokenGenerator,
        BrandTokenGenerator,
        PositiveTokenGenerator,
        DangerTokenGenerator,
        WarningTokenGenerator,
      ),
      new UtilityGenerators.PaddingUtilityGenerator(SpacingTokenGenerator),
      new UtilityGenerators.MarginUtilityGenerator(SpacingTokenGenerator),
      new UtilityGenerators.GapUtilityGenerator(SpacingTokenGenerator),
      new UtilityGenerators.PositionersUtilityGenerator(SpacingTokenGenerator),
      new UtilityGenerators.DisplayUtilityGenerator(),
      new UtilityGenerators.CursorUtilityGenerator(),
      new UtilityGenerators.ObjectFitUtilityGenerator(),
      new UtilityGenerators.PositionUtilityGenerator(),
      new UtilityGenerators.RotateUtilityGenerator(),
      new UtilityGenerators.ObjectPositionUtilityGenerator(),
      new UtilityGenerators.PointerEventUtilityGenerator(),
      new UtilityGenerators.OverflowUtilityGenerator(),
      new UtilityGenerators.FlexDirectionUtilityGenerator(),
      new UtilityGenerators.AxisPlacementUtilityGenerator(),
      new UtilityGenerators.FlexGrowUtilityGenerator(),
      new UtilityGenerators.FlexShrinkUtilityGenerator(),
      new UtilityGenerators.FlexWrapUtilityGenerator(),
    ];

    for (const generator of generators) {
      output += generator.header();
      output += generator.css();
      output += generator.footer();
    }

    await Bun.file("dist/v2/main.css").write(output);
  }
}

export async function main() {
  await GeneratorProcessor.process();
}
