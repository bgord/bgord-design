import type { TokenGenerator } from "./tokens/template";
import type { UtilityGenerator } from "./utilities/template";

export class GenerateCSS {
  static async process(tokens: TokenGenerator[], utilities: UtilityGenerator[]) {
    let output = `@import "../src/normalize.css" layer(reset);\n\n`;

    output += ":root {\n";
    for (const token of tokens) {
      output += token.getTokens();
    }
    output += "}\n\n";

    output += "@layer components {\n";
    output += await Bun.file("src/ui/button.css").text();
    output += await Bun.file("src/ui/input.css").text();
    output += await Bun.file("src/ui/label.css").text();
    output += await Bun.file("src/ui/textarea.css").text();
    output += await Bun.file("src/ui/select.css").text();
    output += await Bun.file("src/ui/visually-hidden.css").text();
    output += await Bun.file("src/ui/badge.css").text();
    output += await Bun.file("src/ui/link.css").text();
    output += await Bun.file("src/ui/checkbox.css").text();
    output += await Bun.file("src/ui/file-explorer.css").text();
    output += await Bun.file("src/ui/range.css").text();
    output += "}\n\n";

    output += "@layer utilities {\n";
    output += await Bun.file("src/animations/grow-fade-in.css").text();
    output += await Bun.file("src/animations/shrink-fade-out.css").text();

    output += await Bun.file("src/interactions/grow.css").text();
    output += await Bun.file("src/interactions/rotate-into-focus.css").text();
    output += await Bun.file("src/interactions/subtle-scale.css").text();

    for (const utility of utilities) {
      output += utility.css();
    }
    output += "}\n\n";

    await Bun.file("dist/main.css").write(output);
  }
}
