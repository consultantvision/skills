---
title: DateValue, TimeValue, and DateTimeValue functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:39:43 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:39:47 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The DateValue function converts a date string to a date/time value, ignoring any time information.
- The TimeValue function converts a time string to a date/time value, ignoring any date information.
- The DateTimeValue function converts a date and time string to a date/time value, allowing for language override to ensure proper interpretation of strings.


Detailed summary

- The DateValue, TimeValue, and DateTimeValue functions in Power Platform are used to convert date, time, or both in a string to a date/time value, and they can be applied to various platforms, including Canvas apps, Copilot Studio, Desktop flows, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The DateValue function specifically converts a date string to a date/time value, ignoring any time information in the date string, while the TimeValue function converts a time string to a date/time value, ignoring any date information in the time string.
- The DateTimeValue function converts a date and time string to a date/time value, and all three functions use the language from the current user's settings by default, but this can be overridden to ensure proper interpretation of strings.
- Dates must be in one of several specified formats, including MM/DD/YYYY, DD/MM/YYYY, YYYY/MM/DD, MM/DD/YY, DD/MM/YY, DD Mon YYYY, or Month DD, YYYY, and the functions can also accept numeric date, month, and year components, or numeric hour, minute, and second components.
- The functions have two parameters: a required string or dynamic value that contains a date, time, or combination date and time value, and an optional language string that can be used to override the default language.
- The DateValue, TimeValue, and DateTimeValue functions can be used in various scenarios, such as converting a date from a string in the user's locale and displaying the result as a long date, converting a date from a string in a specific locale, calculating the difference between two dates, and converting both a date and time string in the current locale.
- The functions can also be used with the DateTimeFormat enum to display dates and times in different formats, and they can be used in combination with other functions, such as the DateDiff function, to perform calculations and comparisons.
- Examples of using the DateValue, TimeValue, and DateTimeValue functions include converting a date string to a long date, converting a date and time string to a long date and time, and comparing a time string to a specific time to determine if a deadline has been met.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-datevalue-timevalue)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages

Converts date, time, or both in a *string* to a *date/time* value.

- **DateValue** function converts a *date string* (like "10/01/2014") to a *date/time* value.

- **TimeValue** function converts a *time string* (like "12:15 PM") to a *date/time* value.

- **DateTimeValue** function converts a *date and time string* (like "January 10, 2013 12:13 AM") to a *date/time* value.

**DateValue** function ignores any time information in the date string, and **TimeValue** function ignores any date information in the time string.

Note

The DateValue, TimeValue, and DateTimeValue functions by default use the language from the current user's settings. You can override it to ensure that strings are interpreted properly. For example, "10/1/1920" is interpreted as *October 1* in "*en*" and as *January 10* in "*fr*".

Dates must use one of these formats:

- MM/DD/YYYY or MM-DD-YYYY

- DD/MM/YYYY or DD-MM-YYYY

- YYYY/MM/DD or YYYY-MM-DD

- MM/DD/YY or MM-DD-YY


- DD/MM/YY or DD-MM-YY

- DD Mon YYYY

- Month DD, YYYY

To convert from numeric date, month and year components, read [Date](https://learn.microsoft.com/function-date-time). To convert from numeric hour, minute and second components, read [Time](https://learn.microsoft.com/function-date-time).

For more information, see:

- [Working with date and time](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/show-text-dates-times)

- [Date/time and data types](https://learn.microsoft.com/data-types#date-time-and-datetime)

**DateValue**( *String* [, *Language*] ) **DateTimeValue**( *String* [, *Language* ] ) **TimeValue**( *String* [, *Language* ] )

- *String* - Required. A text string that contains a date, time, or combination date and time value.

- *Language* - Optional. A language string, such as would be returned by the first two characters from the [Language](https://learn.microsoft.com/function-language) function. If not provided, the language of the current user's settings is used.

**DateValue**( *Dynamic* ) **DateTimeValue**( *Dynamic* ) **TimeValue**( *Dynamic* )


- *Dynamic* - Required. [Dynamic](https://learn.microsoft.com/untyped-object) that represents a date or time. Acceptable values are dependent on the untyped provider. For [JSON](https://learn.microsoft.com/function-parsejson), the dynamic value is expected to be a JSON string that contains a date and time in ISO 8601 format. Dates or times in other formats result in an error. Consider converting such values to [Text](https://learn.microsoft.com/function-text) first, then to a date or time. Keep in mind that time zones and locale-related formats are important considerations when communicating with external systems.

If you type **10/11/2014** into a text-input control named **Startdate**, and then set the [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of a label to these formulas:

- Convert a date from a string in the user's locale and show the result as a long date.

```
Text( DateValue( Startdate.Text ), DateTimeFormat.LongDate )
```

Device set to **en** locale shows the label as **Saturday, October 11, 2014**.

Note


You can use several options with the **DateTimeFormat** enum. To display a list of options, type the parameter followed by a dot or period (**.**) in the formula bar or check [Text](https://learn.microsoft.com/function-text).

- Convert date from a string in the French locale and show the result as a long date. In this example, the months and day of the month are interpreted differently from English.

```
Text( DateValue( Startdate.Text, "fr" ), DateTimeFormat.LongDate )
```

Device set to **en** locale shows the label as **Monday, November 10, 2014**.

If you enter **October 20, 2014** instead:

- Convert a date from a string in the user's locale and calculate the difference between two days, in days

```
DateDiff( DateValue( Startdate.Text ), Today() )
```

Device set to **en** locale shows the label as **9**, indicating the number of days between October 11 and October 20. The [DateDiff](https://learn.microsoft.com/function-dateadd-datediff) function can also show the difference in months, quarters, or years.


If you typed **10/11/2014 1:50:24.765 PM** into a text-input control named **Start**, and then set the [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of a label to the following formula:

- Convert both a date and time string in the current locale.

```
Text( DateTimeValue( Start.Text ), DateTimeFormat.LongDateTime )
```

Device set to **en** locale shows the label as **Saturday, October 11, 2014 1:50:24 PM**.

Note

You can use several options with the **DateTimeFormat** enum. To display a list of options, type the parameter followed by a dot or period (**.**) in the formula bar or check [Text](https://learn.microsoft.com/function-text).

- Convert both a date and time string in the French locale. Month and day of the month are interpreted differently.

```
Text( DateTimeValue( Start.Text, "fr"), DateTimeFormat.LongDateTime )
```

Device set to **en** locale shows the label as **Monday, November 10, 2014 1:50:24 PM**.

- Convert both a date and time string in the user's locale, and display the result with a fractional second.

```
Text( DateTimeValue( Start.Text ), "dddd, mmmm dd, yyyy hh:mm:ss.fff AM/PM" )
```


Device set to **en** locale shows the label as **Saturday, October 11, 2014 01:50:24.765 PM**.

As an alternative, you can specify **hh:mm:ss.f** or **hh:mm:ss.ff** to round the time to the nearest 10th or 100th of a second.

Name a text-input control **FinishedAt**, and set the [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of a label to this formula:

```
If( TimeValue( FinishedAt.Text ) < TimeValue( "5:00:00.000 PM" ),
    "You made it!",
    "Too late!"
)
```

- If you type **4:59:59.999 PM** in the **FinishedAt** control, the label shows "*You made it!*"

- If you type **5:00:00.000 PM** in the **FinishedAt** control, the label shows "*Too late!*"

