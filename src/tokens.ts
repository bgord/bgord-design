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
