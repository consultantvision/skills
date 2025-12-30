---
title: Summarize function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 20:15:46 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 20:15:56 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Summarize function in Power Platform groups records of a table by one or more columns and summarizes the columns in each group.
- The function takes a table as an argument and returns a new table, without modifying the original table.
- The Summarize function can be delegated depending on the data source and complexity of the summarization formulas, supporting basic aggregate functions like Sum, Average, and CountRows.


Detailed summary

- The Summarize function in Power Platform is used to group records of a table and summarize the columns in the group, with the first argument being the table to operate on and the remaining arguments falling into two categories: group column names and summarization formulas.
- The group column names are used to specify which columns to group on, while the summarization formulas are used to summarize the columns in the ThisGroup table, which contains all the columns of the original table but is limited to just the records of one group at a time based on the group columns.
- Each summarization formula must be named with As for column name in the result table, and a table is a value in Power Apps that can be specified as an argument for a function or returned by a function, with the Summarize function not modifying a table but instead taking a table as an argument and returning a different table.
- The Summarize function can be delegated depending on the data source and complexity of the summarization formulas, with basic aggregate functions such as Sum, Average, Max, Min, CountRows, and Concat having a good chance of being delegated, and if complete delegation of a formula isn't possible, the authoring environment flags the portion that can't be delegated with a warning.
- The syntax of the Summarize function is Summarize( Table, GroupByColumnName1 [, GroupByColumnName2, ... ] [, SummarizeColumns As SummarizeNames, ...] ), where Table is the required table to be summarized, GroupByColumnNames are the required column names in Table by which to group records, and SummarizeColumns are the optional summarization formula over the ThisGroup table for each group.
- The Summarize function is demonstrated with sample data, such as the CityPopulations table, which is summarized by Country and includes summarization formulas for Total Population and Cities, and the Inventory table, which is summarized by Supplier and Fruit and includes a summarization formula for Average Price.
- The results of the Summarize function are shown in tables, with the CityPopulations table resulting in a table with Country/Region, Total Population, and Cities columns, and the Inventory table resulting in a table with Fruit, Supplier, and Average Price columns.
- The Summarize function is a powerful tool in Power Platform for grouping and summarizing data, and its delegation capabilities make it efficient for working with large datasets, with the ability to use basic aggregate functions and avoid functions and operators that can't be delegated to ensure optimal performance.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-summarize)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Copilot Studio Desktop flows Power Platform CLI Dataverse functions

Summarize [records](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) of a [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) by grouping on one or more [columns](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns).

Use the **Summarize** function to group records of a table and summarize the columns in the group.

The first argument to **Summarize** is the table to operate on. The remaining arguments can be in any order and fall into two categories:

- Group column names. Use these to specify which columns to group on.

- Summarization formulas. Use these to summarize the columns in the **ThisGroup** table. **ThisGroup** is a table which contains all the columns of the original table, but is limited to just the records of one group at a time based on the group columns. Each formula must be named with **As** for column name in the result table.


A table is a value in Power Apps, just like a string or a number. You can specify a table as an argument for a function, and a function can return a table. **Summarize** doesn't modify a table; instead it takes a table as an argument and returns a different table. For more information, see [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables).

