import * as TokenGenerators from "./tokens";

export class GenerateLib {
  static async process() {
    let lib = "";

    const tokens = Object.values(TokenGenerators).map((TokenGenerator) => new TokenGenerator());

    for (const token of tokens) {
      lib += token.toTypeScript();
    }

    await Bun.file("dist/lib.ts").write(lib);
  }
}
