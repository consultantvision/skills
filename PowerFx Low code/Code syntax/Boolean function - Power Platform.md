---
title: Boolean function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:22:55 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:22:59 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Boolean function in Power Platform converts text, number, or dynamic values to a Boolean value, which can be true, false, or blank.
- The function takes a required argument, such as Text, Number, or DynamicValue, and converts it to a Boolean value based on specific rules, including case-insensitive "true" or "false" for text and 0 being converted to false for numbers.
- The Boolean function is useful for explicit conversions or when working with dynamic values, and it supports single-column tables of text strings or numbers, as well as dynamic values from JSON.


Detailed summary

- The Boolean function in Power Platform is used to convert text, number, or dynamic values to a Boolean value, which can be true, false, or blank, and it is applicable to various Power Platform components, including Canvas apps, Copilot, Studio, Desktop flows, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The Boolean function is useful when an explicit conversion is needed or when working with dynamic values, as type coercion often happens automatically, such as in the example If( "true", 1, 0 ) which returns 1 because the text string "true" is automatically converted to a Boolean.
- The Boolean function can take different types of input, including text, numbers, and dynamic values, and it has specific rules for converting these inputs to Boolean values, such as converting the text strings "true" and "false" to their corresponding Boolean values, and converting numbers to true if they are non-zero and to false if they are zero.
- When using the Boolean function with text inputs, it is case-insensitive, so "true", "TRUE", and "TrUe" are all converted to true, but other text strings that are not variations of "true" or "false" will return an error, and blank or empty text is converted to a blank Boolean value.
- The Boolean function can also be used with single-column tables of text strings or numbers, and it will convert each value in the table to a Boolean value, returning a table of Boolean values, but if any value in the table cannot be converted, it will return an error for that value.
- When working with dynamic values, the Boolean function can convert JSON boolean values true, false, and null to their corresponding Boolean values, but other JSON values, such as strings or numbers, are converted according to the same rules as text and number inputs, and attempting to convert an array of boolean values to a single column table will return an error.
- The Boolean function is a powerful tool for working with Boolean values in Power Platform, and it provides a flexible way to convert different types of inputs to Boolean values, making it easier to work with conditional logic and other Boolean-based functionality in Power Platform applications.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-boolean)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages

Convert a text, number, or dynamic value to a Boolean value.

Use the **Boolean** function to convert other types to a Boolean value. A Boolean value is *true*, *false*, or *blank*.

In most cases, type coercion happens automatically, and you don't need to use the **Boolean** function explicitly. For example, `If( "true", 1, 0 )` returns 1 because the text string `"true"` is automatically converted to a Boolean. The **Boolean** function is useful when you want an explicit conversion or when you use a dynamic value.

**Boolean**( *Text* ) **Boolean**( *TextSingleColumnTable* )

- *Text* - Required. The string(s) to convert. Must be a case insensitive version of `"true"` or `"false"`. These text strings aren't localized. *blank* and empty text is also accepted and converted to a *blank*. All other text strings return an error.

**Boolean**( *Number* ) **Boolean**( *NumberSingleColumnTable* )


- *Number* - Required. The number(s) to convert. `0` is converted to *false* and all other numbers are converted to *true*. *blank* values are accepted and converted to a *blank*.

**Boolean**( *DynamicValue* )

- *DynamicValue* - Required. The dynamic value to convert. Acceptable values depend on the dynamic provider. For [JSON](https://learn.microsoft.com/function-parsejson), [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) boolean values `true`, `false`, and `null` are accepted, corresponding to *true*, *false*, and *blank* values in Power Fx. String or number values are accepted as outlined for the *String* and *Number* overloads described earlier.


| Formula | Description | Result |
| --- | --- | --- |
| **Boolean( "true" )** | Converts the text string `"true"` to a boolean value. | *true* |
| **Boolean( "false" )** | Converts the text string `"false"` to a boolean value. | *false* |
| **Boolean( "TRUE" )** | Converts the text string `"TRUE"` to a boolean value. | *true* |
| **Boolean( "TrUe" )** | Converts the text string `"TrUe"` to a boolean value. | *true* |
| **Boolean( "Truthful" )** | Attempts to convert the text string `"Truthful"` to a boolean value, but since it isn't a case insensitive variation of `true` and `false`, an error is returned. | *error (invalid argument)* |
| **Boolean( Blank() )** | Converts the *blank* value to a boolean value. | *blank* |
| **Boolean( 0 )** | Converts the number `0` to a boolean value. | *false* |
| **Boolean( 1 )** | Converts the number `1` to a boolean value. | *true* |
| **Boolean( -1234 )** | Converts the number `-1234` to a boolean value. | *true* |


| Formula | Description | Result |
| --- | --- | --- |
| **Boolean( ParseJSON( "{ ""bool"": true }" ).bool )** | Converts the dynamic value `true` (a [JSON](https://app.getrecall.ai/item/36e267ee-5b59-4d51-8d16-00c21c700025) Boolean) to a boolean value. | *true* |
| **Boolean( ParseJSON( "{ ""bool"": null }" ).bool )** | Converts the dynamic value `null` (a JSON null) to a boolean value. | *blank* |
| **Boolean( ParseJSON( "{ ""bool"": "true" }" ).bool )** | Attempts to convert the dynamic value `"true"` (a JSON string) to a boolean value, but since it isn't a valid boolean value in JSON, an error is returned. | *error (invalid argument)* |
| **Boolean( ParseJSON( "[ true, false, null ]" ).bool )** | Attempts to convert an array of boolean values to a single column table. Single column tables aren't supported with dynamic values, and instead the formula `ForAll( Table(ParseJSON( "[true, false, null]" )), Boolean( ThisRecord.Value ) )` or `ForAll( ParseJSON( "[true, false, null]" ), Boolean( ThisRecord ) )` should be used. | *error (invalid argument)* |


| Formula | Description | Result |
| --- | --- | --- |
| **Boolean( [ "true", "false", Blank() ] )** | Converts the single column table of text strings to a single column table of boolean values. | [ *true*, *false*, *blank* ] |
| **Boolean( [ "true", "falsified" ] )** | Converts the single column table of text strings to a single column table of boolean values. Since the second record in this table isn't a case insensitive variation of `true` and `false`, an error is returned for this record. | [ *true*, *error (invalid argument)* ] |
| **Boolean( [ 1, 2, 0  ] )** | Converts the single column table of numbers to a single column table of boolean values. | [ *true*, *true*, *false* ] |

