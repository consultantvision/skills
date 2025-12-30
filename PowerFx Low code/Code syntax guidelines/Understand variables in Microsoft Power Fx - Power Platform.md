---
title: Understand variables in Microsoft Power Fx - Power Platform
tags: Low-Code Development
createdAt: Mon Dec 29 2025 16:39:41 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 22:28:17 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- Microsoft Power Fx is a formula language that automatically recalculates formulas as input data changes, often eliminating the need for variables.
- Variables are sometimes necessary in Power Fx, particularly when creating behavior formulas or tracking values that depend on user actions.
- Power Fx has three types of variables: Global variables, Collections, and Context variables (the latter only in Power Apps), which are created implicitly when used in functions like Set, Collect, or UpdateContext.
- In Microsoft Power Fx, variables are implicitly declared and typed based on their usage, with no explicit declaration required.
- Variables can be established using functions like Set, UpdateContext, Navigate, Collect, or ClearCollect, and can be removed by removing all references to them.
- Context variables are limited to a single screen and can be established using UpdateContext or Navigate functions, while collections are tables that can be created and modified using ClearCollect or Collect functions.


Detailed summary


## Introduction to Microsoft Power Fx and Its Excel-Like Features
- Microsoft Power Fx, formerly known as the canvas apps formula language, is a programming language that is being integrated with other Microsoft Power Platform products and made available as open source, with its documentation and articles currently being worked on.
- The language is similar to Excel in that it automatically recalculates formulas as input data changes, making the use of variables often unnecessary, and instead, users are encouraged to think about how they would approach a problem in a spreadsheet when writing formulas.
- In Power Fx, variables are implicitly created and typed when they appear in functions that set their values, and they are typically used within behavior formulas, which run when a specific action occurs, such as a user selecting a button.
- The behavior of Power Fx is similar to Excel, where a cell can contain a value or a formula that is based on the values of other cells, and Excel automatically recalculates any formulas that depend on the new value when the user enters a different value into a cell.

## Behavior Formulas and Extended Functionality in Power Fx
- Unlike Excel, Microsoft Power Fx extends the model by adding behavior formulas, which allow for more complex logic and the use of variables, and it also allows for the creation of dependencies between controls, similar to dependencies between cells in an Excel workbook.
- In Power Fx, formulas can be used to determine not only the primary value of a control but also properties such as formatting, and they can be used in a wide variety of scenarios, including displaying a user's current location on a map, tracking updates to data sources, and filtering records in a gallery.
- The use of formulas in Power Fx enables automatic recalculation of dependent formulas when data sources are updated, allowing for dynamic and interactive applications, and it is recommended to avoid using variables whenever possible and instead rely on the automatic recalculation of formulas to create, understand, and maintain applications.

## Advantages and Limitations of Formula-Based Logic
- The use of formulas to build apps in Microsoft Power Fx has several advantages, including the ability to accomplish tasks with minimal code, similar to Excel, and the transparency of knowing exactly where to look for the source of a control's text, which is in the formula in the Text property.
- In Microsoft Power Fx, formulas can be used to achieve effects, and it is generally better to use formulas instead of other methods, as they allow the formula engine to do the work, making it easier to track changes and experiment with "what if" scenarios.
- However, there are cases where formulas alone are not sufficient, such as when the value of a control depends on a series of user actions, and a variable is needed to record and update the information manually, like in the example of an old-fashioned adding machine with a running total.

## Global Variables and the Adding Machine Example
- In the adding machine example, a global variable named RunningTotal is used to hold the running total, which is updated manually using the Set function, such as with the formula Set( RunningTotal, RunningTotal + TextInput1.Text ), and can be referenced anywhere in the app.
- Global variables in Power Fx are set using the Set function, can hold any value including strings, numbers, records, and tables, and are established as a specific type, such as a number, based on the operator used, like the + operator in the RunningTotal example.
- To create the adding machine, a text-input control named TextInput1 and two buttons named Button1 and Button2 are added, with Button1's OnSelect property set to the formula that updates the RunningTotal, and Button2's OnSelect property can be set to reset the RunningTotal to zero using the formula Set( RunningTotal, 0 ).
- The variable RunningTotal is initially blank when the app opens, and its value changes based on the buttons selected by the user, with the Set function used to update its value, such as setting it to 0 when the Clear button is selected.
- To display the value of RunningTotal, a Label control can be added with its Text property set to RunningTotal, allowing the user to see the current value as it changes.

