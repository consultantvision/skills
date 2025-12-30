---
title: Decimal, Float, and Value functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 20:06:35 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 20:06:51 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Decimal, Float, and Value functions in Power Platform are used to convert a string of text to a numeric value, allowing for calculations on numbers entered as text by a user.
- The Value function returns the default numeric data type, usually Decimal, while the Decimal and Float functions return specific data types for scenarios like scientific calculations.
- These functions can handle different number formats, including currency symbols, percentages, and scientific notation, and can also convert other types like date/time and Boolean to numbers.


Detailed summary

- The Decimal, Float, and Value functions in Power Platform are used to convert a string of text or other types to a numeric value, which is essential when performing calculations on numbers that were entered as text by a user.
- These functions can also be used to convert other types to a number, such as date/time and Boolean, and they can handle different languages and formats, including currency symbols, percent signs, and scientific notation.
- The Value function returns the default numeric data type for the Microsoft Power Fx host being used, which is usually Decimal, while the Decimal and Float functions return specific data types, with Decimal being the best choice for most situations and Float being suitable for scientific calculations with very large numbers.
- The functions can handle strings that are prefixed with a currency symbol for the current language, which is ignored, and strings that include a percent sign at the end, indicating that it's a percentage, which is divided by 100 before being returned.
- The functions also support scientific notation, with the string "12e3" being equivalent to 12 x 10^3, and they can convert Boolean values to numbers, with true being equivalent to 1 and false being equivalent to 0.
- The Decimal, Float, and Value functions can take an optional language tag parameter, which specifies the language to use when parsing the string, and if not provided, the language of the current user is used.
- The functions have some limitations, such as the Float function being unable to precisely represent certain numbers, like 123.456, and the Decimal function being unable to handle very large or very small numbers, which can result in errors.
- The Float function can handle larger or smaller numbers than the Decimal function, but it may truncate the number if it requires more precision than a Float can provide, and the Decimal function can handle numbers with more precision than a Float.
- The Microsoft Power Apps only supports the Value function, which returns a Float value, but support for the Decimal and Float functions will be added soon, and the functions are available in various Power Platform components, including Copilot Studio, Desktop flows, Dataverse formula columns, Power Platform CLI, and Dataverse functions.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-value)
| Functions | Applies to |
| --- | --- |
| **Decimal****Float** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> Copilot Studio Desktop flows Dataverse formula columns Power Platform CLI Dataverse functions |
| **Value** | Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages |

Converts a string of text or other types to a number.

Note

[Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) only supports the **Value** function and it returns a **Float** value. Support for the **Decimal** and **Float** functions will be added soon.

Use the **Decimal**, **Float**, and **Value** functions to convert a string of text that contains number characters to a numeric value. Use these function when you need to perform calculations on numbers that were entered as text by a user. These functions can also be used to convert other types to a number, such as date/time and Boolean.


