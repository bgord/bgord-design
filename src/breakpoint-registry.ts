type BreakpointNameType = string;
type BreakpointValueType = string;

export class BreakpointRegistry {
  constructor(readonly breakpoints: Record<BreakpointNameType, BreakpointValueType>) {}

  get entries() {
    return Object.entries(this.breakpoints);
  }
}
