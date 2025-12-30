---
title: Text function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 19:59:45 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 19:59:52 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Text function in Power Platform converts any value and formats a number or date/time value to a string of text.
- It can use a predefined date/time format or a custom format with placeholders to define the format of numbers and dates.
- The function is globally aware and can properly write out dates, times, currencies, and numbers in different languages, using language tags to specify the language of the custom format and the result.


Detailed summary


## Introduction to Text Function
- The Text function in Power Platform is used to convert any value and format a number or date/time value to a string of text, and it can be applied to various platforms such as Canvas apps, Copilot Studio, Desktop flows, Dataverse formula columns, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The Text function formats a number or a date/time value based on one of two types of arguments: a predefined date/time format using the DateTimeFormat enumeration, which automatically adjusts to each user's language and region, or a custom format comprising a string of placeholders that define the format of numbers and dates.
- The DateTimeFormat enumeration includes various formats such as LongDate, LongDateTime, LongDateTime24, LongTime, LongTime24, ShortDate, ShortDateTime, ShortDateTime24, ShortTime, ShortTime24, and UTC, each with its own description and examples.
- The custom format includes placeholders such as 0 (zero), #, ., and , (comma), which are used to define the format of numbers and dates, and the language placeholder specifies the language in which to interpret the other placeholders.

## Conversion and Default Format
- The Text function can also convert any data type to a text representation using a default format, which is useful for passing non-text values to text-based functions such as Len, Right, and IsMatch.
- The function supports a subset of the placeholders that Microsoft Excel does, and the language-format placeholder specifies whether a period is a decimal separator or a thousands separator, depending on the language of the custom format.
- If a number has more digits to the right of the decimal point than there are placeholders in the format, the number rounds to as many decimal places as there are placeholders, and the function can be used with date and time values, such as Tuesday, April 7, 2020 8:26:59.180 PM, in the time zone UTC-7 hours.

## Number and Date Formatting Rules
- The Text function in Power Platform has specific rules for displaying numbers, such as showing extra digits to the left of the decimal point if there are more digits than placeholders, and displaying numbers less than 1 with a decimal point if the format contains only number signs to the left of the decimal point.
- The function uses various placeholders to display dates and times, including month, day, year, hour, minute, and second, with options for displaying these values with or without leading zeros, such as "m" for month without a leading zero, "mm" for month with a leading zero, "d" for day without a leading zero, and "dd" for day with a leading zero.
- The function also supports displaying dates and times in different formats, such as "mmm" for month as an abbreviation, "mmmm" for month as a full name, "ddd" for day as an abbreviation, and "dddd" for day as a full name, as well as "yy" for year as a two-digit number and "yyyy" for year as a four-digit number.

## Global Awareness and Language Tags
- Additionally, the function allows for the display of hours, minutes, and seconds, with options for 12-hour or 24-hour clocks, and supports the display of fractions of seconds using the "f" placeholder.
- The function is globally aware and can properly write out dates, times, currencies, and numbers for a wide array of languages, using language tags to specify the language of the custom format and the language of the result.

## Language Placeholder Usage
- To use the Text function, makers need to provide two pieces of information: the language of the custom format, which can be specified using a language placeholder or by taking the default value, and the language of the result, which can be specified by adding a third, optional argument to the function.
- The function also supports the use of various characters in the format string, including currency symbols, plus signs, parentheses, colons, and more, which will appear in the result as is, and reserves certain characters for future placeholders.
- The Text function in Power Platform allows users to specify the language of a custom format using the [$-LanguageTag] placeholder, which can be used to specify just the language, such as [$-en] for English, or the language and region, such as [$-en-GB] for English in Great Britain.
- The language placeholder can appear anywhere in the custom format but only once, and if it is not specified, the language tag for the current language is inserted automatically, with [$-en-US] being the default if the placeholder is not present.

## Usage Syntax and Dynamic Values
- The Text function can be used in several ways, including Text(NumberOrDateTime, DateTimeFormatEnum [, ResultLanguageTag]), Text(NumberOrDateTime, CustomFormat [, ResultLanguageTag]), Text(AnyValue), and Text(Dynamic), where the arguments include the value to format, the format to use, and an optional language tag to override the default language.
- The function returns translated strings for months, weekdays, and AM/PM designations, as well as the appropriate group and decimal separators, based on the language tag specified or the default language of the user running the app.

