---
title: Operators and Identifiers in Microsoft Power Fx - Power Platform
tags: Low-Code Development
createdAt: Mon Dec 29 2025 16:26:57 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 16:27:35 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- Microsoft Power Fx is a language used in the Power Platform, With various operators such as arithmetic, comparison, and logical operators.
- Identifiers in Power Fx include property selectors, decimal separators, and list separators, which may be language-dependent.
- Special operators like `in`, `exactin`, `As`, `Self`, `Parent`, and `@` are used for specific purposes such as membership testing, record naming, control referencing, and disambiguation.
- Names of variables, data sources, columns, and other objects can contain Unicode characters, and single quotes are used to enclose names with spaces or special characters.
- Power Fx uses display names and logical names to refer to tables and columns, with display names being user-friendly and logical names being unique and used by professional developers.


Detailed summary


## Introduction to Microsoft Power Fx and Operators
- Microsoft Power Fx is the new name for the canvas apps formula language, and it is currently a work in progress as it is being extracted from canvas apps, integrated With other Microsoft Power Platform products, and made available as open source.
- The operators in Microsoft Power Fx include various types, such as property selectors, decimal separators, parentheses, arithmetic operators, comparison operators, string concatenation operators, logical operators, membership operators, disambiguation operators, list separators, and formula chaining operators, which are used to perform different operations and functions within the language.
- Some of the key operators in Microsoft Power Fx include the property selector, which extracts a property from a table control or enumeration, the decimal separator, which separates the whole and fractional parts of a number and depends on the language, and the parentheses, which enforce precedence order and group sub-expressions in a larger expression.
- The arithmetic operators in Microsoft Power Fx include addition, subtraction, multiplication, division, exponentiation, and percentage, which are used to perform mathematical operations, and the comparison operators include equal to, greater than, less than, and not equal to, which are used to compare values.
- The language also includes string concatenation operators, which make multiple strings appear continuous, and logical operators, such as logical conjunction, disjunction, and negation, which are used to perform logical operations.
- The membership operators in Microsoft Power Fx include the exactin and in operators, which are used to find a string in a data source, such as a collection or an imported table, with the exactin operator identifying matches only if they are capitalized the same way, and the in operator identifying matches regardless of case.
- The disambiguation operator, denoted by @, is used for field disambiguation and global disambiguation, and the list separator, which depends on the language, is used to separate arguments in function calls, fields in a record, and records in a table.
- The formula chaining operator, denoted by ;, is used to separate invocations of functions in behavior properties, and the As operator is used to override ThisItem and ThisRecord in galleries and record scope functions, providing a better and more specific name, especially in nested scenarios.

## Record References and Custom Naming with ThisItem, ThisRecord, and As Operator
- The Self, Parent, ThisItem, and ThisRecord operators are used to access properties of the current control, properties of a control container, fields of a Gallery or form control, and the complete record and individual fields of the record within certain functions, respectively.
- The Microsoft Power Fx language provides several operators to refer to individual records in a formula, including ThisItem, ThisRecord, and the As operator, which can be used to define a custom name for the current record.
- ThisItem is the default name for the current record in a Gallery or form control, and it is always required when referencing the current item in these contexts, such as in the formula ThisItem.Picture or ThisItem.'First Name' & " " & ThisItem.'Last Name'.
- ThisRecord is the default name for the current record in ForAll and other record scope functions, and it is optional, but using it can make formulas easier to understand, especially in ambiguous situations where a field name may also be a relationship name, as seen in the example Filter( Employees, StartsWith( ThisRecord.Employee.'First Name', "M" ) ).
- The As operator can be used to override the default ThisItem or ThisRecord names and assign a custom name to the current record, making formulas easier to understand and resolving ambiguity when nesting galleries and record scope functions, as demonstrated in the example Employees As Employee, where the formulas for the picture and name are adjusted to use the custom name Employee.
- When using record scope functions like Patch, Collect, and ForAll, ThisRecord can be used to reference the whole record, and the As operator can be used to clarify the record being worked With, as shown in the example With( { InactiveEmployees: Filter( Employees, Status = 'Status (Employees)'.Inactive ) }, ForAll( InactiveEmployees As Employee, Patch( Employees, Employee, { Status: 'Status (Employees)'.Active } ) ) ).
- In nested situations, ThisItem and ThisRecord always refer to the innermost scope, making records in outer scopes unavailable, but using the As operator to assign unique names to each record scope can make all records available, as illustrated in the example that produces a chessboard pattern by nesting two ForAll functions with custom names Rank and File.

