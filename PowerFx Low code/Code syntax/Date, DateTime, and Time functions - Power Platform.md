---
title: Date, DateTime, and Time functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:38:36 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:38:41 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `Date` function converts individual Year, Month, and Day values to a Date/Time value, with the time portion set to midnight.
- The `Time` function converts individual Hour, Minute, Second, and optional Millisecond values to a Date/Time value with no date associated.
- The `DateTime` function combines date and time components into a single function, taking Year, Month, Day, Hour, Minute, Second, and optional Millisecond values to return a Date/Time value.


Detailed summary

- The Power Platform provides various functions to work with dates and times, including the Date, Time, and DateTime functions, which can be used to convert individual year, month, and day values to a date/time value, individual hour, minute, second, and millisecond values to a time value, and a combination of date and time arguments to a date/time value, respectively.
- The Date function takes three required arguments: Year, Month, and Day, where the Year argument can be an absolute value greater than 1899 or a relative value between 0 and 1899 that is added to 1900, the Month argument ranges from 1 to 12, and the Day argument ranges from 1 to 31, with values outside these ranges being adjusted accordingly.
- The Time function takes three required arguments: Hour, Minute, and Second, and an optional Milliseconds argument, where the Hour argument ranges from 0 to 23, the Minute and Second arguments range from 0 to 59, and the Milliseconds argument ranges from 0 to 999.
- The DateTime function combines the Date and Time functions, taking six required arguments: Year, Month, Day, Hour, Minute, and Second, and an optional Milliseconds argument, which can be used to create a date/time value with both date and time components.
- The Date, Time, and DateTime functions can be used in various Power Platform applications, including Canvas apps, Copilot, Studio, Desktop flows, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages, to work with dates and times in different contexts.
- The functions can also be used in conjunction with other functions, such as the DateValue, TimeValue, and DateTimeValue functions, to convert strings to date/time values, and with formatting functions, such as the Text function, to display date/time values in specific formats.
- Examples of using the Date, Time, and DateTime functions include creating a date value from individual year, month, and day values, creating a time value from individual hour, minute, and second values, and creating a date/time value from a combination of date and time arguments, and then formatting the resulting value using the Text function.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-date-time)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages

Converts date and time components to a date/time value.

The **Date** function converts individual Year, Month, and Day values to a Date/Time value. The time portion is midnight.

- If Year is between 0 and 1899 (inclusive), the function adds that value to 1900 to calculate the year. **70** becomes **1970**.

- If Month is less than 1 or more than 12, the result subtracts or adds that many months from the beginning of the specified year.

- If Day is greater than the number of days in the specified month, the function adds that many days to the first day of the month and returns the corresponding date from a subsequent month. If Day is less than 1, the function subtracts that many days, plus 1, from the first day of the specified month.

The **Time** function converts individual Hour, Minute, Second, and optionally Millisecond values to a Date/Time value. The result has no date associated with it.


The **DateTime** function combines the **Date** and **Time** functions into a single function, taking both date and time arguments and returning a Date/Time value that has both date and time components.

See the [DateValue](https://learn.microsoft.com/function-datevalue-timevalue), [TimeValue](https://learn.microsoft.com/function-datevalue-timevalue), and [DateTimeValue](https://learn.microsoft.com/function-datevalue-timevalue) functions for information about how to convert a string to a value.

Also see [working with dates and times](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/show-text-dates-times) for more information.

**Date**( *Year*, *Month*, *Day* )

- *Year* - Required. Numbers greater than 1899 are interpreted as absolute (1980 is interpreted as 1980); numbers that range from 0 to 1899 are interpreted as relative to 1900. (For example, 80 is interpreted as 1980.)

- *Month* - Required. A number that ranges from 1 to 12.

- *Day* - Required. A number that ranges from 1 to 31.

**Time**( *Hour*, *Minute*, *Second* [, *Milliseconds* ] )

- *Hour* - Required. Number of hours, usually in the range 0 (12:00 AM) to 23 (11:00 PM).

- *Minute* - Required. Number of minutes, usually in the range 0 to 59.

- *Second* - Required. Number of seconds, usually in the range 0 to 59.


- *Milliseconds* - Optional. Number of milliseconds, usually in the range 0 to 999.

**DateTime**( *Year*, *Month*, *Day*, *Hour*, *Minute*, *Second* [, *Milliseconds* ] )

- *Year* - Required. Numbers greater than 1899 are interpreted as absolute (1980 is interpreted as 1980); numbers that range from 0 to 1899 are interpreted as relative to 1900. (For example, 80 is interpreted as 1980.)

- *Month* - Required. A number that ranges from 1 to 12.

- *Day* - Required. A number that ranges from 1 to 31.

- *Hour* - Required. Number of hours, usually in the range 0 (12:00 AM) to 23 (11:00 PM)

- *Minute* - Required. Number of minutes, usually in the range 0 to 59.

- *Second* - Required. Number of seconds, usually in the range 0 to 59.

- *Milliseconds* - Optional. Number of milliseconds, usually in the range 0 to 999.

If a user typed

- **1979** in a text-input control named **HireYear**

- **3** in a text-input control named **HireMonth**

- **17** in a text-input control named **HireDay**

this formula would return `3/17/1979`:

```
Date( Value(HireYear.Text), Value(HireMonth.Text), Value(HireDay.Text) )
```


If a user typed

- **14** in a text-input control named **BirthHour**

- **50** in a text-input control named **BirthMinute**

- **24** in a text-input control named **BirthSecond**

this formula would return `02:50:24 P`:

```
Text( 
    Time(Value(BirthHour.Text), Value(BirthMinute.Text), Value(BirthSecond.Text)), 
    "hh:mm:ss A/P" 
)
```

If a user typed

- **2023** in a text-input control named **EclipseYear**

- **10** in a text-input control named **EclipseMonth**

- **28** in a text-input control named **EclipseDate**

- **13** in a text-input control named **EclipseHour**

- **14** in a text-input control named **EclipseMinute**

- **5** in a text-input control named **EclipseSecond**

- **231** in a text-input control named **EclipseMillisecond**

this formula would return `10/28/23 01:14:05.231 PM`:

```
Text(
    DateTime(Value(EclipseYear.Text), Value(EclipseMonth.Text), Value(EclipseDate.Text), 
        Value(EclipseHour.Text), Value(EclipseMinute.Text), 
        Value(EclipseSecond.Text), Value(EclipseSecond.Millisecond)
    ), 
    "yy/mm/dd hh:mm:ss.000 AM/PM"
)
```

