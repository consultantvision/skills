---
title: Table function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 19:59:08 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 19:59:14 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Table function in Power Platform creates a temporary table from an argument list of records or tables.
- The resulting table's columns are the union of all columns from the argument records and tables, with blank values added where necessary.
- The Table function can be used to create a temporary table that can be specified as an argument for another function, visualized in a gallery, or embedded in another table.


Detailed summary

- The Table function in Power Platform is used to create a temporary table from an argument list of records or tables, and it can be applied to various platforms such as Canvas apps, Copilot Studio, Desktop flows, Model-driven apps, Power Platform CLI, and Dataverse functions.
- The result table's columns are the union of all the columns from all the argument records and tables, and a blank value is added to any column for which a record doesn't include a value, allowing for flexible table creation.
- The Table function does not create a permanent table, but instead returns a temporary table made of its arguments, which can be specified as an argument for another function, visualized in a gallery, or embedded in another table, providing versatility in its usage.
- Tables in Power Apps are treated as values, similar to strings or numbers, and can be specified as arguments for functions or returned as results, enabling seamless integration with other functions and features.
- The Table function can be used with the syntax Table( RecordOrTable1 [, RecordOrTable2, ... ] ) or Table( Dynamic ), where RecordOrTable(s) are the records or tables to add to the result table, and Dynamic is a dynamic value that represents a table or array.
- The function can also be used to create a single-column table with the [ value1, value2, ... ] syntax, providing an alternative way to create tables with a single column.
- Examples of using the Table function include setting the Items property of a listbox to a formula that returns a table of colors, adding a text gallery with a table of items, and combining standard sizes with extended sizes into a single table, demonstrating its practical applications.
- The resulting table can be used in various ways, such as being displayed in a gallery or listbox, and its columns and records can be customized and extended as needed, making it a powerful tool in Power Apps.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-table)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions

Creates a temporary [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables).

The **Table** function creates a table from an argument list of [records](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) or tables.

The result table's [columns](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns) are the union of all the columns from all the argument records and tables. A *blank* value is added to any column for which a record doesn't include a value.

A table is a value in Power Apps, just like a string or a number. You can specify a table as an argument for a function, and functions can return a table as a result. **Table** doesn't create a permanent table. Instead it returns a temporary table made of its arguments. You can specify this temporary table as an argument for another function, visualize it in a gallery, or embed it in another table. Fore more information, see [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables).

You can also create a single-column table with the **[ value1, value2, ... ]** syntax.

**Table**( *RecordOrTable1* [, *RecordOrTable2*, ... ] )


- *RecordOrTable(s)* - Required. The records or table to add to the result table. If a table is provided, the records of the table are added to the resulting table as if they had been individually added.

**Table**( *Dynamic* )

- *Dynamic* - Required. [Dynamic](https://learn.microsoft.com/untyped-object) value that represents a table or array. Acceptable values are dependent on the untyped provider. For [JSON](https://learn.microsoft.com/function-parsejson), the dynamic value is expected to be a [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) array. Regardless of the content type of the Untyped array, the resulting table is a single-column table of dynamic values.

- Set the [Items](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of a listbox to this formula:

```
Table( {Color: "red"}, {Color: "green"}, {Color: "blue" } )
```

The listbox shows each color as an option.

- Add a text gallery, and set its [Items](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this function:

```
Table( {Item: "Violin123", Location:"France", Owner:"Fabrikam"}, {Item:"Violin456", Location:"Chile"} )
```

The gallery shows two records, both of which contain the name and location of an item. Only one record contains the name of the owner.


- This formula combines standard sizes with extended sizes into a single table

```
Table( { Value: "XS" }, [ "S", "M", "L" ], { Value: "XL" } )
```

