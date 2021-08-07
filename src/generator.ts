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
} from './tokens';

export interface GeneratorInterface {
  spacing: typeof Spacing;
  displays: typeof Displays;

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
  flexDirections: typeof FlexDirections;
};
