---
title: Formula reference - canvas apps - Power Platform
tags: Low-Code Development
createdAt: Mon Dec 29 2025 17:02:04 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:02:13 GMT+1100 (Australian Eastern Daylight Time)
---




Detailed summary


## Introduction and Overview of Canvas App Elements
- The article provides a comprehensive guide to the functions that can be used in canvas apps, which combine several elements, including functions, signals, enumerations, operators, identifiers, controls, properties, and data types.
- Functions in canvas apps take parameters, perform an operation, and return a value, similar to Microsoft Excel functions, and some examples of functions include Sqrt, Abs, Acos, and AddColumns, which can be used to perform various mathematical and data manipulation operations.
- Signals, on the other hand, return information about the environment, such as the device's current GPS coordinates, and do not take parameters or have side effects, with examples including Location and Acceleration.
- Enumerations return a predefined constant value, such as Color, which has predefined values like Color.Red and Color.Blue, and are used to access specific values or properties.

## Functions, Signals, and Enumerations
- Functions in canvas apps take parameters, perform an operation, and return a value, similar to Microsoft Excel functions, and some examples of functions include Sqrt, Abs, Acos, and AddColumns, which can be used to perform various mathematical and data manipulation operations.
- Signals, on the other hand, return information about the environment, such as the device's current GPS coordinates, and do not take parameters or have side effects, with examples including Location and Acceleration.
- Enumerations return a predefined constant value, such as Color, which has predefined values like Color.Red and Color.Blue, and are used to access specific values or properties.

## Named Operators and Additional Elements
- The article also mentions named operators, such as ThisItem and Self, which allow users to access information from within a container, and other elements, including operators, identifiers, controls, and properties.

## Mathematical and Text Manipulation Functions
- A wide range of functions are available in canvas apps, including mathematical functions like Asin, Atan, and Average, as well as functions for working with text, such as AIClassify, AIExtract, and AITranslate, which can be used to classify text, extract entities, and translate text from one language to another.
- Other functions, such as App, Back, and Blank, provide information about the currently running app, show the previous screen, and return a blank value, respectively, and can be used to control the app's behavior and manipulate data.

## App Control and Collection Functions
- The article also covers functions for working with collections, such as Clear, ClearCollect, and Collect, which can be used to delete data from a collection, add data to a collection, and create a new collection, respectively.
- Additionally, functions like Color, ColorFade, and ColorValue are available for working with colors, and functions like Column, ColumnNames, and Compass can be used to retrieve column names and values, and return the compass heading, respectively.

## Color, Column, and Navigation Functions
- Overall, the article provides a detailed reference guide to the various functions and elements that can be used in canvas apps to perform a wide range of tasks and operations.
- The CountIf function is used to count table records that satisfy a specific condition, while the CountRows function counts all table records.

## Date/Time and Data Source Functions
- The DataSourceInfo function provides information about a data source, and the Date function returns a date/time value based on Year, Month, and Day values.
- The DateAdd and DateDiff functions are used to add or subtract days, months, quarters, or years to a date/time value, and to calculate the difference between two date values, respectively.
- The DateTime and DateTimeValue functions return a date/time value based on both date and time components, and convert a date and time string to a date/time value, respectively.

## Date/Time Component Extraction and Conversion
- The Day, Hour, and Year functions retrieve the day, hour, and year portions of a date/time value, respectively.
- The Dec2Hex and Hex2Dec functions convert a number to a hexadecimal text string and a hexadecimal text string to a number, respectively.

## Data Source and Error Handling Functions
- The Defaults function returns the default values for a data source, and the Degrees function converts radians to degrees.
- The Distinct function summarizes records of a table, removing duplicates, and the Download function downloads a file from the web to the local device.
- The DropColumns function returns a table with one or more columns removed, and the EDate function adds or subtracts months to a date without changing the day of the month.

