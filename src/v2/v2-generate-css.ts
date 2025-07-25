import * as TokenGenerators from "./tokens";
import { TokenGeneratorProcessor } from "./tokens/token-generator-processor";

class GeneratorProcessor {
  static async process() {
    let output = "";

    output += new TokenGeneratorProcessor(
      Object.values(TokenGenerators).map((TokenGenerator) => new TokenGenerator()),
    ).generate();

    await Bun.file("dist/v2/main.css").write(output);
  }
}

export async function main() {
  await GeneratorProcessor.process();
}
