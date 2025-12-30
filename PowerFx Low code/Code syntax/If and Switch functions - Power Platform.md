---
title: If and Switch functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 19:51:47 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 19:51:51 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The If function in Power Platform determines whether any condition in a set is true and returns a result or executes an action.
- The Switch function evaluates a formula and determines whether the result matches any value in a sequence, returning a corresponding value if a match is found.
- Both If and Switch functions can be used in behavior formulas to branch between two or more actions, with conditions and matches evaluated in order, stopping if a condition is true or a match is found.


Detailed summary


## Introduction to If and Switch Functions
- The If and Switch functions in the Power Platform are used to determine whether any condition in a set is true or the result of a formula matches any value in a set, and then returns a result or executes an action.
- The If function tests one or more conditions until a true result is found, and if such a result is found, a corresponding value is returned, while if no such result is found, a default value is returned, which might be a string to show, a formula to evaluate, or another form of result.
- The Switch function evaluates a formula and determines whether the result matches any value in a sequence that you specify, and if a match is found, a corresponding value is returned, while if no match is found, a default value is returned, which might be a string to show, a formula to evaluate, or another form of result.
- The If function is used to evaluate a single condition, and its most common syntax is If( Condition, ThenResult, DefaultResult ), which provides the common "if … then … else …" pattern seen in other programming tools, while it can also be used to evaluate multiple unrelated conditions without having to nest If formulas.

## Syntax of If and Switch Functions
- The Switch function is used to evaluate a single condition against multiple possible matches, and it can be an alternative to using the If function with repeated formulas for each possible match.
- Both the If and Switch functions can be used in behavior formulas to branch between two or more actions, with only one branch triggering an action, and conditions and matches are evaluated in order, stopping if a condition is true or a match is found.
- The If function has the syntax If( Condition, ThenResult [, DefaultResult ] ) or If( Condition1, ThenResult1 [, Condition2, ThenResult2, ... [ , DefaultResult ] ] ), where Condition(s) are required formulas to test for true, ThenResult(s) are required corresponding values to return for a condition that evaluates to true, and DefaultResult is an optional value to return if no condition evaluates to true.
- The Switch function has the syntax Switch( Formula, Match1, Result1 [, Match2, Result2, ... [, DefaultResult ] ] ), where Formula is a required formula to evaluate for matches, Match(s) are required values to compare with the result from Formula, Result(s) are required corresponding values to return when an exact match is found, and DefaultResult is an optional value to return if an exact match is not found.

## Example Usage of If Function
- The If function in Power Platform is used to evaluate conditions and return corresponding results, as seen in the example `If( Slider1.Value > 1000, "Result1", Slider1.Value > 50, "Result2", "Result3")`, where the function checks the value of Slider1 and returns the corresponding result based on the conditions.
- The Switch function is also used to evaluate conditions, but it checks if a value matches a specific value and returns the corresponding result, as shown in the example `Switch( Slider1.Value, 25, "Result1" )`, where the function checks if the value of Slider1 matches 25 and returns "Result1" if true.
- The If function can be used with the IsBlank function to test whether a required form field has been filled in, as seen in the example `If( ! IsBlank( FirstName.Text ), Navigate( Screen1, ScreenTransition.None ) )`, where the function checks if the FirstName text input control is not blank and navigates to Screen1 if true.

## Example Usage of Switch Function
- The Switch function is also used to evaluate conditions, but it checks if a value matches a specific value and returns the corresponding result, as shown in the example `Switch( Slider1.Value, 25, "Result1" )`, where the function checks if the value of Slider1 matches 25 and returns "Result1" if true.
- The If function can be used with the IsBlank function to test whether a required form field has been filled in, as seen in the example `If( ! IsBlank( FirstName.Text ), Navigate( Screen1, ScreenTransition.None ) )`, where the function checks if the FirstName text input control is not blank and navigates to Screen1 if true.
- The Switch function can also be used with text input controls, as shown in the example `Switch( FirstName.Text, "Carlos", Navigate( Screen1, ScreenTransition.None ), "Kirstin", Navigate( Screen2, ScreenTransition.None ), "John", Navigate( Screen3, ScreenTransition.None ) )`, where the function checks the value of FirstName and navigates to the corresponding screen based on the value.

