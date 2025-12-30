---
title: Now, Today, IsToday, UTCNow, and UTCToday functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:07:02 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:07:17 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Now function returns the current date and time, while the Today function returns the current date with the time portion set to midnight.
- The IsToday function tests whether a date/time value is between midnight today and midnight tomorrow, returning a Boolean value.
- UTCNow, UTCToday, and IsUTCToday functions work with Coordinated Universal Time (UTC) and are time zone independent, but are only available in Microsoft Dataverse for Teams formula columns.


Detailed summary

- The Power Platform provides several functions to work with dates and times, including Now, Today, IsToday, UTCNow, UTCToday, and IsUTCToday, which can be used in various applications such as Canvas apps, Model-driven apps, and Power Pages.
- The Now function returns the current date and time as a date/time value, while the Today function returns the current date as a date/time value with the time portion set to midnight, and these functions work with the local time of the current user.
- The IsToday function tests whether a date/time value is between midnight today and midnight tomorrow, returning a Boolean value, and it also works with the local time of the current user.
- The UTCNow, UTCToday, and IsUTCToday functions are similar to their non-UTC counterparts but work with time zone independent values and use Coordinated Universal Time (UTC), and they are only available in Microsoft Dataverse for Teams formula columns for time-independent fields and values.
- These functions are volatile, meaning they return a different value for each evaluation, and when used in a data flow formula, they will only return a different value if the formula is reevaluated, such as when a slider control's value changes.
- The functions can be used in various scenarios, such as retrieving the current date and time, testing whether a date/time value is today, and adding days to the current date, and they can be formatted using the Text function to display the date and time in a specific format.
- Examples of using these functions include retrieving the current date and time, testing whether the current date and time is between midnight today and midnight tomorrow, and adding 12 days to the current date, and the results can be displayed as strings or used in further calculations.
- To continually display the current time, a timer control can be added to an app, set to run for one second and repeat, and the OnTimerEnd property can be set to update a global variable with the current time using the Now function, and a label control can be used to display the current time, formatted using the Text function.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-now-today-istoday)
| Functions | Applies to |
| --- | --- |
| **Now** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages |
| **Today****IsToday** | Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages |
| **UTCNow****UTCToday** | Dataverse formula columns Power Pages |

Returns the current date and time, and tests whether a date/time value is today.

The **Now** function returns the current date and time as a date/time value.

The **Today** function returns the current date as a date/time value. The time portion is midnight. **Today** has the same value throughout a day, from midnight today to midnight tomorrow.

The **IsToday** function tests whether a date/time value is between midnight today and midnight tomorrow. This function returns a Boolean (**true** or **false**) value.

**Now**, **Today**, and **IsToday** functions work with the local time of the current user.


**UTCNow**, **UTCToday**, and **IsUTCToday** functions are the same as their non-UTC counterparts but work with time zone independent values and use Coordinated Universal Time (UTC).

Note

- **UTCNow**, **UTCToday**, and **IsUTCToday** are only available in Microsoft Dataverse for Teams formula columns, and only for time-independent fields and values.

- **Now**, **Today**, and **IsToday** are not available in Dataverse for Teams formula columns as evaluations are done without the knowledge of the current user's local time zone. More information: [Work with formula table columns in Dataverse for Teams](https://learn.microsoft.com/en-us/power-apps/teams/formula-columns)

