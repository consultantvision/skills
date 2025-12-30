---
title: Relate and Unrelate functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:54:37 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:54:40 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Relate function links two records through a one-to-many or many-to-many relationship in Microsoft Dataverse, while the Unrelate function removes the link.
- These functions can be used in behavior formulas and are part of a preview feature that requires the "Relational data, option sets, and other new features for CDS" feature to be enabled.
- The Relate and Unrelate functions take two arguments: the related table and the record to add or remove from the relationship, and they do not create or delete records, only relate or unrelate existing ones.


Detailed summary


## Introduction to Relate and Unrelate Functions
- The Relate and Unrelate functions in Power Platform are used to link or remove links between records of two tables through a one-to-many or many-to-many relationship in Microsoft Dataverse, and these functions are applicable to both Canvas apps and Model-driven apps.
- The Relate function sets a foreign-key field in the Many table to point to a specific record of the One table in one-to-many relationships, while the Unrelate function reverses this process by setting the field to blank, and if the field is already set when Relate is called, the existing link is lost in favor of the new link.
- For many-to-many relationships, the system maintains a hidden join table that cannot be accessed directly, but can be read through a one-to-many projection and set through the Relate and Unrelate functions, and neither related table has a foreign key.
- The Relate and Unrelate functions only refresh the data for the table specified in the first argument, and the data for the table specified in the second argument must be manually refreshed with the Refresh function to show the result of the operation.

## Function Behavior and Limitations
- These functions never create or delete a record, they only relate or unrelate two records that already exist, and they can only be used in behavior formulas.
- The Relate and Unrelate functions are part of a preview feature, and their behavior is available only when the Relational data, option sets, and other new features for CDS feature is enabled, which is an app-level setting that is enabled by default for new apps.

## Syntax and Example Usage
- The syntax for the Relate function is Relate(Table1RelatedTable, Table2Record), where Table1RelatedTable is the table of Table2 records related to a record of Table1, and Table2Record is the Table2 record to add to the relationship, and the syntax for the Unrelate function is Unrelate(Table1RelatedTable, Table2Record), where Table1RelatedTable is the table of Table2 records related to a record of Table1, and Table2Record is the Table2 record to remove from the relationship.
- Examples of using the Relate and Unrelate functions include relating or unrelating records in a Products table with a Reservations table through a one-to-many relationship, or with a Contacts table through a many-to-many relationship, and these examples can be implemented using an app with Gallery and Combo box controls for selecting the records involved.

## Implementation Steps for One-to-Many Relationships
- The process begins with adding a blank vertical Gallery control named Gallery1 to the Insert tab, which is then moved and resized to fill the left-hand side of the screen, and its Items property is set to Products and its Layout to Image and title.
- A second blank vertical Gallery control named Gallery2 is added, which will display the reservations for the product selected in Gallery1, and its Items property is set to Gallery1.Selected.Reservations and its Layout to Title.
- In Gallery2, a Combo box control named ComboBox1 is added, with its Items property set to Products and its Allow multiple selection property set to Off, and its DefaultSelectedItems property set to ThisItem.'Product Reservation', allowing users to select a different product for a reservation.
- The NextArrow2's OnSelect property in Gallery2 is set to the Relate function, which changes the current reservation to the product selected in ComboBox1, and the Unrelate function is used to disconnect a reservation record from any product.

## Handling User Interactions
- The OnSelect formula for NextArrow2 is modified to use the If function, which checks if ComboBox1 is blank, and if so, it uses the Unrelate function to disconnect the reservation, otherwise it uses the Relate function to connect the reservation to the selected product.
- A duplicate of Gallery2, named Gallery2_1, is created and its Items property is set to filter reservations where 'Product Reservation' is blank, allowing users to assign contacts to products.

## Many-to-Many Relationship Setup
- A many-to-many relationship is created between the Products table and the Contacts table, enabling each product to be related to multiple contacts and each contact to be related to multiple products.
- A new app is created with a similar setup, where each contact can reserve multiple products, and Gallery2's Items property is set to Gallery1.Selected.Contacts, displaying the contacts related to the selected product.

