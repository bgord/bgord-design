import { AbstractGenerator, GeneratorConfigType } from './generator';

export class TransformsGenerator extends AbstractGenerator {
  transforms: GeneratorConfigType['transforms'];

  constructor(config: GeneratorConfigType) {
    super('Transforms');

    this.transforms = config.transforms;
  }

  generateCss(): string {
    let output = '';

    // Regular display: data-transform~="*"
    for (const [key, value] of Object.entries(this.transforms)) {
      if (key === 'truncate') {
        output += `*[data-transform~='${key}'] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n`;
        continue;
      }

      if (key === 'line-clamp') {
        output += `*[data-transform~='${key}'] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: var(--lines, 2);\n}\n`;
        continue;
      }

      if (key === 'center') {
        output += `*[data-transform~='${key}'] {\n  text-align: center;\n}\n`;
        continue;
      }

      if (key === 'upper-first') {
        output += `*[data-transform~='upper-first']:first-letter {\n  text-transform: uppercase;\n}\n`;
        continue;
      }

      if (key === 'nowrap') {
        output += `*[data-transform~='nowrap'] {\n  white-space: nowrap;\n}\n`;
        continue;
      }

      output += `*[data-transform~='${key}'] {\n  text-transform: ${value};\n}\n`;
    }

    return output;
  }
}
