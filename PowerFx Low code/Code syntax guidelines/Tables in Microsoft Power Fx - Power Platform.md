---
title: Tables in Microsoft Power Fx - Power Platform
tags: Low-Code Development
createdAt: Mon Dec 29 2025 16:35:16 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 16:35:35 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- In Microsoft Power Fx, a record contains one or more categories of information about a person, place, or thing, and a table holds one or more records with the same categories of information.
- Formulas can be used to access and manipulate data in tables and records, and can take the name of a table as an argument, returning a table that reflects the other arguments specified.
- Tables can be created using the Table function with a set of records, and can be nested, with records containing other records or tables, and fields containing other records or tables.
- Functions such as AddColumns, DropColumns, and RenameColumns can be used to modify tables, and functions like Filter, Lookup, and Sort can be used to operate on tables and return new tables.
- Record scopes are created by functions like ForAll and Filter, allowing access to fields of the record being processed, and the @ disambiguation operator can be used to access values from outside the record scope.


Detailed summary

Note

[Microsoft Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) is the new name for the canvas apps formula language. These articles are work in progress as we extract the language from canvas apps, integrate it with other [Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d) Power Platform products, and make it available as open source. Start with the [Microsoft Power Fx Overview](https://learn.microsoft.com/overview) for an introduction to the language.

In Microsoft Power Fx, you can write a formula that accesses information in [Microsoft Excel](https://app.getrecall.ai/item/64fc8953-42b5-4431-b38a-277caf418012), SharePoint, SQL Server, and several other sources that store data in records and tables. To work most effectively with this kind of data, review the concepts that underlie these structures.

- A record contains one or more categories of information about a person, a place, or a thing. For example, a record might contain the name, the email address, and the phone number of a single customer. Other tools refer to a record as a "row" or an "item."


- A table holds one or more records that contain the same categories of information. For example, a table might contain the names, the email addresses, and the phone numbers of 50 customers.

You can build a variety of formulas that take the name of a table as an argument, just as a formula in Excel takes one or more cell references as arguments. Some formulas in [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) return a table that reflects the other arguments that you specify. For example, you might create a formula:

- to update a record in a table by specifying that table as one of multiple arguments for the [Patch](https://learn.microsoft.com/reference/function-patch) function

- to add, remove, and rename columns in a table by specifying that table as an argument for the [AddColumns](https://learn.microsoft.com/reference/function-table-shaping), [DropColumns](https://learn.microsoft.com/reference/function-table-shaping), or [RenameColumns](https://learn.microsoft.com/reference/function-table-shaping) function. None of those functions modifies the original table. Instead, the function returns another table based on the other arguments that you specify.

![Elements of table.](https://learn.microsoft.com/media/tables/elements-of-a-table.png)


Each record contains at least one category of information for a person, a place, or a thing. The example above shows a record for each product (**Chocolate**, **Bread**, and **Water**) and a column for each category of information (**Price**, **Quantity on Hand**, and **Quantity on Order**).

In a formula, you can refer to a record by itself, outside of a table's context, by using curly braces. For example, this record **{ Name: "Strawberries", Price: 7.99 }** isn't associated with a table. Note that field names, such as **Name** and **Price** in that example, aren't enclosed in double quotation marks.

A field is an individual piece of information in a record. You can visualize this sort of field as a value in a column for a particular record.

Just as with a control, you refer to a field of a record by using the **.** [operator](https://learn.microsoft.com/operators) on the record. For example, **First(Products).Name** returns the **Name** field for the first record in the **Products** table.


A field can contain another record or table, as the example for the [GroupBy](https://learn.microsoft.com/reference/function-groupby) function shows. You can nest as many levels of records and tables as you want.

A column refers to the same field for one or more records in a table. In the above example, each product has a price field, and that price is in the same column for all products. The above table has four columns, shown horizontally across the top:

- **Name**

- **Price**

- **Quantity on Hand**

- **Quantity on Order**

The column's name reflects the fields in that column.

All values within a column are of the same data type. In the above example, the "Quantity on Hand" column always contains a number and can't contain a string, such as "12 units," for one record. The value of any field may also be *blank*.

You may have referred to columns as "fields" in other tools.

A table comprises one or more records, each with multiple fields that have consistent names across the records.


Any table that's stored in a data source or a collection has a name, which you use to refer to the table and pass it to functions that take tables as arguments. Tables can also be the result of a function or a formula.

As in the following example, you can express a table in a formula by using the [Table](https://learn.microsoft.com/reference/function-table) function with a set of records, which you express in curly braces:

`Table( { Value: "Strawberry" }, { Value: "Vanilla" } )`

You can also define a single-column table with square brackets. An equivalent way to write the above:

`[ "Strawberry", "Vanilla" ]`

In Excel and [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6), you use formulas to manipulate numbers and strings of text in similar ways:

- In Excel, type a value, such as **42**, in cell **A1**, and then type a formula, such as **A1+2**, in another cell to show the value of **44**.

- In Power Apps, set the [Default](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/properties-core) property of **Slider1** to **42**, and set the [Text](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/properties-core) property of a label to **Slider1.Value + 2** to show the value of **44**.


In both cases, the calculated value changes automatically if you change the values of the arguments (for example, the number in cell **A1** or the value of **Slider1**).

Similarly, you can use formulas to access and manipulate data in tables and records. You can use names of tables as arguments in some formulas, such as **Min(Catalog, Price)** to show the lowest value in the **Price** column of the **Catalog** table. Other formulas provide whole tables as return values, such as **RenameColumns(Catalog, "Price", "Cost")**, which returns all the records from the **Catalog** table but changes the name of the **Price** column to **Cost**.

Just as with numbers, formulas that involve tables and records are automatically recalculated as the underlying table or record changes. If the cost of a product in the **Catalog** table is lowered below the previous minimum, the return value of the [Min](https://learn.microsoft.com/reference/function-aggregates) formula will automatically change to match it.


Consider the **Lower** function. If the variable **welcome** contains the text string **"Hello, World"**, the formula **Lower( welcome )** returns **"hello, world"**. This function doesn't, in any way, change the value in that variable. **Lower** is a pure function in that it only processes input and produces output. That's all; it has no side effects. All functions in Excel and most functions in [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) are pure functions, which allow the workbook or the app to be recalculated automatically.

Power Fx offers a set of functions that operate on tables in the same manner. These functions take tables as input and filter, sort, transform, reduce, and summarize entire tables of data. In fact, **Lower** and many other functions that typically take a single value can also take a single-column table as input.


Many functions take a single-column table as their input. If an entire table has only one column, you can specify it by name. If a table has multiple columns, you can specify one of those columns by using *Table.Column* syntax. For example, **Products.Name** returns the single-column table of only **Name** values from the **Products** table.

You can completely reshape a table however you want by using the **AddColumns**, **RenameColumns**, **ShowColumns**, or **DropColumns** function. Again, these functions change only their output, not their source.

Other functions are specifically designed to modify data and have side effects. Because these functions aren't pure, you must build them carefully, and they can't participate in automatically recalculating values in the app. You can use these functions only within behavioral formulas.

Some functions operate by evaluating a formula across all the records of a table individually. The formula's result is used in various ways:

- **AddColumns** - Formula provides the value of the added field.


- **Average**, **Max**, **Min**, **Sum**, **StdevP**, **VarP** - Formula provides the value to aggregate.

- **Filter**, **Lookup** - Formula determines if the record should be included in the output.

- **Concat** - Formula determines the strings to concatenate together.

- **Distinct** - Formula returns a value, used to identify duplicate records.

- **ForAll** - Formula can return any value, potentially with side effects.

- **Sort** - Formula provides the value to sort the records on.

- **With** - Formula can return any value, potentially with side effects.

Inside these formulas, you can reference the fields of the record being processed. Each of these functions creates a "record scope" in which the formula is evaluated, where the fields of the record are available as top-level identifiers. You can also reference control properties and other values from throughout your app.

For example, take a table of **Products** placed in a global variable:

![Tables requested.](https://learn.microsoft.com/media/tables/requested.png)


```
Set( Products,
    Table(
        { Product: "Widget",    'Quantity Requested': 6,  'Quantity Available': 3 },
        { Product: "Gadget",    'Quantity Requested': 10, 'Quantity Available': 20 },
        { Product: "Gizmo",     'Quantity Requested': 4,  'Quantity Available': 11 },
        { Product: "Apparatus", 'Quantity Requested': 7,  'Quantity Available': 6 }
    )
)
```

To determine whether any of any of these products had more requested than is available:

`Filter( Products, 'Quantity Requested' > 'Quantity Available' )`

The first argument to **Filter** is the table of records to operate on, and the second argument is a formula. **Filter** creates a record scope for evaluating this formula in which the fields of each record are available, in this case **Product**, **Quantity Requested**, and **Quantity Available**. The result of the comparison determines if each record should be included in the result of the function:

![Tables needed.](https://learn.microsoft.com/media/tables/needed.png)

Adding to this example, we can calculate how much of each product to order:


```
AddColumns( 
    Filter( Products, 'Quantity Requested' > 'Quantity Available' ), 
    "Quantity To Order", 'Quantity Requested' - 'Quantity Available'
)
```

Here we are adding a calculated column to the result. **AddColumns** has its own record scope that it uses to calculate the difference between what has been requested and what is available.

![Add columns.](https://learn.microsoft.com/media/tables/toorder.png)

Finally, we can reduce the result table to just the columns that we want:

```
ShowColumns(
    AddColumns(
        Filter( Products, 'Quantity Requested' > 'Quantity Available' ),
        "Quantity To Order", 'Quantity Requested' - 'Quantity Available'
    ),
    "Product",
    "Quantity To Order"
)
```

![To order only.](https://learn.microsoft.com/media/tables/toorderonly.png)


Note that in the above, we used double quotes (") in some places and single quotes (') in other places. Single quotes are required when referencing the value of an object, such as a field or table, in which the name of the object contains a space. Double quotes are used when we are not referencing the value of an object but instead talking about it, especially in situations in which the object does not yet exist, as in the case of **AddColumns**.

Field names added with the record scope override the same names from elsewhere in the app. When this happens, you can still access values from outside the record scope with the [@](https://learn.microsoft.com/operators) operator:

- To access values from nested record scopes, use the **@** operator with the name of the table being operated upon using this pattern:*Table***[@***FieldName***]**

- To access global values, such as data sources, collections, and context variables, use the pattern **[@***ObjectName***]** (without a table designation).


If the table being operated upon is an expression, such as **Filter(** *Table***,** ... **)**, then the disambiguation operator cannot be used. Only the innermost record scope can access fields from this table expression, by not using the disambiguation operator.

For example, imagine having a collection **X**:

![X value.](https://learn.microsoft.com/media/tables/x.png)

You can create this collection with **ClearCollect( X, [1, 2] )**.

And another collection **Y**:

![Y value.](https://learn.microsoft.com/media/tables/y.png)

You can create this collection with **ClearCollect( Y, ["A", "B"] )**.

In addition, define a context variable named **Value** with this formula: **UpdateContext( {Value: "!"} )**

Let's put it all together. In this context, the following formula:

```
Ungroup(
    ForAll( X,
        ForAll( Y,
            Y[@Value] & Text( X[@Value] ) & [@Value]
        )
    ),
    "Value"
)
```

produces this table:

![XY value.](https://learn.microsoft.com/media/tables/xy.png)

What is going on here? The outermost **ForAll** function defines a record scope for **X**, allowing access to the **Value** field of each record as it is processed. It can be accessed by simply using the word **Value** or by using **X[@Value]**.


The innermost **ForAll** function defines another record scope for **Y**. Since this table also has a **Value** field defined, using **Value** here refers to the field in **Y**'s record and no longer the one from **X**. Here, to access **X**'s **Value** field, we must use the longer version with the disambiguation operator.

Since **Y** is the innermost record scope, accessing fields of this table do not require disambiguation, allowing us to use this formula with the same result:

```
Ungroup(
    ForAll( X,
        ForAll( Y,
            Value & Text( X[@Value] ) & [@Value]
        )
    ),
    "Value"
)
```

All the **ForAll** record scopes override the global scope. The **Value** context variable we defined isn't available by name without the disambiguation operator. To access this value, use **[@Value]**.

**Ungroup** flattens the result because nested **ForAll** functions result in a nested result table.

To operate on a single column from a table, use the **ShowColumns** function as in this example:

```
ShowColumns( Products, "Product" )
```


This formula produces this single-column table:

![Single column.](https://learn.microsoft.com/media/tables/single-column.png)

For a shorter alternative, specify *Table.Column*, which extracts the single-column table of just *Column* from *Table*. For example, this formula produces exactly the same result as using **ShowColumns**.

```
Products.Product
```

You express records by using curly braces that contain named field values. For example, you can express the first record in the table at the start of this topic by using this formula:

`{ Name: "Chocolate", Price: 3.95, 'Quantity on Hand': 12, 'Quantity on Order': 10 }`

You can also embed formulas within other formulas, as this example shows:

`{ Name: First(Products).Name, Price: First(Products).Price * 1.095 }`

You can nest records by nesting curly braces, as this example shows:

`{ 'Quantity': { 'OnHand': ThisItem.QuantOnHand, 'OnOrder': ThisItem.QuantOnOrder } }`

Enclose each column name that contains a special character, such as a space or a colon, in single quotes. To use a single quote within a column name, double it.


Note that the value in the **Price** column doesn't include a currency symbol, such as a dollar sign. That formatting will be applied when the value is displayed.

You can create a table by using the [Table](https://learn.microsoft.com/reference/function-table) function and a set of records. You can express the table at the start of this topic by using this formula:

```
Table( 
	{ Name: "Chocolate", Price: 3.95, 'Quantity on Hand': 12, 'Quantity on Order': 10 },
	{ Name: "Bread", Price: 4.95, 'Quantity on Hand': 34, 'Quantity on Order': 0 },
	{ Name: "Water", Price: 4.95, 'Quantity on Hand': 10, 'Quantity on Order': 0 } 
)
```

You can also nest tables:

```
Table( 
	{ Name: "Chocolate", 
	  'Quantity History': Table( { Quarter: "Q1", OnHand: 10, OnOrder: 10 },
	                             { Quarter: "Q2", OnHand: 18, OnOrder: 0 } ) 
	}
)
```

You can create single-column tables by specifying values in square brackets. The resulting table has a single column, named **Value**.


For example, `[ 1, 2, 3, 4 ]` is equivalent to `Table( { Value: 1 }, { Value: 2 }, { Value: 3 }, { Value: 4 } )` and returns this table:

![Inline table.](https://learn.microsoft.com/media/tables/inline-table.png)

