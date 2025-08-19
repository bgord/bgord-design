import type { UtilityGenerator } from "./utilities/template";

export class GenerateTyps {
  static async process(utilities: UtilityGenerator[]) {
    const interactions = ["grow", "rotate-into-focus", "subtle-scale"]
      .map((interaction) => `"${interaction}"`)
      .join(" | ");

    const animations = ["grow-fade-in", "shrink-fade-out"].map((animation) => `"${animation}"`).join(" | ");

    let types = `
      export * from "./lib";

      export {};

      import "react";
      declare module "react" { interface HTMLAttributes<T> {
    `;

    for (const utility of utilities) {
      types += utility.toTypeScript();
    }

    types += `"data-animation"?: ${animations};`;
    types += `"data-interaction"?: ${interactions};`;

    types += "}}";

    await Bun.file("dist/index.d.ts").write(types);
  }
}
