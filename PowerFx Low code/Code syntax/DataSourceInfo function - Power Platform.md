---
title: DataSourceInfo function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:37:22 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:37:30 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The DataSourceInfo function provides information about a data source in Power Platform, including column-level and data-source level information.
- The function can be used to validate user input, provide immediate feedback, and check user permissions for a data source.
- DataSourceInfo returns various types of information, such as display names, maximum lengths, required fields, and user permissions, which can be used to optimize the user experience and customize the app's behavior.


Detailed summary

- The DataSourceInfo function in Power Platform provides information about a data source, which can be used to optimize the user experience by validating user input and checking permissions.
- The function can be used to retrieve information at both the data-source level and the column level, with data sources varying in the amount of information they provide, and collections providing no information.
- At the column level, the DataSourceInfo function can retrieve information such as the display name, maximum length, maximum and minimum values, and whether a value is required for a particular column.
- The function can also be used to retrieve information about a data source as a whole, including the types of permissions that can be granted, and whether the current user has permission to create, read, edit, or delete records in the data source.
- The DataSourceInfo function takes three arguments: the data source, the type of information to retrieve, and an optional column name, with the column name only being used when retrieving column-level information.
- The function returns a default value or blank if the requested information is not provided by the data source, and permissions checking with DataSourceInfo is currently only possible when using Microsoft Dataverse.
- The function is not supported in Microsoft Lists, and the syntax for specifying column names has changed in Microsoft Power Apps version 3.24042 and later, with column names now being specified without double quotes or logical names.
- Examples of using the DataSourceInfo function include retrieving the display name for a column, checking whether a column is required, and determining whether the current user has permission to perform certain actions on a data source.
- The DataSourceInfo function can be used in various scenarios, such as validating user input, providing immediate feedback to the user, and customizing the user interface based on the user's permissions.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-datasourceinfo)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Model-driven apps

Provides information about a [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources).

Data sources can provide a wealth of information to optimize the user experience.

You can use [column](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns)-level information to validate user input and provide immediate feedback to the user before using the [Patch](https://learn.microsoft.com/function-patch) function. The [Validate](https://learn.microsoft.com/function-validate) function uses this same information.

You can use information at the data-source level, for example, to disable or hide **Edit** and **New** buttons for users who don't have permissions to edit and create [records](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records).

Data sources vary in how much information they provide, including not providing any at all. [Collections](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources#collections) provide no information. If a piece of information isn't provided, a default is used, or *blank* is returned.

Note

Currently, the DataSourceInfo function is not supported in [Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d) Lists.

You can use **DataSourceInfo** to obtain information about a particular column of a data source:


| Information Argument | Result Type | Description |
| --- | --- | --- |
| **DataSourceInfo.DisplayName** | String | Display name for the column. If no display name is defined, returns the column name. |
| **DataSourceInfo.MaxLength** | Number | Maximum number of characters that the column can hold. Applies only to columns that contain strings. If a maximum isn't set, returns *blank*. |
| **DataSourceInfo.MaxValue** | Number | Maximum numeric value that a column can hold. Applies only to columns that contain numbers. If a maximum isn't set, returns *blank*. |
| **DataSourceInfo.MinValue** | Number | Minimum numeric value that a column can hold. Applies only to columns that contain numbers. If a minimum isn't set, returns *blank*. |
| **DataSourceInfo.Required** | Boolean | Is a value required for this column? If not set by the data source, returns **false**. |

The third argument is the name of a column as a string. For example, column **Phone** in collection **People** would be passed as **"Phone"** including the double quotes.

You can also use **DataSourceInfo** to obtain information about a data source as a whole:


| Information Argument | Result Type | Description |
| --- | --- | --- |
| **DataSourceInfo.AllowedValues** | Boolean | What types of permissions can users be granted for this data source? If not set by the data source, returns *blank*. |
| **DataSourceInfo.CreatePermission** | Boolean | Does the current user have permission to create records in this data source? If not set by the data source, returns **true**. |
| **DataSourceInfo.DeletePermission** | Boolean | Does the current user have permission to delete records in this data source? If not set by the data source, returns **true**. |
| **DataSourceInfo.EditPermission** | Boolean | Does the current user have permission to edit records in this data source? If not set by the data source, returns **true**. |
| **DataSourceInfo.ReadPermission** | Boolean | Does the current user have permission to read records in this data source? If not set by the data source, returns **true**. |

Note


**DataSourceInfo** returns *true* if it cannot determine whether the current user has the requested permission. Permissions will be checked again by the server when the actual operation is carried out and an error is displayed if it was not allowed. At this time, permissions checking with **DataSourceInfo** is only possible when using [Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d) Dataverse.

**DataSourceInfo**( *DataSource*, *Information* [, *ColumnName*] )

- *DataSource* – Required. The data source to use.

- *Information* – Required. The type of information that you want to retrieve.

- *ColumnName* – Optional. The column name for which to retrieve column-level information. For information at the data-source level, the *ColumnName* argument can't be used.

Note


In [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) prior to version 3.24042, column names were specified with a text string using double quotes, and if connected to a data source they also needed to be logical names. For example, the logical name **"cr43e_name"** with double quotes was used instead of the display name **Name** without quotes. For SharePoint and Excel data sources that contain column names with spaces, each space was specified with **"_x0020_"**, for example **"Column Name"** as **"Column_x0020_Name"**. After this version, all apps were automatically updated to the new syntax described in this article.

The examples in this section use this data source, named **IceCream**:

![Icecream example.](https://learn.microsoft.com/media/function-datasourceinfo/icecream.png)

The data source has also provided this information:

- The display name for **Quantity** is "Quantity on Hand".

- The maximum length of **Flavor** is 30 characters.

- The **Flavor** column must contain a value. The **Quantity** column isn't required.

- The minimum **Quantity** is 0.

- The maximum **Quantity** is 100.


- The current user can read and edit the records of the **IceCream** data source but can't create or delete records.


| Formula | Description | Result |
| --- | --- | --- |
| **DataSourceInfo( IceCream, DataSourceInfo.DisplayName, Quantity )** | Returns the display name for the **Quantity** column of the **IceCream** data source. | "Quantity on Hand" |
| **DataSourceInfo( IceCream, DataSourceInfo.MaxLength, Flavor )** | Returns the maximum length of the string for the **Flavor** column of the **IceCream** data source. | 30 |
| **DataSourceInfo( IceCream, DataSourceInfo.Required, Flavor )** | Is the **Flavor** column of the **IceCream** data source required? | **true** |
| **DataSourceInfo( IceCream, DataSourceInfo.Required, Quantity )** | Is the **Quantity** column of the **IceCream** data source required? | **false** |
| **DataSourceInfo( IceCream, DataSourceInfo.MaxValue, Quantity )** | Returns the maximum numeric value for the **Quantity** column of the **IceCream** data source. | 100 |
| **DataSourceInfo( IceCream, DataSourceInfo.MinValue, Quantity )** | Returns the minimum numeric value for the **Quantity** column of the **IceCream** data source. | 0 |
| **DataSourceInfo( IceCream, DataSourceInfo.ReadPermission)** | Can the current user read records in the **IceCream** data source? | **true** |
| **DataSourceInfo( IceCream, DataSourceInfo.EditPermission)** | Can the current user edit records in the **IceCream** data source? | **true** |
| **DataSourceInfo( IceCream, DataSourceInfo.CreatePermission)** | Can the current user create records in the **IceCream** data source? | **false** |
| **DataSourceInfo( IceCream, DataSourceInfo.DeletePermission)** | Can the current user delete records in the **IceCream** data source? | **false** |

