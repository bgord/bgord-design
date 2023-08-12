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
  spacing: typeof Spacing;
  displays: typeof Displays;
  axisPlacements: typeof AxisPlacements;
  positions: typeof Positions;
  flexWraps: typeof FlexWraps;
  zIndexes: typeof ZIndexes;
  widths: typeof Widths;
  fontSizes: typeof FontSizes;
  fontWeights: typeof FontWeights;
  lineHeights: typeof LineHeights;
  flexDirections: typeof FlexDirections;
  grayscale: typeof Grayscale;
  greens: typeof Greens;
  reds: typeof Reds;
  oranges: typeof Oranges;
  breakpoints: typeof Breakpoints;
  letterSpacings: typeof LetterSpacings;
  flexGrows: typeof FlexGrows;
  flexShrinks: typeof FlexShrinks;
  borderWidths: typeof BorderWidths;
  borderColors: typeof BorderColors;
  borderRadiuses: typeof BorderRadiuses;
  maxWidths: typeof MaxWidths;
  transforms: typeof Transforms;
  overflows: typeof Overflows;
  heights: typeof Heights;
  cursors: typeof Cursors;
  pointerEvents: typeof PointerEvents;
  backdrops: typeof Backdrops;
  objectFits: typeof ObjectFits;
  objectPositions: typeof ObjectPositions;
  rotates: typeof Rotates;
  maxHeights: typeof MaxHeights;
};