## Advanced Usage with Value and Label Controls
- The If function can be used with the Value function to convert text to a number and evaluate conditions, as seen in the example `If( Value(Text1.Text) < 20, "Order MANY more!", Value(Text1.Text) < 40, "Order more!", Text1.Text )`, where the function checks the value of Text1 and returns the corresponding result based on the conditions.
- The Label control can be used to display the result of a formula, as shown in the example where the Label control displays "Order more!" because the value of Text1 is more than 20 but less than 40, and displays "Order MANY more!" when the value of Text1 is less than 20, and displays the value of Text1 when it is more than 40.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-if)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages

Determines whether any condition in a set is true (**If**) or the result of a formula matches any value in a set (**Switch**) and then returns a result or executes an action.

The **If** function tests one or more conditions until a **true** result is found. If such a result is found, a corresponding value is returned. If no such result is found, a default value is returned. In either case, the returned value might be a string to show, a formula to evaluate, or another form of result.

The **Switch** function evaluates a formula and determines whether the result matches any value in a sequence that you specify. If a match is found, a corresponding value is returned. If no match is found, a default value is returned. In either case, the returned value might be a string to show, a formula to evaluate, or another form of result.


**If** and **Switch** are very similar, but you should use the best function for your situation:

- Use **If** to evaluate a single condition. The most common syntax for this function is **If**( *Condition*, *ThenResult*, *DefaultResult* ), which provides the common "if … then … else …" pattern seen in other programming tools.

- Use **If** to evaluate multiple unrelated conditions. In [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) (unlike Microsoft Excel), you can specify multiple conditions without having to nest **If** formulas.

- Use **Switch** to evaluate a single condition against multiple possible matches. You can also use **If** in this case, but you'd need to repeat the formula for each possible match.

You can use both of these functions in [behavior formulas](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth) to branch between two or more actions. Only one branch will trigger an action. Conditions and matches are evaluated in order, and they stop if a condition is **true** or a match is found.

*Blank* is returned if no conditions are **true**, no matches are found, and you don't specify a default result.


**If**( *Condition*, *ThenResult* [, *DefaultResult* ] )**If**( *Condition1*, *ThenResult1* [, *Condition2*, *ThenResult2*, ... [ , *DefaultResult* ] ] )