## Referencing Controls and Properties with Self and Parent Operators
- The provided text discusses the use of operators and identifiers in Microsoft Power Fx, specifically in the context of creating a grid with alternating colors using the ForAll function or nested Gallery controls, where the color of each cell is determined by the sum of its Rank and File values.
- The text explains how to reference controls and their properties within a formula, using three methods: by control name, the Self operator, and the Parent operator, which provide relative references to the current control or its container.
- The Self operator is used to reference another property of the same control, while the Parent operator is used to reference the hosting control of the current control, and it is noted that referring to Parent.Parent, Self.Parent, or Parent.Self is not supported.
- The text also discusses the naming conventions for variables, data sources, columns, and other objects in Power Fx, which can contain any Unicode character, and explains how to represent names With special characters, such as spaces or single quotes, using single quotes around the name.

## Naming Conventions for Variables, Data Sources, and Columns
- Additionally, the text mentions that some data sources, like SharePoint and Microsoft Dataverse, have two different names for the same table or column of data: a logical name, which is unique and used by professional developers, and a display name, which is user-friendly and intended to be seen by end users, and notes that Microsoft Power Fx will suggest display names as choices, but logical names can still be used if typed indirectly.
- The use of double quotes is mentioned as a way to designate text strings, and the text provides examples of how to represent different column names in a formula, including those with spaces, numbers, and special characters.
- The text highlights the importance of understanding the different naming conventions and operators in Power Fx to effectively create and work with formulas, and provides examples and explanations to help users navigate these concepts.
- When authoring a reference to a field, such as 'Custom Field', in Microsoft Power Fx, the suggestion will be made to use the display name, which requires single quotes if the name contains a space, and this name is used in the formula bar to retrieve the data.
- The display name is mapped to the underlying logical name, which is used to interact With the data source, and this mapping is used to convert between display names and logical names, allowing for changes in display names or language edits to be handled seamlessly.
- Logical names are not translated when moving an app between environments, which can cause issues with custom fields that have different environment prefixes, whereas display names are preferred as they can be matched against display names in the new environment, even if they are not unique.

## Name Disambiguation and Accessing Global Values
- In cases where display names are not unique, name disambiguation strings are added, such as adding the logical name in parentheses, to distinguish between conflicting names, and this also applies to entities, option sets, and other Dataverse items.
- Certain functions, like Filter, AddColumns, and Sum, create record scopes that override field names from elsewhere in the app, and the @ disambiguation operator can be used to access values from outside the record scope, or to access values from nested record scopes using the pattern Table[@FieldName].
- To access global values, such as data sources, collections, and context variables, the pattern [@ObjectName] can be used without a table designation, and more information on record scopes and examples can be found in the relevant documentation.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/operators)
### Note

