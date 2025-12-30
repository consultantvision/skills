---
title: Understand errors in Power Fx - Power Platform
tags: Low-Code Development
createdAt: Mon Dec 29 2025 16:41:38 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 16:41:45 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- Errors in Microsoft Power Fx can be detected and handled using functions such as IfError, IsError, and IsErrorOrBlank.
- The App.OnError handler can be used to control how errors are reported to the end user, but it cannot replace the error once it has occurred.
- Errors can be created and rethrown using the Error function, and can be stored in variables or included in data structures such as tables.
- The IfError function can be used to stop execution after an error, and the AllErrors scope variable can be used to access all errors encountered in a formula.
- Behavior formulas can execute multiple actions and encounter multiple errors, with the first error being reported to the end user by default.
- The `IsError` function can be used to detect errors in Power Fx, and `IfError` can be used to replace or suppress errors.
- The `Errors` function returns information about past errors during runtime operations, and can be used to display error messages on a form screen.
- The `Error` function can be used to create custom errors, and it's recommended to use values above 1000 to avoid conflicts with system error values.


Detailed summary


## Enabling Error Management and Default Error Reporting
- The behavior described in the article is only available when the Formula-level error management preview feature is turned on through Settings > Upcoming features > Preview, and more information can be found in the Controlling which features are enabled section.
- Errors can occur in Power Apps due to various reasons such as network issues, storage limitations, or unexpected input values, and by default, these errors are reported to the end user, allowing them to potentially fix the issue or report it to the app owner.
- App makers can take control of errors in their app by detecting and handling them using the IfError function, which can retry the operation and prevent the error from being reported to the end user.
- If an error is not handled in the formula where it occurred, it is bubbled up to the App.OnError handler, where the error can be controlled and reported to the end user, or the error reporting can be suppressed altogether.

## Error Handling Functions and Custom Errors
- The Error function can be used to create custom errors and rethrow errors after they have been interrogated in IfError or App.OnError, allowing app makers to handle specific error conditions in their app.
- The IfError function can be used to replace errors with valid values, such as showing a blank value when a division by zero error occurs, and it can also be tuned to handle specific error cases and rethrow other errors.
- App makers can use various methods to handle errors, such as showing an error banner, displaying "#Error" in a label control, or using the IfError function to replace errors with valid values, depending on the needs of the app.

## Advanced IfError Usage and Centralized Error Handling
- The IfError function in Microsoft Power Fx is used to handle errors in a formula, and it requires the replacement values to be compatible with the first argument, which can be achieved by explicitly converting numerical results to text strings using the Text function.
- Instead of using IfError, a centralized App.OnError handler can be written to control the reporting of errors, but it cannot replace the error as it has already happened and App.OnError only provides a hook for logging the error or modifying how it is reported to the end user.

## Error Propagation and Observation in Power Fx
- Errors in Power Fx flow through formulas in a similar way to Excel, where an error in one cell can propagate through to other cells that reference it, and most functions and operators follow the "error in, error out" rule, but there are exceptions such as IsError, IsErrorOrBlank, and IfError.
- Errors do not flow through Power Apps control properties, but the system will observe errors on the input to all control properties, and errors are not observed until their value is used, which means that functions like If and Select may not return an error even if one is passed in.
- The IfError, IsError, and IsErrorOrBlank functions can be used to observe errors within a formula and return an alternate value, take alternate action, or modify the error before it is observed and reported, and after an error is observed, it is reported to the end user through a mechanism controlled by the Microsoft Power Fx host.

## Error Reporting Mechanisms and Behavior Formulas
- In Power Apps, an error banner is shown and App.OnError is used to control how the error is reported, and the scope variables FirstError and AllErrors provide context information about the error or errors, including the kind of error, where it originated, and where it was observed.
- Behavior formulas, such as those used in the App.OnStart event or in a control's OnSelect event, support taking action, modifying databases, and changing state, and allow multiple actions to be done in a sequence using the ; chaining operator.
- The Power Fx language in Power Platform allows for the execution of multiple actions in a behavior formula, and if an error occurs in one of the actions, it does not necessarily stop the execution of the subsequent actions, as seen in the example with two Patch calls.