## Table Manipulation and Filtering Functions
- The EditForm, Enable, and Disable functions are used to reset a form control for editing, enable a signal, and disable a signal, respectively.
- The EncodeHTML and EncodeUrl functions encode characters that need to be escaped to be used in an HTML context and encode special characters using URL encoding, respectively.
- The EndsWith function checks whether a text string ends with another text string, and the EOMonth function adds or subtracts months to a date, returning the last day of that month.

## String Matching and Logical Functions
- The Error and Errors functions create a custom error and provide error information for previous changes to a data source, respectively.
- The exactin and in functions check if a text string is contained within another text string or table, with the exactin function being case-dependent and the in function being case-independent.
- The Exp, Filter, and Find functions return e raised to a power, return a filtered table based on one or more criteria, and check whether one string appears within another, respectively.

## Record and Collection Management Functions
- The First, FirstN, ForAll, and GroupBy functions return the first record of a table, the first set of records of a table, calculate values and perform actions for all records of a table, and return a table with records grouped together, respectively.
- The GUID function converts a GUID string to a GUID value or creates a new GUID value, and the HashTags function extracts the hashtags from a string.
- The Host function provides information about the current host running the app, and the If, IfError, and IsBlank functions return one value if a condition is true and another value if not, detect errors and provide an alternative value or take action, and check for a blank value, respectively.

## Conditional and Error Detection Functions
- The IsBlankOrError, IsEmpty, IsError, IsMatch, IsNumeric, and IsType functions check for a blank value or error, an empty table, an error, a string against a pattern, a numeric value, and whether a record reference refers to a specific table type, respectively.
- The ISOWeekNum and IsToday functions return the ISO week number of a date/time value and check whether a date/time value is sometime today in the user's time zone, respectively.
- The JSON function generates a JSON text string for a table, a record, or a value, and the Language function returns the language tag of the current user.

## Language, Navigation, and UI Functions
- The Last, LastN, Launch, Left, Len, and Ln functions return the last record of a table, the last set of records of a table, launch a webpage or a canvas app, return the left-most portion of a string, return the length of a string, and return the natural log, respectively.
- The LoadData and Location functions load a collection from an app host and return your location as a map coordinate using the Global Positioning System (GPS) and other information, respectively.
- The Log function returns the logarithm in any base of a number.

## Data Loading, Location, and Mathematical Functions
- The LookUp function is used to look up a single record in a table based on one or more criteria, while the Lower function converts letters in a string of text to all lowercase.
- The Match and MatchAll functions extract a substring based on a pattern, with regular expressions available for use, and the Max and Min functions return the maximum and minimum values of a table expression or a set of arguments.
- The Mid function returns the middle portion of a string, and the Minute and Month functions retrieve the minute and month portions of a date/time value, respectively.

## Search, Comparison, and Text Transformation Functions
- The Mod function returns the remainder after a dividend is divided by a divisor, and the Navigate function changes which screen is displayed, with the NewForm function resetting a form control for creation of an item.
- The Not function implements Boolean logic NOT, returning true if its argument is false and false if its argument is true, and the Notify function displays a banner message to the user, with the Now function returning the current date/time value in the user's time zone.
- The Or function implements Boolean logic OR, returning true if any of its arguments are true, and the Param function accesses parameters passed to a canvas app when launched, with the Parent function providing access to a container control's properties.

## Boolean Logic and Data Manipulation Functions
- The ParseJSON function converts a JSON document represented as text to a Dynamic value, and the Patch function modifies or creates a record in a data source, or merges records outside of a data source.
- The PDF function exports contents from the current screen to an object for use in multiple scenarios, and the Pi function returns the number π, with the PlainText function removing HTML and XML tags from a string.
- The Power function returns a number raised to a power, and the Print function opens the current screen in the default browser print dialog, with the Proper function converting the first letter of each word in a string to uppercase and the rest to lowercase.

## Data Conversion and Record Management Functions
- The Radians function converts degrees to radians, and the Rand and RandBetween functions return pseudo-random numbers, with the ReadNFC function reading a Near Field Communication (NFC) tag.
- The RecordInfo and RecordOf functions provide information about a record of a data source and extract the type of a record from a table, respectively, and the Refresh function refreshes the records of a data source.
- The Relate function relates records of two tables through a one-to-many or many-to-many relationship, and the Remove and RemoveIf functions remove one or more specific records from a data source based on a condition.

