---
title: WeekNum and ISOWeekNum functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:06:40 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:06:56 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The WeekNum and ISOWeekNum functions return the week number of a specific date.
- `WeekNum` uses the week containing January 1 as the first week of the year, while `ISOWeekNum` uses the week containing the first Thursday of the year, following the ISO 8601 standard.
- The `WeekNum` function allows specifying the start of the week using the `StartOfWeek` enumeration, while `ISOWeekNum` always starts the week on Monday.


Detailed summary

- The WeekNum and ISOWeekNum functions in Power Platform are used to determine the week number of a specific date, with the main difference between them being how they define the first week of the year.
- The WeekNum function considers the week containing January 1 as the first week of the year, resulting in a week number range of 1 to 54, whereas the ISOWeekNum function uses the week containing the first Thursday of the year as the first week, following the ISO 8601 standard and resulting in a week number range of 1 to 53.
- The WeekNum function allows for an optional second parameter to specify the day that begins a week, which can be provided using either an Excel code number or the StartOfWeek enumeration, offering options such as Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday.
- In contrast, the ISOWeekNum function always uses Monday as the start of the week, and it does not support the additional code 21 that is available in Excel, instead recommending the use of ISOWeekNum.
- Both functions can accept a single number or a single-column table containing numbers as input, returning a single result or a single-column table of results, respectively, with the ability to shape multi-column tables into single-column tables for processing.
- The functions have specific syntax, with WeekNum using the format WeekNum(DateTime [, StartOfWeek]) and ISOWeekNum using the format ISOWeekNum(DateTime), where DateTime is a required date/time value and StartOfWeek is an optional parameter for WeekNum.
- The provided examples illustrate the differences in week numbering between WeekNum and ISOWeekNum, particularly for the first and last weeks of the year, demonstrating how the choice of function and start of week can affect the resulting week numbers.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-weeknum)
| Function | Applies to |
| --- | --- |
| **[ISOWeekNum](https://app.getrecall.ai/item/493e2727-f8c9-407f-8b31-e45412463773)** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> Canvas apps Dataverse formula columns Model-driven apps Power Pages |
| **[WeekNum](https://app.getrecall.ai/item/ed7c707d-480d-4429-829d-87d8704043f0)** | Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages |

Returns the week number of a specific date.

Use the **WeekNum** and **ISOWeekNum** functions to determine the week number of a date.

These functions differ in how they determine the first week of the year (week 1):

- **[WeekNum](https://app.getrecall.ai/item/ed7c707d-480d-4429-829d-87d8704043f0)** uses the week containing January 1 as the first week of the year. The result from this function can range from 1 to 54.

- **[ISOWeekNum](https://app.getrecall.ai/item/493e2727-f8c9-407f-8b31-e45412463773)** uses the week containing the first Thursday of the year as the first week of the year. This follows the [ISO 8601 date and time standard definition](https://en.wikipedia.org/wiki/ISO_week_date) for week numbering. The result from this function can range from 1 to 53. It is possible that 52 or 53 may be returned for the first days of January since the dates could belong to the last week of the previous year.


Use the second parameter to **WeekNum** to specify which day begins a week. You can provide either an Excel code number or use the StartOfWeek enumeration:

| Excel code | StartOfWeek enumeration | Description |
| --- | --- | --- |
| **1**, **17** | **StartOfWeek.Sunday** | Week begins on Sunday. Default. |
| **2**, **11** | **StartOfWeek.Monday** | Week begins on Monday. |
| **12** | **StartOfWeek.Tuesday** | Week begins on Tuesday. |
| **13** | **StartOfWeek.Wednesday** | Week begins on Wednesday. |
| **14** | **StartOfWeek.Thursday** | Week begins on Thursday. |
| **15** | **StartOfWeek.Friday** | Week begins on Friday. |
| **16** | **StartOfWeek.Saturday** | Week begins on Saturday. |

**[ISOWeekNum](https://app.getrecall.ai/item/493e2727-f8c9-407f-8b31-e45412463773)** always uses Monday as the start of the week. In Excel, the **[WeekNum](https://app.getrecall.ai/item/ed7c707d-480d-4429-829d-87d8704043f0)** function supports an addition code **21** that is not supported here; use **ISOWeekNum** instead.


If you pass a single number to these functions, the return value is a single result. If you pass a single-column [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) that contains numbers, the return value is a single-column table of results, one result for each record in the argument's table. If you have a multi-column table, you can shape it into a single-column table, as [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) describes.

**WeekNum**(*DateTime* [, *StartOfWeek* ])

- *DateTime* - Required. Date/Time value to operate on.

- *StartOfWeek* - Optional. Excel code or StartOfWeek enumeration that determines which day the week begins.

**[ISOWeekNum](https://app.getrecall.ai/item/493e2727-f8c9-407f-8b31-e45412463773)**(*DateTime*)

- *DateTime* - Required. Date/Time value to operate on. The week always begins on Monday.

First and last calendar weeks of 2021


| Date | [WeekNum](https://app.getrecall.ai/item/ed7c707d-480d-4429-829d-87d8704043f0)( Date ) | [ISOWeekNum](https://app.getrecall.ai/item/493e2727-f8c9-407f-8b31-e45412463773)( Date ) | WeekNum( Date, StartOfWeek.Wednesday ) |
| --- | --- | --- | --- |
| Friday, January 1, 2021 | 1 | 53 | 1 |
| Saturday, January 2, 2021 | 1 | 53 | 1 |
| Sunday, January 3, 2021 | 2 | 53 | 1 |
| Monday, January 4, 2021 | 2 | 1 | 1 |
| Tuesday, January 5, 2021 | 2 | 1 | 1 |
| Wednesday, January 6, 2021 | 2 | 1 | 2 |
| Thursday, January 7, 2021 | 2 | 1 | 2 |
| Saturday, December 25, 2021 | 52 | 51 | 52 |
| Sunday, December 26, 2021 | 53 | 51 | 52 |
| Monday, December 27, 2021 | 53 | 52 | 52 |
| Tuesday, December 28, 2021 | 53 | 52 | 52 |
| Wednesday, December 29, 2021 | 53 | 52 | 53 |
| Thursday, December 30, 2021 | 53 | 52 | 53 |
| Friday, December 31, 2021 | 53 | 52 | 53 |

