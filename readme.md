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
├── generate-lib.ts
├── generate-types.ts
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
├── tokens
│   ├── backdrops-token-generator.ts
│   ├── border-width-token-generator.ts
│   ├── brand-token-generator.ts
│   ├── breakpoint-token-generator.ts
│   ├── danger-token-generator.ts
│   ├── font-family-token-generator.ts
│   ├── font-size-token-generator.ts
│   ├── font-weight-token-generator.ts
│   ├── grayscale-token-generator.ts
│   ├── letter-spacing-token-generator.ts
│   ├── line-height-token-generator.ts
│   ├── motion-token-generator.ts
│   ├── opacity-token-generator.ts
│   ├── positive-token-generator.ts
│   ├── radius-token-generator.ts
│   ├── shadow-token-generator.ts
│   ├── size-token-generator.ts
│   ├── spacing-token-generator.ts
│   ├── template.ts
│   ├── warning-token-generator.ts
│   └── z-index-token-generator.ts
├── ui
│   ├── badge.css
│   ├── button.css
│   ├── checkbox.css
│   ├── file-explorer.css
│   ├── input.css
│   ├── label.css
│   ├── link.css
│   ├── range.css
│   ├── select.css
│   ├── textarea.css
│   └── visually-hidden.css
└── utilities
    ├── axis-placement-utility-generator.ts
    ├── backdrop-utility-generator.ts
    ├── background-utility-generator.ts
    ├── border-color-utility-generator.ts
    ├── border-width-utility-generator.ts
    ├── cursor-utility-generator.ts
    ├── display-utility-generator.ts
    ├── flex-direction-utility-generator.ts
    ├── flex-grow-utility-generator.ts
    ├── flex-shrink-utility-generator.ts
    ├── flex-wrap-utility-generator.ts
    ├── font-color-utility-generator.ts
    ├── font-family-utility-generator.ts
    ├── font-size-utility-generator.ts
    ├── font-weight-utility-generator.ts
    ├── gap-utility-generator.ts
    ├── height-utility-generator.ts
    ├── letter-spacing-utility-generator.ts
    ├── line-height-utility-generator.ts
    ├── margin-utility-generator.ts
    ├── max-height-utility-generator.ts
    ├── max-width-utility-generator.ts
    ├── object-fit-utility-generator.ts
    ├── object-position-utility-generator.ts
    ├── opacity-utility-generator.ts
    ├── overflow-utility-generator.ts
    ├── padding-utility-generator.ts
    ├── pointer-event-utility-generator.ts
    ├── position-utility-generator.ts
    ├── positioners-utility-generator.ts
    ├── radius-utility-generator.ts
    ├── rotate-utility-generator.ts
    ├── shadow-utility-generator.ts
    ├── size-utility-generator.ts
    ├── template.ts
    ├── transform-utility-generator.ts
    ├── width-utility-generator.ts
    └── z-index-utility-generator.ts
```

