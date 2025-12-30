---
title: Notify function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:20:10 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:22:13 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Notify function displays a banner message to the user at the top of the screen, with a default timeout of 10 seconds.
- The function has three arguments: Message, NotificationType, and Timeout, with NotificationType defaulting to NotificationType.Information if not specified.
- Notify can display messages as error, information, success, or warning, and can be used in behavior formulas, including pairing with the IfError function to detect and report errors.


Detailed summary

- The Notify function in Power Platform is used to display a banner message to the user at the top of the screen, and it remains until the user dismisses it or the timeout expires, which defaults to 10 seconds.
- The Notify function uses an appropriate color and icon depending on the type of the message, which is specified by the second argument to the function, and the available notification types are NotificationType.Error, NotificationType.Information, NotificationType.Success, and NotificationType.Warning.
- The character limit for the Notify function is 500 characters, and messages are shown both when authoring the app and when end users are using the app, but Notify can only be used in behavior formulas.
- The Notify function can be paired with the IfError function to detect and report errors with a custom error message, and it always returns true, regardless of the outcome.
- The Notify function has three arguments: Message, which is required and specifies the message to display to the user, NotificationType, which is optional and specifies the type of the message to display, and Timeout, which is optional and specifies the number of milliseconds to wait before automatically dismissing the notification.
- The default values for NotificationType and Timeout vary by the experience the Notify function is used in, but users can specify the values they want set for NotificationType and Timeout by explicitly setting them in their Microsoft Power Fx expression.
- The Notify function can be used in standalone canvas apps, custom pages, and Power Fx commanding experiences, and it can be used to send different types of messages, such as error messages, informational messages, success messages, and warning messages, by changing the NotificationType argument.
- Examples of using the Notify function include displaying a message as informational, error, warning, or success, and specifying a custom timeout, such as 4 seconds or 0 seconds, which means the notification will only be dismissed by the user or by pressing the button again.
- Microsoft Power Apps can also send push notifications using an entirely different mechanism from Notify, and for more information, users can see the Send a notification in Power Apps section.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-showerror)
