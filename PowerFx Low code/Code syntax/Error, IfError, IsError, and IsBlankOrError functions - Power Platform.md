---
title: Error, IfError, IsError, and IsBlankOrError functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:49:41 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:53:15 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The IfError function tests values for errors and returns a replacement value if an error is found, allowing downstream calculations to continue.
- The `IsError` function tests for an error value and returns a Boolean true or false, while the `IsBlankOrError` function tests for either a blank value or an error value.
- The `Error` function creates and reports a custom error, and can be used to rethrow or pass through an error, with options to include error details such as `Kind`, `Message`, and `Source`.


Detailed summary


## Introduction to Error Handling Functions
- The Error, IfError, IsError, and IsBlankOrError functions in Power Platform are used to detect errors and provide an alternative value or take action, with the IfError function testing values until it finds an error and returning a corresponding replacement value.
- The IfError function has a structure similar to the If function, but tests for errors instead of true, and can be used to replace an error with a valid value so that downstream calculations can continue, such as in the case of a division by zero error.
- The function can be used with behavior formulas, such as Patch functions, to only continue processing if the action was successful, and can also be used to check if there were any problems with the return value from IfError.
- The IfError function returns the value of one of its arguments, and the types of all values that might be returned by IfError must be compatible, with the function coercing the second argument to match the type of the first argument if they are not compatible.

## FirstError and AllErrors Tables
- The function can also return an error if the Replacement or DefaultResult is an error, and information about the errors found is available through the FirstError record and AllErrors table, which include fields such as Kind, Message, and Source.
- The FirstError record and AllErrors table provide detailed information about the errors, including the category of the error, a message about the error, and the location where the error originated, which can be used for reporting and displaying error messages to the end user.

## Application in Power Platform Environments
- The IfError function can be used in various Power Platform applications, including Canvas apps, Copilot Studio, Desktop flows, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages, but may not work correctly if the Formula-level error management feature is disabled under Settings > Updates > Retired.
- The Error, IfError, IsError, and IsBlankOrError functions in Power Platform are used to handle and manage errors in formulas, with IfError being used to replace an error value with a specified replacement value, and IsError and IsBlankOrError being used to test for error values.

## Function Parameters and Evaluation Logic
- The IfError function takes in a value to test for an error, a replacement value to return if an error is found, and an optional default result to return if no errors are found, with the function returning the last value argument evaluated if no errors are found and no default result is specified.
- The IsError function tests for an error value and returns a boolean true or false, while the IsBlankOrError function tests for either a blank value or an error value and is equivalent to using the Or function with IsBlank and IsError.

## Error Creation and Propagation
- The Error function is used to create and report custom errors, with the ability to pass in an error record or table of error records, and can be used to rethrow or pass through errors within the IfError function or App.OnError.
- The FirstError and AllErrors tables are used to access error information, with FirstError typically containing a single error and AllErrors containing a table of all errors, and can be passed to the Error function to rethrow or pass through errors.

## Backward Compatibility and Custom Error Creation
- When enabling error handling for existing apps, it is recommended to replace IsBlank with IsBlankOrError to preserve existing app behavior, as error handling separates blank values from error values, which could change the behavior of existing apps that continue to use IsBlank.
- The Error function can take in an error record or table of error records, with a blank record or empty table resulting in no error, and can be used to create and return custom errors with Kind and Message fields.

## Function Behavior Examples
- The IfError function in Power Platform returns a default value if no errors are found, and it evaluates the corresponding replacement argument if an error is detected in the initial argument, as seen in the example `IfError( 10, 11, 20, 21, 300 )` which returns `300` because no errors are present in the formula.
- The IsError function checks if an argument is an error, returning `true` if it is and `false` otherwise, as demonstrated by the examples `IsError( 1 )` which returns `false` and `IsError( 1/0 )` which returns `true` due to division by zero.
- The IsBlankOrError function checks if an argument is either blank or an error, returning `true` if it is and `false` otherwise, as shown in the examples `IsBlankOrError( 1 )` which returns `false`, `IsBlankOrError( Blank() )` which returns `true`, and `IsBlankOrError( 1/0 )` which returns `true`.

