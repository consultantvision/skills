---
title: Blank, Coalesce, IsBlank, and IsEmpty functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:22:52 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:23:03 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `Blank` function returns a blank value, which represents "no value" or "unknown value" in Microsoft Power Apps.
- The `IsBlank` function tests whether a value is blank or an empty string, while `IsEmpty` tests whether a table contains any records.
- The `Coalesce` function evaluates its arguments in order and returns the first value that isn't blank or an empty string, making it useful for replacing blank values with default values.


Detailed summary


## Introduction to Power Platform Functions
- The Power Platform provides several functions, including Blank, Coalesce, IsBlank, and IsEmpty, which can be used to test for blank values, empty strings, and empty tables in various applications, such as Canvas apps, Model-driven apps, and Power Pages.
- The Blank function returns a blank value, which can be used to store a NULL value in a data source that supports these values, and the IsBlank function tests for a blank value or an empty string, considering empty strings to ease app creation.
- The Coalesce function evaluates its arguments in order and returns the first value that isn't blank or an empty string, making it a good way to replace a blank value or empty string with a different value, and it is equivalent to using the If function with the Not IsBlank condition.
- The IsEmpty function tests whether a table contains any records, returning a Boolean true or false, and it is equivalent to using the CountRows function and checking for zero, and can be combined with the Errors function to check for data-source errors.

## Function Differences and Return Values
- The IsBlank function considers empty tables as not blank, and IsEmpty should be used to test a table, and when enabling error handling for existing apps, consider replacing IsBlank with IsBlankOrError to preserve existing app behavior.
- The return values for the IsBlank and IsEmpty functions are Boolean true or false, and the return value from Coalesce is of the common type of its arguments, which must be of the same type, such as numbers or text strings.
- The Blank, Coalesce, IsBlank, and IsEmpty functions can be used in various contexts, such as in formulas, to simplify app creation, and to handle errors and empty values in a flexible and efficient way.

## Function Usage and Examples
- The IsEmpty function is used to test if a table contains any records, and it requires a table as an argument to check for records.
- The Blank function is used to return a blank value, and it can be used in various formulas, such as the Coalesce function, which returns the first non-blank value from a list of arguments.
- The Coalesce function evaluates each argument in turn until it finds a non-blank value and non-empty string, and it returns the value of the first non-blank argument it encounters.

## Coalesce and IsBlank Function Details
- The IsBlank function is used to test if a value is blank, and it returns true if the value is blank, and false otherwise, and it can be used to check if a text input control is empty or if a collection exists but is empty.
- The IsBlank function can be used in various scenarios, such as checking if a text input control is empty, or if a collection exists but is empty, and it can also be used to check if a string is empty or if the result of a function is blank.
- The difference between IsBlank and IsEmpty is that IsBlank checks if a value is blank, while IsEmpty checks if a table contains any records, and IsEmpty requires a table as an argument, while IsBlank can be used with various types of values.
- The Coalesce function can be used with multiple arguments, and it stops evaluating arguments as soon as it finds a non-blank value and non-empty string, and it returns the value of the first non-blank argument it encounters.

## Collection Handling with Clear and IsEmpty
- The IsBlank function can be used in combination with other functions, such as the If function, to perform validation and display error messages, and it can also be used to check if a collection is empty by using the IsEmpty function instead.
- The IceCream collection is created with two records, making it a non-empty collection, and as a result, the IsEmpty function returns false and the CountRows function returns 2.
- The Clear function is used to remove all records from the IceCream collection, resulting in an empty collection, and subsequently, the IsEmpty function returns true and the CountRows function returns 0.

## IsEmpty Function in Table and Error Scenarios
- The IsEmpty function can be utilized to test whether a calculated table is empty, as demonstrated in the provided examples, including testing a single-column table with records, an empty single-column table, and the result of a filter function that returns no records.
- The IsEmpty function is capable of handling various scenarios, such as determining if a collection or a calculated table contains any records, and it returns true if the collection or table is empty and false otherwise, as shown in the examples with the formulas IsEmpty( [ 1, 2, 3 ] ), IsEmpty( [ ] ), and IsEmpty( Filter( [ 1, 2, 3 ], Value > 5 ) ).
- The Clear function and the IsEmpty function can be used in conjunction to manage and check the status of collections, such as the IceCream collection, in Power Platform applications.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-isblank-isempty)
| Functions | Applies to |
| --- | --- |
| **Blank** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions |
| **Coalesce****IsEmpty** | Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages |
| **IsBlank** | Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages |

Tests whether a value is blank or a [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) contains no [records](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records), and provides a way to create *blank* values.

