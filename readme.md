# bgord-design

## Configuration:

Clone the repository

```
git clone git@github.com:bgord/journal.git --recurse-submodules
```

Install packages

```
bun i
```

Run the tests

```
./bgord-scripts/test-run.sh
```

## Files:

```
src/
├── animations
│   ├── grow-fade-in.css
│   └── shrink-fade-out.css
├── generate-css.ts
├── generator.ts
├── generators
│   ├── axis-placements-generator.ts
│   ├── backdrops-generator.ts
│   ├── backgrounds-generator.ts
│   ├── border-colors-generator.ts
│   ├── border-radiuses-generator.ts
│   ├── border-widths-generator.ts
│   ├── cursors-generator.ts
│   ├── displays-generator.ts
│   ├── flex-directions-generator.ts
│   ├── flex-grows-generator.ts
│   ├── flex-shrinks-generator.ts
│   ├── flex-wraps-generator.ts
│   ├── font-colors-generator.ts
│   ├── font-size-generator.ts
│   ├── font-weight-generator.ts
│   ├── gap-generator.ts
│   ├── heights-generator.ts
│   ├── letter-spacings-generator.ts
│   ├── line-height-generator.ts
│   ├── margins-generator.ts
│   ├── max-heights-generator.ts
│   ├── max-widths-generator.ts
│   ├── object-fits-generator.ts
│   ├── object-positions-generator.ts
│   ├── overflows-generator.ts
│   ├── paddings-generator.ts
│   ├── pointer-events-generator.ts
│   ├── positioners-generator.ts
│   ├── positions-generator.ts
│   ├── rotates-generator.ts
│   ├── shadows-generator.ts
│   ├── transforms-generator.ts
│   ├── widths-generator.ts
│   └── z-index-generator.ts
├── interactions
│   ├── grow.css
│   ├── rotate-into-focus.css
│   └── subtle-scale.css
├── normalize.css
├── rules
│   ├── button-empty-content.css
│   ├── button-icon-title.css
│   ├── focusable-hidden-element.css
│   ├── image-alt.css
│   ├── input-missing-id.css
│   ├── input-missing-name.css
│   ├── invalid-list-element.css
│   ├── link-empty-href.css
│   ├── target-blank-referer.css
│   └── title-truncate.css
├── tokens.ts
└── ui
    ├── badge.css
    ├── button.css
    ├── checkbox.css
    ├── file-explorer.css
    ├── input.css
    ├── label.css
    ├── link.css
    ├── range.css
    ├── select.css
    ├── switch.css
    ├── textarea.css
    └── visually-hidden.css
```

