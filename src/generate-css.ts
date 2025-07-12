import { AbstractGenerator } from "./generator";
import * as Generators from "./generators";

import * as Tokens from "./tokens";

class GeneratorProcessor {
  async process(generators: AbstractGenerator[]) {
    let output = "";

    output += await Bun.file("src/ui/button.css").text();
    output += await Bun.file("src/ui/input.css").text();
    output += await Bun.file("src/ui/label.css").text();
    output += await Bun.file("src/ui/link.css").text();
    output += await Bun.file("src/ui/select.css").text();
    output += await Bun.file("src/ui/checkbox.css").text();
    output += await Bun.file("src/ui/textarea.css").text();
    output += await Bun.file("src/ui/range.css").text();
    output += await Bun.file("src/ui/badge.css").text();
    output += await Bun.file("src/ui/file-explorer.css").text();
    output += await Bun.file("src/ui/visually-hidden.css").text();
    output += await Bun.file("src/ui/switch.css").text();

    output += await Bun.file("src/rules/title-truncate.css").text();
    output += await Bun.file("src/rules/target-blank-referer.css").text();
    output += await Bun.file("src/rules/image-alt.css").text();
    output += await Bun.file("src/rules/button-icon-title.css").text();
    output += await Bun.file("src/rules/invalid-list-element.css").text();

    for (const generator of generators) {
      output += generator.generateHeader();
      output += generator.generateCss();
      output += generator.generateFooter();
    }

    await Bun.file("dist/main.css").write(output);
  }
}

export async function main() {
  await new GeneratorProcessor().process(Object.values(Generators).map((generator) => new generator(Tokens)));
}
