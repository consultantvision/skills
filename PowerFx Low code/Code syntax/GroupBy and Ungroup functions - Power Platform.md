---
title: GroupBy and Ungroup functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:57:56 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:58:15 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `GroupBy` function groups records of a table based on one or more columns, while the `Ungroup` function reverses this process.
- `GroupBy` returns a table with a nested table of the remaining columns, and `Ungroup` breaks this into separate records.
- You can use `GroupBy` to aggregate results, and then use `AddColumns` with aggregate functions like `Sum` and `Average` to add new columns, and `DropColumns` to remove the group table.


Detailed summary

- The GroupBy and Ungroup functions in Power Platform are used to group and ungroup records of a table, with GroupBy returning a table with records grouped together based on the values in one or more columns, and Ungroup reversing this process by breaking grouped records into separate records.
- The GroupBy function takes a table as an argument and returns a different table, with the syntax GroupBy( Table, ColumnName1 [, ColumnName2, ... ], GroupColumnName ), where Table is the table to be grouped, ColumnName(s) are the column names by which to group records, and GroupColumnName is the column name for the storage of record data not in the ColumnName(s).
- The Ungroup function also takes a table as an argument and returns a different table, with the syntax Ungroup( Table, GroupColumnName ), where Table is the table to be ungrouped and GroupColumnName is the column that contains the record data setup with the GroupBy function.
- These functions can be used to modify a table, such as removing a group of records by using GroupBy, Filter, and Ungroup, or aggregating results based on a grouping by using GroupBy, AddColumns with aggregate functions like Sum or Average, and DropColumns.
- The order of records in the original table is preserved by Ungroup whenever possible, but this may not always be the case, such as when the original table contains blank records.
- In Microsoft Power Apps, tables are values that can be specified as arguments for functions or returned by functions, and GroupBy and Ungroup do not modify the original table, instead returning a new table.
- The functions can be used in various scenarios, such as grouping cities by country, filtering countries based on certain criteria, and calculating the sum of city populations for each country.
- The AddColumns function can be used to add a new column to a table, such as calculating the sum of city populations for each country, and the DropColumns function can be used to remove columns from a table, such as removing the sub-tables after calculating the sum.
- The examples provided demonstrate how to use these functions in Power Apps, including creating collections, grouping and ungrouping records, filtering data, and calculating aggregate values.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-groupby)
| Function | Applies to |
| --- | --- |
| **GroupBy** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> Canvas apps Model-driven apps Power Pages |
| **Ungroup** | Canvas apps Model-driven apps |

Groups and ungroups [records](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) of a [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables).

The **GroupBy** function returns a table with records grouped together based on the values in one or more [columns](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns). Records in the same group are placed into a single record, with a column added that holds a nested table of the remaining columns.

The **Ungroup** function reverses the **GroupBy** process. This function returns a table, breaking into separate records any records that were grouped together.

You can group records by using **GroupBy**, modify the table that it returns, and then ungroup records in the modified table by using **Ungroup**. For example, you can remove a group of records by following this approach:

- Use the **GroupBy** function.

