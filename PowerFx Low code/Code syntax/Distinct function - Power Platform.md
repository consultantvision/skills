---
title: Distinct function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:41:56 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:42:22 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Distinct function in Power Platform summarizes records of a table, removing duplicates, and returns a one-column table of the results.
- The function evaluates a formula across each record of a table and can't be delegated when used with a data source, potentially leading to incomplete results.
- The Distinct function takes two required parameters: Table (the table to evaluate) and Formula (the formula to evaluate for each record).


Detailed summary

- The Distinct function in Power Platform is used to summarize records of a table, removing duplicates, and it evaluates a formula across each record of a table and returns a one-column table of the results with duplicate values removed.
- The function takes two parameters, Table and Formula, where Table is the required table to evaluate across, and Formula is the required formula to evaluate for each record, and fields of the record currently being processed are available within the formula using ThisRecord or by referencing fields by name.
- When used with a data source, the Distinct function can't be delegated, meaning only the first portion of the data source will be retrieved and then the function applied, which may not represent the complete story, and a warning may appear at authoring time to remind users of this limitation.
- The Distinct function can be used in various Power Platform applications, including Canvas apps, Copilot Studio, Desktop flows, Power Platform CLI, Dataverse functions, and Power Pages, and it can be used to create a one-column table of unique values from a larger table.
- To use the Distinct function, users can insert a Button control, set its OnSelect property to a formula that creates a collection, such as CityPopulations, and then use the Distinct function to create a one-column table of unique values, such as countries, from the collection.
- The results of the Distinct function can be viewed in a Data table control by setting its Items property to the Distinct formula, and users can add a Value column to the data table using the Edit fields link in the properties pane.
- The Distinct function can also be used in combination with other functions, such as Sort and First, to sort the results and extract the first record, and users can insert a Label control and set its Text property to a formula that uses the Distinct function to display the first unique value, such as a country or region name.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-distinct)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Power Platform CLI Dataverse functions Power Pages

Summarizes [records](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) of a [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables), removing duplicates.

The **Distinct** function evaluates a formula across each record of a table and returns a one-column table of the results with duplicate values removed. The name of the column is **Value**.

Fields of the record currently being processed are available within the formula. Use the [ThisRecord](https://learn.microsoft.com/operators#thisitem-thisrecord-and-as-operators) or simply reference fields by name as you would any other value. The [As](https://learn.microsoft.com/operators#thisitem-thisrecord-and-as-operators) can also be used to name the record being processed which can help make your formula easier to understand and make nested records accessible. For more information, see the examples below and [working with record scope](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#record-scope).


When used with a data source, this function can't be delegated. Only the first portion of the data source will be retrieved and then the function applied. The result may not represent the complete story. A warning may appear at authoring time to remind you of this limitation and to suggest switching to delegable alternatives where possible. For more information, see the [delegation overview](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview).

**Distinct**( *Table*, *Formula* )

- *Table* - Required. Table to evaluate across.

- *Formula* - Required. Formula to evaluate for each record.

1. Insert a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control, and set its **OnSelect** property to this formula.


```
ClearCollect( CityPopulations,
    { City: "London",    Country: "United Kingdom", Population: 8615000 },
    { City: "Berlin",    Country: "[Germany](https://app.getrecall.ai/item/b1a83e52-5be1-45d2-9fac-692dce07e6a4)",        Population: 3562000 },
    { City: "Madrid",    Country: "[Spain](https://app.getrecall.ai/item/66d9add1-ad68-4bd4-9316-61746aa3b386)",          Population: 3165000 },
    { City: "Hamburg",   Country: "Germany",        Population: 1760000 },
    { City: "Barcelona", Country: "Spain",          Population: 1602000 },
    { City: "Munich",    Country: "Germany",        Population: 1494000 }
);
```

2. Select the button while holding down the Alt key.

The formula is evaluated and the **CityPopulations** collection is created which you can show by selecting **CityPopulations** in the formula bar:

![CityPopulations collection shown in result view.](https://learn.microsoft.com/media/function-distinct/citypopulations-create.png)

3. Insert a [Data table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-data-table) control, and set its **Items** property to this formula:

```
Distinct( CityPopulations, Country )
```

You can view the result of this formula in the formula bar by selecting the entire formula:

![Output from Distinct function shown in result view.](https://learn.microsoft.com/media/function-distinct/citypopulations-distinct.png)

4. Use the **Edit fields** link in the data table's properties pane to add the **Value** column:

![Output from Distinct function shown in data table.](https://learn.microsoft.com/media/function-distinct/citypopulations-datatable.png)

5. Insert a [Label](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-box) control, and set its **Text** property to the formula:


```
First( Sort( Distinct( CityPopulations, Country ), Value ) ).Value
```

This formula sorts the results from **Distinct** with the [Sort](https://learn.microsoft.com/function-sort) function, takes the first record from the resulting table with the [First](https://learn.microsoft.com/function-first-last) function, and extracts the **Result** field to obtain just the country/region name.

![Output from Distinct function showing the first country/region by name.](https://learn.microsoft.com/media/function-distinct/citypopulations-first.png)

