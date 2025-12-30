---
title: Update and UpdateIf functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 20:01:02 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 20:02:09 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `Update` function replaces an entire record in a data source, while `UpdateIf` and `Patch` modify one or more values in a record.
- `UpdateIf` modifies records that match one or more conditions, and can reference columns of the data source by name.
- Both `Update` and `UpdateIf` return the modified data source as a table, but do not delegate to a data source, with `UpdateIf` working locally to simulate delegation up to a limit of 500/2000 records.


Detailed summary

- The Update and UpdateIf functions in Power Platform are used to modify records in a data source, with the Update function replacing an entire record and the UpdateIf function modifying one or more values in a record that match a specified condition.
- The Update function requires the data source, the old record to be replaced, and the new record, and optionally allows for updating all copies of a record in a collection using the RemoveFlags.All argument.
- The UpdateIf function requires the data source, a condition that evaluates to true for the records to be modified, and a change record that contains the new property values to apply to the records that satisfy the condition.
- Both functions return the modified data source as a table and must be used in a behavior formula, but they do not delegate to a data source, with UpdateIf and RemoveIf working locally to simulate delegation up to a limit of 500/2000 records.
- The UpdateIf function can be used to modify records based on a formula, and it can also be used to modify multiple records that match multiple conditions, with the change record being applied to the records that satisfy the first condition that evaluates to true.
- Examples of using the Update and UpdateIf functions include replacing a record in a data source, modifying records that have a specific value, and setting the value of a property for all records in a data source.
- The functions can be used in real-world scenarios, such as updating the quantity of a product in an inventory collection based on the number of units sold, and can be implemented using a gallery, a slider, and a button in a Power Platform app.
- The Update and UpdateIf functions have limitations, including the non-delegation limit of 500/2000 records, and a warning may appear during authoring to remind the user of this limitation, which can be mitigated by using the functions in a way that minimizes the number of records being updated.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-update-updateif)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Model-driven apps

Updates [records](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) in a [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources).

Use the **Update** function to replace an entire record in a data source. In contrast, the **UpdateIf** and the [Patch](https://learn.microsoft.com/function-patch) functions modify one or more values in a record, leaving the other values alone.

For a [collection](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources#collections), the entire record must match. Collections allow duplicate records, so multiple records might match. You can use the **RemoveFlags.All** argument to update all copies of a record; otherwise, only one copy of the record is updated.

If the data source generates a column's value automatically, the value of that [column](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns) must be reaffirmed.

Use the **UpdateIf** function to modify one or more values in one or more records that match one or more conditions. The condition can be any formula that results in a **true** or **false** and can reference columns of the data source by name. The function evaluates the condition for each record and modifies any record for which the result is **true**.


To specify a modification, use a change record that contains new property values. If you provide this change record inline with curly braces, property formulas can reference properties of the record that's being modified. You can use this behavior to modify records based on a formula.

Similar to **UpdateIf**, you can also use the [Patch](https://learn.microsoft.com/function-patch) function to change specific columns of a record without affecting other columns.

Both **Update** and **UpdateIf** return the modified data source as a [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables). You must use either function in a [behavior formula](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth).


These functions do not delegate to a data source. However, **UpdateIf** and **RemoveIf** work locally to simulate delegation up to a limit of 500/2000 records. They progressively bring down records beyond the non-delegation limit of 500/2000 records. Records that meet the **If** condition are collected. Generally, a maximum of 500/2000 records are collected separately and then modified per execution. However, more records may be updated if the existing local data cache is large, as the function may have access to more records for evaluation. Only the initial portion of the data source will be retrieved, and then the function will be applied. This may not represent the complete picture. A warning may appear during authoring to remind you of this limitation.

**Update**(DataSource_, *OldRecord*, *NewRecord* [, **RemoveFlags.All** ] )

- *DataSource* – Required. The data source that contains the record that you want to replace.

- *OldRecord* – Required. The record to replace.


- *NewRecord* – Required. The replacement record. This isn't a change record. The entire record is replaced, and missing properties contain *blank*.

- *RemoveFlags.All* – Optional. In a collection, the same record may appear more than once. Specify the **RemoveFlags.All** argument to update all copies of the record.

**UpdateIf**(DataSource_, *Condition1*, *ChangeRecord1* [, *Condition2*, *ChangeRecord2*, ... ] )

- *DataSource* – Required. The data source that contains the record or records that you want to modify.

- *Conditions* – Required. A formula that evaluates to **true** for the record or records that you want to modify. You can use column names of *DataSource* in the formula. In case multiple *Conditions* are passed, only the *ChangeRecord* related to the first *Condition* that evaluates to **true** is applied.


- *ChangeRecord(s)* - Required. For each corresponding condition, a change record of new property values to apply to records of *DataSource* that satisfy the condition. If you provide the record inline using curly braces, property values of the existing record can be used in the property formulas.

In these examples, you'll replace or modify records in a data source that's named **IceCream** and that starts with the data in this table:

![IceCream example.](https://learn.microsoft.com/media/function-update-updateif/icecream.png)


| Formula | Description | Result |
| --- | --- | --- |
| **Update( IceCream,LookUp( IceCream, Flavor="Chocolate" ), { ID: 1, Flavor: "Mint Chocolate", Quantity:150 } )** | Replaces a record from the data source. | ![Replace a record.](https://learn.microsoft.com/media/function-update-updateif/icecream-mint.png)<br><br><br>The **IceCream** data source has been modified. |
| **UpdateIf( IceCream, Quantity > 175, { Quantity: Quantity + 10 } )** | Modifies records that have a **Quantity** that is greater than **175**. The **Quantity** field is incremented by 10, and no other fields are modified. | ![Modify records.](https://learn.microsoft.com/media/function-update-updateif/icecream-mint-plus10.png)<br><br><br>The **IceCream** data source has been modified. |
| **Update( IceCream,LookUp( IceCream, Flavor="Strawberry" ),{ ID: 3, Flavor: "Strawberry Swirl"} )** | Replaces a record from the data source. The **Quantity** property hasn't been supplied in the replacement record, so that property will be *blank* in the result. | ![Replace record when quantity not supplied.](https://learn.microsoft.com/media/function-update-updateif/icecream-mint-swirl.png)<br><br><br>The **IceCream** data source has been modified. |
| **UpdateIf( IceCream, true, { Quantity: 0 } )** | Sets the value of the **Quantity** property for all records in the data source to 0. | ![Set quantity for all to 0.](https://learn.microsoft.com/media/function-update-updateif/icecream-mint-zero.png)<br><br><br>The **IceCream** data source has been modified. |


1. Import or create a collection named **Inventory**, and show it in a gallery as [Show data in a gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/show-images-text-gallery-sort-filter) describes.

2. Name the gallery **ProductGallery**.

3. Add a slider named **UnitsSold**, and set its **Max** property to this expression:**ProductGallery.Selected.UnitsInStock**

4. Add a button, and set its [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula:**UpdateIf(Inventory, ProductName = ProductGallery.Selected.ProductName, {UnitsInStock:UnitsInStock-UnitsSold.Value})**

5. Press F5, select a product in the gallery, specify a value with the slider, and then select the button.

The number of units in stock for the product you specified decreases by the amount that you specified.

