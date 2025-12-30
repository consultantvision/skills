---
title: ForAll function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:57:41 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:57:52 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The ForAll function in Power Platform calculates values and performs actions for all records in a table, evaluating a formula for each record.
- The function returns a table with the results of each formula evaluation, in the same order as the input table, and can include functions that take action, such as modifying data sources.
- ForAll is not delegable, meaning it can't be used with large data sources, and its use can lead to performance issues and ordering dependencies, so alternatives like Filter and other functions should be considered when possible.


Detailed summary


## Introduction to the ForAll Function
- The ForAll function in Power Platform is used to calculate values and perform actions for all the records in a table, and it evaluates a formula for all the records in the specified table, allowing for calculations and actions such as modifying data or working with connections.
- The function can be used with the With function to evaluate a formula for a single record, and it can also be used with the Sequence function to iterate based on a count, making it a versatile tool for working with tables.
- The ForAll function returns a table with the results of each formula evaluation, in the same order as the input table, and the resulting table can have a single column if the result of the formula is a single value, or it can contain records with the same columns as the result record if the result is a record.
- The formula used in the ForAll function can include functions that take action, such as modifying records with the Patch and Collect functions, and it can also call methods on connections, allowing for a wide range of operations to be performed on the data.

## Limitations of the ForAll Function
- However, there are some limitations to the ForAll function, such as the inability to modify the table that is the subject of the function, and the potential for ordering dependencies due to parallel processing, which can be avoided by using functions like Collect, but with undefined order of record addition.
- Additionally, the ForAll function is not delegable, meaning it cannot be used with a data source in a way that allows the data source to handle the operation, and this can lead to incomplete results if the data source is large, so it is recommended to use delegable alternatives whenever possible.
- To avoid potential issues with the ForAll function, it is recommended to use it with caution and to consider alternative functions that can process multiple values at once, such as the Len function, which can process a table of text values and return a table of lengths, making it a more efficient and easier-to-read option in many cases.

## Practical Examples of ForAll Usage
- The ForAll function in Microsoft Power Apps is used to perform operations on all records of an input table, as demonstrated with the Squares data source, where it calculates the square root of the Value column and raises the Value column to the third power using the Sqrt and Power functions, respectively.
- The ForAll function is also used with the Expressions data source, which requires a Microsoft Translator connection, to translate the contents of the Value column into different languages, such as Spanish and French, using the MicrosoftTranslator.Translate function.

## Other Power Apps Functions and Delegation
- Power Apps provides various functions, including Filter, AddColumns, and Sort, to filter, shape, sort, and manipulate data, and it treats each table as a value that can flow through formulas and be consumed easily.
- The Collect function is used to copy data, but it is recommended to think carefully before making a copy, as it can lead to data falling out of sync, consuming computer memory and network bandwidth, and limiting the amount of data that can be moved, especially since copying cannot be delegated for most data sources.
- The Products data source is used to demonstrate how to work with a derivative table that includes only the items where more has been requested than is available, and for which an order needs to be placed, using the Filter and AddColumns functions to perform the comparison and subtraction operations, and the ShowColumns function to display the desired columns, all without making a copy of the result.
- The Filter function can be delegated, which is important for finding all the products that meet the criteria, even if it is only a few records out of a table of millions, and this approach avoids the downsides of making a copy, such as data falling out of sync and consuming resources.

## ForAll vs. Table-Shaping Functions
- The ForAll function in Power Platform can be used as an alternative to table-shaping functions like ShowColumns and AddColumns, which cannot be delegated and may have limitations when dealing with large datasets.
- Using the ForAll function may result in simpler formulas for some users, but it has its own limitations, such as not being delegable, which means only the first portion of the table is evaluated, potentially causing issues with large datasets.

## Implementation Approaches with ForAll
- The ForAll function can be used to capture results into a collection, but ClearCollect and Collect functions cannot be delegated, limiting the amount of data that can be moved in this manner.
- There are different approaches to using the ForAll function, including using it with Filter and ShowColumns to shape the table, or using it directly with Collect to perform the collection within the ForAll loop.

## Choosing the Right Approach for Dataset Size
- When using the ForAll function with Collect, it is not necessary to capture the result of the ForAll, as the Collect function calls made from within it return the NewOrder data source for all records, which could result in a large amount of data if captured.
- The choice of approach depends on the size of the dataset and the specific requirements of the application, with the ForAll function being suitable for small tables, but potentially problematic for large datasets due to its non-delegable nature.

## Conclusion and Considerations for Large Datasets
- The use of ForAll with Collect can be useful for caching a local copy of a table to reduce server latency and improve user interaction, but it is essential to consider the limitations and potential issues with large datasets.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-forall)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages

Calculates values and performs actions for all the [records](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) in a [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables).

