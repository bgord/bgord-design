import { File } from './file';

import { GeneratorInterface } from './src/generator';
import { Margins } from './src/margins-generator';

import { Spacing } from './src/tokens';

class GeneratorProcessor {
  async process(generators: GeneratorInterface[]) {
    let output = '';

    for (const generator of generators) {
      output += generator.generateHeader();
      output += generator.generateCss();
      output += generator.generateFooter();
    }

    const file = new File('main.css');

    await file.save(output);
  }
}

async function main() {
  await new GeneratorProcessor().process([new Margins(Spacing)]);
}

main();
