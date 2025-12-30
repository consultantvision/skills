---
title: ParseJSON function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:20:58 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:21:05 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The ParseJSON function interprets a JSON string and returns a Dynamic value or a specific typed value if a type is provided.
- The function can return errors if the text isn't valid JSON according to the JavaScript Object Notation (JSON) format.
- Using the second argument to convert to a typed object is an experimental feature, and it requires the User-defined types experimental feature to be turned on in Settings > Upcoming features > Experimental.


Detailed summary


## Introduction to ParseJSON Function
- The ParseJSON function in Power Platform is used to interpret a JSON string and return a Dynamic value or a specific typed value if a type is provided, and it applies to various platforms including Canvas apps, Copilot Studio, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The function has an experimental feature that allows converting to a typed object using the second argument, but this feature is not meant for production use, may have restricted functionality, and requires the User-defined types experimental feature to be turned on in Settings.
- The ParseJSON function parses a valid JSON string and returns a Dynamic value representing the JSON structure, and optionally, it can convert the JSON to a typed object that can be directly used in Microsoft Power Fx formulas, making the result easier to consume.
- When converting JSON to a typed object, columns in the type that are not present in the JSON are filled in with blank, columns in the JSON that are not present in the type are ignored, and columns that are both in the type and JSON must have JSON values that are coercible to the type.

## Function Arguments and Error Handling
- The ParseJSON function can return errors if the text is not valid JSON according to the JSON (JSON) format described in ECMA-404 and IETF RFC 8259, and it takes two arguments: JSONString, which is the JSON structure represented as text, and Type, which is the optional Power Fx type definition for the JSON structure.
- Without the second argument, ParseJSON returns a Dynamic value that requires explicit conversion of field values in supported data types, and the function supports various data types in Microsoft Power Apps, including Boolean, Color, Currency, Number, Date, DateTime, and Time, each with its own conversion rules and examples.
- The conversion of JSON data types to Power Apps data types can be done using various functions, such as Boolean, ColorValue, Value, and RGBA, and the function provides a table that lists the data types in Power Apps, corresponding JSON data types, and examples of how to convert them.

## Experimental Features and Feedback
- The use of experimental features, including the ParseJSON function with the second argument, is encouraged for feedback and testing purposes, and users can provide feedback in the Power Apps experimental features community forum.
- The ParseJSON function in Power Platform is used to convert JSON strings into a format that can be used in Power Apps, and it supports various data types, including Date, GUID, HyperLink, Image, Media, Choice, Record, Record Reference, Table, Text, and Two options.

## Data Type Conversions and Examples
- For Date values, the DateValue, TimeValue, or DateTimeValue function can be used to convert the JSON field to a date, and the language of the current user's settings is used by default, as seen in the example where DateValue is used to parse a JSON string containing a date.
- GUID values are represented as strings in JSON and can be converted to GUID using the GUID function, as shown in the example where GUID is used to parse a JSON string containing a GUID.
- HyperLink, Image, and Media values are text data types and can be converted to text using the Text function, as demonstrated in the example where Text is used to parse a JSON string containing a URI.
- Choice values are presented as localized strings backed by a number, and the Switch or If function can be used to convert the number or string to a choice, as illustrated in the example where Switch is used to parse a JSON string containing a choice.
- Record values can be retrieved from a JSON object, but there is no direct conversion from a JSON object to a record structure, and individual fields can be retrieved from the Dynamic value to form a record, as shown in the example where a record is created from a JSON object.
- Record Reference values are unique to datasources and cannot be serialized or unserialized, but field values that represent unique keys can be used in JSON to identify records that can then be looked up.
- Table values can be converted from JSON arrays, which can contain arrays of records or arrays of values, and the ForAll function can be used to convert the Dynamic values to typed tables of records, as demonstrated in the example where ForAll is used to parse a JSON string containing an array of records.
- Text values can be directly converted from JSON using the Text function, as shown in the example where Text is used to parse a JSON string containing a text value.
- Two options values are presented as localized strings backed by a boolean, and the Switch or If function can be used to convert the boolean, number, or string to a two options value, as illustrated in the example where Switch is used to parse a JSON string containing a two options value.

