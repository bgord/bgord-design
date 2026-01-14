export class StateRegistry {
  registry: { hover?: string; focus?: string; active?: string } = {};

  constructor(states: { hover?: boolean; focus?: boolean; active?: boolean }) {
    // Stryker disable all
    if (states.hover) this.registry.hover = ":hover:not(:disabled)";
    if (states.focus) this.registry.focus = ":focus-visible";
    // Stryker restore all
    if (states.active) this.registry.active = ":active";
  }

  get entries() {
    return Object.entries(this.registry);
  }
}
