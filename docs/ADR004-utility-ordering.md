## Current `Utility Generator`s, and the CSS properties they define:

[x][ORTHOGONAL] BackdropUtilityGenerator: ::backdrop background
[x][ORTHOGONAL] BackgroundUtilityGenerator: background

[x][ORTHOGONAL] BorderColorUtilityGenerator: border-color, border-{top, right, bottom, left}-color
[x][ORTHOGONAL] BorderWidthUtilityGenerator: border-width, border-{top, right, bottom, left}-width
[x][ORTHOGONAL] BorderStyleUtilityGenerator: border-style, border-{top, right, bottom, left}-style

[x][ORTHOGONAL] CursorUtilityGenerator: cursor
[x][DEPENDENT] DisplayUtilityGenerator: display, flex-wrap
[x][DEPENDENT] StackUtilityGenerator: display, flex-wrap, flex-direction
[x][DEPENDENT] FlexDirectionUtilityGenerator: flex-direction
[x][ORTHOGONAL] FlexGrowUtilityGenerator: flex-grow
[x][ORTHOGONAL] FlexShrinkUtilityGenerator: flex-shrink
[x][DEPENDENT] FlexWrapUtilityGenerator: flex-wrap
[x][ORTHOGONAL] AxisPlacementUtilityGenerator: justify-content, align-items
[x][ORTHOGONAL] SelfUtilityGenerator: align-self
[x][ORTHOGONAL] GapUtilityGenerator: gap
[x][ORTHOGONAL] FontColorUtilityGenerator: color
[x][ORTHOGONAL] FontFamilyUtilityGenerator: font-family
[x][ORTHOGONAL] FontSizeUtilityGenerator: font-size
[x][ORTHOGONAL] FontWeightUtilityGenerator: font-weight
[x][DEPENDENT] HeightUtilityGenerator: height
[x][ORTHOGONAL] LetterSpacingUtilityGenerator: letter-spacing
[x][ORTHOGONAL] LineHeightUtilityGenerator: line-height
[x][ORTHOGONAL] MarginUtilityGenerator: margin, margin-{top, right, bottom, left}
[x][ORTHOGONAL] MaxHeightUtilityGenerator: max-height
[x][ORTHOGONAL] MaxWidthUtilityGenerator: max-width
[x][ORTHOGONAL] ObjectFitUtilityGenerator: object-fit
[x][ORTHOGONAL] ObjectPositionUtilityGenerator: object-position
[x][ORTHOGONAL] OpacityUtilityGenerator: opacity
[x][DEPENDENT] OverflowUtilityGenerator: overflow
[x][ORTHOGONAL] PaddingUtilityGenerator: padding, padding-{top, right, bottom, left}
[x][ORTHOGONAL] PointerEventUtilityGenerator: pointer-events
[x][ORTHOGONAL] PositionUtilityGenerator: position
[x][ORTHOGONAL] PositionersUtilityGenerator: top, right, bototm, left, inset
[x][ORTHOGONAL] RadiusUtilityGenerator: border-radius
[x][DEPENDENT] RotateUtilityGenerator: transform
[x][ORTHOGONAL] ShadowUtilityGenerator: box-shadow
[x][DEPENDENT] SizeUtilityGenerator: height, width
[x][DEPENDENT] TransformUtilityGenerator: overflow, white-space, text-overflow, display, text-align, text-transform, font-variant-numeric
[x][DEPENDENT] WidthUtilityGenerator: width
[x][ORTHOGONAL] ZIndexUtilityGenerator:, z-index
[x][ORTHOGONAL] FocusRingUtilityGenerator: outline, outline-offset

General rule: if a selector appears further in the CSS file, it can override the previous selector

> Generic first, specific later.

## Curated `Utility Generator`s grouping order:

DisplayUtilityGenerator: display, flex-wrap
StackUtilityGenerator: display, flex-wrap, flex-direction
FlexDirectionUtilityGenerator: flex-direction
FlexWrapUtilityGenerator: flex-wrap
AxisPlacementUtilityGenerator: justify-content, align-items
SelfUtilityGenerator: align-self
GapUtilityGenerator: gap
FlexGrowUtilityGenerator: flex-grow
FlexShrinkUtilityGenerator: flex-shrink

PositionUtilityGenerator: position
PositionersUtilityGenerator: top, right, bototm, left, inset

SizeUtilityGenerator: height, width
HeightUtilityGenerator: height
WidthUtilityGenerator: width
MaxHeightUtilityGenerator: max-height
MaxWidthUtilityGenerator: max-width

MarginUtilityGenerator: margin, margin-{top, right, bottom, left}
PaddingUtilityGenerator: padding, padding-{top, right, bottom, left}

FontFamilyUtilityGenerator: font-family
FontColorUtilityGenerator: color
FontSizeUtilityGenerator: font-size
FontWeightUtilityGenerator: font-weight
LetterSpacingUtilityGenerator: letter-spacing
LineHeightUtilityGenerator: line-height

BackgroundUtilityGenerator: background
BackdropUtilityGenerator: ::backdrop background

BorderColorUtilityGenerator: border-color, border-{top, right, bottom, left}-color
BorderWidthUtilityGenerator: border-width, border-{top, right, bottom, left}-width
BorderStyleUtilityGenerator: border-style, border-{top, right, bottom, left}-style
RadiusUtilityGenerator: border-radius

CursorUtilityGenerator: cursor
PointerEventUtilityGenerator: pointer-events
ObjectFitUtilityGenerator: object-fit
ObjectPositionUtilityGenerator: object-position
OpacityUtilityGenerator: opacity
FocusRingUtilityGenerator: outline, outline-offset
ZIndexUtilityGenerator:, z-index
ShadowUtilityGenerator: box-shadow
RotateUtilityGenerator: transform
OverflowUtilityGenerator: overflow
TransformUtilityGenerator: overflow, white-space, text-overflow, display, text-align, text-transform, font-variant-numeric
