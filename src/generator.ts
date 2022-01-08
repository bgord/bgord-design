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
  BorderWidths,
  BorderColors,
  BorderRadiuses,
  MaxWidths,
  Transforms,
  Overflows,
} from './tokens';

export interface GeneratorInterface {
  generateHeader(): string;
  generateCss(): string;
  generateFooter(): string;
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
  borderWidths: typeof BorderWidths;
  borderColors: typeof BorderColors;
  borderRadiuses: typeof BorderRadiuses;
  maxWidths: typeof MaxWidths;
  transforms: typeof Transforms;
  overflows: typeof Overflows;
};
