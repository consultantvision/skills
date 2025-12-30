---
title: Assert function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:19:41 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:20:09 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Assert function is used to validate the expected result of a test or test step in Canvas apps.
- The function takes two parameters: `expression` (required) and `message` (not required), where the expression evaluates to true or false.
- If the expression returns false, the test case will fail, and an assertion message will be recorded in the Traces table of the TestCaseResult record.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-assert)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps

An assertion is a condition or an expression that evaluates to true or false in a test. If the expression returns false, the test case will fail. Assertions are used to validate the expected result of a test or test step, against the actual result and to fail the test if the condition is false. Assertions can be used to validate the state of controls in your app such as label values, list box selections and other control properties.

Important

**Assert** function is only available for [Test Studio](https://app.getrecall.ai/item/84dd97b3-ba48-4919-b35e-5b76b22e92c6) in Power Apps.

Assertion messages, for both passed and failed assertions, are also contained in a Traces table in the TestCaseResult record.

*Assert(expression, message)*

- *Expression* – Required. An expression that evaluates to true or false.

- *Message* – Not Required. A message that describes the assertion failure.


`Assert(lblResult.Text = "Success", "lblResult value Expected : Success , Actual : " & lblResult.Text)` `Assert(ListBox1.Selected.Value = "Success", "ListBox1 selection Expected : Success, Actual : " & ListBox1.Selected.Value)` `Assert(kudosAfterTest = kudosBeforeTest + 1, "Kudos count. Expected : " & kudosBeforeTest + 1 & " Actual :" & kudosAfterTest)`

[Test Studio Overview](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/test-studio) [Working with Test Studio](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-test-studio)

