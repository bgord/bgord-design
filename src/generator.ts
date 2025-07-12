import {
  Spacing,
  Displays,
  AxisPlacements,
  Positions,
  FlexWraps,
  ZIndexes,
  Widths,
  FontSizes,
  FlexDirections,
  FontWeights,
  LineHeights,
  Grayscale,
  Greens,
  Reds,
  Oranges,
  Breakpoints,
  LetterSpacings,
  FlexGrows,
  FlexShrinks,
  BorderWidths,
  BorderColors,
  BorderRadiuses,
  MaxWidths,
  Transforms,
  Overflows,
  Heights,
  Cursors,
  PointerEvents,
  Backdrops,
  ObjectFits,
  ObjectPositions,
  Rotates,
  MaxHeights,
  Shadows,
} from './tokens';

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
    return '/* ===================== */\n\n';
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
