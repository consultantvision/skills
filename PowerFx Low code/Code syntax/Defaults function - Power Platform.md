---
title: Defaults function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:41:47 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:42:52 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Defaults function returns the default values for a data source in Power Platform.
- It can be used to prepopulate a data entry form, making it easier to fill, and can be combined with the Patch function to create a record.
- The function returns a record with default values, or an empty record if the data source does not support default values.


Detailed summary

- The Defaults function in Power Platform is used to return the default values for a specified data source, which can be utilized to prepopulate a data entry form and make it easier to fill.
- This function returns a record containing the default values for the data source, but if a column within the data source does not have a default value, that property will not be present in the returned record.
- The Defaults function can be used with various data sources, including Canvas apps and Model-driven apps, but the amount of default information provided can vary depending on the data source, with some data sources not providing any default values at all.
- When working with a collection or another data source that does not support default values, the Defaults function will return an empty record, indicating that no default values are available.
- The Defaults function can be combined with the Patch function to create a new record, providing a powerful way to initialize and update data in Power Platform applications.
- The syntax for the Defaults function is Defaults( DataSource ), where DataSource is a required parameter that specifies the data source for which default values are to be retrieved.
- The Defaults function is demonstrated in the example formula Defaults( Scores ), which returns the default values for the Scores data source, resulting in a record with a single property, Score, initialized to a value of 0.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-defaults)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Model-driven apps

Returns the default values for a [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources).

Use the **Defaults** function to prepopulate a data entry form, making it easier to fill.

This function returns a [record](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) that contains the default values for the data source. If a [column](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns) within the data source doesn't have a default value, that property isn't present.

Data sources vary in how much default information they provide, including not providing any at all. When you work with a [collection](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources#collections) or another data source that doesn't support default values, the **Defaults** function returns an [empty](https://learn.microsoft.com/function-isblank-isempty) record.

You can combine the **Defaults** function with the [Patch](https://learn.microsoft.com/function-patch) function to [create a record](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources).

**Defaults**( *DataSource* )

- *DataSource* – Required. The data source for which you want default values.

| Formula | Description | Result |
| --- | --- | --- |
| **Defaults( Scores )** | Returns the default values for the **Scores** data source. | **{ Score: 0 }** |

