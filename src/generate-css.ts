import { File } from './file';

import { GeneratorInterface } from './generator';
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
  Colors,
  Breakpoints,
  LetterSpacings,
} from './tokens';

class GeneratorProcessor {
  async process(generators: GeneratorInterface[]) {
    let output = `/* General */

* {
  box-sizing: border-box;
  line-height: 24px;
  padding: 0;
  margin: 0;
}

small {
  display: block;
}\n\n`;

    for (const generator of generators) {
      output += generator.generateHeader();
      output += generator.generateCss();
      output += generator.generateFooter();
    }

    output += await new File('src/ui/button.css').read();
    output += await new File('src/ui/label.css').read();

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
    colors: Colors,
    breakpoints: Breakpoints,
    letterSpacings: LetterSpacings,
  };

  await new GeneratorProcessor().process([
    new Margins(config),
    new Paddings(config),

    new DisplaysGenerator(config),
    new AxisPlacementsGenerator(config),
    new FlexWrapGenerator(config),
    new FlexDirectionsGenerator(config),

    new WidthsGenerator(config),
    new PositionsGenerator(config),
    new ZIndexGenerator(config),

    new FontSizeGenerator(config),
    new FontWeightGenerator(config),
    new FontColorsGenerator(config),
    new LineHeightsGenerator(config),
    new LetterSpacingsGenerator(config),

    new BackgroundsGenerator(config),
  ]);
}
