import { type TokenConfigType, TokenGenerator } from "./template";

export class SemanticTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "color-scheme": "dark",

    /* ───────── SURFACES ─────────────────────────── */
    "surface-base": "var(--color-neutral-950)", // app canvas
    "surface-raised": "var(--color-neutral-900)", // card, sheet, panel
    "surface-overlay": "var(--color-neutral-850)", // dialog, popover, menu
    "surface-sunken": "var(--color-neutral-950)", // wells, code blocks inside a card

    /* ───────── TEXT ─────────────────────────────── */
    "text-strong": "var(--color-neutral-100)", // headings, emphasis
    "text-primary": "var(--color-neutral-200)", // body copy
    "text-secondary": "var(--color-neutral-300)", // supporting copy, labels
    "text-muted": "var(--color-neutral-400)", // placeholders, captions, meta
    "text-disabled": "var(--color-neutral-500)", // disabled — AA Large only
    "text-inverted": "var(--color-neutral-950)", // text on filled accents

    /* ───────── BORDERS ──────────────────────────── */
    "border-subtle": "var(--color-alpha-subtle)", // hairline dividers
    "border-default": "var(--color-alpha-soft)", // control borders at rest
    "border-strong": "var(--color-alpha-medium)", // emphasis, hover borders

    /* ───────── FORM CONTROL WELLS ───────────────── */
    "interactive-rest": "var(--color-neutral-850)", // input, select, textarea, checkbox
    "interactive-hover": "var(--color-neutral-800)",
    "interactive-active": "var(--color-neutral-700)",
    "interactive-disabled": "var(--color-neutral-900)",

    /* ───────── FILLED EMPHASIS SURFACES ─────────── */
    "fill-muted": "var(--color-neutral-800)", // badge, secondary button
    "fill-strong": "var(--color-neutral-700)", // their hover
    "fill-inverted": "var(--color-neutral-200)", // primary button
    "fill-inverted-hover": "var(--color-neutral-0)",
  };

  light: TokenConfigType = {
    "color-scheme": "light",

    "surface-base": "var(--color-neutral-50)",
    "surface-raised": "var(--color-neutral-0)",
    "surface-overlay": "var(--color-neutral-0)",
    "surface-sunken": "var(--color-neutral-100)",

    "text-strong": "var(--color-neutral-950)",
    "text-primary": "var(--color-neutral-900)",
    "text-secondary": "var(--color-neutral-700)",
    "text-muted": "var(--color-neutral-600)",
    "text-disabled": "var(--color-neutral-500)",
    "text-inverted": "var(--color-neutral-0)",

    "border-subtle": "var(--color-alpha-subtle)",
    "border-default": "var(--color-alpha-soft)",
    "border-strong": "var(--color-alpha-medium)",

    "interactive-rest": "var(--color-neutral-0)",
    "interactive-hover": "var(--color-neutral-50)",
    "interactive-active": "var(--color-neutral-100)",
    "interactive-disabled": "var(--color-neutral-50)",

    "fill-muted": "var(--color-neutral-100)",
    "fill-strong": "var(--color-neutral-200)",
    "fill-inverted": "var(--color-neutral-900)",
    "fill-inverted-hover": "var(--color-neutral-950)",
  };

  constructor(overrides: TokenConfigType = {}, lightOverrides: TokenConfigType = {}) {
    super("Semantic", overrides, lightOverrides);
  }
}
