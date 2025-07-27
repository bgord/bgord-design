import { GenerateCSS } from "./generate-css";
import { GenerateLib } from "./generate-lib";
import { GenerateTyps } from "./generate-types";

(async function main() {
  await GenerateCSS.process();
  await GenerateLib.process();
  await GenerateTyps.process();
})();
