---
title: Remove and RemoveIf functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:54:53 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:54:57 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `Remove` function removes a specific record or records from a data source, and can be used with the `RemoveFlags.All` argument to remove all copies of a record.
- The `RemoveIf` function removes a record or records based on a condition or set of conditions, and returns the modified data source as a table.
- Both `Remove` and `RemoveIf` functions can only be used in behavior formulas and return the modified data source as a table.


Detailed summary


## Overview of Remove and RemoveIf Functions
- The Remove and RemoveIf functions in Power Platform are used to remove records from a data source, with the Remove function removing a specific record or records and the RemoveIf function removing records based on a condition or set of conditions.
- The Remove function can be used in various applications, including Canvas apps, Desktop flows, Model-driven apps, Power Platform CLI, and Dataverse functions, while the RemoveIf function is supported by Canvas apps and Model-driven apps.
- The Remove function requires the data source and the record or records to be removed as arguments, and optionally, the RemoveFlags.All argument can be used to remove all copies of a record in a collection.
- The RemoveIf function requires the data source and a condition or set of conditions as arguments, where each condition can reference columns of the data source by name and must evaluate to true for the record or records to be removed.
- Both the Remove and RemoveIf functions return the modified data source as a table and can only be used in behavior formulas, with the Clear function also available to remove all records in a collection.

## Implementation Details and Examples
- The RemoveIf function is supported by only a few data sources, and for data sources that do not support this feature, Microsoft Power Apps will query the server and retrieve all data matching the filter expression, up to a maximum of either 500 or 2000 records or the data page size, and then delete each record individually.
- Examples of using the Remove and RemoveIf functions include removing a record from a data source based on a specific condition, removing multiple records, and removing all records that meet a certain condition, such as quantity greater than 150 or flavor starting with a specific letter.

## Practical Scenarios and Usage
- The functions can be used in various scenarios, such as creating a collection with specific data, using a Gallery to list records in a table, and selectively removing items using the Remove function.
- The Remove function in Power Platform can be used to delete an item from a data source, such as a Contacts table, by using a button that is outside the gallery or an icon placed inside the gallery.
- To remove an item using a button outside the gallery, a new blank canvas app with a Phone layout is created, and a Vertical gallery control is added to the screen, which is then connected to a data source, such as the Contacts table.

## Button and Icon Implementation for Removal
- A Button control is inserted below the gallery items, and its OnSelect property is set to the Remove function, which refers to the selected record in the gallery using the Selected property, allowing the user to remove the selected record by clicking the button.
- Alternatively, an icon can be placed inside the gallery to remove an item, by adding a Button control to the screen, setting its OnSelect property to create a sample collection, and then using this collection as the data source for the gallery.
- To insert the icon inside the gallery, the Add icon option is selected from the left pane, and the icon is moved to the right side of the screen, with its Icon property set to the trash icon using the formula Icon.Trash, and its OnSelect property set to the Remove function with the global disambiguation operator [@...] to avoid conflicts with One-to-Many relationships.
- The Remove function uses the ThisItem property to refer to the current item in the gallery, allowing the user to remove the selected record by clicking the trash icon next to it, and the changes can be previewed using the Play button or by pressing F5 on the keyboard.

## Disambiguation and Sample Data Considerations
- The global disambiguation operator [@...] is required when using sample data with the Contacts table to avoid conflicts, but it is not necessary when using other data sources, such as lists or SQL Server tables.
- The sample data used in the examples includes records for individuals such as Nancy Anderson, Yvonne McKay, and Maria Campbell, which can be removed using the Remove function and the button or icon controls.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-remove-removeif)
| Function | Applies to |
| --- | --- |
| **Remove** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> Canvas apps Desktop flows Model-driven apps Power Platform CLI Dataverse functions |
| **RemoveIf** | Canvas apps Model-driven apps |

Removes [records](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) from a [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources).

Use the **Remove** function to remove a specific record or records from a data source.

