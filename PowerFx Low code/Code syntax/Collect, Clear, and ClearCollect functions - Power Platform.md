---
title: Collect, Clear, and ClearCollect functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:26:58 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:27:41 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `Collect` function adds records to a data source, which can be a single value, a record, or a table.
- The `Clear` function deletes all records from a collection, but leaves the columns intact, and has no return value.
- The `ClearCollect` function combines the `Clear` and `Collect` functions, deleting all records from a collection and then adding new records to it, returning the modified collection as a table.


Detailed summary

- The Collect, Clear, and ClearCollect functions in Power Platform are used to create and clear collections, and add records to any data source, with the Collect function adding records to a data source, which can be a single value, a record, or a table.
- The Clear function deletes all the records of a collection, but leaves the columns intact, and has no return value, while the ClearCollect function deletes all the records from a collection and then adds a different set of records to the same collection, returning the modified collection as a table.
- These functions can be used in various Power Platform applications, including Canvas apps, Desktop flows, Model-driven apps, Power Platform CLI, and Dataverse functions, but have limitations, such as not being delegable when used with a data source, which means only the first portion of the data source will be retrieved and then the function applied.
- The Collect function can add multiple records or tables to a data source, and if the data source does not already exist, a collection is created, with additional columns being created as needed, but collections do not automatically recalculate like formulas in Canvas apps, and their use can make an app harder to create and understand.
- The ClearCollect function can be used to clear a collection and then add new records to it, with the ability to add multiple records or tables, and the function returns the modified collection as a table, while the Clear function can only be used to clear a collection, and does not return any value.
- The functions have specific syntax and parameters, such as Collect( DataSource, Item, ... ), Clear( Collection ), and ClearCollect( Collection, Item, ... ), which require a data source or collection, and one or more records or tables to add to the data source, and the functions can be used in behavior formulas, but not in other types of formulas.
- Examples of using these functions include clearing and adding records to a collection, such as the IceCream collection, and handling record and table arguments to Collect and ClearCollect, with the ability to add multiple records or tables, and wrap tables in a record to add them as a cell of the record.
- It is also important to note that when using these functions with a data source, they may not be delegable, which means that only the first portion of the data source will be retrieved and then the function applied, and a warning may appear at authoring time to remind the user of this limitation and suggest switching to delegable alternatives where possible.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-clear-collect-clearcollect)
| Function | Applies to |
| --- | --- |
| **Clear** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> Canvas apps Desktop flows Power Platform CLI Dataverse functions |
| **ClearCollect** | Canvas apps Desktop flows Power Platform CLI |
| **Collect** | Canvas apps Desktop flows Model-driven apps Power Platform CLI Dataverse functions |

