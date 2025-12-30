---
title: RecordInfo function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:30:38 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:30:41 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The RecordInfo function provides information about a record of a data source, currently only supporting Microsoft Dataverse.
- It returns a Boolean value indicating whether the current user has permission to read, edit, or delete a record, taking into account permissions at both the record and data source levels.
- The function requires two arguments: the record to test and the desired information, such as RecordInfo.EditPermission or RecordInfo.ReadPermission.


Detailed summary

- The RecordInfo function in Power Platform is used to obtain information about a particular record of a data source, which must be tabular and compatible with the Remove and Patch functions, with Microsoft Dataverse being the only supported data source at this time.
- The RecordInfo function provides information about a record, including whether the current user has permission to delete, edit, or read the record, with the available information arguments being RecordInfo.DeletePermission, RecordInfo.EditPermission, and RecordInfo.ReadPermission.
- The RecordInfo function returns a Boolean value, with true indicating that the user has the specified permission and false indicating that the user does not have permission, and it also returns false if the record is blank.
- The function takes into account permissions at the data source level, so if a user has permission at the record level but not at the table level, it will return false, and the DataSourceInfo function can be used to obtain information about the data source as a whole.
- The RecordInfo function requires two arguments: Record, which is the record to test, and Information, which is the desired information for the record, and it can be used in various scenarios, such as checking edit permission for a record or capturing a record using the With function.
- Examples of using the RecordInfo function include checking the edit permission for the first record in the Accounts data source, capturing a record using the With function, and capturing the first 10 records from the Accounts data source into a collection, but using a collection that is not from a data source will result in an error.
- The RecordInfo function can be used in different types of apps, including Canvas apps and Model-driven apps, and it is an important tool for managing data sources and permissions in Power Platform.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-recordinfo)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Model-driven apps

Provides information about a [record](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#elements-of-a-table) of a [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources).

Use **RecordInfo** to obtain information about a particular record of a data source. The data source must be tabular and compatible with the [Remove](https://learn.microsoft.com/function-remove-removeif) and [Patch](https://learn.microsoft.com/function-patch) functions.

At this time, only Microsoft Dataverse is supported. Records from all other data sources will result in a formula error.

The information available:

| Information argument | Description |
| --- | --- |
| **RecordInfo.DeletePermission** | Does the current user have permission to remove this record from the data source? |
| **RecordInfo.EditPermission** | Does the current user have permission to modify this record in the data source? |
| **RecordInfo.ReadPermission** | Does the current user have permission to read this record from the data source? |

**RecordInfo** returns a Boolean value:

| Return value | Description |
| --- | --- |
| *true* | The user has the permission. |
| *false* | The user does not have permission. If the record is *blank* then **RecordInfo** will also return *false*. |


**RecordInfo** takes into account permissions at the data source level too. For example, if the user has permission at the record level to modify a record, but the user does not have permissions at the table level, then it will return *false* for **ModifyPermission**. Use the [DataSourceInfo](https://learn.microsoft.com/function-datasourceinfo) function to obtain information about the data source as a whole.

**RecordInfo**( *Record*, *Information* )

- *Record* – Required. The record to test.

- *Information* – Required. The desired information for the record.

```
RecordInfo( First(Accounts), RecordInfo.EditPermission )
```

Checks the edit permission for the first record in the `Accounts` data source, which could be in Dataverse, SharePoint, SQL Server, or another tabular data source. If the user has permission to edit this record and modify the `Accounts` data source in general, then **RecordInfo** will return *true*.

```
With( { MyRecord: First( Accounts ) },
      RecordInfo( MyRecord, RecordInfo.EditPermission ) )
```


Captures a record using the [With](https://learn.microsoft.com/function-with) function and then passes this value to the `RecordInfo` function. The result will be the same as the last example.

```
Collect( MyAccounts, FirstN( Accounts, 10 ) );
RecordInfo( First( MyAccounts ), RecordInfo.EditPermission ) )
```

Captures the first 10 records from the `Accounts` data source into the `MyAccounts` collection. Since the records originated from a data source, they can be used with the **RecordInfo** function. The result will be the same as the last example.

```
Collect( MyCollection, [ 1, 2, 3 ] );
RecordInfo( First(MyCollection), RecordInfo.DeletePermission )
```

Creates the `MyCollection` collection and tests the first record to determine if it can be removed. Since the record's origin is a collection and not a data source, **RecordInfo** will return an error.

