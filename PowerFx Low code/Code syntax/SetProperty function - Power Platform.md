---
title: SetProperty function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 19:00:13 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 19:00:45 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The SetProperty function simulates user interactions with input controls in Power Apps Test Studio.
- It can set properties for various controls, including TextInput, Toggle, Checkbox, and others.
- The function uses expressions like SetProperty(Control.Property, Value) to set the desired property, such as SetProperty(TextInput1.Text, "Sample text").


Detailed summary

- The SetProperty function in the Power Platform is used to simulate interactions with input controls, allowing users to set values on controls as if they had been entered by the user, and this function is exclusively available when writing tests in the Power Apps Test Studio.
- The SetProperty function supports a variety of input controls, including TextInput, RichTextEditor, Toggle, Checkbox, Slider, Rating, DatePicker, Radio, Dropdown, Combobox, and ListBox, each with their own set of properties that can be set using the function.
- For each control, specific properties can be set using the SetProperty function, such as setting the Text property of a TextInput control using the expression SetProperty(TextInput1.Text, "Sample text"), or setting the HtmlText property of a RichTextEditor control using the expression SetProperty(RichTextEditor1.HtmlText, "<p>Sample text</p>").
- Other examples of using the SetProperty function include setting the Value property of a Toggle or Checkbox control to false using the expression SetProperty(Toggle1.Value, false), setting the Value property of a Slider control to a specific number using the expression SetProperty(Slider1.Value, 10), and setting the SelectedDate property of a DatePicker control to a specific date using the expression SetProperty(DatePicker1.SelectedDate, Date(2020,3,10)).
- The SetProperty function also supports more complex controls, such as Radio, Dropdown, Combobox, and ListBox, allowing users to set properties like Selected, SelectedText, and SelectedItems using expressions like SetProperty(Radio1.Selected, "Yes"), SetProperty(Dropdown1.Selected, {Value:"Sample value"}), and SetProperty(ComboBox1.SelectedItems, Table({Value:"Sample value"},({Value:"Sample value"}))).
- Overall, the SetProperty function provides a powerful tool for simulating user interactions with input controls in the Power Apps Test Studio, enabling users to test and validate their applications more efficiently.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-setproperty)
The SetProperty function simulates interactions with input controls as if the user had entered or set a value on the control. This function is only available if you are writing tests in the [Power Apps Test Studio](https://app.getrecall.ai/item/56788a4c-3e0a-4f62-80e8-9d544b6899ef). The following properties can be set using the SetProperty function.


| Control | Property | Example expression |
| --- | --- | --- |
| TextInput | Text | `SetProperty(TextInput1.Text, "Sample text")` |
| RichTextEditor | HtmlText | `SetProperty(RichTextEditor1.HtmlText, "<p>Sample text</p>")` |
| Toggle | Value | `SetProperty(Toggle1.Value, false)` |
| Checkbox | Value | `SetProperty(Checkbox1.Value, false)` |
| Slider | Value | `SetProperty(Slider1.Value, 10)` |
| Rating | Value | `SetProperty(Rating1.Value, 5)` |
| DatePicker | SelectedDate | `SetProperty(DatePicker1.SelectedDate, Date(2020,3,10))` |
| Radio | Selected | `SetProperty(Radio1.Selected, "Yes")` |
| Radio | SelectedText | `SetProperty(Radio1.SelectedText, "Yes")` |
| Dropdown | Selected | `SetProperty(Dropdown1.Selected, {Value:"Sample value"})` |
| Dropdown | SelectedText | `SetProperty(Dropdown1.SelectedText, {Value:"Sample value"})` |
| Combobox | Selected | `SetProperty(Dropdown1.Selected, {Value:"Sample value"})` |
| Combobox | SelectedItems | `SetProperty(ComboBox1.SelectedItems, Table({Value:"Sample value"},({Value:"Sample value"}))` |
| ListBox | Selected | `SetProperty(Listbox1.Selected, {'Value':"Sample value"})` |
| ListBox | SelectedItems | `SetProperty(Listbox1.SelectedItems, Table({Value:"Sample value"},({Value:"Sample value"}))` |

