import type { TokenGenerator } from "./tokens/template";
import type { UtilityGenerator } from "./utilities/template";

export class GenerateCSS {
  static async process(tokens: ReadonlyArray<TokenGenerator>, utilities: ReadonlyArray<UtilityGenerator>) {
    let output = `@import "../src/normalize.css" layer(reset);\n\n`;

    output += ":root {\n";
    for (const token of tokens) {
      output += token.getTokens();
    }
    output += "}\n\n";

    let light = "";
    for (const token of tokens) {
      light += token.getLightTokens();
    }

    if (light) {
      /* Light is opt-in via the OS unless the theme is pinned to dark... */
      output += `@media (prefers-color-scheme: light) {\n:root:not([data-theme="light"]):not([data-theme="dark"]) {\n${light}}\n}\n\n`;
      /* ...and always available by pinning the theme to light. */
      output += `:root[data-theme="light"] {\n${light}}\n\n`;
    }

    /* defaults.css declares its own `@layer defaults` block. */
    output += await Bun.file("src/defaults.css").text();
    output += "\n\n";

    output += "@layer components {\n";
    output += await Bun.file("src/ui/button.css").text();
    output += await Bun.file("src/ui/field.css").text();
    output += await Bun.file("src/ui/input.css").text();
    output += await Bun.file("src/ui/label.css").text();
    output += await Bun.file("src/ui/textarea.css").text();
    output += await Bun.file("src/ui/select.css").text();
    output += await Bun.file("src/ui/prose.css").text();
    output += await Bun.file("src/ui/visually-hidden.css").text();
    output += await Bun.file("src/ui/card.css").text();
    output += await Bun.file("src/ui/badge.css").text();
    output += await Bun.file("src/ui/link.css").text();
    output += await Bun.file("src/ui/checkbox.css").text();
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

    await Bun.write("dist/main.css", output);
  }
}
