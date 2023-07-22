# @bgord/design

Breakpoints

| Definition | Value                          |
| ---------- | ------------------------------ |
| data-md-\* | @media (max-width: ${value}px) |

| Key |           Value           |
| --- | :-----------------------: |
| 768 | @media (max-width: 768px) |

> You can use almost all design tokens after `data-md`, e.g `data-md-mx`.

## Margins

| Definition | Value               |
| ---------- | ------------------- |
| data-m     | margin              |
| data-mx    | margin-{left,right} |
| data-my    | margin-{top,bottom} |
| data-mt    | margin-top          |
| data-mr    | margin-right        |
| data-mb    | margin-bottom       |
| data-ml    | margin-left         |

| Key   | Value |
| ----- | :---: |
| 0     |   0   |
| 3     |  3px  |
| 6     |  6px  |
| 12    | 12px  |
| 24    | 24px  |
| 36    | 36px  |
| 48    | 48px  |
| 72    | 72px  |
| auto  | auto  |
| unset | unset |

## Paddings

| Definition | Value                  |
| ---------- | ---------------------- |
| data-p     | padding                |
| data-px    | padding-{left,padding} |
| data-py    | padding-{top,bottom}   |
| data-pt    | padding-top            |
| data-pr    | padding-right          |
| data-pb    | padding-bottom         |
| data-pl    | padding-left           |

| Key   | Value |
| ----- | :---: |
|       |       |
| 0     |   0   |
| 3     |  3px  |
| 6     |  6px  |
| 12    | 12px  |
| 24    | 24px  |
| 36    | 36px  |
| 48    | 48px  |
| 72    | 72px  |
| auto  | auto  |
| unset | unset |

## Displays

| Definition   | Value   |
| ------------ | ------- |
| data-display | display |

| Key          |    Value     |
| ------------ | :----------: |
|              |              |
| flex         |     flex     |
| block        |    block     |
| inline-block | inline-block |
| none         |     none     |

## Axis placements

| Definition | Value           |
| ---------- | --------------- |
| data-main  | justify-content |
| data-cross | align-items     |
| data-self  | align-items     |

| Key      |     Value     | Available for data-self |
| -------- | :-----------: | :---------------------: |
| start    |  flex-start   |           yes           |
| end      |   flex-end    |           yes           |
| around   | space-around  |           no            |
| between  | space-between |           no            |
| evenly   | space-evenly  |           no            |
| center   |    center     |           yes           |
| baseline |   baseline    |           yes           |

## Positions

| Definition    | Value    |
| ------------- | -------- |
| data-position | position |

| Key      |  Value   |
| -------- | :------: |
| static   |  static  |
| relative | relative |
| absolute | absolute |
| fixed    |  fixed   |
| sticky   |  sticky  |
| unset    |  unset   |

## Flex wraps

| Definition | Value     |
| ---------- | --------- |
| data-wrap  | flex-wrap |

| Key          |    Value     |
| ------------ | :----------: |
| nowrap       |    nowrap    |
| wrap         |     wrap     |
| wrap-reverse | wrap-reverse |
| unset        |    unset     |

## Z indexes

| Definition | Value   |
| ---------- | ------- |
| data-z     | z-index |

| Key | Value |
| --- | :---: |
| -1  |  -1   |
| 0   |   0   |
| 1   |   1   |
| 2   |   2   |
| 3   |   3   |

## Widths

| Definition | Value |
| ---------- | ----- |
| data-width | width |

| Key   | Value |
| ----- | :---: |
| 100%  | 100%  |
| auto  | auto  |
| unset | unset |

## Font sizes

| Definition | Value     |
| ---------- | --------- |
| data-fs    | font-size |

| Key | Value |
| --- | :---: |
| 12  |  12   |
| 14  |  14   |
| 16  |  16   |
| 20  |  20   |
| 24  |  24   |
| 32  |  32   |
| 36  |  36   |

## Font weights

| Definition | Value       |
| ---------- | ----------- |
| data-fw    | font-weight |

