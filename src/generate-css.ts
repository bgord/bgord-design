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
    const SizeTokenGenerator = new TokenGenerators.SizeTokenGenerator();

    const tokens = [
      BackdropsTokenGenerator,
      BorderWidthTokenGenerator,
      BrandTokenGenerator,
      BreakpointTokenGenerator,
      DangerTokenGenerator,
      FontFamilyTokenGenerator,
      FontSizeTokenGenerator,
      FontWeightTokenGenerator,
      GrayscaleTokenGenerator,
      LetterSpacingTokenGenerator,
      LineHeightTokenGenerator,
      OpacityTokenGenerator,
      PositiveTokenGenerator,
      RadiusTokenGenerator,
      ShadowTokenGenerator,
      SizeTokenGenerator,
      SpacingTokenGenerator,
      WarningTokenGenerator,
      ZIndexTokenGenerator,
    ];

    let output = ":root {";

    for (const token of tokens) {
      output += token.getTokens();
    }

    output += "}";

    const BackdropUtilityGenerator = new UtilityGenerators.BackdropUtilityGenerator(BackdropsTokenGenerator);
    const BorderWidthUtilityGenerator = new UtilityGenerators.BorderWidthUtilityGenerator(
      BorderWidthTokenGenerator,
    );
    const FontFamilyUtilityGenerator = new UtilityGenerators.FontFamilyUtilityGenerator(
      FontFamilyTokenGenerator,
    );
    const FontSizeUtilityGenerator = new UtilityGenerators.FontSizeUtilityGenerator(FontSizeTokenGenerator);
    const FontWeightUtilityGenerator = new UtilityGenerators.FontWeightUtilityGenerator(
      FontWeightTokenGenerator,
    );
    const LetterSpacingUtilityGenerator = new UtilityGenerators.LetterSpacingUtilityGenerator(
      LetterSpacingTokenGenerator,
    );
    const LineHeightUtilityGenerator = new UtilityGenerators.LineHeightUtilityGenerator(
      LineHeightTokenGenerator,
    );
    const OpacityUtilityGenerator = new UtilityGenerators.OpacityUtilityGenerator(OpacityTokenGenerator);
    const RadiusUtilityGenerator = new UtilityGenerators.RadiusUtilityGenerator(RadiusTokenGenerator);
    const ShadowUtilityGenerator = new UtilityGenerators.ShadowUtilityGenerator(ShadowTokenGenerator);
    const ZIndexUtilityGenerator = new UtilityGenerators.ZIndexUtilityGenerator(ZIndexTokenGenerator);
    const FontColorUtilityGenerator = new UtilityGenerators.FontColorUtilityGenerator(
      GrayscaleTokenGenerator,
      BrandTokenGenerator,
      PositiveTokenGenerator,
      DangerTokenGenerator,
      WarningTokenGenerator,
    );
    const BackgroundUtilityGenerator = new UtilityGenerators.BackgroundUtilityGenerator(
      GrayscaleTokenGenerator,
      BrandTokenGenerator,
      PositiveTokenGenerator,
      DangerTokenGenerator,
      WarningTokenGenerator,
    );
    const BorderColorUtilityGenerator = new UtilityGenerators.BorderColorUtilityGenerator(
      GrayscaleTokenGenerator,
      BrandTokenGenerator,
      PositiveTokenGenerator,
      DangerTokenGenerator,
      WarningTokenGenerator,
    );
    const PaddingUtilityGenerator = new UtilityGenerators.PaddingUtilityGenerator(SpacingTokenGenerator);
    const MarginUtilityGenerator = new UtilityGenerators.MarginUtilityGenerator(SpacingTokenGenerator);
    const GapUtilityGenerator = new UtilityGenerators.GapUtilityGenerator(SpacingTokenGenerator);
    const PositionersUtilityGenerator = new UtilityGenerators.PositionersUtilityGenerator(
      SpacingTokenGenerator,
    );
    const MaxWidthUtilityGenerator = new UtilityGenerators.MaxWidthUtilityGenerator(BreakpointTokenGenerator);
    const MaxHeightUtilityGenerator = new UtilityGenerators.MaxHeightUtilityGenerator(
      BreakpointTokenGenerator,
    );
    const DisplayUtilityGenerator = new UtilityGenerators.DisplayUtilityGenerator();
    const CursorUtilityGenerator = new UtilityGenerators.CursorUtilityGenerator();
    const ObjectFitUtilityGenerator = new UtilityGenerators.ObjectFitUtilityGenerator();
    const PositionUtilityGenerator = new UtilityGenerators.PositionUtilityGenerator();
    const RotateUtilityGenerator = new UtilityGenerators.RotateUtilityGenerator();
    const ObjectPositionUtilityGenerator = new UtilityGenerators.ObjectPositionUtilityGenerator();
    const PointerEventUtilityGenerator = new UtilityGenerators.PointerEventUtilityGenerator();
    const OverflowUtilityGenerator = new UtilityGenerators.OverflowUtilityGenerator();
    const FlexDirectionUtilityGenerator = new UtilityGenerators.FlexDirectionUtilityGenerator();
    const AxisPlacementUtilityGenerator = new UtilityGenerators.AxisPlacementUtilityGenerator();
    const FlexGrowUtilityGenerator = new UtilityGenerators.FlexGrowUtilityGenerator();
    const FlexShrinkUtilityGenerator = new UtilityGenerators.FlexShrinkUtilityGenerator();
    const FlexWrapUtilityGenerator = new UtilityGenerators.FlexWrapUtilityGenerator();
    const TransformUtilityGenerator = new UtilityGenerators.TransformUtilityGenerator();
    const WidthUtilityGenerator = new UtilityGenerators.WidthUtilityGenerator();
    const HeightUtilityGenerator = new UtilityGenerators.HeightUtilityGenerator();

    const generators = [
      BackdropUtilityGenerator,
      BorderWidthUtilityGenerator,
      FontFamilyUtilityGenerator,
      FontSizeUtilityGenerator,
      FontWeightUtilityGenerator,
      LetterSpacingUtilityGenerator,
      LineHeightUtilityGenerator,
      OpacityUtilityGenerator,
      RadiusUtilityGenerator,
      ShadowUtilityGenerator,
      ZIndexUtilityGenerator,
      FontColorUtilityGenerator,
      BackgroundUtilityGenerator,
      BorderColorUtilityGenerator,
      PaddingUtilityGenerator,
      MarginUtilityGenerator,
      GapUtilityGenerator,
      PositionersUtilityGenerator,
      MaxWidthUtilityGenerator,
      MaxHeightUtilityGenerator,
      DisplayUtilityGenerator,
      CursorUtilityGenerator,
      ObjectFitUtilityGenerator,
      PositionUtilityGenerator,
      RotateUtilityGenerator,
      ObjectPositionUtilityGenerator,
      PointerEventUtilityGenerator,
      OverflowUtilityGenerator,
      FlexDirectionUtilityGenerator,
      AxisPlacementUtilityGenerator,
      FlexGrowUtilityGenerator,
      FlexShrinkUtilityGenerator,
      FlexWrapUtilityGenerator,
      TransformUtilityGenerator,
      WidthUtilityGenerator,
      HeightUtilityGenerator,
    ];

    for (const generator of generators) {
      output += generator.css();
    }

    output += await Bun.file("src/ui/button.css").text();
    output += await Bun.file("src/ui/input.css").text();
    output += await Bun.file("src/ui/label.css").text();
    output += await Bun.file("src/ui/textarea.css").text();
    output += await Bun.file("src/ui/select.css").text();
    output += await Bun.file("src/ui/visually-hidden.css").text();
    output += await Bun.file("src/ui/badge.css").text();
    output += await Bun.file("src/ui/link.css").text();

    await Bun.file("dist/main.css").write(output);

    let lib = "";

    for (const token of tokens) {
      lib += token.toTypeScript();
    }

    await Bun.file("dist/lib.ts").write(lib);

    let types = `
      export * from "./lib";

      export {};

      import "react";
      declare module "react" { interface HTMLAttributes<T> {
    `;

    for (const generator of generators) {
      types += generator.toTypeScript();
    }

    types += "}}";

    await Bun.file("dist/index.d.ts").write(types);
  }
}

export async function main() {
  await GeneratorProcessor.process();
}
