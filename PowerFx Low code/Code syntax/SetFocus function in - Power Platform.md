---
title: SetFocus function in - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 19:00:55 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 19:01:01 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The SetFocus function in Power Platform gives a control the input focus, allowing users to type or select it.
- SetFocus can be used with Button, Icon, Image, Label, and TextInput controls, but not with controls within a Gallery, Edit form, or Component.
- The function can only be used in behavior formulas and with controls on the same screen as the formula containing the SetFocus call.


Detailed summary


## Introduction and Basic Usage of SetFocus Function
- The SetFocus function in Power Platform is used to move input focus to a specific control, allowing users to type into a text input control or select a button using the Enter key, and it can be used in various scenarios such as when a newly exposed or enabled input control is displayed, when a form is validated, or when a screen is displayed.
- The SetFocus function can only be used with certain controls, including Button, Icon, Image, Label, and TextInput controls, and it cannot be used with controls within a Gallery, Edit form, or Component, or with controls that have their DisplayMode property set to Disabled.
- When using the SetFocus function, the focus will be set to the specified control, and the control with focus may be visually different based on the FocusedBorderColor and FocusedBorderThickness properties, and the function can only be used in behavior formulas, with the syntax SetFocus(Control), where Control is the required control to give the input focus.

## Application in User Experience and Examples
- The SetFocus function is useful in guiding the user to newly enabled controls for faster data entry, and it can be used in conjunction with other formulas and properties, such as the TabIndex, to create a seamless user experience, as demonstrated in the example of a shopping cart where the customer can use the shipping address as the billing address.
- In the example provided, the SetFocus function is used to move the focus to the BillingName text input box when the SyncAddresses check box is unchecked, allowing the customer to easily enter a different billing address, and this is achieved through the OnUncheck property of the check box, which is set to the formula SetFocus(BillingName).

## Limitations and Platform-Specific Behavior
- The SetFocus function has some limitations, such as not being able to set the focus to controls that are within a Container control, or to controls on a different screen than the formula containing the SetFocus call, and on Apple iOS, the soft keyboard will only be displayed automatically if SetFocus was initiated by a direct user action, such as invoking from a button's OnSelect property.

## Form Validation and Scrollable Screen Example
- The SetFocus function in Power Platform is used to move the input focus to a specific control, which can be particularly helpful when validating a form and taking the user to the field that is offending, especially if the field is scrolled off the screen and not visible.
- The example provided uses a scrollable screen to host the input controls, as the SetFocus function is not yet supported by the Edit form control, and demonstrates how to use the SetFocus function to focus on validation issues by repeatedly pressing a validation button until all fields have been filled in properly.
- The formula used to achieve this functionality is an If statement that checks for blank fields and uses the Notify function to display an error message and the SetFocus function to move the input focus to the control that requires attention, with the formula being: If( IsBlank( Name ), Notify( "Name requires a value", Error ); SetFocus( Name ), ... ) for each field.

## Creating Example Applications with SetFocus
- To create this example, a new, blank phone app is created, and a new screen is added with a scrollable section containing Text input controls and Label controls, with a checkmark Icon at the top of the screen that has its OnSelect property set to the formula.
- Another example demonstrates how to use the SetFocus function to focus on the first input control for faster data entry when displaying a data entry screen, by setting the OnVisible property of the screen to the formula SetFocus( Name ), which sets the focus to the Name field automatically, allowing the user to begin typing and tabbing between fields immediately.
- To create this second example, the "Focus on validation issues" app is modified by setting the OnVisible property of the screen to the formula SetFocus( Name ), and a second screen is added with a Button that navigates back to the first screen, demonstrating how the OnVisible formula is evaluated and the Name field is automatically in focus when the button is pressed.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-setfocus)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Model-driven apps

Moves input focus to a specific control.