## Conditional Error Handling with If Statements
- The If function can be used in conjunction with the IsError function to display a message to the user when an error occurs, as seen in the example `If( IsError( 1/0 ), Notify( "There was an internal problem" ) )` which displays a message due to the division by zero error.
- The Error function can be used to create custom error messages, such as in the example `Error( { Kind: ErrorKind.Validation, Message: "Start Date must be before End Date" } )` which creates a validation error if the start date is after the end date.

## Error Suppression and Filtering Techniques
- The IfError function can be used to suppress certain errors and replace them with a value, as demonstrated by the example `With( {a: 1, b: 0}, IfError( a/b, If( FirstError.Kind <> ErrorKind.Div0, Error( FirstError ), -1 ) ) )` which returns `-1` instead of showing a division by zero error.
- The AllErrors table can be filtered to remove expected errors and retain other errors, as shown in the example `Error( Filter( AllErrors, Kind <> ErrorKind.Div0 ) )` which removes division by zero errors.

## User Input Validation in Power Apps
- The IfError function can be used in Microsoft Power Apps to handle errors in user input, such as in the example `IfError( Value( TextInput1.Text ), -1 )` which returns `-1` if the user input is not a valid value.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-iferror)
| Functions | Applies to |
| --- | --- |
| **Error****[IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)****IsError** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages |
| **IsBlankOrError** | Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages |

Detects errors and provides an alternative value or takes action. Create a custom error or pass through an error.

Note

If an app has disabled the *Formula-level error management* feature under **Settings** > **Updates** > **Retired**, those functions will not work correctly.

The **[IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)** function tests values until it finds an error. If the function discovers an error, the function evaluates and returns a corresponding replacement value and stops further evaluation. A default value can also be supplied for when no errors are found. The structure of **IfError** resembles that of the **If** function: **IfError** tests for errors, while **If** tests for **true**.


Use **IfError** to replace an error with a valid value so that downstream calculations can continue. For example, use this function if user input might result in a division by zero:

```
[IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)( 1/x, 0 )
```

This formula returns `0` if the value of `x` is zero, as `1/x` produces an error. If `x` isn't zero, then `1/x` is returned.

