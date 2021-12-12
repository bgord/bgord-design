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
} from './tokens';

class GeneratorProcessor {
  async process(generators: GeneratorInterface[]) {
    let output = '';

    for (const generator of generators) {
      output += generator.generateHeader();
      output += generator.generateCss();
      output += generator.generateFooter();
    }

    const file = new File('dist/main.css');

    await file.save(output);
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
    new LineHeightsGenerator(config),

    new BackgroundsGenerator(config),
  ]);
}
