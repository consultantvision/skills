---
title: Errors function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:49:46 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:52:18 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Errors function in Power Platform provides error information for previous changes to a data source, including network outages, inadequate permissions, and edit conflicts.
- The function returns a table of errors with columns such as Record, Column, Message, and Error, which can be used to display error messages to the user.
- The Errors function can be used with or without a specific Record argument to return errors for the entire data source or a selected row, and can be tested with the IsEmpty function to check if there are no errors.


Detailed summary

- The Errors function in Power Platform provides error information for previous changes to a data source, which can occur due to various reasons such as network outages, inadequate permissions, and edit conflicts.
- The functions that modify data in data sources, including Patch, Collect, Remove, RemoveIf, Update, UpdateIf, and SubmitForm, report errors in two ways: by returning an error value as the result of the operation and by using the Errors function to return errors for previous operations.
- The Errors function returns a table of errors that contains columns such as Record, Column, Message, and Error, which provide detailed information about the error, including a description of the error and an error code that can be used in formulas to help resolve the error.
- The Error column in the Errors function table contains an error code that can have various values, including ErrorKind.Conflict, ErrorKind.ConstraintViolation, ErrorKind.CreatePermission, ErrorKind.DeletePermission, ErrorKind.EditPermission, ErrorKind.GeneratedValue, ErrorKind.MissingRequired, ErrorKind.None, ErrorKind.NotFound, ErrorKind.ReadOnlyValue, ErrorKind.Sync, ErrorKind.Unknown, and ErrorKind.Validation, each indicating a specific type of error.
- The Errors function can be used to return errors for the entire data source or for a specific record by providing the Record argument to the function, and it can also be used to display error messages on a form screen without needing to capture the error in a state variable.
- To use the Errors function, you need to provide the DataSource argument, which is required, and optionally the Record argument, and the function will return a table of errors that can be tested with the IsEmpty function to check if there are any errors.
- The Errors function can be used in conjunction with other functions, such as Validate and DataSourceInfo, to avoid errors before they happen and to work with data sources more effectively.
- In an example using the IceCream data source, the Errors function is used to detect conflicts and display error messages to the user, and it can also be used to add a Reload button to the form to efficiently resolve conflicts and revert changes.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-errors)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Model-driven apps

Provides error information for previous changes to a [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources).

Errors can happen when a [record](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) of a data source is changed. Many causes are possible, including network outages, inadequate permissions, and edit conflicts.