When [chaining](https://learn.microsoft.com/operators) formulas together in [behavior formulas](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth), such as:

```
Patch( DS1, ... );
Patch( DS2, ... )
```

The second [Patch](https://learn.microsoft.com/function-patch) function to `DS2` will be attempted even if the **Patch** to `DS1` fails. The scope of an error is limited to each formula that is chained.

Use **[IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)** to do an action and only continue processing if the action was successful. Applying **IfError** to this example:

```
IfError(
    Patch( DS1, ... ), Notify( "problem in the first action" ),
    Patch( DS2, ... ), Notify( "problem in the second action" )
)
```

If the **Patch** of `DS1` has a problem, the first **Notify** is executed. No further processing occurs including the second **Patch** of `DS2`. If the first **Patch** succeeds, the second **Patch** will execute.


If supplied, the optional *DefaultResult* argument is returned if no errors are discovered. Without this argument, the last *Value* argument is returned.

Building on the last example, the return value from **[IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)** can be checked to determine if there were any problems:

```
IfError(
    Patch( DS1, ... ), Notify( "problem in the first action" );  false,
    Patch( DS2, ... ), Notify( "problem in the second action" ); false,
    true
)
```

**[IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)** returns the value of one of its arguments. The types of all values that might be returned by **IfError** must be compatible.

In the last example, **Patch** returns a record that isn't compatible with the Booleans used for the *Replacement* formulas or the *DefaultResult*. Which is fine, since there's no situation in which the return value from these **Patch** calls would be returned by **IfError**.

Note

While the behavior in process for a change, the types of all arguments to **[IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)** must be compatible currently.

In the simple example described earlier:

```
IfError( 1/x, 0 )
```


The types of `1/x` and `0` were compatible as both were numbers. If they're not, the second argument is coerced to match the type of the first argument.

Excel displays **#DIV/0!** when a division by zero occurs.

Consider **[IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)** with the following instead:

```
IfError( 1/x, "#DIV/0!" )
```

The above formula won't work. The text string `"#DIV/0!"` is coerced to the type of the first argument to **[IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)**, which is a number. The result of **IfError** is yet another error since the text string can't be coerced. As a fix, convert the first argument to a text string so that **IfError** always returns a text string:

```
IfError( Text( 1/x ), "#DIV/0!" )
```

As seen above, **[IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)** can return an error if the *Replacement* or *DefaultResult* is an error.


Within in the replacement formulas, information about the errors found is available through the **FirstError** record and **AllErrors** table. **AllErrors** is a table of error information records with **FirstError** being a shortcut to the first record of this table. **FirstError** always returns the same value as **First( AllErrors )**.

Error records include:


| Field | Type | Description |
| --- | --- | --- |
| **Kind** | ErrorKind enum (number) | Category of the error. |
| **Message** | Text string | Message about the error, suitable to be displayed to the end user. |
| **Source** | Text string | Location in where the error originated, used for reporting. For example, for a formula bound to a control property, this value is in the form *ControlName.PropertyName*. |
| **Observed** | Text string | Location in where the error is surfaced to the user, used for reporting. For example, for a formula bound to a control property, this value is in the form *ControlName.PropertyName*. |
| **Details** | Record | Details about the error. Currently, details are provided only for network errors. This record includes **HttpStatusCode** which contains the HTTP status code and **HttpResponse** which contains the body of the response from the connector or service. |

For example, consider the following formula as a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control's **OnSelect** property:

```
Set( a, 1/0 )
```

And this formula on the **OnSelect** property of a second [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control:


```
[IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)( a, Notify( "Internal error: originated on " & FirstError.Source & ", surfaced on " & FirstError.Observed ) )
```

The example formula above would display the following banner when the two buttons are activated in sequence:

![Button control activated, showing a notification from the Notify function.](https://learn.microsoft.com/media/function-iferror/notify-firsterror.png)

Typically, there will be only one error that **FirstError** can sufficiently work with. However, there are scenarios where multiple errors may be returned. For example, when using a [formula chaining operator](https://learn.microsoft.com/operators) or the [Concurrent](https://learn.microsoft.com/function-concurrent). Even in these situations, reporting **FirstError** might be enough to reveal a problem instead overloading a user with multiple errors. If you still have a requirement to work with each error individually, you can use the **AllErrors** table.

The **IsError** function tests for an error value.

The return value is a Boolean *true* or *false*.

Using **IsError** prevents any further processing of the error.

The **IsBlankOrError** function tests for either a blank value or an error value and is the equivalent of `Or( IsBlank( X ), IsError( X ) )`.


When enabling error handling for existing apps, consider replacing **IsBlank** with **IsBlankOrError** to preserve existing app behavior. Before the addition of error handling, a *blank* value was used to represent both null values from databases and error values. Error handling separates these two interpretations of *blank* which could change the behavior of existing apps that continue to use **IsBlank**.

The return value is a boolean *true* or *false*.

Using **IsBlankOrError** prevents any further processing of the error.

Use the **Error** function to create and report a custom error. For example, you might have logic to determine whether any given value is valid for your context or not—something not checked for a problem automatically. You can create and return your own error, complete with **Kind** and **Message**, using the same record described above for the **[IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)** function.


In the context of **IfError**, use the **Error** function to rethrow or pass through an error. For example, your logic in **IfError** may decide that in some cases an error can be safely ignored, but in other cases the error is important to send through. Within **IfError** or **App.OnError**, use **Error( FirstError )** to pass through an error.

The **Error** function can also be passed a table of errors, as would be found in the **AllErrors** table. Use **Error( AllErrors )** to rethrow all the errors and not just the first.

A *blank* record or empty table passed to **Error** results in no error.

**Error**( **ErrorRecord** )**Error**( **ErrorTable** )

- *ErrorRecord* – Required. Error information record, including **Kind**, **Message**, and other fields. **Kind** is required. **FirstError** can be passed directly.

- *ErrorTable* – Required. Table of error information records. **AllErrors** can be passed directly.

**[IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)**( *Value1*, *Replacement1* [, *Value2*, *Replacement2*, ... [, *DefaultResult* ] ] )

- *Value(s)* – Required. Formula(s) to test for an error value.


- *Replacement(s)* – Required. The formulas to evaluate and values to return if matching *Value* arguments returned an error.

- *DefaultResult* – Optional. The formulas to evaluate if the formula doesn't find any errors.

**IsError**( *Value* )**IsBlankOrError**( *Value* )

- *Value* – Required. Formula to test.


| Formula | Description | Result |
| --- | --- | --- |
| **[IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)( 1, 2 )** | The first argument isn't an error. The function has no other errors to check and no default return value. The function returns the last *value* argument evaluated. | 1 |
| **IfError( 1/0, 2 )** | The first argument returns an error value (because of division by zero). The function evaluates the second argument and returns it as the result. | 2 |
| **IfError( 10, 20, 30 )** | The first argument isn't an error. The function has no other errors to check but does have a default return value. The function returns the *DefaultResult* argument. | 30 |
| **IfError( 10, 11, 20, 21, 300 )** | The first argument **10** isn't an error, so the function doesn't evaluate that argument's corresponding replacement **11**. The third argument **20** isn't an error either, so the function doesn't evaluate that argument's corresponding replacement **21**. The fifth argument **300** has no corresponding replacement and is the default result. The function returns that result because the formula contains no errors. | 300 |
| **IfError( 1/0, Notify( "There was an internal problem" ) )** | The first argument returns an error value (due to division by zero). The function evaluates the second argument and displays a message to the user. The return value of **IfError** is the return value of **Notify**, coerced to the same type as the first argument to **IfError** (a number). | 1 |


| Formula | Description | Result |
| --- | --- | --- |
| **IsError( 1 )** | The argument isn't an error. | *false* |
| **IsError( Blank() )** | The argument is a blank, but not an error. | *false* |
| **IsError( 1/0 )** | The argument is an error. | *true* |
| **If( IsError( 1/0 ), Notify( "There was an internal problem" ) )** | The argument to **IsError** returns an error value (because of division by zero). This function returns *true*, which causes the **If** to display a message to the user with the **Notify** function. The return value of **If** is the return value of **Notify**, coerced to the same type as the first argument to **If** (a boolean). | *true* |

| Formula | Description | Result |
| --- | --- | --- |
| **IsBlankOrError( 1 )** | The argument isn't an error or a blank. | *false* |
| **IsBlankOrError( Blank() )** | The argument is a blank. | *true* |
| **IsBlankOrError( 1/0 )** | The argument is an error. | *true* |

In this example, dates are validated relative to one another, resulting in an error if there is a problem.

```
If( StartDate > EndDate,
    Error( { Kind: ErrorKind.Validation, Message: "Start Date must be before End Date" } ) )
```


In this example, some errors are allowed to pass through while others are suppressed and replaced with a value. In the first case, **b** is in an error state because the **Value** function has an invalid argument. Because this is unexpected by the formula writer, it is passed through so the user sees it. In the second case, with the same formula, **b** has the value 0, resulting in a division by zero. In this case, the formula writer may know that this is acceptable for this logic, suppress the error (no banner is shown), and return -1 instead.

```
With( {a: 1, b: Value("a")},
      [IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)( a/b, If( FirstError.Kind <> ErrorKind.Div0, Error( FirstError ), -1 ) ) )
// returns an error with Kind = ErrorKind.InvalidArgument

With( {a: 1, b: 0} )
      IfError( a/b, If( FirstError.Kind <> ErrorKind.Div0, Error( FirstError ), -1 ) ) )
// returns -1
```


The **AllErrors** table can be filtered like any other table. Used with the **Error** function, expected errors can be removed and the remaining errors retained and reported. For example, if we knew that division by zero wasn't going to be a problem in a particular context, those errors could be filtered out, leaving all other errors intact with the following formula:

```
Error( Filter( AllErrors, Kind <> ErrorKind.Div0 ) )
```

1. Add a [Text input](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) control, and name it **TextInput1** if it doesn't have that name by default.

2. Add a [Label](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-box) control, and name it **Label1** if it doesn't have that name by default.

3. Set the formula for **Label1**'s **Text** property to:

```
[IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8)( Value( TextInput1.Text ), -1 )
```

4. In **TextInput1**, enter **1234**.

Label1 shows the value **1234** as this is a valid input to the Value function.

5. In **TextInput1**, enter **ToInfinity**.

Label1 shows the value **-1** as this isn't a valid input to the Value function. Without wrapping the Value function with [IfError](https://app.getrecall.ai/item/611e2ac7-d825-4281-b13a-abb2973776b8), the label would show no value as the error value is treated as a *blank*.


[Formula reference for Power Apps](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/formula-reference)