## Managing Multiple Errors and Execution Control
- The IfError function can be used to stop the execution of a formula after an error has occurred, providing a way to handle errors and prevent further actions from being taken, similar to the If function.
- In the case of the ForAll function, if an error is encountered during one of the iterations, the rest of the iterations will not stop, and when the ForAll is complete, an error will be returned, which contains all the errors encountered, as demonstrated in the example with the division by zero error.
- The IfError function and App.OnError can access all the errors encountered with the AllErrors scope variable, allowing for the examination of multiple errors that may have occurred during the execution of a formula.

## Handling Multiple Errors in Data Modifications
- Multiple errors can be returned in non-behavior formulas as well, such as when using the Patch function with a batch of records to update, and errors can be stored in variables or included in data structures like tables.
- When an error occurs in a data table control in Power Apps, the error is included in the table, but it does not invalidate the entire table, as seen in the example with the division by zero error in the AddColumns calculation.
- The functions that modify data in data sources, such as Patch, Collect, Remove, RemoveIf, Update, UpdateIf, and SubmitForm, report errors in two ways: by returning an error value as the result of the operation and by providing access to the errors through the Errors function.

## Errors Function and Custom Error Creation
- The Errors function can be useful for displaying error messages on a form screen without needing to capture the error in a state variable, and it also returns information about past errors during runtime operations, allowing for the display of custom error messages, as demonstrated in the example with the Collect function and the Notify function.
- The Microsoft Power Fx language provides a way to handle errors using the IfError and App.OnError functions, which can detect and rethrow errors to the next higher handler using the Error( AllErrors ) function.

## ErrorKind Enum and Predefined Error Types
- Users can also create their own custom errors with the Error function, and it is recommended to use error values above 1000 to avoid potential conflicts with future system error values.
- The ErrorKind enum is a set of predefined error values that can be used to identify specific types of errors, including AnalysisError, BadLanguageCode, BadRegex, Conflict, ConstraintViolated, CreatePermission, DeletePermissions, Div0, EditPermissions, GeneratedValue, InvalidFunctionUsage, FileNotFound, InsufficientMemory, InvalidArgument, Internal, MissingRequired, Network, None, NotApplicable, NotFound, NotSupported, Numeric, QuoteExceeded, ReadOnlyValue, ReadPermission, Sync, Unknown, and Validation.
- Each error value in the ErrorKind enum has a specific description, such as AnalysisError being a system error due to a problem with compiler analysis, and Conflict being an error that occurs when the record being updated has already been changed at the source.
- The ErrorKind enum values range from 0 to 27, with 0 representing no error, and the rest representing various types of errors that can occur in the Microsoft Power Fx language.
- Understanding the ErrorKind enum and how to use the Error function can help developers to effectively handle and manage errors in their Power Fx applications.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/error-handling)
Note