[Microsoft Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) is the new name for the canvas apps formula language. These articles are work in progress as we extract the language from canvas apps, integrate it [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) other [Microsoft Power Platform](https://app.getrecall.ai/item/9f62b652-2cb9-45c6-8fd9-7c1a55d86cc9) products, and make it available as open source. Start with the [Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d) Power Fx Overview for an introduction to the language.

The operators in Microsoft Power Fx are described below. Some of these operators are dependent on the language of the author. See Global apps for more information.


<div class="joplin-table-wrapper"><table aria-label="Table 1"><thead><tr><th>Symbol</th><th>Type</th><th>Syntax</th><th>Description</th></tr></thead><tbody><tr><td><strong>.</strong></td><td>Property Selector</td><td><strong>Slider1.ValueColor.Red</strong></td><td>Extracts a property from a table control, or enumeration. For backward compatibility, <strong>!</strong> can be used.</td></tr><tr><td><strong>.</strong><a href="https://learn.microsoft.com/global" data-linktype="relative-path">language dependent</a></td><td>Decimal separator</td><td><strong>1.23</strong></td><td>Separator between whole and fractional parts of a number. The character depends on the language.</td></tr><tr><td><strong>( )</strong></td><td>Parentheses</td><td><strong>Filter(T, A &lt; 10)</strong><p><strong>(1 + 2) * 3</strong></p></td><td>Enforces precedence order, and groups sub expressions in a larger


expression</td></tr><tr><td><strong>+</strong></td><td>Arithmetic operators</td><td><strong>1 + 2</strong></td><td>Addition</td></tr><tr><td><strong>-</strong></td><td><strong>2 - 1</strong></td><td>Subtraction and sign</td></tr><tr><td>*</td><td><strong>2 * 3</strong></td><td>Multiplication</td></tr><tr><td><strong>/</strong></td><td><strong>2 / 3</strong></td><td>Division (also see the <strong><a href="https://learn.[microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d).com/reference/function-mod" data-linktype="relative-path">Mod</a></strong> function)</td></tr><tr><td><strong>^</strong></td><td><strong>2 ^ 3</strong></td><td>Exponentiation, equivalent to the <strong><a href="https://learn.microsoft.com/reference/function-numericals" data-linktype="relative-path">Power</a></strong> function</td></tr><tr><td><strong>%</strong></td><td><strong>20%</strong></td><td>Percentage (equivalent to "* 1/100")</td></tr><tr><td><strong>=</strong></td><td>Comparison operators</td><td><strong>Price =


100</strong></td><td>Equal to</td></tr><tr><td><strong>&gt;</strong></td><td><strong>Price &gt; 100</strong></td><td>Greater than</td></tr><tr><td><strong>&gt;=</strong></td><td><strong>Price &gt;= 100</strong></td><td>Greater than or equal to</td></tr><tr><td><strong>&lt;</strong></td><td><strong>Price &lt; 100</strong></td><td>Less than</td></tr><tr><td><strong>&lt;=</strong></td><td><strong>Price &lt;= 100</strong></td><td>Less than or equal to</td></tr><tr><td><strong>&lt;&gt;</strong></td><td><strong>Price &lt;&gt; 100</strong></td><td>Not equal to</td></tr><tr><td><strong>&amp;</strong></td><td>String concatenation operator</td><td><strong>"hello" &amp; " " &amp; "world"</strong></td><td>Makes multiple strings appear continuous</td></tr><tr><td><strong>&amp;&amp;</strong> or <strong>And</strong></td><td>Logical operators</td><td><strong>Price &lt; 100 &amp;&amp; Slider1.Value = 20</strong>or <strong>Price &lt; 100 And


Slider1.Value = 20</strong></td><td>Logical conjunction, equivalent to the <strong><a href="https://learn.[microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d).com/reference/function-logicals" data-linktype="relative-path">And</a></strong> function</td></tr><tr><td><strong>||</strong> or <strong>Or</strong></td><td><strong>Price &lt; 100 || Slider1.Value = 20</strong> or <strong>Price &lt; 100 Or Slider1.Value = 20</strong></td><td>Logical disjunction, equivalent to the <strong><a href="https://learn.microsoft.com/reference/function-logicals" data-linktype="relative-path">Or</a></strong> function</td></tr><tr><td><strong>!</strong> or <strong>Not</strong></td><td><strong>!(Price &lt; 100)</strong> or <strong>Not (Price &lt; 100)</strong></td><td>Logical negation, equivalent to the <strong><a href="https://learn.microsoft.com/reference/function-logicals" data-linktype="relative-path">Not</a></strong> function</td></tr><tr><td><strong>exactin</strong></td><td><a


href="https://learn.microsoft.com/#in-and-exactin-operators" data-linktype="self-bookmark">Membership operators</a></td><td><strong>Gallery1.Selected exactin SavedItems</strong></td><td>Belonging to a collection or a table</td></tr><tr><td><strong>exactin</strong></td><td><strong>"Windows" exactin “To display windows in the Windows operating system...”</strong></td><td>Substring test (case-sensitive)</td></tr><tr><td><strong>in</strong></td><td><strong>Gallery1.Selected in SavedItems</strong></td><td>Belonging to a collection or a table</td></tr><tr><td><strong>in</strong></td><td><strong>"The" in "The keyboard and the monitor..."</strong></td><td>Substring test (case-insensitive)</td></tr><tr><td><strong>@</strong></td><td><a href="https://learn.microsoft.com/#disambiguation-operator" data-linktype="self-bookmark">Disambiguation operator</a></td><td><strong>MyTable[@fieldname]</strong></td><td>Field


disambiguation</td></tr><tr><td><strong>@</strong></td><td><strong>[@MyVariable]</strong></td><td>Global disambiguation</td></tr><tr><td><strong>,</strong>[<a href="https://learn.[microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d).com/global" data-linktype="relative-path">language dependent</a>]</td><td>List separator</td><td><strong>If(X &lt; 10, "Low", "Good")</strong><strong>{ X: 12, Y: 32 }</strong><strong>[ 1, 2, 3 ]</strong></td><td>Separates: <ul><li>arguments in function calls</li><li>fields in a record</li><li>records in a table</li></ul>This character depends on the language.</td></tr><tr><td><strong>;</strong>[<a href="https://learn.microsoft.com/global" data-linktype="relative-path">language dependent</a>]</td><td>Formula chaining</td><td><strong>Collect(T, A); Navigate(S1, "")</strong></td><td>Separate invocations of functions in behavior properties. The chaining operator depends on the language.</td></tr><tr><td><strong>As</strong></td><td><a


href="https://learn.microsoft.com/#as-operator" data-linktype="self-bookmark">As operator</a></td><td><strong>AllCustomers As Customer</strong></td><td>Overrides <strong>ThisItem</strong> and <strong>ThisRecord</strong> in galleries and record scope functions. <strong>As</strong> is useful for providing a better, specific name and is especially important in nested scenarios.</td></tr><tr><td><strong>Self</strong></td><td><a href="https://learn.microsoft.com/#self-and-parent-operators" data-linktype="self-bookmark">Self operator</a></td><td><strong>Self.Fill</strong></td><td>Access to properties of the current control</td></tr><tr><td><strong>Parent</strong></td><td><a href="https://learn.microsoft.com/#self-and-parent-operators" data-linktype="self-bookmark">Parent operator</a></td><td><strong>Parent.Fill</strong></td><td>Access to properties of a control container</td></tr><tr><td><strong>ThisItem</strong></td><td><a


href="https://learn.[microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d).com/#thisitem-operator" data-linktype="self-bookmark">[ThisItem operator](eecced68-48dd-4a43-8732-e9b2091489f0)</a></td><td><strong>ThisItem.FirstName</strong></td><td>Access to fields of a Gallery or form control</td></tr><tr><td><strong>ThisRecord</strong></td><td><a href="https://learn.microsoft.com/#thisitem-operator" data-linktype="self-bookmark">ThisItem operator</a></td><td><strong>ThisRecord.FirstName</strong></td><td>Access to the complete record and individual fields of the record within <strong>[ForAll](https://app.getrecall.ai/item/e168f9aa-0229-4a4b-a49a-c47c2611ae84)</strong>, <strong>Sum</strong>, <strong>[With](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c)</strong>, and other record scope functions. Can be overridden [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) the <strong>As</strong> operator.</td></tr></tbody></table></div>


Use the [in](https://learn.microsoft.com/operators#in-and-exactin-operators) and [exactin](https://learn.microsoft.com/operators#in-and-exactin-operators) operators to find a string in a data source, such as a collection or an imported table. The [in](https://learn.microsoft.com/operators#in-and-exactin-operators) operator identifies matches regardless of case, and the [exactin](https://learn.microsoft.com/operators#in-and-exactin-operators) operator identifies matches only if they're capitalized the same way. Here's an example:

1. Create or import a collection named **Inventory**, and show it in a gallery, as the first procedure in [Show images and text in a gallery](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/show-images-text-gallery-sort-filter) describes.

2. Set the [Items](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/properties-core) property of the gallery to this formula: **Filter(Inventory, "E" in ProductName)**

The gallery shows all products except Callisto because the name of that product is the only one that doesn't contain the letter you specified.

3. Change the [Items](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/properties-core) property of the gallery to this formula: **Filter(Inventory, "E" exactin ProductName)**

The gallery shows only Europa because only its name contains the letter that you specified in the case that you specified.


A few controls and functions apply formulas to individual records of a table. To refer to the individual record in a formula, use one of the following:

| Operator | Applies to | Description |
| --- | --- | --- |
| **ThisItem** | [Gallery](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-gallery) control**[Edit form](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-form-detail)** control**[Display form](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-form-detail)** control | The default name for the current record in a **Gallery** or form control. |
| **ThisRecord** | [ForAll](https://learn.microsoft.com/reference/function-forall), [Filter](https://learn.microsoft.com/reference/function-filter-lookup), [With](https://learn.microsoft.com/reference/function-with), [Sum](https://learn.microsoft.com/reference/function-aggregates) and other [record scope](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/working-with-tables) functions | The default name for the current record in [ForAll](https://app.getrecall.ai/item/e168f9aa-0229-4a4b-a49a-c47c2611ae84) and other record scope functions. |
| **As** *name* | [Gallery](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-gallery) control**[ForAll](https://learn.microsoft.com/reference/function-forall)**, [Filter](https://learn.microsoft.com/reference/function-filter-lookup), [With](https://learn.microsoft.com/reference/function-with), [Sum](https://learn.microsoft.com/reference/function-aggregates) and other record scope functions | Defines a *name* for the current record, replacing default **ThisItem** or **ThisRecord**. Use **As** to make formulas easier to understand and resolve ambiguity when nesting. |

For example, in the following **Gallery** control, the **Items** property is set to the **Employees** data source (such as the **Employees** entity included [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) the [Northwind Traders sample](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/northwind-orders-canvas-overview)):

```
Employees
```

![Employees shown in a gallery.](https://learn.microsoft.com/media/operators/as-gallery-items.png)


The first item in the gallery is a template that is replicated for each employee. In the template, the formula for the picture uses **ThisItem** to refer to the current item:

```
ThisItem.Picture
```

![Formula for the picture of an employee.](https://learn.microsoft.com/media/operators/as-gallery-picture.png)

Likewise, the formula for the name also uses **ThisItem**:

```
ThisItem.'First Name' & " " & ThisItem.'Last Name'
```

![Formula for the first and last name of an employee.](https://learn.microsoft.com/media/operators/as-gallery-name.png)

**ThisRecord** is used in functions that have a [record scope](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/working-with-tables). For example, we can use the **Filter** function [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) our gallery's **Items** property to only show first names that beginning [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) *M*:

```
Filter( Employees, StartsWith( ThisRecord.Employee.'First Name', "M" ) )
```

![Filtering the employees based on name, using ThisRecord.](https://learn.microsoft.com/media/operators/as-gallery-filter-thisrecord.png)

**ThisRecord** is optional and implied by using the fields directly, for example, in this case, we could have written:

```
Filter( Employees, StartsWith( 'First Name', "M" ) )
```

Although optional, using **ThisRecord** can make formulas easier to understand and may be required in ambiguous situations where a field name may also be a relationship name. **ThisRecord** is optional while **ThisItem** is always required.


Use **ThisRecord** to reference the whole record [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) **Patch**, **Collect**, and other record scope functions. For example, the following formula sets the status for all inactive employees to active:

```
[With](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c)( { InactiveEmployees: Filter( Employees, Status = 'Status (Employees)'.Inactive ) },
      [ForAll](https://app.getrecall.ai/item/e168f9aa-0229-4a4b-a49a-c47c2611ae84)( InactiveEmployees, 
              Patch( Employees, ThisRecord, { Status: 'Status (Employees)'.Active } ) ) )
```

Use the **As** operator to name a record in a gallery or record scope function, overriding the default **ThisItem** or **ThisRecord**. Naming the record can make your formulas easier to understand and may be required in nested situations to access records in other scopes.

For example, you can modify the **Items** property of our gallery to use **As** to identify that we are working [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) an Employee:

```
Employees As Employee
```

![Gallery of employees, using the As operator.](https://learn.microsoft.com/media/operators/as-gallery-filter-as-employee.png)

The formulas for the picture and name are adjusted to use this name for the current record:

```
Employee.Picture
```

![Picture of an employee using the Employee name set with the As operator.](https://learn.microsoft.com/media/operators/as-gallery-as-picture.png)

```
Employee.'First Name' & " " & Employee.'Last Name'
```

![First and last name of an employee using the Employee name set with the As operator.](https://learn.microsoft.com/media/operators/as-gallery-as-name.png)


**As** can also be used [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) record scope functions to replace the default name **ThisRecord**. We can apply this to our previous example to clarify the record we are working [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c):

```
With( { InactiveEmployees: Filter( Employees, Status = 'Status (Employees)'.Inactive ) },
      [ForAll](https://app.getrecall.ai/item/e168f9aa-0229-4a4b-a49a-c47c2611ae84)( InactiveEmployees As Employee, 
              Patch( Employees, Employee, { Status: 'Status (Employees)'.Active } ) ) )
```

When nesting galleries and record scope functions, **ThisItem** and **ThisRecord** always refers to the inner most scope, leaving records in outer scopes unavailable. Use **As** to make all record scopes available by giving each a unique name.

For example, this formula produces a chessboard pattern as a text string by nesting two [ForAll](https://app.getrecall.ai/item/e168f9aa-0229-4a4b-a49a-c47c2611ae84) functions:

```
Concat( 
    [ForAll](https://app.getrecall.ai/item/e168f9aa-0229-4a4b-a49a-c47c2611ae84)( Sequence(8) As Rank,
        Concat( 
            ForAll( Sequence(8) As File, 
                    If( Mod(Rank.Value + File.Value, 2) = 1, " X ", " . " ) 
            ),
            Value 
        ) & Char(10) 
    ), 
    Value 
)
```


Setting a **Label** control's **Text** property to this formula displays:

![Chessboard text shown in a label control.](https://learn.microsoft.com/media/operators/as-forall-nesting.png)

Let's unpack what is happening here:

- We start by iterating an unnamed table of 8 numbered records from the [Sequence](https://learn.microsoft.com/reference/function-sequence) function. This loop is for each row of the board, which is commonly referred to as **Rank** and so we give it this name.

- For each row, we iterate another unnamed table of 8 columns, and we give the common name **File**.

- If **Rank.Value + File.Value** is an odd number, the square gets an **X**, otherwise a dot. This part of the formula is referencing both [ForAll](https://app.getrecall.ai/item/e168f9aa-0229-4a4b-a49a-c47c2611ae84) loops, made possible by using the **As** operator.

- [Concat](https://learn.microsoft.com/reference/function-concatenate) is used twice, first to assemble the columns and then the rows, [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) a [Char(10)](https://learn.microsoft.com/reference/function-char) thrown in to create a new line.

A similar example is possible [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) nested **Gallery** controls instead of **[ForAll](https://app.getrecall.ai/item/e168f9aa-0229-4a4b-a49a-c47c2611ae84)** functions. Let's start with the vertical gallery for the **Rank**. This gallery control will have an **Items** formula of:

```
Sequence(8) as Rank
```

![Illustration of the outer gallery that provides the Rank iteration.](https://learn.microsoft.com/media/operators/as-chessboard-rank.png)


Within this gallery, we'll place a horizontal gallery for the **File**, that will be replicated for each **Rank**, [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) an **Items** property of:

```
Sequence(8) as File
```

![Illustration of the inner gallery that provides the File iteration.](https://learn.microsoft.com/media/operators/as-chessboard-file.png)

And finally, within this gallery, we'll add a **Label** control that will be replicated for each **File** and each **Rank**. We'll size it to fill the entire space and use the **Fill** property to provide the color [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) this formula:

```
If( Mod( Rank.Value + File.Value, 2 ) = 1, Green, Beige )
```

![Label control within the two galleries that provides the alternating colors for the chessboard.](https://learn.microsoft.com/media/operators/as-chessboard-fill.png)

There are three ways to refer to a control and its properties within a formula:


| Method | Description |
| --- | --- |
| By control name | Any control can be referenced by name from anywhere within the app. <br><br>For example, **Label1.Fill** refers to the fill property of the control who's name is **Label1**. |
| **Self** operator | It's often convenient to reference another property of the same control when writing a formula. Instead of using an absolute reference by name, it's easier and more portable to use a relative reference to one_self_. The **Self** operator provides that easy access to the current control. <br><br>For example, **Self.Fill** refers to the fill color of the current control. |
| **Parent** operator | Some controls host other controls, such as the [Screen](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-screen) and [Gallery](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/controls/control-gallery) controls. The hosting control of the controls within it is called the *parent*. Like the **Self** operator, the **Parent** operator provides an easy relative reference to the container control. <br><br>For example, **Parent.Fill** refers to the fill property of the control that is the container for the current control. |


**Self** and **Parent** are operators and not properties on the controls themselves. Referring to **Parent.Parent**, **Self.Parent** or **Parent.Self** is not supported.

The names of variables, data sources, columns, and other objects can contain any [Unicode](https://en.wikipedia.org/wiki/Unicode).

Use single quotes around a name that contains a space or other special character. Use two single quotes together to represent one single quote in the name. Names that do not contain special characters do not require single quotes.

Here are some example column names you might encounter in a table, and how they are represented in a formula:

| Column name in a database | Column reference in a formula |
| --- | --- |
| SimpleName | `SimpleName` |
| NameWith123Numbers | `NameWith123Numbers` |
| Name [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) spaces | `'Name [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) spaces'` |
| Name with "double" quotes | `'Name with "double" quotes'` |
| Name with 'single' quotes | `'Name with ''single'' quotes'` |
| Name with an @ at sign | `'Name with an @ at sign'` |

Double quotes are used to [designate text strings](https://learn.microsoft.com/data-types#embedded-text).


Some data sources such as SharePoint and [Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d) Dataverse have two different names to refer to the same table or column of data:

- **Logical name** - A name that is guaranteed to be unique, does not change after being created, usually does not allow spaces or other special characters, and is not localized into different languages. As a result, the name can be cryptic. These names are used by professional developers. For example, **cra3a_customfield**. This name may also be referred to as **schema name** or just **name**.

- **Display name** - A name that is user-friendly and intended to be seen by end users. This name may not be unique, may change over time, may contain spaces and any Unicode character, and may be localized into different languages. Corresponding to the example above, the display name may be **Custom Field** [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) space in between the words.


Since display names are easier to understand, [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) will suggest them as choices and not suggest logical names. Although logical names are not suggested, they can still be used if typed indirectly.

For example, imagine you have added a **Custom Field** to an entity in Dataverse. A logical name will be assigned for you by the system, which you can modify only when creating the field. The result would look similar to:

![Accounts entity with Custom Field added, showing a display name of "Custom Field" and a logical name of "cr5e3_customfield."](https://learn.microsoft.com/media/operators/customfield_portal.png)

When authoring a reference to a field of Accounts, the suggestion will be made to use **'Custom Field'** since this is the display name. The single quotes must be used because this name has a space in it:

![Studio formula bar showing suggestions for field names of Accounts with the display name 'Custom Field' highlighted.](https://learn.microsoft.com/media/operators/customfield_suggest_display.png)

After selecting the suggestion, 'Custom Field' is shown in the formula bar and the data is retrieved:

![Studio formula bar showing the use of the display name 'Custom Field' for the field.](https://learn.microsoft.com/media/operators/customfield_display.png)

Although it is not suggested, we could also use the logical name for this field. This will result in the same data being retrieved. No single quotes are required since this name does not contain spaces or special characters:

![Studio formula bar showing the use of the logical name cr5e3_customfield for the field.](https://learn.microsoft.com/media/operators/customfield_logical.png)


Behind the scenes, a mapping is maintained between the display names seen in formulas and the underlying logical names. Since logical names must be used to interact [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) the data source, this mapping is used to convert from the current display name to the logical name automatically and that is what is seen in the network traffic. This mapping is also used to convert back to logical names to switch into new display names, for example, if a display name changes or a maker in a different language edits the app.

Note

Logical names are not translated when moving an app between environments. For Dataverse system entity and field names, this should not be a problem as logical names are consistent across environments. But any custom fields, such as **cra3a_customfield** in this example above, may have a different environment prefix (**cra3a** in this case). Display names are preferred as they can be matched against display names in the new environment.


Since display names are not unique, the same display name may appear more than once in the same entity. When this happens, the logical name will be added to the end of the display name in parentheses for one of more of the conflicting names. Building on the example above, if there was a second field [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) the same display name of **Custom Field** [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) a logical name of **cra3a_customfieldalt** then the suggestions would show:

![Studio formula bar showing the use of the logical name cr5e3_customfieldalt to disambiguate the two versions of "Custom Field."](https://learn.microsoft.com/media/operators/customfield_suggest_alt.png)

Name disambiguation strings are added in other situations where name conflicts occur, such as the names of entities, option sets, and other Dataverse items.

Some functions create [record scopes](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/working-with-tables) for accessing the fields of table while processing each record, such as **Filter**, **AddColumns**, and **Sum**. Field names added [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) the record scope override the same names from elsewhere in the app. When this happens, you can still access values from outside the record scope [with](https://app.getrecall.ai/item/b7d603a9-625b-4b9e-a12d-572cb118968c) the **@** disambiguation operator:


- To access values from nested record scopes, use the **@** operator with the name of the table being operated upon using this pattern:*Table***[@***FieldName***]*

- To access global values, such as data sources, collections, and context variables, use the pattern **[@*****ObjectName*****]** (without a table designation).

For more information and examples, see [record scopes](https://learn.microsoft.com/en-us/powerapps/maker/canvas-apps/working-with-tables).

