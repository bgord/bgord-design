import { File } from './file';

import { AbstractGenerator } from './generator';
import { Margins } from './margins-generator';
import { Paddings } from './paddings-generator';
import { DisplaysGenerator } from './displays-generator';
import { AxisPlacementsGenerator } from './axis-placements-generator';
import { PositionsGenerator } from './postions-generator';
import { FlexWrapGenerator } from './flex-wraps-generator';
import { ZIndexGenerator } from './z-index-generator';
import { WidthsGenerator } from './widhts-generator';
import { FontSizeGenerator } from './font-size-generator';
import { FontWeightGenerator } from './font-weight-generator';
import { LineHeightsGenerator } from './line-height-generator';
import { FlexDirectionsGenerator } from './flex-directions-generator';
import { BackgroundsGenerator } from './backgrounds-generator';
import { FontColorsGenerator } from './font-colors-generator';
import { LetterSpacingsGenerator } from './letter-spacings-generator';
import { FlexGrowsGenerator } from './flex-grows-generator';
import { BorderWidthsGenerator } from './border-widths-generator';
import { BorderColorsGenerator } from './border-colors-generator';
import { BorderRadiusesGenerator } from './border-radiuses-generator';
import { MaxWidthsGenerator } from './max-widths-generator';
import { TransformsGenerator } from './transforms-generator';
import { OverflowsGenerator } from './overflows-generator';
import { PositionersGenerator } from './positioners-generator';
import { HeightsGenerator } from './heights-generator';
import { GapGenerator } from './gap-generator';
import { CursorsGenerator } from './cursors-generator';

import {
  Spacing,
  Displays,
  AxisPlacements,
  Positions,
  FlexWraps,
  ZIndexes,
  Widths,
  FontSizes,
  FontWeights,
  FlexDirections,
  LineHeights,
  Grayscale,
  Greens,
  Reds,
  Oranges,
  Breakpoints,
  LetterSpacings,
  FlexGrows,
  BorderWidths,
  BorderColors,
  BorderRadiuses,
  MaxWidths,
  Transforms,
  Overflows,
  Heights,
  Cursors,
} from './tokens';

class GeneratorProcessor {
  async process(generators: AbstractGenerator[]) {
    let output = '';

    for (const generator of generators) {
      output += generator.generateHeader();
      output += generator.generateCss();
      output += generator.generateFooter();
    }

    output += await new File('src/ui/button.css').read();
    output += await new File('src/ui/input.css').read();
    output += await new File('src/ui/label.css').read();
    output += await new File('src/ui/link.css').read();
    output += await new File('src/ui/select.css').read();
    output += await new File('src/ui/checkbox.css').read();
    output += await new File('src/ui/textarea.css').read();
    output += await new File('src/ui/anima.css').read();

    output += await new File('src/rules/title-truncate.css').read();
    output += await new File('src/rules/target-blank-referer.css').read();
    output += await new File('src/rules/image-alt.css').read();

    await new File('dist/main.css').save(output);
  }
}

export async function main() {
  const config = {
    spacing: Spacing,
    displays: Displays,
    axisPlacements: AxisPlacements,
    positions: Positions,
    flexWraps: FlexWraps,
    zIndexes: ZIndexes,
    widths: Widths,
    fontSizes: FontSizes,
    fontWeights: FontWeights,
    lineHeights: LineHeights,
    flexDirections: FlexDirections,
    grayscale: Grayscale,
    greens: Greens,
    reds: Reds,
    oranges: Oranges,
    breakpoints: Breakpoints,
    letterSpacings: LetterSpacings,
    flexGrows: FlexGrows,
    borderWidths: BorderWidths,
    borderColors: BorderColors,
    borderRadiuses: BorderRadiuses,
    maxWidths: MaxWidths,
    transforms: Transforms,
    overflows: Overflows,
    heights: Heights,
    cursors: Cursors,
  };

  await new GeneratorProcessor().process([
    new Margins(config),
    new Paddings(config),

    new DisplaysGenerator(config),
    new AxisPlacementsGenerator(config),
    new FlexWrapGenerator(config),
    new FlexDirectionsGenerator(config),
    new FlexGrowsGenerator(config),
    new GapGenerator(config),

    new WidthsGenerator(config),
    new PositionsGenerator(config),
    new ZIndexGenerator(config),

    new FontSizeGenerator(config),
    new FontWeightGenerator(config),
    new FontColorsGenerator(config),
    new LineHeightsGenerator(config),
    new LetterSpacingsGenerator(config),

    new BackgroundsGenerator(config),

    new BorderWidthsGenerator(config),
    new BorderColorsGenerator(config),
    new BorderRadiusesGenerator(config),
    new MaxWidthsGenerator(config),
    new TransformsGenerator(config),
    new OverflowsGenerator(config),
    new PositionersGenerator(),
    new HeightsGenerator(config),
    new CursorsGenerator(config),
  ]);
}
