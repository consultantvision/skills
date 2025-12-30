---
title: Choices function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:26:53 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:26:59 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Choices function returns a table of possible values for a lookup column in Power Platform, commonly used with the Combo box control in edit forms.
- The function eliminates the need to add a foreign table as a data source and returns all columns of the foreign table, allowing for filtering, sorting, and shaping using other table-manipulation functions.
- The Choices function can be used with lookup columns in SharePoint and Microsoft Dataverse, with the syntax `Choices( column-reference [, text-filter ] )`, where `column-reference` is a required lookup column and `text-filter` is an optional filter parameter.


Detailed summary

- The Choices function in Power Platform is used to return a table of possible values for a lookup column, allowing users to select from a list of choices, and it is commonly used with the Combo box control in edit forms.
- The Choices function eliminates the need to add the foreign table as an additional data source, as it returns all columns of the foreign table, and it can be used with other table-manipulation functions such as Filter, Sort, and AddColumns to filter, sort, and shape the table.
- At this time, the Choices function cannot be delegated, so if this limitation poses a problem in an app, the foreign table must be added as a data source and used directly, and the Choices function does not require column names to be strings and enclosed in double quotes.
- The Choices function can only be used with lookup columns from SharePoint and Microsoft Dataverse, and the column reference must be direct to the data source, such as Accounts.SLA, and not pass through a function, a variable, or a control.
- The Choices function has two parameters: column-reference, which is required and refers to a lookup column of a data source, and text-filter, which is optional and filters the list of choices by only returning choices that start with the text specified in text-filter.
- To use the Choices function, a database can be created in Dataverse, and an app can be generated from a table, such as the Accounts table, which has a Primary Contact column that is a lookup to the Contacts table, and the Choices function can be used to populate a Combo box control with the possible values for the Primary Contact field.
- The Items property of the Combo box control can be set to a formula that uses the Choices function, such as Choices( Accounts.'Primary Contact' ) or Choices( Accounts.primarycontactid ), and the complete table returned by the Choices function can be viewed in a Data table control by setting the Items property to the same formula and selecting the fields to display.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-choices)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Model-driven apps Power Pages

Returns a table of the possible values for a lookup column.

The **Choices** function returns a table of the possible values for a lookup column.

Use the **Choices** function to provide a list of choices for your user to select from. This function is commonly used with the [Combo box](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-combo-box) control in edit forms.

For a lookup, the table that **Choices** returns matches the foreign table that's associated with the lookup. By using **Choices**, you eliminate the need to add the foreign table as an additional data source. **Choices** returns all columns of the foreign table.

Because **Choices** returns a table, you can use [Filter](https://learn.microsoft.com/function-filter-lookup), [Sort](https://learn.microsoft.com/function-sort), [AddColumns](https://learn.microsoft.com/function-table-shaping), and all the other table-manipulation functions to filter, sort, and shape the table.

At this time, you can't [delegate](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview) **Choices**. If this limitation poses a problem in your app, add the foreign table as a data source, and use it directly.


**Choices** doesn't require column names to be strings and enclosed in double quotes, unlike the [ShowColumns](https://learn.microsoft.com/function-table-shaping), [Search](https://learn.microsoft.com/function-filter-lookup), and other table functions. Provide the formula as if you were referencing the column directly.

Column references must be direct to the data source. For example, if the data source is **Accounts** and the lookup is **SLA**, the column reference would be **Accounts.SLA**. The reference can't pass through a function, a variable, or a control. Furthering this example, if **Accounts** is fed to a **Gallery** control, use the formula **Gallery.Selected.SLA** to reference the SLA for the selected account. However, this reference has passed through a control, so it can't be passed to the **Columns** function - you must still use **Accounts.SLA**.

At this time, you can use lookup columns only with SharePoint and Microsoft Dataverse.

**Choices**( *column-reference* [, *text-filter* ] )


- *column-reference* - Required. A lookup column of a data source. Don't enclose the column name in double quotes. The reference must be directly to the column of the data source and not pass through a function or a control.

- *text-filter* - Optional. Filters the list of choices by only returning choices that start with the text specified in *text-filter*. If an empty string is specified, all choices will be returned.

1. [Create a database](https://learn.microsoft.com/en-us/power-platform/admin/create-database) in Dataverse, and select the **Include sample apps and data** box.

Many tables, such as **Accounts**, are created.

**Note**: Table names are singular on make.powerapps.com and plural in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) Studio.

![A partial list of the fields from the Account table in Dataverse for Apps, highlighting that "Primary Contact" is a lookup field](https://learn.microsoft.com/media/function-choices/entity-account.png)

The **Accounts** table has a **Primary Contact** column, which is a lookup to the **Contacts** table.

![A partial list of the fields from the Contact table in the Dataverse.](https://learn.microsoft.com/media/function-choices/entity-contact.png)

For each account, a contact is designated as the primary contact, or the primary contact is *blank*.

2. [Generate an app](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/data-platform-create-app) from the **Accounts** table.

3. In the list of screens and controls near the left edge, scroll down until **EditScreen1** appears, and then select **EditForm1** just under it.

![In the left navigation bar, select EditForm1 on EditScreen1.](https://learn.microsoft.com/media/function-choices/select-editform.png)


4. On the **Properties** tab of the right pane, select **Edit fields**.

![Open the Data pane.](https://learn.microsoft.com/media/function-choices/open-data-pane.png)

5. In the **Fields** pane, select **Add field**.

6. Search for the **Primary Contact** field, select its check box, and then select **Add**.

![Select Accounts to open the Data pane.](https://learn.microsoft.com/media/function-choices/field-list.png)

The **Primary Contact** field appears at the bottom of the form. If the field shows an error, select **Data sources** on the **View** tab, select the ellipsis (...) for the **Accounts** data source, and then select **Refresh**.

7. (optional) Drag the **Primary Contact** field from the bottom to the top of the list of fields.

8. In the card for **Primary Contact**, select the **Combo box** control.

The **Items** property of that control is set to a formula that identifies the column by either its display name, as in the first example, or its logical name, as in the second example:

- **Choices( Accounts.'Primary Contact' )**

- **Choices( Accounts.primarycontactid )**

![A canvas screen with a form control. The Combo box control within the Primary Contact card is selected, and the Items property with the formula Choices( Accounts.'Primary Contact' ) appears.](https://learn.microsoft.com/media/function-choices/accounts-primary-contact.png)

9. For illustration purposes, we can view the complete table returned by the **Choices** function in a **Data table** control. On the **Home** tab, select **New screen**, and then select **Blank**.

10. On the **Insert** tab, select **Data table**.


11. Set the **Items** property of the **Data table** control to this formula:

**Choices( Accounts.'Primary Contact' )**

12. In the middle of the **Data table** control, select the link that starts **Choose the fields...**, and then select the check boxes for the field or fields that you want to show (for example, **firstname** and **lastname**).

![A canvas screen with a data table control. The Items property is set to the formula Choices( Accounts.'Primary Contact' ), and the table shows the firstname and lastname columns for the first set of records from the Contacts table.](https://learn.microsoft.com/media/function-choices/full-accounts-pc.png)

