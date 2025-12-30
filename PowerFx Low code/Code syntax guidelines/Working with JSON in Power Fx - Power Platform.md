---
title: Working with JSON in Power Fx - Power Platform
tags: Low-Code Development
createdAt: Mon Dec 29 2025 16:44:30 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 16:44:49 GMT+1100 (Australian Eastern Daylight Time)
---




Detailed summary


## Introduction to ParseJSON and Dynamic Values
- Microsoft Power Fx allows makers to read JSON into a Dynamic value using the ParseJSON function, which converts a JSON record string into a Dynamic record with fields that can be accessed using the dot notation.
- The ParseJSON function can be used to parse a JSON string and store it in a dynamic value, which can then be used to access the individual fields of the JSON record, such as ItemName, Quantity, and ReleaseDate, by using the dot notation on the dynamic value.

## Dynamic Value Type Conversion
- It is generally a good idea to explicitly convert a dynamic value to a specific type, such as text, number, or boolean, when setting it to a variable, as setting a dynamic value to a variable makes the variable a dynamic value as well.
- Dynamic values will automatically convert to a specific type when used as function parameters, where the type is a simple type like boolean, number, or text, and the function's parameter profile does not have potential conflicting overloads, allowing for flexible and convenient use of dynamic values in formulas.

## Dynamic Value Coercion and Operators
- Dynamic values will also be converted when assigned to control properties, where possible, and when using operators such as & or +, a dynamic value will be coerced if there is no ambiguity on the expected type, making it easy to work with dynamic values in various contexts.
- JSON does not have a GUID, Color, Time, or DateTime type, so these values are represented as strings, and explicit conversion using functions like GUID(), ColorValue(), DateValue(), or DateTimeValue() is necessary when working with these types of values.

## Handling Missing Fields and Null Values
- Microsoft Power Fx allows for flexible handling of JSON data, including support for nested records, and does not evaluate the existence of fields until the formula is run, which means that writing a formula that uses a field that may not be present in the JSON data will not result in an error, but instead will return a Blank() value.
- JSON supports null values for fields, which will also result in Blank() values in Power Fx, and there is currently no distinction between a missing field and a field that has the value null, so extra care is needed when working with JSON data in Power Fx.

## Case Sensitivity and Nested JSON Structures
- Both JSON and Power Fx are case sensitive, so it is important to take extra care when writing out field names, and JSON values do not have to be in a record-style notation, but can also be simple values like text, true, or a number, which can be parsed using the ParseJSON function and used in formulas.
- The conversion of JSON to a Dynamic value in Power Fx results in nested objects, allowing the use of dot notation to traverse the hierarchy and access specific fields, such as `jsonObject.RootElement.Parent.Name` to retrieve the value "This is the parent".

## Accessing JSON Arrays and Indexing
- When using dot notation, if any of the fields in the expression do not exist, the function will return `Blank()`, providing a way to handle missing fields in the JSON data.
- JSON arrays can be accessed directly or converted into Microsoft Power Fx tables, enabling the use of various functions, such as `Index()`, to retrieve individual records and values, like `Value( Index( jsonOrder.OrderLines, 2 ).Quantity )` to get the quantity of the second order line.

## Converting JSON Arrays to Tables
- The `Table()` function can be used to convert a JSON array into a single-column table with a Dynamic value representing the record, and then the dot notation can be used to access specific fields, such as `jsonRecord.Value.Item` to retrieve the item name.
- To make working with JSON records easier, the `ForAll()` function can be used to convert the Dynamic value to a fully typed record, allowing direct access to object fields, as seen in the example where `typedOrderLines` is created with columns for `Item` and `Quantity`.

