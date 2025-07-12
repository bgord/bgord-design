import type * as Tokens from "./tokens";

export abstract class AbstractGenerator {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  generateHeader(): string {
    return `/* ${this.name} */\n\n`;
  }
  abstract generateCss(): string;

  generateFooter(): string {
    return "/* ===================== */\n\n";
  }
}

export type GeneratorConfigType = {
  Spacing: typeof Tokens.Spacing;
  Displays: typeof Tokens.Displays;
  AxisPlacements: typeof Tokens.AxisPlacements;
  Positions: typeof Tokens.Positions;
  FlexWraps: typeof Tokens.FlexWraps;
  ZIndexes: typeof Tokens.ZIndexes;
  Widths: typeof Tokens.Widths;
  FontSizes: typeof Tokens.FontSizes;
  FontWeights: typeof Tokens.FontWeights;
  LineHeights: typeof Tokens.LineHeights;
  FlexDirections: typeof Tokens.FlexDirections;
  Grayscale: typeof Tokens.Grayscale;
  Greens: typeof Tokens.Greens;
  Reds: typeof Tokens.Reds;
  Oranges: typeof Tokens.Oranges;
  Breakpoints: typeof Tokens.Breakpoints;
  LetterSpacings: typeof Tokens.LetterSpacings;
  FlexGrows: typeof Tokens.FlexGrows;
  FlexShrinks: typeof Tokens.FlexShrinks;
  BorderWidths: typeof Tokens.BorderWidths;
  BorderColors: typeof Tokens.BorderColors;
  BorderRadiuses: typeof Tokens.BorderRadiuses;
  MaxWidths: typeof Tokens.MaxWidths;
  Transforms: typeof Tokens.Transforms;
  Overflows: typeof Tokens.Overflows;
  Heights: typeof Tokens.Heights;
  Cursors: typeof Tokens.Cursors;
  PointerEvents: typeof Tokens.PointerEvents;
  Backdrops: typeof Tokens.Backdrops;
  ObjectFits: typeof Tokens.ObjectFits;
  ObjectPositions: typeof Tokens.ObjectPositions;
  Rotates: typeof Tokens.Rotates;
  MaxHeights: typeof Tokens.MaxHeights;
  Shadows: typeof Tokens.Shadows;
};
