---
title: Select function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 19:01:57 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 19:02:03 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Select function simulates a select action on a control, causing the OnSelect formula to be evaluated.
- The function can be used to propagate a select action to a parent control, such as a gallery, and can also be used to select a specific row or column in a gallery.
- The Select function can only be used with controls that have an OnSelect property and can only be used in behavior formulas, not across screens.


Detailed summary

- The Select function in Power Platform is used to simulate a select action on a control, causing the OnSelect formula to be evaluated, and it can be used to propagate a select action to a parent control, which is the default behavior in galleries and other controls.
- The Select function can be used with controls that have an OnSelect property, and it can only be used in behavior formulas, not across screens, and a control cannot select itself directly or indirectly through other controls.
- The Select function has two main syntaxes: Select(Control) and Select(Control, Row or column, Child Control), where Control is the required parameter, and Row or column and Child Control are optional parameters used to specify the row or column and child control to select in a gallery.
- When using the Select function with a gallery, it can be used to specify the row or column to select, and the control to select within that row or column, and the OnSelect formula on the gallery control and the child control will be evaluated accordingly.
- The Select function queues the target OnSelect for later processing, which may happen after the current formula has finished being evaluated, and it does not cause the target OnSelect to evaluate immediately, nor does it wait for OnSelect to finish being evaluated.
- Examples of using the Select function include simulating a user selecting a button, a row or column in a gallery, or a child control within a row or column, and the OnSelect formulas of the corresponding controls will be evaluated, allowing for customized actions and notifications.
- To use the Select function, you can set the OnSelect property of a control to a formula that includes the Select function, such as Select(Button1) or Select(Gallery1, 1, ChildControl1), and then use the control to simulate a select action and trigger the corresponding OnSelect formulas.
- The Select function can be used to create customized user experiences, such as showing notifications or taking specific actions when a user interacts with a control or a gallery, and it can be used in combination with other functions and formulas to create complex and dynamic behaviors.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-select)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps

Simulates a select action on a control, causing the **OnSelect** formula to be evaluated.

The **Select** function simulates a select action on a control as if the user had clicked or tapped the control. As a result, the **OnSelect** formula on the target control is evaluated.

Use **Select** to propagate a select action to a parent control. This type of propagation is the default behavior in, for example, galleries. By default, the **OnSelect** property of any control in a [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) control is set to **Select( Parent )**. That way, you can set the value of the **OnSelect** property of the gallery control itself, and that formula will be evaluated regardless of where in the gallery a user might click or tap.


If you want one or more controls in the gallery to perform different actions from the gallery itself, set the **OnSelect** property for those controls to something other than the default value. You can leave the default values for the **OnSelect** properties of most controls in the gallery if you want them to perform the same action as the gallery itself.

**Select** queues the target **OnSelect** for later processing, which may happen after the current formula has finished being evaluated. **Select** doesn't cause the target **OnSelect** to evaluate immediately, nor does **Select** wait for **OnSelect** to finish being evaluated.

You can't use **Select** across screens.

You can use **Select** only with controls that have an **OnSelect** property.

You can use **Select** only in [behavior formulas](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth).

A control can't **Select** itself directly or indirectly through other controls.


The select function can also be used with a gallery. For example, it can be used to specify the row or column to select in a gallery and the control to select within that row or column of the gallery. When you select a row or column, the gallery selection changes and the **OnSelect** formula on the gallery control is evaluated. If a control within the row or column is provided, the **OnSelect** formula for the child control will be evaluated.

**Select**( *Control* )

- *Control* – Required. The control to select on behalf of the user.

**Select**( *Control, Row or column, Child Control* )

- *Control* – Required. The control to select on behalf of the user.

- *Row or column* – Not required. The number of row or column (starting with 1) in a gallery control to select on behalf of the user.

- *Child Control* - Not required. The child control of the control identified in the 'control' parameter to select.

- *Button*

`Select(button1)`

- *Gallery*

`Select(Gallery1, 1)`

Simulates a user selecting row 1 or column 1 in Gallery1.

- *Gallery*


`Select(Gallery1, 1, ChildControl1)`

Simulates a user selecting ChildConttrol1 in row 1 or column 1 of Gallery1.

1. Add a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control, and rename it **Button1** if it has a different name.

2. Set the **OnSelect** property of **Button1** to this formula:

**Notify( "Hello World" )**

3. On the same screen, add a second **Button** control, and set its **OnSelect** property to this formula:

**Select( Button1 )**

4. While holding down the Alt key, select the second button.

A notification appears across the top of your app. The **OnSelect** property of **Button1** generated this notification.

![An animation that shows the OnSelect property settings for the two buttons and the notification when the second button is clicked.](https://learn.microsoft.com/media/function-select/basic-select.gif)

5. Add a vertical [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) control that contains other controls.

![Select a vertical gallery that contains controls.](https://learn.microsoft.com/media/function-select/select-gallery.png)

6. Set the **OnSelect** property of the gallery to this formula:

**Notify( "Gallery Selected" )**

7. While holding down the Alt key, click or tap the background of the gallery or any control in the gallery.

All actions will show the **Gallery Selected** notification at the top of the app.

Use the gallery's **OnSelect** property to specify the default action to take when the user clicks or taps an item in the gallery.


8. Set the **OnSelect** property of the image control to this formula:

**Notify( "Image Selected", NotificationType.Success )**

9. While holding down the Alt key, click or tap the various elements of the gallery.

When you click or tap any control in the gallery except the image, **Gallery Selected** appears as before. When you click or tap the image, **Image Selected** appears.

Use individual controls in the gallery to take actions that differ from the gallery's default action.

![An animation that shows the default value of the OnSelect property for a gallery control, as well as a control that takes a different action.](https://learn.microsoft.com/media/function-select/gallery-select.gif)

10. On the same screen, add a **Button** control, and set its **OnSelect** property to this formula:

**Select( Gallery1,2,Image1 )**

11. While holding down the Alt key, select the button.

A **Image Selected** notification appears across the top of your app. The button click simulated selecting the image in row 2 of the gallery.

