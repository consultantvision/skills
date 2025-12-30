---
title: Global support in Microsoft Power Fx - Power Platform
tags: Low-Code Development
createdAt: Mon Dec 29 2025 16:42:58 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 22:30:49 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- Microsoft Power Fx supports global languages, allowing text to be displayed in the appropriate language and region while building and running logic.
- The Language function returns the language tag of the current user, enabling apps to display translated text and adapt to different languages.
- Functions such as Text, Value, DateValue, TimeValue, and DateTimeValue help format numbers, dates, and times according to the user's language setting, ensuring a great user experience worldwide.


Detailed summary


## Introduction to Microsoft Power Fx and Language Integration
- Microsoft Power Fx, formerly known as the canvas apps formula language, is a language that is being integrated with other Microsoft Power Platform products and will be made available as open source, with articles and documentation currently being worked on.
- The language is designed to be approachable for makers at all levels, with features such as adapting dates and numbers to the user's language and region, for example, using a comma as the decimal separator in some regions, similar to how Excel handles this.
- The Power Fx language allows apps to be globally aware, with functions like Language, Text, and Value, DateValue, and others enabling adaptation of displayed text and input in different languages.
- When using the native studio or native player, the language used is provided by the host operating system, such as Windows, which can be controlled under the "All Settings" and "Time & language" settings, while web experiences use the language provided by the browser.

## Authoring Environment and Language-Agnostic App Storage
- The authoring environment adapts to the language setting of the author, but the app itself is stored in a language-agnostic manner, allowing authors using different languages to edit the same app.
- Most elements in the formula language, such as function names, control property names, enumeration names, signal records, and operators, are always in English, but control and other object names will appear in the native language of the author in the authoring experience.
- When inserting controls into an app, their name will default to English, but can be changed to any name, including names in the author's native language, and some separators and operators will shift based on the decimal separator of the author's language.

## Localization of Decimal and List Separators
- The Microsoft Power Apps decimal separator, list separator, and chaining operator will change based on the author's language decimal separator, which is consistent with how Excel handles these separators, and this change impacts arguments in function calls, fields in a record, and records in a table.
- The formula in Microsoft Power Fx does not change internally, but its display and editing can be adapted to different languages, allowing authors using different languages to view and edit the same formula with appropriate separators and operators.

## Language Detection and Translated Text Display
- The Language function returns the language tag of the current user, such as "en-GB" for users in Great Britain or "de-DE" for users in Germany, which can be used to display translated text for users.
- To display translated text, an app can include a table of translated values and use a formula, such as the LookUp function, to pull translated strings from the table based on the user's language tag.
- When displaying translated strings, it is essential to consider that translated text in other languages may be longer than the original text, and labels and other elements in the user interface may need to be wider to accommodate the longer text.

## Data Formatting and Conversion Functions
- The Text function formats numbers and dates according to the user's language setting, using either a global aware enumeration or a custom format string, and can take an optional language argument to specify the language for the result.
- There are four functions available for reading numbers, dates, and times provided by the user: Value, DateValue, TimeValue, and DateTimeValue, which convert text strings to number or date/time values, and all have the same arguments, including an optional language argument.
- These functions, such as Value, DateValue, TimeValue, and DateTimeValue, can be used to convert text strings to number or date/time values, taking into account the user's language setting, and can be used with or without specifying the language argument.

## Documentation and Additional Functionalities
- For more information on the Language function, the Text function, and the Value, DateValue, TimeValue, and DateTimeValue functions, users can refer to the respective documentation for each function.
- The Calendar and Clock functions in Microsoft Power Fx are designed to provide calendar and clock information that is specific to the user's current language, allowing for a more personalized experience.
- These functions can be utilized in various ways, such as populating a Dropdown control with a list of choices, to enhance the overall functionality of an application.
- For users who require more detailed information about the capabilities and usage of the Calendar and Clock functions, additional documentation is available that provides further insight and guidance.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/global)
