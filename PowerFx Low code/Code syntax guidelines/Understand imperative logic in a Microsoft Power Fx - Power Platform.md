---
title: Understand imperative logic in a Microsoft Power Fx - Power Platform
tags: Low-Code Development
createdAt: Mon Dec 29 2025 16:38:37 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 16:38:48 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- Microsoft Power Fx is a language used for creating formulas in Power Platform products, where most formulas calculate a value and recalculate automatically when values change.
- Imperative logic is used for sequences of actions that change the app's state, such as navigating screens, controlling signals, or updating data sources, using functions like Back, Refresh, and UpdateContext.
- Behavior formulas, using OnSelect, OnVisible, and other On... properties, allow for a list of actions to be performed in a specific order, separated by semicolons, and are not automatically recalculated like value calculations.


Detailed summary

- Microsoft Power Fx, formerly known as the canvas apps formula language, is a language used in the Microsoft Power Platform, and it is currently being extracted from canvas apps, integrated with other products, and made available as open source, with the Microsoft Power Fx Overview providing an introduction to the language.
- Most formulas in Microsoft Power Fx calculate a value, and recalculation occurs automatically as values change, similar to an Excel spreadsheet, allowing for dynamic updates, such as changing the color of a Label control based on a condition, using a formula like If( Value(TextBox1.Text) >= 0, Color.Black, Color.Red ).
- When a user selects a Button control in Microsoft Power Fx, it initiates a sequence of actions or behaviors that change the state of the app, including changing the screen, controlling signals, refreshing or updating data sources, updating context variables, and creating or removing items in collections, which cannot be automatically recalculated.
- These actions can be performed using various functions, such as Back, Enable, Disable, Refresh, Update, Patch, Remove, UpdateContext, Collect, Clear, and ClearCollect, which can be used in behavior formulas for properties like OnSelect, OnVisible, and OnHidden.
- To create a list of actions to perform in Microsoft Power Fx, semicolons can be used, allowing for multiple functions to be executed in a specific order, such as updating a context variable and then returning to the previous screen with UpdateContext( { x: 1 } ); Back(), where each function must complete before the next one starts, and errors may prevent subsequent functions from running.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/imperative)
### Note

[Microsoft Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) is the new name for the canvas apps formula language. These articles are work in progress as we extract the language from canvas apps, integrate it with other [Microsoft Power Platform](https://app.getrecall.ai/item/9f62b652-2cb9-45c6-8fd9-7c1a55d86cc9) products, and make it available as open source. Start with the Microsoft Power Fx Overview for an introduction to the language.

Most formulas in Microsoft Power Fx calculate a value. Like an Excel spreadsheet, recalculation happens automatically as values change. For example, you might want to show the value in a **Label** control in red if the value is less than zero or in black otherwise. So you can set the **Color** property of that control to this formula:

```
If( Value(TextBox1.Text) >= 0, Color.Black, Color.Red )
```

In this context, what does it mean when the user selects a **Button** control? No value has changed, so there is nothing new to calculate. Excel has no equivalent to a **Button** control.


By selecting a **Button** control, the user initiates a sequence of actions, or behaviors, that will change the state of the app:

- Change the screen that's displayed: **Back** functions.

- Control a signal ([Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) only): **Enable** and **Disable** functions.

- Refresh, update, or remove items in a data source: **Refresh**, **Update**, **UpdateIf**, **Patch**, **Remove**, **RemoveIf** functions.

- Update a context variable (Power Apps canvas only): UpdateContext function.

- Create, update, or remove items in a collection: **Collect**, **Clear**, **ClearCollect** functions.

Because these functions change the state of the app, they can't be automatically recalculated. You can use them in the formulas for the **OnSelect**, **OnVisible**, **OnHidden**, and other **On...** properties, which are called behavior formulas.

Use semicolons to create a list of actions to perform. For example, you might want to update a context variable and then return to the previous screen:

```
UpdateContext( { x: 1 } ); Back()
```


Actions are performed in the order in which they appear in the formula. The next function won't start until the current function has completed. If an error occurs, subsequent functions might not start.


