---
title: DateAdd, DateDiff, and TimeZoneOffset functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:39:04 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:39:09 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `DateAdd` function adds a specified number of units to a date/time value, while the `DateDiff` function returns the difference between two date/time values in a specified unit of time.
- The `TimeZoneOffset` function returns the number of minutes between the user's local time and UTC, and can be used with `DateAdd` to convert between local time and UTC.
- The units of time that can be used with `DateAdd` and `DateDiff` include milliseconds, seconds, minutes, hours, days, months, quarters, and years, with days being the default unit.


Detailed summary

- The DateAdd, DateDiff, and TimeZoneOffset functions in Power Platform are used to add to or find the difference in date/time values and convert between local time and UTC, and they apply to various Power Platform components, including Canvas apps, Copilot Studio, Desktop flows, Dataverse formula columns, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The DateAdd function adds a specified number of units to a date/time value, resulting in a new date/time value, and it can also subtract units by specifying a negative value, with units including TimeUnit.Milliseconds, TimeUnit.Seconds, TimeUnit.Minutes, TimeUnit.Hours, TimeUnit.Days, TimeUnit.Months, TimeUnit.Quarters, or TimeUnit.Years, and defaulting to TimeUnit.Days if not specified.
- The DateDiff function returns the difference between two date/time values in a specified unit of time, with the result being a whole number of units, and it can be used with various units, including TimeUnit.Milliseconds, TimeUnit.Seconds, TimeUnit.Minutes, TimeUnit.Hours, TimeUnit.Days, TimeUnit.Months, TimeUnit.Quarters, or TimeUnit.Years, and defaulting to TimeUnit.Days if not specified.
- The TimeZoneOffset function returns the number of minutes between the user's local time and UTC, and it can be used with the DateAdd function to convert between local time and UTC, by adding the TimeZoneOffset to convert to UTC and subtracting it to convert from UTC.
- The DateAdd function takes three arguments: DateTime, which is the date/time value to operate on, Addition, which is the number of units to add, and Units, which is the type of unit to add, and it can be used to add or subtract units from a date/time value, as shown in examples such as adding three days to the current date and time, or subtracting 30 minutes from the current date and time.
- The DateDiff function takes three arguments: StartDateTime, which is the starting date/time value, EndDateTime, which is the ending date/time value, and Units, which is the type of unit to subtract, and it can be used to find the difference between two date/time values, as shown in examples such as finding the difference between the current date and a specified date in days or months.
- The TimeZoneOffset function takes an optional argument, DateTime, which is the date/time value for which to return the offset, and it defaults to the current date/time if not specified, and it can be used to convert between local time and UTC, as shown in examples such as converting the current date and time to UTC or converting a UTC date and time to the user's local time.
- The functions can be used in various scenarios, such as calculating the difference between two dates, adding or subtracting units from a date/time value, and converting between local time and UTC, and they provide a flexible and powerful way to work with dates and times in Power Platform.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-dateadd-datediff)
| Functions | Applies to |
| --- | --- |
| **DateAdd****DateDiff** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages |
| **TimeZoneOffset** | Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages |

| Function | Applies to |
| --- | --- |
| **DateAdd** |
| **DateDiff** |
| **TimeZoneOffset** |

Adds to or finds the difference in date/time values and converts between local time and UTC.

The **DateAdd** function adds a number of units to a date/time value. The result is a new date/time value. You can also subtract a number of units from a date/time value by specifying a negative value.

The **DateDiff** function returns the difference between two date/time values. The result is a whole number of units.

For both functions, units can be **TimeUnit.Milliseconds**, **TimeUnit.Seconds**, **TimeUnit.Minutes**, **TimeUnit.Hours**, **TimeUnit.Days**, **TimeUnit.Months**, **TimeUnit.Quarters**, or **TimeUnit.Years**. By default, both functions use **TimeUnit.Days** as units.


The **TimeZoneOffset** function returns the number of minutes between the user's local time and UTC (Coordinated Universal Time).

You can use **DateAdd** with the **TimeZoneOffset** to convert between the user's local time and UTC (Coordinated Universal Time). Adding **TimeZoneOffset** will convert a local time to UTC, and subtracting it (adding the negative) will convert from UTC to local time.