The behavior that this article describes is available only when the **Formula-level error management** preview feature through **Settings** > **Upcoming features** > **Preview** is turned on. More information: [Controlling which features are enabled](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-experimental-preview#controlling-which-features-are-enabled)

Errors happen. Networks go down, storage fills up, unexpected values flow in. It's important that your logic continues to work properly in the face of potential issues.

By default, errors flow through the formulas of an app and are reported to the end user of the app. In this way, the end user knows something unexpected happened, they can potentially fix the problem themselves with a different input, or they can report the problem to the owner of the app.

As an app maker, you can take control of errors in your app:


- **Detecting and handling an error.** If there's a chance an error may occur, the app's formulas can be written to detect the error condition and retry the operation. The end user doesn't need to be concerned that an error occurred because the maker took the possibility into account. This is done with the [IfError](https://learn.microsoft.com/reference/function-iferror) functions within a formula.

- **Reporting an error.** If an error isn't handled in the formula where it was encountered, the error is then bubbled up to the **App.OnError** handler. Here, the error can no longer be replaced as it has already occurred and is a part of formula calculations. But you can use **App.OnError** to control how the error is reported to the end user, including suppressing the error reporting all together. **App.OnError** also provides a common choke point for error reporting across the entire app.


- **Creating and rethrowing an error.** Finally, you may detect an error condition with your own logic, a condition that is specific to your app. Use the [Error](https://learn.microsoft.com/reference/function-iferror) function to create custom errors. The **Error** function is also used to rethrow an error after being interrogated in **IfError** or **App.OnError**.

Let's start with a simple example.

1. Create a new screen in a Power Apps Canvas app.

2. Insert a **TextInput** control. It will default to the name **TextInput1**.

3. Insert a **Label** control.

4. Set the **Text** property of the **Label** control to the formula

```
1/Value( TextInput1.Text )
```

![Error banner displayed with "the value cannot be converted to a number" for the text input control containing "Text input"](https://learn.microsoft.com/media/error-handling/intro-error-default.png)

We have an error because the default text of a **TextInput** control is `"Text input"`, which can't be converted to a number. By default this is a good thing: the end user will get a notification that something isn't working as expected in the app.


Obviously, we don't want an error to greet the user each time they start this app. Likely `"Text input"` isn't the right default for the text input box anyway. To remedy this, let's change the **Default** property of the **TextInput** control to:

```
Blank()
```

![Error banner displayed with "division by zero"](https://learn.microsoft.com/media/error-handling/intro-error-blank.png)

Hmm, now we have a different error. Mathematical operations with *blank*, such as division, will coerce the blank value to a zero. And that is now causing a division by zero error. To remedy this, we need to decide what the appropriate behavior is for this situation in this app. The answer may be to show *blank* when the text input is *blank*. We can accomplish this by wrapping our formula with the **IfError** function:

```
IfError( 1/Value( TextInput1.Text ), Blank() )
```

![No error banner displayed, an error due to a blank value has been replaced with a blank](https://learn.microsoft.com/media/error-handling/intro-error-iferror-all.png)

Now the error is replaced with a valid value and the error banner has gone away. But, we may have overshot, the **IfError** we used covers *all* errors, including typing in a bad value such as `"hello"`. We can address this by tuning our **IfError** to handle the division by zero case only with and rethrowing all other errors:


```
IfError( 1/Value( TextInput1.Text ), 
         If( FirstError.Kind = ErrorKind.Div0, Blank(), Error( FirstError ) ) )
```

![No error banner displayed, an error due specifically to division by zero has been replaced by a blank, otherwise the error is re-thrown](https://learn.microsoft.com/media/error-handling/intro-error-iferror-div0.png)

So, let's run our app and try some different values.

Without any value, as when the app starts, there's no answer displayed as the default value is *blank*, but there also no error shown as the **IfError** replaces the division by zero error.

![No answer displayed and no error banner](https://learn.microsoft.com/media/error-handling/intro-enter-blank.png)

If we type in a 4, we get the expected result of 0.25:

![0.25 displayed and no error banner](https://learn.microsoft.com/media/error-handling/intro-enter-4.png)

And if we type in something illegal, like `hello`, then we'll receive an error banner:

![no value displayed and error banner shown for the inability to convert "hello" to a number](https://learn.microsoft.com/media/error-handling/intro-enter-hello.png)

This is a simple introductory example. Error handling can be done many different ways, depending on the needs of the app:

1. Instead of an error banner, we could have shown **"#Error"** in the label control with the formula. To keep the types of the replacements compatible with the first argument to **IfError** we need to explicitly convert the numerical result to a text string with the **Text** function.```
IfError( Text( 1/Value( TextInput1.Text ) ),
If( FirstError.Kind = ErrorKind.Div0, Blank(), "#Error" )

```![no

```


2. Instead of wrapping this specific instance with **IfError** we could have written a centralized **App.OnError** handler. We can't replace the string shown with "#Error" as the error has already happened and **App.OnError** is only provided to control reporting.```
If( FirstError.Kind <> ErrorKind.Div0, Error( FirstError ) )

```

```

Errors flow through formulas much as they do in Excel. For example in Excel, if cell `A1` has the formula `=1/0`, then A1 will display the error value `#DIV0!`:

![Excel spreadsheet with A1=1/0 and #DIV/0! shown in the cell](https://learn.microsoft.com/media/error-handling/excel-div0-1.png)

If cell `A2` refers to `A1` with a formula such as `=A1*2`, then the error propagates through that formula too:

![Excel spreadsheet with A2=A1*2 and #DIV/0! shown in the cell](https://learn.microsoft.com/media/error-handling/excel-div0-2.png)

The error replaces the value that would have otherwise been calculated. There's no result for the multiplication in cell `A2`, only the error from the division in `A1`.


[Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) works the same way. In general, if an error is provided as an argument to a function or operator, the operation won't take place and the input error will flow through as the result of the operation. For example, `Mid( Text( 1/0 ), 1, 1 )` will return a Division by Zero error, as the inner most error passes through the [Text](https://learn.microsoft.com/reference/function-text) function and [Mid](https://learn.microsoft.com/reference/function-left-mid-right) function:

![Error banner showing invalid operation: division by zero](https://learn.microsoft.com/media/error-handling/pa-formula-div0.png)

In general, errors don't flow through Power Apps control properties. Let's extend the previous example with an additional control that displays if the first label's `Text` property is an error state:

![No error shown on second label control](https://learn.microsoft.com/media/error-handling/pa-formula-div0-control.png)

It's fine that errors don't propagate through a control because the system will observe errors on the input to all control properties. The error won't be lost.

Most functions and operators follow the "error in, error out" rule, but there are some exceptions. The functions **IsError**, **IsErrorOrBlank**, and **IfError** are designed for working with errors so they may not return an error even if one is passed into them.

Errors aren't observed until their value is used.


As a result, the **If** and **Select** functions may also not return an error if one is passed in. Consider the formula `If( false, 1/0, 3 )`. There's a division by zero error present in this formula, but since the `If` isn't taking that branch because of the `false`, [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) and Power Apps won't report an error:

![No error banner shown with If function in label Text property](https://learn.microsoft.com/media/error-handling/pa-not-observed.png)

Using the **Set** function with an error won't report an error at the point the error is placed into the variable. For example in Power Apps, here's a formula in **App.OnStart** that places a division by zero error into the variable `x`:

![No error banner shown with Set function call in App.OnStart](https://learn.microsoft.com/media/error-handling/pa-set-not-observed-1.png)

No error is reported, because `x` isn't being referenced. However, the moment we add a label control and set its **Text** property to `x`, the error is displayed:

![Error banner shown with label control referencing the variable x](https://learn.microsoft.com/media/error-handling/pa-set-not-observed-2.png)

You can observe errors within a formula with the **IfError**, **IsError**, and **IsErrorOrBlank** functions. With these functions, you can return an alternate value, take alternate action, or modify the error before it's observed and reported.

After an error is observed, the next step is to report the error to the end user.


Unlike Excel, there isn't always a convenient place to show an error result, as the result of a formula may drive a property such as X and Y coordinates of a control for which there's no convenient place to show some text. Each [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) host controls how errors are ultimately displayed to the end user and how much control the maker has over this process. In Power Apps, an error banner is shown and **App.OnError** is used to control how the error is reported.

It's important to note that **App.OnError** can't replace the error in the same way that **IfError** can. At the point that **App.OnError** is executed, the error has already happened, and the result has propagated through other formulas. **App.OnError** only controls how the error is reported to the end user and provides a hook for the maker to log the error if desired.

The scope variables **FirstError** and **AllErrors** provide context information about the error or errors. This provides information on the kind of error and where the error originated and where it was observed.


Behavior formulas support taking action, modifying databases, and changing state. These formulas allow more than one action to be done in a sequence using the `;` chaining operator (or `;;` depending on the locale).

In this case, for example, the grid control is showing what is in the `T` table. Each button select changes the state in this table with two **Patch** calls:

![Animation showing the two records in table T being updated with random numbers after each button click](https://learn.microsoft.com/media/error-handling/pa-behavior-no-error.gif)

In a chained behavior formula, actions don't stop after the first error. Let's modify our example to pass an invalid index number in the first **Patch** call. The second **Patch** continues on despite this earlier error. The first error is reported to the end user, and shown as an error in Studio on the control:

![Animation showing only the second record in table T being updated with random numbers after each button click, the first record resulting in an error](https://learn.microsoft.com/media/error-handling/pa-behavior-first-error.gif)

**IfError** can be used to stop execution after an error. Similar to the **If** function, the third argument to this function provides a place to put actions that should be executed only if there's no error:

![Animation showing no changes to either record in table T, because the IfError is preventing the second operation from completing after an error](https://learn.microsoft.com/media/error-handling/pa-behavior-stop-error.gif)


If an error is encountered during one of the iterations of **ForAll**, the rest of the iterations won't stop. **ForAll** is designed to execute each iteration independently, allowing for parallel execution. When the **ForAll** is complete, an error will be returned, which contains all the errors encountered (by examining **AllErrors** in **IfError** or **App.OnError**).

For example, the following formula will result in **ForAll** returning two errors (for the division by zero for `Value` of 0, twice) and `Collection` will have three records (for when `Value` isn't 0): `[1, 2, 3]`.

```
Clear( Collection ); 
ForAll( [1,0,2,0,3], If( 1/Value > 0, Collect( Collection, Value ) ) );
```

Since a behavior formula can execute more than one action, it can also encounter more than one error.

By default, the first error is reported to the end user. In this example, both **Patch** calls will fail, the second with a division by zero error. Only the first error (about index) is shown to the user:

![First index error displayed in an error banner, the second error is not reported](https://learn.microsoft.com/media/error-handling/pa-behavior-two-errors.png)


The **IfError** function and **App.OnError** can access all the errors encountered with the **AllErrors** scope variable. In this case, we can set this to a global variable and look at both errors encountered. They appear in the table in the same order in which they were encountered:

![Capture of the errors into the global variable PatchErrors where we can see that both errors present](https://learn.microsoft.com/media/error-handling/pa-behavior-allerrors.png)

Multiple errors can be returned in non-behavior formulas too. For example, using the **Patch** function with a batch of records to update can return multiple errors, one for each record that fails.

As we saw earlier, errors can be stored in variables. Errors can also be included in data structures, such as tables. This is an important so that an error on any one record can't invalidate the entire table.

For example, consider this data table control in Power Apps:

![Data table showing an error for the field Reciprocal for an input of 0, which results in a division by zero error](https://learn.microsoft.com/media/error-handling/pa-error-in-table-1.png)


The calculation in **AddColumns** has encountered a division by zero error for one of the values. For that one record, the **Reciprocal** column has an error value (division by zero) but the other records don't and are fine. `IsError( Index( output, 2 ) )` returns false and `IsError( Index( output, 2 ).Value )` returns true.

If an error occurs when filtering a table, the entire record is an error but still returned in the result so that the end user knows something was there and there's a problem.

Take this example. Here, the original table has no errors, but the act of filtering creates an error whenever **Value** is equal to 0:

![Data table showing errors for two records that could not be processed by the Filter criteria](https://learn.microsoft.com/media/error-handling/pa-table-filter.png)

The values -5 and -3 are properly filtered out. The values 0 result in an error in processing the filter, and so it's unclear if the record should be included or not in the result. To maximize transparency for end users and help makers debug, we include an error record in place of the original. In this case, `IsError( Index( output, 2 ) )` returns true.


The functions that modify data in data sources, such as [Patch](https://learn.microsoft.com/reference/function-patch), [Collect](https://learn.microsoft.com/reference/function-clear-collect-clearcollect), [Remove](https://learn.microsoft.com/reference/function-remove-removeif), [RemoveIf](https://learn.microsoft.com/reference/function-remove-removeif), [Update](https://learn.microsoft.com/reference/function-update-updateif), [UpdateIf](https://learn.microsoft.com/reference/function-update-updateif), and [SubmitForm](https://learn.microsoft.com/reference/function-form) report errors in two ways:

- Each of these functions will return an error value as the result of the operation. Errors can be detected with **IsError** and replaced or suppressed with **IfError** and **App.OnError** as usual.

- After the operation, the **Errors** function will also return the errors for previous operations. This can be useful for displaying the error message on a form screen without needing to capture the error in a state variable.

For example, this formula will check for an error from **Collect** and display a custom error message:

```
IfError( Collect( Names, { Name: "duplicate" } ),
         Notify( $"OOPS: { FirstError.Message }", NotificationType.Warning ) )
```

The **Errors** function also returns information about past errors during runtime operations. It can be useful for displaying an error on a form screen without needing to capture the error in a state variable.


Sometimes some potential errors are expected and can be safely ignored. Inside **IfError** and **App.OnError**, if an error is detected that should be passed on to the next higher handler, it can be rethrown with `Error( AllErrors )`.

You can also create your own errors with the **Error** function.

If you're creating your own errors, it's recommended that you use values above 1000 to avoid potential conflicts with future system error values.


| ErrorKind enum | Value | Description |
| --- | --- | --- |
| AnalysisError | 18 | System error. There was a problem with compiler analysis. |
| BadLanguageCode | 14 | An invalid or unrecognized language code was used. |
| BadRegex | 15 | Invalid regular expression. Check the syntax used with the **IsMatch**, **Match**, or **MatchAll** functions. |
| Conflict | 6 | The record being updated has already been changed at the source and the conflict needs to be resolved. A common solution is to save any local changes, refresh the record, and reapply the changes. |
| ConstraintViolated | 8 | The record didn't pass a constraint check on the server. |
| CreatePermission | 3 | The user doesn't have create record permission for the data source. For example, the **Collect** function was called. |
| DeletePermissions | 5 | The user doesn't have delete record permission for the data source. For example, the **Remove** function was called. |
| Div0 | 13 | Division by zero. |
| EditPermissions | 4 | The user doesn't have create record permission for the data source. For example, the **Patch** function was called. |
| GeneratedValue | 9 | A value was erroneously passed to the server for a field that is automatically calculated by the server. |
| InvalidFunctionUsage | 16 | Invalid usage of a function. Often one or more of the arguments to the function is incorrect or used in an invalid way. |
| FileNotFound | 17 | The **SaveData** storage couldn't be found. |
| InsufficientMemory | 21 | There isn't enough memory or storage on the device for the operation. |
| InvalidArgument | 25 | An invalid argument was passed to a function. |
| Internal | 26 | System error. There was an internal problem with one of the functions. |
| MissingRequired | 2 | A required field of a record was missing. |
| Network | 23 | There was a problem with network communications. |
| None | 0 | System error. There's no error. |
| NotApplicable | 27 | No value is available. Useful to differentiate a *blank* value that can be treated as a zero in numerical calculations from blank values that should be flagged as a potential problem if the value is used. |
| NotFound | 7 | Record couldn't be found. For example, the record to be modified in the **Patch** function. |
| NotSupported | 20 | Operation not supported by this player or device. |
| Numeric | 24 | A numeric function was used in an improper way. For example, **Sqrt** with -1. |
| QuoteExceeded | 22 | Storage quota exceeded. |
| ReadOnlyValue | 10 | Column is read only and can't be modified. |
| ReadPermission | 19 | The user doesn't have read record permission for the data source. |
| Sync | 1 | An error was reported by the data source. Check the Message column for more information. |
| Unknown | 12 | There was an error, but of an unknown kind. |
| Validation | 11 | The record didn't pass a validation check. |


