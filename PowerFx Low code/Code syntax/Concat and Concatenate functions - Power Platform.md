---
title: Concat and Concatenate functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:30:50 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:30:56 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `Concat` function concatenates the result of a formula applied across all records of a table, resulting in a single string.
- The `Concatenate` function concatenates a mix of individual strings and a single-column table of strings, equivalent to using the `&` operator for individual strings.
- Both functions can be used to combine strings in various ways, with `Concat` allowing for a separator to be specified and `Concatenate` allowing for multiple strings to be combined.


Detailed summary

- The Concat and Concatenate functions in Power Platform are used to concatenate individual strings of text and strings in tables, with the Concat function concatenating the result of a formula applied across all the records of a table, resulting in a single string, while the Concatenate function concatenates a mix of individual strings and a single-column table of strings.
- The Concat function takes three parameters: Table, Formula, and Separator, where Table is the required table to operate on, Formula is the required formula to apply across the records of the table, and Separator is an optional text value to be inserted between concatenated rows of the table.
- The Concatenate function takes a mix of individual strings or a single-column table of strings as its parameters, and when used with individual strings, it is equivalent to using the & operator, as shown in the examples using the global variables FirstName and LastName.
- The examples provided demonstrate how to use the Concat and Concatenate functions, such as concatenating the value in LastName, a comma, and the value in FirstName using the Concatenate function, or concatenating the name of each product in the Products table using the Concat function.
- The Concat function can be used to summarize the strings of a table, similar to how the Sum function is used for numbers, and fields of the record currently being processed are available within the formula, which can be referenced using the ThisRecord or by name.
- The Split or MatchAll function can be used to split a string into a table of substrings, and the Concat function can be reversed by using the Split function, as shown in the example where the Concat function is used with a separator and then reversed using the Split function.
- The global variables used in the examples, such as FirstName, LastName, and Products, can be created in an app by inserting a Button control and setting its OnSelect property to a formula that sets the values of these variables, and then selecting the button while holding down the Alt key.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-concatenate)
| Function | Applies to |
| --- | --- |
| **Concat** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages |
| **Concatenate** | Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages |

Concatenates individual strings of text and strings in [tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables).

The **Concatenate** function concatenates a mix of individual strings and a single-column table of strings. When you use this function with individual strings, it's equivalent to using the **&** [operator](https://learn.microsoft.com/operators).

The **Concat** function concatenates the result of a formula applied across all the [records](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) of a table, resulting in a single string. Use this function to summarize the strings of a table, just as the [Sum](https://learn.microsoft.com/function-aggregates) function does for numbers.


Fields of the record currently being processed are available within the formula. Use the [ThisRecord](https://learn.microsoft.com/operators#thisitem-thisrecord-and-as-operators) or simply reference fields by name as you would any other value. The [As](https://learn.microsoft.com/operators#thisitem-thisrecord-and-as-operators) can also be used to name the record being processed which can help make your formula easier to understand and make nested records accessible. For more information, see the examples below and [working with record scope](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#record-scope).

Use the [Split](https://learn.microsoft.com/function-split) or [MatchAll](https://learn.microsoft.com/function-ismatch) function to split a string into a table of substrings.

**Concat**( *Table*, *Formula*, *separator*)

- *Table* - Required. Table to operate on.

- *Formula* - Required. Formula to apply across the records of the table.

- *Separator* - Optional. A text value to be inserted between concatenated rows of the table.

**Concatenate**( *String1* [, *String2*, ...] )

- *String(s)* - Required. Mix of individual strings or a single-column table of strings.

The examples in this section use these global variables:

- **FirstName** = "Jane"

- **LastName** = "Doe"

- **Products** =

![Table with two columns and four rows.](https://learn.microsoft.com/media/function-concatenate/products.png)


To create these global variables in an app, insert a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control, and set its **OnSelect** property to this formula:

```
Set( FirstName, "Jane" ); Set( LastName, "Doe" );
Set( Products,
    Table(
        { Name: "Violin", Type: "String" },
        { Name: "Cello", Type: "String" },
        { Name: "Trumpet", Type: "Wind" }
    )
)
```

Select the button (by clicking it while you hold down the Alt key).

For these examples, set the **Text** property of a [Label](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-box) control to a formula from the first column of the next table.


| Formula | Description | Result |
| --- | --- | --- |
| **Concatenate( LastName, ", ", FirstName )** | Concatenates the value in **LastName**, the string **", "** (a comma followed by a space), and the value in **FirstName**. | "Doe, Jane" |
| **LastName & ", " & FirstName** | Same as the previous example except using the **&** operator instead of the function. | "Doe, Jane" |
| **Concatenate( FirstName, " ", LastName )** | Concatenates the value in **FirstName**, the string **" "** (a single space), and the value in **LastName**. | "Jane Doe" |
| **FirstName & " " & LastName** | Same as the previous example, using the **&** operator instead of the function. | "Jane Doe" |

For this example, add a blank, vertical [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) control, set its **Items** property to the formula in the next table, and then add a label in the gallery template.


| Formula | Description | Result |
| --- | --- | --- |
| **Concatenate( "Name: ", Products.Name, ", Type: ", Products.Type )** | For each record in the **Products** table, concatenates the string **"Name: "**, the name of the product, the string **", Type: "** and the type of the product. | A single-column table with a `Value` column containing the following values: "Name: Violin, Type: String", "Name: "Cello, Type: String", "Name: Trumpet, Type: Wind" |

For these examples, set the **Text** property of a label to a formula from the first column of the next table.


| Formula | Description | Result |
| --- | --- | --- |
| **Concat( Products, Name, ", " )** | Evaluates the expression **Name** for each record of **Products** and concatenates the results together into a single text string separated by **", "**. | "Violin, Cello, Trumpet" |
| **Concat( Products, "'" & Name & "'", ", " )** | Evaluates the expression **"'" & Name & "'"** for each record of **Products** and concatenates the results together into a single text string separated by **", "**. | "'Violin', 'Cello', 'Trumpet'" |
| **Concat( Filter( Products, Type = "String" ), Name, ", " )** | Evaluates the formula **Name** for each record of **Products** that satisfies the filter **Type = "String"**, and concatenates the results into a single text string separated by **", "**. | "Violin, Cello" |

If you used **Concat** with a separator, you can reverse the operation by using the **Split** function.

For these examples, add a blank, vertical gallery, set its **Items** property to a formula in the next table, and then add a label in the gallery template.


| Formula | Description | Result |
| --- | --- | --- |
| **Split( Concat( Products, Name, ", " ), ", " )** | Splits the text string with the separator **", "**. | A single-column table with a `Value` column containing the following values: "Violin", "Cello", "Trumpet" |

