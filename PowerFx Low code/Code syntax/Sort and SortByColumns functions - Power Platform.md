---
title: Sort and SortByColumns functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 19:50:08 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 19:50:20 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `Sort` function sorts a table based on a formula, which is evaluated for each record and returns a number, string, or Boolean value.
- The `SortByColumns` function sorts a table based on one or more columns, with optional sort direction parameters.
- Both functions return a new sorted table without modifying the original table, and can be used with various data sources, including SharePoint and Excel.


Detailed summary


## Sort Function Overview
- The Sort function in Power Apps is used to sort a table based on a formula, which is evaluated for each record of the table and returns a number, string, or Boolean value to determine the sort order.
- The formula used in the Sort function can reference fields of the record being processed using ThisRecord or by simply referencing fields by name, and the As keyword can be used to name the record being processed for easier understanding and access to nested records.
- To sort a table by multiple columns, the Sort function can be embedded within another Sort function, such as sorting a Contacts table first by LastName and then by FirstName using the formula Sort( Sort( Contacts, LastName ), FirstName ).

## SortByColumns Function Overview
- The SortByColumns function is an alternative to the Sort function, allowing sorting based on one or more columns, with the parameter list specifying the column names and sort direction, and sorting is performed in the order of the parameters.
- The SortByColumns function can be combined with a Drop down or List box control to enable users to select which column to sort by, and it can also sort based on a single column table of values, such as sorting records by the name of a day of the week.
- Both the Sort and SortByColumns functions do not modify the original table, but instead return a new sorted table, and tables are treated as values in Power Apps that can be passed to and returned from functions.

## Non-Modifying Nature and Delegation
- Power Apps can delegate filter and sort operations to the data source, allowing for faster start times and access to large data sets, but delegation may not always be possible depending on the data source and operations used, and warnings will be flagged in the authoring environment if complete delegation is not possible.
- If delegation is not possible, Power Apps will pull down a small set of records to work on locally, and filter and sort functions will operate on this reduced set of records, which may not reflect the complete story and could be confusing to users.
- The Sort function has the syntax Sort( Table, Formula [, SortOrder ] ), where Table is the required table to sort, Formula is the required formula to evaluate for each record, and SortOrder is optional to specify the sort direction, with SortOrder.Ascending being the default value.

## Syntax of Sorting Functions
- The SortByColumns function has the syntax SortByColumns( Table, ColumnName1 [, SortOrder1, ColumnName2, SortOrder2, ... ] ), where Table is the required table to sort, ColumnName(s) are the required column names to sort on, and SortOrder(s) are optional to specify the sort direction, with SortOrder.Ascending being the default.
- The SortByColumns function in Power Platform is used to sort a table by one or more columns, with the general syntax being SortByColumns( Table, ColumnName, SortOrderTable ), where Table is the table to sort, ColumnName is the column name to sort on, and SortOrderTable is a single column table of values to sort by.

## Handling Column Names with Spaces and Examples
- When working with SharePoint and Excel data sources that contain column names with spaces, it is necessary to specify each space as "x0020", for example, "Column Name" should be specified as "Column_x0020_Name".
- The SortByColumns function can be used to sort tables in various ways, including sorting by a single column, sorting by multiple columns, and sorting by a custom order, as demonstrated in the examples using the IceCream data source.
- The IceCream data source is a collection that contains data about different ice cream flavors, including their quantity and on-order status, and is used to illustrate the different ways that the SortByColumns function can be used to sort and manipulate data.
- To use the SortByColumns function, it is necessary to create a collection, such as the IceCream data source, and then use the function to sort the data in the collection, as demonstrated in the examples, where the function is used to sort the IceCream collection by flavor, quantity, and on-order status.
- The SortByColumns function can also be used to sort data in a custom order, as demonstrated in the example where the function is used to sort the IceCream collection by flavor, with "Pistachio" and "Strawberry" appearing first, followed by other flavors.
- To run the examples, it is necessary to create the IceCream data source as a collection, add buttons to an app, and set the OnSelect property of the buttons to formulas that use the SortByColumns function to sort the data in the collection, and then preview the app and select the buttons to see the sorted data.
- The new collection is created with data sorted numerically by the Quantity column in ascending order, and then by the Flavor column in descending order, as a result of using the SortByColumns function.
- To test the new collection, the user is instructed to press F5, select the new button, and then press Esc to return to the previous state.
- The user can view all three collections by selecting Collections on the File menu, and then press Esc to return to the default workspace, allowing them to compare the different collections.
- The user is encouraged to repeat the process of creating a new collection, but with a different name and a different SortByColumns formula, chosen from the table of examples provided earlier in the section, to experiment with various sorting options.
- By following these steps, the user can gain hands-on experience with the SortByColumns function and its capabilities in sorting data in different ways, as discussed in the document titled 'Sort and SortByColumns functions - Power Platform'.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-sort)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages

