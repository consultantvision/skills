---
title: Revert function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 19:02:13 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 19:02:24 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Revert function refreshes and clears errors for records in a data source, allowing you to see changes made by other users.
- It can revert an entire data source or a single record, and has no return value, only usable in a behavior formula.
- The function takes two parameters: DataSource (required) and Record (optional), as shown in the formula Revert( DataSource [, Record ] ).


Detailed summary

- The Revert function in Power Platform is used to refresh and clear errors for the records of a data source, and it can be applied to Canvas apps, allowing users to see changes made by other users.
- The Revert function can refresh an entire data source or a single record in that data source, and it also clears any errors from the table that the Errors function returned for the records reverted.
- The Revert function has no return value and can only be used in a behavior formula, with the syntax Revert( DataSource [, Record ] ), where DataSource is a required parameter representing the data source to be reverted, and Record is an optional parameter representing the record to be reverted.
- If the Record parameter is not specified, the entire data source is reverted, and this function is particularly useful when the Errors function reports a conflict after a Patch (computing) or other data operation, in which case the record can be reverted to start with the conflicting version and the change can be reapplied.
- The Revert function can be used to resolve conflicts that arise when multiple users try to modify the same record simultaneously, as demonstrated in the example where a user changes the Quantity property of a record to 500, but another user has already changed it to 400, resulting in a conflict error that can be resolved by reverting the record and reapplying the change.
- In the example provided, the Revert function is used with the syntax Revert( IceCream, LookUp( IceCream, Flavor = "Strawberry" ) ) to revert the Strawberry record in the IceCream data source, allowing the user to reapply their change and resolve the conflict.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-revert)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps

Refreshes and clears errors for the [records](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) of a [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources).

The **Revert** function refreshes an entire data source or a single record in that data source. You'll see changes that other users made.

For the records reverted, **Revert** also clears any errors from the [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) that the [Errors](https://learn.microsoft.com/function-errors) function returned.

If the [Errors](https://learn.microsoft.com/function-errors) function reports a conflict after a [Patch](https://learn.microsoft.com/function-patch) or other data operation, **Revert** the record to start with the conflicting version and reapply the change.

**Revert** has no return value. You can use it only in a [behavior formula](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth).

**Revert**( *DataSource* [, *Record* ] )

- *DataSource* – Required. The data source that you want to revert.

- *Record* - Optional. The record that you want to revert. If you don't specify a record, the entire data source is reverted.

In this example, you'll revert the data source named **IceCream**, which starts with the data in this table:

![IceCream example.](https://learn.microsoft.com/media/function-revert/icecream.png)


A user on another device changes the **Quantity** property of the **Strawberry** record to **400**. At about the same time, you change the same property of the same record to **500**, not knowing about the other change.

You use the [Patch](https://learn.microsoft.com/function-patch) function to update the record: **[Patch](https://app.getrecall.ai/item/a5f2a810-0198-4078-93a0-2f59b56760fe)( IceCream, LookUp( IceCream, Flavor = "Strawberry" ), { Quantity: 500 } )**

You check the [Errors](https://learn.microsoft.com/function-errors) table and find an error:

| Record | [Column](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns) | Message | Error |
| --- | --- | --- | --- |
| **{ ID: 1, Flavor: "Strawberry", Quantity: 300 }** | *blank* | **"The record you are trying to modify has been modified by another user. Please revert the record and try again."** | **ErrorKind.Conflict** |

Based on the **Error** column, you have a **Reload** button for which the [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to set to this formula: **Revert( IceCream, LookUp( IceCream, Flavor = "Strawberry" ) )**

After you select the **Reload** button, the [Errors](https://learn.microsoft.com/function-errors) table is [empty](https://learn.microsoft.com/function-isblank-isempty), and the new value for **Strawberry** has been loaded:

![New value for Strawberry ice cream.](https://learn.microsoft.com/media/function-revert/icecream-after.png)

You reapply your change on top of the previous change, and your change succeed because the conflict has been resolved.

![Reapplied changes with resolved conflict.](https://learn.microsoft.com/media/function-revert/icecream-success.png)

