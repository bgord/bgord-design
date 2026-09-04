import { type TokenConfigType, TokenGenerator } from "./template";

export class MotionTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "motion-instant": "75ms", // press feedback
    "motion-fast": "120ms", // hover, focus, color shifts
    "motion-medium": "200ms", // toggles, disclosure, small moves
    "motion-slow": "320ms", // modal/dialog enter & exit

    "ease-out": "cubic-bezier(0.16, 1, 0.3, 1)", // entering, hover — decelerates
    "ease-in-out": "cubic-bezier(0.65, 0, 0.35, 1)", // moves between two states
    "ease-spring": "cubic-bezier(0.34, 1.56, 0.64, 1)", // overshoots slightly
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Motion", overrides);
  }
}
