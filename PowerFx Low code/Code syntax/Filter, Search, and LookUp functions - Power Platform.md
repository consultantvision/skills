---
title: Filter, Search, and LookUp functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:50:06 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:50:43 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Filter function finds records in a table that satisfy a formula, returning all records that result in true.
- The Search function finds records in a table that contain a string in one of their columns, with the search being case-insensitive.
- The LookUp function finds the first record in a table that satisfies a formula, returning the first record that results in true, or a single value if a reduction formula is provided.


Detailed summary


## Introduction to Filter, Search, and LookUp Functions
- The Filter, Search, and LookUp functions in Power Platform are used to find one or more records in a table that satisfy a formula or contain a specific string, and they can be applied to various Power Platform components, including Canvas apps, Copilot Studio, Desktop flows, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The Filter function finds records in a table that match one or more criteria, and it returns a table containing the same columns as the original table, with the records that match the criteria, while the LookUp function finds the first record in a table that satisfies a formula and returns only that record.
- The Search function finds records in a table that contain a string in one of their columns, and it is case-insensitive, returning a table with the same columns as the original table, with the records that match the search criteria.
- The Filter, Search, and LookUp functions do not modify the original table, but instead return a new table, record, or single value, and they can be used with various data sources, including those that support delegation, which allows Power Apps to delegate filter and sort operations to the data source and page through the results on demand.

## Syntax and Parameters of the Functions
- When using the Filter, Search, and LookUp functions, it is possible to reference columns within the table, and use operators such as "in" and "exactin" for substring matches, and the "As" operator can be used to name the record being processed, making the formula easier to understand and allowing for nested records to be accessed.
- The Filter function takes a table and one or more formulas as arguments, and returns a table containing the records that result in true, while the Search function takes a table, a search string, and one or more column names as arguments, and returns a table containing the records that match the search criteria.
- If no records are found, the Filter and Search functions return an empty table, and the LookUp function returns a blank value, and it is also important to note that delegation may not always be possible, and the authoring environment will flag the portion of the formula that cannot be delegated with a warning, in which case it may be necessary to modify the formula to avoid functions and operators that cannot be delegated.
- The Filter, Search, and LookUp functions in Power Platform are used to search and retrieve data from various data sources, such as SharePoint, Excel, and Microsoft Dataverse, with the LookUp function having the syntax LookUp(Table, Formula [, ReductionFormula* ] ).
- The LookUp function requires a Table and a Formula as parameters, where the Table is the data source to search, and the Formula is the condition by which each record of the table is evaluated, with the function returning the first record that results in true.
- The ReductionFormula parameter in the LookUp function is optional and is used to reduce the record found to a single value, with the function returning the full record from the table if this parameter is not used.

## Examples Using the IceCream Data Source
- The Filter function is used to return records from a table that meet a specific condition, such as Filter(IceCream, OnOrder > 0), which returns records where OnOrder is greater than zero, and Filter(IceCream, Quantity + OnOrder > 225), which returns records where the sum of Quantity and OnOrder columns is greater than 225.
- The Search function is used to return records from a table where a specific string appears in a column, such as Search(IceCream, "choc", Flavor), which returns records where the string "choc" appears in the Flavor name, independent of uppercase or lowercase letters.
- The LookUp function can be used to search for a record with a specific condition, such as LookUp(IceCream, Flavor = "Chocolate", Quantity), which searches for a record with Flavor equal to "Chocolate" and returns the Quantity of that record, and LookUp(IceCream, Quantity > 150, Quantity + OnOrder), which searches for a record with Quantity greater than 150 and returns the sum of Quantity and OnOrder columns.
- The examples provided in the text use the IceCream data source and demonstrate how to use the Filter, Search, and LookUp functions to retrieve data, with the results of each example shown in a table.

## Example with Dataverse and Combo Box Controls
- Additionally, an example is provided that uses the Account table in Microsoft Dataverse as a data source, which shows how to filter a list of accounts based on selected Combo box control values, by adding a new screen, selecting a gallery, and configuring the data source and combo box controls.
- The Filter function in Power Platform is used to filter a data source based on specific conditions, such as filtering the Accounts data source based on the 'Industry', 'Relationship Type', and 'Preferred Method of Contact' columns, using a formula that checks if the selected values in ComboBox3, ComboBox2, and ComboBox1 match the corresponding columns in the Accounts data source.

