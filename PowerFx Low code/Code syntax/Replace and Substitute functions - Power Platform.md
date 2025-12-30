---
title: Replace and Substitute functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:54:59 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:55:03 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Replace function in Power Platform replaces a portion of a string by starting position and length, using the formula `Replace( String, StartingPosition, NumberOfCharacters, NewString )`.
- The Substitute function replaces a string by matching a string, using the formula `Substitute( String, OldString, NewString [, InstanceNumber ] )`, and can replace all or a specified instance of the matched string.
- Both Replace and Substitute functions can operate on single strings or single-column tables of strings, returning the modified string or a single-column table with modified strings.


Detailed summary

- The Replace and Substitute functions in Power Platform are used to replace a portion of a string of text with another string, with the Replace function identifying the text to replace by starting position and length, and the Substitute function identifying the text to replace by matching a string.
- The Replace function takes four arguments: String, StartingPosition, NumberOfCharacters, and NewString, where String is the string to operate on, StartingPosition is the character position to start the replacement, NumberOfCharacters is the number of characters to replace, and NewString is the replacement string.
- The Substitute function takes three or four arguments: String, OldString, NewString, and optionally InstanceNumber, where String is the string to operate on, OldString is the string to replace, NewString is the replacement string, and InstanceNumber is used to specify which instance of OldString to replace if String contains more than one instance.
- Both the Replace and Substitute functions can be used with a single string or a single-column table of strings, and the return value is the modified string or a single-column table with a Value column of modified strings.
- If the InstanceNumber argument is not provided in the Substitute function, all instances of OldString will be replaced, and if it is provided, only the specified instance will be replaced.
- The Replace and Substitute functions can be used in various Power Platform applications, including Canvas apps, Copilot Studio, Desktop flows, Dataverse formula columns, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The functions can be used to replace characters in a string, such as replacing a specific character or a range of characters, and can also be used to substitute a string with another string, such as replacing a word or a phrase.
- The functions provide flexibility in replacing and substituting strings, allowing users to specify the starting position, length, and instance number, and can be used to manipulate and transform data in various ways.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-replace-substitute)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages

Replace a portion of a string of text with another string.

The **Replace** function identifies the text to replace by starting position and length.

The **Substitute** function identifies the text to replace by matching a string. If more than one match is found, you can replace all of them or specify one to replace.

If you pass a single string, the return value is the modified string. If you pass a single-column [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) that contains strings, the return value is a single-column table with a **Value** column of modified strings. If you have a multi-column table, you can shape it into a single-column table, as [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) describes.

**Replace**( *String*, *StartingPosition*, *NumberOfCharacters*, *NewString* )

- *String* - Required. The string to operate on.

- *StartingPosition* - Required. Character position to start the replacement. The first character of *String* is at position 1.


- *NumberOfCharacters* - Required. The number of characters to replace in *String*.

- *NewString* - Required. The replacement string. The number of characters in this argument can differ from the *NumberOfCharacters* argument.

**Substitute**( *String*, *OldString*, *NewString* [, *InstanceNumber* ] )

- *String* - Required. The string to operate on.

- *OldString* - Required. The string to replace.

- *NewString* - Required. The replacement string. *OldString* and *NewString* can have different lengths.

- *InstanceNumber* - Optional. Use this argument to specify which instance of *OldString* to replace if *String* contains more than one instance. If you don't specify this argument, all instances will be replaced.

**Replace**( *SingleColumnTable*, *StartingPosition*, *NumberOfCharacters*, *NewString* )

- *SingleColumnTable* - Required. A single-column table of strings to operate on.

- *StartingPosition* - Required. Character position to start the replacement. The first character of each string in the table is at position 1.


- *NumberOfCharacters* - Required. The number of characters to replace in each string.

- *NewString* - Required. The replacement string. The number of characters in this argument can differ from the *NumberOfCharacters* argument.

**Substitute**( *SingleColumnTable*, *OldString*, *NewString* [, *InstanceNumber* ] )

- *SingleColumnTable* - Required. A single-column table of strings to operate on.

- *OldString* - Required. The string to replace.

- *NewString* - Required. The replacement string. *OldString* and *NewString* can have different lengths.

- *InstanceNumber* - Optional. Use this argument to specify which instance of *OldString* to replace if *String* contains more than one instance. If you don't specify this argument, all instances will be replaced.


| Formula | Description | Result |
| --- | --- | --- |
| **Replace( "abcdefghijk", 6, 5, "*" )** | Replaces five characters in "abcdefghijk" with a single "*" character, starting with the sixth character ("f"). | "abcde*k" |
| **Replace( "2019", 3, 2, "20" )** | Replaces the last two characters of "2019" with "20". | "2020" |
| **Replace( "123456", 1, 3, "_" )** | Replaces the first three characters of "123456" with a single "_" character. | "_456" |
| **Substitute( "Sales Data", "Sales", "Cost" )** | Substitutes the string "Cost" for "Sales". | "Cost Data" |
| **Substitute( "Quarter 1, 2018", "1", "2", 1 )** | Substitutes only the first instance of "1" with "2" because the fourth argument (*InstanceNumber*) is provided with a 1. | "Quarter 2, 2018" |
| **Substitute( "Quarter 1, 2011", "1", "2", 3 )** | Substitutes only the third instance of "1" with "2" because the fourth argument (*InstanceNumber*) is provided with a 3. | "Quarter 1, 2012" |
| **Substitute( "Quarter 1, 2011", "1", "2" )** | Substitutes all instances of "1" with "2" because the fourth argument (*InstanceNumber*) isn't provided. | "Quarter 2, 2022" |
| **Replace([ "Quarter 1, 2018","Quarter 2, 2011","Quarter 4, 2019" ],9, 1, "3" )** | Replaces the ninth character in each record of the single-column table with "3". | A single-column table with a `Value` column containing the following values: [ "Quarter 3, 2018","Quarter 3, 2011","Quarter 3, 2019" ] |
| **Substitute( [ "Qtr 1, 2018","Quarter 1, 2011","Q1, 2019" ],"1", "3", 1 )** | Because the fourth argument (*InstanceNumber*) is provided with a value of 1, substitutes only the first instance of "1" in each record of the single-column table with "3". | A single-column table with a `Value` column containing the following values: [ "Qtr 3, 2018","Quarter 3, 2011","Q3, 2019" ] |
| **Substitute( [ "Qtr 1, 2018","Quarter 1, 2011","Q1, 2019" ],"1", "3" )** | Because the fourth argument (*InstanceNumber*) isn't provided, substitutes all instances of "1" in each record of the single-column table with "3". | A single-column table with a `Value` column containing the following values: [ "Qtr 3, 2038","Quarter 3, 2033","Q3, 2039" ] |

