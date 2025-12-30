---
title: Left, Mid, and Right functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:14:55 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:16:54 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Left, Mid, and Right functions in Power Platform extract portions of a string, returning the beginning, middle, or ending characters.
- The functions can be used with a single string or a single-column table of strings, and they return the requested portion of the string or a single-column table with the results.
- The functions have required parameters, including the string or table, and optional parameters such as the starting position and number of characters to return, which are used in the Left, Mid, and Right functions as follows: Left(String, NumberOfCharacters), Mid(String, StartingPosition [, NumberOfCharacters]), and Right(String, NumberOfCharacters).


Detailed summary

- The Left, Mid, and Right functions in the Power Platform are used to extract a portion of a string of text, and they can be applied to various platforms such as Canvas apps, Copilot Studio, Desktop flows, Dataverse formula columns, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The Left function returns the beginning characters of a string, the Mid function returns the middle characters of a string, and the Right function returns the ending characters of a string, with each function having its own set of parameters, including the string to extract from, the starting position, and the number of characters to return.
- When using these functions with a single string as an argument, they return the portion of the string that was requested, and when used with a single-column table that contains strings, they return a single-column table with a Value column containing the portions of the strings that were requested.
- The functions can handle different types of input, including single strings and tables, and they can also be used to extract specific portions of strings, such as the first few characters or the last few characters, with the Mid function allowing for the extraction of characters from a specific starting position.
- The syntax for the Left, Mid, and Right functions is as follows: Left( String, NumberOfCharacters ), Mid( String, StartingPosition [, NumberOfCharacters ] ), and Right( String, NumberOfCharacters ), where String is the string to extract from, StartingPosition is the starting position for the Mid function, and NumberOfCharacters is the number of characters to return.
- The functions can also be used with tables, with the syntax being Left( SingleColumnTable, NumberOfCharacters ), Mid( SingleColumnTable, StartingPosition [, NumberOfCharacters ] ), and Right( SingleColumnTable, NumberOfCharacters ), where SingleColumnTable is a single-column table of strings to extract from.
- Examples of using the Left, Mid, and Right functions include extracting the first few characters of a string, extracting the middle characters of a string, and extracting the last few characters of a string, with the results being returned as a single string or a single-column table, depending on the input.
- The functions can be used in various scenarios, such as extracting specific portions of text from a data source, and they can also be used in combination with other functions, such as the ShowColumns function, to extract specific columns from a table and then extract portions of the strings in that column.
- In addition to being used with strings and tables, the Left, Mid, and Right functions can also be used in galleries, such as when showing images and text in a gallery, to extract specific portions of text, such as the last few characters of a product name, and display them in a label.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-left-mid-right)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages

Extracts the left, middle, or right portion of a string of text.

The **Left**, **Mid**, and **Right** functions return a portion of a string.

- **Left** returns the beginning characters of a string.

- **Mid** returns the middle characters of a string.

- **Right** returns the ending characters of a string.

If you specify a single string as an argument, the function returns the portion that you requested of the string. If you specify a single-column [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) that contains strings, the function returns a single-column table with a **Value** column containing the portions that you requested of those strings. If you specify a multi-column table, you can shape it into a single-column table, as [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) describes.


If the starting position is negative or beyond the end of the string, **Mid** returns *blank*. You can check the length of a string by using the [Len](https://learn.microsoft.com/function-len) function. If you request more characters than the string contains, the function returns as many characters as possible.

**Left**( *String*, *NumberOfCharacters* )**Mid**( *String*, *StartingPosition* [, *NumberOfCharacters* ] )**Right**( *String*, *NumberOfCharacters* )

- *String* - Required. The string to from which to extract the result.

- *StartingPosition* - Required (**Mid** only). The starting position. The first character of the string is position 1.

- *NumberOfCharacters* - Required (**Left** and **Right** only). The number of characters to return. If omitted for the **Mid** function, the function returns the portion from the starting position until the end of the string.

**Left**( *SingleColumnTable*, *NumberOfCharacters* )**Mid**( *SingleColumnTable*, *StartingPosition* [, *NumberOfCharacters* ] )**Right**( *SingleColumnTable*, *NumberOfCharacters* )


- *SingleColumnTable* - Required. A single-column table of strings from which to extract the results.

- *StartingPosition* - Required (**Mid** only). The starting position. The first character of the string is position 1.

- *NumberOfCharacters* - Required (**Left** and **Right** only). The number of characters to return. If omitted for the **Mid** function, the function returns the portion from the starting position until the end of the string.

The examples in this section use a text-input control as their [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources). The control is named **Author** and contains the string "E. E. Cummings".

| Formula | Description | Result |
| --- | --- | --- |
| **Left( Author.Text, 5 )** | Extracts up to five characters from the start of the string. | "E. E." |
| **Mid( Author.Text, 7, 4 )** | Extracts up to four characters, starting with the seventh character, from the string. | "Cumm" |
| **Mid( Author.Text, 7 )** | Extracts all characters, starting with the seventh character, from the string. | "Cummings" |
| **Right( Author.Text, 5 )** | Extracts up to five characters from the end of the string. | "mings" |


Each example in this section extracts strings from the **Address** [column](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns) of this data source, named **People**, and returns a single-column table that contains the results:

| Name | Address |
| --- | --- |
| "Jean" | "123 Main St NE" |
| "Fred" | "789 SW 39th #3B" |

| Formula | Description | Result |
| --- | --- | --- |
| **Left( ShowColumns( People, "Address" ), 8 )** | Extracts the first eight characters of each string. | A single-column table with a `Value` column containing the following values: "123 Main", "789 SW 3" |
| **Mid( ShowColumns( People, "Address" ), 5, 7 )** | Extracts the middle seven characters of each string, starting with the fifth character. | A single-column table with a `Value` column containing the following values: "Main St", "SW 39th" |
| **Right( ShowColumns( People, "Address" ), 7 )** | Extracts the last seven characters of each string. | A single-column table with a `Value` column containing the following values: "n St NE", "9th #3B" |

1. Import or create a [collection](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources#collections) named **Inventory**, and show it in a gallery, as the first procedure in [Show images and text in a gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/show-images-text-gallery-sort-filter) describes.


2. Set the [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of the lower label in the gallery to this function:

**Right( ThisItem.ProductName, 3 )**

The label shows the last three characters of each product name.

