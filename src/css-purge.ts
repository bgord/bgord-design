#!/usr/bin/env bun
// cSpell:ignore fullhuman
import purgecss from "@fullhuman/postcss-purgecss";
import postcss, { type PluginCreator } from "postcss";

export const keepResetLayer: PluginCreator<void> = () => ({
  postcssPlugin: "keep-reset-layer",
  AtRule: {
    layer(atRule) {
      if ((atRule.params || "").trim() === "reset") {
        // no need to import 'postcss'—node objects can be plain
        atRule.before({ type: "comment", text: "purgecss start ignore" });
        atRule.after({ type: "comment", text: "purgecss end ignore" });
      }
    },
  },
});
keepResetLayer.postcss = true;

export function dataAttributeAwareExtractor(content: string) {
  const tokens = content.match(/[\w-/:%]+(?<!:)/g) || [];
  const attrMatches = content.matchAll(/data-[a-z0-9-]+(?:=(?:"[^"]*"|'[^']*'))?/gi);

  const attrs = [];
  for (const m of attrMatches) {
    const raw = m[0];
    attrs.push(raw, `[${raw}]`);
    const name = raw.split("=")[0];
    if (name) attrs.push(name, `[${name}]`);
  }
  return [...tokens, ...attrs];
}

const plugins = [
  keepResetLayer,
  purgecss({
    content: [
      "web/**/*.{ts,tsx,jsx,js,html,hbs}",
      "public/**/*.html",
      "node_modules/@bgord/ui/**/*.{ts,tsx,jsx,js}",
    ],
    defaultExtractor: dataAttributeAwareExtractor,
  }),
];

if (import.meta.main) {
  const path = process.argv[2];

  if (!path) {
    process.stderr.write("Usage: bgord-css-purge <css-file>\n");
    process.exit(1);
  }

  const css = await Bun.file(path).text();
  const result = await postcss(plugins).process(css, { from: path });

  await Bun.write(path, result.css);
}
