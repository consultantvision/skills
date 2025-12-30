---
title: EndsWith and StartsWith functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:46:58 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:47:10 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `EndsWith` function tests whether a text string ends with another text string, while the `StartsWith` function tests whether a text string begins with another.
- Both functions are case insensitive if the back-end data source supports it, and they return a Boolean `true` or `false` value.
- These functions can be used with the `Filter` function to search data within an app, and they can also be combined with other functions, such as the `in` operator or the `Search` function, to filter data based on specific conditions.


Detailed summary


## Introduction to EndsWith and StartsWith Functions
- The EndsWith and StartsWith functions in Power Platform are used to test whether a text string begins or ends with another text string, with the tests being case insensitive if the back-end data source supports it by default.
- The EndsWith function tests whether one text string ends with another, while the StartsWith function tests whether one text string begins with another, and both functions return a Boolean true or false value.

## Function Usage with Filter and Delegation
- The functions can be used with the Filter function to search data within an app, and the choice of function depends on the needs of the app and which function can be delegated for the particular data source.

## Function Arguments and Behavior
- The EndsWith and StartsWith functions have two required arguments: Text, which is the text to test, and EndText or StartText, which is the text to search for at the end or beginning of the Text, respectively.
- If the EndText or StartText argument is an empty string, the EndsWith and StartsWith functions return true, which makes it easier to use them in Filter expressions.

## Supported Power Platform Components
- The functions can be used in various Power Platform components, including Canvas apps, Copilot Studio, Desktop flows, Dataverse formula columns, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.

## Example Implementation and Data Filtering
- Examples of using the EndsWith and StartsWith functions include searching a list of records in a data set, such as a Customers list, and filtering the results based on the search criteria.
- To demonstrate the use of the EndsWith and StartsWith functions, a sample data source can be created as a collection using a formula, such as ClearCollect, and then used to filter a list of records in a Gallery control based on user input in a Text input control.

## Gallery Configuration and Filtering Techniques
- The gallery control in Power Platform can be configured to show records based on the search input, and to filter records, the Items property of the gallery control can be set to specific formulas that utilize the StartsWith function, the in operator, or the Search function.
- The StartsWith function, such as Filter( Customers, StartsWith( Name, SearchInput.Text ) ), filters the Customers data source for records where the search string appears at the start of the Name column, and this test is case insensitive, meaning it will return results like Colleen Jones and Cole Miller if the user types "co" in the search box.

## In Operator and Search Function Comparison
- The in operator, such as Filter( Customers, SearchInput.Text in Name ), filters the Customers data source for records where the search string appears anywhere in the Name column, and this will return results like Colleen Jones, Cole Miller, and Mike Collins if the user types "co" in the search box, because the search string appears somewhere in the Name column of all those records.
- The Search function, such as Search( Customers, SearchInput.Text, "Name" ), searches for a match anywhere within the specified column, in this case the Name column, and requires the column name to be enclosed in double quotation marks.

## Multi-Column Search Implementation
- To expand the search to include multiple columns, such as the Company column, formulas like Filter( Customers, StartsWith( Name, SearchInput.Text ) | StartsWith( Company, SearchInput.Text ) ) can be used, which will filter the Customers data source for records where either the Name column or the Company column starts with the search string.
- Alternatively, formulas like Filter( Customers, SearchInput.Text in Name | SearchInput.Text in Company ) or Search( Customers, SearchInput.Text, "Name", "Company" ) can be used to filter the Customers data source for records where either the Name column or the Company column contains the search string anywhere within it, with the Search function being easier to read and write when specifying multiple columns and operators.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-startswith)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages

Tests whether a text string begins or ends another text string.

The **EndsWith** function tests whether one text string ends with another.

The **StartsWith** function tests whether one text string begins with another.

