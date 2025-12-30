---
title: Count, CountA, CountIf, and CountRows functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:36:49 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:37:02 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Count function counts records with a number in a single-column table.
- The CountA function counts non-blank records in a single-column table, including empty text.
- The CountIf function counts records that satisfy a logical formula, and the CountRows function counts all records in a table.


Detailed summary

- The Count, CountA, CountIf, and CountRows functions in the Power Platform are used to count records in a table, with each function serving a specific purpose: the Count function counts records containing a number in a single-column table, the CountA function counts non-blank records in a single-column table, the CountIf function counts records that satisfy a logical formula, and the CountRows function counts all records in a table.
- Each of these functions returns a number, and they can be applied to various Power Platform components, including Canvas apps, Copilot Studio, Desktop flows, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- To use the CountIf and CountRows functions with delegation, it is necessary to enable the Enhanced delegation for Microsoft Dataverse option in the advanced settings by opening the app, selecting Settings > Upcoming features > Preview, and turning on the option.
- There is a 50K delegation limit when using the CountRows and CountIf functions with filters, but no hard limit applies when extracting the count directly from the data source due to the cached count maintained by Dataverse.
- The CountRows function may not provide a 100% accurate count if used without filtering, as the cached count updates periodically, but precise counts can be obtained by using the CountIf function with a logical formula that always returns true.
- The Count, CountA, CountIf, and CountRows functions have specific syntax requirements, including the table or single-column table to count, and a logical formula for the CountIf function, which can reference columns of the table.
- Examples of using these functions include counting products with fewer than 30 units in stock using the CountIf function, counting non-empty cells in a column using the CountA function, and counting all rows in a table using the CountRows function.
- The functions can be used in various scenarios, such as creating a collection named Inventory and using the CountIf, CountA, and CountRows functions to display counts in labels, demonstrating their practical applications in the Power Platform.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-table-counts)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages

Counts all [records](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) in a [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables), or counts all records that satisfy a condition.

The **Count** function counts the number of records that contain a number in a single-column table.

The **CountA** function counts the number of records that aren't *blank* in a single-column table. This function includes [empty](https://learn.microsoft.com/function-isblank-isempty) text ("") in the count.

The **CountIf** function counts the number of records in a table that are **true** for a logical formula. The formula can reference [columns](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns) of the table.

The **CountRows** function counts the number of records in a table.

Each of these functions returns a number.

You need to enable the **Enhanced delegation for [Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d) Dataverse** option in the advance settings to make **CountIf** and **CountRows** functions delegation to work. To enable the option:

1. Open the app where you want to use the functions.

2. Select **Settings** > **Upcoming features** > **Preview**.


3. Turn on the **Enhanced delegation for [Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d) Dataverse** option.

![Enable delegation.](https://learn.microsoft.com/media/enable-delegation-functions.png)

Important

- There is a 50K delegation limit if you use `CountRows` and `CountIf` functions with filters. There is no hard limit on the `CountRows` function when extracted directly from the data source because of the cached count that Dataverse keeps.

- If the `CountRows(<Data Source>)` function is used without filtering, the count might not be 100% accurate, because the cached count updates periodically. If you need precise count and expect the result to be under the aggregate limit, you can bypass the cached count via `CountIf(<Data Source>, True)`.

**Count**( *SingleColumnTable* ) **CountA**( *SingleColumnTable* )

- *SingleColumnTable* - Required. Column of records to count.

**CountIf**( *Table*, *LogicalFormula* )

- *Table* - Required. Table of records to count.

- *LogicalFormula* - Required. Formula to evaluate for each record of the table. Records that return **true** for this formula are counted. The formula can reference columns of the table.

**CountRows**( *Table* )


- *Table* - Required. Table of records to count.

1. Import or create a [collection](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources#collections) named **Inventory**, as the first subprocedure in [Show images and text in a gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/show-images-text-gallery-sort-filter) describes.

2. Add a label, and set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula:

**CountIf(Inventory, UnitsInStock < 30)**

The label shows **2** because two products (Ganymede and Callisto) have fewer than 30 units in stock.

3. Add another label, and set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula:

**CountA(Inventory.UnitsInStock)**

The label shows **5**, the number of non-empty cells in the **UnitsInStock** column.

4. Add another label, and set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula:

**CountRows(Inventory)**

The label shows **5** because the collection contains five rows.