Also see [Date, Time, and DateTime data types](https://learn.microsoft.com/data-types#date-time-and-datetime) and [working with dates and times](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/show-text-dates-times) for more information.

**DateAdd**( *DateTime*, *Addition* [, *Units* ] )

- *DateTime* - Required. Date/time value to operate on.

- *Addition* - Required. Number, in *Units*, to add to the *DateTime*.

- *Units* - Optional. The type of *Units* to add: **TimeUnit.Milliseconds**, **TimeUnit.Seconds**, **TimeUnit.Minutes**, **TimeUnit.Hours**, **TimeUnit.Days**, **TimeUnit.Months**, **TimeUnit.Quarters**, or **TimeUnit.Years**. If not specified, **TimeUnit.Days** are used.

**DateDiff**( *StartDateTime*, *EndDateTime* [, *Units* ] )

- *StartDateTime* - Required. Starting date/time value.

- *EndDateTime* - Required. Ending date/time value.


- *Units* - Optional. The type of *Units* to subtract: **TimeUnit.Milliseconds**, **TimeUnit.Seconds**, **TimeUnit.Minutes**, **TimeUnit.Hours**, **TimeUnit.Days**, **TimeUnit.Months**, **TimeUnit.Quarters**, or **TimeUnit.Years**. If not specified, **TimeUnit.Days** are used.

**TimeZoneOffset**( [ *DateTime* ] )

- *DateTime* - Optional. Date/time value for which to return the offset. By default, the current date/time is used.

In all of these examples, assume that the current date and time is **July 15, 2013, 1:02 PM**.


| Formula | Description | Result |
| --- | --- | --- |
| **Text( DateAdd( Now(), 3 ),"dd-mm-yyyy hh:mm" )** | Adds three days (default units) to the current date and time. | "18-07-2013 13:02" |
| **Text( DateAdd( Now(), 4, TimeUnit.Hours ),"dd-mm-yyyy hh:mm" )** | Add four hours to the current date and time. | "15-07-2013 17:02" |
| **Text( DateAdd( Today(), 1, TimeUnit.Months ),"dd-mm-yyyy hh:mm" )** | Adds one month to the current date, without time as **Today** doesn't return a time component. | "15-08-2013 00:00" |
| **Text( DateAdd( Now(), ‑30, TimeUnit.Minutes ),"dd-mm-yyyy hh:mm" )** | Subtracts 30 minutes from the current date and time. | "15-07-2013 12:32" |


| Formula | Description | Result |
| --- | --- | --- |
| **DateDiff( Now(), DateValue("1/1/2014") )** | Returns the difference between the two units in the default units of **TimeUnit.Days** | 170 |
| **DateDiff( Now(), DateValue("1/1/2014"), TimeUnit.Months )** | Returns the difference between the two values in **TimeUnit.Months** | 6 |
| **DateDiff( Now(), Today(), TimeUnit.Minutes )** | Returns the difference between the current date/time and the current date only (no time) in minutes. Since the **Now** is later than **Today** the result will be negative. | -782 |

The function DateDiff only returns a whole number of the units being subtracted, and the precision is given in the unit specified. To calculate the difference with a higher precision, use a smaller unit, and convert the result appropriately, like in the examples below.


| Formula | Description | Result |
| --- | --- | --- |
| **DateDiff( TimeValue("09:45:00"), TimeValue("10:15:36"), TimeUnit.Hours )** | The minutes/seconds are ignored, the difference is based on the time up to the hour. | 1 |
| **DateDiff( TimeValue("09:45:00"), TimeValue("10:15:36"), TimeUnit.Minutes )/60** | The minutes are used in the difference, and the result is divided by 60 to have the difference in hours. | 0.5 |
| **DateDiff( TimeValue("09:45:00"), TimeValue("10:15:36"), TimeUnit.Seconds )/3600** | The minutes and seconds are used in the difference; the result is divided by 3600 to have the difference in hours. | 0.51 |

To convert to UTC (Coordinated Universal Time), add the **TimeZoneOffset** for the given time.

For example, imagine the current date and time is **July 15, 2013, 1:02 PM** in Pacific Daylight Time (PDT, UTC-7). To determine the current time in UTC, use:

- **DateAdd( Now(), TimeZoneOffset(), TimeUnit.Minutes )**

**TimeZoneOffset** defaults to the current time, so you don't need to pass it an argument.


To see the result, use the **Text** function with the format *dd-mm-yyyy hh:mm*, which will return **15-07-2013 20:02**.

To convert from UTC, subtract the **TimeZoneOffset** (by adding the negative) for the given time.

For example, imagine the UTC date and time **July 15, 2013, 8:02 PM** is stored in a variable named **StartTime**. To adjust the time for the user's time zone, use:

- **DateAdd( StartTime, −TimeZoneOffset( StartTime ), TimeUnit.Minutes )**

Note the negative sign before **TimeZoneOffset** to subtract the offset rather than add it.

To see the result, use the **Text** function with the format *dd-mm-yyyy hh:mm*, which will result in **15-07-2013 13:02** if you're in Pacific Daylight Time.