## Creating a Searchable List and Operators
- To create a searchable list of records, a Text input control named SearchInput can be added to the screen, allowing users to type characters and automatically filter the results in a Gallery control, which can be configured to show records that match the search criteria.
- The Filter function can be used with the StartsWith operator to filter records where the search string appears at the start of a specific column, such as the Name column, and the test is case insensitive, meaning it will return results regardless of the case of the search string.
- The Filter function can also be used with the in operator to filter records where the search string appears anywhere in a specific column, and this operator can be used to search multiple columns, such as the Name and Company columns.

## Comparison Between Filter and Search Functions
- The Search function is an alternative to the Filter function and can be used to search for a match anywhere within one or more columns, and it is often easier to read and write than the Filter function, especially when specifying multiple columns and multiple in operators.
- The examples provided use the IceCream data source, which is created as a collection using the ClearCollect function, and the data source contains a list of customers with their names and companies, which can be used to demonstrate the Filter and Search functions.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-filter-lookup)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages

Finds one or more [records](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) in a [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables).

Watch this video to learn how to use **Filter**, **Search**, and **LookUp** functions:

The **Filter** function finds records in a table that satisfy a formula. Use **Filter** to find a set of records that match one or more criteria and discard those records that don't.

The **LookUp** function finds the first record in a table that satisfies a formula. Use **LookUp** to find a single record that matches one or more criteria.