The **Value** function will return the default numeric data type for the [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) host you are using, which is usually **Decimal** and the best choice for most situations. Use the **Decimal** and **Float** functions when you need a specific data type for a particular scenario, such as a scientific calculation with a very large number. For more details on working with these data types, see [the Numbers section of Data types](https://learn.microsoft.com/data-types#numbers).

Different languages interpret **,** and **.** differently. By default, the text is interpreted in the language of the current user. You can specify the language to use with a language tag, using the same language tags that are returned by the [Language](https://learn.microsoft.com/function-language) function.

Notes on the format of the string:

- The string may be prefixed with the currency symbol for the current language. The currency symbol is ignored. Currency symbols for other languages aren't ignored.


- The string may be include a percent sign (**%**) at the end, indicating that it's a percentage. The number will be divided by 100 before being returned. Percentages and currency symbols can't be mixed.

- The string may be in scientific notation, with 12 x 103 expressed as "12e3".

If the number isn't in a proper format, these functions will return an error.

To convert date and time values, use the [DateValue](https://learn.microsoft.com/function-datevalue-timevalue), [TimeValue](https://learn.microsoft.com/function-datevalue-timevalue), or [DateTimeValue](https://learn.microsoft.com/function-datevalue-timevalue) functions.

**Decimal**( *String* [, *LanguageTag* ] ) **Float**( *String* [, *LanguageTag* ] ) **Value**( *String* [, *LanguageTag* ] )

- *String* - Required. String to convert to a numeric value.

- *LanguageTag* - Optional. The language tag in which to parse the string. If not specified, the language of the current user is used.

**Decimal**( *Dynamic* ) **Float**( *Dynamic* ) **Value**( *Dynamic* )


- *Dynamic* - Required. [Dynamic](https://learn.microsoft.com/untyped-object) value that represents a number. Acceptable values are dependent on the untyped provider. For [JSON](https://learn.microsoft.com/function-parsejson), the dynamic value is expected to be a JSON number, boolean, or text that can be converted to a number. Keep in mind that locale-related formats are important considerations when communicating with external systems.

The user running these formulas is located in the United States and has selected English as their language. The **Language** function is returning "en-US". The [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) host uses **Decimal** by default.

Since we are using a host that has **Decimal** as the default, **Value** and **Decimal** will return the same results.


| Formula | Description | Result |
| --- | --- | --- |
| **Value( "123.456" )****Decimal( "123.456" )** | The default language of "en-US" will be used, which uses a period as the decimal separator. | 123.456 (**Decimal**) |
| **Value( "123.456", "es-ES" )****Decimal( "123.456", "es-ES" )** | "es-ES" is the language tag for Spanish in Spain. In Spain, a period is a thousands separator. | 123456 (**Decimal**) |
| **Value( "123,456" )****Decimal( "123,456" )** | The default language of "en-US" will be used, which uses a comma as a thousands separator. | 123456 (**Decimal**) |
| **Value( "123,456", "es-ES" )****Decimal( "123,456", "es-ES" )** | "es-ES" is the language tag for Spanish in Spain. In Spain, a comma is the decimal separator. | 123.456 (**Decimal**) |
| **Value( "12.34%" )****Decimal( "12.34%" )** | The percentage sign at the end of the string indicates that this is a percentage. | 0.1234 (**Decimal**) |
| **Value( "$ 12.34" )****Decimal( "$ 12.34" )** | The currency symbol for the current language is ignored. | 12.34 (**Decimal**) |
| **Value( "24e3" )****Decimal( "24e3" )** | Scientific notation for 24 x 103. | 24000 (**Decimal**) |
| **Value( true )****Decimal( true )** | Converts a Boolean to a number, 0 for *false* and 1 for *true* | 1 **Decimal** |


The **Float** function will have very close to the same results as above. Since 123.456 cannot be precisely represented in **Float**, the result is an approximation that is very close (123.456000000000003069544618484E2) and compounding rounding errors calculations could result in an unexpected result. The resulting type will be **Float** instead.

Where things diverge is if larger or smaller numbers are used.


| Formula | Description | Result |
| --- | --- | --- |
| **Float( 1e100 )** | Because the literal number `1e100` is beyond the range of a **Decimal**, this results in an error before ever calling the **Float** function. | *error (overflow)* |
| **Decimal( 1e100 )** | Same problem as with the **Float** function. | *error (overflow)* |
| **Float( "1e100" )** | The number in the text string is within the range of **Float** numbers. | 1e100 **Float** |
| **Decimal( "1e100" )** | The number in the text string is beyond the range of **Decimal** numbers. | *error (overflow)* |
| **Float( "10000000000.0000000001" )** | The number in the text string is within the range of **Float** numbers. However, the number requires more precision than a **Float** can provide and will be truncated. | 1 (**Float**) |
| **Decimal( "10000000000.0000000001" )** | The number in the text string is within both the range and precision of a **Decimal** numbers. | 10000000000.0000000001 (**Decimal**) |