## Implementation for Many-to-Many Relationships
- The procedure starts with ensuring the Label control in Gallery2 is named Title2 and its Text property is set to ThisItem.'Full Name', which will display the full name of a contact once a contact is assigned to a product.
- A Cancel icon, named icon1, is added and its OnSelect property is set to the formula Unrelate(Gallery1.Selected.Contacts, ThisItem), allowing users to remove a contact from a product by selecting the Cancel icon for that contact.
- A Combo box control, named ComboBox1, is added under Gallery2 with its Items property set to Contacts, and an Add icon is inserted with its OnSelect property set to the formula Relate(Gallery1.Selected.Contacts, ComboBox1.Selected), enabling users to add a contact to a product by selecting the contact in the combo box and then selecting the Add icon.

## Extending to Contacts Side
- The many-to-many relationship established in this app allows users to associate the same contact with multiple products, and the relationship appears symmetric, meaning it can be viewed from either the products or contacts side.
- To extend the example, the OnVisible property of Screen1 is set to Refresh(Products), and a duplicate of Screen1, named Screen1_1, is created to form the basis for looking at the relationships from the contacts side, with various formulas updated to reflect this reverse view.
- The updated formulas on Screen1_1 include setting the OnVisible property to Refresh(Contacts), changing the Items property of Gallery1_1 to Contacts, and updating the OnSelect properties of Icon1_1 and Icon2_1 to Unrelate and Relate formulas that reflect the contacts side of the relationship.
- An Arrows up down icon is inserted on both Screen1 and Screen1_1, with its OnSelect property set to Navigate formulas that allow users to flip between the two screens, demonstrating the symmetric nature of the many-to-many relationship and enabling users to add a contact to a product and then view the associated product from the contacts side.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-relate-unrelate)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Model-driven apps

Relate and unrelate records of two tables through a one-to-many or many-to-many relationship.

The **Relate** function links two records through a one-to-many or many-to-many relationship in Microsoft Dataverse. The **Unrelate** function reverses the process and removes the link.

