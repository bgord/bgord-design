import { File } from './file';

import { AbstractGenerator } from './generator';
import { Margins } from './margins-generator';
import { Paddings } from './paddings-generator';
import { DisplaysGenerator } from './displays-generator';
import { AxisPlacementsGenerator } from './axis-placements-generator';
import { PositionsGenerator } from './positions-generator';
import { FlexWrapGenerator } from './flex-wraps-generator';
import { ZIndexGenerator } from './z-index-generator';
import { WidthsGenerator } from './widths-generator';
import { FontSizeGenerator } from './font-size-generator';
import { FontWeightGenerator } from './font-weight-generator';
import { LineHeightsGenerator } from './line-height-generator';
import { FlexDirectionsGenerator } from './flex-directions-generator';
import { BackgroundsGenerator } from './backgrounds-generator';
import { FontColorsGenerator } from './font-colors-generator';
import { LetterSpacingsGenerator } from './letter-spacings-generator';
import { FlexGrowsGenerator } from './flex-grows-generator';
import { FlexShrinksGenerator } from './flex-shrinks-generator';
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
import { PointerEventsGenerator } from './pointer-events-generator';
import { BackdropsGenerator } from './backdrops-generator';
import { ObjectFitsGenerator } from './object-fits-generator';
import { ObjectPositionsGenerator } from './object-positions-generator';
import { RotatesGenerator } from './rotates-generator';
import { MaxHeightsGenerator } from './max-heights-generator';
import { ShadowsGenerator } from './shadows-generator';

import * as Tokens from './tokens';

class GeneratorProcessor {
  async process(generators: AbstractGenerator[]) {
    let output = '';

    output += await new File('src/ui/button.css').read();
    output += await new File('src/ui/input.css').read();
    output += await new File('src/ui/label.css').read();
    output += await new File('src/ui/link.css').read();
    output += await new File('src/ui/select.css').read();
    output += await new File('src/ui/checkbox.css').read();
    output += await new File('src/ui/textarea.css').read();
    output += await new File('src/ui/range.css').read();
    output += await new File('src/ui/badge.css').read();
    output += await new File('src/ui/file-explorer.css').read();
    output += await new File('src/ui/visually-hidden.css').read();
    output += await new File('src/ui/switch.css').read();

    output += await new File('src/rules/title-truncate.css').read();
    output += await new File('src/rules/target-blank-referer.css').read();
    output += await new File('src/rules/image-alt.css').read();
    output += await new File('src/rules/button-icon-title.css').read();
    output += await new File('src/rules/invalid-list-element.css').read();

    for (const generator of generators) {
      output += generator.generateHeader();
      output += generator.generateCss();
      output += generator.generateFooter();
    }

    await new File('dist/main.css').save(output);
  }
}

export async function main() {
  await new GeneratorProcessor().process(
    [
      Margins,
      Paddings,
      DisplaysGenerator,
      AxisPlacementsGenerator,
      FlexWrapGenerator,
      FlexDirectionsGenerator,
      FlexGrowsGenerator,
      FlexShrinksGenerator,
      GapGenerator,
      WidthsGenerator,
      PositionsGenerator,
      ZIndexGenerator,
      FontSizeGenerator,
      FontWeightGenerator,
      FontColorsGenerator,
      LineHeightsGenerator,
      LetterSpacingsGenerator,
      BackgroundsGenerator,
      BorderWidthsGenerator,
      BorderColorsGenerator,
      BorderRadiusesGenerator,
      MaxWidthsGenerator,
      TransformsGenerator,
      OverflowsGenerator,
      PositionersGenerator,
      HeightsGenerator,
      CursorsGenerator,
      PointerEventsGenerator,
      BackdropsGenerator,
      ObjectFitsGenerator,
      ObjectPositionsGenerator,
      RotatesGenerator,
      MaxHeightsGenerator,
      ShadowsGenerator,
    ].map(generator => new generator(Tokens))
  );
}
