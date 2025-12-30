---
title: Average, Max, Min, StdevP, Sum, and VarP functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:22:46 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:23:15 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Average, Max, Min, Sum, StdevP, and VarP functions are aggregate functions that summarize a set of numbers in Power Platform.
- These functions can operate on separate arguments or a table with a formula, and they ignore non-numeric values.
- The Average, Max, Min, and Sum functions can be delegated, but StdevP and VarP cannot be delegated for any data sources.


Detailed summary

- The Average, Max, Min, Sum, StdevP, and VarP functions in Power Platform are aggregate functions that summarize a set of numbers and can be applied to various platforms, including Canvas apps, Copilot Studio, Desktop flows, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The Average function calculates the average, or arithmetic mean, of its arguments, while the Max function finds the maximum value, the Min function finds the minimum value, the Sum function calculates the sum of its arguments, the StdevP function calculates the standard deviation of its arguments, and the VarP function calculates the variance of its arguments.
- These functions can be supplied with values as separate arguments or as a table and a formula to operate over that table, and they operate on numeric values only, ignoring other types of values such as strings or records, unless converted to numbers using the Value function.
- The Average, Max, Min, and Sum functions can be delegated when used with a data source that supports delegation, but StdevP and VarP cannot be delegated for any data sources, and if delegation is not supported, only a portion of the data will be retrieved and the function applied locally, which may not represent the complete story.
- The functions can be used with a table and a numerical formula, where the table is required and the numerical formula is used to evaluate each record, and the result of this formula is used for the aggregation, allowing for the use of columns of the table in the formula.
- Examples of using these functions include calculating total sales by multiplying the values in specific columns for each record and then adding the results from all records together, or calculating the sum, average, maximum, minimum, standard deviation, and variance of values from sliders or other data sources.
- The syntax for these functions includes Average, Max, Min, Sum, StdevP, and VarP, followed by the required numerical formula or table and numerical formula, such as Average(NumericalFormula1, [NumericalFormula2, ...]) or Sum(Table, NumericalFormula), where NumericalFormula(s) and Table are required.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-aggregates)
| Functions | Applies to |
| --- | --- |
| **Average****Max****Min****Sum** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages |
| **StdevP****VarP** | Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages |

Aggregate functions that summarize a set of numbers.

The **Average** function calculates the average, or arithmetic mean, of its arguments.

The **Max** function finds the maximum value.

The **Min** function finds the minimum value.

The **Sum** function calculates the sum of its arguments.

The **StdevP** function calculates the standard deviation of its arguments.

The **VarP** function calculates the variance of its arguments.

You can supply the values for these functions as:

- Separate arguments. For example, **Sum( 1, 2, 3 )** returns 6.

- A [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) and a formula to operate over that table. The aggregate will be calculated on the values of the formula for each [record](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records).


Fields of the record currently being processed are available within the formula. Use the [ThisRecord](https://learn.microsoft.com/operators#thisitem-thisrecord-and-as-operators) or simply reference fields by name as you would any other value. The [As](https://learn.microsoft.com/operators#thisitem-thisrecord-and-as-operators) can also be used to name the record being processed which can help make your formula easier to understand and make nested records accessible. For more information, see the examples below and [working with record scope](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#record-scope).

These functions operate on numeric values only. Other types of values, such as strings or records, are ignored. Use the [Value](https://learn.microsoft.com/function-value) function to convert a string into a number.


The **Average**, **Max**, **Min**, and **Sum** functions can be delegated when used with a [data source that supports delegation for these functions](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview). However, **StdevP** and **VarP** can't be delegated for any data sources. If delegation isn't supported, only the first portion of the data will be retrieved and then the function applied locally. The result may not represent the complete story. A delegation warning will appear at authoring time to remind you of this limitation and to suggest switching to delegable alternatives where possible. For more information, see the [delegation overview](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview).

**Average**( *NumericalFormula1*, [ *NumericalFormula2*, ... ] )**Max**( *NumericalFormula1*, [ *NumericalFormula2*, ... ] )**Min**( *NumericalFormula1*, [ *NumericalFormula2*, ... ] )**Sum**( *NumericalFormula1*, [ *NumericalFormula2*, ... ] )**StdevP**( *NumericalFormula1*, [ *NumericalFormula2*, ... ] )**VarP**( *NumericalFormula1*, [ *NumericalFormula2*, ... ] )

- *NumericalFormula(s)* - Required. Numeric values to operate on.


**Average**( *Table*, *NumericalFormula* )**Max**( *Table*, *NumericalFormula* )**Min**( *Table*, *NumericalFormula* )**Sum**( *Table*, *NumericalFormula* )**StdevP**( *Table*, *NumericalFormula* )**VarP**( *Table*, *NumericalFormula* )

- *Table* - Required. Table to operate on.

- *NumericalFormula* - Required. Formula to evaluate for each record. The result of this formula is used for the aggregation. You can use columns of the table in the formula.

Let's say that you had a [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources) named **Sales** that contained a **CostPerUnit** column and a **UnitsSold** column, and you set the [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of a label to this function: **Sum(Sales, CostPerUnit * UnitsSold)**

The label would show total sales by multiplying the values in those columns for each record and then adding the results from all records together:

![Calculate total sales from units sold and cost per unit.](https://learn.microsoft.com/media/function-aggregates/total-sales.png)


As a different example, let's say that you had sliders that were named **Slider1**, **Slider2**, and **Slider3** and a label with its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property set to this formula: **Sum(Slider1.Value, Slider2.Value, Slider3.Value)**: The label would show the sum of all values to which the sliders were set. **Average(Slider1.Value, Slider2.Value, Slider3.Value)**: The label would show the average of all values to which the sliders were set. **Max(Slider1.Value, Slider2.Value, Slider3.Value)**: The label would show the maximum of all values to which the sliders were set. **Min(Slider1.Value, Slider2.Value, Slider3.Value)**: The label would show the minimum of all values to which the sliders were set. **StdevP(Slider1.Value, Slider2.Value, Slider3.Value)**: The label would show the standard deviation of all values to which the sliders were set. **VarP(Slider1.Value, Slider2.Value, Slider3.Value)**: The label would show the variance of all values to which the sliders were set.

