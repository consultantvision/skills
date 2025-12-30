---
title: Validate function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 20:05:54 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 20:06:09 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Validate function checks if a value or record is valid for a data source, providing immediate feedback to the user.
- It uses information from the data source to determine validity, including constraints such as required values, string length, and number or date ranges.
- The function returns an error message if a value is invalid, or blank if all values are valid, and can be used with the DataSourceInfo and Errors functions for additional information.


Detailed summary

- The Validate function in Power Platform is used to check whether the value of a single column or a complete record is valid for a data source, providing immediate feedback to users before they submit data changes.
- Data sources can provide various constraints that define valid values, including requirements for a column to have a value, the length of a string of text, the range of a number, and the range of a date, which are used by the Validate function to determine validity.
- The Validate function can be used in two ways: Validate( DataSource, Column, Value ) to validate a single value, and Validate( DataSource, OriginalRecord, Updates ) to validate a complete record with updates, where DataSource, Column, Value, OriginalRecord, and Updates are required parameters.
- The function returns an error message if a value is invalid, and a blank result if all values are valid, allowing developers to provide feedback to users and handle potential errors.
- The Validate function relies on the validation information provided by the data source, which can vary in completeness, and even if Validate does not find any issues, applying the data change may still fail, in which case the Errors function can be used to obtain more information.
- The DataSourceInfo function can be used to view the same validation information that the Validate function uses, providing developers with more insight into the validation rules applied by the data source.
- Examples of using the Validate function include checking whether a specific value is valid for a column, such as a percentage value between 0 and 100, and validating a complete record with updates, demonstrating how the function can be used to improve the user experience and handle data validation in Power Platform apps.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-validate)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Model-driven apps

The **Validate** function checks whether the value of a single [column](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns) or a complete [record](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) is valid for a [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources).

Before a user submits a data change, you can provide immediate feedback on the validity of that submission, resulting in a better user experience.

Data sources can provide information on what constitutes valid values within a record. This information can include many constraints, such as these examples:

- whether a column requires a value

- how long a string of text can be

- how high and low a number can be

- how early and late a date can be

The **Validate** function uses this information to determine whether a value is valid and to return an appropriate error message if not. You can use the [DataSourceInfo](https://learn.microsoft.com/function-datasourceinfo) function to view the same information that **Validate** uses.


Data sources vary in how much validation information they provide, including not providing any at all. **Validate** can only verify values based on this information. Even if **Validate** doesn't find a problem, applying the data change may still fail. You can use the [Errors](https://learn.microsoft.com/function-errors) function to obtain information about the failure.

If **Validate** finds a problem, the function returns an error message that you can show to the user of the app. If all values are valid, **Validate** returns [blank](https://learn.microsoft.com/function-isblank-isempty). When you work with a [collection](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources#collections) that has no validation information, values are always valid.

**Validate**( *DataSource*, *Column*, *Value* )

- *DataSource* – Required. The data source to validate with.

- *Column* – Required. The column to validate.

- *Value* – Required. The value for the selected column to be validated.

**Validate**( *DataSource*, *OriginalRecord*, *Updates* )

- *DataSource* – Required. The data source to validate with.

- *OriginalRecord* - Required. The record to which updates are to be validated.

- *Updates* - Required. The changes to apply to the original record.


For these examples, values in the **Percentage** column of the **Scores** data source must be between 0 and 100, inclusive. If the data passes validation, the function returns *blank*. Otherwise, the function returns an error message.

| Formula | Description | Result |
| --- | --- | --- |
| **Validate( Scores, Percentage, 10 )** | Checks whether **10** is a valid value for the **Percentage** column in the **Scores** data source. | *blank* |
| **Validate( Scores, Percentage, 120 )** | Checks whether **120** is a valid value for the **Percentage** column in the **Scores** data source. | "Values must be between 0 and 100." |

| Formula | Description | Result |
| --- | --- | --- |
| **Validate( Scores, EditRecord, Gallery.Updates )** | Checks whether values in all columns are valid for the **Scores** data source. In this example, the value in the **Percentage** column is **10**. | *blank* |
| **Validate( Scores, EditRecord, Gallery.Updates )** | Checks whether values in all columns are valid for the **Scores** data source. In this example, the value in the **Percentage** column is **120**. | "Values must be between 0 and 100." |

