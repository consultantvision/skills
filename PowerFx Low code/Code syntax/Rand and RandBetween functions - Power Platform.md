---
title: Rand and RandBetween functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:38:53 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:38:58 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Rand function returns a pseudo-random number between 0 and 1.
- The RandBetween function returns a pseudo-random integer between two specified numbers, inclusive.
- Both Rand and RandBetween are volatile functions, returning different values each time they are evaluated, unless used in a data flow formula where the formula remains unchanged.


Detailed summary

- The Rand and RandBetween functions in the Power Platform are used to generate pseudo-random numbers, with Rand returning a decimal value between 0 and 1, and RandBetween returning an integer between two specified numbers, inclusive.
- These functions are volatile, meaning they return a different value each time they are evaluated, but when used in a data flow formula, they will only return a different value if the formula is reevaluated due to a change in another part of the formula.
- The Rand function can be used to generate a pseudo-random decimal number, and by multiplying it by a number, the range of the generated number can be extended, for example, Rand() * 100 will generate a number between 0 and 100.
- The RandBetween function takes two parameters, Bottom and Top, which specify the range of the generated integer, and it can be used to generate a pseudo-random integer between two numbers, inclusive, such as RandBetween(1, 20).
- When used in a behavior formula, Rand and RandBetween will be evaluated each time the behavior formula is evaluated, allowing for the generation of new random numbers in response to changes in the app.
- Examples of using these functions include generating a random number and displaying it in a label, creating a table of random numbers using the ForAll function, and generating a single random number using the Set function, such as Set(RandomNumber, Rand()) or Set(RandNumber, RandBetween(1, 20)).
- The functions can be used in various Power Platform components, including Canvas apps, Copilot Studio, Desktop flows, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages, making them a versatile tool for generating random numbers in different contexts.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-rand)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages

Returns a pseudo-random number.

The **Rand** function returns a pseudo-random number that's greater than or equal to 0 and less than 1. For example, **Rand()** might return **0.43147** and could return **0** but not **1**.

The **RandBetween** function returns a pseudo-random integer (whole number with no decimal portion) that is between two numbers, inclusive. For example, **RandBetween( 1, 3 )** may return **1**, **2**, or **3**.

**Rand** and **RandBetween** are volatile function. Each time the function is evaluated it returns a different value.

When used in a data flow formula, a volatile function will only return a different value if the formula in which it appears is reevaluated. If nothing else changes in the formula then it will have the same value throughout the execution of your app.


For example, a label control with **Label1.Text = Rand()** won't change while your app is active. Only closing and reopening the app will result in a new value.

The function will be reevaluated if it's part of a formula in which something else has changed. For example, if we change our example to involve a slider control with **Label1.Text = Slider1.Value + Rand()** then a new random number is generated each time the Slider control's value changes and the label's text property is reevaluated. See below for this example.

When used in a [behavior formula](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth), **Rand** and **RandBetween** will be evaluated each time the behavior formula is evaluated. See below for an example.

**Rand**()

**RandBetween**( *Bottom*, *Top* )

- *Bottom* - Required. The smallest integer that the function can return.

- *Top* - Required. The largest integer that the function can return. Must be equal to or greater than *Bottom*.


| Formula | Description | Result |
| --- | --- | --- |
| **Rand()** | Returns a pseudo-random number that's greater than or equal to 0 and less than 1. | Varies with each evaluation, for example **0.874252**. |
| **Rand() * 100** | Building on the previous example, uses multiplication to extend the range to greater than or equal to 0 and less than 100. | Varies with each evaluation, for example **78.42521**. |
| **Int( Rand() * 100 )** | Building on the previous example, uses the **Int** function to remove the decimal portion, resulting in an integer greater than or equal to 0 and less than 100 | Varies with each evaluation, for example **84**. |
| **RandBetween( 0, 99 )** | Building on the previous example, performs the same operation using the **RandBetween** function | Varies with each evaluation, for example **21**. |
| **RandBetween( -1, 1 )** | Returns a pseudo-random number that is between -1 and 1 inclusive: **-1**, **0**, or **1**. | Varies with each evaluation, for example **-1**. |

1. Add a [Slider](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-slider) control, and rename it **Slider1** if it has a different name.

2. Add a [Label](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-box) control, and set its **Text** property to this formula:

**Slider1.Value + Rand()**


The label shows **50** (the default value for the slider) plus a random decimal:

![A screen displaying a label control with 50.741.](https://learn.microsoft.com/media/function-rand/rand-slider-1.png)

3. While holding down the Alt key, change the value of the slider.

Every time you change the value of the slider, the decimal portion of the label shows a different random number:

![Four screens displaying a label control with four different random decimal values for each of four different slider settings 70.899, 84.667, 90.134, 99.690.](https://learn.microsoft.com/media/function-rand/rand-slider-results.png)

4. Add a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control, and set its [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula:

**ClearCollect( RandomNumbers, ForAll( Sequence( 100 ), RandBetween( 1, 20 ) ))**

This formula creates a single-column table that's used to iterate 100 times, resulting in 100 random numbers.

5. Add a [Data table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-data-table), set its **Items** property to **RandomNumbers**, and show the **Value** field.

![Data source selection of the RandomNumbers collection.](https://learn.microsoft.com/media/function-rand/set-show-data.png)

6. While holding down the **Alt** key, select the button by clicking or tapping it.

The data table shows 100 hundred random numbers between 1 and 20:

![Data table with 100 hundred random numbers.](https://learn.microsoft.com/media/function-rand/rand-collection-1.png)

7. Select the button again to show a different list of random numbers:

![The same screen showing a data table with a new set of random numbers.](https://learn.microsoft.com/media/function-rand/rand-collection-2.png)

To generate a single random number instead of a table, use **Set( RandomNumber, Rand() )** or **Set( RandNumber, RandBetween( 1, 20 ) )**.