## Language Function and Current Language
- The Language function can be used to return the language tag for the current user, and this value can be overridden by supplying a language tag as the third argument to the Text function, allowing for customization of the output based on different languages and regions.
- The Text function also supports dynamic values, which can be converted to text based on the provider being used, such as JSON, and the function will automatically convert numbers and booleans to text unless otherwise specified.
- The Text function in Power Platform is used to format numbers, dates, and times as strings, with various options for customization, including the use of placeholders and locale-specific formatting.
- The function can format numbers with decimal places, thousands separators, and currency symbols, as shown in examples such as Text( 1234.59, "####.#" ) which results in "1234.6" and Text( 12000, "$ #,###" ) which results in "$ 12,000".
- The Text function can also format dates and times, including the use of DateTimeFormat enumeration members such as DateTimeFormat.LongDate and DateTimeFormat.LongDateTime, as well as custom format strings, with examples including Text( Now(), DateTimeFormat.LongDate ) which results in "Monday, November 23, 2015" and Text( Now(), "d-mmm-yy" ) which results in "23-Nov-15".
- Additionally, the function can convert other data types to strings, including numbers, date/time values, Boolean values, and GUID values, as shown in examples such as Text( 1234567.89 ) which results in "1234567.89" and Text( GUID() ) which results in a string representation of a generated GUID.
- The function also supports locale-specific formatting, as demonstrated by examples such as Text(1234567.89, "[$-fr-FR]# ###,## €", "fr-FR") which results in "1 234 567,89 €" and Text( Date(2016,1,31), "dddd mmmm d", "es-ES" ) which results in "domingo enero 31".
- The Language function is returning "en-US", indicating that the current language is set to English (United States), which affects the formatting of dates, times, and numbers.

## Examples of Number and Date Formatting
- The Text function also supports dynamic values, which can be converted to text based on the provider being used, such as JSON, and the function will automatically convert numbers and booleans to text unless otherwise specified.
- The Text function in Power Platform is used to format numbers, dates, and times as strings, with various options for customization, including the use of placeholders and locale-specific formatting.
- The function can format numbers with decimal places, thousands separators, and currency symbols, as shown in examples such as Text( 1234.59, "####.#" ) which results in "1234.6" and Text( 12000, "$ #,###" ) which results in "$ 12,000".

## Examples of Date-Time and Locale-Specific Formatting
- The Text function can also format dates and times, including the use of DateTimeFormat enumeration members such as DateTimeFormat.LongDate and DateTimeFormat.LongDateTime, as well as custom format strings, with examples including Text( Now(), DateTimeFormat.LongDate ) which results in "Monday, November 23, 2015" and Text( Now(), "d-mmm-yy" ) which results in "23-Nov-15".
- Additionally, the function can convert other data types to strings, including numbers, date/time values, Boolean values, and GUID values, as shown in examples such as Text( 1234567.89 ) which results in "1234567.89" and Text( GUID() ) which results in a string representation of a generated GUID.
- The function also supports locale-specific formatting, as demonstrated by examples such as Text(1234567.89, "[$-fr-FR]# ###,## €", "fr-FR") which results in "1 234 567,89 €" and Text( Date(2016,1,31), "dddd mmmm d", "es-ES" ) which results in "domingo enero 31".




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-text)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages

Converts any value and formats a number or date/time value to a string of text.

The **Text** function formats a number or a date/time value based on one of these types of arguments:

- A predefined date/time format, which you specify by using the **DateTimeFormat** enumeration. For dates and times, this approach is preferred as it automatically adjusts to each user's language and region.