The **SetFocus** function gives a control the input focus. The user's keystrokes are then received by that control, allowing them to type into a text input control or use the *Enter* key to select a button. The user can also use the *Tab* key, touch, mouse, or other gesture to move the input focus themselves. *Tab* key behavior is governed by the [TabIndex](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-accessibility).

Use the **SetFocus** function to set the focus when (each with an example below):

- a newly exposed or enabled input control, to guide the user in what comes next and for faster data entry.

- a form is validated, to focus and display the offending input control for quick resolution.

- a screen is displayed, to focus the first input control with the **OnVisible** property of the [Screen](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-screen).

The control with focus may be visually different based on the [FocusedBorderColor](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-color-border) and [FocusedBorderThickness](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-color-border) properties.

**SetFocus** can only be used with:

- [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control

- [Icon](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-shapes-icons) control

- [Image](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-image) control


- [Label](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-box) control

- [TextInput](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) control

You cannot set the focus to controls that are within a [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) control, [Edit form](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) control, or [Component](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/create-component). **SetFocus** can be used with a control in a scrollable screen.

You cannot set the focus to controls that are within a [Container](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-container) control.

You can only set the focus to controls on the same screen as the formula containing the **SetFocus** call.

Attempting to set the focus to a control that has its [DisplayMode](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property set to **Disabled** has no effect. Focus will remain where it was previously.

On Apple iOS, the soft keyboard will only be displayed automatically if **SetFocus** was initiated by a direct user action. For example, invoking from a button's **OnSelect** property will display the soft keyboard while invoking from a screen's **OnVisible** will not.

You can use **SetFocus** only in [behavior formulas](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth).

**SetFocus**( *Control* )

- *Control* – Required. The control to give the input focus.


Many shopping carts allow the customer to use the shipping address as the billing address, alleviating the need to enter the same information twice. If a different billing address is desired, the billing address text input boxes are enabled, and it is helpful to guide the customer to these newly enabled controls for faster data entry.

![Animation of choosing to use a custom Billing address, with focus moved to the Billing name input control as a result,turning off the automatic sync with the Shipping addresss.](https://learn.microsoft.com/media/function-setfocus/shipping-billing.gif)

There are many formulas in play here, but the one that moves the focus is on the **OnUncheck** property of the **Check box** control:

```
SetFocus( BillingName )
```

The *Tab* key can also be used to move focus quickly from one field to another. To better illustrate, the *Tab* key was not used in the animation.

To create this example:

1. Create a new app.

2. Add [Label](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-box) with the text "Shipping address", "Name:", "Address:", "Billing Address", "Name:", and "Address:" and position them as shown in the animation.

3. Add a [Text Input](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) and rename it **ShippingName**.

4. Add a [Text Input](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) and rename it **ShippingAddress**.

5. Add a [Check box](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-check-box) and rename it **SyncAddresses**.


6. Set the **Text** property of this control to the formula `"Use Shipping address as Billing address"`.

7. Add a [Text Input](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) and rename it **BillingName**.

8. Set the **Default** property on this control to the formula `ShippingName`.

9. Set the **DisplayMode** property on this control to the formula `If( SyncAddresses.Value, DisplayMode.View, DisplayMode.Edit )`. This will automatically enable or disable this control based on the state of the check box control.

10. Add a [Text Input](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) and rename it **BillingAddress**.

11. Set the **Default** property on this control to the formula `ShippingAddress`.

12. Set the **DisplayMode** property on this control to the formula `If( SyncAddresses.Value, DisplayMode.View, DisplayMode.Edit )`. This will automatically enable or disable this control based on the state of the check box control.

13. Set the **Default** property of the check box to the formula `true`. This will default the Billing address to use the same value as the Shipping address.


14. Set the **OnCheck** property of the check box to the formula `Reset( BillingName ); Reset( BillingAddress )`. If the user chooses to sync Shipping and Billing addresses, this will clear any user input in the Billing address fields allowing the **Default** properties on each to pull the values from the corresponding Shipping address fields.

15. Set the **OnUncheck** property of the check box to the formula `SetFocus( BillingName )`. If the user chooses to have a different billing address, this will move the focus to the first control in the Billing address. The controls will have already been enabled due to their **DisplayMode** properties.

Note

Although this example appears to be an **Edit form** control, unfortunately **SetFocus** is not yet supported by that control. Instead, this example uses a scrollable screen to host the input controls.


When validating a form, it can be helpful to not only display a message if there is a problem but to also take the user to the field that is offending. It can be particularly helpful if the field in question is scrolled off the screen and not visible.

![An animation of validating a data entry form and having not only a message displayed but also setting the input focus to the offending input control, even if it is scrolled off the screen.](https://learn.microsoft.com/media/function-setfocus/scrollable-screen.gif)

In this animation, the validation button is repeatedly pressed until all the fields have been filled in properly. Note that the mouse pointer doesn't move down from the top of the screen. Instead the **SetFocus** function hsa moved the input focus to the control that requires attention with this formula:


```
If( IsBlank( Name ),
        Notify( "Name requires a value", Error ); SetFocus( Name ),
    IsBlank( Street1 ),
        Notify( "Street Address 1 requires a value", Error ); SetFocus( Street1 ),
    IsBlank( Street2 ),
        Notify( "Street Address 2 requires a value", Error ); SetFocus( Street2 ),
    IsBlank( City ),
        Notify( "City requires a value", Error ); SetFocus( City ),
    IsBlank( County ),
        Notify( "County requires a value", Error ); SetFocus( County ),
    IsBlank( StateProvince ),
        Notify( "State or Province requires a value", Error ); SetFocus( StateProvince ),
    IsBlank( PostalCode ),
        Notify( "Postal Code requires a value", Error ); SetFocus( PostalCode ),
    IsBlank( Phone ),
        Notify( "Contact Phone requires a value", Error ); SetFocus( Phone ),
    Notify( "Form is Complete", Success )
)
```

To create this example:

1. Create a new, blank phone app.

2. From the **Insert** menu, select **New screen**, and then select **Scrollable**.


3. In the center section of the screen, add **Text input** controls and name them **Name**, **Street1**, **Street2**, **City**, **County**, **StateProvince**, **PostalCode**, and **Phone**. Add **Label** controls above each one to identify the fields. You may need to resize the section if it is not long enough to fit all the controls.

4. Add a checkmark [Icon](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-shapes-icons) at the top of the screen, above the scrollable section.

5. Set the **OnSelect** property of the icon control to the formula `If( IsBlank( ...` given above.

Note

Although this example appears to be an **Edit form** control, unfortunately **SetFocus** is not yet supported by that control. Instead, this example uses a scrollable screen to host the input controls.

Similar to exposing an input control, when displaying a data entry screen it is helpful to focus the first input control for faster data entry.

![An animation showing a side by side comparison of using SetFocus versus not using it when displaying a data entry screen.](https://learn.microsoft.com/media/function-setfocus/visible-setfocus.gif)


In this animation, the data entry screen on the left is not using **SetFocus**. Upon display no input control has focus, requiring the user to tab, touch, mouse, or use another means to focus the **Name** field before a value can be typed into it.

On the right we have exactly the same app with the **OnVisible** property of the data entry screen set to this formula:

```
SetFocus( Name )
```

This sets the focus to the **Name** field automatically. The user can begin typing and tabbing between fields immediately with no prior action required.

To create this example:

1. Create the "Focus on validation issues" app above.

2. On this screen, set the **OnVisible** property to the formula `SetFocus( Name )`.

3. Add a second screen.

4. Add a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button).

5. Set the **OnSelect** property of this control to the formula `Navigate( Screen1 )`.

6. Preview the app from this screen. Press the button. The **OnVisible** formula will be evaluated and the **Name** field will automatically be in focus.