**Summarize** can be delegated depending on the data source and complexity of the summarization formulas. Basic aggregate functions such as [Sum](https://learn.microsoft.com/function-aggregates), [Average](https://learn.microsoft.com/function-aggregates), [Max](https://learn.microsoft.com/function-aggregates), [Min](https://learn.microsoft.com/function-aggregates), [CountRows](https://learn.microsoft.com/function-table-counts), and [Concat](https://learn.microsoft.com/function-concatenate) have a good chance of being delegated.

If complete delegation of a formula isn't possible, the authoring environment flags the portion that can't be delegated with a warning. When possible, consider changing the formula to avoid functions and operators that can't be delegated.

For more information, see [delegation overview](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview).

**Summarize**( *Table*, *GroupByColumnName1* [, *GroupByColumnName2*, ... ] [, *SummarizeColumns* As *SummarizeNames*, ...] )

- *Table* - Required. Table to be summarized.


- *GroupByColumnNames* - At least one is required. The column names in *Table* by which to group records. These columns become columns in the resulting table.

- *SummarizeColumns* - Optional. Summarization formula over the **ThisGroup** table for each group.

- *SummarizeNames* - Required for each *SummarizeColumn*. Each summarized column must be explicitly named for the output table.

1. Create a table in your Power Fx host with this sample data:


```
Set( CityPopulations,
   Table(
        { City: "[London](https://app.getrecall.ai/item/1f677af0-0473-4a30-b32c-558b9164578b)",    Country: "[United Kingdom](https://app.getrecall.ai/item/c5920bd4-9424-44ed-90b8-23de458350a8)", Population: 8615000},
        { City: "[Berlin](https://app.getrecall.ai/item/b230126d-ff2f-4b6c-bca4-cf8025922473)",    Country: "[Germany](https://app.getrecall.ai/item/b1a83e52-5be1-45d2-9fac-692dce07e6a4)",        Population: 3562000},
        { City: "[Madrid](https://app.getrecall.ai/item/eef38f1c-687e-42ee-b497-1847b6d2ef46)",    Country: "[Spain](https://app.getrecall.ai/item/66d9add1-ad68-4bd4-9316-61746aa3b386)",          Population: 3165000},
        { City: "[Rome](https://app.getrecall.ai/item/2cbcd498-c37c-417e-991a-3d04ddafcaaa)",      Country: "[Italy](https://app.getrecall.ai/item/83402677-019e-493e-b656-3878473886a5)",          Population: 2874000},
        { City: "[Paris](https://app.getrecall.ai/item/023c3c80-552a-4f4e-9418-bf15a93ae838)",     Country: "[France](https://app.getrecall.ai/item/194594d3-d6c5-42cf-bad7-05f412a8a7ab)",         Population: 2273000},
        { City: "[Hamburg](https://app.getrecall.ai/item/f005ddb5-367d-49b9-98f3-ab7b3905fe49)",   Country: "Germany",        Population: 1760000},
        { City: "[Barcelona](https://app.getrecall.ai/item/02fd5ecf-4a23-42bf-8ca9-a44952021182)", Country: "Spain",          Population: 1602000},
        { City: "[Munich](https://app.getrecall.ai/item/50df80cd-5a99-4a31-97bf-dab630534709)",    Country: "[Germany](https://app.getrecall.ai/item/b1a83e52-5be1-45d2-9fac-692dce07e6a4)",        Population: 1494000},
        { City: "[Milan](https://app.getrecall.ai/item/e0a2030d-94c2-46d1-9369-83cbfa412a73)",     Country: "Italy",          Population: 1344000}
    )
)
```

2. Evaluate the following formula:

```
Summarize( CityPopulations, Country,
           Sum( ThisGroup, Population ) As 'Total Population',
           Concat( ThisGroup, City, ", " ) As Cities 
)
```

The result is this table:


| Country/Region | Total Population | Cities |
| --- | --- | --- |
| [United Kingdom](https://app.getrecall.ai/item/c5920bd4-9424-44ed-90b8-23de458350a8) | 8615000 | [London](https://app.getrecall.ai/item/1f677af0-0473-4a30-b32c-558b9164578b) |
| [Germany](https://app.getrecall.ai/item/b1a83e52-5be1-45d2-9fac-692dce07e6a4) | 6816000 | [Berlin](https://app.getrecall.ai/item/b230126d-ff2f-4b6c-bca4-cf8025922473), [Hamburg](https://app.getrecall.ai/item/f005ddb5-367d-49b9-98f3-ab7b3905fe49), [Munich](https://app.getrecall.ai/item/50df80cd-5a99-4a31-97bf-dab630534709) |
| [Spain](https://app.getrecall.ai/item/66d9add1-ad68-4bd4-9316-61746aa3b386) | 4767000 | [Madrid](https://app.getrecall.ai/item/eef38f1c-687e-42ee-b497-1847b6d2ef46), [Barcelona](https://app.getrecall.ai/item/02fd5ecf-4a23-42bf-8ca9-a44952021182) |
| [Italy](https://app.getrecall.ai/item/83402677-019e-493e-b656-3878473886a5) | 4218000 | [Rome](https://app.getrecall.ai/item/2cbcd498-c37c-417e-991a-3d04ddafcaaa), [Milan](https://app.getrecall.ai/item/e0a2030d-94c2-46d1-9369-83cbfa412a73) |
| [France](https://app.getrecall.ai/item/194594d3-d6c5-42cf-bad7-05f412a8a7ab) | 2273000 | [Paris](https://app.getrecall.ai/item/023c3c80-552a-4f4e-9418-bf15a93ae838) |

1. Create a table in your Power Fx host with this sample data:

```
Set( Inventory, 
   Table(
      {Supplier:"[Contoso](https://app.getrecall.ai/item/b7ab3b06-c890-4419-ab35-f76aa1660c49)",  Fruit:"Grapes",  Price:220, Purchase:Date(2015,10,1), Tags: ["Red","Seedless"]},
      {Supplier:"[Fabrikam](https://app.getrecall.ai/item/814ab062-ab7e-4e3f-b253-5d3179cafdec)", Fruit:"Lemons",  Price:31,  Purchase:Date(2015,10,1), Tags: ["Colombia"]},
      {Supplier:"Contoso",  Fruit:"Lemons",  Price:29,  Purchase:Date(2015,10,2), Tags: ["Peru"]},
      {Supplier:"Contoso",  Fruit:"Grapes",  Price:210, Purchase:Date(2015,10,2), Tags: ["Green","Seedless"]},
      {Supplier:"Fabrikam", Fruit:"Lemons",  Price:30,  Purchase:Date(2015,10,3), Tags: ["Mexico","Seedless"]},
      {Supplier:"Contoso",  Fruit:"Bananas", Price:12,  Purchase:Date(2015,10,3), Tags: ["Mexico"]}
   )
)
```

2. Evaluate the following formula:

```
Summarize( Inventory, Supplier, Fruit, Average( ThisGroup, Price ) As 'Average Price' )
```


| Fruit | Supplier | Average Price |
| --- | --- | --- |
| Grapes | [Contoso](https://app.getrecall.ai/item/b7ab3b06-c890-4419-ab35-f76aa1660c49) | 215 |
| Lemons | [Fabrikam](https://app.getrecall.ai/item/814ab062-ab7e-4e3f-b253-5d3179cafdec) | 30.5 |
| Lemons | Contoso | 29 |
| Bananas | Contoso | 12 |

