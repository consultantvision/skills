---
title: Calendar and Clock functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:26:29 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:26:34 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Calendar and Clock functions retrieve information about the current locale, allowing dates and times to be displayed in the user's language.
- These functions include Calendar.MonthsLong(), Calendar.MonthsShort(), Calendar.WeekdaysLong(), Calendar.WeekdaysShort(), Clock.AmPm(), Clock.AmPmShort(), and Clock.IsClock24().
- The functions return single-column tables that can be used with Dropdown and Listbox controls to create locale-specific date and time selectors.


Detailed summary

- The Calendar and Clock functions in Power Platform are a set of functions that retrieve information about the current locale, allowing developers to display dates and times in the language of the current user.
- These functions return single-column tables that can be used directly with the Items property of Dropdown and Listbox controls, enabling users to select months, weekdays, and time designations in their own language.
- The Calendar functions include Calendar.MonthsLong(), which returns a table containing the full names of each month, starting with "January", and Calendar.MonthsShort(), which returns a table containing the abbreviated names of each month, starting with "Jan" for January.
- Additionally, the Calendar functions include Calendar.WeekdaysLong() and Calendar.WeekdaysShort(), which return tables containing the full and abbreviated names of each weekday, starting with "Sunday" and "Sun" respectively.
- The Clock functions include Clock.AmPm() and Clock.AmPmShort(), which return tables containing the long and short uppercase "AM" and "PM" designations, unless the language uses a 24-hour clock, in which case the tables are empty.
- The Clock.IsClock24() function returns a boolean indicating whether a 24-hour clock is used in the current locale, allowing developers to determine the correct time format to display.
- The Text function can be used to format date and time values using the information returned by the Calendar and Clock functions, and the Language function returns the current language and region code.
- By using these functions, developers can create apps that are tailored to the user's locale, providing a more personalized and user-friendly experience, as demonstrated by the example of inserting a Dropdown control and setting the formula for the Items property to Calendar.MonthsLong() to allow users to select a month in their own language.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-clock-calendar)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Model-driven apps

Retrieves calendar and clock information about the current locale.

The **Calendar** and **Clock** functions are a set of functions that retrieve information about the current locale.

You can use these functions to display dates and times in the language of the current user. The single-column tables returned by **Calendar** and **Clock** functions can be used directly with the [Items](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of Dropdown and Listbox controls.


| Function | Description |
| --- | --- |
| **Calendar.MonthsLong()** | Single-column table containing the full names of each month, starting with "January". |
| **Calendar.MonthsShort()** | Single-column table containing the abbreviated names of each month, starting with "Jan" for January. |
| **Calendar.WeekdaysLong()** | Single-column table containing the full names of each weekday, starting with "Sunday". |
| **Calendar.WeekdaysShort()** | Single-column table containing the full names of each weekday, starting with "Sun" for Sunday. |
| **Clock.AmPm()** | Single-column table containing the long uppercase "AM" and "PM" designations. If the language uses a 24-hour clock, the table is empty. |
| **Clock.AmPmShort()** | Single-column table containing the short uppercase "A" and "P" designations. If the language uses a 24-hour clock, the table is empty. |
| **Clock.IsClock24()** | Boolean indicating if a 24-hour clock is used in this locale. |

Use the [Text](https://learn.microsoft.com/function-text) function to format date and time values using this same information. The [Language](https://learn.microsoft.com/function-language) function returns the current language and region code.


**Calendar.MonthsLong**()

**Calendar.MonthsShort**()

**Calendar.WeekdaysLong**()

**Calendar.WeekdaysShort**()

**Clock.AmPm**()

**Clock.AmPmShort**()

**Clock.IsClock24**()

1. Insert a Dropdown control.

2. Set the formula for the [Items](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to:

- **Calendar.MonthsLong()**

3. Users of your app can now select a month in their own language. **MonthsLong** can be replaced with any of the single-column tables that are returned by **Calendar** to create weekday and time selectors.

In the United States, with [Language](https://learn.microsoft.com/function-language) returning "en-US", the following is returned by the **Calendar** functions:


| Formula | Description | Result |
| --- | --- | --- |
| **Calendar.MonthsLong()** | The return value contains the full name of each month, starting with "January". | ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] |
| **Calendar.MonthsShort()** | The return value contains the abbreviated name of each month, starting with "January". | [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ] |
| **Calendar.WeekdaysLong()** | The return value contains the full name of each day, starting with "Sunday". | [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ] |
| **Calendar.WeekdaysShort()** | The return value contains the abbreviated name of each day, starting with "Sunday". | [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ] |
| **Clock.AmPm()** | This language uses a 12-hour clock. The return value contains the uppercase versions of the full AM and PM designations. | [ "AM", "PM" ] |
| **Clock.AmPmShort()** | This language uses a 12-hour clock. The return value contains the uppercase versions of the short AM and PM designations. | [ "A", "P" ] |
| **Clock.IsClock24()** | This language uses a 12-hour clock. | **false** |

