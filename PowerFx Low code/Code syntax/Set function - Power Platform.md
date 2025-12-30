---
title: Set function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 19:01:15 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 19:01:22 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Set function is used to set the value of a global variable in Microsoft Power Apps, which can hold various types of information such as a single value, record, table, or object reference.
- Global variables are created implicitly by using the Set function and are available throughout the app on all screens, but their values are lost when the app is closed.
- The Set function has no return value and can only be used within a behavior formula, with the syntax `Set( VariableName, Value )`, where `VariableName` is the name of the global variable and `Value` is the value to assign to it.


Detailed summary

- The Set function in the Power Platform is used to set the value of a global variable, which is a temporary holder of information that can be accessed throughout an app on all screens.
- Global variables are created implicitly by using the Set function, and no explicit declaration is required, but they will cease to exist if all the Set functions for a global variable are removed.
- The Set function has no return value and can only be used within a behavior formula, with the syntax Set( VariableName, Value ), where VariableName is the name of the global variable to create or update, and Value is the value to assign to the variable.
- Global variables can hold various types of information, including a single value, a record, a table, an object reference, or any result from a formula, and they retain their value until the app is closed.
- To clear a variable, its value can be set to the result of the Blank function, and variables can be viewed, along with their values, definitions, and uses, in the Variables view under the File menu in Microsoft Power Apps Studio.
- The Set function can be used to create or modify global variables, such as setting a counter to a specific value, incrementing a counter, or creating a record with multiple columns, and it can also be used in conjunction with other functions, like the Patch function, to update the value of a global variable.
- It is essential to review the Understand variables topic before using variables, as global variables have limitations, such as not being automatically updated if the value of the formula used in the Set function changes, and they cannot use the same name as an existing collection or control, although they can use the same name as a context variable with the disambiguation operator.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-set)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Desktop flows Power Platform CLI Dataverse functions

Sets the value of a global variable.

Use the **Set** function to set the value of a global variable, which temporarily holds a piece of information, such as the number of times the user has selected a button or the result of a data operation.

Global variables are available throughout your app on all screens. These are the simplest kind of variables and fill the needs of most situations. There are also context variables which are scoped to a single screen and collections that allow row level modifications to tables. For more information about these other options, review [Understand variables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-variables).


[Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) are based on formulas that automatically recalculate as the user interacts with an app. Any formulas that depend on a variable will automatically update when it changes. However, the variable won't be automatically updated if the value of the formula used in the **Set** function changes. This requires the app maker to manually update the variable, which can be error prone and harder for others to understand. Before you use a variable, review [Understand variables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-variables).

Global variables are implicitly created by using the **Set** function. No explicit declaration is required. If you remove all the **Set** functions for a global variable, that global variable will cease to exist. To clear a variable, set its value to the result of the [Blank](https://learn.microsoft.com/function-isblank-isempty).

You can see your variables' values, definitions, and uses with the Variables view under the **File** menu in Power Apps Studio.

As the examples later in this topic show, global variables can hold several kinds of information, including these:

- a single value

- a record


- a table

- an object reference

- any result from a formula

A global variable holds its value until the app is closed. Once closed, the global variable's value will be lost and must be recreated when the app is loaded again.

Global variables cannot use the same name as an existing collection or control. It can use the same name as a context variable. To disambiguate between the two, use the [disambiguation operator](https://learn.microsoft.com/operators#disambiguation-operator).

**Set** has no return value, and you can use it only within a [behavior formula](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth).

**Set**( *VariableName*, *Value* )

- *VariableName* - Required. The name of a global variable to create or update.

- *Value* - Required. The value to assign to the context variable.


| Formula | Description | Result |
| --- | --- | --- |
| **Set( Counter, 1 )** | Creates or modifies the global variable **Counter**, setting its value to **1**. | **Counter** has the value **1**. You can reference that variable by using the name **Counter** in a formula on any screen. |
| **Set( Counter, 2 )** | Sets the value of the **Counter** global variable from the previous example to **2**. | **Counter** has the value **2**. |
| **Set( Counter, Counter + 1 )** | Increments the value of the **Counter** global variable from the previous example to **3**. | **Counter** has the value **3**. |
| **Set( Name, "Lily" )** | Creates or modifies the global variable **Name** setting its value to **Lily**. | **Name** has the value **Lily**. |
| **Set( Person, { Name: "Milton", Address: "1 Main St" } )** | Creates or modifies the global variable **Person**, setting its value to a record. The record contains two columns, named **Name** and **Address**. The value of the **Name** column is **Milton**, and the value of the **Address** column is **1 Main St**. | **Person** has the value of record **{ Name: "Milton", Address: "1 Main St" }**.<br><br>Reference this record as a whole with the name **Person**, or reference an individual column of this record with **Person.Name** or **Person.Address**. |
| **Set( Person, Patch( Person, {Address: "2 Main St" } ) )** | Works with the [Patch](https://learn.microsoft.com/function-patch) function to update the **Person** global variable by setting the value of the **Address** column to **2 Main St**. | **Person** now has the value of record **{ Name: "Milton", Address: "2 Main St" }**. |