- *Condition(s)* - Required. Formula(s) to test for **true**. Such formulas commonly contain comparison [operators](https://learn.microsoft.com/operators) (such as **<**, **>**, and **=**) and test functions such as [IsBlank](https://learn.microsoft.com/function-isblank-isempty) and [IsEmpty](https://learn.microsoft.com/function-isblank-isempty).

- *ThenResult(s)* - Required. The corresponding value to return for a condition that evaluates to **true**.

- *DefaultResult* - Optional. The value to return if no condition evaluates to **true**. If you don't specify this argument, *blank* is returned.

**Switch**( *Formula*, *Match1*, *Result1* [, *Match2*, *Result2*, ... [, *DefaultResult* ] ] )

- *Formula* - Required. Formula to evaluate for matches. This formula is evaluated only once.

- *Match(s)* - Required. Values to compare with the result from *Formula*. If an exact match is found, the corresponding *Result* is returned.

- *Result(s)* - Required. The corresponding value to return when an exact match is found.


- *DefaultResult* - Optional. If an exact match isn't found, this value is returned. If you don't specify this argument, *blank* is returned.

In the following examples, a **Slider** control (named **Slider1**) has a value of **25**.


| Formula | Description | Result |
| --- | --- | --- |
| **If( Slider1.Value = 25, "Result1" )** | The condition is **true**, and the corresponding result is returned. | "Result1" |
| **If( Slider1.Value = 25, "Result1", "Result2" )** | The condition is **true**, and the corresponding result is returned. | "Result1" |
| **If( Slider1.Value > 1000, "Result1" )** | The condition is **false**, and no *DefaultResult* was provided. | *blank* |
| **If( Slider1.Value > 1000, "Result1", "Result2" )** | The condition is **false**, a *DefaultResult* was provided, and it's returned. | "Result2" |
| **If( Slider1.Value = 25, "Result1", Slider1.Value > 0, "Result2" )** | The first condition is **true**, and the corresponding result is returned. The second condition is also **true**, but it isn't evaluated because it appears later in the argument list than a condition that evaluates to **true**. | "Result1" |
| **If( IsBlank( Slider1.Value ), "Result1", IsNumeric( Slider1.Value ), "Result2" )** | The first condition is **false** because the slider isn't *blank*. The second condition is **true** because the slider's value is a number, and the corresponding result is returned. | "Result2" |
| **If( Slider1.Value > 1000, "Result1", Slider1.Value > 50, "Result2", "Result3")** | Both the first and second conditions are **false**, a *DefaultResult* was provided, and it's returned. | "Result3" |
| **Switch( Slider1.Value, 25, "Result1" )** | The slider's value matches the first value to be checked, and the corresponding result is returned. | "Result1" |
| **Switch( Slider1.Value, 20, "Result1", 25, "Result2", 30, "Result3" )** | The slider's value matches the second value to be checked, and the corresponding result is returned. | "Result2" |
| **Switch( Slider1.Value, 20, "Result1", 10, "Result2", 0, "Result3", "DefaultResult" )** | The slider's value doesn't match any value to be checked. A *DefaultResult* was provided, so it's returned. | "DefaultResult" |


In these examples, a [Text input](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) control named **FirstName** has the value "John" typed into it.


| Formula | Description | Result |
| --- | --- | --- |
| **If( ! IsBlank( FirstName.Text ), Navigate( Screen1, ScreenTransition.None ) )** | The condition is **true**, so the [Navigate](https://learn.microsoft.com/function-navigate) function runs. You can use the [IsBlank](https://learn.microsoft.com/function-isblank-isempty) function to test whether a required form field has been filled in. If **FirstName** were [blank](https://learn.microsoft.com/function-isblank-isempty), this formula would have no effect. | **true**<br><br>The display is changed to **Screen1**. |
| **If( IsBlank( FirstName.Text ), Navigate( Screen1, ScreenTransition.None ), Back() )** | Without the **!** operator, the condition is **false**, so the [Navigate](https://learn.microsoft.com/function-navigate) function doesn't run. The [Back](https://learn.microsoft.com/function-navigate) function was provided as a *DefaultResult*, so it runs. | **true**<br><br>The display goes back to the screen that was previously shown. |
| **Switch( FirstName.Text, "Carlos", Navigate( Screen1, ScreenTransition.None ), "Kirstin", Navigate( Screen2, ScreenTransition.None ), "John", Navigate( Screen3, ScreenTransition.None ) )** | The value of **FirstName.Text** is compared against "Carlos", "Kirstin", and "John" in that order. A match is found with "John", so the app navigates to **Screen3**. | **true**<br><br>The display is changed to **Screen3**. |


1. Add a [Text input](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) control, and name it **Text1** if it doesn't have that name by default.

2. In **Text1**, type **30**.

3. Add a **Label** control, and set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula: **If( Value(Text1.Text) < 20, "Order MANY more!", Value(Text1.Text) < 40, "Order more!", Text1.Text )**

The **Label** control shows **Order more!** because the value of **Text1** is more than 20 but less than 40.

4. In **Text1**, type **15**.

The **Label** control shows **Order MANY more!** because the value of **Text1** is less than 20.

5. In **Text1**, type **50**.

The **Label** control shows the value that you typed because it's more than 40.