For both functions, the tests are case insensitive if the back-end datasource supports it by default. For example, collections, Dataverse, [SharePoint](https://app.getrecall.ai/item/824cb046-25df-4d66-8e76-94cd0c23e337), and [SQL Server](https://app.getrecall.ai/item/450d8bdf-1741-4a8d-81e9-60d9e5b72b55) support case insensitivity by default. [Oracle](https://app.getrecall.ai/item/6f30251c-65dd-46e1-8293-ac2436cd8eca) does not. The return value of both is a Boolean **true** or **false**.


Use **EndsWith** and **StartsWith** with the [Filter](https://learn.microsoft.com/function-filter-lookup) function to search the data within your app. You can also use the [in](https://learn.microsoft.com/operators#in-and-exactin-operators) operator or the [Search](https://learn.microsoft.com/function-filter-lookup) function to look anywhere within text strings, not just at the beginning or end. Your choice of functions will depend on the needs of your app and which function can be [delegated](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview) for your particular data source. If one of these functions can't be delegated, a delegation warning will appear at authoring time to warn you of this limitation.

**EndsWith**( *Text*, *EndText* )

- *Text* – Required. The text to test.

- *EndText* – Required. The text to search for at the end of *Text*. If *EndText* is an empty string, **EndsWith** returns *true*.

**StartsWith**( *Text*, *StartText* )

- *Text* – Required. The text to test.

- *StartText* – Required. The text to search for at the beginning of *Text*. If *StartText* is an empty string, **StartsWith** returns *true*.


| Formula | Description | Result |
| --- | --- | --- |
| **EndsWith( "Hello World", "world" )** | Tests whether **"Hello World"** ends with **"world"**. The test is case insensitive. | **true** |
| **EndsWith( "Good bye", "good" )** | Tests whether **"Good bye"** ends with **"good"**. The *EndText* argument (**"good"**) appears in the text but not at the end. | **false** |
| **EndsWith( "Always say hello", "hello" )** | Tests whether **"Always say hello"** ends with **"hello"**. | **true** |
| **EndsWith( "Bye bye", "" )** | Tests whether **"Bye bye"** ends with an empty text string (**Len** returns 0). Easing its use in **Filter** expressions, **EndsWith** is defined to return **true** in this case. | **true** |


| Formula | Description | Result |
| --- | --- | --- |
| **StartsWith( "Hello World", "hello" )** | Tests whether **"Hello World"** begins with **"hello"**. The test is case insensitive. | **true** |
| **StartsWith( "Good bye", "hello" )** | Tests whether **"Good bye"** begins with **"hello"**. | **false** |
| **StartsWith( "Always say hello", "hello" )** | Tests whether **"Always say hello"** begins with **"hello"**. Although **"hello"** appears in the text, it doesn't appear at the beginning. | **false** |
| **StartsWith( "Bye bye", "" )** | Tests whether **"Bye bye"** starts with an empty text string (**Len** returns 0). Easing its use in **Filter** expressions, **StartsWith** is defined to return **true** in this case. | **true** |

In many apps, you can type one or more characters into a search box to filter a list of records in a large data set. As you type, the list shows only those records that match the search criteria.

The examples in the rest of this topic show the results of searching a **Customers** list that contains this data:

![Example of Customers list.](https://learn.microsoft.com/media/function-startswith/customers.png)

To create this data source as a collection, create a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control and set its **OnSelect** property to this formula:


**ClearCollect( Customers, Table( { Name: "Fred Garcia", Company: "Northwind Traders" }, { Name: "Cole Miller", Company: "Contoso" }, { Name: "Glenda Johnson", Company: "Contoso" }, { Name: "Mike Collins", Company: "Adventure Works" }, { Name: "Colleen Jones", Company: "Adventure Works" } ) )**

As in this example, you can show a list of records in a [Gallery control](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) at the bottom of a screen. Near the top of the screen, you can add a [Text input](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) control, named **SearchInput**, so that users can specify which records interest them.

![Customers gallery.](https://learn.microsoft.com/media/function-startswith/customers-ux-unfiltered.png)

As the user types characters in **SearchInput**, the results in the gallery are automatically filtered. In this case, the gallery is configured to show records for which the name of the customer (not the name of the company) starts with the sequence of characters in **SearchInput**.If the user types **co** in the search box, the gallery shows these results:

![Customers gallery with search.](https://learn.microsoft.com/media/function-startswith/customers-ux-startswith-co.png)

To filter based on the **Name** column, set the **Items** property of the gallery control to one of these formulas:


| Formula | Description | Result |
| --- | --- | --- |
| **Filter( Customers, StartsWith( Name, SearchInput.Text ) )** | Filters the **Customers** data source for records in which the search string appears at the start of the **Name** column. The test is case insensitive. If the user types **co** in the search box, the gallery shows **Colleen Jones** and **Cole Miller**. The gallery doesn't show **Mike Collins** because the **Name** column for that record doesn't start with the search string. | ![Example of StartsWith.](https://learn.microsoft.com/media/function-startswith/customers-name-co-startswith.png)<br> |
| **Filter( Customers, SearchInput.Text in Name )** | Filters the **Customers** data source for records in which the search string appears anywhere in the **Name** column. The test is case insensitive. If the user types **co** in the search box, the gallery shows **Colleen Jones,** **Cole Miller,** and **Mike Collins** because the search string appears somewhere in the **Name** column of all of those records. | ![Example of SearchInput.Text in Name.](https://learn.microsoft.com/media/function-startswith/customers-name-co-contains.png)<br> |
| **Search( Customers, SearchInput.Text, "Name" )** | Similar to using the **in** operator, the **Search** function searches for a match anywhere within the **Name** column of each record. Note that you must enclose the column name in double quotation marks. |  |


You can expand your search to include the **Company** column as well as the **Name** column:


| Formula | Description | Result |
| --- | --- | --- |
| **Filter( Customers, StartsWith( Name, SearchInput.Text ) | StartsWith( Company, SearchInput.Text ) )** | Filters the **Customers** data source for records in which either the **Name** column or the **Company** column starts with the search string (for example, **co**). The [|](https://learn.microsoft.com/operators) is *true* if either **StartsWith** function is *true*. | ![Filter with StartsWith.](https://learn.microsoft.com/media/function-startswith/customers-all-co-startswith.png)<br> |
| **Filter( Customers, SearchInput.Text in Name | SearchInput.Text in Company )** | Filters the **Customers** data source for records in which either the **Name** column or the **Company** column contains the search string (for example, **co**) anywhere within it. | ![Filter with search text in name.](https://learn.microsoft.com/media/function-startswith/customers-all-co-contains.png)<br> |
| **Search( Customers, SearchInput.Text, "Name", "Company" )** | Similar to using the **in** operator, the **Search** function searches the **Customers** data source for records in which either the **Name** column or the **Company** column contains the search string (for example, **co**) anywhere within it. The **Search** function is easier to read and write than **Filter** if you want to specify multiple columns and multiple **in** operators. Note that you must enclose the names of the columns in double quotation marks. |  |