## Variable Types and Management in Power Fx
- Microsoft Power Fx has two main types of variables: global variables, which are the simplest to use and can hold various data types, and collections, which hold tables that can be modified and referenced from anywhere in the app.
- In Power Apps, there is a third type of variable, known as context variables, which have a screen scope and are useful for passing values to a specific screen, similar to parameters in other programming languages.
- Variables in Power Fx are created implicitly when they appear in functions such as Set, UpdateContext, Navigate, Collect, or ClearCollect, and their type is determined by their usage, with no need for explicit declaration.
- The type of a variable must be consistent throughout its usage, and attempting to assign a different type to a variable will result in an error, such as trying to set a variable initially defined as a number to a text string.
- Variables can be removed by deleting all references to them, including Set, UpdateContext, Navigate, Collect, or ClearCollect functions, and any remaining references to the variable will cause an error.

## Context Variables and Their Scope
- All variables are stored in memory while the app is running and are lost when the app closes, but their values can be stored in a data source using functions like Patch or Collect, or saved locally using the SaveData function.
- Variables can be read using their name, and context variables take precedence over global variables or collections if they have the same name, but the disambiguation operator [@] can be used to reference the global variable or collection.
- Context variables in Microsoft Power Fx are established and set implicitly by using the UpdateContext or Navigate function, and they have an initial value of blank when the app starts, which can be updated with records using a syntax like { x: 1 } instead of the traditional "=" assignment operator.
- Context variables can hold any value, including strings, numbers, records, and tables, and they are limited to the context of a single screen, meaning they cannot be used or set outside of this context, but they can be set when navigating to a screen using the Navigate function.
- The UpdateContext function is used to update the value of a context variable, as seen in the example of the adding machine where the OnSelect property of the Add button is set to UpdateContext( { RunningTotal: RunningTotal + TextInput1.Text } ) to update the running total, and the OnSelect property of the Clear button is set to UpdateContext( { RunningTotal: 0 } ) to reset the running total to 0.

## Collections and Data Manipulation
- Context variables can be referenced anywhere in the screen where they are defined, and their values can be displayed using a Label control, such as setting the Text property of a Label control to RunningTotal to show the current value of the RunningTotal context variable.
- Collections in Microsoft Power Fx are created and set using the ClearCollect function, and they are a kind of data source that holds a table, allowing for easy modification and access to single values using the First function, such as First( VariableName ).Value to extract a single value from a collection.
- The Collect function can also be used to add new values to a collection, as seen in the example of the adding machine where the OnSelect property of the Add button is set to Collect( PaperTape, TextInput1.Text ) to add the input text to the PaperTape collection, which can then be referenced anywhere in the app.
- The Navigate function can be used to set the value of a context variable while navigating to a screen, as demonstrated by setting the OnSelect property of a button to Navigate( Screen1, None, { RunningTotal: -1000 } ) to set the RunningTotal context variable to -1000 when navigating to Screen1.
- The PaperTape table is initially empty when the app is opened, and a new value is added to the end of the collection when a formula runs, with Collect automatically placing the single value in a single-column table named Value.

## Data Storage and Retrieval Mechanisms
- To clear the paper tape when the Clear button is selected, the OnSelect property is set to the formula Clear(PaperTape), which removes all values from the PaperTape collection.
- The running total is displayed by adding a label and setting its Text property to the formula Sum(PaperTape, Value), which calculates the sum of all values in the PaperTape collection.
- To display the paper tape, a Data table control is inserted and its Items property is set to the formula PaperTape, allowing users to view the values in the collection.
- The Values in the collection can also be viewed by selecting Collections on the File menu, providing an alternative way to access the data.
- To store and retrieve the collection, two button controls are added with the Text properties set to Load and Save, and their OnSelect properties are set to the formulas Clear(PaperTape); LoadData(PaperTape, "StoredPaperTape", true) and SaveData(PaperTape, "StoredPaperTape") respectively.
- The Load button first clears the PaperTape collection using the Clear formula and then loads the stored values from "StoredPaperTape" using the LoadData formula, while the Save button saves the current PaperTape collection to "StoredPaperTape" using the SaveData formula.

