---
title: Split function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 19:51:04 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 19:51:21 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Split function breaks a text string into a table of substrings based on a specified separator.
- The separator can be zero, one, or more characters that are matched as a whole in the text string.
- The function takes two required parameters: Text (the text to split) and Separator (the separator to use in splitting the string).


Detailed summary

- The Split function in Power Platform is used to break a text string into a table of substrings, and it can be applied to various platforms such as Canvas apps, Copilot Studio, Desktop flows, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The function uses a separator string to divide the text string apart, and the separator can be zero, one, or more characters that are matched as a whole in the text string, with the matched separator characters not being returned in the result.
- If no separator match is found, the entire text string is returned as a single result, and the function can be used with other functions such as Concat to recombine the string without the separators, or MatchAll to split a string using a regular expression.
- The Split function takes two parameters: Text, which is the text to split, and Separator, which is the separator to use in splitting the string, and it returns a single-column table with a Value column containing the split substrings.
- The function can be used in various scenarios, such as splitting comma-delimited lists, dates with slashes, or strings with other delimiters, and it can also be used with other functions such as First and Last to extract specific substrings.
- Examples of using the Split function include splitting a string of fruits apart based on a comma separator, splitting a date apart using a forward slash as the separator, and splitting a string apart using a single character or multiple characters as the separator.
- The Split function can also be used with the TrimEnds function to remove spaces from the split substrings, and it can be used with regular expressions using the Match function to extract specific substrings.
- The function is a powerful tool for manipulating text strings in Power Platform, and it can be used in a variety of situations to extract and manipulate data from text strings.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-split)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages

Splits a text string into a table of substrings.

The **Split** function breaks a text string into a table of substrings. Use **Split** to break up comma delimited lists, dates that use a slash between date parts, and in other situations where a well defined delimiter is used.

A separator string is used to break the text string apart. The separator can be zero, one, or more characters that are matched as a whole in the text string. Using a zero length or *blank* string results in each character being broken out individually. The matched separator characters are not returned in the result. If no separator match is found, then the entire text string is returned as a single result.

Use the [Concat](https://learn.microsoft.com/function-concatenate) function to recombine the string without the separators.

Use the [MatchAll](https://learn.microsoft.com/function-ismatch) function to split a string using a regular expression.


The examples show how **Split** can be used with the [First](https://learn.microsoft.com/function-first-last) and [Last](https://learn.microsoft.com/function-first-last) functions to extract a single delimited substring. The [Match](https://learn.microsoft.com/function-ismatch) function is often a more concise and powerful choice for regular expressions.

**Split**( *Text*, *Separator* )

- *Text* - Required. Text to split.

- *Separator* - Required. Separator to use in splitting the string. Can be zero, one, or more characters.


| Formula | Description | Result |
| --- | --- | --- |
| `Split( "Apples, Oranges, Bananas", "," )` | Splits the different fruits apart, based on the comma separator. The split is performed based on only the comma and not the space after it, resulting in a space at the front of " Oranges" and " Bananas". | A single-column table with a `Value` column containing the following values: "Apples", " Oranges", " Bananas" |
| `TrimEnds( Split( "Apples, Oranges, Bananas", "," ) )` | Same as the previous example, but in this case the space is removed by the [TrimEnds](https://learn.microsoft.com/function-trim), operating on the single column table that is produced by **Split**. We could have also used the separator **", "** which includes the space after the comma, but that wouldn't have worked properly if there's no space or there are two spaces. | A single-column table with a `Value` column containing the following values: "Apples", "Oranges", "Bananas" |
| `Split( "08/28/17", "/" )` | Splits the date apart, using a forward slash as the separator. | A single-column table with a `Value` column containing the following values: "08", "28", "17" |


| Formula | Description | Result |
| --- | --- | --- |
| `Split( "Hello, World", "," )` | Splits the words apart, using a comma as the separator. The second result starts with a space since it is the character immediately following the comma. | A single-column table with a `Value` column containing the following values: "Hello", "  World" |
| `Split( "Hello, World", "o" )` | Splits the string apart, using the character "o" as the separator. | A single-column table with a `Value` column containing the following values: "Hell", ", W", "rld" |
| `Split( "Hello, World", "l" )` | Splits the string apart, using the single character "l" as the separator. Since there were no characters between both the **l**'s in **Hello**, a *blank* value was returned. | A single-column table with a `Value` column containing the following values: "He", Blank(), "o, Wor", "d" |
| `Split( "Hello, World", "ll" )` | Splits the string apart, using the double character "ll" as the separator. | A single-column table with a `Value` column containing the following values: "He", "o, World" |
| `Split( "Hello, World", "%" )` | Splits the string apart, using the percent sign as the separator. Since this separator doesn't appear in the string, the entire string is returned as one result. | A single-column table with a `Value` column containing the following value: "Hello, World" |
| `Split( "Hello, World", "" )` | Splits the string apart, using an empty string as the separator (zero characters). This will break the string on each character. | A single-column table with a `Value` column containing the following values: "H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d" |


| Formula | Description | Result |
| --- | --- | --- |
| `First( Split( Last( Split( "Bob Jones <bob.jones@contoso.com>", "<" ) ).Result, ">" ) ).Result` | Splits the string apart based on an opening delimiter (<) and extracts the string to the right of the delimiter with **Last**. The formula then splits that result based on the closing delimiter (>) and extracts the string the left of the delimiter with **Right**. | "[bob.jones@contoso.com](mailto:bob.jones@contoso.com)" |
| `Match( "Bob Jones <bob.jones@contoso.com>", "<(?<email>.+)>" ).email` | Performs the same delimiter based extraction as the last example but uses the **Match** function and a regular expression instead. | "[bob.jones@contoso.com](mailto:bob.jones@contoso.com)" |

