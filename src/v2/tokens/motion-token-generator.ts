import { TokenConfigType, TokenGenerator } from "./template";

export class MotionTokenGenerator extends TokenGenerator {
  base: TokenConfigType = {
    "motion-duration-fast": "150ms",
    "motion-duration-medium": "300ms",
    "motion-duration-slow": "500ms",
    "motion-ease-standard": "cubic-bezier(0.4, 0, 0.2, 1)",
    "motion-ease-emphasized": "cubic-bezier(0.2, 0, 0, 1)",
  };

  constructor(overrides: TokenConfigType = {}) {
    super("Motion", overrides);
  }
}
