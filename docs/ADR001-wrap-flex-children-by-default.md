# ADR001 - Wrap flex children by default

Status: Adopted

Decision: **Wrap flex children by default**

Context:
Wanting to apply defensive CSS principles.

Options considered:

- not changing flex-wrap value for flex children by default

Consequences:

- no horizontal scrolling appears for overflowing flex containers
- having to overwrite the property with `data-wrap`, so it has to appear later on in the resulting CSS file

---

[0](https://ishadeed.com/article/defensive-css/#flexbox-wrapping)