Creates and clears [collections](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources#collections) and adds [records](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) to any [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources).

The **Collect** function adds records to a data source. The items to be added can be:

- A single value: The value is placed in the [Value](https://learn.microsoft.com/function-value) field of a new record. All other properties are left [blank](https://learn.microsoft.com/function-isblank-isempty).

- A record: Each named property is placed in the corresponding property of a new record. All other properties are left blank.

- A [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables): Each record of the table is added as a separate record of the data source as described above. The table isn't added as a nested table to a record. To do this, wrap the table in a record first.

When used with a collection, additional [columns](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns) will be created as needed. The columns for other data sources are fixed by the data source and new columns can't be added.


If the data source doesn't already exist, a collection is created.

Collections are sometimes used to hold global variables or make a temporary copy of a data source. Canvas apps are based on formulas that automatically recalculate as the user interacts with an app. Collections don't enjoy this benefit and their use can make your app harder to create and understand. Before using a collection in this manner, review [working with variables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-variables).

You can also use the [Patch](https://learn.microsoft.com/function-patch) function to create records in a data source.

**Collect** returns the modified data source as a table. **Collect** can only be used in a [behavior formula](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth).

The **Clear** function deletes all the records of a collection. The columns of the collection will remain.

Note that **Clear** only operates on collections and not other data sources. You can use [RemoveIf](https://learn.microsoft.com/function-remove-removeif)**(** ***DataSource*****, true )** for this purpose. Use caution as this will remove all records from the data source's storage and can affect other users.

You can use the [Remove](https://learn.microsoft.com/function-remove-removeif) function to selectively remove records.


**Clear** has no return value. It can only be used in a behavior formula.

The **ClearCollect** function deletes all the records from a collection. And then adds a different set of records to the same collection. With a single function, **ClearCollect** offers the combination of **Clear** and then **Collect**.

**ClearCollect** returns the modified collection as a table. **ClearCollect** can only be used in a behavior formula.

When used with a data source, these functions can't be delegated. Only the first portion of the data source will be retrieved and then the function applied. The result may not represent the complete story. A warning may appear at authoring time to remind you of this limitation and to suggest switching to delegable alternatives where possible. For more information, see the [delegation overview](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview).

**Collect**( *DataSource*, *Item*, ... )

- *DataSource* – Required. The data source that you want to add data to. If it doesn't already exist, a new collection is created.


- *Item(s)* - Required. One or more records or tables to add to the data source.

**Clear**( *Collection* )

- *Collection* – Required. The collection that you want to clear.

**ClearCollect**( *Collection*, *Item*, ... )

- *Collection* – Required. The collection that you want to clear and then add data to.

- *Item(s)* - Required. One or more records or tables to add to the data source.

In these examples, you'll erase and add to a collection that's named **IceCream**. The data source begins with these contents:

![Sample data source.](https://learn.microsoft.com/media/function-clear-collect-clearcollect/icecream.png)


| Formula | Description | Result |
| --- | --- | --- |
| **ClearCollect( IceCream, { Flavor: "Strawberry", Quantity: 300 } )** | Clears all data from the **IceCream** collection and then adds a record that includes a quantity of strawberry ice cream. | ![Table with one record.](https://learn.microsoft.com/media/function-clear-collect-clearcollect/icecream-clearcollect.png)<br><br><br>The **IceCream** collection has also been modified. |
| **Collect( IceCream, { Flavor: "Pistachio", Quantity: 40 }, { Flavor: "Orange", Quantity: 200 } )** | Adds two records to the **IceCream** collection that includes a quantity of pistachio and orange ice cream. | ![Table with two records.](https://learn.microsoft.com/media/function-clear-collect-clearcollect/icecream-collect.png)<br><br><br>The **IceCream** collection has also been modified. |
| **Clear( IceCream )** | Removes all records from the **IceCream** collection. | ![Empty table.](https://learn.microsoft.com/media/function-clear-collect-clearcollect/icecream-clear.png)<br><br><br>The **IceCream** collection has also been modified. |

For step-by-step examples of how to create a collection, see [Create and update a collection](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/create-update-collection).

These examples examine how record and table arguments to **Collect** and **ClearCollect** are handled.


| Formula | Description | Result |
| --- | --- | --- |
| **ClearCollect( IceCream, { Flavor: "Chocolate", Quantity: 100 }, { Flavor: "Vanilla", Quantity: 200 } )** | Clear all data and then adds two records to the **IceCream** collection that includes a quantity of chocolate and vanilla ice cream. The records to be added are provided as individual arguments to the function. | The **IceCream** collection has also been modified. |
| **ClearCollect( IceCream, Table( { Flavor: "Chocolate", Quantity: 100 }, { Flavor: "Vanilla", Quantity: 200 } ) )** | Same as the previous example except that the records are combined in a table and passed in through a single argument. The contents of the table are extracted record by record before being added to the **IceCream** collection. | The **IceCream** collection has also been modified. |
| **ClearCollect( IceCream,{ MyFavorites: Table( { Flavor: "Chocolate", Quantity: 100 }, { Flavor: "Vanilla", Quantity: 200 } ) } )** | Same as the previous example except that the table is wrapped in a record. The records of the table aren't extracted and instead the entire table is added as a cell of the record. | ![Chocolate and Vanilla records added to collection modified with table wrapped in a record.](https://learn.microsoft.com/media/function-clear-collect-clearcollect/icecream-myfavorites.png)<br><br><br>The **IceCream** collection has also been modified. |

