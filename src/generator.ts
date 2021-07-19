import { Spacing } from './tokens';

export interface GeneratorInterface {
  spacing: typeof Spacing;

  generateHeader(): string;
  generateCss(): string;
  generateFooter(): string;
}
