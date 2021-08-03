import { File } from './file';

import { GeneratorInterface } from './generator';
import { Margins } from './margins-generator';
import { Paddings } from './paddings-generator';
import { DisplaysGenerator } from './displays-generator';
import { AxisPlacementsGenerator } from './axis-placements-generator';
import { PositionsGenerator } from './postions-generator';

import { Spacing, Displays, AxisPlacements, Positions } from './tokens';

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
  };

  await new GeneratorProcessor().process([
    new Margins(config),
    new Paddings(config),
    new DisplaysGenerator(config),
    new AxisPlacementsGenerator(config),
    new PositionsGenerator(config),
  ]);
}