## Working with JSON Arrays and Functions
- JSON can also contain arrays of values, and the `Index()` function can be used to retrieve individual items from the array, such as `Text( Index( ParseJSON( jsonStringVariable ), 2 ) )` to get the second item in the array.
- The `ParseJSON()` function is used to convert a JSON string into a Dynamic value, which can then be used to access and manipulate the data in Microsoft Power Fx, as demonstrated in the examples with `jsonObject`, `jsonOrder`, and `jsonRecord`.
- The use of `Set()` function is used to assign the result of `ParseJSON()` to a variable, such as `jsonObject` or `jsonOrder`, allowing for further manipulation and access to the JSON data.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/working-with-json)
[Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) allows makers to read **[JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025)** into a [Dynamic value](https://learn.microsoft.com/untyped-object) using the [ParseJSON](https://learn.microsoft.com/reference/function-parsejson) function.

**ParseJSON** will convert the following **JSON** record string into a **Dynamic** record with fields `ItemName`, `Quantity`, `ReleaseDate` and `AvailableForPreOrder`.

```
{
  "ItemName" : "Widget 1",
  "Quantity" : 46,
  "ReleaseDate" : "2022-09-01",
  "AvailableForPreOrder" : true
}
```

Each of the fields can be accessed using the dot notation on the **Dynamic** value returned from **ParseJSON**.

```
Set( dynvalue, ParseJSON( jsonStringVariable ) );

Set( item, Text ( dynamic.ItemName ) );
Set( quantity, Value ( dynamic.Quantity ) );
Set( release, DateValue ( dynamic.ReleaseDate ) );
Set( preorder, Boolean ( dynamic.AvailableForPreOrder ) );
```


It is generally a good idea to explicitly convert a dynamic value to a specific type. Setting a dynamic as a variable value makes the variable a dynamic value as well. So, converting such value explicitly when setting to a variable is likely needed. But in most cases dynamic values will convert to a specific type automatically ("coerce") when used as function parameters where the type is a simple type like boolean, number, or text, and the function's parameter profile does not have potential conflicting overloads.

```
Left( dynamic.ItemName, 1 ); // "W"
Radians( dynamic.Quantity ); // 0.80285146
If (dynamic.AvailableForPreOrder, "Available", "Not Available" ); // "Available"
```

In addition to automatically converting the type in function calls, dynamic values will also be converted when assigned to control properties, where possible.

```
Label1.Text: dynamic.Quantity
InputText1.Default: dynamic.ItemName
```


And finally, when [using operators](https://learn.microsoft.com/operators) such as **&** or **+**, a dynamic value will be coerced if there is no ambiguity on the expected type.

```
dynamic.Quantity + 1 // result is a number
dynamic.ItemName & " (preorder)" // result is text
dynamic.Quantity + dynamic.Quantity // result is a number
dynamic.Quantity & dynamic.ItemName // result is text
```

Note

**[JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025)** does not have a **GUID**, **Color**, **Time** or **DateTime** type. These values are represented as a string. If you assign a **JSON** dynamic value containing a date to a text property directly, the original text of the **JSON** will be used. This may be important when dealing with time zones, date formats, etc. In such cases you should explicitly convert the values using **GUID()**, **ColorValue()**, **DateValue()**, **DateTimeValue()**, etc.

In case a field name consists of an invalid identifier name, for example when the field names starts with a number or contains invalid characters such as a hyphen, you can put the field names in single quotes:

```
dynamic.'01'
dynamic.'my-field'
```


[Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) won't evaluate the existence of the field until the formula is run. This allows flexibility in the incoming **[JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025)**. For example, the previous **JSON** may sometimes contain an extra field called `Discount`. But in our previous example, this field isn't present. Writing a formula that uses the `Discount` field won't result in any errors, during the app making process or when users use the app. If the field is missing when the formula runs, the value will just result in a [Blank()](https://learn.microsoft.com/reference/function-isblank-isempty) value.

Note

**JSON** supports `null` values for fields. These will also result in **Blank()** values. Currently, there is no distinction in Power Fx between a missing field, or a field that has the value `null`.

As accessing fields of a dynamic value isn't evaluated when writing the formula, there's also no **Intellisense** available. Both **[JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025)** and **[Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6)** are case sensitive, so take extra care in writing out field names.


**JSON** values don't have to be in a record-style notation. Valid **JSON** can be just a value, such as `"text value"`, `true` or `123.456`. In such a case, the dynamic value that **ParseJSON** returns is the value itself and the dot notation isn't used.

```
Set( myText, Boolean( ParseJSON( "true" ) ) );

Set( myNumber, Value( ParseJSON( "123.456" ) ) );
```

Finally, **[JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025)** supports nested records. Converting such **JSON** to a **Dynamic** value results in nested objects, and the dot notation can be used to traverse the hierarchy.

```
{
  "Version" : 1,
  "RootElement" : {
    "Parent" : {
      "Name" : "This is the parent",
      "Child" : {
        "Name" : "This is the child"
      }
    }
  }
}
```

When converting this **[JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025)** string to a **Dynamic** variable named `jsonObject`, the fields can be accessed using the dot notation.

```
Set( jsonObject, ParseJSON( jsonStringVariable ) );

Set( parentName, Text( jsonObject.RootElement.Parent.Name ) ); // "This is the parent"

Set( childName, Text( jsonObject.RootElement.Parent.Child.Name ) ); // "This is the child"
```


If any of the fields in the dot notation expression don't exist, **Blank()** will be returned.

**[JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025)** can contain arrays of values or records. These arrays can be accessed directly, or converted into **[Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6)** tables.

```
{
  "OrderNumber" : "SO000010",
  "CustomerID" : "CUST0126",
  "OrderLines" : [
    {
      "Item" : "Widget 1",
      "Quantity" : 3
    },
    {
      "Item" : "Widget 2",
      "Quantity" : 5
    }
  ]
}
```

This **[JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025)** contains a record with a field named `OrderLines` which contains an array of records. Each record has two fields: `Item` and `Quantity`. If the **JSON** is converted into a **Dynamic** value using the **ParseJSON** function and set to a variable named `jsonOrder`, we can access the individual order lines in several ways.

```
Set( jsonOrder, ParseJSON( jsonStringVariable ) );
```

You can retrieve individual records and values using the [Index()](https://learn.microsoft.com/reference/function-first-last) function. For example, to get the second record in the `OrderLines` field, then access the `Quantity` field and convert it to a value.


```
Set( line2Quantity, Value( Index( jsonOrder.OrderLines, 2 ).Quantity ) ); // 5
```

You can convert the array of order lines directly to a table. This will create a single-column table with a **Dynamic** value representing the record.

```
Set( orderLines, Table( jsonOrder.OrderLines ) );
```

Single column table 'orderLines' now has a 'Value' column that represents the **Dynamic** value. To use any of the fields from a record in this table, use the dot notation to access the specific **[JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025)** field on the **Dynamic** value in the `Value` column.

```
Set( jsonRecord, Index( orderLines, 2 ) ); // Get the second record in the table

Set( line2Item, Text( jsonRecord.Value.Item ) ); // "Widget 2"
```

To make the use of the order line records easier and more straightforward in other parts of your app, you can convert the whole **Dynamic** value to an entirely typed record using the [ForAll()](https://learn.microsoft.com/reference/function-forall) function. Providing the **Dynamic** value directly to **ForAll()** means you can access the object fields directly instead of using the single-column `Value` field.


```
Set( typedOrderLines, ForAll( jsonOrder.OrderLines, { Item : Text( ThisRecord.Item ), Quantity : Value( ThisRecord.Quantity ) } ) );
```

The new `typedOrderLines` variable is now a fully typed **[Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6)** table with the following columns and values:

| Item | Quantity |
| --- | --- |
| "Widget 1" | 3 |
| "Widget 2" | 5 |

The previous examples use arrays of records, but **[JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025)** can also contain arrays of just values. Consider the following example that is a valid **JSON** string containing an array of three strings.

```
[ "First Item", "Second Item", "Third Item"]
```

We can retrieve one of the items from the array using the **Index()** function, and convert it to text.

```
Text( Index( ParseJSON( jsonStringVariable ), 2 ) ) // "Second Item"
```

