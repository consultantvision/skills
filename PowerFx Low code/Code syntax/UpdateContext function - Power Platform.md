---
title: UpdateContext function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 20:01:11 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 20:01:25 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The UpdateContext function creates or updates context variables of the current screen in a Microsoft Power Apps canvas app.
- Context variables are scoped to a screen and can hold various types of information, including single values, records, tables, object references, and formula results.
- The `UpdateContext` function is used with a record that contains the name of at least one column and a value for that column, and it has no return value, only usable within a behavior formula.


Detailed summary


## Introduction to UpdateContext and Context Variables
- The UpdateContext function in Microsoft Power Apps is used to create or update context variables of the current screen, which temporarily hold a piece of information, such as the number of times a button is selected or the result of a data operation.
- Context variables are scoped to a screen, meaning they cannot be referenced on another screen, and are similar to local variables in other programming tools, with the alternative being global variables that are available throughout the app using the Set function.
- To create or update a context variable, the UpdateContext function requires a single record with the name of a column, which defines or matches the name of the variable, and the value to be assigned to that variable, and if the variable does not exist, it will be created.
- Context variables do not automatically recalculate as the user interacts with the app, unlike formulas in Power Apps, and their use can make the app harder to create and understand, so it is recommended to review working with variables before using them.

## Data Types and Scope of Context Variables
- The UpdateContext function can hold various kinds of information, including a single value, a record, a table, an object reference, or any result from a formula, and its value remains until the app is closed, after which it must be recreated.
- Context variables can be referenced in a formula using the variable's column name, and their values, definitions, and uses can be viewed in the Variables view under the File menu in the authoring environment.
- The UpdateContext function has no return value and can only be used within a behavior formula, and if a context variable is not specified in the UpdateContext formula, its value remains the same, unless it is cleared by setting its value to the result of the Blank function.

## Creating and Modifying Context Variables
- To clear or modify a context variable from another screen, a formula based on the Navigate function or a global variable must be used, as context variables are implicitly created and do not require explicit declaration, and will cease to exist if all references to them are removed.
- The UpdateContext function in Power Platform is used to create or modify context variables, which can be referenced in formulas using their names, such as Counter, Name, or Score.
- The function can set the value of a context variable to a specific value, for example, UpdateContext( { Counter: 2 } ) sets the value of the Counter context variable to 2, and UpdateContext( { Name: "Lily", Score: 10 } ) creates or modifies the context variables Name and Score, setting their values to Lily and 10 respectively.

## Advanced Usage with Records and Patch Function
- The UpdateContext function can also be used to create or modify a context variable with a record value, such as UpdateContext( { Person: { Name: "Milton", Address: "1 Main St" } } ), which creates or modifies the context variable Person, setting its value to a record with two columns, named Name and Address.
- The function can be used in conjunction with the Patch function to update a context variable, for example, UpdateContext( { Person: Patch( Person, { Address: "2 Main St" } ) } ) updates the Person context variable by setting the value of the Address column to 2 Main St.

## Practical Applications in Canvas Apps
- In a canvas app, the UpdateContext function can be used to create or modify context variables, such as Language, which can be used to navigate between screens and display content in different languages, as demonstrated in the example with the Source and Target screens.
- The example demonstrates how to use the UpdateContext function in conjunction with the Navigate function to pass context variables between screens, and how to use the If function to display content based on the value of a context variable, such as the Language context variable.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-updatecontext)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps

