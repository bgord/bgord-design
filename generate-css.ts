import { Spacing } from './src/tokens';

function generateRegularMargins() {
  // Regular margin: data-m="*"
  let output = '/* Margins */\n\n';

  Object.entries(Spacing).forEach(([key, value]) => {
    output += `*[data-m="${key}"] {\n  margin: ${value};\n}\n`;
  });

  return output;
}
