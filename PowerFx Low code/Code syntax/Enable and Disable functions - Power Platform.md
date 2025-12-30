---
title: Enable and Disable functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:41:50 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:42:49 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Enable and Disable functions in Power Platform turn a signal on or off.
- These functions currently only work for the Location signal and have no return value.
- They can be used in behavior formulas to manually control signals and prevent battery drain from rapid changes.


Detailed summary

- The Enable and Disable functions in the Power Platform are used to manually turn a signal on or off, which can be useful for signals that change often and require the app to recalculate, potentially draining a device's battery over time.
- The Enable function turns a signal on, while the Disable function turns a signal off, and both functions currently only work for the Location signal, with no return value, allowing them to be used only in behavior formulas.
- The syntax for using these functions is Enable(Signal) and Disable(Signal), where Signal is a required parameter that specifies the signal to be turned on or off.
- When a signal is not in use, it is automatically turned off, and the Enable and Disable functions can be used to manually control the signal, providing more control over the app's behavior and potential battery usage.
- The Enable and Disable functions are applicable to Canvas apps, and users can access more information and resources about these functions, including feedback and additional resources, with the last update to the topic being on 10/11/2025.
- The Ask Learn feature, an AI assistant, is also available to provide guidance and answer questions about the Enable and Disable functions, using trusted Microsoft documentation, but requires users to sign in to access its capabilities.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-enable-disable)