For both, the formula is evaluated for each record of the table. Records that result in *true* are included in the result. Besides the normal formula [operators](https://learn.microsoft.com/operators), you can use the [in](https://learn.microsoft.com/operators#in-and-exactin-operators) and [exactin](https://learn.microsoft.com/operators#in-and-exactin-operators) operators for substring matches.


Fields of the record currently being processed are available within the formula. Use the [ThisRecord](https://learn.microsoft.com/operators#thisitem-thisrecord-and-as-operators) or simply reference fields by name as you would any other value. The [As](https://learn.microsoft.com/operators#thisitem-thisrecord-and-as-operators) can also be used to name the record being processed which can help make your formula easier to understand and make nested records accessible. For more information, see the examples below and [working with record scope](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#record-scope).

The **Search** function finds records in a table that contain a string in one of their columns. The string might occur anywhere within the column; for example, searching for "rob" or "bert" would find a match in a column that contains "Robert". Searching is case-insensitive. Unlike **Filter** and **LookUp**, the **Search** function uses a single string to match instead of a formula.


**Filter** and **Search** return a table that contains the same columns as the original table and the records that match the criteria. **LookUp** returns only the first record found, after applying a formula to reduce the record to a single value. If no records are found, **Filter** and **Search** return an [empty](https://learn.microsoft.com/function-isblank-isempty) table, and **LookUp** returns *blank*.

[Tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) are a value in Power Apps, just like a string or number. They can be passed to and returned from functions. **Filter**, **Search**, and **LookUp** don't modify a table. Instead, they take a table as an argument and return a table, a record, or a single value from it. See [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) for more details.


When possible, Power Apps will delegate filter and sort operations to the data source and page through the results on demand. For example, when you start an app that shows a [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/controls/control-gallery) control filled with data, only the first set of records will be initially brought to the device. As the user scrolls, additional data is brought down from the data source. The result is a faster start time for the app and access to very large data sets.

However, delegation may not always be possible. Data sources vary on what functions and operators they support with delegation. If complete delegation of a formula isn't possible, the authoring environment will flag the portion that can't be delegated with a warning. When possible, consider changing the formula to avoid functions and operators that can't be delegated. The [delegation list](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview#delegable-data-sources) details which data sources and operations can be delegated.


If delegation is not possible, Power Apps will pull down only a small set of records to work on locally. Filter and sort functions will operate on a reduced set of records. What is available in the [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) may not be the complete story, which could be confusing to users.

See the [delegation overview](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview) for more information.

**Filter**(Table*, *Formula1* [, *Formula2*, ... ] )

- *Table* - Required. Table to search.

- *Formula(s)* - Required. The formula by which each record of the table is evaluated. The function returns all records that result in **true**. You can reference columns within the table. If you supply more than one formula, the results of all formulas are combined with the [And](https://learn.microsoft.com/function-logicals) function.

**Search**(Table*, *SearchString*, *Column1* [, *Column2*, ... ] )

- *Table* - Required. Table to search.

- *SearchString* - Required. The string to search for. If *blank* or an empty string, all records are returned.


- *Column(s)* - Required. The names of columns within *Table* to search. If *SearchString* is found within the data of any of these columns as a partial match, the full record will be returned.

Note

In Power Apps prior to version 3.24042, column names for the **Search** function were specified with a text string using double quotes, and if connected to a data source they also needed to be logical names. For example, the logical name **"cr43e_name"** with double quotes was used instead of the display name **Name** without quotes. For [SharePoint](https://app.getrecall.ai/item/824cb046-25df-4d66-8e76-94cd0c23e337) and Excel data sources that contain column names with spaces, each space was specified with **"_x0020_"**, for example **"Column Name"** as **"Column_x0020_Name"**. After this version, all apps were automatically updated to the new syntax described in this article.

**LookUp**(Table*, *Formula* [, *ReductionFormula* ] )

- *Table* - Required. Table to search. In the UI, the syntax is shown as *source* above the function box.


- *Formula* - Required. The formula by which each record of the table is evaluated. The function returns the first record that results in **true**. You can reference columns within the table. In the UI, the syntax is shown as *condition* above the function box.

- *ReductionFormula* - Optional. This formula is evaluated over the record that was found, and then reduces the record to a single value. You can reference columns within the table. If you don't use this parameter, the function returns the full record from the table. In the UI, the syntax is shown as *result* above the function box.

The following examples use the **IceCream** [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources):

![Ice cream data source.](https://learn.microsoft.com/media/function-filter-lookup/icecream.png)


| Formula | Description | Result |
| --- | --- | --- |
| **Filter(IceCream, OnOrder > 0)** | Returns records where **OnOrder** is greater than zero. | ![Filter On order.](https://learn.microsoft.com/media/function-filter-lookup/icecream-onorder.png)<br> |
| **Filter(IceCream, Quantity + OnOrder > 225)** | Returns records where the sum of **Quantity** and **OnOrder** columns is greater than 225. | ![Filter quantity and order.](https://learn.microsoft.com/media/function-filter-lookup/icecream-overstock.png)<br> |
| **Filter(IceCream, "chocolate" in Lower(Flavor ))** | Returns records where the word "chocolate" appears in the **Flavor** name, independent of uppercase or lowercase letters. | ![Filter in lower.](https://learn.microsoft.com/media/function-filter-lookup/icecream-chocolate.png)<br> |
| **Filter(IceCream, Quantity < 10 && OnOrder < 20)** | Returns records where the **Quantity** is less than 10 and **OnOrder** is less than 20. No records match these criteria, so an empty table is returned. | ![Filter on quantity.](https://learn.microsoft.com/media/function-filter-lookup/icecream-empty.png)<br> |
| **Search(IceCream, "choc", Flavor)** | Returns records where the string "choc" appears in the **Flavor** name, independent of uppercase or lowercase letters. |  |
| **Search(IceCream, "", Flavor)** | Because the search term is empty, all records are returned. |  |
| **LookUp(IceCream, Flavor = "Chocolate", Quantity)** | Searches for a record with **Flavor** equal to "Chocolate", of which there's one. For the first record that's found, returns the **Quantity** of that record. | 100 |
| **LookUp(IceCream, Quantity > 150, Quantity + OnOrder)** | Searches for a record with **Quantity** greater than 150, of which there are multiple. For the first record that's found, which is "Vanilla" **Flavor**, returns the sum of **Quantity** and **OnOrder** columns. | 250 |
| **LookUp(IceCream, Flavor = "Pistachio", OnOrder)** | Searches for a record with **Flavor** equal to "Pistachio", of which there are none. Because none is found, **Lookup** returns *blank*. | *blank* |
| **LookUp(IceCream, Flavor = "Vanilla")** | Searches for a record with **Flavor** equal to "Vanilla", of which there's one. Since no reduction formula was supplied, the entire record is returned. | { Flavor: "Vanilla", Quantity: 200, OnOrder: 75 } |


The following example uses the **Account** table in Microsoft Dataverse as data source. This example shows how to **Filter** list of accounts based on selected Combo box control values:

1. Open a blank app.

2. Add a new screen by selecting the **New Screen** option.

3. On the **Insert** tab, select **Gallery** and then select **Vertical**.

4. On the **Properties** tab of the right-hand pane, open **Data Source** and then select **Accounts**.

5. (Optional) In the **Layout** list, select different options.

6. On the **Insert** tab, select **Input** and then select **Combo box**. Repeat the step to add two more combo box controls.

7. For each combo box control, on the **Properties** tab of the right-hand pane, open **Data Source** and then select **Accounts**. Select **Edit** next to **Fields** option and then select the **Primary text** and **SearchField** values. The **Primary text** should be the choices column you want to add to the combo box. Repeat the step for other two combo box controls.

![Setting combo box values.](https://learn.microsoft.com/media/function-filter-lookup/setting-combobox-values.png)

8. Now select **Gallery** control and set the **Items** property to the following formula:


```
Filter(Accounts,
 'Industry' = ComboBox3.Selected.Industry Or IsBlank(ComboBox3.Selected.Industry),
 'Relationship Type' = ComboBox2.Selected.'Relationship Type' Or
   IsBlank(ComboBox2.Selected.'Relationship Type'),
 'Preferred Method of Contact' = ComboBox1.Selected.'Preferred Method of Contact' Or
   IsBlank(ComboBox1.Selected.'Preferred Method of Contact'))
```

![Accounts data source.](https://learn.microsoft.com/media/function-filter-lookup/filtering-choices.gif)

The following examples use the **IceCream** [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources):

In many apps, you can type one or more characters into a search box to filter a list of records in a large data set. As you type, the list shows only those records that match the search criteria.

The examples in the rest of this article show the results of searching a list, named **Customers**, that contain this data:

![Search on customers.](https://learn.microsoft.com/media/function-filter-lookup/customers.png)

To create this data source as a collection, create a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control and set its **OnSelect** property to this formula:


**ClearCollect(Customers, Table({ Name: "Fred Garcia", Company: "Northwind Traders" }, { Name: "Cole Miller", Company: "Contoso" }, { Name: "Glenda Johnson", Company: "Contoso" }, { Name: "Mike Collins", Company: "Adventure Works" }, { Name: "Colleen Jones", Company: "Adventure Works" }) )**

As in this example, you can show a list of records in a [Gallery control](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) at the bottom of a screen. Near the top of the screen, you can add a [Text input](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) control, named **SearchInput**, so that users can specify which records interest them.

![Search using search input.](https://learn.microsoft.com/media/function-filter-lookup/customers-ux-unfiltered.png)

As the user types characters in **SearchInput**, the results in the gallery are automatically filtered. In this case, the gallery is configured to show records for which the name of the customer (not the name of the company) starts with the sequence of characters in **SearchInput**. If the user types **co** in the search box, the gallery shows these results:

![Search with starts with.](https://learn.microsoft.com/media/function-filter-lookup/customers-ux-startswith-co.png)

To filter based on the **Name** column, set the **Items** property of the gallery control to one of these formulas:


| Formula | Description | Result |
| --- | --- | --- |
| **Filter(Customers, StartsWith(Name, SearchInput.Text) )** | Filters the **Customers** data source for records in which the search string appears at the start of the **Name** column. The test is case insensitive. If the user types **co** in the search box, the gallery shows **Colleen Jones** and **Cole Miller**. The gallery doesn't show **Mike Collins** because the **Name** column for that record doesn't start with the search string. | ![Filter with start with.](https://learn.microsoft.com/media/function-filter-lookup/customers-name-co-startswith.png)<br> |
| **Filter(Customers, SearchInput.Text in Name)** | Filters the **Customers** data source for records in which the search string appears anywhere in the **Name** column. The test is case insensitive. If the user types **co** in the search box, the gallery shows **Colleen Jones,** **Cole Miller,** and **Mike Collins** because the search string appears somewhere in the **Name** column of all of those records. | ![Filter with search input.](https://learn.microsoft.com/media/function-filter-lookup/customers-name-co-contains.png)<br> |
| **Search(Customers, SearchInput.Text, Name)** | Similar to using the **in** operator, the **Search** function searches for a match anywhere within the **Name** column of each record. You must enclose the column name in double quotation marks. |  |


You can expand your search to include the **Company** column and the **Name** column:


| Formula | Description | Result |
| --- | --- | --- |
| **Filter(Customers, StartsWith(Name, SearchInput.Text) | StartsWith(Company, SearchInput.Text) )** | Filters the **Customers** data source for records in which either the **Name** column or the **Company** column starts with the search string (for example, **co**). The [|](https://learn.microsoft.com/operators) is *true* if either **StartsWith** function is *true*. | ![Filter customers start with.](https://learn.microsoft.com/media/function-filter-lookup/customers-all-co-startswith.png)<br> |
| **Filter(Customers, SearchInput.Text in Name | SearchInput. Text in Company)** | Filters the **Customers** data source for records in which either the **Name** column or the **Company** column contains the search string (for example, **co**) anywhere within it. | ![Filter customers search input.](https://learn.microsoft.com/media/function-filter-lookup/customers-all-co-contains.png)<br> |
| **Search(Customers, SearchInput.Text, Name, Company)** | Similar to using the **in** operator, the **Search** function searches the **Customers** data source for records in which either the **Name** column or the **Company** column contains the search string (for example, **co**) anywhere within it. The **Search** function is easier to read and write than **Filter** if you want to specify multiple columns and multiple **in** operators. |  |