## Testing and Verifying the Application
- The app can be tested by pressing the F5 key to open Preview, entering numbers in the text-input control, selecting buttons, and then saving and loading the collection to verify that the data is stored and retrieved correctly.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/variables)
Note

Microsoft Power Fx is the new name for the canvas apps formula language. These articles are work in progress as we extract the language from canvas apps, integrate it with other Microsoft Power Platform products, and make it available as open source. Start with the [Microsoft Power Fx Overview](https://learn.microsoft.com/overview) for an introduction to the language.

If you've used another programming tool, such as Visual Basic or JavaScript, you may be asking: **Where are the variables?** Microsoft Power Fx is a little different and requires a different approach. Instead of reaching for a variable when you write a formula, ask yourself: **What would I do in a spreadsheet?**

In other tools, you may have explicitly performed a calculation and stored the result in a variable. However, Power Fx and Excel both automatically recalculate formulas as the input data changes, so you usually don't need to create and update variables. By taking this approach whenever possible, you can more easily create, understand, and maintain your app.


In some cases, you'll need to use variables in Power Fx, which extends Excel's model by adding [behavior formulas](https://learn.microsoft.com/imperative). These formulas run when, for example, a user selects a button. Within a behavior formula, it's often helpful to set a variable to be used in other formulas.

In general, avoid using variables. But sometimes only a variable can enable the experience you want. Variables are implicitly created and typed when they appear in functions that set their values.

Let's review how Excel works. A cell can contain a value, such as a number or a string, or a formula that's based on the values of other cells. After the user enters a different value into a cell, Excel automatically recalculates any formulas that depend on the new value. You don't have to do any programming to enable this behavior.

In the following example, cell **A3** is set to the formula **A1+A2**. If **A1** or **A2** changes, **A3** automatically recalculates to reflect the change. This behavior requires no coding outside of the formula itself.

![Animation of recalculating the sum of two numbers in Excel.](https://learn.microsoft.com/media/variables/excel-recalc.gif)


Excel doesn't have variables. The value of a cell that contains a formula changes based on its input, but there's no way to remember the result of a formula and store it in a cell or anywhere else. If you change a cell's value, the entire spreadsheet may change, and any previously calculated values are lost. An Excel user can copy and paste cells, but that's under the user's manual control and isn't possible with formulas.

Logic that you create in Power Fx behaves very much like Excel. Instead of updating cells, you can add controls wherever you want on a screen and name them for use in formulas.

For example in Power Apps, you can replicate the Excel behavior in an app by adding a [Label](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-text-input) control, named **Label1**, and two [Text input](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-text-input) controls, named **TextInput1** and **TextInput2**. If you then set the [Text](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-text-input) property of **Label1** to **TextInput1.Text + TextInput2.Text**, it will always show the sum of whatever numbers are in **TextInput1** and **TextInput2** automatically.

![Calculating the sum of two numbers in Power Fx.](https://learn.microsoft.com/media/variables/recalc1.png)


Notice that the **Label1** control is selected, showing its [Text](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/properties-core) formula in the formula bar at the top of the screen. Here we find the formula **TextInput1.Text + TextInput2.Text**. This formula creates a dependency between these controls, just as dependencies are created between cells in an Excel workbook. Let's change the value of **TextInput1**:

![Animation of calculating the sum of two numbers in Power Fx.](https://learn.microsoft.com/media/variables/recalc2.gif)

The formula for **Label1** has been automatically recalculated, showing the new value.

In Power Fx, you can use formulas to determine not only the primary value of a control but also properties such as formatting. In the next example, a formula for the [Color](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/properties-color-border) property of the label will automatically show negative values in red. The [If](https://learn.microsoft.com/reference/function-if) function should look familiar from Excel:

`If( Value(Label1.Text) < 0, Color.Red, Color.Black )`

![Animation of conditional formatting.](https://learn.microsoft.com/media/variables/recalc-color.gif)

You can use formulas for a wide variety of scenarios:


- By using your device's GPS, a map control can display your current location with a formula that uses **Location.Latitude** and **Location.Longitude**. As you move, the map will automatically track your location.

- Other users can update data sources. For example, others on your team might update items in a SharePoint list. When you refresh a data source, any dependent formulas are automatically recalculated to reflect the updated data. Furthering the example, you might set a gallery's [Items](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/properties-core) property to the formula **Filter( SharePointList )**, which will automatically display the newly filtered set of [records](https://learn.microsoft.com/tables#records).

Using formulas to build apps has many advantages:

- If you know Excel, you know Power Fx. The model and formula language are the same.


- If you've used other programming tools, think about how much code would be required to accomplish these examples. In Visual Basic, you'd need to write an event handler for the change event on each text-input control. The code to perform the calculation in each of these is redundant and could get out of sync, or you'd need to write a common subroutine. In Power Fx, you accomplished all of that with a single, one-line formula.

- To understand where **Label1**'s text is coming from, you know exactly where to look: the formula in the [Text](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/properties-core) property. There's no other way to affect the text of this control. In a traditional programming tool, any event handler or subroutine could change the value of the label, from anywhere in the program. This can make it hard to track down when and where a variable was changed.


- If the user changes a slider control and then changes their mind, they can change the slider back to its original value. And it's as if nothing had ever changed: the app shows the same control values as it did before. There are no ramifications for experimenting and asking "what if," just as there are none in Excel.

In general, if you can achieve an effect by using a formula, you'll be better off. Let the formula engine in Power Fx do the work for you.

Let's change our simple adder to act like an old-fashioned adding machine, with a running total. If you select an **Add** button, you'll add a number to the running total. If you select a **Clear** button, you'll reset the running total to zero.


| Display | Description |
| --- | --- |
| ![App with a Text input control, a label, and two buttons.](https://learn.microsoft.com/media/variables/button-changes-state-1.png)<br> | When the app starts, the running total is 0.<br><br>The red dot represents the user's finger in the text-input box, where the user enters **77**. |
| ![The Text input control contains 77, and the Add button is being pressed.](https://learn.microsoft.com/media/variables/button-changes-state-2.png)<br> | The user selects the **Add** button. |
| ![The total is 77, and another 77 is being added to it.](https://learn.microsoft.com/media/variables/button-changes-state-3.png)<br> | 77 is added to the running total.<br><br>The user selects the **Add** button again. |
| ![The total is 154 before it's cleared.](https://learn.microsoft.com/media/variables/button-changes-state-4.png)<br> | 77 is again added to the running total, resulting in 154.<br><br>The user selects the **Clear** button. |
| ![The total is cleared.](https://learn.microsoft.com/media/variables/button-changes-state-5.png)<br> | The running total is reset to 0. |

Our adding machine uses something that doesn't exist in Excel: a button. In this app, you can't use only formulas to calculate the running total because its value depends on a series of actions that the user takes. Instead, our running total must be recorded and updated manually. Most programming tools store this information in a *variable*.

You'll sometimes need a variable for your app to behave the way you want. But the approach comes with caveats:

- You must manually update the running total. Automatic recalculation won't do it for you.


- The running total can no longer be calculated based on the values of other controls. It depends on how many times the user selected the **Add** button and what value was in the text-input control each time. Did the user enter 77 and select **Add** twice, or did they specify 24 and 130 for each of the additions? You can't tell the difference after the total has reached 154.

- Changes to the total can come from different paths. In this example, both the **Add** and **Clear** buttons can update the total. If the app doesn't behave the way you expect, which button is causing the problem?

To create our adding machine, we require a variable to hold the running total. The simplest variables to work with in Power Fx are *global variables*.

How global variables work:

- You set the value of the global variable with the [Set](https://learn.microsoft.com/reference/function-set) function. **Set( MyVar, 1 )** sets the global variable **MyVar** to a value of **1**.

- You use the global variable by referencing the name used with the **Set** function. In this case, **MyVar** will return **1**.


- Global variables can hold any value, including strings, numbers, records, and [tables](https://learn.microsoft.com/tables).

Let's rebuild our adding machine by using a global variable:

1. Add a text-input control, named **TextInput1**, and two buttons, named **Button1** and **Button2**.

2. Set the **Text** property of **Button1** to **"Add"**, and set the **Text** property of **Button2** to **"Clear"**.

3. To update the running total whenever a user selects the **Add** button, set its **OnSelect** property to this formula:

**Set( RunningTotal, RunningTotal + TextInput1.Text )**

The mere existence of this formula establishes **RunningTotal** as a global variable that holds a number because of the **+** operator. You can reference **RunningTotal** anywhere in the app. Whenever the user opens this app, **RunningTotal** has an initial value of *blank*.

The first time that a user selects the **Add** button and [Set](https://learn.microsoft.com/reference/function-set) runs, **RunningTotal** is set to the value **RunningTotal + TextInput1**.

![OnSelect property of the Add button is set to Set function.](https://learn.microsoft.com/media/variables/global-variable-1.png)

4. To set the running total to **0** whenever the user selects the **Clear** button, set its **OnSelect** property to this formula:

**Set( RunningTotal, 0 )**

![OnSelect property of the Clear button is set to Set function.](https://learn.microsoft.com/media/variables/global-variable-2.png)


5. Add a **Label** control, and set its **Text** property to **RunningTotal**.

This formula will automatically be recalculated and show the user the value of **RunningTotal** as it changes based on the buttons that the user selects.

![Text property of the label is set to the name of the variable.](https://learn.microsoft.com/media/variables/global-variable-3.png)

6. Preview the app, and we have our adding machine as described above. Enter a number in the text box and press the **Add** button a few times. When ready, return to the authoring experience using the Esc key.

![Text-input control contains a value, and the label contains the running total.](https://learn.microsoft.com/media/variables/global-variable-4.png)

7. To show the global variable's value, select the **File** menu, and select **Variables** in the left-hand pane.

![Variables option in the File menu.](https://learn.microsoft.com/media/variables/global-variable-file-1.png)

8. To show all the places where the variable is defined and used, select it.

![List of location where variable is used.](https://learn.microsoft.com/media/variables/global-variable-file-2.png)

Power Fx has two types of variables:


| Variables type | Scope | Description | Functions that establish |
| --- | --- | --- | --- |
| Global variables | App | Simplest to use. Holds a number, text string, Boolean, record, table, etc. that can be references from anywhere in the app. | [Set](https://learn.microsoft.com/reference/function-set) |
| Collections | App | Holds a table that can be referenced from anywhere in the app. Allows the contents of the table to be modified rather than being set as a whole. Can be saved to the local device for later use. | [Collect](https://learn.microsoft.com/reference/function-clear-collect-clearcollect)[ClearCollect](https://learn.microsoft.com/reference/function-clear-collect-clearcollect) |

When used in Power Apps, there is a third type of variable:

| Variables type | Scope | Description | Functions that establish |
| --- | --- | --- | --- |
| Context variables | Screen | Great for passing values to a screen, much like parameters to a procedure in other languages. Can be referenced from only one screen. | [UpdateContext](https://learn.microsoft.com/reference/function-updatecontext)[Navigate](https://learn.microsoft.com/reference/function-navigate) |


All variables are created implicitly when they appear in a **Set**, **UpdateContext**, **Navigate**, **Collect**, or **ClearCollect** function. To declare a variable and its type, you need only include it in any of these functions anywhere in your app. None of these functions create variables; they only fill variables with values. You never declare variables explicitly as you might in another programming tool, and all typing is implicit from usage.

For example, you might have a button control with an **OnSelect** formula equal to **Set( X, 1 )**. This formula establishes **X** as a variable with a type of number. You can use **X** in formulas as a number, and that variable has a value of *blank* after you open the app but before you select the button. When you select the button, you give **X** the value of **1**.


If you added another button and set its **OnSelect** property to **Set( X, "Hello" )**, an error would occur because the type (text string) doesn't match the type in the previous **Set** (number). All implicit definitions of the variable must agree on type. Again, all this happened because you mentioned **X** in formulas, not because any of those formulas had actually run.

You remove a variable by removing all the **Set**, **UpdateContext**, **Navigate**, **Collect**, or **ClearCollect** functions that implicitly establish the variable. Without these functions, the variable doesn't exist. You must also remove any references to the variable because they will cause an error.

All variables are held in memory while the app runs. After the app closes, the values that the variables held are lost.

You can store the contents of a variable in a data source by using the **Patch** or **Collect** functions. You can also store values in collections on the local device by using the [SaveData](https://learn.microsoft.com/reference/function-savedata-loaddata) function.


When the user opens the app, all variables have an initial value of *blank*.

You use the variable's name to read its value. For example, you can define a variable with this formula:

`Set( Radius, 12 )`

Then you can simply use **Radius** anywhere that you can use a number, and it will be replaced with **12**:

`Pi() * Power( Radius, 2 )`

If you give a context variable the same name as a global variable or a collection, the context variable takes precedence. However, you can still reference the global variable or collection if you use the [disambiguation operator](https://learn.microsoft.com/reference/operators) **[@Radius]**.

Let's look at how our adding machine would be created using a context variable instead of a global variable.

How context variables work:

- You implicitly establish and set context variables by using the **UpdateContext** or **Navigate** function. When the app starts, the initial value of all context variables is *blank*.


- You update context variables with records. In other programming tools, you commonly use "=" for assignment, as in "x = 1". For context variables, use **{ x: 1 }** instead. When you use a context variable, use its name directly without the record syntax.

- You can also set a context variable when you use the **Navigate** function to show a screen. If you think of a screen as a kind of procedure or subroutine, this approach resembles parameter passing in other programming tools.

- Except for **Navigate**, context variables are limited to the context of a single screen, which is where they get their name. You can't use or set them outside of this context.

- Context variables can hold any value, including strings, numbers, records, and [tables](https://learn.microsoft.com/tables).

Let's rebuild our adding machine by using a context variable:

1. Add a text-input control, named **TextInput1**, and two buttons, named **Button1** and **Button2**.

2. Set the **Text** property of **Button1** to **"Add"**, and set the **Text** property of **Button2** to **"Clear"**.


3. To update the running total whenever a user selects the **Add** button, set its **OnSelect** property to this formula:

**UpdateContext( { RunningTotal: RunningTotal + TextInput1.Text } )**

The mere existence of this formula establishes **RunningTotal** as a context variable that holds a number because of the **+** operator. You can reference **RunningTotal** anywhere in this screen. Whenever the user opens this app, **RunningTotal** has an initial value of *blank*.

The first time that the user selects the **Add** button and [UpdateContext](https://learn.microsoft.com/reference/function-updatecontext) runs, **RunningTotal** is set to the value **RunningTotal + TextInput1**.

![OnSelect property of the Add button.](https://learn.microsoft.com/media/variables/context-variable-1.png)

4. To set the running total to **0** whenever the user selects the **Clear** button, set its **OnSelect** property to this formula:

**UpdateContext( { RunningTotal: 0 } )**

Again, [UpdateContext](https://learn.microsoft.com/reference/function-updatecontext) is used with the formula **UpdateContext( { RunningTotal: 0 } )**.

![OnSelect property of the Clear button.](https://learn.microsoft.com/media/variables/context-variable-2.png)

5. Add a **Label** control, and set its **Text** property to **RunningTotal**.


This formula will automatically be recalculated and show the user the value of **RunningTotal** as it changes based on the buttons that the user selects.

![Text property of label.](https://learn.microsoft.com/media/variables/context-variable-3.png)

6. Preview the app and we have our adding machine as described above. Enter a number in the text box and press the **Add** button a few times. When ready, return to the authoring experience using the Esc key.

![Text-input control shows a value, and label shows running total.](https://learn.microsoft.com/media/variables/context-variable-4.png)

7. You can set the value of a context variable while navigating to a screen. This is useful for passing "context" or "parameters" from one screen to another. To demonstrate this technique, insert a screen, insert a button, and set its **OnSelect** property to this formula:

**Navigate( Screen1, None, { RunningTotal: -1000 } )**

![OnSelect property of a button.](https://learn.microsoft.com/media/variables/context-variable-5.png)

Hold down the Alt key while you select this button to both show **Screen1** and set the context variable **RunningTotal** to -1000.

![Screen1 is open.](https://learn.microsoft.com/media/variables/context-variable-6.png)

8. To show the value of the context variable, select the **File** menu, and then select **Variables** in the left-hand pane.

![Variables option on the File menu.](https://learn.microsoft.com/media/variables/context-variable-file-1.png)

9. To show where the context variable is defined and used, select it.

![List of where a variable is used.](https://learn.microsoft.com/media/variables/context-variable-file-2.png)


Finally, let's look at creating our adding machine with a collection. Since a collection holds a table that is easy to modify, we will make this adding machine keep a "paper tape" of each value as they are entered.

How collections work:

- Create and set collections by using the **ClearCollect** function. You can use the **Collect** function instead, but it will effectively require another variable instead of replacing the old one.

- A collection is a kind of data source and, therefore, a table. To access a single value in a collection, use the **First** function, and extract one field from the resulting record. If you used a single value with **ClearCollect**, this will be the **Value** field, as in this example: **First(** *VariableName* **).Value**

Let's recreate our adding machine by using a collection:

1. Add a **Text input** control, named **TextInput1**, and two buttons, named **Button1** and **Button2**.

2. Set the **Text** property of **Button1** to **"Add"**, and set the **Text** property of **Button2** to **"Clear"**.


3. To update the running total whenever a user selects the **Add** button, set its **OnSelect** property to this formula:

**Collect( PaperTape, TextInput1.Text )**

The mere existence of this formula establishes **PaperTape** as a collection that holds a single-column table of text strings. You can reference **PaperTape** anywhere in this app. Whenever a user opens this app, **PaperTape** is an empty table.

When this formula runs, it adds the new value to the end of the collection. Because we're adding a single value, **Collect** automatically places it in a single-column table, and the column's name is **Value**, which you'll use later.

![OnSelect property Add button.](https://learn.microsoft.com/media/variables/papertape-1.png)

4. To clear the paper tape when the user selects the **Clear** button, set its [OnSelect](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/properties-core) property to this formula:

**Clear( PaperTape )**

![OnSelect property Clear button.](https://learn.microsoft.com/media/variables/papertape-2.png)

5. To display the running total, add a label, and set its [Text](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/properties-core) property to this formula:

**Sum( PaperTape, Value )**

![Text property label.](https://learn.microsoft.com/media/variables/papertape-3.png)

6. To run the adding machine, press F5 to open Preview, enter numbers in the text-input control, and select buttons.

![The Text input control shows a value, and the label show the running total.](https://learn.microsoft.com/media/variables/papertape-run-1.png)


7. To return to the default workspace, press the Esc key.

8. To display the paper tape, insert a **Data table** control, and set its [Items](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/properties-core) property to this formula:

**PaperTape**

In the right-hand pane, select **Edit fields** and then select **Add field**, select **Value** column and then select **Add** to show it.

![Data table that shows the values added to the collection.](https://learn.microsoft.com/media/variables/papertape-4.png)

9. To see the values in your collection, select **Collections** on the **File** menu.

![Preview of the PaperTape collection.](https://learn.microsoft.com/media/variables/papertape-file.png)

10. To store and retrieve your collection, add two additional button controls, and set their **Text** properties to **Load** and **Save**. Set the **OnSelect** property of the **Load** button to this formula:

```
**Clear( PaperTape ); LoadData( PaperTape, "StoredPaperTape", true )**
```

```
You need to clear the collection first because **LoadData** will append the stored values to the end of the collection.

!OnSelect property  Load button.
```

11.  Set the **OnSelect** property of the **Save** button to this formula:

```
**SaveData( PaperTape, "StoredPaperTape" )**

!OnSelect property Save button.
```


12.  Preview again by pressing the F5 key, enter numbers in the text-input control, and select buttons. Select the **Save** button. Close and reload the app, and select the **Load** button to reload your collection.


