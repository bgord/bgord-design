import { GenerateCSS } from "./generate-css";
import { GenerateLib } from "./generate-lib";

(async function main() {
  await GenerateCSS.process();
  await GenerateLib.process();
})();