## Handling Nested Objects and Arrays
- The ParseJSON function can also be used to parse nested JSON objects, as demonstrated in the example where a JSON string containing a nested object is parsed to retrieve a text value and a number value, and field names that are invalid identifiers can be enclosed in single quotes to access them.
- The ParseJSON function in Power Platform is used to parse JSON strings, and it can be used to access and manipulate the data in the JSON string, such as accessing child fields and array values.

## Accessing Fields and Array Elements
- When using the ParseJSON function, attempting to access non-existing fields returns Blank(), and JSON null values are also considered Blank(), as demonstrated by the formulas `IsBlank( Text( ParseJSON( JsonString ).parent.child ) )` and `IsBlank( Text( ParseJSON( JsonString ).empty ) )`.
- The ParseJSON function can be used to access array fields in a JSON string, and the Index function can be used to access specific elements in the array, such as `Value( Index( ParseJSON( JsonString ).array, 2 ) )`, which returns the second number in the array.

## Conversion Using ForAll and Table Functions
- The ForAll function can be used to convert a single-column table of dynamic values to a table of specific types, such as numbers or text, as shown in the examples `ForAll( ParseJSON( JsonString ).array, Value( ThisRecord ) )` and `ForAll( ParseJSON( JsonString ).array, { id: Value(ThisRecord.id), name: Text(ThisRecord.name) } )`.
- The Table function can be used to convert a JSON array to a single-column table of dynamic values, which can then be accessed and converted to specific types using the Value function and Index function, as demonstrated by the examples `Set(untypedTable, Table( ParseJSON( JsonString ).array )); Value( Index(untypedTable, 1).Value.Value )` and `Set(untypedTable, Table( ParseJSON( JsonString ).array ) ); Text( Index(untypedTable, 1).Value.name )`.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-parsejson)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Model-driven apps Power Platform CLI Dataverse functions Power Pages

