import { TokenGenerator } from "./template";

export class TokenGeneratorProcessor {
  constructor(private readonly generators: TokenGenerator[]) {}

  generate(): string {
    let result = ":root {";

    for (const generator of this.generators) {
      result += generator.getTokens();
    }

    result += "}";

    return result;
  }
}
