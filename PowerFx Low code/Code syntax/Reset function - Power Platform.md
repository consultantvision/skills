---
title: Reset function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:55:45 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:56:02 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Reset function resets a control to its Default property value, discarding any user changes.
- You can reset controls from formulas on controls within the same gallery or form, or use the ResetForm function for all controls within a form.
- The Reset function has no return value and can only be used in behavior formulas, with the syntax Reset(Control), where Control is the required control to reset.


Detailed summary

- The Reset function in Power Platform is used to reset a control to its default value, discarding any user changes that have been made, and it resets a control to its Default property value.
- The Reset function can only be used in behavior formulas and has no return value, requiring the Control parameter to specify the control that needs to be reset, as indicated by the formula Reset( Control ).
- You cannot reset controls that are within a Gallery or Edit form control from outside those controls, but you can reset controls from formulas on controls within the same gallery or form, or use the ResetForm function to reset all controls within a form.
- The Reset function is an alternative to toggling the Reset property of input controls, which may be a better choice if many controls need to be reset together from multiple formulas, and can be used in conjunction with a Button control or a variable to reset input controls.
- Input controls are also reset when their Default property changes, providing another way to reset controls without using the Reset function, and the Reset function can be used in a variety of scenarios, such as when a Button control is selected, to reset a control to its default value.
- To use the Reset function, you can insert a control, such as a Text input control, on a screen, type a new value in the control, insert a Button control on the screen, and set the button's OnSelect property to Reset( Control ), where Control is the name of the control that needs to be reset, such as TextInput1.
- When the button is selected, the contents of the control will return to the value of the Default property, demonstrating how the Reset function can be used to reset a control to its default value and discard any user changes.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-reset)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Model-driven apps

Resets a control to its default value, discarding any user changes.

The **Reset** function resets a control to its **Default** property value. Any user changes are discarded.

You cannot reset controls that are within a [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) or [Edit form](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) control from outside those controls. You can reset controls from formulas on controls within the same gallery or form. You can also reset all the controls within a form with the [ResetForm](https://learn.microsoft.com/function-form) function.

Using the **Reset** function is an alternative to toggling the **Reset** property of input controls and is generally preferred. The **Reset** property may be a better choice if many controls need to be reset together from multiple formulas. Toggling the **Reset** property can be done from a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control with the formula **Reset = Button.Pressed** or from a variable with **Reset = MyVar** and toggling **MyVar** with the formula **Button.OnSelect = Set( MyVar, true ); Set( MyVar, false )**.

Input controls are also reset when their **Default** property changes.


**Reset** has no return value, and you can use it only in [behavior formulas](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth).

**Reset**( *Control* )

- *Control* – Required. The control to reset.

1. Insert a **Text input** control on a screen. By default, its name will be **TextInput1** and its **Default** property will be set to **"Text input"**.

2. Type a new value in the text box.

3. Insert a **Button** control on the screen.

4. Set the button's **OnSelect** property to **Reset( TextInput1 )**.

5. Select the button. This can be done even when authoring by selecting toward the ends of the control.

6. The contents of the text box will return to the value of the **Default** property.