## Relationship Management and Data Refresh Functions
- The RenameColumns function renames columns of a table, and the Replace function replaces part of a string with another string, with the RequestHide function hiding a SharePoint form.
- The Reset and ResetForm functions reset an input control to its default value and a form control for editing of an existing item, respectively, and the Revert function reloads and clears errors for the records of a data source.
- The RGBA function returns a color value for a set of red, green, blue, and alpha components, and the Right function returns the right-most portion of a string, with the Round, RoundDown, and RoundUp functions rounding to the closest number, down to the largest previous number, and up to the smallest next number, respectively.

## Color Manipulation and Rounding Functions
- The SaveData function saves a collection to an app host such as a local device, and the Search function finds records in a table that contain a string in one of their columns, with the Second function retrieving the second portion of a date/time value.
- The Select function simulates a select action on a control, causing the OnSelect formula to be evaluated, and the Self function provides access to the properties of the current control, with the Sequence function generating a table of sequential numbers.
- The Set function sets the value of a global variable, and the SetFocus function moves input focus to a specific control, with the SetProperty function simulating interactions with input controls.

## Data Persistence and Search Functions
- The ShowColumns function returns a table with only selected columns, and the ShowHostInfo function displays information to the user in the app, with the Shuffle function randomly reordering the records of a table.
- The Sin function returns the sine of an angle specified in radians, and the Sort and SortByColumns functions return a sorted table based on a formula and one or more columns, respectively.
- The Split function splits a text string into a table of substrings, and the Sqrt function returns the square root of a number, with the StartsWith function checking if a text string begins with another text string.

## Control Interaction and Table Sorting Functions
- The StdevP function returns the standard deviation of its arguments, while the Substitute function replaces part of a string with another string by matching strings.
- The SubmitForm function saves the item in a form control to the data source, and the Sum function calculates the sum of a table expression or a set of arguments.
- The Switch function matches with a set of values and then evaluates a corresponding formula, and the Table function creates a temporary table.

## Text Splitting and Mathematical Operations
- The Tan function returns the tangent of an angle specified in radians, and the Text function converts any value and formats a number or date/time value to a string of text.
- The ThisItem function returns the record for the current item in a gallery or form control, and the ThisRecord function returns the record for the current item in a record scope function, such as ForAll, With, and Sum.
- The Time function returns a date/time value based on Hour, Minute, and Second values, and the TimeValue function converts a time-only string to a date/time value.

## Statistical and Text Replacement Functions
- The TimeZoneOffset function returns the difference between UTC and the user's local time in minutes, and the Today function returns the current date-only value.
- The Trace function provides additional information in test results, and the Trim function removes extra spaces from the ends and interior of a string of text.
- The TrimEnds function removes extra spaces from the ends of a string of text only, and the Trunc function truncates the number to only the integer portion by removing any decimal portion.

## Form Submission and Table Creation Functions
- The Type function defines a user-defined type, and the Ungroup function removes a grouping, while the UniChar function translates a Unicode code into a string.
- The Unrelate function unrelates records of two tables from a one-to-many or many-to-many relationship, and the Update function replaces a record in a data source.
- The UpdateContext function sets the value of one or more context variables of the current screen, and the UpdateIf function modifies a set of records in a data source based on a condition.

## Text Formatting and Time Zone Functions
- The Upper function converts letters in a string of text to all uppercase, and the User function returns information about the current user.
- The Validate function checks whether the value of a single column or a complete record is valid for a data source, and the Value function converts a string to a number.
- The VarP function returns the variance of its arguments, and the ViewForm function resets a form control for viewing of an existing item.

## Whitespace Handling and Data Type Functions
- The Weekday function retrieves the weekday portion of a date/time value, and the WeekNum function returns the week number of a date/time value.
- The With function calculates values and performs actions for a single record, including inline records of named values, and the Year function retrieves the year portion of a date/time value.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/formula-reference-canvas-apps)