See [Date, Time, and DateTime in the data types documentation](https://learn.microsoft.com/data-types#date-time-and-datetime) and [working with dates and times](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/show-text-dates-times) for more information.

**Now**, **Today**, **UTCNow**, and **UTCToday** are volatile functions. These functions return a different value for each evaluation.


When used in a data flow formula, a volatile function will only return a different value if the formula in which it appears is reevaluated. If nothing else changes in the formula then it will have the same value throughout the execution of your app.

For example, a label control with **Label1.Text = Now()** will not change while your app is active. Only closing and reopening the app will result in a new value.

The function will be reevaluated if it is part of a formula in which something else has changed. For example, if we change our example to involve a slider control with **Label1.Text = DateAdd( Now(), Slider1.Value, Minutes )** then the current time is retrieved each time the Slider control's value changes and the label's text property is reevaluated.

When used in a [behavior formula](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth), volatile functions will be evaluated each time the behavior formula is evaluated. See below for an example.

**Now**()

**Today**()

**IsToday**( *DateTime* )

- *DateTime* - Required. The date/time value to test.

**UTCNow**()

**UTCToday**()


**IsUTCToday**( *TimeZoneIndependentTime* )

- *TimeZoneIndependentDateTime* - Required. The time zone independent date/time value to test.

For the examples in this section, the current time is **8:58 PM** on **July 11, 2021** in the Pacific Time Zone (UTC-8) and the language is **en-us**.


| Formula | Description | Result |
| --- | --- | --- |
| **Text( Now(), "mm/dd/yyyy hh:mm:ss" )** | Retrieves the current date and time in the user's time zone, and displays it as a string. | "07/11/2021 20:58:00" |
| **Text( Today(), "mm/dd/yyyy hh:mm:ss" )** | Retrieves the current date only, leaving the time portion as midnight, and displays it as a string. | "07/12/2021 00:00:00" |
| **IsToday( Now() )** | Tests whether the current date and time is between midnight today and midnight tomorrow. | **true** |
| **IsToday( Today() )** | Tests whether the current date is between midnight today and midnight tomorrow. | **true** |
| **Text( DateAdd( Now(), 12 ), "mm/dd/yyyy hh:mm:ss" )** | Retrieves the current date and time, adds 12 days to the result, and displays it as a string. | "07/23/2021 20:58:00" |
| **Text( DateAdd( Today(), 12 ), "mm/dd/yyyy hh:mm:ss" )** | Retrieves the current date, adds 12 days to the result, and displays it as a string. | "07/23/2021 00:00:00" |
| **IsToday( DateAdd( Now(), 12 ) )** | Tests whether the current date and time, plus 12 days, is between midnight today and midnight tomorrow. | **false** |
| **IsToday( DateAdd( Today(), 12 ) )** | Tests whether the current date, plus 12 days, is between midnight today and midnight tomorrow. | **false** |
| **Hour( UTCNow() )** | Retrieves the current date and time in UTC and extracts the hour only, which is 8 hours ahead of local time. | 4 |
| **Day( UTCToday() )** | Retrieves the current date only in UTC and extracts the day, which is 1 day ahead of local time. | 12 |
| **IsUTCToday( UTCNow() )** | Tests whether the current date and time is between midnight today and midnight tomorrow, all in UTC time. | **true** |
| **IsUTCToday( UTCToday() )** | Tests whether the current date is between midnight today and midnight tomorrow, all in UTC time. | **true** |


1. Add a [Timer](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-timer) control, set its **Duration** property to **1000**, and set its **Repeat** property to **true**.

The timer will run for one second, automatically start over, and continue that pattern.

2. Set the control's **OnTimerEnd** property to this formula:

**Set( CurrentTime, Now() )**

Whenever the timer starts over (after each second), this formula sets the **CurrentTime** global variable to the current value of the **Now** function.

![A screen containing a timer control with the formula OnTimerEnd = Set(CurrentTime, Now()).](https://learn.microsoft.com/media/function-now-today-istoday/now-set-currenttime.png)

3. Add a [Label](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-box) control, and set its **Text** property to this formula:

**Text( CurrentTime, LongTime24 )**

Use the [Text](https://learn.microsoft.com/function-text) function to format the date and time however you want, or set this property to just **CurrentTime** to show hours and minutes but not seconds.

![A screen that contains a label control with Text property set to Text( CurrentTime, LongTime24).](https://learn.microsoft.com/media/function-now-today-istoday/now-use-currenttime.png)

4. Preview the app by pressing F5, and then start the timer by clicking or tapping it.

The label continually shows the current time, down to the second.

![Four screens showing four time values (13:50:22, 13:50:45, 13:51:03,and  13:51:25).](https://learn.microsoft.com/media/function-now-today-istoday/now-four-times.png)

5. Set the timer's **AutoStart** property to **true** and its **Visible** property to **false**.

The timer is invisible and starts automatically.


6. Set the screen's [OnStart](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-screen) property so that the **CurrentTime** variable has a valid value, as in this example:

**Set(CurrentTime, Now())**

The label appears as soon as the app starts (before the timer runs for a full second).