The functions that modify data in data sources, such as [Patch](https://learn.microsoft.com/function-patch), [Collect](https://learn.microsoft.com/function-clear-collect-clearcollect), [Remove](https://learn.microsoft.com/function-remove-removeif), [RemoveIf](https://learn.microsoft.com/function-remove-removeif), [Update](https://learn.microsoft.com/function-update-updateif), [UpdateIf](https://learn.microsoft.com/function-update-updateif), and [SubmitForm](https://learn.microsoft.com/function-form) report errors in two ways:

- Each of these functions returns an error value as the result of the operation. Errors can be detected with **IsError** and replaced or suppressed with **IfError** and **App.OnError** as usual. See [Error Handling](https://learn.microsoft.com/error-handling) for more information.

- After the operation, the **Errors** function will also return the errors for previous operations. It can be useful for displaying the error message on a form screen without needing to capture the error in a state variable.


You can avoid some errors before they happen by using the [Validate](https://learn.microsoft.com/function-validate) and [DataSourceInfo](https://learn.microsoft.com/function-datasourceinfo) functions. See [working with data sources](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources) for more suggestions on how to work with and avoid errors.

The **Errors** function returns a [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) of errors that contains the following [columns](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns):

- **Record**. The record in the data source that had the error. If the error occurred during the creation of a record, this column is *blank*.

- **Column**. The column that caused the error, if the error can be attributed to a single column. If not, it's *blank*.

- **Message**. A description of the error. This error string can be displayed for the end user. This message may be generated by the data source and could be long and contain raw column names that may not have any meaning to the user.

- **Error**. An error code that can be used in formulas to help resolve the error:


| ErrorKind | Description |
| --- | --- |
| ErrorKind.Conflict | Another change was made to the same record, resulting in a change conflict. Use the [Refresh](https://learn.microsoft.com/function-refresh) function to reload the record and try the change again. |
| ErrorKind.ConstraintViolation | One or more constraints have been violated. |
| ErrorKind.CreatePermission | An attempt was made to create a record, and the current user doesn't have permission to create records. |
| ErrorKind.DeletePermission | An attempt was made to delete a record, and the current user doesn't have permission to delete records. |
| ErrorKind.EditPermission | An attempt was made to edit a record, and the current user doesn't have permission to edit records. |
| ErrorKind.GeneratedValue | An attempt was made to change a column that the data source generates automatically. |
| ErrorKind.MissingRequired | The value for a required column is missing from the record. |
| ErrorKind.None | There's no error. |
| ErrorKind.NotFound | An attempt was made to edit or delete a record, but the record couldn't be found. Another user may have changed the record. |
| ErrorKind.ReadOnlyValue | An attempt was made to change a column that's read only. |
| ErrorKind.Sync | An error was reported by the data source. Check the Message column for more information. |
| ErrorKind.Unknown | There was an error, but of an unknown kind. |
| ErrorKind.Validation | There was a general validation issue detected, that didn't fit one of the other kinds. |


Errors can be returned for the entire data source, or for only a selected row by providing the *Record* argument to the function.

[Patch](https://learn.microsoft.com/function-patch) or another data function may return a *blank* value if, for example, a record couldn't be created. You can pass *blank* to **Errors**, and it returns appropriate error information in these cases. Subsequent use of data functions on the same data source clears this error information.

If there are no errors, the table that **Errors** returns will be [empty](https://learn.microsoft.com/function-isblank-isempty) and can be tested with the [IsEmpty](https://learn.microsoft.com/function-isblank-isempty) function.

**Errors**( *DataSource* [, *Record* ] )

- *DataSource* – Required. The data source for which you want to return errors.

- *Record* – Optional. A specific record for which you want to return errors. If you don't specify this argument, the function returns errors for the entire data source.

For this example, we'll be working with the **IceCream** data source, a data source for which [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) will attempt to detect conflicts:

![Ice Cream.](https://learn.microsoft.com/media/function-errors/icecream.png)

Note

[Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) does not attempt to detect conflicts for changes to Dataverse tables.


Through the app, a user loads the Chocolate record into a data-entry form and then changes the value of **Quantity** to 90. The record to be worked with is placed in the [context variable](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-variables#use-a-context-variable) **EditRecord**:

- **UpdateContext( { EditRecord: LookUp( IceCream, Flavor = "Chocolate" ) } )**

To make this change in the data source, the [Patch](https://learn.microsoft.com/function-patch) function is used:

- **Patch( IceCream, EditRecord, Gallery.Updates )**

Where **Gallery.Updates** evaluates to **{ Quantity: 90 }**, since only the **Quantity** property has been modified.

Unfortunately, just before the [Patch](https://learn.microsoft.com/function-patch) function was invoked, somebody else modifies the **Quantity** for Chocolate to 80. Because this is a supported data source for conflict detection, [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) will detect this and not allow the conflicting change to occur. You can check for this situation with the formula:

- **IsEmpty( Errors( IceCream, EditRecord ) )**

Which returns **false**, because the **Errors** function returned the following table:


| Record | Column | Message | Error |
| --- | --- | --- | --- |
| { Flavor: "Chocolate", Quantity: 100 } | *blank* | "Another user has modified the record that you're trying to modify. Reload the record and try again." | ErrorKind.Conflict |

You can place a label on the form to show this error to the user.

- To show the error, set the label's [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula: **Label.Text = First(Errors( IceCream, EditRecord )).Message**

You can also add a **Reload** button on the form, so that the user can efficiently resolve the conflict.

- To show the button only when a conflict has occurred, set the button's [Visible](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula: **!IsEmpty( Lookup( Errors( IceCream, EditRecord ), Error = ErrorKind.Conflict ) )**

- To revert the change, which the user selects the button, set its [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula: **ReloadButton.OnSelect = Revert( IceCream, EditRecord )**

