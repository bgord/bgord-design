import { TokenConfigType, TokenGenerator } from "./template";

export class MotionTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "motion-instant": "75ms", // ultra-fast feedback (hover ripple, press state)
    "motion-fast": "150ms", // quick interactions (opacity fades, simple toggles)
    "motion-medium": "300ms", // standard transitions (radius wipe, border-color)
    "motion-slow": "500ms", // larger shifts (modal/dialog enter & exit)
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Motion", overrides);
  }
}
