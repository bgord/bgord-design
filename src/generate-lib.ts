import type { TokenGenerator } from "./tokens/template";

export class GenerateLib {
  static async process(tokens: TokenGenerator[]) {
    let lib = "";

    for (const token of tokens) {
      lib += token.toTypeScript();
    }

    await Bun.file("dist/lib.ts").write(lib);
  }
}
