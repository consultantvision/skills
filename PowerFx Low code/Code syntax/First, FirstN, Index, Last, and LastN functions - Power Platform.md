---
title: First, FirstN, Index, Last, and LastN functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:57:05 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:57:34 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The First function returns the first record of a table.
- The FirstN and LastN functions return a set of records from a table, with the number of records specified by the second argument.
- The Index function returns a record based on its ordered position in the table, with record numbering starting at 1.


Detailed summary

- The First, FirstN, Index, Last, and LastN functions in Power Platform are used to return the first, last, or a specific record, or a set of first or last records, from a table, with the First function returning the first record, the FirstN function returning the first set of records, the Last function returning the last record, the LastN function returning the last set of records, and the Index function returning a record based on its ordered position in the table.
- The First, Index, and Last functions return a single record, while the FirstN and LastN functions return a table, even if only a single record is specified, and the Index function returns an error if the requested record index is less than 1, greater than the number of records in the table, or the table is empty.
- When used with a data source, these functions cannot be delegated, meaning that only the first portion of the data source will be retrieved and then the function applied, which may not represent the complete story, and a warning may appear at authoring time to remind the user of this limitation and suggest switching to delegable alternatives where possible.
- The functions have specific syntax and arguments, such as the Table argument, which is required for all functions, and the NumberOfRecords argument, which is optional for the FirstN and LastN functions, and the RecordIndex argument, which is required for the Index function and must be a number that corresponds to the position of the record in the table.
- Examples of using these functions are provided, including using the IceCream data source, which contains a table with different flavors and quantities of ice cream, and demonstrating how to use the First, Last, Index, FirstN, and LastN functions to return specific records or sets of records from the table.
- The functions can also be used to extract specific columns from a record, such as the Quantity column, and can return errors if the requested record index is out of range, as shown in the example where the Index function is used to request a record that is beyond the bounds of the table.


Detailed summary

- The First, FirstN, Index, Last, and LastN functions in Power Platform are used to return the first, last, or a specific record, or a set of first or last records, from a table, with the First function returning the first record, the FirstN function returning the first set of records, the Last function returning the last record, the LastN function returning the last set of records, and the Index function returning a record based on its ordered position in the table.
- The First, Index, and Last functions return a single record, while the FirstN and LastN functions return a table, even if only a single record is specified, and the Index function returns an error if the requested record index is less than 1, greater than the number of records in the table, or the table is empty.
- When used with a data source, these functions cannot be delegated, meaning that only the first portion of the data source will be retrieved and then the function applied, which may not represent the complete story, and a warning may appear at authoring time to remind the user of this limitation and suggest switching to delegable alternatives where possible.
- The functions have specific syntax and arguments, such as the Table argument, which is required for all functions, and the NumberOfRecords argument, which is optional for the FirstN and LastN functions, and the RecordIndex argument, which is required for the Index function and must be a number that corresponds to the position of the record in the table.
- Examples of using these functions are provided, including using the IceCream data source, which contains a table with different flavors and quantities of ice cream, and demonstrating how to use the First, Last, Index, FirstN, and LastN functions to return specific records or sets of records from the table.
- The functions can also be used to extract specific columns from a record, such as the Quantity column, and can return errors if the requested record index is out of range, as shown in the example where the Index function is used to request a record that is beyond the bounds of the table.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-first-last)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages

Returns the first, last, or a specific [record](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records), or a set of first or last records, from a table.

The **First** function returns the first record of a [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables).

The **FirstN** function returns the first set of records of a table; the second argument specifies the number of records to return.

The **Last** function returns the last record of a table.

The **LastN** function returns the last set of records of a table; the second argument specifies the number of records to return.

The **Index** function returns a record of a table based on its ordered position in the table. Record numbering begins with 1 so `First( table )` returning the same record as `Index( table, 1 )`. **Index** returns an error if the requested record index is less than 1, greater than the number of records in the table, or the table is empty.


**First**, **Index**, and **Last** return a single record. **FirstN** and **LastN** return a table, even if you specify only a single record.

When used with a data source, these functions can't be delegated. Only the first portion of the data source will be retrieved and then the function applied. The result may not represent the complete story. A warning may appear at authoring time to remind you of this limitation and to suggest switching to delegable alternatives where possible. For more information, see the [delegation overview](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview).

For example, when used with a data source containing a large table with 1 million records, **Last** is subject to the non-delegation limit and doesn't return the last record of the entire data source. Likewise, using **Index** to request a record in the middle of 1 million records results in an error because the index is out of range based on the non-delegation limit.

**First**( *Table* )**Last**( *Table* )

- *Table* - Required. Table to operate on.

**FirstN**( *Table* [, *NumberOfRecords* ] )**LastN**( *Table* [, *NumberOfRecords* ] )


- *Table* - Required. Table to operate on.

- *NumberOfRecords* - Optional. Number of records to return. If you don't specify this argument, the function returns one record.

**Index**( *Table*, *RecordIndex* )

- *Table* - Required. Table to operate on.

- *RecordIndex* - Required. The index of the record to return. Record numbering begins with 1.

For the following examples, we use the **IceCream** [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources), which contains the data in this table:

![IceCream example.](https://learn.microsoft.com/media/function-first-last/icecream.png)

This table can be placed in a collection with this formula (put in the OnStart formula for a Button control and press the button):

```
Collect( IceCream, Table( { Flavor: "Chocolate", Quantity: 100 },
                          { Flavor: "Vanilla", Quantity: 200 },
                          { Flavor: "Strawberry", Quantity: 300 },
                          { Flavor: "Mint Chocolate", Quantity: 60 },
                          { Flavor: "Pistachio", Quantity: 200 } ) )
```


| Formula | Description | Result |
| --- | --- | --- |
| **First( IceCream )** | Returns the first record of **IceCream**. | { Flavor: "Chocolate", Quantity: 100 } |
| **Last( IceCream )** | Returns the last record of **IceCream**. | { Flavor: "Pistachio", Quantity: 200 } |
| **Index( IceCream, 3 )** | Returns the third record of **IceCream**. | { Flavor: "Strawberry", Quantity: 300 } |
| **FirstN( IceCream, 2 )** | Returns a table containing the first two records of **IceCream**. | ![Table containing the records for Chocolate and Vanilla](https://learn.microsoft.com/media/function-first-last/icecream-first2.png)<br> |
| **LastN( IceCream, 2 )** | Returns a table containing the last two records of **IceCream**. | ![Table containing the records for Mint Chocolate and Pistachio](https://learn.microsoft.com/media/function-first-last/icecream-last2.png)<br> |
| **Index( IceCream, 4 ).Quantity** | Returns the fourth record of the table, and extracts the Quantity column. | 60 |
| **Index( IceCream, 10 )** | Returns an error since the record requested is beyond the bounds of the table. | *Error* |