Sorts a [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables).

The **Sort** function sorts a table based on a formula.

The formula is evaluated for each [record](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) of the table, and the results are used to sort the table. The formula must result in a number, a string, or a Boolean value; it can't result in a table or a record.

Fields of the record currently being processed are available within the formula. Use the [ThisRecord](https://learn.microsoft.com/operators#thisitem-thisrecord-and-as-operators) or simply reference fields by name as you would any other value. The [As](https://learn.microsoft.com/operators#thisitem-thisrecord-and-as-operators) can also be used to name the record being processed which can help make your formula easier to understand and make nested records accessible. For more information, see the examples below and [working with record scope](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#record-scope).


To sort first by one column and then by another, you embed a **Sort** formula within another. For example, you can use this formula to sort a **Contacts** table first by a **LastName** column and then by a **FirstName** column: **Sort( Sort( Contacts, LastName ), FirstName )**

The **SortByColumns** function can also be used to sort a table based on one or more columns.

The parameter list for **SortByColumns** provides the names of the columns to sort by and the sort direction per column. Sorting is performed in the order of the parameters (sorted first by the first column, then the second, and so on). Column names are specified as strings, requiring double quotes if directly included in the parameter list. For example, **SortByColumns( CustomerTable, "LastName" )**.

You can combine **SortByColumns** with a [Drop down](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-drop-down) or [List box](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-list-box) control to enable users to select which column to sort by.


In addition to sorting ascending or descending, **SortByColumns** can sort based on a single column table of values. For example, you can sort record based on the name of a day of the week by supplying **[ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ]** as the sort order. All records which have **Monday"** will come first, followed by **Tuesday**, and so on. Records found that do not appear in the sort table are put at the end of the list.

[Tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) are a value in Power Apps, just like a string or number. They can be passed to and returned from functions. **Sort** and **SortByColumn** don't modify a table; instead they take a table as an argument and return a new table that has been sorted. See [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) for more details.


When possible, Power Apps will delegate filter and sort operations to the data source and page through the results on demand. For example, when you start an app that shows a [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/controls/control-gallery) control filled with data, only the first set of records will be initially brought to the device. As the user scrolls, additional data is brought down from the data source. The result is a faster start time for the app and access to very large data sets.

However, delegation may not always be possible. Data sources vary on what functions and operators they support with delegation. If complete delegation of a formula isn't possible, the authoring environment will flag the portion that can't be delegated with a warning. When possible, consider changing the formula to avoid functions and operators that can't be delegated. The [delegation list](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview#delegable-data-sources) details which data sources and operations can be delegated.


If delegation is not possible, Power Apps will pull down only a small set of records to work on locally. Filter and sort functions will operate on a reduced set of records. What is available in the [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) may not be the complete story, which could be confusing to users.

See the [delegation overview](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview) for more information.

**Sort**( *Table*, *Formula* [, *SortOrder* ] )

- *Table* - Required. Table to sort.

- *Formula* - Required. This formula is evaluated for each record of the table, and the results are used to sort the table. You can reference columns within the table.

- *SortOrder* - Optional. Specify **SortOrder.Descending** to sort the table in descending order. **SortOrder.Ascending** is the default value.

**SortByColumns**( *Table*, *ColumnName1* [, *SortOrder1*, *ColumnName2*, *SortOrder2*, ... ] )

- *Table* - Required. Table to sort.

- *ColumnName(s)* - Required. The column names to sort on, as strings.


- *SortOrder(s)* - Optional. **SortOrder.Ascending** or **SortOrder.Descending**. **SortOrder.Ascending** is the default. If multiple *ColumnNames* are supplied, all but the last column must include a *SortOrder*.

Note

For [SharePoint](https://app.getrecall.ai/item/824cb046-25df-4d66-8e76-94cd0c23e337) and Excel data sources that contain column names with spaces, specify each space as **"_x0020_"**. For example, specify **"Column Name"** as **"Column_x0020_Name"**.

**SortByColumns**( *Table*, *ColumnName*, *SortOrderTable* )

- *Table* - Required. Table to sort.

- *ColumnName* - Required. The column name to sort on, as strings.

- *SortOrderTable* - Required. Single column table of values to sort by.

Note

For [SharePoint](https://app.getrecall.ai/item/824cb046-25df-4d66-8e76-94cd0c23e337) and Excel data sources that contain column names with spaces, specify each space as **"_x0020_"**. For example, specify **"Column Name"** as **"Column_x0020_Name"**.

For the following examples, we'll use the **IceCream** [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources), which contains the data in this table:

![IceCream example.](https://learn.microsoft.com/media/function-sort/icecream.png)


| Formula | Description | Result |
| --- | --- | --- |
| **Sort( IceCream, Flavor )**<br><br>**SortByColumns( IceCream, "Flavor" )** | Sorts **IceCream** by its **Flavor** column. The **Flavor** column contains strings, so the table is sorted alphabetically. By default, the sort order is ascending. | ![Alphabetically sorted.](https://learn.microsoft.com/media/function-sort/icecream-flavor.png)<br> |
| **Sort( IceCream, Quantity )**<br><br>**SortByColumns( IceCream, "Quantity" )** | Sorts **IceCream** by its **Quantity** column. The **Quantity** column contains numbers, so the table is sorted numerically. By default, the sort order is ascending. | ![Sorted numerically.](https://learn.microsoft.com/media/function-sort/icecream-quantity-asc.png)<br> |
| **Sort( IceCream, Quantity, SortOrder.Descending )**<br><br>**SortByColumns( IceCream, "Quantity", SortOrder.Descending )** | Sorts **IceCream** by its **Quantity** column. The **Quantity** column contains numbers, so the sort is done numerically. The sort order has been specified as descending. | ![Sorted numerically and descending.](https://learn.microsoft.com/media/function-sort/icecream-quantity-desc.png)<br> |
| **Sort( IceCream, Quantity + OnOrder )** | Sorts **IceCream** by the sum of its **Quantity** and **OnOrder** columns for each record individually. The sum is a number, so the table is sorted numerically. By default, the sort order is ascending. Since we are sorting by a formula and not by raw column values, there is no equivalent using **SortByColumns**. | ![Sorted numerically and ascending.](https://learn.microsoft.com/media/function-sort/icecream-total.png)<br> |
| **Sort( Sort( IceCream, OnOrder ), Quantity )**<br><br>**SortByColumns( IceCream, "OnOrder", SortOrder.Ascending, "Quantity", SortOrder.Ascending )** | Sorts **IceCream** first by its **OnOrder** column, and then by its **Quantity** column. Note that "Pistachio" rose above "Vanilla" in the first sort based on **OnOrder**, and then together they moved to their appropriate place based on **Quantity**. | ![Sorted with Pistachio above Vanilla.](https://learn.microsoft.com/media/function-sort/icecream-onorder-quantity.png)<br> |
| **SortByColumns( IceCream, "Flavor", [ "Pistachio", "Strawberry" ] )** | Sorts **IceCream** by it's **Flavor** column based on the single column table containing "Pistachio" and "Strawberry". Records which have a **Flavor** of "Pistachio" will appear first in the result, followed by records that contain "Strawberry". For values in the **Flavor** column that are not matched, such as "Vanilla", they will appear after the items that were matched. | ![Sorted with Pistachio above Strawberry.](https://learn.microsoft.com/media/function-sort/icecream-onflavor-sorttable.png)<br> |


To run these examples yourself, create the **IceCream** data source as a [collection](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources#collections):

1. Add a button, and set its [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula:**ClearCollect( IceCream, { Flavor: "Chocolate", Quantity: 100, OnOrder: 150 }, { Flavor: "Vanilla", Quantity: 200, OnOrder: 20 }, { Flavor: "Strawberry", Quantity: 300, OnOrder: 0 }, { Flavor: "Mint Chocolate", Quantity: 60, OnOrder: 100 }, { Flavor: "Pistachio", Quantity: 200, OnOrder: 10 } )**

2. Preview the app, select the button, and then press Esc to return to the default workspace.

3. Select **Collections** on the **File** menu to display the collection that you just created, and then press Esc to return to the default workspace.

4. Add another button, and set its [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula: **ClearCollect( SortByFlavor, Sort( IceCream, Flavor ) )**

The previous formula creates a second collection, named **SortByFlavor**, that contains the same data as **Ice Cream**. However, the new collection contains the data sorted alphabetically by the **Flavor** column in ascending order.


5. Press F5, select the new button, and then press Esc.

6. Select **Collections** on the **File** menu to display both collections, and then press Esc to return to the default workspace.

7. Repeat the last three steps, but change the name of the collection that you want to create, and replace the **Sort** formula with a different formula from the table of examples earlier in this section that uses **Sort**.

8. Add another button, and set its [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula: **ClearCollect( SortByQuantity, SortByColumns( IceCream, "Quantity", SortOrder.Ascending, "Flavor", SortOrder.Descending ) )**

The previous formula creates a third collection, named **SortByQuantity**, that contains the same data as **Ice Cream**. However, the new collection contains the data sorted numerically by the **Quantity** column in ascending order, and then by the **Flavor** column in descending order.

9. Press F5, select the new button, and then press Esc.

10. Select **Collections** on the **File** menu to display all three collections, and then press Esc to return to the default workspace.


11. Repeat the last three steps, but change the name of the collection that you want to create, and replace the **SortByColumns** formula with a different formula from the table of examples earlier in this section that uses **SortByColumns**.

