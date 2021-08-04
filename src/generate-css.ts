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

import {
  Spacing,
  Displays,
  AxisPlacements,
  Positions,
  FlexWraps,
  ZIndexes,
  Widths,
  FontSizes,
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
  };

  await new GeneratorProcessor().process([
    new Margins(config),
    new Paddings(config),
    new DisplaysGenerator(config),
    new AxisPlacementsGenerator(config),
    new PositionsGenerator(config),
    new FlexWrapGenerator(config),
    new ZIndexGenerator(config),
    new WidthsGenerator(config),
    new FontSizeGenerator(config),
  ]);
}
