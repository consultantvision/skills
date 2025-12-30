---
title: Len function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:15:07 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:16:20 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Len function in Power Platform returns the length of a string of text.
- It can take a single string or a single-column table of strings as an argument.
- The function returns the length as a number for a single string, or a single-column table with a Value column containing the length of each string for a table.


Detailed summary

- The Len function in the Power Platform is used to return the length of a string of text, and it can be applied to various platforms such as Canvas apps, Copilot Studio, Desktop flows, Dataverse formula columns, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The Len function takes a single string or a single-column table that contains strings as an argument, and it returns the length as a number if a single string is specified, or a single-column table with a Value column that contains the length of each string if a single-column table is specified.
- If a blank string is specified, the Len function returns 0, and it is possible to shape a multi-column table into a single-column table to work with the Len function.
- The syntax of the Len function is Len( String ) for a single string, or Len( SingleColumnTable ) for a single-column table of strings, where String and SingleColumnTable are the required arguments.
- Examples of using the Len function include measuring the length of a string in a text-input control, such as the string "E. E. Cummings" in the Author control, which returns a result of 14, and measuring the length of an empty string, which returns a result of 0.
- The Len function can also be used with a data source, such as a table named People that contains columns for Name and Address, to measure the length of strings in the table, and the results can be displayed in a table format with the formula, description, and result.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-len)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages

Returns the length of a string of text.

If you specify a single string as the argument, the return value is the length as a number. If you specify a single-column [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) that contains strings, the return value is a single-column table with a **Value** column that contains the length of each string. If you have a multi-column table, you can shape it into a single-column table, as [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) describes.

If you specify a [blank](https://learn.microsoft.com/function-isblank-isempty) string, **Len** returns 0.

**Len**( *String* )

- *String* - Required. The string to measure.

**Len**( *SingleColumnTable* )

- *SingleColumnTable* - Required. A single-column table of strings to measure.

For the examples in this section, the [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources) is a text-input control that's named **Author** and that contains the string "E. E. Cummings".


| Formula | Description | Result |
| --- | --- | --- |
| **Len( Author.Text )** | Measures the length of the string in the **Author** control. | 14 |
| **Len( "" )** | Measures the length of an empty string. | 0 |

For the first example in this section, the data source is named **People** and contains this data:

| Name | Address |
| --- | --- |
| "Jean" | "123 Main St NE" |
| "Fred" | "789 SW 39th #3B" |

<div></div>

