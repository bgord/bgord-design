import { Spacing, Displays, AxisPlacements, Positions } from './tokens';

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
};
