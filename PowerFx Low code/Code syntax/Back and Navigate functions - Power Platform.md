---
title: Back and Navigate functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:22:49 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:23:12 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Back and Navigate functions in Power Platform are used to change the screen displayed in a Canvas app.
- The Navigate function takes a screen name, an optional transition argument, and an optional record to update context variables.
- The Back function returns to the previously displayed screen, using the inverse transition by default, and can also take an optional transition argument.


Detailed summary


## Introduction to Navigate and Back Functions
- The Back and Navigate functions in Power Platform are used to change which screen is displayed in a canvas app, with the Navigate function allowing for a visual transition to be specified, such as Fade or Cover, to control how one screen changes to another.
- The Back function returns to the screen that was most recently displayed, using the inverse transition by default, and can be used successively to return to the initial screen, while the Navigate function can be used to set one or more context variables for the screen that the formula will display.
- The Navigate function takes three arguments: the required screen to display, an optional transition argument to specify how the old screen changes to the new screen, and an optional record to create or update context variables of the new screen.
- The transition argument can take on several values, including ScreenTransition.Cover, ScreenTransition.CoverRight, ScreenTransition.Fade, ScreenTransition.None, ScreenTransition.UnCover, and ScreenTransition.UnCoverRight, each with its own description and demonstration.

## Back Function Arguments and Context Variables
- The Back function can take an optional argument to force a specific transition, and both the Back and Navigate functions can only be used within a behavior formula, with the App object's StartScreen property controlling the first screen to be displayed.
- Context variables are preserved when a user navigates between screens, and can be set using the Navigate function, which is similar to passing parameters to procedures in other programming tools.
- The OnHidden property of the old screen, the OnVisible property of the new screen, or both can be set to make additional changes during the transition, and the App.ActiveScreen property will be updated to reflect the change, with the Navigate function normally returning true but returning false if an error is encountered.

## Customizing Navigate Function with Transitions
- The Navigate function in Power Platform is used to display a different screen, and it can be customized with various visual transitions, such as Fade or Cover, to enhance the user experience.
- The Navigate function can also update the context variables of the new screen by passing a record that contains the name of at least one column and a value for each column, similar to the UpdateContext function.
- The function can be used with different formulas, such as Navigate(Details), Navigate(Details, ScreenTransition.Fade), or Navigate(Details, ScreenTransition.Fade, { ID: 12 }), to achieve various effects, including displaying a screen with no transition, a Fade transition, or updating context variables.

## Back Function Customization and Usage
- The Back function is used to display the previous screen, and it can be customized with different transitions, such as the default return transition or a specific transition like Cover.
- The Back function can be used with formulas like Back() or Back(ScreenTransition.Cover) to display the previous screen with the default return transition or a specific transition, respectively.

## Implementation and Context Variable Applications
- To use the Navigate and Back functions, users can create a blank app, add multiple screens, and set the OnSelect property of buttons to the desired formulas, allowing them to navigate between screens and update context variables as needed.
- The use of context variables with the Navigate function enables users to update the values of variables on the new screen, which can then be used to customize the appearance or behavior of controls on that screen, such as setting the Fill property of a control to a specific color.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-navigate)
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

