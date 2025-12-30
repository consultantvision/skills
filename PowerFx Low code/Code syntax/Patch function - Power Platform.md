---
title: Patch function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:21:29 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:21:35 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Patch function in Power Platform is used to modify or create one or more records in a data source, or merge records outside of a data source.
- The function takes in a data source, a base record, and one or more change records, and returns the modified or created record.
- Patch can be used to update a single record, create a new record using the Defaults function, or merge multiple records, and it can also be used to modify or create multiple records with a single call.


Detailed summary


## Introduction and Applications of the Patch Function
- The Patch function in the Power Platform is used to modify or create one or more records in a data source, and it can also be used to merge records outside of a data source, making it a versatile tool for complex data operations.
- The function can be applied to various Power Platform components, including Canvas apps, Copilot Studio, Desktop flows, Model-driven apps, Power Platform CLI, and Dataverse functions, allowing for a wide range of use cases.
- To use the Patch function, you need to specify the data source and a base record, which can be obtained from a data source, a gallery's Items property, a context variable, or other paths, and then specify one or more change records that contain new property values to override the base record's values.

## Creating New Records with the Patch Function
- The Patch function can be used to create new records by combining it with the Defaults function, which generates a base record with default values, and then specifying new property values to override the default values, allowing for a single screen to be used for both creating and editing records.
- When using the Patch function, it is essential to note that the data source of the patch statement and the Defaults function must match to create a new record, and that the function returns the modified or created record, which may include automatically generated properties, but does not provide values for fields of related tables.

## Handling Related Tables and Error Management
- To access fields of related tables, a separate lookup is required, and to handle errors that may arise during data source updates, the IfError and IsError functions can be used with the return value from Patch, or the Errors function can be used to identify and examine issues.
- The Patch function can also be used to create or modify multiple records with a single call by providing a table of base records and a corresponding table of change records, allowing for efficient data operations, and it is related to other functions such as Update, Collect, and UpdateIf, which can be used for specific data modification tasks.

## Modifying or Creating Multiple Records
- The Patch function in Power Platform is used to modify or create records in a data source, and it returns a table with each record corresponding to the base and change records, with later property values overriding earlier ones.
- The Patch function can be used in three different ways: Patch( DataSource, BaseRecord, ChangeRecord1 [, ChangeRecord2, … ]), Patch( DataSource, BaseRecordsTable, ChangeRecordTable1 [, ChangeRecordTable2, … ]), and Patch( Record1, Record2 [, …]), where DataSource, BaseRecord, and ChangeRecord are required parameters.
- When using Patch with a DataSource, the function modifies or creates a record in the specified data source, and the DataSource of the patch statement and the DataSource of the Defaults function must match in order to create a new record.

## Syntax and Processing Order of the Patch Function
- The BaseRecord or BaseRecordsTable parameter specifies the record or table of records to modify or create, and the ChangeRecord or ChangeRecordTable parameter specifies the properties to modify in the BaseRecord or BaseRecordsTable.
- The Patch function processes records in the order from the beginning of the argument list to the end, with later property values overriding earlier ones, and it does not modify its arguments or records in any data sources.
- Examples of using the Patch function include modifying a record in a data source, creating a new record in a data source, and merging two records outside of a data source, as shown in the examples with the IceCream data source and the records with names "James" and "Jim".

## Examples of Patch Function Usage
- The use of the As or ThisRecord keyword in the formula can help avoid ambiguous evaluation context when using the Patch function.
- The Microsoft Power Apps platform currently interprets both the left-hand side OrderId and right-hand side A[@OrderId] as a field in the lookup scope, which can lead to ambiguous results, especially when using the ForAll and LookUp functions together.

## Avoiding Ambiguous Evaluation Contexts
- To avoid ambiguity and disambiguate the left-hand side, it is recommended to use the As operator or the ThisRecord function, especially when working with multiple scopes and the same data source or table.
- The As operator can be used to assign an alias to a table, such as '[dbo].[Orders1]' As B, allowing for clearer references to fields, like B.OrderId, and helping to prevent scope parameter collisions.
- Alternatively, the ThisRecord function can be used to achieve the same purpose, providing a way to explicitly reference the current record, such as ThisRecord.OrderId, and avoid ambiguity in the formula.
- The use of the As operator or ThisRecord function is crucial when working with formulas that involve multiple scopes, such as ForAll, Filter, and LookUp, on the same data source or table, to ensure that the scope parameters do not collide with the same field elsewhere.