Creates or updates [context variables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-variables#use-a-context-variable) of the current screen.

Use the **[UpdateContext](https://app.getrecall.ai/item/a719fa37-7500-4c16-89a7-8168d4fe91cd)** function to create a context variable, which temporarily holds a piece of information, such as the number of times the user has selected a button or the result of a data operation.

Context variables are scoped to a screen, which means that you can't build a formula that refers to a context variable on another screen. If you've used another programming tool, you can think of a context variable as similar to a local variable. Use the [Set](https://learn.microsoft.com/function-set) to work with global variables that are available throughout your app.

[Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) are based on formulas that automatically recalculate as the user interacts with an app. Context variables don't offer this benefit and can make your app harder to create and understand. Before you use a context variable, review [working with variables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-variables).


To create or update a context variable, pass a single [record](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) to the **[UpdateContext](https://app.getrecall.ai/item/a719fa37-7500-4c16-89a7-8168d4fe91cd)** function. In each record, specify the name of a [column](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns), which defines or matches the name of the variable, and the value to which you want to set that variable.

- If you specify the name of a variable that you've previously defined, **UpdateContext** sets the value of the variable to the value that you specify.

- If you specify the name of a variable that doesn't yet exist, **UpdateContext** creates a variable with that name and sets the value of that variable to the value that you specify.

- If you've previously defined a variable but don't specify it in this particular **[UpdateContext](https://app.getrecall.ai/item/a719fa37-7500-4c16-89a7-8168d4fe91cd)** formula, its value remains the same.


Context variables are implicitly created by using the **UpdateContext** or [Navigate](https://learn.microsoft.com/function-navigate). There is no explicit declaration required. If you remove all the **UpdateContext** and **Navigate** references to a context variable, then that context variable will cease to exist. To clear a variable set its value to the result of the [Blank](https://learn.microsoft.com/function-isblank-isempty).

You can see your variables' values, definitions, and uses with the Variables view under the File menu in the authoring environment.

You reference a context variable in a formula by using the variable's column name. For example, **[UpdateContext](https://app.getrecall.ai/item/a719fa37-7500-4c16-89a7-8168d4fe91cd)( { ShowLogo: true } )** creates a context variable named **ShowLogo** and sets its value to **true**. You can then use the value of this context variable by using the name **ShowLogo** in a formula. You can write **ShowLogo** as the formula for the **Visible** property of an image control and show or hide that control based on whether the value of the context variable is **true** or **false**.


As the examples later in this topic show, context variables can hold several kinds of information, including these:

- a single value

- a record

- a table

- an object reference

- any result from a formula

A context variable holds its value until the app is closed. If you define a context variable and set its value on a particular screen, that information remains intact even if the user switches to a different screen. Once the app is closed, the context variable's value will be lost and must be recreated when the app is loaded again.

Every context variable is scoped to a screen. If you want to define a context variable on one screen and modify that variable from another screen, you must build a formula that's based on the [Navigate](https://learn.microsoft.com/function-navigate) function. Or use a global variable.

**[UpdateContext](https://app.getrecall.ai/item/a719fa37-7500-4c16-89a7-8168d4fe91cd)** has no return value, and you can use it only within a [behavior formula](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth).

**UpdateContext**( *UpdateRecord* )


- *UpdateRecord* – Required. A record that contains the name of at least one column and a value for that column. A context variable is created or updated for each column and value that you specify.

**[UpdateContext](https://app.getrecall.ai/item/a719fa37-7500-4c16-89a7-8168d4fe91cd)**( { *ContextVariable1*: *Value1* [, *ContextVariable2*: *Value2* [, ... ] ] } )

- *ContextVariable1* - Required. The name of a context variable to create or update.

- *Value1* - Required. The value to assign to the context variable.

- *ContextVariable2*: *Value2*, ... - Optional. Additional context variables to create or update and their values.


| Formula | Description | Result |
| --- | --- | --- |
| **[UpdateContext](https://app.getrecall.ai/item/a719fa37-7500-4c16-89a7-8168d4fe91cd)( { Counter: 1 } )** | Creates or modifies the context variable **Counter**, setting its value to **1**. | **Counter** has the value **1**. You can reference that variable by using the name **Counter** in a formula. |
| **UpdateContext( { Counter: 2 } )** | Sets the value of the **Counter** context variable from the previous example to **2**. | **Counter** has the value **2**. |
| **UpdateContext( { Name: "Lily", Score: 10 } )** | Creates or modifies the context variables **Name** and **Score**, setting their values to **Lily** and **10** respectively. | **Name** has the value **Lily**, and **Score** has the value **10**. |
| **UpdateContext( { Person: { Name: "Milton", Address: "1 Main St" } } )** | Creates or modifies the context variable **Person**, setting its value to a record. The record contains two columns, named **Name** and **Address**. The value of the **Name** column is **Milton**, and the value of the **Address** column is **1 Main St**. | **Person** has the value of record **{ Name: "Milton", Address: "1 Main St" } }**.<br><br>Reference this record as a whole with the name **Person**, or reference an individual column of this record with **Person.Name** or **Person.Address**. |
| **UpdateContext( { Person: Patch( Person, {Address: "2 Main St" } ) } )** | Works with the [Patch](https://learn.microsoft.com/function-patch) function to update the **Person** context variable by setting the value of the **Address** column to **2 Main St**. | **Person** now has the value of record **{ Name: "Milton", Address: "2 Main St" } }**. |


1. Name the default screen **Source**, add another screen, and name it **Target**.

2. On the **Source** screen, add two buttons, and set their [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) properties so that one says **English** and the other says **Spanish**.

3. Set the [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of the **English** button to this expression:**Navigate(Target, ScreenTransition.Fade, {Language:"English"})**

4. Set the [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of the **Spanish** button to this expression:**Navigate(Target, ScreenTransition.Fade, {Language:"Spanish"})**

5. On the **Target** screen, add a label, and set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this expression:**If(Language="English", "Hello!", "Hola!")**

6. On the **Target** screen, select **Shapes** on the **Insert** tab, and then select the Back arrow.

7. Set the Back arrow's [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula:**Navigate(Source, ScreenTransition.Fade)**

8. From the **Source** screen, press F5, and then select the button for either language.

On the **Target** screen, the label appears in the language that corresponds to the button that you selected.


9. Select the Back arrow to return to the **Source** screen, and then select the button for the other language.

On the **Target** screen, the label appears in the language that corresponds to the button that you selected.

10. Press Esc to return to the default workspace.

11. Open the canvas app where you want to use this formula.

12. Add a new blank screen by selecting **New screen** from the command bar.

13. Add a button, and set its [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula: **[UpdateContext](https://app.getrecall.ai/item/a719fa37-7500-4c16-89a7-8168d4fe91cd)( { Name: "Lily", Score: 10 } )**