- Use the [Filter](https://learn.microsoft.com/function-filter-lookup) function to remove the entire group of records.

- Use the **Ungroup** function.

You can also aggregate results based on a grouping:

- Use the **GroupBy** function.


- Use the [AddColumns](https://learn.microsoft.com/function-table-shaping) function with [Sum](https://learn.microsoft.com/function-aggregates), [Average](https://learn.microsoft.com/function-aggregates), and other aggregate functions to add a new column, which is an aggregate of the group tables.

- Use the [DropColumns](https://learn.microsoft.com/function-table-shaping) function to drop the group table.

**Ungroup** tries to preserve the original order of the records that were fed to **GroupBy**. This isn't always possible (for example, if the original table contains *blank* records).

A table is a value in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685), just like a string or a number. You can specify a table as an argument for a function, and a function can return a table. **GroupBy** and **Ungroup** don't modify a table; instead they take a table as an argument and return a different table. See [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) for more details.

Note


In [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) prior to version 3.24042, column names were specified with a text string using double quotes, and if connected to a data source they also needed to be logical names. For example, the logical name **"cr43e_name"** with double quotes was used instead of the display name **Name** without quotes. For SharePoint and Excel data sources that contain column names with spaces, each space was specified with **"_x0020_"**, for example **"Column Name"** as **"Column_x0020_Name"**. After this version, all apps were automatically updated to the new syntax described in this article.

**GroupBy**( *Table*, *ColumnName1* [, *ColumnName2*, ... ], *GroupColumnName* )

- *Table* - Required. Table to be grouped.

- *ColumnName(s)* - Required. The column names in *Table* by which to group records. These columns become columns in the resulting table.

- *GroupColumnName* - Required. The column name for the storage of record data not in the *ColumnName(s)*.

**Ungroup**( *Table*, *GroupColumnName* )

- *Table* - Required. Table to be ungrouped.


- *GroupColumnName* - Required. The column that contains the record data setup with the **GroupBy** function.

1. Add a button, and set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property so that the button shows **Original**.

2. Set the [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of the **Original** button to this formula:

```
ClearCollect( CityPopulations,
    { City: "London",    Country: "United Kingdom", Population: 8615000},
    { City: "Berlin",    Country: "Germany",        Population: 3562000},
    { City: "Madrid",    Country: "Spain",          Population: 3165000},
    { City: "Rome",      Country: "Italy",          Population: 2874000},
    { City: "Paris",     Country: "France",         Population: 2273000},
    { City: "Hamburg",   Country: "Germany",        Population: 1760000},
    { City: "Barcelona", Country: "Spain",          Population: 1602000},
    { City: "Munich",    Country: "Germany",        Population: 1494000},
    { City: "Milan",     Country: "Italy",          Population: 1344000}
)
```

3. While holding down the Alt key, select the **Original** button.


You just created a [collection](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources#collections), named **CityPopulations**, that contains this data:

![CityPopulations example.](https://learn.microsoft.com/media/function-groupby/cities.png)

4. To display this collection, select **Collections** on the **File** menu and then select the **CityPopulations** collection. The first five records in the collection appear:

![CityPopulations collection.](https://learn.microsoft.com/media/function-groupby/citypopulations-collection.png)

5. Add another button, and set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to **"Group"**.

6. Set the [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of this button to this formula:

**ClearCollect( CitiesByCountry, GroupBy( CityPopulations, Country, Cities ) )**

7. While holding down the Alt key, select the **Group** button.

You just created a collection, named **CitiesByCountry**, in which the records of the previous collection are grouped by the **Country** column.

![Cities grouped.](https://learn.microsoft.com/media/function-groupby/cities-grouped.png)

8. To display the first five records in this collection, select **Collections** on the **File** menu.

![Cities by country/region.](https://learn.microsoft.com/media/function-groupby/citiesbycountry-collection.png)

9. To display the populations of cities in a country/region, select the table icon in the **Cities** column for that country/region (for example, Germany):

![Population - Germany.](https://learn.microsoft.com/media/function-groupby/population-germany.png)

10. Add another button, and set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property so that the button shows **"Filter"**.

11. Set the [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of this button to this formula:


**ClearCollect( CitiesByCountryFiltered, Filter( CitiesByCountry, "e" in Country ) )**

12. While holding down the Alt key, select the button that you added.

You just created a third collection, named **CitiesByCountryFiltered**, that includes only those countries that have an "e" in their names (that is, not Spain or Italy).

![CitiesByCountryFiltered.](https://learn.microsoft.com/media/function-groupby/cities-grouped-hase.png)

13. Add one more button, and set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property so that the button shows **"Ungroup"**.

14. Set the [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of this button to this formula:

**ClearCollect( CityPopulationsUngrouped, Ungroup( CitiesByCountryFiltered, Cities ) )**

Which results in:

![Cities by country/region after ungroup.](https://learn.microsoft.com/media/function-groupby/cities-hase.png)

Another operation we can perform on a grouped table is to compile the results. In this example, we'll sum the population of the major cities in each country/region.

1. Add another button, and set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property so that the button shows **"Sum"**.

2. Set the [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of the **"Sum"** button to this formula:

**ClearCollect( CityPopulationsSum, AddColumns( CitiesByCountry, 'Sum of City Populations', Sum( Cities, Population ) ) )**

Which results in:

![Cities sum.](https://learn.microsoft.com/media/function-groupby/cities-sum.png)


[AddColumns](https://learn.microsoft.com/function-table-shaping) starts with the base **CitiesByCountry** collection and adds a new column **Sum of City Populations**. This column's values are calculated row-by-row, based on the formula **Sum( Cities, Population )**. **AddColumns** provides the value of the **Cities** column (a table) for each row, and [Sum](https://learn.microsoft.com/function-aggregates) adds up the **Population** for each row of this sub table.

Now that we have the sum that we want, we can use [DropColumns](https://learn.microsoft.com/function-table-shaping) to remove the sub tables.

3. Add another button, and set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property so that the button shows **"SumOnly"**.

4. Set the [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of the **"SumOnly"** button to this formula:

**ClearCollect( CityPopulationsSumOnly, DropColumns( CityPopulationsSum, Cities ) )**

Which results in:

![Countries sum.](https://learn.microsoft.com/media/function-groupby/cities-sum-drop-cities.png)

Note that we didn't need to ungroup this table.

