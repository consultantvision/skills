---
title: Hex2Dec and Dec2Hex functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:41:43 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:42:58 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `Dec2Hex` function converts a number to a hexadecimal text string, truncating the input number to a whole number and optionally padding with leading zeros.
- The `Hex2Dec` function converts a hexadecimal text string to a number, accepting upper and lower case characters and returning an error for invalid input.
- Both functions work with 40-bit, two's-complement, whole numbers and return a single result or a table of results depending on the input, with error handling for out-of-range or invalid input values.


Detailed summary

- The Power Platform provides two functions, Dec2Hex and Hex2Dec, which can be used to convert between hexadecimal text strings and numbers in various applications, including Canvas apps, Copilot Studio, Desktop flows, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The Dec2Hex function converts a number to a hexadecimal text string, emitting characters 0 through 9 and upper case characters A through F, and it truncates the input number to a whole number as if the Trunc function has been applied first.
- The Hex2Dec function converts a text string containing hexadecimal digits to a number, accepting upper and lower case characters, and it can handle a maximum of 10 hexadecimal characters.
- Both functions work with a 40-bit, two's-complement, whole number, and the range of accepted values is hexadecimal 8000000000 or decimal -549755813888 to hexadecimal 7FFFFFFFFF or decimal 549755813887.
- If the input value is out of range or includes invalid hexadecimal characters, an ErrorKind.Numeric error is returned, and if the input was a single column table, the error is embedded in the output table.
- The Dec2Hex function has two parameters: Number, which is the required number to convert to hexadecimal, and Places, which is an optional parameter that specifies the number of characters to use if the number is positive.
- The Hex2Dec function has one parameter: HexString, which is the required string of hexadecimal digits to convert to a number.
- The functions can handle single numbers or text strings, single-column tables, and multi-column tables, and they return a single result or a single-column table of results, depending on the input.
- The functions can be used in various scenarios, such as converting numbers to hexadecimal strings, converting hexadecimal strings to numbers, and handling errors for invalid input values.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-hexdec)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages

Convert between hexadecimal text strings and numbers.

Use the **Dec2Hex** function to convert a number to a hexadecimal text string. **Dec2Hex** emits the characters `0` through `9` and upper case characters `A` through `F`; use the [Lower](https://learn.microsoft.com/function-lower-upper-proper) function to convert the result to lower case if desired. **Dec2Hex** truncates the input number to a whole number as if the [Trunc](https://learn.microsoft.com/function-round) function has been applied first. Use *Places* to pad a positive number with leading `0`s (zeros) and limit the length of the output; *Places* is ignored if the input is negative.

Use the **Hex2Dec** function to convert a text string containing hexadecimal digits (`0` through `9` and `A` through `F`) to a number. Upper and lower case characters are accepted. No more than 10 hexadecimal characters can be passed to **Hex2Dec**.


Both these functions work with a 40 bit, two's-complement, whole number. The range of accepted values for both functions is hexadecimal 8000000000 or decimal -549755813888 to hexadecimal 7FFFFFFFFF or decimal 549755813887.

If you pass a single number or text string to these functions, the return value is a single result. If you pass a single-column [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) the return value is a single-column table of results, one result for each record in the argument's table. If you have a multi-column table, you can shape it into a single-column table, as [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) describes.

If the input value is out of range or includes invalid hexadecimal characters, an **ErrorKind.Numeric** error is returned. If the input was a single column table, the error is embedded in the output table.

**Dec2Hex**( *Number* [, *Places*] )

- *Number* - Required. Number to convert to hexadecimal.


- *Places* - Optional. The number of characters to use if the number is positive. If *Places* is omitted, **Dec2Hex** uses the minimum number of characters necessary. If this parameter is provided, and the result doesn't fit in the space provided, an **ErrorKind.Numeric** error is returned. *Places* is ignored if the number to convert is negative.

**Hex2Dec**( *HexString* )

- *HexString* - Required. String of hexadecimal digits to convert to a number.

| Formula | Result |
| --- | --- |
| `Hex2Dec( "A5" )` | `165` |
| `Hex2Dec( "FFFFFFFF5B")` | `-165` |
| `Hex2Dec( "c8d" )` | `3213` |
| `Hex2Dec( "fffffff373" )` | `-3213` |
| `Hex2Dec( "ffffffffff" )` | `-1` |
| `Hex2Dec( "ffffffffffff" )` | `error (out of range)` |
| `Hex2Dec( "43j" )` | `error (invalid hexadecimal character)` |
| `Hex2Dec( [ "A", "12", "FFFF" ] )` | `[ 10, 18, 65535 ]` |
| `Hex2Dec( [ "3", "E", "I", "B" ] )` | `[ 3, 14, error (invalid hexadecimal character), 11 ]` |


| Formula | Result |
| --- | --- |
| `Dec2Hex( 165 )` | `"A5"` |
| `Dec2Hex( -165 )` | `"FFFFFFFF5B"` |
| `Dec2Hex( 3213 )` | `"c8d"` |
| `Dec2Hex( -3213 )` | `"FFFFFFF373"` |
| `Dec2Hex( -1 )` | `"FFFFFFFFFF"` |
| `Dec2Hex( 3.74 )` | `"3"` |
| `Dec2Hex( -3.74 )` | `"FFFFFFFFFD"` |
| `Dec2Hex( [ 10, 255, -16 ] )` | `[ "A", "FF", "FFFFFFFFF0" ]` |
| `Dec2Hex( 1e45 )` | `error (out of range)` |
| `Dec2Hex( [ 1, 1e-45, 1e45, 2 ] )` | `[ "1", "0", error (out of range), "2" ]` |

| Formula | Result |
| --- | --- |
| `Dec2Hex( 45780 )` | `"B2D4"` |
| `Dec2Hex( 45780, 4 )` | `"B2D4"` |
| `Dec2Hex( 45780, 5 )` | `"0B2D4"` |
| `Dec2Hex( 45780, 6 )` | `"00B2D4"` |
| `Dec2Hex( 45780, 3 )` | `error (not enough space)` |
| `Dec2Hex( 45780, 11 )` | `error (out of range)` |
| `Dec2Hex( -45780 )` | `"FFFFFF4D2C"` |
| `Dec2Hex( -45780, 4 )` | `"FFFFFF4D2C"` |
| `Dec2Hex( -45780, 6 )` | `"FFFFFF4D2C"` |
| `Dec2Hex( -45780, 10 )` | `"FFFFFF4D2C"` |
| `Dec2Hex( -45780, 11 )` | `error (out of range)` |

| Formula | Result |
| --- | --- |
| `Dec2Hex( [ 10, 255, -16 ], [ 1, 2, 3 ] )` | `[ "A", "FF", "FFFFFFFFF0" ]` |
| `Dec2Hex( [ 10, 255, -16 ], 4 )` | `[ "000A", "00FF", "FFFFFFFFF0" ]` |
| `Dec2Hex( 255, [0, 1, 2, 3] )` | `[ error (not enough space), error (not enough space), "FF", "0FF" ]` |

