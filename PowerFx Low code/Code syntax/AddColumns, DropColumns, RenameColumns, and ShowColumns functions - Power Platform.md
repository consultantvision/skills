---
title: AddColumns, DropColumns, RenameColumns, and ShowColumns functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:14:01 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:14:56 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The AddColumns, DropColumns, RenameColumns, and ShowColumns functions in Power Platform shape a table or record by adding, dropping, renaming, and selecting its columns.
- These functions do not modify the original table, but instead return a new table with the applied transformation.
- The AddColumns function adds a calculated column to a table, DropColumns excludes columns, RenameColumns renames columns, and ShowColumns includes specific columns.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-table-shaping)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions

Shapes a [table or record](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) by adding, dropping, renaming, and selecting its [columns](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns).

The [ForAll](https://learn.microsoft.com/function-forall) function can also be used to shape a table, by returning a table of new records created from existing columns.

These functions shape a table or record by adjusting its columns:

- Reduce a table or record that contains multiple columns down to a single column for use with single-column functions, such as [Lower](https://learn.microsoft.com/function-lower-upper-proper) or [Sqrt](https://learn.microsoft.com/function-numericals).

- Add a calculated column to a table or record (for example, a **Total Price** column that shows the results of multiplying **Quantity** by **Unit Price**).

- Rename a column to something more meaningful, for display to users or for use in formulas.

A table is a value in Power Apps, just like a string or a number. You can specify a table as an argument in a formula, and functions can return a table as a result.

Note


The functions that this topic describes don't modify the original table. Instead, they take that table as an argument and return a new table with a transform applied. For more information, see [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables).

You can't modify the columns of a [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources) by using these functions. You must modify the data at its source. You can add columns to a [collection](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources#collections) with the [Collect](https://learn.microsoft.com/function-clear-collect-clearcollect) function. For more information, see [working with data sources](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources).

The **AddColumns** function adds a column to a table or record, and a formula defines the values in that column. Existing columns remain unmodified.

The formula is evaluated for the provided record, or for each record of the provided table.


Fields of the record currently being processed are available within the formula. Use the [ThisRecord](https://learn.microsoft.com/operators#thisitem-thisrecord-and-as-operators) or simply reference fields by name as you would any other value. The [As](https://learn.microsoft.com/operators#thisitem-thisrecord-and-as-operators) can also be used to name the record being processed which can help make your formula easier to understand and make nested records accessible. For more information, see the examples below and [working with record scope](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#record-scope).

The **DropColumns** function excludes columns from a table or record. All other columns remain unmodified. **DropColumns** excludes columns, and **ShowColumns** includes columns.


Use the **RenameColumns** function to rename one or more columns of a table or record by providing at least one argument pair that specifies the name of a column that the table or record contains (the old name, which you want to replace) and the name of a column that the table or record doesn't contain (the new name, which you want to use). The old name must already exist in the table or record, and the new name must not exist. Each column name may appear only once in the argument list as either an old column name or a new column name. To rename a column to an existing column name, first drop the existing column with **DropColumns**, or rename the existing column out of the way by nesting one **RenameColumns** function within another.

The **ShowColumns** function includes columns of a table or record and drops all other columns. You can use **ShowColumns** to create a single-column table or record from a multi-column table or record. **ShowColumns** includes columns, and **DropColumns** excludes columns.


For all these functions, the result is a new table or record with the transform applied. The original table or record isn't modified. You can't modify an existing table or record with a formula. [SharePoint](https://app.getrecall.ai/item/824cb046-25df-4d66-8e76-94cd0c23e337), [Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d) Dataverse, SQL Server, and other data sources provide tools for modifying the columns of lists and tables, which are often referred to as the schema. The functions in this topic only transform an input table or record, without modifying the original, into an output table or record for further use.

The arguments to these functions support delegation. For example, a **Filter** function used as an argument to pull in related records searches through all listings, even if the **'[dbo].[AllListings]'** data source contains a million rows:

```
AddColumns( RealEstateAgents,
   Listings,
   Filter(  '[dbo].[AllListings]', ListingAgentName = AgentName )
)
```


However, the output of these functions is subject to the [non-delegation record limit](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview#non-delegable-limits). In this example, only 500 records are returned even if the **RealEstateAgents** data source has 501 or more records.

If you use **AddColumns** in this manner, **Filter** must make separate calls to the data source for each of those first records in **RealEstateAgents**, which causes lots of network chatter. If **[dbo](.[AllListings]** is small enough and doesn't change often. You can call the **Collect** function in [OnStart](https://learn.microsoft.com/signals#app) to cache the data source in your app when it starts. As an alternative, you could restructure your app so that you pull in the related records only when the user asks for them.

Note


In Power Apps prior to version 3.24042, column names were specified with a text string using double quotes, and if connected to a data source they also needed to be logical names. For example, the logical name **"cr43e_name"** with double quotes was used instead of the display name **Name** without quotes. For [SharePoint](https://app.getrecall.ai/item/824cb046-25df-4d66-8e76-94cd0c23e337) and Excel data sources that contain column names with spaces, each space was specified with **"_x0020_"**, for example **"Column Name"** as **"Column_x0020_Name"**. After this version, all apps were automatically updated to the new syntax described in this article.

**AddColumns**( *TableOrRecord*, *ColumnName1*, *Formula1* [, *ColumnName2*, *Formula2*, ... ] )

- *TableOrRecord* - Required. Table or record to operate on.

- *ColumnName(s)* - Required. Names of the columns to add.

- *Formula(s)* - Required. Formulas to evaluate for each record. The result is added as the value of the corresponding new column. You can reference other columns of the table or record in this formula.


**DropColumns**( *TableOrRecord*, *ColumnName1* [, *ColumnName2*, ... ] )

- *TableOrRecord* - Required. Table or record to operate on.

- *ColumnName(s)* - Required. Names of the columns to drop.

**RenameColumns**( *TableOrRecord*, *OldColumnName1*, *NewColumnName1* [, *OldColumnName2*, *NewColumnName2*, ... ] )

- *TableOrRecord* - Required. Table or record to operate on.

- *OldColumnName(s)* - Required. Names of the columns to rename from the original table or record. This element appears first in the argument pair (or first in each argument pair if the formula includes more than one pair).

- *NewColumnName(s)* - Required. Replacement names. This element appears last in the argument pair (or last in each argument pair if the formula includes more than one pair).

**ShowColumns**( *TableOrRecord*, *ColumnName1* [, *ColumnName2*, ... ] )

- *TableOrRecord* - Required. Table or record to operate on.

- *ColumnName(s)* - Required. Names of the columns to include.

The examples in this section use the **IceCreamSales** data source, which contains the data in this table:

![IceCream example.](https://learn.microsoft.com/media/function-table-shaping/icecream.png)


None of these examples modify the **IceCreamSales** data source. Each function transforms the value of the data source as a table and returns that value as the result.


<div class="joplin-table-wrapper"><table aria-label="Examples"><thead><tr><th>Formula</th><th>Description</th><th>Result</th></tr></thead><tbody><tr><td><strong>AddColumns( IceCreamSales, Revenue, UnitPrice * QuantitySold )</strong></td><td>Adds a <strong>Revenue</strong> column to the result. For each record, <strong>UnitPrice * QuantitySold</strong> is evaluated, and the result is placed in the new column.</td><td><img src="https://learn.[microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d).com/media/function-table-shaping/icecream-add-revenue.png" alt="Result with Srawberry, Chocolate and Vanilla." data-linktype="relative-path"></td></tr><tr><td><strong>DropColumns( IceCreamSales, UnitPrice )</strong></td><td>Excludes the <strong>UnitPrice</strong> column from the result. Use this function to exclude columns, and use <strong>ShowColumns</strong> to include them.</td><td><img src="https://learn.microsoft.com/media/function-table-shaping/icecream-drop-price.png" alt="Result with


Strawberry, Chocolate, Vanilla having only QuantitySold column." data-linktype="relative-path"></td></tr><tr><td><strong>ShowColumns( IceCreamSales, Flavor )</strong></td><td>Includes only the <strong>Flavor</strong> column in the result. Use this function include columns, and use <strong>DropColumns</strong> to exclude them.</td><td><img src="https://learn.microsoft.com/media/function-table-shaping/icecream-select-flavor.png" alt="Only Flavor column." data-linktype="relative-path"></td></tr><tr><td><strong>RenameColumns( IceCreamSales, UnitPrice, Price)</strong></td><td>Renames the <strong>UnitPrice</strong> column in the result.</td><td><img src="https://learn.microsoft.com/media/function-table-shaping/icecream-rename-price.png" alt="Result with Flavor, Price and Revenue." data-linktype="relative-path"></td></tr><tr><td><strong>RenameColumns( IceCreamSales, UnitPrice, Price, QuantitySold, Number)</strong></td><td>Renames the


<strong>UnitPrice</strong> and <strong>QuantitySold</strong> columns in the result.</td><td><img src="https://learn.[microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d).com/media/function-table-shaping/icecream-rename-price-quant.png" alt="Result with 3 IceCreams and columns as Flavor, Price, Revenue." data-linktype="relative-path"></td></tr><tr><td><strong>DropColumns(RenameColumns(AddColumns( IceCreamSales, Revenue,UnitPrice * QuantitySold ),UnitPrice, Price ),Quantity )</strong></td><td>Performs the following table transforms in order, starting from the inside of the formula:<ol><li>Adds a <strong>Revenue</strong> column based on the per record calculation of <strong>UnitPrice * Quantity</strong>.</li><li>Renames <strong>UnitPrice</strong> to <strong>Price</strong>.</li><li>Excludes the <strong>Quantity</strong> column.</li></ol>Order is important, for example we can't calculate with <strong>UnitPrice</strong> after it's renamed.</td><td><img


src="https://learn.microsoft.com/media/function-table-shaping/icecream-all-transforms.png" alt="IceCream example for unit price." data-linktype="relative-path"></td></tr></tbody></table></div>

Let's try some of the examples from earlier in this article.

1. Create a collection by adding a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control and setting its **OnSelect** property to this formula:

```
ClearCollect( IceCreamSales,
   Table(
       { Flavor: "Strawberry", UnitPrice: 1.99, QuantitySold: 20 },
       { Flavor: "Chocolate", UnitPrice: 2.99, QuantitySold: 45 },
       { Flavor: "Vanilla", UnitPrice: 1.50, QuantitySold: 35 }
   )
)
```

2. Run the formula by selecting the button while holding down the Alt key.

3. Add a second **Button** control, set its **OnSelect** property to this formula, and then run it:

```
ClearCollect( FirstExample,
   AddColumns( IceCreamSales, Revenue, UnitPrice * QuantitySold )
)
```

4. On the **File** menu, select **Collections**, and then select **IceCreamSales** to show that collection.


As this graphic shows, the second formula didn't modify this collection. The **AddColumns** function used **IceCreamSales** as a read-only argument; the function didn't modify the table to which that argument refers.

![Collection viewer showing three records of the Ice Cream Sales collection that doesn't include a Revenue column.](https://learn.microsoft.com/media/function-table-shaping/ice-cream-sales-collection.png)

5. Select **FirstExample**.

As this graphic shows, the second formula returned a new table with the added column. The **ClearCollect** function captured the new table in the **FirstExample** collection, adding something to the original table as it flowed through the function without modifying the source:

![Collection viewer showing three records of the First Example collection that includes a new Revenue column.](https://learn.microsoft.com/media/function-table-shaping/first-example-collection.png)

See [Map columns](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/map-component-input-fields#map-columns).