- A custom format, which comprises a string of placeholders that define, for example, whether numbers show a decimal separator and dates show the full name of the month, the month as an abbreviation, or the month as a number. [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) supports a subset of the placeholders that [Microsoft Excel](https://app.getrecall.ai/item/64fc8953-42b5-4431-b38a-277caf418012) does. In this string, the language placeholder specifies the language in which to interpret the other placeholders. If the custom format includes a period, for example, the language-format placeholder specifies whether the period is a decimal separator (ja-JP) or a thousands separator (es-ES).

See [working with dates and times](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/show-text-dates-times) for more information.

The **Text** function can also convert any data type to a text representation using a default format. Use this to pass non-text values to text-based functions such as [Len](https://learn.microsoft.com/function-len), [Right](https://learn.microsoft.com/function-left-mid-right), and [IsMatch](https://learn.microsoft.com/function-ismatch).

For these examples, date and time used is Tuesday, April 7, 2020 8:26:59.180 PM, in the time zone UTC-7 hours.


| DateTimeFormat enum | Description | Examples (using **en-US**) |
| --- | --- | --- |
| **LongDate** | Four-digit year, month name, day of the month, and day of the week. The names of the month and day of the week aren't abbreviated. | "Tuesday, April 7, 2020" |
| **LongDateTime** | Four-digit year, month name, day of the month, and day of the week, plus hour (12-hour clock), minutes, seconds, and AM/PM designation. The names of the month and day of the week aren't abbreviated. | "Tuesday, April 7, 2020 8:26:59 PM" |
| **LongDateTime24** | Four-digit year, month, day of the month, and day of the week, plus hour (24-hour clock), minutes, and seconds. The names of the month and day of the week aren't abbreviated. | "Tuesday, April 7, 2020 20:26:59" |
| **LongTime** | Hour (12-hour clock), minutes, seconds, and AM/PM designation. | "8:26:59 PM" |
| **LongTime24** | Hour (24-hour clock), minutes, seconds. | "20:26:59" |
| **ShortDate** | Four-digit year with numerical month and day of the month. | "4/7/2020" |
| **ShortDateTime** | Four-digit year with numerical month and day of the month, plus hour (12-hour clock), minutes, and AM/PM designation. | "4/7/2020 8:26 PM" |
| **ShortDateTime24** | Four-digit year with numerical month and day of the month, plus hour (24-hour clock) and minutes. | "4/7/2020 20:26" |
| **ShortTime** | Hour (12-hour clock), minutes, and AM/PM designation. | "8:26 PM" |
| **ShortTime24** | Hour (24-hour clock) and minutes. | "20:26" |
| **UTC** | The date/time value is converted to UTC based on the current user's time zone and formatted according to the ISO 8601 standard. | "2020-04-08T03:26:59.180Z" |


| Placeholder | Description |
| --- | --- |
| **0** (*zero*) | Displays insignificant zeros if a number has fewer digits than there are zeros in the format. For example, use the format **#.00** if you want to display **8.9** as **8.90**. |
| **#** | Follows the same rules as the **0** (zero). However, **Text** doesn't return extra zeros when the number has fewer digits on either side of the decimal than there are # symbols in the format. For example, **8.9** is displayed if the custom format is **#.##** and the number to format is **8.9**. |
| **.** (*period*) | Displays the decimal point in a number. Depends on the language of the custom format; see [global apps](https://learn.microsoft.com/#global-apps) for more details. |
| **,** (*comma*) | Displays the grouping separator in a number, often used for thousands. **Text** separates groups by commas if the format contains a comma that's enclosed by number signs (**#**) or by zeros. Depends on the language of the custom format; see [global apps](https://learn.microsoft.com/#global-apps) for more details. |


If a number has more digits to the right of the decimal point than there are placeholders in the format, the number rounds to as many decimal places as there are placeholders. If there are more digits to the left of the decimal point than there are placeholders, the extra digits are displayed. If the format contains only number signs (#) to the left of the decimal point, numbers less than 1 start with a decimal point (for example, **.47**).


| Placeholder | Description |
| --- | --- |
| **m** | Displays the month as a number without a leading zero. |
| **mm** | Displays the month as a number with a leading zero when appropriate. |
| **mmm** | Displays the month as an abbreviation (**Jan** to **Dec**). |
| **mmmm** | Displays the month as a full name (**January** to **December**). |
| **d** | Displays the day as a number without a leading zero. |
| **dd** | Displays the day as a number with a leading zero when appropriate. |
| **ddd** | Displays the day as an abbreviation (**Sun** to **Sat**). |
| **dddd** | Displays the day as a full name (**Sunday** to **Saturday**). |
| **yy** | Displays the year as a two-digit number. |
| **yyyy** | Displays the year as a four-digit number. |
| **h** | Displays the hour as a number without a leading zero. |
| **hh** | Displays the hour as a number with a leading zero when appropriate. If the format contains **AM** or **PM**, the hour is shown based on the 12-hour clock. Otherwise, the hour is shown based on the 24-hour clock. |
| **m** | Displays the minute as a number without a leading zero.<br><br>This placeholder must appear immediately after the **h** or **hh** code or immediately before the **ss** code; otherwise, **Text** returns the month instead of minutes. |
| **mm** | Displays the minute as a number with a leading zero when appropriate.<br><br>This placeholder must appear immediately after the **h** or **hh** placeholder or immediately before the **ss** placeholder. Otherwise, **Text** returns the month instead of minutes. |
| **s** | Displays the second as a number without a leading zero. |
| **ss** | Displays the second as a number with a leading zero when appropriate. |
| **f** | Displays the fractions of seconds. |
| **AM/PM,a/p** | Displays the hour based on a 12-hour clock. **Text** returns "AM" or "a" for times from midnight until noon and "PM" or "p" for times from noon until midnight |


You can include any of these characters in your format string. They will appear in the result of **Text** as is. Additional characters are reserved for future placeholders, so you shouldn't use them.

| Character | Description |
| --- | --- |
| Any currency symbol | Dollar sign, cents sign, euro sign, etc. |
| **+** | Plus sign |
| **(** | Left parenthesis |
| **:** | Colon |
| **^** | Circumflex accent (caret) |
| **'** | Apostrophe |
| **{** | Left curly bracket |
| **<** | Less-than sign |
| **=** | Equal sign |
| **-** | Minus sign |
| **/** | Slash mark |
| **)** | Right parenthesis |
| **&** | Ampersand |
| **~** | Tilde |
| **}** | Right curly bracket |
| **>** | Greater-than sign |
| Space character |

The **Text** function is globally aware. For a wide array of languages, it knows how to properly write out dates, times, currencies, and numbers. To do its job, it needs two pieces of information:


- **The language of the custom format:** For makers, how should a custom format be interpreted? The separator characters (**.** and **,**) have different meanings in different languages. If you specify a custom format, you can include a language placeholder or take the default value, which reflects the language to which your device is set. Even easier, you can use one of the [predefined date/time formats](https://learn.microsoft.com/#predefined-datetime-formats), which are language agnostic.

- **The language of the result:** For users, in what language should the function result appear? Names of months and weekdays must be in the appropriate language for the user of the app, which you can specify by adding a third, optional argument to the **Text** function.

For both, you specify the language by using a [language tag](https://learn.microsoft.com/function-language#language-tags). To see the list of supported languages, type **Text( 1234, "", )** in the formula bar or the **Advanced** tab of the right-hand pane, and then scroll through the list of locales suggested for the third argument.

To specify the language of the custom format, use:


| Placeholder | Description |
| --- | --- |
| **[$-*****LanguageTag*****]** | *LanguageTag* is a language tag as returned from the **Language** function. It can specify just the language (such as **[$-en]** for English), or it can also specify the region (such as **[$-en-GB]** to further specify Great Britain). |

The language placeholder can appear anywhere in the custom format but only once.

If you specify a custom format without a language placeholder and the format is ambiguous from a global standpoint, the language tag for your current language is inserted automatically.

**[$-en-US]** is assumed if this placeholder isn't present when your app is run.

Note

In a future version, the syntax of this placeholder may change to avoid confusion with a similar, but different, placeholder that Excel supports.

The result of **Text** includes translated strings for months, weekdays, and AM/PM designations, as well as the appropriate group and decimal separators.


By default, **Text** uses the language of the user running the app. The **Language** function returns the language tag for the current user. You can override this default value by supplying a language tag for the third argument to **Text**.

**Text**( *NumberOrDateTime*, *DateTimeFormatEnum* [, *ResultLanguageTag* ] )

- *NumberOrDateTime* - Required. The number or the date/time value to format.

- *DateTimeFormat* - Required. A member of the **DateTimeFormat** enumeration.

- *ResultLanguageTag* - Optional. The language tag to use for the result text. By default, the language of the current user is used.

**Text**( *NumberOrDateTime*, *CustomFormat* [, *ResultLanguageTag* ] )

- *Number* - Required. The number or the date/time value to format.

- *CustomFormat* - Required. One or more placeholders enclosed in double quotation marks.

- *ResultLanguageTag* - Optional. The language tag to use for the result text. By default, the language of the current user is used.

**Text**( *AnyValue* )

- *AnyValue* - Required. Value to convert to a text representation. A default format is used.


**Text** ( *Dynamic* )

- *Dynamic* - Required. [Dynamic](https://learn.microsoft.com/untyped-object) value that represents a string. Acceptable values are dependent on the untyped provider. For [JSON](https://learn.microsoft.com/function-parsejson), if the dynamic value is a number or boolean, it will be converted to text.

Unless otherwise specified, the user running these formulas is located in the United States and has selected English as their language. The **Language** function is returning "en-US".


| Formula | Description | Result |
| --- | --- | --- |
| **Text( 1234.59, "####.#" )** | Formats the number with one decimal place. | "1234.6" |
| **Text( 8.9, "#.000" )** | Pads the decimal portion of the number with trailing zeros, if needed. | "8.900" |
| **Text( 0.631, "0.#" )** | Pads the whole portion of the number with leading zeros, if needed. | "0.6" |
| **Text( 12, "#.0#" )****Text( 1234.568, "#.0#" )** | Pads the decimal portion of the number with zeros for one decimal place, and includes a second decimal place if supplied. | "12.0""1234.57" |
| **Text( 12000, "$ #,###" )****Text( 1200000, "$ #,###" )** | Places a thousands separator every three digits, and includes a currency symbol. | "$ 12,000""$ 1,200,000" |

- At **2:37:47 PM** on **Monday, November 23, 2015**

- United States Pacific Time Zone (UTC-8)


<div class="joplin-table-wrapper"><table aria-label="Date/Time"><thead><tr><th>Formula</th><th>Description</th><th>Result</th></tr></thead><tbody><tr><td><strong>Text( Now(), DateTimeFormat.LongDate )</strong></td><td>Formats as a long date string, in the language and locale of the current user.</td><td>"Monday, November 23, 2015"</td></tr><tr><td><strong>Text( Now(), DateTimeFormat.LongDateTime )</strong></td><td>Formats as a long date and time string, in the language and locale of the current user, using a 12-hour clock.</td><td>"Monday, November 23, 2015 2:37:47 PM"</td></tr><tr><td><strong>Text( Now(), DateTimeFormat.LongTime24 )</strong></td><td>Formats as a long time string, using a 24-hour clock.</td><td>"14:37:47"</td></tr><tr><td><strong>Text( Now(), DateTimeFormat.ShortDate )</strong></td><td>Formats as a short date string, in the language and locale of the current


user.</td><td>"11/23/2015"</td></tr><tr><td><strong>Text( Now(), "d-mmm-yy" )</strong></td><td>Formats using placeholder characters:<ul><li><strong>d</strong> for a single-digit or double-digit day of the month</li><li><strong>-</strong> as a literal character copied to the result</li><li><strong>mmm</strong> for a three-letter abbreviation of the month</li><li><strong>-</strong> as another literal character copied to the result</li><li><strong>yy</strong> for a two-digit abbreviation of the year</li></ul></td><td>"23-Nov-15"</td></tr><tr><td><strong>Text(1448318857*1000, "mmm. dd, yyyy (hh:mm:ss AM/PM)")</strong></td><td>Shows a Unix date-time value in human-readable format if you multiply the source value by 1,000.</td><td>"Nov. 23, 2015 (02:47:37 PM)"</td></tr></tbody></table></div>


| Formula | Description | Result |
| --- | --- | --- |
| **Text(1234567.89, "[$-fr-FR]# ###,## €", "fr-FR")** | Shows a space as a grouping separator, the comma as a decimal separator, and **€** as the currency symbol. | "1 234 567,89 €" |
| **Text(1234567,89; "[$-fr-FR]# ###,## €")** | If the source data follows the French custom of using a comma as the decimal separator, you must change your locale to French and separate the arguments with a semi-colon instead of a comma to get the same result as above. | "1 234 567,89 €" |
| **Text( Date(2016,1,31), "dddd mmmm d" )** | Returns the weekday, month, and day of the month in the language of the current user. Because none of the placeholders are language dependent, there is no need for a format text language tag. | "Sunday January 31" |
| **Text( Date(2016,1,31), "dddd mmmm d", "es-ES" )** | Returns the weekday, month, and day of the month in the "es-ES" language. | "domingo enero 31" |


| Formula | Description | Result |
| --- | --- | --- |
| **Text( 1234567.89 )** | Converts a number to a string. There are no thousands separators or control over the number of digits before or after the decimal separator; for more control, supply number placeholders as the second argument. | "1234567.89" |
| **Text( DateTimeValue( "01/04/2003" ) )** | Converts a date/time value to a string of text. To control the conversion, provide either a member of the DateTimeFormat enumeration or a custom-format string. | "1/4/2003 12:00 AM" |
| **Text( true )** | Converts a Boolean value to a string. | "true" |
| **Text( GUID() )** | Converts a generated GUID value to a string. | "f8b10550-0f12-4f08-9aa3-bb10958bc3ff" |
| **Left( Text( GUID() ), 4 )** | Returns the first four characters of a generated GUID. | "2d9c" |


