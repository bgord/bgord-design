import type { TokenConfigType } from "../tokens/template";

export abstract class UtilityGenerator {
  abstract config: TokenConfigType;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract css(): string;

  abstract toTypeScript(): string;
}
