---
title: ColumnNames and Column functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:30:33 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:31:09 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `ColumnNames` function returns a table with the names of all columns from a dynamic record.
- The `Column` function returns the value of a property from a dynamic record with the given column name.
- Both functions return errors if the dynamic value doesn't represent a record, and attempting to access non-existing fields returns `Blank()`.


Detailed summary

- The ColumnNames and Column functions in the Power Platform are used to retrieve column names and values from a dynamic record, with the ColumnNames function returning a table with all the column names from the record and the Column function returning the value of a specific property from the record.
- The ColumnNames function takes a dynamic record as an argument and returns a table with all the column names, while the Column function takes a dynamic record and a column name as arguments and returns the value of the specified column.
- The functions return errors if the dynamic value does not represent a record, such as if it represents a table, scalar, or primitive value, and they can be used with JSON strings that have been parsed into dynamic records using the ParseJSON function.
- The Column function can be used to retrieve values from a dynamic record without knowing the column names beforehand, and it can also be used to access non-existing fields, which returns a Blank value.
- JSON null values are considered Blank, and attempting to access a non-existing field or a null value using the Column function returns a Blank value, which can be checked using the IsBlank function.
- The Column and ColumnNames functions can be used in various formulas, such as concatenating column names and values, and they can also be used with other functions, such as the With function, to perform more complex operations.
- Calling the Column or ColumnNames functions with dynamic values that do not represent records, such as arrays, numbers, text, or boolean values, returns an error, and the functions can only be used with dynamic records that represent objects with properties.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-columnnames-column)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Model-driven apps Power Platform CLI Dataverse functions

Retrieves column names and values from a [dynamic value](https://learn.microsoft.com/untyped-object).

The ColumnNames function returns the names of all columns from a [dynamic record](https://learn.microsoft.com/untyped-object), returning a table with all the names from that record.

The Column function returns the value of a property from a [dynamic record](https://learn.microsoft.com/untyped-object) with the given column name. The value is returned as a [dynamic value](https://learn.microsoft.com/untyped-object).

The ColumnNames and Column functions return errors if the [dynamic value](https://learn.microsoft.com/untyped-object) doesn't represent a record (that is, if it represents a table or a scalar or primitive value).

**ColumnNames**( *DynamicRecord* )

- *DynamicRecord* – Required. A [dynamic value](https://learn.microsoft.com/untyped-object) that represents a record.

**Column**( *DynamicRecord*, *ColumnName* )

- *DynamicRecord* – Required. A [dynamic value](https://learn.microsoft.com/untyped-object) that represents a record.

- *ColumnName* - Required. The name of the column to be retrieved from the given record.

Given the following [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) string in a variable named `JsonString`

```
{ "name": "Seattle", "population": 737000 }
```


1. The following formula returns a single-column table with a `Value` column containing the following values: "name", "population":

```
ColumnNames( ParseJSON( JsonString ) )
```

2. The following formula returns the number `737000`:

```
Value( Column( ParseJSON( JsonString ), "population" ) )
```

- Notice that this formula is similar to the `.` operator for [dynamic records](https://learn.microsoft.com/untyped-object#record-types), but the column name doesn't have to be known beforehand.

3. The following formula returns the text value `"name: Seattle, population: 737000"`:

```
With(
    { untyped: ParseJSON( JsonString ) },
    Concat(
        ColumnNames( untyped ),
        $"{Value}: {Column( untyped, Value )}",
        ", "))
```

Given the following [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) string in a variable named `JsonString`

```
{ "text": "text value" , "number": 567, "empty": null }
```

1. Attempting to access nonexisting fields returns **Blank()**. The following formula returns `true`:```
IsBlank( Column( ParseJSON( JsonString ), "does not exist" ) )

```

```


2. [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) `null` values are considered **Blank()**. The following formula returns `true`:```
IsBlank( Column( ParseJSON( JsonString ), "empty" ) )

```

```

Calling the Column or ColumnNames functions with dynamic values that don't represent records return an error. All of those expressions in the following list are erroneous:

| Formula | Reason for error |
| --- | --- |
| **ColumnNames( ParseJSON ( "[1, 2, 3]" ) )** | Dynamic value represents an array |
| **Column( ParseJSON ( "23.45" ), "Value" )** | Dynamic value represents a number |
| **ColumnNames( ParseJSON ( """hello""" ) )** | Dynamic value represents a text |
| **Column( ParseJSON ( "{""a"":false}" ).a, "a" )** | Dynamic value represents a boolean value |

