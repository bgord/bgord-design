import { File } from './file';

import { GeneratorInterface } from './generator';
import { Margins } from './margins-generator';
import { Paddings } from './paddings-generator';
import { DisplaysGenerator } from './displays-generator';

import { Spacing, Displays } from './tokens';

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
  const config = { spacing: Spacing, displays: Displays };

  await new GeneratorProcessor().process([
    new Margins(config),
    new Paddings(config),
    new DisplaysGenerator(config),
  ]);
}
