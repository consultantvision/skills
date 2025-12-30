---
title: Trim and TrimEnds functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 20:00:57 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 20:02:43 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Trim function removes all extra spaces from a string, except for single spaces between words.
- The TrimEnds function removes spaces from the start and end of a string, but leaves spaces between words intact.
- Both functions can be used with a single string or a single-column table of strings, and return the trimmed string or table.


Detailed summary

- The Trim and TrimEnds functions in the Power Platform are used to remove extra spaces from a string of text, with the Trim function removing all spaces except for single spaces between words, and the TrimEnds function removing all spaces from the start and end of a string but leaving spaces between words intact.
- These functions can be applied to a single string of text, a single-column table that contains strings, or a multi-column table that has been shaped into a single-column table, and they return the string or table with any extra spaces removed.
- The Trim function is consistent with the function of the same name in Microsoft Excel, while the TrimEnds function is consistent with programming tools that trim spaces only from the start and end of each string.
- The syntax for using these functions is Trim(String) or TrimEnds(String) for a single string, and Trim(SingleColumnTable) or TrimEnds(SingleColumnTable) for a single-column table, where String is the string of text to remove spaces from, and SingleColumnTable is the table of strings to remove spaces from.
- Examples of using the Trim and TrimEnds functions include removing extra spaces from a string such as "   Hello     World   ", which would result in "Hello World" for the Trim function and "Hello     World" for the TrimEnds function, and removing extra spaces from a single-column collection of strings, such as the Spaces collection.
- The results of using the Trim and TrimEnds functions on a single-column collection of strings can be seen in the examples provided, where the Trim function removes all extra spaces from the start and end of each string and extra spaces from within each string, and the TrimEnds function removes all spaces from the start and end of each string.
- It is also noted that extra spaces may not appear when displaying a collection, and the Len function can be used to verify the length of a string, which can be useful when working with the Trim and TrimEnds functions.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-trim)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages

Removes extra spaces from a string of text.

The **Trim** function removes all spaces from a string of text except for single spaces between words.

The **TrimEnds** function removes all spaces from the start and end of a string of text but leaves spaces between words intact.

If you specify a single string of text, the return value for either function is the string with any extra spaces removed. If you specify a single-column [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) that contains strings, the return value is a single-column table of trimmed strings. If you have a multi-column table, you can shape it into a single-column table, as [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) describes.

By trimming spaces between words, **Trim** is consistent with the function of the same name in Microsoft Excel. However, **TrimEnds** is consistent with programming tools that trim spaces only from the start and end of each string.


**Trim**( *String* )**TrimEnds**( *String* )

- *String* - Required. The string of text to remove spaces from.

**Trim**( *SingleColumnTable* )**TrimEnds**( *SingleColumnTable* )

- *SingleColumnTable* - Required. A single-column table of strings to remove spaces from.

| Formula | Description | Result |
| --- | --- | --- |
| **Trim( "   Hello     World   " )** | Removes all spaces from the start and end of a string and extra spaces from within the string. | "Hello World" |
| **TrimEnds( "   Hello     World   " )** | Removes all spaces from the start and end of a string. | "Hello     World" |

The following examples use a single-column collection, named **Spaces**, that contains these strings:

| Value |
| --- |
| "   Jane   Doe   " |
| "    Jack   and   Jill" |
| "Already trimmed" |
| "   Venus,   Earth,   Mars  " |
| "Oil and Water   " |

To create this collection, set the **OnSelect** property of a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control to this formula, open Preview mode, and then click or tap the button: **ClearCollect( Spaces, [ "   Jane   Doe   ", "    Jack   and   Jill", "Already trimmed", "   Venus,   Earth,   Mars  ", "Oil and Water   " ] )**


| Formula | Description | Result |
| --- | --- | --- |
| **Trim( Spaces )** | Trims all spaces from the start and end of each string and extra spaces from within each string in the **Spaces** collection. | A single-column table with a `Value` column containing the following values: "Jane Doe", "Jack and Jill", "Already trimmed", "Venus, Earth, Mars", "Oil and Water" |
| **TrimEnds( Spaces )** | Trims all spaces from the start and end of each string in the **Spaces** collection. | A single-column table with a `Value` column containing the following values: "Jane   Doe", "Jack   and   Jill", "Already trimmed", "Venus,   Earth,   Mars", "Oil and Water" |

Note

Extra spaces don't appear if you display a collection by clicking or tapping **Collections** on the **File** menu. To verify string length, use the [Len](https://learn.microsoft.com/function-len) function.

