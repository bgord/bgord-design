import type { BreakpointRegistry } from "../breakpoint-registry";
import type { StateRegistry } from "../state-registry";
import { CssRuleRegular, type CssRuleStrategy } from "./css-rule.strategy";
import { UtilityGenerator } from "./template";

export class CursorUtilityGenerator extends UtilityGenerator {
  config = { wait: "wait", auto: "auto", pointer: "pointer", "not-allowed": "not-allowed" };

  constructor(
    readonly breakpointRegistry: BreakpointRegistry,
    readonly stateRegistry: StateRegistry,
  ) {
    super("Cursor utilities");
  }

  css() {
    const config = Object.entries(this.config);

    let result = "";

    const regular: CssRuleStrategy[] = [];

    for (const [key, value] of config) {
      regular.push(new CssRuleRegular(`[data-cursor='${key}']`, { cursor: value }));
    }

    for (const [state, selector] of this.stateRegistry.entries) {
      for (const [key, value] of config) {
        regular.push(new CssRuleRegular(`[data-${state}-cursor='${key}']${selector}`, { cursor: value }));
      }
    }

    // Stryker disable all
    result += regular.map((rule) => rule.get()).join("\n");
    // Stryker restore all

    for (const [name, breakpoint] of this.breakpointRegistry.entries) {
      const responsive: CssRuleRegular[] = [];

      result += `@media (max-width: ${breakpoint}px) { `;

      for (const [key, value] of config) {
        responsive.push(new CssRuleRegular(`[data-${name}-cursor='${key}']`, { cursor: value }));
      }

      for (const [state, selector] of this.stateRegistry.entries) {
        for (const [key, value] of config) {
          responsive.push(
            new CssRuleRegular(`[data-${name}-${state}-cursor='${key}']${selector}`, { cursor: value }),
          );
        }
      }

      // Stryker disable all
      result += responsive.map((rule) => rule.get()).join("\n");
      // Stryker restore all

      result += "}";
    }

    return result;
  }

  toTypeScript() {
    const type = Object.keys(this.config)
      .map((key) => `"${key}"`)
      .join(" | ");

    // Stryker disable all
    return [
      "cursor",
      ...this.stateRegistry.entries.map(([state]) => `${state}-cursor`),
      ...this.breakpointRegistry.entries.map(([name]) => `${name}-cursor`),
      ...this.breakpointRegistry.entries.flatMap(([name]) =>
        this.stateRegistry.entries.map(([state]) => `${name}-${state}-cursor`),
      ),
    ]
      .map((key) => `"data-${key}"?: ${type};`)
      .join(" ");
    // Stryker restore all
  }
}
