---
title: EDate and EOMonth functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:45:58 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:46:04 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The EDate function adds or subtracts months from a Date/Time value, leaving the day portion unmodified unless it exceeds the new month's end date.
- The EOMonth function adds or subtracts months from a Date/Time value and changes the day portion to the last day of the resulting month.
- Both EDate and EOMonth functions return a Date value with no time component, and they take two required parameters: DateTime and NumberOfMonths.


Detailed summary

- The EDate and EOMonth functions in the Power Platform are used to add or subtract months from a Date/Time value, with the EDate function leaving the day portion unmodified unless the new value would be beyond the end of the month, and the EOMonth function changing the day portion to the last day of the resulting month.
- The EDate function is useful for calculating maturity dates or due dates that fall on the same day of the month as the date of issue, while the EOMonth function is useful for calculating maturity dates or due dates that fall on the last day of the month.
- Both functions take two required parameters: DateTime, which is the Date/Time value to operate on, and NumberOfMonths, which is the number of months to add or subtract to DateTime, with a positive value yielding a future date, a negative value yielding a past date, and zero leaving the entire input DateTime unchanged for EDate or changing the day portion to the end of the month for EOMonth.
- The functions return a Date value with no time component, even if one was present in the input Date/Time, and can be used in various Power Platform applications, including Canvas apps, Copilot Studio, Desktop flows, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- Examples of using the EDate and EOMonth functions include adding or subtracting months from a specific date, such as May 15, 2023, and adjusting the date accordingly, with results including Date(2023,9,15) for EDate(Date(2023,5,15), 4) and Date(2023,9,30) for EOMonth(Date(2023,5,15), 4).
- The functions can also handle edge cases, such as when the resulting month has fewer days than the original month, in which case the EDate function will adjust the date to the last day of the resulting month, as seen in the example EDate(Date(2023,5,31), 1) resulting in Date(2023,6,30).




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-edate-eomonth)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages

Adds or subtracts months to a Date/Time value, with optional adjustment to the day of the month.

The **EDate** and **EOMonth** functions move a Date/Time forward or backward by a specified number of months.

After the month adjustment, **EDate** leaves the day portion unmodified unless the new value would be beyond the end of the month. For example, moving July 31 backward by one month yields June 30. Use **EDate** to calculate the maturity dates or due dates that fall on the same day of the month as the date of issue.

After the month adjustment, **EOMonth** changes the day potion to the last day of the resulting month. Use **EOMonth** to calculate the maturity dates or due dates that fall on the last day of the month. **EOMonth** can be used to move a Date/Time to the end of the month by adding zero months.


All functions return a Date value. No time component is included, even if one was present in the input Date/Time.

See [working with dates and times](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/show-text-dates-times) for more information.

**EDate**( *DateTime*, *NumberOfMonths* )

- *DateTime* - Required. Date/Time value to operate on.

- *NumberOfMonths* - Required. Number of months to add or subtract to *DateTime*. A positive value yields a future date, a negative value yields a past date, and zero leaves the entire input *DateTime* unchanged.

**EOMonth**( *DateTime*, *NumberOfMonths* )

- *DateTime* - Required. Date/Time value to operate on.

- *NumberOfMonths* - Required. Number of months to add or subtract to *DateTime*. A positive value yields a future date, a negative value yields a past date, and zero changes the day portion of the input *DateTime* to the end of the month.


| Formula | Description | Result |
| --- | --- | --- |
| **EDate( Date(2023,5,15) , 4 )** | Adds four months to May 15, 2023, leaving the date unchanged. | Date(2023,9,15) |
| **EDate( Date(2023,5,15) , -1002 )** | Subtracts 1,002 months from May 15, 2023, leaving the date unchanged. | Date(1939,11,15) |
| **EDate( Date(2023,5,15) , 0 )** | Adds zero months to May 15, 2023 leaving the month and year unchanged, also leaves the date unchanged. | Date(2023,5,15) |
| **EDate( Date(2023,5,31) , 1 )** | Adds one month to May 15, 2023, adjusting the date since June doesn't have as many days as May. | Date(2023,6,30) |


| Formula | Description | Result |
| --- | --- | --- |
| **EOMonth( Date(2023,5,15); , 4 )** | Adds four months to May 15, 2023, moving the date to the end of the month. | Date(2023,9,30) |
| **EOMonth( Date(2023,5,15); , -1002 )** | Subtracts 1,002 months from May 15, 2023, moving the date to the end of the resulting month. | Date(1939,11,30) |
| **EOMonth( Date(2023,5,15); , 0 )** | Adds zero months to May 15, 2023 leaving the month and year unchanged, moving the date to the end of the unmodified month. | Date(2023,5,31) |
| **EOMonth( Date(2023,5,31); , 1 )** | Adds one month to May 15, 2023, moving the date to the end of the resulting month. | Date(2023,6,30) |