Interprets a [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) string and returns a [Dynamic value](https://learn.microsoft.com/untyped-object) or a specific typed value if a type is provided.

Important

- Using the second argument to **ParseJSON** to convert to a typed object is an experimental feature.

- Experimental features aren't meant for production use and may have restricted functionality. These features are available before an official release so that you can get early access and provide feedback. More information: [Understand experimental, preview, and retired features in canvas apps](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-experimental-preview)

- The behavior that this article describes is available only when the **User-defined types** experimental feature in [Settings > Upcoming features > Experimental](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-experimental-preview#controlling-which-features-are-enabled) is turned on (it's off by default).

- Your feedback is very valuable to us. Please let us know what you think in the [Power Apps experimental features community forum](https://community.powerplatform.com/forums/thread/details/?threadid=c8824a08-8198-ef11-8a69-7c1e52494f33).


The ParseJSON function parses a valid [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) string and returns a [Dynamic](https://learn.microsoft.com/untyped-object) value representing the JSON structure.

Optionally, use the second argument to convert the JSON to a typed object that can be directly used in [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) formulas. This makes the result easier to consume as conversions and coercions at the point of use are no longer required. The untyped JSON is mapped to the type with these rules:

- Columns in the type which are not present in the JSON are filled in with *blank*.

- Columns in the [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) which are not present in the type are ignored.

- Columns that are both in the type and JSON, the JSON value must be coercible to the type.

The ParseJSON function can return errors if the text isn't valid JSON according to the JavaScript Object Notation (JSON) format described in [ECMA-404](https://www.ecma-international.org/publications-and-standards/standards/ecma-404) and [IETF RFC 8259](https://tools.ietf.org/html/rfc8259).

**ParseJSON**( *JSONString* [ , *Type* ] )

- *JSONString* – Required. The [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) structure represented as text.


- *Type* - Optional. The [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) type definition for the JSON structure. Without this argument, **ParseJSON** returns a dynamic value; with it the function returns a specific typed value.

Without the second argument, ParseJSON returns a [Dynamic value](https://learn.microsoft.com/untyped-object) which requires explicit conversion of field values in supported data types. The following table lists the [data types](https://learn.microsoft.com/data-types) in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) and a corresponding JSON data type and how to convert it.


| Data type | [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) examples | Description | Example conversion |
| --- | --- | --- | --- |
| Boolean | `{ "bool": true }` | Boolean is an explicit type in JSON and can be directly converted. | **Boolean( ParseJSON("{ ""bool"": true }").bool )** |
| Color | `{ "color": "#102030" }``{ "r": 255, "g": 128, "b": 0, "a": 0.5 }` | There's no color type in JSON. Color values can be created from RGBA integers or hexadecimal strings. | **ColorValue( ParseJSON( "{ ""color"": ""#102030"" }" ).color )****With( { uo: ParseJSON( "{ ""r"": 255, ""g"": 128, ""b"": 0, ""a"": 0.5 }" ) }, RGBA( Value( uo.r ), Value( uo.g ), Value( uo.b ), Value( uo.a ) ) )** |
| Currency, Number | `{ "numbervalue": 123.5 }` | Numbers are represented directly in JSON with a period ( . ) as the decimal separator. | **Value( ParseJSON("{ ""numbervalue"": 123.5 }").numbervalue )** |
| Date, DateTime, Time | `{ "start": "2022-05-10" }``{ "start": "23:12:49.000" }` | JSON doesn't have a date or time type so can only represent dates and times as strings. A dynamic value can be directly converted from a string in ISO 8601 format to a date, time or datetime. For other formats, first convert the JSON field to text using the [Text()](https://learn.microsoft.com/function-text) function and then use the [DateValue(), TimeValue() or DateTimeValue()](https://learn.microsoft.com/function-datevalue-timevalue) function that by default will use the language of the current user's settings. | **DateValue( ParseJSON("{ ""appointment"": ""2022-05-10"" }").appointment )****DateValue( Text( ParseJSON("{ ""appointment"": ""May 5, 2022"" }").appointment ) )** |
| GUID | `{ "id": "123e4567-e89b-12d3-a456-426655440000" }` | [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) doesn't have a data type for GUIds so they can only be represented as strings. | **GUID( ParseJSON("{ ""id"": ""123e4567-e89b-12d3-a456-426655440000"" }").id )** |
| HyperLink, Image, Media | `{ "URI": "https://northwindtraders.com/logo.jpg" }` | These data types are text data types, and can be converted to text and then used in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685). | **Text( ParseJSON("{ ""URI"": ""**[https://northwindtraders.com/logo.jpg](https://northwindtraders.com/logo.jpg)**"" }").URI )** |
| Choice | `{ "status": 1 }``{ "status": "Closed" }` | Choices are presented as localized strings, backed by a number. The [JSON() function](https://learn.microsoft.com/function-json) serializes a choice to its backing number. There's no direct conversion from number or string to a choice, but the [Switch()](https://learn.microsoft.com/function-if) or [If()](https://learn.microsoft.com/function-if) functions can be used on the text or number value. | **Switch( Value( ParseJSON( "{ ""status"": 1 }" ).status ), 0, Status.Open, 1, Status.Closed )** |
| Record | `{ "field": "value" }` | There's no direct conversion from a JSON object to a record structure, but individual fields can be retrieved from the **Dynamic** value to form a record. | **{ field: Text( ParseJSON( "{ ""field"": ""value"" }" ).field ) }** |
| Record Reference | n/a | Record references are unique to datasources and can't be serialized or unserialized. Field values that represent unique keys could be used in JSON to identify records that can then be looked up. | n/a |
| Table | `[ { "id": 1, "name": "one" }, { "id": 2, "name": "two" } ]``[1, 2, 3]` | JSON can contain arrays, which can be converted into tables. These values can be arrays of records, or arrays of values that are effectively single column tables. **ParseJSON()** arrays can only be converted into a single column table of **Dynamic** values, and can be used as such or converted to typed tables of records using **ForAll()**. | **ForAll( Table( ParseJSON( "[ { ""id"": 1, ""name"": ""one"" }, { ""id"": 2, ""name"": ""two"" } ]" ) ), { id: Value(ThisRecord.Value.id), name: Text(ThisRecord.Value.name) } )** |
| Text | `{ "stringField": "this is text" }` | Text is an explicit type in [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) and can be directly converted. | **Text( ParseJSON( "{ ""stringField"": ""this is text"" }").stringField )** |
| Two options | `{ "available": true }``{ "available": "Yes" }` | Two options are presented as localized strings, backed by a boolean. The [JSON() function](https://learn.microsoft.com/function-json) serializes a two options to its boolean value. There's no direct conversion from boolean, number or string to a two options, but the Switch() or If() functions can be used on the text, number or boolean value. | **Switch( Boolean( ParseJSON( "{ ""available"": true }" ).available ), false, Availability.No, true, Availability.Yes )** |


Given the following JSON string in a variable named `JsonString`

```
{ "parent": { "child": "text value" }, "number": 567 }
```

1. The following formula returns the text `text value`:```
Text( ParseJSON( JsonString ).parent.child )

```

```

2. The following formula returns the number `567`:```
Value( ParseJSON( JsonString ).number )

```

```

In case a field name consists of an invalid identifier name, you can put the field names in single quotes. Given the following [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) string in a variable named `JsonString`

```
{ "0": { "child-field": "text value" } }
```

1. The following formula returns the text `text value`:```
Text( ParseJSON( JsonString ).'0'.'child-field' )

```

```

Given the following [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) string in a variable named `JsonString`

```
{ "text": "text value" , "number": 567, "empty": null }
```

1. Attempting to access non-existing fields returns **Blank()**. The following formula returns `true`:```
IsBlank( Text( ParseJSON( JsonString ).parent.child ) )

```

```

2. [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) `null` values are considered **Blank()**. The following formula returns `true`:```
IsBlank( Text( ParseJSON( JsonString ).empty ) )

```

```


Given the following [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) string in a variable named `JsonString`

```
{ "array": [1, 2, 3] }
```

1. Accessing the second number in the array field's single-column table of **Dynamic** values and converting to a number using **Value()** returns `2`:```
Value( Index( ParseJSON( JsonString ).array, 2 ) )

```

```

2. Converting the single-column table of **dynamic** values in the array field, to a single column table of numbers `{ Value: 1 }, { Value: 2 }, { Value: 3 }`:```
ForAll( ParseJSON( JsonString ).array, Value( ThisRecord ) )

```

```

Given the following [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) string in a variable named `JsonString`

```
{ "array": [
    { "id": 1, "name": "One"},
    { "id": 2, "name": "Two"}
    ] }
```

1. Converting to a typed table of records directly with **ForAll()** can be done by using `ThisRecord.[fieldname]` to access **dynamic** fields and convert them to specific types:

```
ForAll( ParseJSON( JsonString ).array, { id: Value(ThisRecord.id), name: Text(ThisRecord.name) })
```


2. Converting **dynamic** values to a table by using the **Table()** function results in a single-column table of **dynamic** values. The object needs to then be accessed using `Value` (single) column and be converted to types as explained previously.

Given the following [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) string in a variable named `JsonString`

```
{ "array": [1, 2, 3] }
```

**Table()** returns a single-column table of **dynamic** values with a single-column Value for number in the array...

```
Set(untypedTable, Table( ParseJSON( JsonString ).array ));
 
 Value( Index(untypedTable, 1).Value.Value )
```

Given the following [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) string in a variable named `JsonString`

```JSON
{ "array": [
 { "id": 1, "name": "One"},
 { "id": 2, "name": "Two"}
 ] }
```

**Table()** returns a single-column table of **dynamic** values that represents each [json](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) object in the array.

```
Set(untypedTable, Table( ParseJSON( JsonString ).array ) );
  
  Text( Index(untypedTable, 1).Value.name )
```

