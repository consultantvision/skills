---
title: EditForm, NewForm, SubmitForm, ResetForm, and ViewForm functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:46:07 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:47:40 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `EditForm`, `NewForm`, `SubmitForm`, `ResetForm`, and `ViewForm` functions are used to change the state of an `Edit` Form (programming) control in a Canvas app.
- The `SubmitForm` function saves changes to a data source, while checking for validation issues, and returns no values.
- The `EditForm`, `NewForm`, `ResetForm`, and `ViewForm` functions change the mode of a form control to `FormMode.Edit`, `FormMode.New`, reset the form, or `FormMode.View`, respectively.


Detailed summary

- The EditForm, NewForm, SubmitForm, ResetForm, and ViewForm functions in Power Platform are used to change the state of an Edit Form (programming) control in a Canvas app, allowing users to view, edit, or create an item, save the contents, and reset the controls.
- The form control can be in one of three modes: FormMode.Edit, where the form is populated with an existing record and the user can modify the values of the fields; FormMode.New, where the form is populated with default values and the user can modify the values of the fields; and FormMode.View, where the form is populated with an existing record but the user cannot modify the values of the fields.
- The SubmitForm function is used to save any changes in a Form control to the data source, and it checks for validation issues with any field that's marked as required or that has one or more constraints on its value before submitting the changes.
- The EditForm function changes the Form control's mode to FormMode.Edit, where the contents of the Form control's Item property are used to populate the form, and if the SubmitForm function runs when the form is in this mode, a record is changed, not created.
- The NewForm function changes the Form control's mode to FormMode.New, where the contents of the Form control's Item property are ignored, and the default values of the Form's DataSource property populate the form, and if the SubmitForm function runs when the form is in this mode, a record is created, not changed.
- The ResetForm function resets the contents of a form to their initial values, before the user made any changes, and if the form is in FormMode.New mode, the form is reset to FormMode.Edit mode, and the OnReset behavior of the form control also runs.
- The ViewForm function changes the Form (programming) control's mode to FormMode.View, where the contents of the Form control's Item property are used to populate the form, and the SubmitForm and ResetForm functions have no effect when in this mode.
- The current mode of the form can be read through the Mode property, and the mode also determines the value of the DisplayMode property, which can be used by data cards and controls within the form control to determine whether they are editable or not.
- The functions can be used together with controls, such as Button (computing) and Image controls, to create a complete solution, and they are often invoked from the OnSelect formula of a Button or Image control.
- The functions return no values and can only be used in behavior formulas, and they require a Form control as an argument, such as SubmitForm(FormName), EditForm(FormName), NewForm(FormName), ResetForm(FormName), and ViewForm(FormName).




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-form)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps

View, edit, or create an item, save the contents, and reset the controls in an [Edit form](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) control.