For [collections](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources#collections), the entire record must match. You can use the **RemoveFlags.All** argument to remove all copies of a record; otherwise, only one copy of the record is removed.

Use the **RemoveIf** function to remove a record or records based on a condition or a set of conditions. Each condition can be any formula that results in a **true** or **false** and can reference [columns](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#columns) of the data source by name. Each condition is evaluated individually for each record, and the record is removed if all conditions evaluate to **true**.

**Remove** and **RemoveIf** return the modified data source as a [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables). You can use both functions only in [behavior formulas](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth).

You can also use the [Clear](https://learn.microsoft.com/function-clear-collect-clearcollect) function to remove all of the records in a collection.


RemoveIf is supported by only a few data sources. For data sources that don't upport this feature, Power Apps will query the server and retrieve all data matching the filter expression, up to a maximum of either 500 or 2000 records or the data page size. Subsequently, it will delete each of those records individually by making separate calls to the server.

**Remove**( *DataSource*, *Record1* [, *Record2*, ... ] [, **RemoveFlags.All** ] )

- *DataSource* – Required. The data source that contains the record or records that you want to remove.

- *Record(s)* – Required. The record or records to remove.

- **RemoveFlags.All** – Optional. In a collection, the same record may appear more than once. You can add the **RemoveFlags.All** argument to remove all copies of the record.

**Remove**( *DataSource*, *Table* [, **RemoveFlags.All** ] )

- *DataSource* – Required. The data source that contains the records that you want to remove.

- *Table* – Required. A table of records to remove.


- **RemoveFlags.All** – Optional. In a collection, the same record may appear more than once. You can add the **RemoveFlags.All** argument to remove all copies of the record.

**RemoveIf**( *DataSource*, *Condition* [, ... ] )

- *DataSource* – Required. The data source that contains the record or records that you want to remove.

- *Condition(s)* – Required. A formula that evaluates to **true** for the record or records to remove. You can use column names from the *DataSource* in the formula. If you specify multiple *Conditions*, all must evaluate to **true** for the record or records to be removed.

In these examples, you'll remove a record or records in a data source that's named **IceCream** and that starts with the data in this table:

![IceCream example.](https://learn.microsoft.com/media/function-remove-removeif/icecream.png)

To create a collection with this data:

1. Insert a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control.

2. Set button control's **OnSelect** property to the below formula:


```
ClearCollect( IceCream,
              { ID: 1, Flavor: "Chocolate",  Quantity: 100 },
              { ID: 2, Flavor: "Vanilla",    Quantity: 200 },
              { ID: 3, Flavor: "Strawberry", Quantity: 300 }
)
```

3. Select the button [while holding down the Alt key](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/keyboard-shortcuts#alternate-behavior):


| Formula | Description | Result |
| --- | --- | --- |
| **Remove( IceCream,LookUp( IceCream, Flavor="Chocolate" ))** | Removes the **Chocolate** record from the data source. | ![Result with Vanilla and Strawberry.](https://learn.microsoft.com/media/function-remove-removeif/icecream-no-chocolate.png)<br><br><br>The **IceCream** data source has been modified. |
| **Remove( IceCream,LookUp( IceCream, Flavor="Chocolate" ), LookUp( IceCream, Flavor="Strawberry" ) )** | Removes two records from the data source. | ![Result with only Vanilla.](https://learn.microsoft.com/media/function-remove-removeif/icecream-only-vanilla.png)<br><br><br>The **IceCream** data source has been modified. |
| **RemoveIf( IceCream, Quantity > 150 )** | Removes records that have a **Quantity** that's greater than **150**. | ![Result with only Chocolate.](https://learn.microsoft.com/media/function-remove-removeif/icecream-only-chocolate.png)<br><br><br>The **IceCream** data source has been modified. |
| **RemoveIf( IceCream, Quantity > 150, Left( Flavor, 1 ) = "S" )** | Removes records that have a **Quantity** that's greater than 150 and **Flavor** starts with an **S**. | ![Result with Chocolate and Vanilla.](https://learn.microsoft.com/media/function-remove-removeif/icecream-no-strawberry.png)<br><br><br>The **IceCream** data source has been modified. |
| **RemoveIf( IceCream, true )** | Removes all records from the data source. | ![Result with no IceCream.](https://learn.microsoft.com/media/function-remove-removeif/icecream-empty.png)<br><br><br>The **IceCream** data source has been modified. |

In this example, you'll use a [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) to list the records in a table. And then use the **Remove** function to selectively remove an item.


This example uses the **Contacts** table in Microsoft Dataverse available with the *sample apps and data*. You can deploy *sample apps and data* when you [create an environment](https://learn.microsoft.com/en-us/power-platform/admin/create-environment#create-an-environment-with-a-database). You can also use any other data source instead.

In this example, you'll remove an item by using a *button* that is outside the gallery.

1. Create a [new blank canvas app](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/data-platform-create-app-scratch) using a Phone layout.

![A blank canvas app using the phone layout.](https://learn.microsoft.com/media/function-remove-removeif/gallery-new.png)

2. Select the **Insert** from the left pane.

3. Select **Vertical gallery**. A **Gallery** control is be added to your screen.

![Using the Insert tool pane to add a vertical gallery control.](https://learn.microsoft.com/media/function-remove-removeif/gallery-add.png)

4. You're prompted to select a data source where you can select a data source from the available data sources. For example, select the **Contacts** table to use *sample data*:

![Selecting the Contacts table to display in the gallery.](https://learn.microsoft.com/media/function-remove-removeif/gallery-datasource.png)

The gallery shows items from this table:

![Gallery added showing the Contacts table.](https://learn.microsoft.com/media/function-remove-removeif/gallery-data.png)

5. Insert a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control from left pane:

![Using the Insert tool pane to add a button control.](https://learn.microsoft.com/media/function-remove-removeif/gallery-addbutton.png)

6. Move the added button below the gallery items:

![Move button.](https://learn.microsoft.com/media/function-remove-removeif/move-button-down.png)

7. Update button text property to *Remove record*. You can also use text of your choice:

![Rename button.](https://learn.microsoft.com/media/function-remove-removeif/button-text.png)

8. Set the **OnSelect** property for this button control to the following formula:

```
Remove( Contacts, Gallery1.Selected )
```

![Setting the OnSelect property of the button control.](https://learn.microsoft.com/media/function-remove-removeif/gallery-button-onselect.png)


The gallery control makes the currently selected record available using **Selected** property. **Remove** function refers to this selected record to remove it.

9. Preview the app using the *Play* button on the top right, or press *F5* on keyboard:

![Preview app.](https://learn.microsoft.com/media/function-remove-removeif/preview-app.png)

10. Select a record to remove, such as *Nancy*'s record in this example:

![Select a record.](https://learn.microsoft.com/media/function-remove-removeif/select-nancy-record.png)

11. Select **Remove record**:

![Gallery of contacts, now without the Nancy record that has been removed.](https://learn.microsoft.com/media/function-remove-removeif/gallery-activatebutton.png)

Selecting the button removes the selected record (in this example, Nancy's record).

12. Close the app preview.

Tip

You can also use alternate behavior with [Alt key](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/keyboard-shortcuts#alternate-behavior) instead of using the app preview with *Play* button or *F5*.

In this example, you'll remove an item by using an *icon* placed inside the gallery.

If you already have [prepared sample data](https://learn.microsoft.com/#prepare-for-sample-data), skip this step and move to [Trash can icon inside a gallery](https://learn.microsoft.com/#trash-can-icon-inside-a-gallery).

1. Add a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control to your screen.

2. Set the **OnSelect** property to the following formula:


```
ClearCollect( SampleContacts,
      { 'Full Name': "Yvonne McKay (sample)",      'Primary Email': "someone_a@example.com" },
      { 'Full Name': "Susanna Stubberod (sample)", 'Primary Email': "someone_b@example.com" },
      { 'Full Name': "Nancy Anderson (sample)",    'Primary Email': "someone_c@example.com" },
      { 'Full Name': "Maria Campbell (sample)",    'Primary Email': "someone_d@example.com" },
      { 'Full Name': "Robert Lyon (sample)",       'Primary Email': "someone_e@example.com" },
      { 'Full Name': "Paul Cannon (sample)",       'Primary Email': "someone_f@example.com" },
      { 'Full Name': "Rene Valdes (sample)",       'Primary Email': "someone_g@example.com" }
)
```

3. Select the button [while holding down the Alt key](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/keyboard-shortcuts#alternate-behavior).

Sample collection is created that you can use in the following example.

1. Create a [new blank canvas app](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/data-platform-create-app-scratch) using a Phone layout.

2. Select the **Insert** from the left pane.

3. Select **Vertical gallery**. A **Gallery** control is be added to your screen.


4. You're prompted to select a data source where you can select a data source from the available data sources. For example, select the **Contacts** table to use *sample data*:

If you created a [collection](https://learn.microsoft.com/#create-a-collection-with-sample-data), select your collection instead:

![Sample contacts collection.](https://learn.microsoft.com/media/function-remove-removeif/sample-contacts.png)

5. Select a control within the top item in the gallery.

To ensure next step inserts item into gallery's template and not outside the gallery, ensure you follow this step before moving to the next step.

![Select top record in a gallery.](https://learn.microsoft.com/media/function-remove-removeif/gallery-select-template.png)

6. Select **Add icon** from left pane.

Note

**Add icon** inserts a **+** icon on the left side of the gallery, replicated for each item in the gallery.

7. In the top item, move the icon to the right side of the screen.

8. Select the **Icon** property for icon and set it to the following formula to update the icon image as trash icon:

```
Icon.Trash
```

Note

The **Icon.** prefix is only shown when you're actively editing the formula.

9. Set the **OnSelect** property to the following formula:

```
Remove( [@Contacts], ThisItem )
```

Note


You must use [global disambiguation operator](https://learn.microsoft.com/operators#disambiguation-operator) **[@**...**]** in this example with sample data that uses the *Contacts* table to avoid conflict with a *One-to-Many* relationship. If you use data sources such as a list or a SQL Server table, using *global disambiguation operator* is not required.

10. Preview the app using the *Play* button on the top right, or press *F5* on keyboard.

11. Select the trash icon next to a record, for example *Maria*'s:

![Gallery with one of the contacts removed.](https://learn.microsoft.com/media/function-remove-removeif/gallery-activateicon.png)

The record is deleted:

![Deleted record.](https://learn.microsoft.com/media/function-remove-removeif/deleted-record.png)

12. Close the app preview.