| Key   | Value |
| ----- | :---: |
| 300   |  300  |
| 400   |  400  |
| 500   |  500  |
| 700   |  700  |
| 900   |  900  |
| unset | unset |

## Font colors

| Definition | Value |
| ---------- | ----- |
| data-color | color |

Possible values: see the Colors section.

## Line heights

| Definition | Value       |
| ---------- | ----------- |
| data-lh    | line-height |

| Key   | Value |
| ----- | :---: |
| 12    |  12   |
| 16    |  16   |
| 20    |  20   |
| 24    |  24   |
| 32    |  32   |
| 36    |  36   |
| unset | unset |

## Flex directions

| Definition     | Value          |
| -------------- | -------------- |
| data-direction | flex-direction |

| Key            |     Value      |
| -------------- | :------------: |
| row            |      row       |
| row-reverse    |  row-reverse   |
| column         |     column     |
| column-reverse | column-reverse |

## Letter spacings

| Definition | Value          |
| ---------- | -------------- |
| data-ls    | letter-spacing |

| Key | Value |
| --- | :---: |
| 0.5 |  0.5  |
| 1   |   1   |
| 1.5 |  1.5  |
| 2   |   2   |

## Flex grows

| Definition | Value     |
| ---------- | --------- |
| data-grow  | flex-grow |

| Key   | Value |
| ----- | :---: |
| 1     |   1   |
| unset | unset |

## Flex shrinks

| Definition  | Value       |
| ----------- | ----------- |
| data-shrink | flex-shrink |

| Key   | Value |
| ----- | :---: |
| 0     |   0   |
| unset | unset |

## Border widths

| Definition | Value                     |
| ---------- | ------------------------- |
| data-bw    | border-width              |
| data-bwx   | border-width-{right,left} |
| data-bwy   | border-width-{top,bottom} |
| data-bwt   | border-width-top          |
| data-bwr   | border-width-right        |
| data-bwb   | border-width-bottom       |
| data-bwl   | border-width-left         |

| Key | Value |
| --- | :---: |
| 1   |   1   |
| 2   |   2   |
| 4   |   4   |
| 6   |   6   |
| 12  |  12   |

## Border radiuses

| Definition | Value         |
| ---------- | ------------- |
| data-br    | border-radius |

| Key | Value |
| --- | :---: |
| 0   |   0   |
| 1   |  1px  |
| 2   |  2px  |
| 4   |  4px  |
| 50% |  50%  |

## Max widths

| Definition     | Value     |
| -------------- | --------- |
| data-max-width | max-width |

| Key   | Value  |
| ----- | :----: |
| 100%  |  100%  |
| 1296  | 1296px |
| 768   | 768px  |
| 528   | 528px  |
| 320   | 320px  |
| unset | unset  |

## Transforms

| Definition     | Value          |
| -------------- | -------------- |
| data-direction | flex-direction |

| Key         |    Value    |
| ----------- | :---------: |
| uppercase   |  uppercase  |
| lowercase   |  lowercase  |
| capitalize  | capitalize  |
| upper-first | upper-first |
| truncate    |  truncate   |
| center      |   center    |
| none        |    none     |

## Overflows

| Definition    | Value    |
| ------------- | -------- |
| data-overflow | overflow |

| Key    | Value  |
| ------ | :----: |
| auto   |  auto  |
| scroll | scroll |
| hidden | hidden |

## Heights

| Definition  | Value  |
| ----------- | ------ |
| data-height | height |

| Key   | Value |
| ----- | :---: |
| 100%  | 100%  |
| auto  | auto  |
| unset | unset |

## Positioners

| Definition  | Value  |
| ----------- | ------ |
| data-top    | top    |
| data-right  | right  |
| data-bottom | bottom |
| data-left   | left   |
| data-inset  | inset  |

| Key | Value |
| --- | :---: |
| 0   |   0   |

## Transform

> Accepts multiple values.

