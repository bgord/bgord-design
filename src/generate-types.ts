import { UtilityGenerator } from "./utilities/template";

export class GenerateTyps {
  static async process(utilities: UtilityGenerator[]) {
    let types = `
      export * from "./lib";

      export {};

      import "react";
      declare module "react" { interface HTMLAttributes<T> {
    `;

    for (const utility of utilities) {
      types += utility.toTypeScript();
    }

    types += "}}";

    await Bun.file("dist/index.d.ts").write(types);
  }
}
