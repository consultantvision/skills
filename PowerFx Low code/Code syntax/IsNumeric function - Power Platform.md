---
title: IsNumeric function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:05:40 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:05:58 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The IsNumeric function tests whether a value is numeric.
- It returns a Boolean value of true or false.
- The function can be used with various types of values, including numbers and strings, to determine if they are numeric.


Detailed summary

- The IsNumeric function in the Power Platform is used to test whether a given value is numeric, with other types of values including Boolean, string, table, and record, and it returns a Boolean result of either true or false.
- The function applies to various Power Platform components, such as Canvas apps, Copilot Studio, Desktop flows, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The syntax of the IsNumeric function is straightforward, taking a single argument, Value, which is the value to be tested, as expressed in the formula IsNumeric( Value ).
- The function can evaluate different types of inputs, including numbers and text, and it can also assess the outcome of mathematical expressions, as demonstrated in the examples provided, such as IsNumeric(1), IsNumeric("1"), IsNumeric("A"), IsNumeric(1+1), and IsNumeric("1+1").
- The return values of these examples are true for numeric values, such as the number 1, the text "1", and the outcome of 1+1, and false for non-numeric values, such as the text "A" and the text "1+1", which is treated as a string rather than a mathematical expression.
- The IsNumeric function is a useful tool for determining the data type of a value in the Power Platform, and it can be used in a variety of contexts, including data validation and processing, with the goal of ensuring that values are handled correctly and consistently throughout an application.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-isnumeric)