| Definition     | Value          |
| -------------- | -------------- |
| data-transform | text-transform |
| data-transform | \*             |

| Key         |                             Value                              |
| ----------- | :------------------------------------------------------------: |
| uppercase   |                           uppercase                            |
| lowercase   |                           lowercase                            |
| capitalize  |                           capitalize                           |
| upper-first |          :first-letter { text-transform: uppercase }           |
| center      |                       text-align: center                       |
| none        |                              none                              |
| truncate    | overflow: hidden, white-space: nowrap, text-overflow: ellipsis |

## Backgrounds

| Definition | Value            |
| ---------- | ---------------- |
| data-bg    | background-color |

Possible values: see the Colors section.

## Border colors

| Definition | Value                     |
| ---------- | ------------------------- |
| data-bc    | border-color              |
| data-bcx   | border-color-{right,left} |
| data-bcy   | border-color-{top,bottom} |
| data-bct   | border-color-top          |
| data-bcr   | border-color-right        |
| data-bcb   | border-color-bottom       |
| data-bcl   | border-color-left         |

Possible values: see the Colors section.

## Colors

Grayscale

| Key      |  Value  |
| -------- | :-----: |
| white    | #F9FAFB |
| gray-100 | #F3F4F6 |
| gray-200 | #E5E7EB |
| gray-300 | #D1D5DB |
| gray-400 | #9CA3AF |
| gray-500 | #6B7280 |
| gray-600 | #4B5563 |
| gray-700 | #374151 |
| gray-800 | #1F2937 |
| black    | #111827 |

Green

| Key       |       Value        |
| --------- | :----------------: |
| green-100 | hsl(112, 50%, 85%) |
| green-200 | hsl(112, 50%, 75%) |
| green-300 | hsl(112, 50%, 65%) |
| green-400 | hsl(112, 50%, 55%) |
| green-500 | hsl(112, 50%, 45%) |
| green-600 | hsl(112, 50%, 35%) |
| green-700 | hsl(112, 50%, 25%) |
| green-800 | hsl(112, 50%, 20%) |

Red

| Key     |       Value        |
| ------- | :----------------: |
| red-100 |  hsl(5, 80%, 90%)  |
| red-200 |  hsl(5, 80%, 83%)  |
| red-300 | hsl(5, 80%, 72.5%) |
| red-400 | hsl(5, 80%, 62.5%) |
| red-500 | hsl(5, 80%, 52.5%) |
| red-600 |  hsl(5, 80%, 42%)  |
| red-700 | hsl(5, 80%, 32.5%) |
| red-800 | hsl(5, 80%, 22.5%) |

Orange

| Key        |        Value        |
| ---------- | :-----------------: |
| orange-100 |  hsl(25, 88%, 85%)  |
| orange-200 |  hsl(25, 88%, 75%)  |
| orange-300 |  hsl(25, 88%, 65%)  |
| orange-400 |  hsl(25, 88%, 55%)  |
| orange-500 |  hsl(25, 88%, 45%)  |
| orange-600 | hsl(25, 88%, 37.5%) |
| orange-700 | hsl(25, 88%, 27.5%) |
| orange-800 |  hsl(25, 88%, 20%)  |

## Cursors

| Definition  | Value  |
| ----------- | ------ |
| data-cursor | cursor |

| Key         |    Value    |
| ----------- | :---------: |
| wait        |    wait     |
| auto        |    auto     |
| pointer     |   pointer   |
| not-allowed | not-allowed |

## Backdrops

| Definition    | Value    |
| ------------- | -------- |
| data-backdrop | backdrop |

| Key   |        Value        |
| ----- | :-----------------: |
| black | rgba(0, 0, 0, 0.75) |
| none  |        none         |

## Object fits

| Definition      | Value      |
| --------------- | ---------- |
| data-object-fit | object-fit |

| Key        |   Value    |
| ---------- | :--------: |
| contain    |  contain   |
| cover      |   cover    |
| fill       |    fill    |
| scale-down | scale-down |
| none       |    none    |
