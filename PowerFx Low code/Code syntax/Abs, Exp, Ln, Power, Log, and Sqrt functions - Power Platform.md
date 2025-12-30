---
title: Abs, Exp, Ln, Power, Log, and Sqrt functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 16:49:42 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 16:50:17 GMT+1100 (Australian Eastern Daylight Time)
---




Detailed summary

- The Power Platform provides various mathematical functions, including Abs, Exp, Ln, Power, Log, and Sqrt, which can be applied to Canvas apps, Copilot Studio, Desktop flows, Dataverse formula columns, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The Abs function returns the non-negative value of its argument, while the Exp function returns e raised to the power of its argument, where e is a transcendental number that begins with 2.7182818.
- The Ln function returns the natural logarithm (base e) of its argument, and the Power function returns a number raised to a power, equivalent to using the ^ operator.
- The Log function returns the logarithm of its first argument in the base specified by its second argument, or 10 if not specified, and the Sqrt function returns the number that, when multiplied by itself, equals its argument.
- These functions can operate on single numbers or single-column tables of numbers, and if an argument would result in an undefined value, the result is blank, which can happen with square roots and logarithms of negative numbers.
- The functions have specific syntax and parameters, such as Abs(Number), Exp(Number), Ln(Number), Sqrt(Number), Power(Base, Exponent), and Log(Number, Base), where Number, Base, and Exponent are required or optional parameters.
- Examples of using these functions include calculating absolute values, exponential values, natural logarithms, powers, logarithms, and square roots, and the results can be used in various Power Platform applications, such as Canvas apps, Model-driven apps, and Power Pages.
- The functions can also be used with tables, such as a single-column table of numbers, and the results can be displayed in a Label control, as demonstrated in an example where a Text input control is used to input a number and a Label control displays the square root of the input number using the Sqrt function.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-numericals)
| Functions | Applies to |
| --- | --- |
| **Abs****Exp****Ln****Power****Sqrt** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages |
| **Log** | Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages |

Calculates absolute values, logarithms, square roots, and the results of raising *e* or any number to specified powers.

The **Abs** function returns the non-negative value of its argument. If a number is negative, **Abs** returns the positive equivalent.

The **Exp** function returns *e* raised to the power of its argument. The transcendental number *e* begins 2.7182818...

The **Ln** function returns the natural logarithm (base *e*) of its argument.

The **Power** function returns a number raised to a power. It's equivalent to using the [^](https://learn.microsoft.com/operators).

The **Log** function returns the logarithm of its first argument in the base specified by its second argument (or 10 if not specified).


The **Sqrt** function returns the number that, when multiplied by itself, equals its argument.

If you pass a single number, the return value is a single result based on the function called. If you pass a single-column [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) that contains numbers, the return value is a single-column table of results in a **Value** column, one result for each record in the argument's table. If you have a multi-column table, you can shape it into a single-column table, as [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) describes.

If an argument would result in an undefined valued, the result is *blank*. Which can happen with square roots and logarithms of negative numbers.

**Abs**( *Number* )**Exp**( *Number* )**Ln**( *Number* )**Sqrt**( *Number* )

- *Number* - Required. Number to operate on.

**Power**( *Base*, *Exponent* )

- *Base* - Required. Base number to raise.

- *Exponent* - Required. The exponent to which the base number is raised.

**Log**( *Number*, *Base* )

- *Number* - Required. Number to calculate the logarithm.

- *Base* - Optional. The base of the logarithm to calculate. By default, 10 (when not specified).


**Abs**( *SingleColumnTable* )**Exp**( *SingleColumnTable* )**Ln**( *SingleColumnTable* )**Sqrt**( *SingleColumnTable* )

- *SingleColumnTable* - Required. A single-column table of numbers to operate on.

| Formula | Description | Result |
| --- | --- | --- |
| **Abs( -55 )** | Returns the number without the negative sign. | 55 |
| **Exp( 2 )** | Returns *e* raised to the power of 2, or *e* * *e*. | 7.389056... |
| **Ln( 100 )** | Returns the natural logarithm (base *e*) of the number 100. | 4.605170... |
| **Log( 100 )** | Returns the logarithm in base 10 of the number 100. | 2 |
| **Log( 64, 2 )** | Returns the logarithm in base 2 of the number 64. | 6 |
| **Power( 5, 3 )** | Returns 5 raised to the power of 3, or 5 * 5 * 5. | 125 |
| **Sqrt( 9 )** | Returns the number that, when multiplied by itself, results in 9. | 3 |

The examples in this section use a [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources) that's named **ValueTable** and that contains this data:

| Value |
| --- |
| 9 |
| -4 |
| 2 |


| Formula | Description | Result |
| --- | --- | --- |
| **Abs( ValueTable )** | Returns the absolute value of each number in the table. | A single-column table with a `Value` column containing the following values: 9, 4, 2 |
| **Exp( ValueTable )** | Returns *e* raised to the power of each number in the table. | A single-column table with a `Value` column containing the following values: 8103.083927..., 0.018315..., 7.389056... |
| **Ln( ValueTable )** | Returns the natural logarithm of each number in the table. | A single-column table with a `Value` column containing the following values: 2.197224..., Blank(), 0.693147... |
| **Sqrt( ValueTable )** | Returns the square root of each number in the table | A single-column table with a `Value` column containing the following values: 3, Blank(), 1.414213... |

1. Add a [Text input](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) control, and name it **Source**.

2. Add a **Label** control, and set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula: **Sqrt( Value( Source.Text ) )**

3. Type a number into **Source**, and confirm that the **Label** control shows the square root of the number that you typed.

