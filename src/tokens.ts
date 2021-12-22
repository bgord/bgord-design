type SpacingScaleType =
  | '0'
  | '3'
  | '6'
  | '12'
  | '24'
  | '36'
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
  '36': '36px',
  '48': '48px',
  '72': '72px',
  auto: 'auto',
  unset: 'unset',
};

type DisplayType = 'flex' | 'block' | 'inline-block' | 'none';

export const Displays: Record<DisplayType, string> = {
  flex: 'flex',
  block: 'block',
  'inline-block': 'inline-block',
  none: 'none',
};

type AxisPlacementType = 'start' | 'end' | 'between' | 'center' | 'baseline';

export const AxisPlacements: Record<AxisPlacementType, string> = {
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
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

type FontSizeType = '12' | '14' | '16' | '20' | '24' | '32' | '36';

export const FontSizes: Record<FontSizeType, string> = {
  12: '12',
  14: '14',
  16: '16',
  20: '20',
  24: '24',
  32: '32',
  36: '36',
};

type FontWeightType = '300' | '400' | '500' | '700' | '900' | 'unset';

export const FontWeights: Record<FontWeightType, string> = {
  '300': '300',
  '400': '400',
  '500': '500',
  '700': '700',
  '900': '900',
  unset: 'unset',
};

type LineHeightType = '12' | '16' | '20' | '24' | '32' | '36' | 'unset';

export const LineHeights: Record<LineHeightType, string> = {
  '12': '12',
  '16': '16',
  '20': '20',
  '24': '24',
  '32': '32',
  '36': '36',
  unset: 'unset',
};

type FlexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export const FlexDirections: Record<FlexDirectionType, string> = {
  row: 'row',
  'row-reverse': 'row-reverse',
  column: 'column',
  'column-reverse': 'column-reverse',
};

type ColorsType =
  | 'white'
  | 'gray-100'
  | 'gray-200'
  | 'gray-300'
  | 'gray-400'
  | 'gray-500'
  | 'gray-600'
  | 'gray-700'
  | 'gray-800'
  | 'black';

export const Colors: Record<ColorsType, string> = {
  white: '#F9FAFB',
  'gray-100': '#F3F4F6',
  'gray-200': '#E5E7EB',
  'gray-300': '#D1D5DB',
  'gray-400': '#9CA3AF',
  'gray-500': '#6B7280',
  'gray-600': '#4B5563',
  'gray-700': '#374151',
  'gray-800': '#1F2937',
  black: '#111827',
};

type BreakpointType = 'md';

export const Breakpoints: Record<BreakpointType, number> = {
  md: 768,
};

type LetterSpacingType = '0.5' | '1' | '1.5' | '2';

export const LetterSpacings: Record<LetterSpacingType, number> = {
  '0.5': 0.5,
  '1': 1,
  '1.5': 1.5,
  '2': 2,
};

type FlexGrowType = '1' | 'unset';

export const FlexGrows: Record<FlexGrowType, string> = {
  '1': '1',
  unset: 'unset',
};

type BorderWidthType = '1' | '2' | '4' | '6' | '12';

export const BorderWidths: Record<BorderWidthType, number> = {
  '1': 1,
  '2': 2,
  '4': 4,
  '6': 6,
  '12': 12,
};
