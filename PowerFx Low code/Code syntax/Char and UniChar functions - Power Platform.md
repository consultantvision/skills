---
title: Char and UniChar functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:26:47 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:26:53 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Char function translates an ASCII character code into a string.
- The UniChar function translates a Unicode character code into a string.
- Both functions can accept a single number or a table of numbers and return the corresponding character(s) as a string or a table of strings.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-char)
| Function | Applies to |
| --- | --- |
| **Char** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages |
| **UniChar** | Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages |

Translates a character code into a string.

The **Char** function translates a number into a string with the corresponding [ASCII](https://app.getrecall.ai/item/76053ba2-9fdd-40bc-acd1-cc8eb5c1444a) character.

The **UniChar** function translates a number into a string with the corresponding Unicode character.

If you pass a single number, the return value is the translated string version of that number. If you pass a single-column [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) that contains numbers, the return value is a single-column table of strings in a **Value** column. If you have a multi-column table, you can shape it into a single-column table, as [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) describes.

**Char**( *CharacterCode* )

- *CharacterCode* - Required. [ASCII](https://app.getrecall.ai/item/76053ba2-9fdd-40bc-acd1-cc8eb5c1444a) character code to translate.

**Char**( *CharacterCodeTable* )


- *CharacterCodeTable* - Required. Table of ASCII character codes to translate.

**UniChar**( *UnicodeCode* )

- *UnicodeCode* - Required. Unicode character code to translate.

**UniChar**( *UnicodeCodeTable* )

- *UnicodeCodeTable* - Required. Table of Unicode character codes to translate.

| Formula | Description | Result |
| --- | --- | --- |
| **Char( 65 )** | Returns the character that corresponds to [ASCII](https://app.getrecall.ai/item/76053ba2-9fdd-40bc-acd1-cc8eb5c1444a) code 65. | "A" |
| **Char( 105 )** | Returns the character that corresponds to ASCII code 105. | "i" |
| **Char( 35 )** | Returns the character that corresponds to ASCII code 35. | "#" |
| **UniChar( 35 )** | Returns the character that corresponds to Unicode code 35. | "#" |
| **UniChar( 233 )** | Returns the character that corresponds to Unicode code 233. | "á" |
| **UniChar( 9829 )** | Returns the character that corresponds to Unicode code 9829. | "♥" |

The example in this section converts numbers from a single-column table.


| Formula | Result |
| --- | --- |
| `Char( [ 65, 105 ] )` | A single-column table with a `Value` column containing the following values: "A", "i" |
| `Char( [ 35, 52 ] )` | A single-column table with a `Value` column containing the following values: "#", "4" |
| `UniChar( [ 71, 97, 114, 231, 111, 110 ] )` | A single-column table with a `Value` column containing the following values: "G", "a", "r", "ç", "o", "n" |

1. On an empty screen in a tablet app, add a [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) control with a **Blank Horizontal** layout, and then set these properties:

- **Items**: `Sequence( 8, 0, 16 ) As HighNibble`

- **Width**: `Parent.Width`

- **Height**: `Parent.Height`

- **TemplateSize**: `Parent.Width / 8`

- **TemplatePadding**: 0

- **X**: 0

- **Y**: 0

2. Inside that gallery, add a **Gallery** control with a **Blank Vertical** layout, and then set these properties:

- **Items**: `Sequence( 16, HighNibble.Value ) As FullCode`

- **Width**: `Parent.Width / 8`

- **Height**: `Parent.Height`

- **TemplateSize**: `Parent.Height / 16`

- **TemplatePadding**: 0

- **X**: 0

- **Y**: 0

3. Inside the second (vertical) gallery, add a **Label** control, and set these properties:

- **Text**: `FullCode.Value`

- **Width**: `Parent.Width / 2`

- **X**: 0


- **Y**: 0

- **Align**: `Center`

- **FontWeight**: `Bold`

- **Size**: 24

4. Inside the second (vertical) gallery, add another **Label** control, and set these properties:

- **Text**: `Char( FullCode.Value )`

- **Width**: `Parent.Width / 2`

- **X**: `Parent.Width / 2`

- **Y**: 0

- **FontWeight**: `Bold`

- **Size**: 24

You've created a chart of the first 128 [ASCII](https://app.getrecall.ai/item/76053ba2-9fdd-40bc-acd1-cc8eb5c1444a) characters. Characters that appear as a small square can't be printed.

![First 128 ASCII characters.](https://learn.microsoft.com/media/function-char/chart-lower.png)

If you want to see how **FullCode.Value** gets its values. Let's begin with the outer horizontal gallery. Its **Items** property uses the **Sequence** function to create 8 columns, starting with 0 with increments of 16:

![Outer gallery illustrated.](https://learn.microsoft.com/media/function-char/chart-lower-outer.png)

Nested within this gallery is another vertical gallery. Its **Items** property fills in the gap left by the increment of 16 from the outer gallery:

![Inner gallery illustrated.](https://learn.microsoft.com/media/function-char/chart-lower-inner.png)

To show the extended [ASCII](https://app.getrecall.ai/item/76053ba2-9fdd-40bc-acd1-cc8eb5c1444a) characters, it's a simple matter of changing the starting point for the chart, set in the Sequence function for the outer gallery:

`Sequence( 8, 128, 16 ) As HighNibble`

![Extended ASCII characters.](https://learn.microsoft.com/media/function-char/chart-higher.png)


Finally, to show the characters in a different font, set the **Font** property of the second label to a value such as **'Dancing Script'**.

![Dancing Script.](https://learn.microsoft.com/media/function-char/chart-higher-dancing-script.png)