The **ForAll** function evaluates a formula for all the records in a table. The formula can calculate a value and/or perform actions, such as modifying data or working with a connection. Use the [With](https://learn.microsoft.com/function-with) to evaluate the formula for a single record.

Use the [Sequence](https://learn.microsoft.com/function-sequence) with the **ForAll** function to iterate based on a count.

Fields of the record currently being processed are available within the formula. Use the [ThisRecord](https://learn.microsoft.com/operators#thisitem-thisrecord-and-as-operators) or simply reference fields by name as you would any other value. The [As](https://learn.microsoft.com/operators#thisitem-thisrecord-and-as-operators) can also be used to name the record being processed which can help make your formula easier to understand and make nested records accessible. For more information, see the examples below and [working with record scope](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#record-scope).


The result of each formula evaluation is returned in a table, in the same order as the input table.

If the result of the formula is a single value, the resulting table is a single-column table. If the result of the formula is a record, the resulting table contains records with the same columns as the result record.

If the result of the formula is a *blank* value, then there's no record in the result table for that input record. In this case, there are fewer records in the result table than the source table.

The formula can include functions that take action, such as modifying the records of a data source with the [Patch](https://learn.microsoft.com/function-patch) and [Collect](https://learn.microsoft.com/function-clear-collect-clearcollect) functions. The formula can also call methods on connections. Multiple actions can be performed per record by using the [;](https://learn.microsoft.com/operators). You can't modify the table that is the subject of the **ForAll** function.


When writing your formula, keep in mind that records can be processed in any order and, when possible, in parallel. The first record of the table may be processed after the last record.

Take care to avoid ordering dependencies. For this reason, you can't use the [UpdateContext](https://learn.microsoft.com/function-updatecontext), [Clear](https://learn.microsoft.com/function-clear-collect-clearcollect), and [ClearCollect](https://learn.microsoft.com/function-clear-collect-clearcollect) functions within a **ForAll** function because they could easily be used to hold variables that would be susceptible to this effect. You can use [Collect](https://learn.microsoft.com/function-clear-collect-clearcollect), but the order in which records are added is undefined.


Several functions that modify data sources, including **Collect**, **Remove**, and **Update**, return the changed data source as their return value. These return values can be large and consume significant resources if returned for every record of the **ForAll** table. You may also find that these return values aren't what you expect because **ForAll** can operate in parallel and may separate the side effects of these functions from obtaining their result. If the return value from **ForAll** isn't used, which is often the case with data modification functions, then the return value won't be created and there are no resource or order concerns. But if you're using the result of a **ForAll** and one of the functions that returns a data source, think carefully about how you structure the result and try it out first on small data sets.


Many functions in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) can process more than one value at a time by using a single-column table. For example, the **Len** function can process a table of text values, returning a table of lengths, in the same manner, that **ForAll** could. This can eliminate the need to use **ForAll** in many cases, can be more efficient, and is easier to read.

Another consideration is that **ForAll** isn't delegable while other functions may be, such as **Filter**.

When used with a data source, this function can't be delegated. Only the first portion of the data source will be retrieved and then the function applied. The result may not represent the complete story. A warning may appear at authoring time to remind you of this limitation and to suggest switching to delegable alternatives where possible. For more information, see the [delegation overview](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview).

**ForAll**(*Table*, *Formula*)

- *Table* - Required. Table to be acted upon.

- *Formula* - Required. The formula to evaluate for all records of the *Table*.


The following examples use the **Squares** [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources):

![Example of squares.](https://learn.microsoft.com/media/function-forall/squares.png)

To create this data source as a collection, set the **OnSelect** property of a **Button** control to this formula, open Preview mode, and then select the button:

`ClearCollect( Squares, [ "1", "4", "9" ] )`

| Formula | Description | Result |
| --- | --- | --- |
| **ForAll( Squares, Sqrt( Value ) )**<br><br>**Sqrt( Squares )** | For all the records of the input table, calculates the square root of the **Value** column. The **Sqrt** function can also be used with a single-column table, making it possible to perform this example without using **ForAll**. | ![Example of Sqrt.](https://learn.microsoft.com/media/function-forall/sqrt.png)<br> |
| **ForAll( Squares, Power( Value, 3 ) )** | For all the records of the input table, raises the **Value** column to the third power. The **Power** function doesn't support single-column tables. Therefore, **ForAll** must be used in this case. | ![Example of Power.](https://learn.microsoft.com/media/function-forall/power3.png)<br> |

The following examples use the **Expressions** [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources):

![Example of expressions.](https://learn.microsoft.com/media/function-forall/translate.png)

To create this data source as a collection, set the **OnSelect** property of a **Button** control to this formula, open Preview mode, and then select the button:


`ClearCollect( Expressions, [ "Hello", "Good morning", "Thank you", "Goodbye" ] )`

This example also uses a [Microsoft Translator](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/connections/connection-microsoft-translator) connection. To add this connection to your app, see the article about how to [manage connections](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/add-manage-connections).

| Formula | Description | Result |
| --- | --- | --- |
| **ForAll(Expressions, MicrosoftTranslator.Translate(Value, "es"))** | For all the records in the Expressions table, translate the contents of the **Value** column into Spanish (abbreviated "es"). | ![Example with value "es."](https://learn.microsoft.com/media/function-forall/translate-es.png)<br> |
| **ForAll(Expressions, MicrosoftTranslator.Translate(Value, "fr"))** | For all the records in the Expressions table, translate the contents of the **Value** column into French (abbreviated "fr"). | ![Example with value "fr."](https://learn.microsoft.com/media/function-forall/translate-fr.png)<br> |

Sometimes you need to filter, shape, sort, and manipulate data. [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) provides many functions for doing this, such as **Filter**, **AddColumns**, and **Sort**. Power Apps treats each table as a value, allowing it to flow through formulas and be consumed easily.


And sometimes you want to make a copy of this result for later use, or you want to move information from one data source to another. Power Apps provides the **Collect** function to copy data.

But before you make that copy, think carefully if it's needed. Many situations can be addressed by filtering and shaping the underlying data source on-demand with a formula. Some of the downsides to making a copy include:

- Two copies of the same information mean that one of them can fall out of sync.

- Making a copy can consume much of the computer memory, network bandwidth, and/or time.

- For most data sources, copying can't be delegated, limiting how much data can be moved.

The following examples use the **Products** [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources):

![Example of products data source.](https://learn.microsoft.com/media/function-forall/prod.png)

To create this data source as a collection, set the **OnSelect** property of a **Button** control to this formula, open Preview mode, and then select the button:


```
ClearCollect( Products,
    Table(
        { Product: "Widget",    'Quantity Requested': 6,  'Quantity Available': 3 },
        { Product: "Gadget",    'Quantity Requested': 10, 'Quantity Available': 20 },
        { Product: "Gizmo",     'Quantity Requested': 4,  'Quantity Available': 11 },
        { Product: "Apparatus", 'Quantity Requested': 7,  'Quantity Available': 6 }
    )
)
```

Our goal is to work with a derivative table that includes only the items where more has been requested than is available, and for which we need to place an order:

![Example of derivative table.](https://learn.microsoft.com/media/function-forall/prod-order.png)

We can perform this task in a couple of different ways, all of which produce the same result, with various pros and cons.

Don't make that copy! We can use the following formula anywhere we need:

```
// Table shaping on demand, no need for a copy of the result
ShowColumns(
    AddColumns(
        Filter( Products, 'Quantity Requested' > 'Quantity Available' ),
        "Quantity To Order", 'Quantity Requested' - 'Quantity Available'
    ),
    "Product",
    "Quantity To Order"
)
```


A [record scope](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#record-scope) is created by the **Filter** and **AddColumns** functions to perform the comparison and subtraction operations, respectively, with the **'Quantity Requested'** and **'Quantity Available'** fields of each record.

In this example, the **Filter** function can be delegated. This is important, as it can find all the products that meet the criteria, even if that is only a few records out of a table of millions. At this time, **ShowColumns** and **AddColumns** cannot be delegated, so the actual number of products that need to be ordered is limited. If you know the size of this result is always be relatively small, this approach is fine.

And because we didn't make a copy, there's no extra copy of the information to manage or fall out of date.

Another approach is to use the **ForAll** function to replace the table-shaping functions:

```
ForAll( Products,
    If( 'Quantity Requested' > 'Quantity Available',
        {
            Product: Product,
            'Quantity To Order': 'Quantity Requested' - 'Quantity Available'
        }
    )
)
```


This formula may be simpler for some people to read and write.

No part of the **ForAll** is delegable. Only the first portion of the **Products** table is evaluated, which could be a problem if this table is large. Because **Filter** could be delegated in the previous example, it could work better with large data sets.

In some situations, a copy of data may be required. You may need to move information from one data source to another. In this example, orders are placed through a **NewOrder** table on a vendor's system. For high-speed user interactions, you may want to cache a local copy of a table so that there's no server latency.

We use the same table shaping as the previous two examples, but we capture the result into a collection:

```
ClearCollect( NewOrder,
    ShowColumns(
        AddColumns(
            Filter( Products, 'Quantity Requested' > 'Quantity Available' ),
            "Quantity To Order", 'Quantity Requested' - 'Quantity Available'
        ),
        "Product",
        "Quantity To Order"
    )
)
```


ClearCollect( NewOrder,
ForAll( Products,
If( 'Quantity Requested' > 'Quantity Available',
{
Product: Product,
'Quantity To Order': 'Quantity Requested' - 'Quantity Available'
}
)
)
)

```

**ClearCollect** and **Collect** can't be delegated. As a result, the amount of data that can be moved in this manner is limited.

Finally, we can perform the **Collect** directly within the **ForAll**:

```

Clear( NewOrder );
ForAll( Products,
If( 'Quantity Requested' > 'Quantity Available',
Collect( NewOrder,
{
Product: Product,
'Quantity To Order': 'Quantity Requested' - 'Quantity Available'
}
)
)
)


```

Again, the **ForAll** function can't be delegated at this time. If our **Products** table is large, **ForAll** looks at the first set of records only and we may miss some products that need to be ordered. But for tables that we know are remain small, this approach is fine.

Note that we aren't capturing the result of the **ForAll**. The **Collect** function calls made from within it returns the **NewOrder** data source for all the records, which could add up to numerous data if we were capturing it.

See Map tables.
```

