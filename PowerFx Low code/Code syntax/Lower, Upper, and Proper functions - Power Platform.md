---
title: Lower, Upper, and Proper functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:15:39 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:15:50 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Lower function converts strings to all lowercase.
- The Upper function converts strings to all uppercase.
- The Proper function converts the first letter of each word to uppercase and other letters to lowercase, ignoring non-letter characters.


Detailed summary

- The Lower, Upper, and Proper functions in Power Platform are used to convert the case of letters in strings, and they can be applied to various platforms, including Canvas apps, Copilot Studio, Desktop flows, Dataverse formula columns, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The Lower function converts any uppercase letters in a string to lowercase, while the Upper function converts any lowercase letters to uppercase, and the Proper function converts the first letter of each word to uppercase if it's lowercase and converts any other uppercase letters to lowercase.
- All three functions ignore characters that are not letters, and they can accept either a single string or a single-column table of strings as input, returning the converted version of the string or a single-column table of converted strings.
- The functions can be used with various data sources, such as text-input controls or tables, and they can be combined with other functions, such as ShowColumns, to convert specific columns of data.
- Examples of using the Lower, Upper, and Proper functions include converting the text of an author's name to lowercase, uppercase, or proper case, or converting the addresses in a table to a standard case format.
- The Proper function is particularly useful for converting text to a title case format, where the first letter of each word is capitalized, and it can be used in a variety of contexts, such as in labels or text controls, to display text in a more readable and visually appealing format.
- To use the Proper function, users can add a text input control and a label to their app, set the label's Text property to the Proper function, and then type in the text they want to convert, and the label will display the converted text in proper case.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-lower-upper-proper)
| Functions | Applies to |
| --- | --- |
| **Lower****Upper** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages |
| **Proper** | Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages |

Converts letters in a string of text to all lowercase, all uppercase, or proper case.

The **Lower**, **Upper**, and **Proper** functions convert the case of letters in strings.

- **Lower** converts any uppercase letters to lowercase.

- **Upper** converts any lowercase letters to uppercase.

- **Proper** converts the first letter in each word to uppercase if it's lowercase and converts any other uppercase letters to lowercase.

All three functions ignore characters that aren't letters.


If you pass a single string, the return value is the converted version of that string. If you pass a single-column [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) that contains strings, the return value is a single-column table of converted strings. If you have a multi-column table, you can shape it into a single-column table, as [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) describes.

**Lower**( *String* )**Upper**( *String* )**Proper**( *String* )

- *String* - Required. The string to convert.

**Lower**( *SingleColumnTable* )**Upper**( *SingleColumnTable* )**Proper**( *SingleColumnTable* )

- *SingleColumnTable* - Required. A single-column table of strings to convert.

The examples in this section use a text-input control, named **Author**, as their [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources). The control contains the string "[E. E. CummINGS](https://app.getrecall.ai/item/8eca70f9-2107-475d-95d6-4ae828877fdf)".


| Formula | Description | Result |
| --- | --- | --- |
| **Lower( Author.Text )** | Converts any uppercase letters in the string to lowercase. | "e. e. cummings" |
| **Upper( Author.Text )** | Converts any lowercase letters in the string to uppercase. | "[E. E. CUMMINGS](https://app.getrecall.ai/item/8eca70f9-2107-475d-95d6-4ae828877fdf)" |
| **Proper( Author.Text )** | Converts the first letter of each word to uppercase if it's lowercase, and converts any other uppercase letters to lowercase. | "E. E. Cummings" |

The examples in this section convert strings from the **Address** [column](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns) of the **People** data source, which contains this data:

| Name | Address |
| --- | --- |
| "Jean" | "123 Main St NE" |
| "Fred" | "789 SW 39th #3B" |

Each formula returns a single-column table that contains the converted strings.


| Formula | Description | Result |
| --- | --- | --- |
| **Lower( ShowColumns( People, "Address" ) )** | Converts any letter that's lowercase to uppercase. | A single-column table with a `Value` column containing the following values: "123 main st ne", "789 sw 39th #3b" |
| **Upper( ShowColumns( People, "Address" ) )** | Converts any letter that's lowercase to uppercase. | A single-column table with a `Value` column containing the following values: "123 MAIN ST NE", "789 SW 39TH #3B" |
| **Proper( ShowColumns( People, "Address" ) )** | Converts any first letter of a word that's lowercase to uppercase, and converts any other letter that's uppercase to lowercase. | A single-column table with a `Value` column containing the following values: "123 Main St Ne", "789 Sw 39th #3b" |

1. Add a [Text input](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) control, and name it **Source**.

2. Add a label, and set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this function:**Proper(Source.Text)**

3. Press F5, and then type **WE ARE THE BEST!** into the **Source** box.The label shows **We Are The Best!**