These functions change the state of the **Edit [form](https://app.getrecall.ai/item/70826bab-a93d-45e2-90fe-148dc2460cd2)** control. The form control can be in one of these modes:

| Mode | Description |
| --- | --- |
| **FormMode.Edit** | The form is populated with an existing record and the user can modify the values of the fields. Once complete, the user can save the changes to the record. |
| **FormMode.New** | The form is populated with default values and the user can modify the values of the fields. Once complete, the user can add the record to the data source. |
| **FormMode.View** | The [form](https://app.getrecall.ai/item/70826bab-a93d-45e2-90fe-148dc2460cd2) is populated with an existing record but the user cannot modify the values of the fields. |

These functions are often invoked from the [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) formula of a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) or [Image](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-image) control so that the user can save edits, abandon edits, or create a record. You can [use controls and these functions together](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-forms) to create a complete solution.

These functions return no values.

You can use these functions only in [behavior formulas](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth).


Use the **SubmitForm** function in the [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of a [Button](https://app.getrecall.ai/item/8168409c-8771-4cf7-80bf-62b9fed4bfb8) control to save any changes in a [Form](https://app.getrecall.ai/item/70826bab-a93d-45e2-90fe-148dc2460cd2) control to the data source.

Before submitting any changes, this function checks for validation issues with any field that's marked as required or that has one or more constraints on its value. This behavior matches that of the [Validate](https://learn.microsoft.com/function-validate) function.

**SubmitForm** also checks the [Valid](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) property of the Form, which is an aggregation of all the [Valid](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-card) properties of the [Card](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-card) controls that the Form control contains. If a problem occurs, the data isn't submitted, and the [Error](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) and [ErrorKind](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) properties of the Form control are set accordingly.

If validation passes, **SubmitForm** submits the change to the data source.

- If successful, the Form's [OnSuccess](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) behavior runs, and the [Error](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) and [ErrorKind](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) properties are cleared. If the [form](https://app.getrecall.ai/item/70826bab-a93d-45e2-90fe-148dc2460cd2) was in **FormMode.New** mode, it is returned to **FormMode.Edit** mode.


- If unsuccessful, the Form's [OnFailure](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) behavior runs, and the [Error](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) and [ErrorKind](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) properties are set accordingly. The mode of the form is unchanged.

The **EditForm** function changes the Form control's mode to **FormMode.Edit**. In this mode, the contents of the Form control's [Item](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) property are used to populate the form. If the **SubmitForm** function runs when the form is in this mode, a record is changed, not created. **FormMode.Edit** is the default for the Form control.

Note

When the [form](https://app.getrecall.ai/item/70826bab-a93d-45e2-90fe-148dc2460cd2) is in edit mode and Item is null, data card properties are not evaluated and will return default values.

The **NewForm** function changes the Form control's mode to **FormMode.New**. In this mode, the contents of the Form control's [Item](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) property are ignored, and the default values of the Form's [DataSource](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) property populate the form. If the **SubmitForm** function runs when the form is in this mode, a record is created, not changed.


The **ResetForm** function resets the contents of a form to their initial values, before the user made any changes. If the form is in **FormMode.New** mode, the form is reset to **FormMode.Edit** mode. The [OnReset](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) behavior of the form control also runs. You can also reset individual controls with the [Reset](https://learn.microsoft.com/function-reset) function but only from within the form.

The **ViewForm** function changes the [Form](https://app.getrecall.ai/item/70826bab-a93d-45e2-90fe-148dc2460cd2) control's mode to **FormMode.View**. In this mode, the contents of the Form control's [Item](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) property are used to populate the form. The **SubmitForm** and **ResetForm** functions have no effect when in this mode.

The current mode can be read through the **Mode** property. The mode also determines the value of the **DisplayMode** property, which can be used by data cards and controls within the form control. Often, the data card's **DisplayMode** property will be set to **Parent.DisplayMode** (referencing the form) as will the control's **DisplayMode** property (referencing the data card):


| Mode | DisplayMode | Description |
| --- | --- | --- |
| **FormMode.Edit** | **DisplayMode.Edit** | Data cards and controls are editable, ready to accept changes to a record. |
| **FormMode.New** | **DisplayMode.Edit** | Data cards and controls are editable, ready to accept a new record. |
| **FormMode.View** | **DisplayMode.View** | Data cards and controls are not editable and optimized for viewing. |

**SubmitForm**( *FormName* )

- *FormName* - Required. [Form](https://app.getrecall.ai/item/70826bab-a93d-45e2-90fe-148dc2460cd2) control to submit to the data source.

**EditForm**( *FormName* )

- *FormName* - Required. Form control to switch to **FormMode.Edit** mode.

**NewForm**( *FormName* )

- *FormName* - Required. [Form](https://app.getrecall.ai/item/70826bab-a93d-45e2-90fe-148dc2460cd2) control to switch to **FormMode.New** mode.

**ResetForm**( *FormName* )

- *FormName* - Required. Form control to reset to initial values. Also switches the form from **FormMode.New** mode to **FormMode.Edit** mode.

**ViewForm**( *FormName* )

- *FormName* - Required. [Form](https://app.getrecall.ai/item/70826bab-a93d-45e2-90fe-148dc2460cd2) control to switch to **FormMode.View** mode.

See [Understand data forms](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-forms) for complete examples.

1. Add a [Button](https://app.getrecall.ai/item/8168409c-8771-4cf7-80bf-62b9fed4bfb8) control, set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to show **Save**, and set its [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula:

**SubmitForm( EditForm )**


2. Set the [OnFailure](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) property of a [Form](https://app.getrecall.ai/item/70826bab-a93d-45e2-90fe-148dc2460cd2) control to blank and its [OnSuccess](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) property to this formula:

**Back()**

3. Name a [Label](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-box) control **ErrorText**, and set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula:

**EditForm.Error**

When the user selects the **Save** [button](https://app.getrecall.ai/item/8168409c-8771-4cf7-80bf-62b9fed4bfb8), any changes in the [Form](https://app.getrecall.ai/item/70826bab-a93d-45e2-90fe-148dc2460cd2) control are submitted to the underlying data source.

- If the submission succeeds, any changes are saved or, if the Form control is in **New** mode, a record is created. **ErrorText** is *blank* and the previous screen reappears.

- If the submission fails, **ErrorText** shows a user-friendly error message, and the current screen remains visible so that the user can correct the problem and try again.

4. Add a [Button](https://app.getrecall.ai/item/8168409c-8771-4cf7-80bf-62b9fed4bfb8) control, set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to show **Cancel**, and set its [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula:

**ResetForm( EditForm ); Back()**

When the user selects the **Cancel** button, the values in the [Form](https://app.getrecall.ai/item/70826bab-a93d-45e2-90fe-148dc2460cd2) control are reset to what they were before the user started to edit it, the previous screen reappears, and the Form control is returned to **Edit** mode if it was in **New** mode.


5. Add a [Button](https://app.getrecall.ai/item/8168409c-8771-4cf7-80bf-62b9fed4bfb8) control, set its [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to show **New**, and set its [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property to this formula:

**NewForm( EditForm ); Navigate( EditScreen, None )**

When the user selects the **New** button, the [Form](https://app.getrecall.ai/item/70826bab-a93d-45e2-90fe-148dc2460cd2) control switches to **New** mode, the default values for the Form control's data source populate that control, and the screen that contains the Form control appears. When the **SubmitForm** function runs, a record is created instead of updated.

