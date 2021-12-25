# ADR001 - Visual hints

Status: Draft

Decision: **TBD**

Context: Add visual hints for clearly incorrect usages of the design system. Accessibility, missing attributes, etc.

An example validation:

```css
.c-button:not([data-variant]),
.c-button[data-variant=''] {
  background-color: purple !important;
}

.c-button:not([data-variant])::after,
.c-button[data-variant='']::after {
  content: 'Missing data-variant for the button';
}
```

Options considered:

1. Separate stylesheet

- [+] no way to mix it with the original design system CSS

---
