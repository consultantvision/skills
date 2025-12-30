---
title: Trace function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 20:00:18 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 20:00:32 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Trace function in Power Platform records diagnostic information to help understand and debug app issues.
- The Trace function can be used in behavior formulas and sends information to the Microsoft Power Apps Monitor tool or Azure Application Insights.
- The Trace function has parameters such as Message, TraceSeverity, CustomRecord, and TraceOptions to customize the tracing output.


Detailed summary

- The Trace function in Power Platform is a diagnostic tool that records information from behind the scenes in an app, creating a timeline of events to help understand how the app is operating and to debug issues.
- The Trace function can be used in various Power Platform components, including Canvas apps, Copilot Studio, Model-driven apps, Power Platform CLI, and Dataverse functions, and its output appears in the Microsoft Power Apps Monitor tool or can be sent to Azure Application Insights.
- When used in Power Apps, the Trace function can only be used in behavior formulas, and its output is displayed in the Power Apps Monitor tool, which provides a timeline of events, including control changes and Trace calls.
- The Trace function has several parameters, including Message, which is required and can be any data type that can be coerced to Text, TraceSeverity, which is optional and has options such as Information, Warning, Error, or Critical, CustomRecord, which is optional and contains custom data, and TraceOptions, which is optional and has options such as None or IgnoreUnsupportedTypes.
- In Test Studio, the Trace function is an optional expression that can be used to provide additional information in test results, and its output is combined with passed and failed assertion messages in the Traces table of the TestCaseResult record.
- The Traces table has two properties, Message and Timestamp, and Trace information used in tests is also recorded in Application Insights, but is not available in the Monitor tool.
- To use the Trace function, a formula can be set up, such as setting a variable and then using the Trace function to record the variable's value, and the output can be viewed in the Power Apps Monitor, which provides detailed information about the events and Trace calls.
- The Microsoft Power Apps Monitor can be opened in another browser window, and it displays a grid of events, including button clicks and Trace calls, which can be drilled into to see more detailed information about the event and the expression used for the message.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-trace)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Model-driven apps Power Platform CLI Dataverse functions

Often there is a lot of logic working behind the scenes in an app. Sometimes the impact is obvious, for example a control's value or color changes, confirming the logic operated correctly. However, sometimes it isn't obvious and it can be difficult to visualize and understand what is happening inside the app. Use the **Trace** function to record diagnostic information from behind the scenes, creating a timeline of what actually happened, to better understand how your app is operating and to help debug issues.

When used in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685), the output from **Trace** appears in the [Power Apps Monitor](https://learn.microsoft.com/en-us/power-apps/maker/monitor-overview) tool along with other app activities. If you've allowed your app to send telemetry data to [Azure Application Insights](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/application-insights), the **Trace** function can also be used to send information to your Application Insights resource. **Trace** can only be used in [behavior formulas](https://learn.microsoft.com/imperative).


When used with [Test Studio](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/test-studio), **Trace** is an optional expression that can be used to provide additional information in your test results from the **OnTestCaseComplete** event. **Trace** event messages are combined with passed and failed assertion messages in the **Traces** table of the **TestCaseResult** record. The **Traces** table has two properties, **Message** and **Timestamp**. Trace information used in tests will also be recorded in Application Insights. Test trace information won't be available in the Monitor tool as the Monitor is connected to the app when it's played from the Power Apps Studio.

**Trace**( *Message* [, *TraceSeverity* [, *CustomRecord* [, *TraceOptions* ] ] ] )

- *Message* – Required. The information to be traced. Numbers, Dates, Booleans and any other data type that can be coerced to Text.

- *TraceSeverity* – Optional. The severity level of the Trace recorded in Monitor and Application Insights. Options are **TraceSeverity.Information** (default), **TraceSeverity.Warning**, **TraceSeverity.Error**, or **TraceSeverity.Critical**.


- *CustomRecord* – Optional. A record containing custom data that will be recorded in Monitor or Application Insights.

- *TraceOptions* – Optional. Options are **TraceOptions.None** (default) and **TraceOptions.IgnoreUnsupportedTypes** which will ignore data types in *CustomRecord* that can't be serialized.

1. Create a button control in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) Studio.

2. Set the **OnSelect** formula to the formula:

```
Set( x, x+1 );
Trace( x );
```

3. Open the [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) Monitor in another browser window by selecting the "Advanced tools" icon in the left hand pane and select "Open monitor":

![entry point for Power Apps monitor](https://learn.microsoft.com/media/function-trace/open-monitor.png)

4. Return to the original Studio browser window and select your button four times. Use **Alt-click** on your mouse if in design mode.

5. View the [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) Monitor.

6. The Monitor's grid will contain an event for each button click and for each **Trace** call, which will show the value of the variable after each increment. Drill into a Trace event to see where the **Trace** was initiated, and the expression used for the message, in the right hand panel:

![monitor trace showing button being pressed four times and corresponding increments of a variable](https://learn.microsoft.com/media/function-trace/increment-trace.png)


[Power Apps Monitor Overview](https://learn.microsoft.com/en-us/power-apps/maker/monitor-overview) [Test Studio Overview](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/test-studio) [Working with Test Studio](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-test-studio)

