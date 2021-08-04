type SpacingScaleType =
  | '0'
  | '3'
  | '6'
  | '12'
  | '24'
  | '48'
  | '72'
  | 'auto'
  | 'unset';

export const Spacing: Record<SpacingScaleType, string> = {
  '0': '0',
  '3': '3px',
  '6': '6px',
  '12': '12px',
  '24': '24px',
  '48': '48px',
  '72': '72px',
  auto: 'auto',
  unset: 'unset',
};

type DisplayType = 'flex' | 'block' | 'inline-block';

export const Displays: Record<DisplayType, string> = {
  flex: 'flex',
  block: 'block',
  'inline-block': 'inline-block',
};

type AxisPlacementType = 'start' | 'end' | 'between' | 'center' | 'baseline';

export const AxisPlacements: Record<AxisPlacementType, string> = {
  start: 'start',
  end: 'end',
  between: 'between',
  center: 'center',
  baseline: 'baseline',
};

type PositionType =
  | 'static'
  | 'relative'
  | 'absolute'
  | 'fixed'
  | 'sticky'
  | 'unset';

export const Positions: Record<PositionType, string> = {
  static: 'static',
  relative: 'relative',
  absolute: 'absolute',
  fixed: 'fixed',
  sticky: 'sticky',
  unset: 'unset',
};

type FlexWrapTypes = 'nowrap' | 'wrap' | 'wrap-reverse' | 'unset';

export const FlexWraps: Record<FlexWrapTypes, string> = {
  nowrap: 'nowrap',
  wrap: 'wrap',
  'wrap-reverse': 'wrap-reverse',
  unset: 'unset',
};

type ZIndexType = '0' | '1' | '2' | '3';

export const ZIndexes: Record<ZIndexType, string> = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
};

type WidthType = '100%' | 'auto' | 'unset';

export const Widths: Record<WidthType, string> = {
  '100%': '100%',
  auto: 'auto',
  unset: 'unset',
};

type FontSizeType = '12' | '14' | '16' | '20' | '24' | '32';

export const FontSizes: Record<FontSizeType, string> = {
  12: '12',
  14: '14',
  16: '16',
  20: '20',
  24: '24',
  32: '32',
};
