---
title: Get started with formulas in canvas apps - Power Apps
tags: Low-Code Development
createdAt: Mon Dec 29 2025 20:33:31 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 20:33:37 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- Formulas in Microsoft Power Apps are used to calculate values, perform tasks, and respond to user input, similar to Excel formulas but with additional app-specific capabilities.
- The Power Fx formula bar is a tool in Power Apps Studio that allows you to write and edit formulas, providing suggestions and IntelliSense as you type.
- Formulas can be used to set control properties, such as text, color, and visibility, and can also be used to perform actions, like navigating to another screen or updating a data source, using functions like Navigate and Collect.


Detailed summary


## Introduction to Power Apps formulas and the formula bar
- The Microsoft Power Apps platform allows users to configure their canvas apps with formulas that can calculate values, perform tasks, and respond to user input, similar to Excel, but with additional capabilities tailored to app development.
- In Power Apps, formulas are used to configure controls instead of cells, and can be used to determine how the app responds to user interactions, such as selecting a button or adjusting a slider, and can also be used to update external data sources or create tables.
- The Power Fx formula bar provides an intuitive and efficient way to write formulas for apps, offering suggestions for functions and helping with syntax and errors as the user types, and can be accessed by opening the app for editing in Power Apps Studio and selecting the formula bar at the top of the screen.
- To use the formula bar, users can start typing their formula, and the bar will provide suggestions for functions that match the input, allowing users to select from the suggestions or continue typing until the formula is complete.

## Static text values and error feedback in formulas
- In Microsoft Power Apps, users can specify a piece of data that doesn't change by setting the Text property of a label to the exact sequence of characters, surrounded by double quotation marks, and can also use formulas to achieve the same effect, without preceding the formula with an equals sign or a plus sign, and without surrounding the formula with double quotation marks.
- The formula bar helps users by showing the description and expected arguments for functions, and indicates errors with yellow exclamation-point icons or a red cross, which disappear when a valid value is entered, and the label reflects the new value as the user types it.

## Function reference and getting started with Power Apps
- The Power Apps platform provides a range of functions, operators, and other building blocks that can be used to create formulas, and users can browse the formula reference for more details and the complete list of available functions and operators.
- To get started with formulas in Power Apps, users can sign up for Power Apps, sign in with their credentials, and learn how to configure a control in Power Apps, and can also create a blank canvas app to practice using the formula bar and writing formulas.

## Example formulas: calculations and conditional formatting
- In Microsoft Power Apps, you can achieve similar results to Excel formulas by adding controls to a screen and setting their properties, such as adding a label control and two Text input controls to display the sum of the input values.
- The Text property of a label control can be set to a formula, such as TextInput1.Text + TextInput2.Text, to automatically display the sum of the input values, and the If function can be used to determine properties like color, for example, to show negative values in red using the formula If( Value(Label1.Text) < 0, Color.Red, Color.Black ).

## Advanced formula usage: appearance, behavior, and editor features
- Formulas can be used to configure an app's appearance or behavior, such as creating a filter to show specific data, sorting a set of data, or changing the color of the screen by adjusting sliders, which can be achieved by setting the Fill property of the screen to a formula like RGBA( Slider1.Value, Slider2.Value, Slider3.Value, 1 ).
- The property selector can be used to access control properties in a formula, and the formula reference indicates if a function can only be used in a behavior formula, such as the Navigate function, which can be used to set the OnSelect property of a button to navigate to another screen.
- Behavior formulas can be used to take multiple actions by separating functions with a semi-colon, and the properties list can be viewed alphabetically or by category in the Advanced tab of the Properties pane, where formulas can be edited directly and the property search can be used to quickly find and change a control's behavior and appearance.
- The formula bar in Microsoft Power Apps provides features like syntax coloring and Find and Replace capability to improve readability and help understand long formulas, making it easier to work with complex formulas and achieve the desired results in your app.




