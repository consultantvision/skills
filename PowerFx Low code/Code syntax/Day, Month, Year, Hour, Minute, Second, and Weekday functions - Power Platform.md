---
title: Day, Month, Year, Hour, Minute, Second, and Weekday functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:39:51 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:39:56 GMT+1100 (Australian Eastern Daylight Time)
---




Detailed summary

- The Day, Month, Year, Hour, Minute, Second, and Weekday functions in Power Platform are used to return individual components of a Date/Time value, with each function returning a specific part of the date and time.
- The Day function returns the day component of a Date/Time value, ranging from 1 to 31, while the Month function returns the month component, ranging from 1 to 12, and the Year function returns the year component, starting with 1900.
- The Hour function returns the hour component of a Date/Time value, ranging from 0 (12:00 AM) to 23 (11:00 PM), the Minute function returns the minute component, ranging from 0 to 59, and the Second function returns the second component, also ranging from 0 to 59.
- The Weekday function returns the weekday of a Date/Time value, with the default range being from 1 (Sunday) to 7 (Saturday), but this can be modified using a Microsoft Excel Weekday function code or a StartOfWeek enumeration value to specify a different start of the week.
- The Weekday function can take an optional second argument, WeekdayFirst, which specifies the Excel code for the day that starts the week, and if not supplied, it defaults to 1 (Sunday first).
- All of these functions return a number and can be used in various Power Platform applications, including Canvas apps, Copilot Studio, Desktop flows, Dataverse formula columns, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The functions can be used with the Now() function to return the current date and time, and examples are provided to demonstrate how to use these functions to extract specific components of the current date and time.
- The StartOfWeek enumeration values, such as StartOfWeek.Sunday, StartOfWeek.Monday, and others, can be used to specify the start of the week for the Weekday function, and Excel codes, such as 1, 2, 11, and others, can also be used to achieve the same result.


Concise summary

- The Day, Month, Year, Hour, Minute, Second, and Weekday functions return individual components of a Date/Time value.
- Each function returns a number, with specific ranges for each component (e.g. Day: 1-31, Month: 1-12, Hour: 0-23).
- The Weekday function can optionally specify the start of the week using an Excel code or a StartOfWeek enumeration value, with default being Sunday (1) to Saturday (7).




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-datetime-parts)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages

Returns individual components of a Date/Time value.

The **Day** function returns the day component of a Date/Time value, ranging from 1 to 31.

The **Month** function returns the month component of a Date/Time value, ranging from 1 to 12.

The **Year** function returns the year component of a Date/Time value, starting with 1900.

The **Hour** function returns the hour component of a Date/Time value, ranging from 0 (12:00 AM) to 23 (11:00 PM).

The **Minute** function returns the minute component of a Date/Time value, ranging from 0 to 59.

The **Second** function returns the second component of a Date/Time value, ranging from 0 to 59.

The **Weekday** function returns the weekday of a Date/Time value. By default, the result ranges from 1 (Sunday) to 7 (Saturday). You can specify a different range with a [Microsoft Excel](https://app.getrecall.ai/item/64fc8953-42b5-4431-b38a-277caf418012) Weekday function code or a StartOfWeek enumeration value:


| Excel code | StartOfWeek enumeration | Description |
| --- | --- | --- |
| **1**, **17** | **StartOfWeek.Sunday** | Numbers 1 (Sunday) through 7 (Saturday). Default. |
| **2**, **11** | **StartOfWeek.Monday** | Numbers 1 (Monday) through 7 (Sunday). |
| **3** | **StartOfWeek.MondayZero** | Numbers 0 (Monday) through 6 (Sunday). |
| **12** | **StartOfWeek.Tuesday** | Numbers 1 (Tuesday) through 7 (Monday). |
| **13** | **StartOfWeek.Wednesday** | Numbers 1 (Wednesday) through 7 (Tuesday). |
| **14** | **StartOfWeek.Thursday** | Numbers 1 (Thursday) through 7 (Wednesday). |
| **15** | **StartOfWeek.Friday** | Numbers 1 (Friday) through 7 (Thursday). |
| **16** | **StartOfWeek.Saturday** | Numbers 1 (Saturday) through 7 (Friday). |

All functions return a number.

See [working with dates and times](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/show-text-dates-times) for more information.

**Day**( *DateTime* )**Month**( *DateTime* )**Year**( *DateTime* )**Hour**( *DateTime* )**Minute**( *DateTime* )**Second**( *DateTime* )

- *DateTime* - Required. Date/Time value to operate on.

**Weekday**( *DateTime* [, *WeekdayFirst* ] )

- *DateTime* - Required. Date/Time value to operate on.

- *WeekdayFirst* - Optional. Excel code specifying which day starts the week. If not supplied, 1 (Sunday first) is used.


For the following example, the current time is **3:59:37 PM** on **Thursday, April 9, 2015**.

| Formula | Description | Result |
| --- | --- | --- |
| **Year( Now() )** | Returns the year component of the current time and date. | 2015 |
| **Month( Now() )** | Returns the month component of the current time and date. | 4 |
| **Day( Now() )** | Returns the day component of the current time and date. | 9 |
| **Hour( Now() )** | Returns the hour component of the current time and date. | 15 |
| **Minute( Now() )** | Returns the minute component of the current time and date. | 59 |
| **Second( Now() )** | Returns the second component of the current time and date. | 37 |
| **Weekday( Now() )** | Returns the weekday component of the current time and date, using the default start of the week as Sunday. | 5 |
| **Weekday( Now(), 14 )** | Returns the weekday component of the current time and date, using an Excel code to specify the start of the week as Thursday. | 1 |
| **Weekday( Now(), StartOfWeek.Wednesday )** | Returns the weekday component of the current time and date, using a **StartOfWeek** enumeration to specify the start of the week as Wednesday. | 2 |

