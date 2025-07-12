import {
  AxisPlacements,
  Backdrops,
  BorderColors,
  BorderRadiuses,
  BorderWidths,
  Breakpoints,
  Cursors,
  Displays,
  FlexDirections,
  FlexGrows,
  FlexShrinks,
  FlexWraps,
  FontSizes,
  FontWeights,
  Grayscale,
  Greens,
  Heights,
  LetterSpacings,
  LineHeights,
  MaxHeights,
  MaxWidths,
  ObjectFits,
  ObjectPositions,
  Oranges,
  Overflows,
  PointerEvents,
  Positions,
  Reds,
  Rotates,
  Shadows,
  Spacing,
  Transforms,
  Widths,
  ZIndexes,
} from "./tokens";

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
  Spacing: typeof Spacing;
  Displays: typeof Displays;
  AxisPlacements: typeof AxisPlacements;
  Positions: typeof Positions;
  FlexWraps: typeof FlexWraps;
  ZIndexes: typeof ZIndexes;
  Widths: typeof Widths;
  FontSizes: typeof FontSizes;
  FontWeights: typeof FontWeights;
  LineHeights: typeof LineHeights;
  FlexDirections: typeof FlexDirections;
  Grayscale: typeof Grayscale;
  Greens: typeof Greens;
  Reds: typeof Reds;
  Oranges: typeof Oranges;
  Breakpoints: typeof Breakpoints;
  LetterSpacings: typeof LetterSpacings;
  FlexGrows: typeof FlexGrows;
  FlexShrinks: typeof FlexShrinks;
  BorderWidths: typeof BorderWidths;
  BorderColors: typeof BorderColors;
  BorderRadiuses: typeof BorderRadiuses;
  MaxWidths: typeof MaxWidths;
  Transforms: typeof Transforms;
  Overflows: typeof Overflows;
  Heights: typeof Heights;
  Cursors: typeof Cursors;
  PointerEvents: typeof PointerEvents;
  Backdrops: typeof Backdrops;
  ObjectFits: typeof ObjectFits;
  ObjectPositions: typeof ObjectPositions;
  Rotates: typeof Rotates;
  MaxHeights: typeof MaxHeights;
  Shadows: typeof Shadows;
};