## Sources
- [website](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas#use-power-fx-formula-bar)
Configure your canvas app with formulas that not only calculate values and perform other tasks (as they do in Excel) but also respond to user input (as an app requires).

- In Excel, you build formulas that, for example, populate cells and create tables and charts.

- In [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685), you build similar formulas as you configure controls instead of cells. In addition, you build formulas that apply specifically to apps instead of spreadsheets.

For example, you build a formula to determine how your app responds when users select a button, adjust a slider, or provide other input. These formulas might show a different screen, update a data source that's external to the app, or create a table that contains a subset of the data in an existing table.

You can use formulas for a wide variety of scenarios. For example, you can use your device's GPS, a map control, and a formula that uses **Location.Latitude** and **Location.Longitude** to display your current location. As you move, the map automatically tracks your location.


This article provides only an overview of working with formulas. Browse the [formula reference](https://learn.microsoft.com/formula-reference) for more details and the complete list of functions, operators, and other building blocks you can use.

1. [Sign up](https://learn.microsoft.com/signup-for-powerapps) for [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) and [sign in](https://make.powerapps.com/?utm_source=padocs&utm_medium=linkinadoc&utm_campaign=referralsfromdoc) with your credentials.

2. Learn how to [configure a control](https://learn.microsoft.com/add-configure-controls) in Power Apps.

The Power Fx formula bar offers a more intuitive and efficient way to write formulas for your apps. Follow these steps to use the formula bar:

1. Open your app for editing in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) Studio.

2. Open the formula bar by selecting it at the top of the screen.

3. Start typing your formula in the bar. As you type, the formula bar provides suggestions for functions that match your input.

4. Continue typing your formula or select the suggestions until you're done.


In Excel, you can enter a specific piece of data, such as the number **42** or the phrase **Hello World**, by typing it into a cell. That cell shows the data exactly as you type it. In [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685), you can similarly specify a piece of data that doesn't change by setting the [Text](https://learn.microsoft.com/controls/properties-core) property of a label to the exact sequence of characters that you want, surrounded by double quotation marks.

1. Create a [blank canvas app](https://learn.microsoft.com/create-blank-app).

The formula bar sits at the top of the screen.

![Formula bar.](https://learn.microsoft.com/media/working-with-formulas/formula-bar.png)

1. *Property list*: Each control and screen has a [set of properties](https://learn.microsoft.com/reference-properties). Use this list to select a specific property.

2. *Formula*: The formula to be calculated for this property, made up of [values, operators, and functions](https://learn.microsoft.com/formula-reference). As you type, Intellisense helps you with recommendations for formula, syntax, and errors.

3. *Selected control*: In the formula bar, you can see and edit properties for the selected control or for the screen if no controls are selected.

2. Add a [Label](https://learn.microsoft.com/controls/control-text-box) control to the screen.


When you add a label, the property list automatically shows the [Text](https://learn.microsoft.com/controls/properties-core) property, which drives what the control shows. By default, the value of this property is **"Text"**.

3. Set the value of the [Text](https://learn.microsoft.com/controls/properties-core) property to **"Hello World"** by typing that string, surrounded by double quotes, into the formula bar:

![Using the label Hello World.](https://learn.microsoft.com/media/working-with-formulas/label-hello-world.png)

The label reflects this new value as you type it. The screen might show yellow exclamation-point icons while you type. These icons indicate errors, but go away when you finish entering a valid value. For example, a string without double quotation marks on both ends isn't valid.

In Excel, you can show a number, such as **42**, by typing it into a cell or by typing a formula that resolves to that number, such as **=SUM(30,12)**. In [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685), you can achieve the same effect by setting the **Text** property of a control, such as a label, to **42** or **Sum(30,12)**. The cell and the label show that number regardless of what else changes in the worksheet or the app.

Note


In Power Apps, you don't precede a formula with an equals sign or a plus sign as you do in Excel. The formula bar treats anything you type there as a formula by default. You also don't surround a formula with double quotation marks ("), as you did earlier to specify a string of text.

4. In the [Text](https://learn.microsoft.com/controls/properties-core) property of the label, replace **"Hello World"** with **Sum(1,2,3)**.

While you type, the formula bar helps you by showing the description and the expected arguments for this function. As with the final double quotation mark in **"Hello World"**, the screen shows a red cross, showing an error, until you type the final parenthesis of this formula.

![Using the label - typing the partial function without a closing parenthesis shows errors.](https://learn.microsoft.com/media/working-with-formulas/label-sum-partial.png)

Completed formula with the final parenthesis added:

![Using the complete formula Sum(1,2,3).](https://learn.microsoft.com/media/working-with-formulas/label-sum.png)

In Excel, you type **=A1+A2** into a cell to show the sum of whatever values cells **A1** and **A2** contain. If either or both of those values change, the cell that contains the formula automatically shows the updated result.

![Animation of Excel recalculating the sum of two numbers.](https://learn.microsoft.com/media/working-with-formulas/excel-recalc.gif)


In [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685), you can achieve a similar result by adding controls to a screen and setting their properties. This example shows a label control named **Label1** and two [Text input](https://learn.microsoft.com/controls/control-text-input) controls, named **TextInput1** and **TextInput2**. You can add a formula to the **Label1** control so that when you input a number into **TextInput1** and **TextInput2**, they're added together and display in **Label1**.

![Screenshot of Power Apps recalculating the sum of two numbers.](https://learn.microsoft.com/media/working-with-formulas/recalc1.png)

Regardless of what numbers you type in the text-input controls, the label always shows the sum of those numbers because its [Text](https://learn.microsoft.com/controls/properties-core) property is set to this formula: `TextInput1.Text + TextInput2.Text`.

In Excel, you can use conditional-formatting formulas to show, for example, negative values in red. In [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685), you can use formulas to determine not only the primary value of a control but also properties such as color.

In this example, a formula for the [Color](https://learn.microsoft.com/controls/properties-color-border) property of the label automatically shows negative values in red. The [If](https://learn.microsoft.com/functions/function-if) function should look familiar from Excel:

`If( Value(Label1.Text) < 0, Color.Red, Color.Black )`

![Animation of conditional formatting.](https://learn.microsoft.com/media/working-with-formulas/recalc-color.png)


You can configure your app with formulas so that users can change your app's appearance or behavior. For example, you can create a filter to show only data that contains a string of text that the user specifies. You can let users sort a set of data based on a certain column in the data set.

In this example, you can let users change the color of the screen by adjusting one or more sliders.

1. Remove the controls from the previous procedures, or create a blank app as you did previously, and add three slider controls to it. You can search for the slider control in the search box of the **Insert** page to find the control under **Input**. To add the sliders, drag and drop the control to the canvas.

![Insert a slider control.](https://learn.microsoft.com/media/working-with-formulas/insert-slider.png)

2. Arrange the sliders so they don't overlap, add three labels, and configure the labels to show **Red**, **Green**, and **Blue** text.

3. Set the **Max** property of each slider to 255 (default is 100), which is the maximum value of a color component for the [RGBA](https://learn.microsoft.com/functions/function-colors) function.

![Screenshot that shows the sliders and labels arrangement, including the Max property set to 255.](https://learn.microsoft.com/media/working-with-formulas/three-sliders.png)


4. Select the screen to unselect any control, and then set the screen's [Fill](https://learn.microsoft.com/controls/properties-color-border) property to this formula: **RGBA( Slider1.Value, Slider2.Value, Slider3.Value, 1 )**. Your screen turns dark gray, which reflects the sliders' current positions.

In the formula, you can access control properties by using the [property selector](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/operators). For example, **Slider1.Value** refers to the slider's [Value](https://learn.microsoft.com/controls/properties-core) property, which represents where the user placed the slider between the **Min** and **Max** values.

5. **Preview the app** and adjust the sliders. You see how each control is color coded to change the background color of the screen.

![Screenshot that shows the color of the screen when you adjust the sliders.](https://learn.microsoft.com/media/working-with-formulas/three-sliders-partial-rgba.png)

As each slider changes, the formula that contains the [RGBA](https://learn.microsoft.com/functions/function-colors) function is recalculated, which immediately changes how the screen appears.

You can use formulas not only to perform calculations and change appearance but also to take action. For example, you can set the [OnSelect](https://learn.microsoft.com/controls/properties-core) property of a button to a formula that includes the [Navigate](https://learn.microsoft.com/functions/function-navigate) function. When a user selects that button, the screen that you specify in the formula appears.


You can use some functions, such as [Navigate](https://learn.microsoft.com/functions/function-navigate) and [Collect](https://learn.microsoft.com/functions/function-clear-collect-clearcollect), only in behavior formulas. The formula reference calls out if you can use a function only in this context.

You can take more than one action in a behavior formula if you separate functions with a semi-colon (;). For example, you might want to update a context variable, push data to a data source, and finally navigate to another screen.

The properties list shows properties alphabetically, but you can also view all the properties of a control, organized by category, if you select a control, for example **Label1**, and then select the **Advanced** tab in the **Properties** pane, you see a long list of properties for that control.

![Advanced view.](https://learn.microsoft.com/media/working-with-formulas/advanced-open.png)

You can edit formulas directly within this view. With the property search, you can quickly find a property of that control and change a control's behavior and appearance.


As you type a formula in the formula bar, different syntax elements appear in different colors to improve readability and help you understand long formulas. Here's the color code list in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685).

![Screenshot that shows a table list of syntax highlighting.](https://learn.microsoft.com/media/working-with-formulas/syntax-highlighting.png)

[Use Find and Replace capability in the formula bar](https://learn.microsoft.com/formula-bar-find-replace)


