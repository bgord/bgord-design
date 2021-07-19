import { File } from './file';

import { GeneratorInterface } from './generator';
import { Margins } from './margins-generator';
import { Paddings } from './paddings-generator';

import { Spacing } from './tokens';

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
  await new GeneratorProcessor().process([
    new Margins(Spacing),
    new Paddings(Spacing),
  ]);
}
