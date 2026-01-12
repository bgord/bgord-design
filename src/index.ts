// Stryker disable all
import { BreakpointRegistry } from "./breakpoint-registry";
import { GenerateCSS } from "./generate-css";
import { GenerateLib } from "./generate-lib";
import { GenerateTypes } from "./generate-types";
import * as TokenGenerators from "./tokens";
import * as UtilityGenerators from "./utilities";

(async function main() {
  const breakpointRegistry = new BreakpointRegistry({ md: 768 });

  const BackdropsTokenGenerator = new TokenGenerators.BackdropsTokenGenerator();
  const BorderWidthTokenGenerator = new TokenGenerators.BorderWidthTokenGenerator();
  const BrandTokenGenerator = new TokenGenerators.BrandTokenGenerator();
  const BreakpointTokenGenerator = new TokenGenerators.BreakpointTokenGenerator(breakpointRegistry);
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
  const MotionTokenGenerator = new TokenGenerators.MotionTokenGenerator();

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
    MotionTokenGenerator,
  ];

  const BackdropUtilityGenerator = new UtilityGenerators.BackdropUtilityGenerator(
    breakpointRegistry,
    BackdropsTokenGenerator,
  );
  const BorderWidthUtilityGenerator = new UtilityGenerators.BorderWidthUtilityGenerator(
    breakpointRegistry,
    BorderWidthTokenGenerator,
  );
  const FontFamilyUtilityGenerator = new UtilityGenerators.FontFamilyUtilityGenerator(
    breakpointRegistry,
    FontFamilyTokenGenerator,
  );
  const FontSizeUtilityGenerator = new UtilityGenerators.FontSizeUtilityGenerator(
    breakpointRegistry,
    FontSizeTokenGenerator,
  );
  const FontWeightUtilityGenerator = new UtilityGenerators.FontWeightUtilityGenerator(
    breakpointRegistry,
    FontWeightTokenGenerator,
  );
  const LetterSpacingUtilityGenerator = new UtilityGenerators.LetterSpacingUtilityGenerator(
    breakpointRegistry,
    LetterSpacingTokenGenerator,
  );
  const LineHeightUtilityGenerator = new UtilityGenerators.LineHeightUtilityGenerator(
    breakpointRegistry,
    LineHeightTokenGenerator,
  );
  const OpacityUtilityGenerator = new UtilityGenerators.OpacityUtilityGenerator(
    breakpointRegistry,
    OpacityTokenGenerator,
  );
  const RadiusUtilityGenerator = new UtilityGenerators.RadiusUtilityGenerator(
    breakpointRegistry,
    RadiusTokenGenerator,
  );
  const ShadowUtilityGenerator = new UtilityGenerators.ShadowUtilityGenerator(
    breakpointRegistry,
    ShadowTokenGenerator,
  );
  const ZIndexUtilityGenerator = new UtilityGenerators.ZIndexUtilityGenerator(
    breakpointRegistry,
    ZIndexTokenGenerator,
  );
  const FontColorUtilityGenerator = new UtilityGenerators.FontColorUtilityGenerator(
    breakpointRegistry,
    GrayscaleTokenGenerator,
    BrandTokenGenerator,
    PositiveTokenGenerator,
    DangerTokenGenerator,
    WarningTokenGenerator,
  );
  const BackgroundUtilityGenerator = new UtilityGenerators.BackgroundUtilityGenerator(
    breakpointRegistry,
    GrayscaleTokenGenerator,
    BrandTokenGenerator,
    PositiveTokenGenerator,
    DangerTokenGenerator,
    WarningTokenGenerator,
  );
  const BorderColorUtilityGenerator = new UtilityGenerators.BorderColorUtilityGenerator(
    breakpointRegistry,
    GrayscaleTokenGenerator,
    BrandTokenGenerator,
    PositiveTokenGenerator,
    DangerTokenGenerator,
    WarningTokenGenerator,
  );
  const PaddingUtilityGenerator = new UtilityGenerators.PaddingUtilityGenerator(
    breakpointRegistry,
    SpacingTokenGenerator,
  );
  const MarginUtilityGenerator = new UtilityGenerators.MarginUtilityGenerator(
    breakpointRegistry,
    SpacingTokenGenerator,
  );
  const GapUtilityGenerator = new UtilityGenerators.GapUtilityGenerator(
    breakpointRegistry,
    SpacingTokenGenerator,
  );
  const PositionersUtilityGenerator = new UtilityGenerators.PositionersUtilityGenerator(
    breakpointRegistry,
    SpacingTokenGenerator,
  );
  const MaxWidthUtilityGenerator = new UtilityGenerators.MaxWidthUtilityGenerator(
    breakpointRegistry,
    BreakpointTokenGenerator,
  );
  const MaxHeightUtilityGenerator = new UtilityGenerators.MaxHeightUtilityGenerator(
    breakpointRegistry,
    BreakpointTokenGenerator,
  );
  const DisplayUtilityGenerator = new UtilityGenerators.DisplayUtilityGenerator(breakpointRegistry);
  const CursorUtilityGenerator = new UtilityGenerators.CursorUtilityGenerator(breakpointRegistry);
  const ObjectFitUtilityGenerator = new UtilityGenerators.ObjectFitUtilityGenerator(breakpointRegistry);
  const PositionUtilityGenerator = new UtilityGenerators.PositionUtilityGenerator(breakpointRegistry);
  const RotateUtilityGenerator = new UtilityGenerators.RotateUtilityGenerator(breakpointRegistry);
  const ObjectPositionUtilityGenerator = new UtilityGenerators.ObjectPositionUtilityGenerator(
    breakpointRegistry,
  );
  const PointerEventUtilityGenerator = new UtilityGenerators.PointerEventUtilityGenerator(breakpointRegistry);
  const OverflowUtilityGenerator = new UtilityGenerators.OverflowUtilityGenerator(breakpointRegistry);
  const FlexDirectionUtilityGenerator = new UtilityGenerators.FlexDirectionUtilityGenerator(
    breakpointRegistry,
  );
  const AxisPlacementUtilityGenerator = new UtilityGenerators.AxisPlacementUtilityGenerator(
    breakpointRegistry,
  );
  const FlexGrowUtilityGenerator = new UtilityGenerators.FlexGrowUtilityGenerator(breakpointRegistry);
  const FlexShrinkUtilityGenerator = new UtilityGenerators.FlexShrinkUtilityGenerator(breakpointRegistry);
  const FlexWrapUtilityGenerator = new UtilityGenerators.FlexWrapUtilityGenerator(breakpointRegistry);
  const TransformUtilityGenerator = new UtilityGenerators.TransformUtilityGenerator(breakpointRegistry);
  const WidthUtilityGenerator = new UtilityGenerators.WidthUtilityGenerator(breakpointRegistry);
  const HeightUtilityGenerator = new UtilityGenerators.HeightUtilityGenerator(breakpointRegistry);
  const SizeUtilityGenerator = new UtilityGenerators.SizeUtilityGenerator(
    breakpointRegistry,
    SizeTokenGenerator,
  );
  const StackUtilityGenerator = new UtilityGenerators.StackUtilityGenerator(breakpointRegistry);

  const generators = [
    AxisPlacementUtilityGenerator,
    BackdropUtilityGenerator,
    BackgroundUtilityGenerator,
    BorderColorUtilityGenerator,
    BorderWidthUtilityGenerator,
    CursorUtilityGenerator,
    DisplayUtilityGenerator,
    FlexDirectionUtilityGenerator,
    FlexGrowUtilityGenerator,
    FlexShrinkUtilityGenerator,
    FlexWrapUtilityGenerator,
    FontColorUtilityGenerator,
    FontFamilyUtilityGenerator,
    FontSizeUtilityGenerator,
    FontWeightUtilityGenerator,
    GapUtilityGenerator,
    HeightUtilityGenerator,
    LetterSpacingUtilityGenerator,
    LineHeightUtilityGenerator,
    MarginUtilityGenerator,
    MaxHeightUtilityGenerator,
    MaxWidthUtilityGenerator,
    ObjectFitUtilityGenerator,
    ObjectPositionUtilityGenerator,
    OpacityUtilityGenerator,
    OverflowUtilityGenerator,
    PaddingUtilityGenerator,
    PointerEventUtilityGenerator,
    PositionUtilityGenerator,
    PositionersUtilityGenerator,
    RadiusUtilityGenerator,
    RotateUtilityGenerator,
    ShadowUtilityGenerator,
    SizeUtilityGenerator,
    StackUtilityGenerator,
    TransformUtilityGenerator,
    WidthUtilityGenerator,
    ZIndexUtilityGenerator,
  ];

  await GenerateCSS.process(tokens, generators);
  await GenerateLib.process(tokens);
  await GenerateTypes.process(generators);
})();
// Stryker restore all