## References and Further Reading
- For more information on the usage of the As operator and ThisRecord, users can refer to the Operators article, which provides detailed guidance on how to use these functions effectively in Microsoft Power Apps formulas.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-patch)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions

Modifies or creates one or more [records](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) in a [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources), or merges records outside of a data source.

Use the **Patch** function to modify records in complex situations, such as when you do updates that require no user interaction or use forms that span multiple screens.

To update records in a data source more easily for simple changes, use the **Edit form** control instead. When you add an **Edit form** control, you provide users with a form to fill in and then save the changes to a data source. For more information, see [Understand data forms](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-forms).

Watch this video to learn how to use the Patch function:

Use the **Patch** function to modify one or more records of a data source. The values of specific [fields](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#elements-of-a-table) are modified without affecting other properties. For example, this formula changes the phone number for a customer named Contoso:


`Patch( Customers, LookUp( Customers, Name = "Contoso" ), { Phone: "1-212-555-1234" } )`

Use **Patch** with the [Defaults](https://learn.microsoft.com/function-defaults) function to create records. Use this behavior to build a [single screen](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources) for both creating and editing records. For example, this formula creates a record for a customer named Contoso:

`Patch( Customers, Defaults( Customers ), { Name: "Contoso" } )`

Note

When you patch a collection using a record from a data source with default values, the patch operation updates the collection with both the specified patch values and the default values from the data source. The DataSource of the patch statement and the DataSource of the Defaults function must match in order to create a new record.

Even if you're not working with a data source, you can use **Patch** to merge two or more records. For example, this formula merges two records into one that identifies both the phone number and the location for Contoso:

`Patch( { Name: "Contoso", Phone: "1-212-555-1234" }, { Name: "Contoso", Location: "Midtown" } )`


To use this function with a data source, specify the data source, and then specify a base record:

- To modify a record, the base record needs to have come from a data source. The base record might have come through a gallery's [Items](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property, been placed in a [context variable](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-variables#use-a-context-variable), or come through some other path. But, you can trace the base record back to the data source. This is important as the record includes additional information to help find the record again for modification.

- To create a record, use the [Defaults](https://learn.microsoft.com/function-defaults) function to create a base record with default values.

Then specify one or more change records, each of which contains new property values that override property values in the base record. Change records are processed in order from the beginning of the argument list to the end, with later property values overriding earlier ones.


The return value of **Patch** is the record that you modified or created. If you created a record, the return value might include properties that the data source generated automatically. However, the return value doesn't provide a value for fields of a related table.

For example, you use `Set(MyAccount, Patch(Accounts, First(Account), 'Account Name': "[Example name](https://app.getrecall.ai/item/d6ae8536-fd01-4ce5-b69a-5fab3972b2b7)"));` and then `MyAccount.'Primary Contact'.'Full Name'`. You can't yield a full name in this case. Instead, to access the fields of a related table, use a separate lookup such as:

```
LookUp(Accounts, Account = MyAccount.Account).'Primary Contact'.'Full Name'
```

When you update a data source, one or more issues might arise. Use [IfError](https://learn.microsoft.com/function-iferror) and [IsError](https://learn.microsoft.com/function-iferror) with the return value from **Patch** to detect and respond to errors, as [Error Handling](https://learn.microsoft.com/error-handling) describes. You can also use the [Errors](https://learn.microsoft.com/function-errors) function to identify and examine issues, as [Working with Data Sources](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources) describes.


Related functions include the [Update](https://learn.microsoft.com/function-update-updateif) function to replace an entire record, and the [Collect](https://learn.microsoft.com/function-clear-collect-clearcollect) function to create a record. Use the [UpdateIf](https://learn.microsoft.com/function-update-updateif) function to modify specific properties of multiple records based on a condition.

**Patch** can also be used to create or modify multiple records with a single call.

Instead of passing a single base record, a table of base records can be provided in the second argument. Change records are provided in a table as well, corresponding one-for-one with the base records. The number of records in each change table must be the same as the number of records in the base table.

When using **Patch** in this manner, the return value is also a table with each record corresponding one-for-one with the base and change records.

Specify two or more records that you want to merge. Records are processed in the order from the beginning of the argument list to the end, with later property values overriding earlier ones.


**Patch** returns the merged record and doesn't modify its arguments or records in any data sources.

**Patch**( *DataSource*, *BaseRecord*, *ChangeRecord1* [, *ChangeRecord2*, … ])

- *DataSource* – Required. The data source that contains the record that you want to modify or will contain the record that you want to create.

- *BaseRecord* – Required. The record to modify or create. If the record came from a data source, the record is found and modified. If the result of [Defaults](https://learn.microsoft.com/function-defaults) is used, a record is created. The DataSource of the patch statement and the DataSource of the Defaults function must match in order to create a new record.

- *ChangeRecord(s)* – Required. One or more records that contain properties to modify in the *BaseRecord*. Change records are processed in order from the beginning of the argument list to the end, with later property values overriding earlier ones.

**Patch**( *DataSource*, *BaseRecordsTable*, *ChangeRecordTable1* [, *ChangeRecordTable2*, … ] )


- *DataSource* – Required. The data source that contains the records that you want to modify or will contain the records that you want to create.

- *BaseRecordTable* – Required. A table of records to modify or create. If the record came from a data source, the record is found and modified. If the result of [Defaults](https://learn.microsoft.com/function-defaults) is used, a record is created. The DataSource of the patch statement and the DataSource of the Defaults function must match in order to create a new record.

- *ChangeRecordTable(s)* – Required. One or more tables of records that contain properties to modify for each record of the *BaseRecordTable*. Change records are processed in order from the beginning of the argument list to the end, with later property values overriding earlier ones.

**Patch**( *Record1*, *Record2* [, …] )

- *Record(s)* - Required. At least two records that you want to merge. Records are processed in order from the beginning of the argument list to the end, with later property values overriding earlier ones.


In these examples, you'll modify or create a record in a data source, named **IceCream**, that contains the data in this [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) and automatically generates the values in the **ID** [column](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns):

![Example icecream.](https://learn.microsoft.com/media/function-patch/icecream.png)


<div class="joplin-table-wrapper"><table aria-label="Modify or create a record (in a data source)"><thead><tr><th>Formula</th><th>Description</th><th>Result</th></tr></thead><tbody><tr><td><strong>Patch(&nbsp;IceCream,LookUp( IceCream, Flavor = "Chocolate" ), {&nbsp;Quantity:&nbsp;400&nbsp;} )</strong></td><td>Modifies a record in the <strong>IceCream</strong> data source:<ul><li>The <strong>ID</strong> column of the record to modify contains the value of <strong>1</strong>. (The <strong>Chocolate</strong> record has that ID.)</li><li>The value in the <strong>Quantity</strong> column changes to <strong>400</strong>.</li></ul></td><td>{&nbsp;ID:&nbsp;1, Flavor:&nbsp;"Chocolate", Quantity:&nbsp;400 }<p>The <strong>Chocolate</strong> entry in the <strong>IceCream</strong> data source has been modified.</p></td></tr><tr><td><strong>Patch( IceCream, Defaults(&nbsp;IceCream ),


{&nbsp;Flavor:&nbsp;"Strawberry"&nbsp;}&nbsp;)</strong></td><td>Creates a record in the <strong>IceCream</strong> data source:<ul><li>The <strong>ID</strong> column contains the value <strong>3</strong>, which the data source generates automatically.</li><li>The <strong>Quantity</strong> column contains <strong>0</strong>, which is the default value for that column in the <strong>IceCream</strong> data source, as the <strong><a href="https://learn.[microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d).com/function-defaults" data-linktype="relative-path">Defaults</a></strong> function specifies.</li><li>The <strong>Flavor</strong> column contains the value of <strong>Strawberry</strong>.</li></ul></td><td>{ ID:&nbsp;3, Flavor:&nbsp;"Strawberry", Quantity:&nbsp;0&nbsp;}<p>The <strong>Strawberry</strong> entry in the <strong>IceCream</strong> data source has been created.</p></td></tr></tbody></table></div>

After the previous formulas have been evaluated, the data source ends with these values:

![Example icecream after.](https://learn.microsoft.com/media/function-patch/icecream-after.png)


<div class="joplin-table-wrapper"><table aria-label="Merge records (outside of a data source)"><thead><tr><th>Formula</th><th>Description</th><th>Result</th></tr></thead><tbody><tr><td><strong>Patch(&nbsp;{&nbsp;Name:&nbsp;"James",&nbsp;Score:&nbsp;90&nbsp;}, {&nbsp;Name:&nbsp;"Jim",&nbsp;Passed:&nbsp;true&nbsp;} )</strong></td><td>Merges two records outside of a data source:<ul><li>The values in the <strong>Name</strong> column of each record don't match. The result contains the value (<strong>Jim</strong>) in the record that's closer to the end of the argument list instead of the value (<strong>James</strong>) in the record that's closer to the start.</li><li>The first record contains a column (<strong>Score</strong>) that doesn't exist in the second record. The result contains that column with its value (<strong>90</strong>).</li><li>The second record contains a column (<strong>Passed</strong>)


that doesn't exist in the first record. The result contains that column with its value (<strong>true</strong>).</li></ul></td><td>{&nbsp;Name:&nbsp;"Jim", Score:&nbsp;90, Passed:&nbsp;true&nbsp;}</td></tr></tbody></table></div>

Using the **As** or **ThisRecord** keyword in the formula avoids ambiguous evaluation context.

In the example below, consider the first lookup in the `If` statement. `(OrderID = A[@OrderID])` is expected to compare the `OrderId` in the lookup scope with the `OrderId` of collection `A` in the `ForAll` scope. In this case, you likely want `A[@OrderId]` to be resolved as a local parameter. But it is ambiguous.

[Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) currently interprets both the left-hand side `OrderId` and right-hand side `A[@OrderId]` as a field in the lookup scope. Therefore, lookup will always find the first row in `[dbo].[Orders1]` because the condition is always true (that is, any row's `OrderId` is equal to itself.)


```
ClearCollect(
    A,
    Filter(
        '[dbo].[Orders1]',
        OrderId = 8888888
    )
);
ForAll(
    A,
    If(
        LookUp(
            '[dbo].[Orders1]',
            OrderId = A[@OrderId],
            "OK"
        ) = "OK",
        Patch(
            '[dbo].[Orders1]',
            LookUp(
                '[dbo].[Orders1]',
                OrderId = A[@OrderId]
            ),
            {
      OrderName: "val1"
       }
   ),
   Patch(
            '[dbo].[Orders1]',
            Defaults('[dbo].[Orders1]'),
            {
      OrderName: "val2"
       }
   )
    )
)
```

Whenever possible use the **As** operator or the **ThisRecord** to disambiguate the left-hand side. **As** is recommended for the above scenario.

When your formula uses multiple scopes with `ForAll`, `Filter`, and `Lookup` on the same data source or table, it is possible that the scope parameters may collide with a same field elsewhere. Therefore, it is recommended to use the **As** operator or **ThisRecord** to resolve the field name and avoid ambiguity.


For example, you can use the **As** operator to disambiguate in the example below.

```
ClearCollect(
    A,
    Filter(
        '[dbo].[Orders1]',
        OrderId = 8888888
    )
);
ForAll(
    A,
    If(
        LookUp(
            '[dbo].[Orders1]' As B,
            B.OrderId = A[@OrderId],
            "OK"
        ) = "OK",
        Patch(
            '[dbo].[Orders1]',
            LookUp(
                '[dbo].[Orders1]' As C,
                C.OrderId = A[@OrderId]
            ),
            {
      OrderName: "val1"
       }
   ),
   Patch(
            '[dbo].[Orders1]',
            Defaults('[dbo].[Orders1]'),
            {
      OrderName: "val2"
       }
   )
    )
)
```

Alternatively, you can use **ThisRecord** for the same purpose.


```
ClearCollect(
    A,
    Filter(
        '[dbo].[Orders1]',
        OrderId = 8888888
    )
);
ForAll(
    A,
    If(
        LookUp(
            '[dbo].[Orders1]',
            ThisRecord.OrderId = A[@OrderId],
            "OK"
        ) = "OK",
        Patch(
            '[dbo].[Orders1]',
            LookUp(
                '[dbo].[Orders1]',
                ThisRecord.OrderId = A[@OrderId]
            ),
            {
      OrderName: "val1"
       }
   ),
   Patch(
            '[dbo].[Orders1]',
            Defaults('[dbo].[Orders1]'),
            {
      OrderName: "val2"
       }
   )
    )
)
```

To learn more about the usage of **As** operator and **ThisRecord** see [Operators](https://learn.microsoft.com/operators) article.


