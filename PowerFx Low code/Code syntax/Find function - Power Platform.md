---
title: Find function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:50:18 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:50:32 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Find function in Power Platform searches for a string within another string and is case sensitive.
- It returns the starting position of the found string, with position 1 being the first character, or blank if the string is not found.
- The function takes three arguments: FindString (required), WithinString (required), and StartingPosition (optional).


Detailed summary

- The Find function in Power Platform is a useful tool that finds a string of text within another string and returns the starting position of the found string, with the search being case sensitive.
- To use the Find function, three arguments are required or optional: FindString, which is the required string to find, WithinString, which is the required string to search within, and StartingPosition, which is an optional argument that specifies the starting position to start searching, with position 1 being the first character of the string.
- The Find function can be used in various Power Platform applications, including Canvas apps, Copilot Studio, Desktop flows, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages, making it a versatile function for different use cases.
- If the string being searched for is not found within the string being searched, the Find function returns a blank result, and to ignore case sensitivity, the Lower function can be used on the arguments before using the Find function.
- The Find function can be used with different formulas, such as Find("World", "Hello World"), which returns the starting position of "World", and Find("World", "Hello World, Hello World", 10), which returns the starting position of the first occurrence of "World" after the 10th character, demonstrating its flexibility and usefulness in various scenarios.
- The results of the Find function can be summarized in a table, with examples including Find("World", "Hello World") returning 7, Find("World", "Hello World, Hello World", 10) returning 20, and Find("Mars", "Hello World") returning blank, highlighting the function's ability to handle different input strings and return accurate results.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-find)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages

Finds a string of text, if it exists, within another string.

The **Find** function looks for a string within another string and is case sensitive. To ignore case, first use the [Lower](https://learn.microsoft.com/function-lower-upper-proper) function on the arguments.

**Find** returns the starting position of the string that was found. Position 1 is the first character of the string. **Find** returns *blank* if the string in which you're searching doesn't contain the string for which you're searching.

**Find**( *FindString*, *WithinString* [, *StartingPosition* ] )

- *FindString* - Required. The string to find.

- *WithinString* - Required. The string to search within.

- *StartingPosition* - Optional. The starting position to start searching. Position 1 is the first character.


| Formula | Description | Result |
| --- | --- | --- |
| **Find("World", "Hello World")** | Returns the starting position of **"World"**. | 7 |
| **Find("World", "Hello World, Hello World", 10)** | Returns the starting position of the first occurrence of **"World"** after the 10th character. | 20 |
| **Find("Mars", "Hello World")** | Returns blank since the FindString is not in the WithinString | Blank() |

