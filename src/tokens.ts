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

type ZIndexType = '-1' | '0' | '1' | '2' | '3';

export const ZIndexes: Record<ZIndexType, string> = {
  '-1': '-1',
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

type GrayscaleType =
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

export const Grayscale: Record<GrayscaleType, string> = {
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

type GreenType =
  | 'green-100'
  | 'green-200'
  | 'green-300'
  | 'green-400'
  | 'green-500'
  | 'green-600'
  | 'green-700'
  | 'green-800';

export const Greens: Record<GreenType, string> = {
  'green-100': 'hsl(112, 50%, 85%)',
  'green-200': 'hsl(112, 50%, 75%)',
  'green-300': 'hsl(112, 50%, 65%)',
  'green-400': 'hsl(112, 50%, 55%)',
  'green-500': 'hsl(112, 50%, 45%)',
  'green-600': 'hsl(112, 50%, 35%)',
  'green-700': 'hsl(112, 50%, 25%)',
  'green-800': 'hsl(112, 50%, 20%)',
};

type RedType =
  | 'red-100'
  | 'red-200'
  | 'red-300'
  | 'red-400'
  | 'red-500'
  | 'red-600'
  | 'red-700'
  | 'red-800';

export const Reds: Record<RedType, string> = {
  'red-100': 'hsl(5, 80%, 90%)',
  'red-200': 'hsl(5, 80%, 83%)',
  'red-300': 'hsl(5, 80%, 72.5%)',
  'red-400': 'hsl(5, 80%, 62.5%)',
  'red-500': 'hsl(5, 80%, 52.5%)',
  'red-600': 'hsl(5, 80%, 42%)',
  'red-700': 'hsl(5, 80%, 32.5%)',
  'red-800': 'hsl(5, 80%, 22.5%)',
};

type OrangeType =
  | 'orange-100'
  | 'orange-200'
  | 'orange-300'
  | 'orange-400'
  | 'orange-500'
  | 'orange-600'
  | 'orange-700'
  | 'orange-800';

export const Oranges: Record<OrangeType, string> = {
  'orange-100': 'hsl(25, 88%, 85%)',
  'orange-200': 'hsl(25, 88%, 75%)',
  'orange-300': 'hsl(25, 88%, 65%)',
  'orange-400': 'hsl(25, 88%, 55%)',
  'orange-500': 'hsl(25, 88%, 45%)',
  'orange-600': 'hsl(25, 88%, 37.5%)',
  'orange-700': 'hsl(25, 88%, 27.5%)',
  'orange-800': 'hsl(25, 88%, 20%)',
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

type BorderColorType = GrayscaleType | 'transparent';

export const BorderColors: Record<BorderColorType, string> = {
  ...Grayscale,
  transparent: 'transparent',
};

type BorderRadiusType = '0' | '1' | '2' | '4' | '50%';

export const BorderRadiuses: Record<BorderRadiusType, string> = {
  '0': '0',
  '1': '1px',
  '2': '2px',
  '4': '4px',
  '50%': '50%',
};

type MaxWidthType = '100%' | '1296' | '768' | '528' | '320' | 'unset';

export const MaxWidths: Record<MaxWidthType, string> = {
  '100%': '100%',
  '1296': '1296px',
  '768': '768px',
  '528': '528px',
  '320': '320px',
  unset: 'unset',
};

type TransformType =
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  | 'upper-first'
  | 'truncate'
  | 'center'
  | 'none';

export const Transforms: Record<TransformType, string> = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
  'upper-first': 'upper-first',
  truncate: 'truncate',
  center: 'center',
  none: 'none',
};

type OverflowType = 'auto' | 'scroll' | 'hidden';

export const Overflows: Record<OverflowType, string> = {
  auto: 'auto',
  scroll: 'scroll',
  hidden: 'hidden',
};
