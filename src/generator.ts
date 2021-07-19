import { Spacing } from './tokens';

export interface GeneratorInterface {
  generateHeader(): string;
  generateCss(spacing: typeof Spacing): string;
  generateFooter(): string;
}