*Blank* is a placeholder for "no value" or "unknown value." For example, a [Combo box](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-combo-box) control's **Selected** property is *blank* if the user hasn't made a selection. Many data sources can store and return NULL values, which are represented in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) as *blank*.


Any property or calculated value in Power Apps can be *blank*. For example, a Boolean value normally has one of two values: **true** or **false**. But in addition to these two, it can also be *blank* indicating that the state isn't known. This is similar to Microsoft Excel, where a worksheet cell starts out as blank with no contents but can hold the values **TRUE** or **FALSE** (among others). At any time, the contents of the cell can again be cleared, returning it to a *blank* state.

*Empty string* refers to a string that contains no characters. The [Len](https://learn.microsoft.com/function-len) returns zero for such a string and it can be written in a formulas as two double quotes with nothing in between `""`. Some controls and data sources use an empty string to indicate a "no value" condition. To simplify app creation, the **IsBlank** and **Coalesce** functions test for both *blank* values or empty strings.


In the context of the **IsEmpty** function, *empty* is specific to tables that contain no records. The table structure may be intact, complete with [column](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns) names, but no data is in the table. A table may start as empty, take on records and no longer be empty, and then have the records removed and again be empty.

The **Blank** function returns a *blank* value. Use this to store a NULL value in a data source that supports these values, effectively removing any value from the field.

The **IsBlank** function tests for a *blank* value or an empty string. The test includes empty strings to ease app creation since some data sources and controls use an empty string when there's no value present. To test specifically for a *blank* value use `if(Value = Blank(), ...` instead of **IsBlank**. The **IsBlank** function considers empty tables as not blank, and **IsEmpty** should be used to test a table.


When enabling error handling for existing apps, consider replacing **IsBlank** with [IsBlankOrError](https://learn.microsoft.com/function-iferror#isblankorerror) to preserve existing app behavior. Prior to the addition of error handling, a *blank* value was used to represent both null values from databases and error values. Error handling separates these two interpretations of *blank*, which could change the behavior of existing apps that continue to use **IsBlank**.

The return value for **IsBlank** is a boolean **true** or **false**.

The **Coalesce** function evaluates its arguments in order and returns the first value that isn't *blank* or an empty string. Use this function to replace a *blank* value or empty string with a different value but leave non-*blank* and non-empty string values unchanged. If all the arguments are *blank* or empty strings, then the function returns *blank*, making **Coalesce** a good way to convert empty strings to *blank* values.


`Coalesce( value1, value2 )` is the more concise equivalent of `If( Not IsBlank( value1 ), value1, Not IsBlank( value2 ), value2 )` and doesn't require **value1** and **value2** to be evaluated twice. The [If](https://learn.microsoft.com/function-if) returns *blank* if there's no "else" formula as is the case here.

All arguments to **Coalesce** must be of the same type; for example, you can't mix numbers with text strings. The return value from **Coalesce** is of this common type.

The **IsEmpty** function tests whether a table contains any records. It's equivalent to using the [CountRows](https://learn.microsoft.com/function-table-counts) function and checking for zero. You can check for data-source errors by combining **IsEmpty** with the [Errors](https://learn.microsoft.com/function-errors) function.

The return value for **IsEmpty** is a Boolean **true** or **false**.

**Blank**()

**Coalesce**( *Value1* [, *Value2*, ... ] )

- *Value(s)* – Required. Values to test. Each value is evaluated in order until a value that isn't *blank* and not an empty string is found. Values after this point aren't evaluated.

**IsBlank**( *Value* )

- *Value* – Required. Value to test for a *blank* value or empty string.


**IsEmpty**( *Table* )

- *Table* - Required. Table to test for records.

1. Create an app from scratch, and add a **Button** control.

2. Set the button's [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula:

```
ClearCollect( Cities, { Name: "Seattle", Weather: "Rainy" } )
```

3. Preview your app, click or tap the button that you added, and then close Preview.

4. On the **File** menu, click or tap **Collections**.

The **Cities** collection appears, showing one record with "Seattle" and "Rainy":

![Collection showing Seattle with Rainy weather.](https://learn.microsoft.com/media/function-isblank-isempty/seattle-rainy.png)

5. Click or tap the back arrow to return to the default workspace.

6. Add a **Label** control, and set its **Text** property to this formula:

```
IsBlank( First( Cities ).Weather )
```

The label shows **false** because the **Weather** field contains a value ("Rainy").

7. Add a second button, and set its **OnSelect** property to this formula:

```
Patch( Cities, First( Cities ), { Weather: Blank() } )
```

8. Preview your app, click or tap the button that you added, and then close Preview.

The **Weather** field of the first record in **Cities** is replaced with a *blank*, removing the "Rainy" that was there previously.

![Collection showing Seattle with a blank Weather field.](https://learn.microsoft.com/media/function-isblank-isempty/seattle-blank.png)


The label shows **true** because the **Weather** field no longer contains a value.


| Formula | Description | Result |
| --- | --- | --- |
| **Coalesce( Blank(), 1 )** | Tests the return value from the **Blank** function, which always returns a *blank* value. Because the first argument is *blank*, evaluation continues with the next argument until a non-*blank* value and non-empty string is found. | **1** |
| **Coalesce( "", "2" )** | Tests the first argument, which is an empty string. Because the first argument is an empty string, evaluation continues with the next argument until a non-*blank* value and non-empty string is found. | **2** |
| **Coalesce( Blank(), "", Blank(), "", "3", "4" )** | **Coalesce** starts at the beginning of the argument list and evaluates each argument in turn until a non-*blank* value and non-empty string is found. In this case, the first four arguments all return *blank* or an empty string, so evaluation continues to the fifth argument. The fifth argument is non-*blank* and non-empty string, so evaluation stops here. The value of the fifth argument is returned, and the sixth argument isn't evaluated. | **3** |
| **Coalesce( "" )** | Tests the first argument, which is an empty string. Because the first argument is an empty string, and there are no more arguments, the function returns *blank*. | *blank* |


1. Create an app from scratch, add a text-input control, and name it **FirstName**.

2. Add a label, and set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula:

```
If( IsBlank( FirstName.Text ), "First Name is a required field." )
```

By default, the [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of a text-input control is set to **"Text input"**. Because the property contains a value, it isn't blank, and the label doesn't display any message.

3. Remove all the characters from the text-input control, including any spaces.

Because the [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property no longer contains any characters, it's an empty string, and **IsBlank( FirstName.Text )** is **true**. The required field message is displayed.

For information about how to perform validation by using other tools, see the [Validate](https://learn.microsoft.com/function-validate) function and [working with data sources](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources).

Other examples:


| Formula | Description | Result |
| --- | --- | --- |
| **IsBlank( Blank() )** | Tests the return value from the **Blank** function, which always returns a *blank* value. | **true** |
| **IsBlank( "" )** | A string that contains no characters. | **true** |
| **IsBlank( "Hello" )** | A string that contains one or more characters. | **false** |
| **IsBlank(** ***AnyCollection*** **)** | Because the [collection](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources#collections) exists, it isn't blank, even if it doesn't contain any records. To check for an empty collection, use **IsEmpty** instead. | **false** |
| **IsBlank( Mid( "Hello", 17, 2 ) )** | The starting character for [Mid](https://learn.microsoft.com/function-left-mid-right) is beyond the end of the string. The result is an empty string. | **true** |
| **IsBlank( If( false, false ) )** | An [If](https://learn.microsoft.com/function-if) function with no *ElseResult*. Because the condition is always **false**, this [If](https://learn.microsoft.com/function-if) always returns *blank*. | **true** |

1. Create an app from scratch, and add a **Button** control.

2. Set the button's [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula:

**Collect( IceCream, {Flavor: "Strawberry", Quantity: 300}, {Flavor: "Chocolate", Quantity: 100} )**

3. Preview your app, click or tap the button that you added, and then close Preview.


A collection named **IceCream** is created and contains this data:

![A table with Strawberry and Chocolate flavours with quantity 300 and 100.](https://learn.microsoft.com/media/function-isblank-isempty/icecream-strawberry-chocolate.png)

This collection has two records and isn't empty. **IsEmpty( IceCream )** returns **false**, and **CountRows( IceCream )** returns **2**.

4. Add a second button, and set its [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula:

**Clear( IceCream )**

5. Preview your app, click or tap the second button, and then close Preview.

The collection is now empty:

![A collection with Flavor and Quantity as empty collection.](https://learn.microsoft.com/media/function-isblank-isempty/icecream-clear.png)

The [Clear](https://learn.microsoft.com/function-clear-collect-clearcollect) function removes all the records from a collection, resulting in an empty collection. **IsEmpty( IceCream )** returns **true**, and **CountRows( IceCream )** returns **0**.

You can also use **IsEmpty** to test whether a calculated table is empty, as these examples show:

| Formula | Description | Result |
| --- | --- | --- |
| **IsEmpty( [ 1, 2, 3 ] )** | The single-column table contains three records and, therefore, isn't empty. | **false** |
| **IsEmpty( [ ] )** | The single-column table contains no records and is empty. | **true** |
| **IsEmpty( Filter( [ 1, 2, 3 ], Value > 5 ) )** | The single-column table contains no values that are greater than 5. The result from the filter doesn't contain any records and is empty. | **true** |