For one-to-many relationships, the Many table has a foreign-key field that points to a record of the One table. **Relate** sets this field to point to a specific record of the One table, while **Unrelate** sets this field to *blank*. If the field is already set when **Relate** is called, the existing link is lost in favor of the new link. You can also set this field by using the [Patch](https://learn.microsoft.com/function-patch) function or an [Edit form](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail) control; you need not use the **Relate** function.


For many-to-many relationships, the system that links the records maintains a hidden join table. You can't access this join table directly; it can be read only through a one-to-many projection and set through the **Relate** and **Unrelate** functions. Neither related table has a foreign key.

The data for the table that you specify in the first argument will be refreshed to reflect the change, but the data for the table that you specify in the second argument won't. That data must be manually refreshed with the [Refresh](https://learn.microsoft.com/function-refresh) function to show the result of the operation.

These functions never create or delete a record. They only relate or unrelate two records that already exist.

You can use these functions only in [behavior formulas](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth).

Note


These functions are part of a preview feature, and their behavior is available only when the **Relational data, option sets, and other new features for CDS** feature is enabled. This is an app-level setting that's enabled by default for new apps. To find this feature switch, select **Settings**, and then select **Upcoming features**. Your feedback is very valuable to us - please let us know what you think in the [Power Apps community forums](https://powerusers.microsoft.com/t5/Expressions-and-Formulas/bd-p/How-To).

**Relate**( *Table1RelatedTable*, *Table2Record* )

- *Table1RelatedTable* - Required. For a record of *Table1*, the table of *Table2* records related through a one-to-many or many-to-many relationship.

- *Table2Record* - Required. The *Table2* record to add to the relationship.

**Unrelate**( *Table1RelatedTable*, *Table2Record* )

- *Table1RelatedTable* - Required. For a record of *Table1*, the table of *Table2* records related through a one-to-many or many-to-many relationship.

- *Table2Record* - Required. The *Table2* record to remove from the relationship.


Consider a **Products** table with the following relationships as seen in the [Power Apps portal's table viewer](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/create-edit-entities-portal):

| Relationship display name | Related table | Relationship type |
| --- | --- | --- |
| Product Reservation | Reservation | One-to-many |
| Product ↔ Contact | Contact | Many-to-many |

**Products** and **Reservations** are related through a One-to-Many relationship. To relate the first record of the **Reservations** table with the first record of the **Products** table:

`Relate( First( Products ).Reservations, First( Reservations ) )`

To remove the relationship between these records:

`Unrelate( First( Products ).Reservations, First( Reservations ) )`

At no time did we create or remove or a record, only the relationship between records was modified.

**Products** and **Contacts** are related through a Many-to-Many relationship. To relate the first record of the **Contacts** table with the first record of the **Products** table:

`Relate( First( Products ).Contacts, First( Contacts ) )`

As Many-to-Many relationships are symmetric, we could also have done this in the opposite direction:


`Relate( First( Contacts ).Products, First( Products ) )`

To remove the relationship between these records:

`Unrelate( First( Products ).Contacts, First( Contacts ) )`

or:

`Unrelate( First( Contacts ).Products, First( Products ) )`

The walk through that follows does exactly these operations on these tables using an app with **Gallery** and **Combo box** controls for selecting the records involved.

These examples depend on the sample data being installed in your environment. Either [create a trial environment including sample data](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/overview-model-driven-samples#get-sample-apps) or [add sample data to an existing environment](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/overview-model-driven-samples#install-or-uninstall-sample-data).

You'll first create a simple app to view and reassign the reservations that are associated with a product.

1. Create a [tablet app from blank](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/data-platform-create-app-scratch).

2. On the **View** tab, select **Data sources**.

3. In the **Data** pane, select **Add data** > select **Products**. The Products table is part of the sample data loaded above.

4. On the **Insert** tab, add a blank vertical [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) control.


5. Ensure that the control that you just added is named **Gallery1**, and then move and resize it to fill the left-hand side of the screen.

6. On the **Properties** tab, set **Gallery1**'s **Items** property to **Products** and its **Layout** to **Image and title**.

![Configure ProductsGallery.](https://learn.microsoft.com/media/function-relate-unrelate/products-gallery.png)

7. In **Gallery1**, ensure that the **Label** control is named **Title1**, and then set its **Text** property to **ThisItem.Name**.

![Configure the label in Gallery1.](https://learn.microsoft.com/media/function-relate-unrelate/products-title.png)

8. Select the screen to avoid inserting the next item into **Gallery1**. Add a second blank vertical **Gallery** control, and ensure that it's named **Gallery2**.

**Gallery2** will show the reservations for whatever product the user selects in **Gallery1**.

9. Move and resize **Gallery2** to fill the upper-right quadrant of the screen.

10. (optional) Add the blue **Label** control above **Gallery2**, as the next graphic shows.

11. In the formula bar, set the **Items** property of **Gallery2** to **Gallery1.Selected.Reservations**.

![Configure Gallery2 Items.](https://learn.microsoft.com/media/function-relate-unrelate/reservations-gallery.png)

12. In the properties pane, set **Gallery2**'s **Layout** to **Title**.

![Configure Gallery2 Layout.](https://learn.microsoft.com/media/function-relate-unrelate/reservations-gallery-right.png)


13. In **Gallery2**, add a [Combo box](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-combo-box) control, ensure that it's named **ComboBox1**, and then move and resize it to avoid blocking the other controls in **Gallery2**.

14. On the **Properties** tab, set **ComboBox1**'s **Items** property to **Products**.

![Set Items property to Products.](https://learn.microsoft.com/media/function-relate-unrelate/reservations-combo-right.png)

15. Scroll down in the **Properties** tab and set **ComboBox1**'s **Allow multiple selection** property to **Off**.

![Set Allow multiple selection to Off.](https://learn.microsoft.com/media/function-relate-unrelate/reservations-singleselect-right.png)

16. In the formula bar, set **ComboBox1**'s **DefaultSelectedItems** property to **ThisItem.'Product Reservation'**.

![Set DefaultSelectedItems for ReserveCombo.](https://learn.microsoft.com/media/function-relate-unrelate/reservations-combo.png)

17. In **Gallery2**, set **NextArrow2**'s **OnSelect** property to this formula:

```
Relate( ComboBox1.Selected.Reservations, ThisItem )
```

When the user selects this icon, the current reservation changes to the product that the user selected in **ComboBox1**.

![Configure NextArrow2.](https://learn.microsoft.com/media/function-relate-unrelate/reservations-relate.png)

18. Press F5 to test the app in Preview mode.

With this app, the user can move a reservation from one product to another. For a reservation on one product, the user can select a different product in **ComboBox1** and then select **NextArrow2** to change that reservation.

![Demonstrate Relate function in one-to-many app.](https://learn.microsoft.com/media/function-relate-unrelate/reservations-reassign.gif)


At this point, you can move the relationship from one record to another, but you can't remove the relationship altogether. You can use the **Unrelate** function to disconnect a reservation record from any product.

1. On the **View** tab, select **Data sources**.

2. In the **Data** pane, select **Add data source** > **Microsoft Dataverse** > **Reservations** > **Connect**.

3. In **Gallery2**, set the **OnSelect** formula for **NextArrow2** to this formula:

```
If( IsBlank( ComboBox1.Selected ),
    Unrelate( Gallery1.Selected.Reservations, ThisItem ),
    Relate( ComboBox1.Selected.Reservations, ThisItem )
);
Refresh( Reservations )
```

4. Copy **Gallery2** to the Clipboard by selecting it and then pressing Ctrl-C.

5. Paste a duplicate of **Gallery2** to the same screen by pressing Ctrl-V, and then move it to the lower-right quadrant of the screen.

6. (optional) If you added a label above **Gallery2**, repeat the previous two steps for that label.

7. Ensure that the duplicate of **Gallery2** is named **Gallery2_1**, and then set its **Items** property to this formula:


```
Filter( Reservations, IsBlank( 'Product Reservation' ) )
```

A delegation warning appears, but it won't matter with the small amount of data in this example.

![Set the Items property of Gallery2_1.](https://learn.microsoft.com/media/function-relate-unrelate/reservations-lost.png)

With these changes, users can clear the selection in **ComboBox1** for a contact if that person hasn't reserved a product. Contacts who haven't reserved a product appear in **Gallery2_1** where users can assign each contact to a product.

![Demonstrate Relate and Unrelate functions in one-to-many app.](https://learn.microsoft.com/media/function-relate-unrelate/reservations-lostandfound.gif)

The sample data doesn't include a many-to-many relationship, but you'll create one between the Products table and the Contacts table. Users can relate each product to more than one contact and each contact to more than one product.

1. From [this page](https://make.powerapps.com/?utm_source=padocs&utm_medium=linkinadoc&utm_campaign=referralsfromdoc), select **Data** in the left navigation bar, and then select **Tables**.

![Open list of table.](https://learn.microsoft.com/media/function-relate-unrelate/entity-list.png)

2. Change the table filter to include all tables.

By default, sample tables don't appear.

![Remove table filter.](https://learn.microsoft.com/media/function-relate-unrelate/entity-all.png)

3. Scroll down, open the **Product** table, and select **Relationships**.

4. Select **Add relationship** > **Many-to-many**.

5. Select the **Contact** table for the relationship.

6. Select **Done** > **Save table**.


You'll create another app that resembles the one you created earlier in this topic, but the new app will offer a many-to-many relationship. Each contact will be able to reserve multiple products instead of only one.

1. In a blank app for tablets, create **Gallery1** as the [first procedure](https://learn.microsoft.com/#one-to-many) in this topic describes.

2. Add another blank vertical **Gallery** control, ensure that it's named **Gallery2**, and then move it into the upper-right corner of the screen.

Later in this topic, you'll add a **Combo box** control under **Gallery2**.

3. In the formula bar, set **Gallery2**'s **Items** property to **Gallery1.Selected.Contacts**.

![Configure ContactsGallery - Items property.](https://learn.microsoft.com/media/function-relate-unrelate/contacts-gallery.png)

4. On the **Properties** tab, set **Layout** to **Image and title**.

![Configure ContactsGallery - Layout.](https://learn.microsoft.com/media/function-relate-unrelate/contacts-gallery-right.png)

5. In **Gallery2**, ensure that the **Label** control is named **Title2**, and then set its **Text** property to **ThisItem.'Full Name'**.

No text will appear in that control until you finish this procedure and assign a contact to a product.

![Show contact name.](https://learn.microsoft.com/media/function-relate-unrelate/contacts-title.png)

6. Delete **NextArrow2**, insert a **Cancel** icon, and ensure that it's named **icon1**.

7. Set the **Cancel** icon's **OnSelect** property to this formula:


```
Unrelate( Gallery1.Selected.Contacts, ThisItem )
```

8. On the **View** tab, select **Data sources**.

9. In the **Data** pane, select **Add data source** > **Microsoft Dataverse** > **Contacts** > **Connect**.

10. Under **Gallery2**, add a **Combo box** control, ensure that it's named **ComboBox1**, and then set its **Items** property to **Contacts**.

![Configure the combo box Items property.](https://learn.microsoft.com/media/function-relate-unrelate/contacts-combo.png)

11. On the **Properties** tab, set **Allow multiple selection** to **Off**.

![Configure the combo box Layout property.](https://learn.microsoft.com/media/function-relate-unrelate/contacts-combo-right.png)

12. Insert an **Add** icon, and set its **OnSelect** property to this formula:

```
Relate( Gallery1.Selected.Contacts, ComboBox1.Selected )
```

With this app, users can now freely relate and unrelate a set of contacts to each product.

- To add a contact to a product, select the contact in the combo box at the bottom of the screen, and then select the **Add** icon.

- To remove a contact from a product, select the **Cancel** icon for that contact.

Unlike one-to-many, a many-to-many relationship allows users to associate the same contact with multiple products.

![Demonstrate Relate and Unrelate functions in many-to-many app.](https://learn.microsoft.com/media/function-relate-unrelate/contacts-relate-unrelate.gif)


Many-to-many relationships are symmetric. You can extend the example to add products to a contact and then flip between the two screens to show how the relationship appears from either direction.

1. Set the **OnVisible** property of **Screen1** to **Refresh( Products )**.

When you update a one-to-many or many-to-many relationship, only the data of the first argument table of the **Relate** or **Unrelate** call is refreshed. The second must be refreshed manually if you want to flip between the screens of this app.

![Set OnVisible property to Refresh function.](https://learn.microsoft.com/media/function-relate-unrelate/contacts-refresh.png)

2. Duplicate **Screen1**.

The duplicate will be named **Screen1_1** and form the basis for looking at the relationships from the contacts side.

![Duplicate a screen.](https://learn.microsoft.com/media/function-relate-unrelate/contacts-duplicate.png)

3. To create the reverse view, change these formulas on the controls of **Screen1_1**:

- Screen1_1.OnVisible = `Refresh( Contacts )`

- Gallery1_1.Items = `Contacts`

- Title1_1.Text = `ThisItem.'Full Name'`

- Label1_1.Text = `"Selected Contact Products"`

- Gallery2_1.Items = `Gallery1_1.Selected.Products`

- Title2_1.Text = `ThisItem.Name`

- Icon1_1.OnSelect = `Unrelate( Gallery1_1.Selected.Products, ThisItem )`


- ComboBox1_1.Items = `Products`

- Icon2_1.OnSelect = `Relate( Gallery1_1.Selected.Products, ComboBox1_1.Selected )`

The result will look very similar to the previous screen but comes at the relationship from the **Contacts** side.

![Show many-to-many relationship starting with contacts.](https://learn.microsoft.com/media/function-relate-unrelate/reverse-screen.png)

4. Insert an **Arrows up down** icon and set its **OnSelect** property to **Navigate( Screen1, None )**. Do the same thing on **Screen1** with the formula **Navigate( Screen1_1, None )**.

![Add navigation between screens.](https://learn.microsoft.com/media/function-relate-unrelate/reverse-navigate.png)

With this new screen, users can add a contact to a product and then flip to a view of contacts and see the associated product. The relationships are symmetric and shared between the two screens.

![Demonstrate many-to-many relationship from either side.](https://learn.microsoft.com/media/function-relate-unrelate/contacts-reverse.gif)


