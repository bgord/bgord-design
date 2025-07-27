import { TokenGenerator } from "./tokens/template";
import { UtilityGenerator } from "./utilities/template";

export class GenerateCSS {
  static async process(tokens: TokenGenerator[], utilities: UtilityGenerator[]) {
    let output = ":root {";

    for (const token of tokens) {
      output += token.getTokens();
    }

    output += "}";

    for (const utility of utilities) {
      output += utility.css();
    }

    output += await Bun.file("src/ui/button.css").text();
    output += await Bun.file("src/ui/input.css").text();
    output += await Bun.file("src/ui/label.css").text();
    output += await Bun.file("src/ui/textarea.css").text();
    output += await Bun.file("src/ui/select.css").text();
    output += await Bun.file("src/ui/visually-hidden.css").text();
    output += await Bun.file("src/ui/badge.css").text();
    output += await Bun.file("src/ui/link.css").text();

    output += await Bun.file("src/animations/grow-fade-in.css").text();
    output += await Bun.file("src/animations/shrink-fade-out.css").text();

    output += await Bun.file("src/interactions/grow.css").text();
    output += await Bun.file("src/interactions/rotate-into-focus.css").text();
    output += await Bun.file("src/interactions/subtle-scale.css").text();

    await Bun.file("dist/main.css").write(output);
  }
}
