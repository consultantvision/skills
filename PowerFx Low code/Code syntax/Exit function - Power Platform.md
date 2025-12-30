---
title: Exit function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:50:03 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:51:03 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Exit function exits the currently running app and returns the user to the list of apps.
- The function can optionally sign out the current user using the Signout argument, which is a Boolean value.
- Exit can only be used in behavior formulas and stops any further formula evaluation after it is called.


Detailed summary

- The Exit function in Power Platform is used to exit the currently running app and optionally sign out the current user, returning them to the list of apps where they can select another app to open.
- The Exit function stops any further formula evaluation, and any function calls chained with a semicolon operator after the Exit are not carried out, ensuring that the app's execution is halted immediately.
- The optional Signout argument can be used with the Exit function to sign the current user out of Power Apps, which is particularly useful when devices are shared to ensure user security by requiring users to sign back in with their credentials before running an app.
- When authoring an app, calling the Exit function does not exit or sign out the user, but it does stop the evaluation of the rest of the formula, allowing developers to control the app's behavior during the development process.
- The Exit function can only be used in behavior formulas, and its syntax is Exit([Signout]), where Signout is an optional Boolean value that defaults to false if not specified, allowing developers to choose whether to sign out the user or not.
- Examples of using the Exit function include Exit(), which exits the current app and leaves the user signed in, and Exit(true), which exits the current app and signs the user out, requiring them to sign back in before running another app.
- The Exit function is applicable to Canvas apps and Power Platform CLI, and it is an important tool for developers to manage the user experience and ensure security in their Power Apps applications.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-exit)
