---
title: Int, Round, RoundDown, RoundUp, and Trunc functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:02:36 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:04:47 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Round function rounds a number up if the next digit is 5 or higher, otherwise it rounds down.
- The RoundDown function always rounds down to the previous lower number, while the RoundUp function always rounds up to the next higher number.
- The Int function rounds down to the nearest integer, and the Trunc function truncates the number to just the integer portion, with Trunc handling negative numbers differently than Int.


Detailed summary

- The Round, RoundDown, RoundUp, Int, and Trunc functions in the Power Platform are used to round numbers to the specified number of decimal places, with each function having its own rounding rules.
- The Round function rounds up if the next digit is 5 or higher, otherwise it rounds down, while the RoundDown function always rounds down to the previous lower number, and the RoundUp function always rounds up to the next higher number.
- The number of decimal places can be specified for the Round, RoundDown, and RoundUp functions, with positive values indicating decimal places to the right of the decimal separator, negative values to the left, and zero for a whole number.
- The Int function rounds down to the nearest integer, and the Trunc function truncates the number to just the integer portion by removing any decimal portion, with the key difference between the two being their handling of negative numbers.
- The Trunc function can be used to extract the decimal portion of a number by subtracting it from the original number, and it returns the same values as the RoundDown function.
- These functions support single-column tables, and if a single number is passed, the return value is the rounded version of that number, while if a single-column table is passed, the return value is a single-column table of rounded numbers.
- The DecimalPlaces parameter can be a single value or a single-column table, and if the single-column table has less values than the number, zero is used for the remaining values.
- The functions can be used in various Power Platform applications, including Canvas apps, Copilot Studio, Desktop flows, Dataverse formula columns, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The Round, RoundDown, and RoundUp functions have the following syntax: Round(Number, DecimalPlaces), RoundDown(Number, DecimalPlaces), and RoundUp(Number, DecimalPlaces), where Number is the number to round and DecimalPlaces is the number of decimal places to round to.
- The Int and Trunc functions have the following syntax: Int(Number) and Trunc(Number), where Number is the number to be rounded to an integer.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-round)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages

Rounds a number.

The **Round**, **RoundDown**, and **RoundUp** functions round a number to the specified number of decimal places:

- **Round** rounds up if the next digit is 5 or higher. Otherwise, this function rounds down.

- **RoundDown** always rounds down to the previous lower number, towards zero.

- **RoundUp** always rounds up to the next higher number, away from zero.

The number of decimal places can be specified for these functions:

| Decimal places | Description | Example |
| --- | --- | --- |
| Greater than 0 | The number is rounded to the right of the decimal separator. | `Round( 12.37, 1 )` returns 12.4. |
| 0 | The number is rounded to the nearest integer. | `Round( 12.37, 0 )` returns 12. |
| Less than 0 | The number is rounded to the left of the decimal separator. | `Round( 12.37, -1 )` returns 10. |

The **Int** and **Trunc** functions round a number to an integer (whole number without a decimal):

- **Int** rounds down to the nearest integer.


- **Trunc** truncates the number to just the integer portion by removing any decimal portion.

The difference between **Int** and **Trunc** is in the handling of negative numbers. For example, for an argument of `-4.3`, **Int** will return the integer further away from zero, `-5`, while **Trunc** will return the integer closer to zero, `-4`. **Int** returns values that are unique amongst the five rounding functions, while **Trunc** returns the same values as **RoundDown**.

Use **Trunc** to extract the decimal portion of a number by subtracting it from the original, for example `X - Trunc(X)`.

Decimal places cannot be specified with **Trunc** as it can with Microsoft Excel. Use **RoundDown** instead when this is needed.


These functions support single-column tables. If you pass a single number, the return value is the rounded version of that number. If you pass a single-column [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) that contains numbers, the return value is a single-column table of rounded numbers. The *DecimalPlaces* parameter can be a single value or a single-column table. If the single-column table has less values that the *Number*, zero is used for the remaining values. Use [ShowColumns](https://learn.microsoft.com/function-table-shaping) and other table shaping functions to extract a single-column table from a larger table.

**Round**(*Number*, *DecimalPlaces*)**RoundDown**(*Number*, *DecimalPlaces*)**RoundUp**(*Number*, *DecimalPlaces*)

- *Number* - Required. The number to round.

- *DecimalPlaces* - Required. Number of decimal places to round to. Use a positive value to indicate decimal places right of the decimal separator, a negative value to the left, and zero for a whole number.

**Int**(*Number*)**Trunc**(*Number*)

- *Number* - Required. The number to be rounded to an integer.

Rounding to a whole number.


| `X` | `Round( X, 0 )` | `RoundUp( X, 0 )` | `RoundDown( X, 0 )` | `Int( X )` | `Trunc( X )` |
| --- | --- | --- | --- | --- | --- |
| 7.9 | 8 | 8 | 7 | 7 | 7 |
| -7.9 | -8 | -8 | -7 | -8 | -7 |
| 7.5 | 8 | 8 | 7 | 7 | 7 |
| -7.5 | -8 | -8 | -7 | -8 | -7 |
| 7.1 | 7 | 8 | 7 | 7 | 7 |
| -7.1 | -7 | -8 | -7 | -8 | -7 |

Rounding to two decimal places to the right of the decimal separator (0.01).

| `X` | `Round( X, 2 )` | `RoundUp( X, 2 )` | `RoundDown( X, 2 )` |
| --- | --- | --- | --- |
| 430.123 | 430.12 | 430.13 | 430.12 |
| 430.125 | 430.13 | 430.13 | 430.12 |
| 430.128 | 430.13 | 430.13 | 430.12 |

Rounding to two decimal places to the left of the decimal separator (100).

| `X` | `Round( X, -2 )` | `RoundUp( X, -2 )` | `RoundDown( X, -2 )` |
| --- | --- | --- | --- |
| 430.123 | 400 | 500 | 400 |
| 449.942 | 400 | 500 | 400 |
| 450.000 | 500 | 500 | 400 |
| 450.124 | 500 | 500 | 400 |
| 479.128 | 500 | 500 | 400 |

Rounding a single-column table of values.

| `X` | `Int( X )` | `Round( X, 2 )` | `RoundDown( X, [ 0, 1, 2 ] )` | `RoundUp( X, [ 2 ] )` |
| --- | --- | --- | --- | --- |
| [ 123.456, 987.593, 542.639 ] | [ 123, 987, 542 ] | [ 123.46, 987.59, 542.64 ] | [ 123, 987.5, 542.63 ] | [ 123.46, 988, 543 ] |

