---
title: Operators and Identifiers in Power Apps - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:20:46 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:20:53 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- Operators in Power Apps include arithmetic, comparison, logical, and string concatenation operators, as well as special operators like `@`, `As`, `Self`, `Parent`, `ThisItem`, and `ThisRecord`.
- Identifiers in Power Apps can be column names, control names, or variable names, and may require single quotes if they contain special characters.
- The `@` operator is used for disambiguation, the `As` operator is used to override default names, and the `Self` and `Parent` operators are used to reference the current control and its container, respectively.
- The `ThisItem` and `ThisRecord` operators are used to reference the current record in a gallery or record scope function, and can be overridden with the `As` operator.
- Logical names and display names are used to refer to tables and columns in data sources, with logical names being unique and display names being user-friendly.


Detailed summary


## Operators and Identifiers in Power Apps
- The Operators and Identifiers in Power Apps section of the Power Platform document outlines the various functions and operators that can be applied to different Power Apps components, including Canvas apps, Copilot, Studio, Desktop flows, Dataverse formula columns, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The operators and identifiers that can be used in these components include arithmetic operators such as +, -, *, /, and ^, comparison operators such as =, >, >=, <, <=, and <>, and logical operators such as &&, ||, and !, which can be used to perform various calculations and operations.
- Identifiers, such as 'Account Name', can contain special characters, including spaces, and are enclosed in single quotes, while text strings, such as "Hello, World", are enclosed in double quotes, and string interpolation can be used with the $ symbol, such as $"Dear {FirstName}".
- The property selector, denoted by a dot (.), can be used to extract a property from a table, control, signal, or enumeration, and the @ operator can be used for field disambiguation and global disambiguation, while the , and ; operators are used to separate arguments in function calls and separate invocations of functions in behavior properties, respectively.

## Record Scope Operators and Disambiguation
- The As operator can be used to override ThisItem and ThisRecord in galleries and record scope functions, providing a better and more specific name, especially in nested scenarios, and the Self, Parent, ThisItem, and ThisRecord operators can be used to access properties of the current control, control container, fields of a Gallery or form control, and the complete record and individual fields of the record, respectively.
- The in and exactin operators can be used to find a string in a data source, such as a collection or an imported table, with the in operator identifying matches regardless of case and the exactin operator identifying matches only if they are capitalized the same way, as demonstrated in the example of filtering a gallery to show products that contain the letter "E" in their name.
- The Items property of a gallery can be changed using a formula, such as Filter(Inventory, "E" exactin ProductName), to show only specific items that meet the specified condition, in this case, only items with the name containing the letter "E" in the exact case specified.
- To refer to the individual record in a formula, operators such as ThisItem, ThisRecord, and As can be used, with ThisItem being the default name for the current record in a Gallery or form control, and ThisRecord being the default name for the current record in ForAll and other record scope functions.
- The As operator can be used to define a name for the current record, replacing the default ThisItem or ThisRecord, making formulas easier to understand and resolving ambiguity when nesting, as seen in the example where the Items property of a gallery is set to Employees As Employee.
- ThisRecord is optional and can be implied by using the fields directly, but using it can make formulas easier to understand and may be required in ambiguous situations, such as when a field name may also be a relationship name, and it is always required when referencing the whole record with Patch, Collect, and other record scope functions.
- The use of ThisItem and ThisRecord can be limited when nesting galleries and record scope functions, as they always refer to the innermost scope, making records in outer scopes unavailable, but the As operator can be used to give each scope a unique name, making all record scopes available, as demonstrated in the example that produces a chessboard pattern as a text string by nesting two ForAll functions.
- The As operator can also be used with record scope functions to replace the default name ThisRecord, as shown in the example where the Items property of a gallery is modified to use As to identify that we are working with an Employee, and the formulas for the picture and name are adjusted to use this name for the current record.

## Importance of Operators and Functions in Formulas
- The correct usage of These operators and functions, such as Filter, With, ForAll, and Patch, is crucial in creating effective and efficient formulas in Power Apps, and understanding their applications and limitations is essential for building robust and scalable applications.
- The provided text discusses the use of loops and operators in Power Apps, specifically the ForAll loop, which is used to iterate over a table and perform actions on each row, and the As operator, which allows for the referencing of both ForAll loops in a formula.

## Nested Galleries and Control References
- The text also explains how to create a checkerboard pattern using nested Gallery controls, with a vertical gallery for the Rank and a horizontal gallery for the File, and a Label control that is replicated for each File and each Rank, with its Fill property determined by the formula If( Mod( Rank.Value + File.Value, 2 ) = 1, Green, Beige ).
- There are three ways to refer to a control and its properties within a formula: by control name, using the Self operator, which provides a relative reference to the current control, and using the Parent operator, which provides a relative reference to the container control.
- The Self and Parent operators are not properties on the controls themselves, and referring to Parent.Parent, Self.Parent, or Parent.Self is not supported.

## Naming Conventions for Variables and Data Sources
- The names of variables, data sources, columns, and other objects can contain any Unicode, and single quotes are used to enclose names that contain spaces or other special characters, with two single quotes together representing one single quote in the name.
- The text also explains the difference between logical names and display names in data sources such as SharePoint and Microsoft Dataverse, with logical names being unique and unchanging, but often cryptic, and display names being user-friendly and intended to be seen by end users, but potentially non-unique and subject to change.
- In Power Apps, display names are suggested as choices, while logical names can still be used if typed indirectly, and it is possible to use either type of name in a formula, depending on the specific requirements of the app.

## Logical vs. Display Names in Data Sources
- The system assigns a logical name to a field, which can be modified only when the field is created, and this logical name is used to interact with the data source behind the scenes.
- When referencing a field, such as 'Custom Field', single quotes are required if the display name contains spaces, and the formula bar will show the display name, while the data is retrieved using the logical name.
- A mapping is maintained between display names and logical names, allowing for automatic conversion between the two, and this mapping is used to handle changes in display names or when an app is edited in a different language.
- Logical names are not translated when moving an app between environments, which can cause issues with custom fields that have different environment prefixes, whereas display names are preferred as they can be matched against display names in the new environment.

## Name Disambiguation and Record Scope Functions
- In cases where multiple fields have the same display name, a name disambiguation string is added to the end of the display name in parentheses, including the logical name, to distinguish between them, and this also applies to other Dataverse items such as tables and choices.
- Certain functions, like Filter, AddColumns, and Sum, create record scopes that override field names from elsewhere in the app, and the @ disambiguation operator can be used to access values from outside the record scope or from nested record scopes using the pattern Table[@FieldName].
- To access global values, such as data sources, collections, and context variables, the pattern [@ObjectName] can be used without a table designation, and more information on record scopes can be found in additional resources.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/operators#self-and-parent-operators)
| Functions | Applies to |
| --- | --- |
| **Operators****Identifiers** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> [Canvas apps](https://app.getrecall.ai/item/c0c31deb-a498-40e4-bd4d-16f8d2fdd310) Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages |
| **ThisItem****Self****Parent** | Canvas apps |

Some of these operators are dependent on the language of the author. For more information about language support in canvas apps, see [Global apps](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/global-apps).


<div class="joplin-table-wrapper"><table aria-label="Table 2"><thead><tr><th>Symbol</th><th>Type</th><th>Example</th><th>Description</th></tr></thead><tbody><tr><td><strong>'</strong>...<strong>'</strong></td><td><a href="https://learn.[microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d).com/#identifier-names" data-linktype="self-bookmark">Identifier</a></td><td><strong>'Account Name'</strong></td><td>Identifiers that contain special characters, including spaces, are enclosed in single quotes</td></tr><tr><td><strong>"</strong>...<strong>"</strong></td><td><a href="https://learn.microsoft.com/data-types#text-hyperlink-image-and-media" data-linktype="relative-path">Text string</a></td><td><strong>"Hello, World"</strong></td><td>Text strings are enclosed in double quotes</td></tr><tr><td><strong>$"</strong>...<strong>"</strong></td><td><a href="https://learn.microsoft.com/data-types#string-interpolation" data-linktype="relative-path">String interpolation</a></td><td><strong>$"Dear


{FirstName},"</strong></td><td>Formulas embedded within a text string</td></tr><tr><td><strong>.</strong></td><td>Property Selector</td><td><strong>Slider1.ValueColor.RedAcceleration.X</strong></td><td>Extracts a property from a <a href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables" data-linktype="absolute-path">table</a>, control, <a href="https://learn.microsoft.com/signals" data-linktype="relative-path">signal</a>, or enumeration. For backward compatibility, <strong>!</strong> may also be used.</td></tr><tr><td><strong>.</strong>[<a href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/global-apps" data-linktype="absolute-path">language dependent</a>]</td><td>Decimal separator</td><td><strong>1.23</strong></td><td>Separator between whole and fractional parts of a number. The character depends on the language.</td></tr><tr><td><strong>(


)</strong></td><td>Parentheses</td><td><strong>Filter(T, A &lt; 10)</strong><p><strong>(1 + 2) * 3</strong></p></td><td>Enforces precedence order, and groups subexpressions in a larger expression</td></tr><tr><td><strong>+</strong></td><td>Arithmetic operators</td><td><strong>1 + 2</strong></td><td>Addition</td></tr><tr><td><strong>-</strong></td><td><strong>2 - 1</strong></td><td>Subtraction and sign</td></tr><tr><td>*</td><td><strong>2 * 3</strong></td><td>Multiplication</td></tr><tr><td><strong>/</strong></td><td><strong>2 / 3</strong></td><td>Division (also see the <strong><a href="https://learn.[microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d).com/function-mod" data-linktype="relative-path">Mod</a></strong> function)</td></tr><tr><td><strong>^</strong></td><td><strong>2 ^ 3</strong></td><td>Exponentiation, equivalent to the <strong><a href="https://learn.microsoft.com/function-numericals" data-linktype="relative-path">Power</a></strong>


function</td></tr><tr><td><strong>%</strong></td><td><strong>20%</strong></td><td>Percentage (equivalent to "* 1/100")</td></tr><tr><td><strong>=</strong></td><td>Comparison operators</td><td><strong>Price = 100</strong></td><td>Equal to</td></tr><tr><td><strong>&gt;</strong></td><td><strong>Price &gt; 100</strong></td><td>Greater than</td></tr><tr><td><strong>&gt;=</strong></td><td><strong>Price &gt;= 100</strong></td><td>Greater than or equal to</td></tr><tr><td><strong>&lt;</strong></td><td><strong>Price &lt; 100</strong></td><td>Less than</td></tr><tr><td><strong>&lt;=</strong></td><td><strong>Price &lt;= 100</strong></td><td>Less than or equal to</td></tr><tr><td><strong>&lt;&gt;</strong></td><td><strong>Price &lt;&gt; 100</strong></td><td>Not equal to</td></tr><tr><td><strong>&amp;</strong></td><td>String concatenation operator</td><td><strong>"hello" &amp; " " &amp; "world"</strong></td><td>Makes multiple strings appear


continuous</td></tr><tr><td><strong>&amp;&amp;</strong> or <strong>And</strong></td><td>Logical operators</td><td><strong>Price &lt; 100 &amp;&amp; Slider1.Value = 20</strong>or <strong>Price &lt; 100 And Slider1.Value = 20</strong></td><td>Logical conjunction, equivalent to the <strong><a href="https://learn.[microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d).com/function-logicals" data-linktype="relative-path">And</a></strong> function</td></tr><tr><td><strong>||</strong> or <strong>Or</strong></td><td><strong>Price &lt; 100 || Slider1.Value = 20</strong> or <strong>Price &lt; 100 Or Slider1.Value = 20</strong></td><td>Logical disjunction, equivalent to the <strong><a href="https://learn.microsoft.com/function-logicals" data-linktype="relative-path">Or</a></strong> function</td></tr><tr><td><strong>!</strong> or <strong>Not</strong></td><td><strong>!(Price &lt; 100)</strong> or <strong>Not (Price &lt; 100)</strong></td><td>Logical negation, equivalent to the


<strong><a href="https://learn.microsoft.com/function-logicals" data-linktype="relative-path">Not</a></strong> function</td></tr><tr><td><strong>exactin</strong></td><td><a href="https://learn.microsoft.com/#in-and-exactin-operators" data-linktype="self-bookmark">Membership operators</a></td><td><strong>Gallery1.Selected exactin SavedItems</strong></td><td>Belonging to a <a href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources#collections" data-linktype="absolute-path">collection</a> or a table</td></tr><tr><td><strong>exactin</strong></td><td><strong>"Windows" exactin “To display windows in the Windows operating system...”</strong></td><td>Substring test (case-sensitive)</td></tr><tr><td><strong>in</strong></td><td><strong>Gallery1.Selected in SavedItems</strong></td><td>Belonging to a collection or a table</td></tr><tr><td><strong>in</strong></td><td><strong>"The" in "The keyboard and the


monitor..."</strong></td><td>Substring test (case-insensitive)</td></tr><tr><td><strong>@</strong></td><td><a href="https://learn.[microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d).com/#disambiguation-operator" data-linktype="self-bookmark">Disambiguation operator</a></td><td><strong>MyTable[@fieldname]</strong></td><td>Field disambiguation</td></tr><tr><td><strong>@</strong></td><td><strong>[@MyVariable]</strong></td><td>Global disambiguation</td></tr><tr><td><strong>,</strong>[<a href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/global-apps" data-linktype="absolute-path">language dependent</a>]</td><td>List separator</td><td><strong>If( X &lt; 10, "Low", "Good" )</strong><strong>{ X: 12, Y: 32 }</strong><strong>[ 1, 2, 3 ]</strong></td><td>Separates:<ul><li>arguments in function calls</li><li>fields in a <a href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#elements-of-a-table" data-linktype="absolute-path">record</a></li><li>records in a


<a href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#inline-value-tables" data-linktype="absolute-path">table</a></li></ul>This character depends on the language.</td></tr><tr><td><strong>;</strong>[<a href="https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/global-apps" data-linktype="absolute-path">language dependent</a>]</td><td>Formula chaining</td><td><strong>Collect(T, A); Navigate(S1, "")</strong></td><td>Separate invocations of functions in behavior properties. The chaining operator depends on the language.</td></tr><tr><td><strong>As</strong></td><td><a href="https://learn.microsoft.com/#as-operator" data-linktype="self-bookmark">As operator</a></td><td><strong>AllCustomers As Customer</strong></td><td>Overrides <strong>ThisItem</strong> and <strong>ThisRecord</strong> in galleries and record scope functions. <strong>As</strong> is useful for providing a better, specific name and is


especially important in nested scenarios.</td></tr><tr><td><strong>Self</strong></td><td><a href="https://learn.[microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d).com/#self-and-parent-operators" data-linktype="self-bookmark">Self operator</a></td><td><strong>Self.Fill</strong></td><td>Access to properties of the current control</td></tr><tr><td><strong>Parent</strong></td><td><a href="https://learn.microsoft.com/#self-and-parent-operators" data-linktype="self-bookmark">Parent operator</a></td><td><strong>Parent.Fill</strong></td><td>Access to properties of a control container</td></tr><tr><td><strong>ThisItem</strong></td><td><a href="https://learn.microsoft.com/#thisitem-operator" data-linktype="self-bookmark">ThisItem operator</a></td><td><strong>ThisItem.FirstName</strong></td><td>Access to fields of a Gallery or form control</td></tr><tr><td><strong>ThisRecord</strong></td><td><a href="https://learn.microsoft.com/#thisrecord-operator" data-linktype="self-bookmark">ThisRecord


operator</a></td><td><strong>ThisRecord.FirstName</strong></td><td>Access to the complete record and individual fields of the record within <strong>ForAll</strong>, <strong>Sum</strong>, <strong>With</strong>, and other record scope functions. Can be overridden with the <strong>As</strong> operator.</td></tr></tbody></table></div>

Note

The **@** operator can also be used to validate the type of the record object against a data source. For example, `Collect(coll,Account@{'Account Number': 1111})`

Use the [in](https://learn.microsoft.com/operators#in-and-exactin-operators) and [exactin](https://learn.microsoft.com/operators#in-and-exactin-operators) operators to find a string in a [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources), such as a collection or an imported table. The [in](https://learn.microsoft.com/operators#in-and-exactin-operators) operator identifies matches regardless of case, and the [exactin](https://learn.microsoft.com/operators#in-and-exactin-operators) operator identifies matches only if they're capitalized the same way. Here's an example:

1. Create or import a collection named **Inventory**, and show it in a gallery, as the first procedure in [Show images and text in a gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/show-images-text-gallery-sort-filter) describes.

2. Set the [Items](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of the gallery to this formula: **Filter(Inventory, "E" in ProductName)**


The gallery shows all products except Callisto because the name of that product is the only one that doesn't contain the letter you specified.

3. Change the [Items](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of the gallery to this formula: **Filter(Inventory, "E" exactin ProductName)**

The gallery shows only Europa because only its name contains the letter that you specified in the case that you specified.

A few controls and functions apply formulas to individual records of a table. To refer to the individual record in a formula, use one of the following:


| Operator | Applies to | Description |
| --- | --- | --- |
| **ThisItem** | [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) control**[Edit form](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail)** control**[Display form](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-form-detail)** control | The default name for the current record in a **Gallery** or form control. |
| **ThisRecord** | [ForAll](https://learn.microsoft.com/function-forall), [Filter](https://learn.microsoft.com/function-filter-lookup), [With](https://learn.microsoft.com/function-with), [Sum](https://learn.microsoft.com/function-aggregates) and other [record scope](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#record-scope) functions | The default name for the current record in **ForAll** and other record scope functions. |
| **As** *name* | [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) control**[ForAll](https://learn.microsoft.com/function-forall)**, [Filter](https://learn.microsoft.com/function-filter-lookup), [With](https://learn.microsoft.com/function-with), [Sum](https://learn.microsoft.com/function-aggregates) and other record scope functions | Defines a *name* for the current record, replacing default **ThisItem** or **ThisRecord**. Use **As** to make formulas easier to understand and resolve ambiguity when nesting. |

For example, in the following **Gallery** control, the **Items** property is set to the **Employees** data source (such as the **Employees** table included with the [Northwind Traders sample](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/northwind-orders-canvas-overview)):

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

**ThisRecord** is used in functions that have a [record scope](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#record-scope). For example, we can use the **Filter** function with our gallery's **Items** property to only show first names that being with *M*:

```
Filter( Employees, StartsWith( ThisRecord.Employee.'First Name', "M" ) )
```

![Filtering the employees based on name, using ThisRecord.](https://learn.microsoft.com/media/operators/as-gallery-filter-thisrecord.png)

**ThisRecord** is optional and implied by using the fields directly, for example, in this case, we could have written:

```
Filter( Employees, StartsWith( 'First Name', "M" ) )
```

Although optional, using **ThisRecord** can make formulas easier to understand and may be required in ambiguous situations where a field name may also be a relationship name. **ThisRecord** is optional while **ThisItem** is always required.

Use **ThisRecord** to reference the whole record with **Patch**, **Collect**, and other record scope functions. For example, the following formula sets the status for all inactive employees to active:


```
With( { InactiveEmployees: Filter( Employees, Status = 'Status (Employees)'.Inactive ) },
      ForAll( InactiveEmployees,
              Patch( Employees, ThisRecord, { Status: 'Status (Employees)'.Active } ) ) )
```

Use the **As** operator to name a record in a gallery or record scope function, overriding the default **ThisItem** or **ThisRecord**. Naming the record can make your formulas easier to understand and may be required in nested situations to access records in other scopes.

For example, you can modify the **Items** property of our gallery to use **As** to identify that we are working with an Employee:

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

**As** can also be used with record scope functions to replace the default name **ThisRecord**. We can apply this to our previous example to clarify the record we're working with:


```
With( { InactiveEmployees: Filter( Employees, Status = 'Status (Employees)'.Inactive ) },
      ForAll( InactiveEmployees As Employee,
              Patch( Employees, Employee, { Status: 'Status (Employees)'.Active } ) ) )
```

When nesting galleries and record scope functions, **ThisItem** and **ThisRecord** always refers to the inner most scope, leaving records in outer scopes unavailable. Use **As** to make all record scopes available by giving each a unique name.

For example, this formula produces a chessboard pattern as a text string by nesting two **ForAll** functions:

```
Concat(
    ForAll( Sequence(8) As Rank,
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


- We start by iterating an unnamed table of 8 numbered records from the [Sequence](https://learn.microsoft.com/function-sequence) function. This loop is for each row of the board, which is commonly referred to as **Rank** and so we give it this name.

- For each row, we iterate another unnamed table of 8 columns, and we give the common name **File**.

- If **Rank.Value + File.Value** is an odd number, the square gets an **X**, otherwise a dot. This part of the formula is referencing both **ForAll** loops, made possible by using the **As** operator.

- [Concat](https://learn.microsoft.com/function-concatenate) is used twice, first to assemble the columns and then the rows, with a [Char(10)](https://learn.microsoft.com/function-char) thrown in to create a new line.

A similar example is possible with nested **Gallery** controls instead of **ForAll** functions. Let's start with the vertical gallery for the **Rank**. This gallery control will have an **Items** formula of:

```
Sequence(8) as Rank
```

![Illustration of the outer gallery that provides the Rank iteration.](https://learn.microsoft.com/media/operators/as-chessboard-rank.png)

Within this gallery, we'll place a horizontal gallery for the **File**, that will be replicated for each **Rank**, with an **Items** property of:

```
Sequence(8) as File
```

![Illustration of the inner gallery that provides the File iteration.](https://learn.microsoft.com/media/operators/as-chessboard-file.png)


And finally, within this gallery, we'll add a **Label** control that will be replicated for each **File** and each **Rank**. We'll size it to fill the entire space and use the **Fill** property to provide the color with this formula:

```
If( Mod( Rank.Value + File.Value, 2 ) = 1, Green, Beige )
```

![Label control within the two galleries that provides the alternating colors for the chessboard.](https://learn.microsoft.com/media/operators/as-chessboard-fill.png)

There are three ways to refer to a control and its properties within a formula:


| Method | Description |
| --- | --- |
| By control name | Any control can be referenced by name from anywhere within the app.<br><br>For example, **Label1.Fill** refers to the fill property of the control who's name is **Label1**. |
| **Self** operator | It's often convenient to reference another property of the same control when writing a formula. Instead of using an absolute reference by name, it's easier and more portable to use a relative reference to one_self_. The **Self** operator provides that easy access to the current control.<br><br>For example, **Self.Fill** refers to the fill color of the current control. |
| **Parent** operator | Some controls host other controls, such as the [Screen](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-screen) and [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) controls. The hosting control of the controls within it's called the *parent*. Like the **Self** operator, the **Parent** operator provides an easy relative reference to the container control.<br><br>For example, **Parent.Fill** refers to the fill property of the control that is the container for the current control. |


**Self** and **Parent** are operators and not properties on the controls themselves. Referring to **Parent.Parent**, **Self.Parent** or **Parent.Self** is not supported.

The names of variables, data sources, columns, and other objects can contain any [Unicode](https://en.wikipedia.org/wiki/Unicode).

Use single quotes around a name that contains a space or other special character. Use two single quotes together to represent one single quote in the name. Names that don't contain special characters don't require single quotes.

Here are some example column names you might encounter in a table, and how they're represented in a formula:

| Column name in a database | Column reference in a formula |
| --- | --- |
| SimpleName | `SimpleName` |
| NameWith123Numbers | `NameWith123Numbers` |
| Name with spaces | `'Name with spaces'` |
| Name with "double" quotes | `'Name with "double" quotes'` |
| Name with 'single' quotes | `'Name with ''single'' quotes'` |
| Name with an @ at sign | `'Name with an @ at sign'` |

Double quotes are used to [designate text strings](https://learn.microsoft.com/data-types#embedded-text).


Some data sources such as SharePoint and [Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d) Dataverse have two different names to refer to the same table or column of data:

- **Logical name** - A name that is guaranteed to be unique, doesn't change after being created, usually doesn't allow spaces or other special characters, and isn't localized into different languages. As a result, the name can be cryptic. These names are used by professional developers. For example, **cra3a_customfield**. This name may also be referred to as **schema name** or just **name**.

- **Display name** - A name that is user-friendly and intended to be seen by end users. This name may not be unique, may change over time, may contain spaces and any Unicode character, and may be localized into different languages. Corresponding to the example above, the display name may be **Custom Field** with space in between the words.


Since display names are easier to understand, [Canvas apps](https://app.getrecall.ai/item/c0c31deb-a498-40e4-bd4d-16f8d2fdd310) will suggest them as choices and not suggest logical names. Although logical names aren't suggested, they can still be used if typed indirectly.

For example, imagine you've added a **Custom Field** to a table in Dataverse. A logical name will be assigned for you by the system, which you can modify only when creating the field. The result would look similar to:

![Accounts table with Custom Field added, showing a display name of "Custom Field" and a logical name of "cr5e3_customfield."](https://learn.microsoft.com/media/operators/customfield_portal.png)

When authoring a reference to a field of Accounts, the suggestion will be made to use **'Custom Field'** since this is the display name. Single quotes must be used because this name has a space in it:

![Studio formula bar showing suggestions for field names of Accounts with the display name 'Custom Field' highlighted.](https://learn.microsoft.com/media/operators/customfield_suggest_display.png)

After selecting the suggestion, 'Custom Field' is shown in the formula bar and the data is retrieved:

![Studio formula bar showing the use of the display name 'Custom Field' for the field.](https://learn.microsoft.com/media/operators/customfield_display.png)

Although it isn't suggested, we could also use the logical name for this field. This will result in the same data being retrieved. Single quotes are not required since this name doesn't contain spaces or special characters:

![Studio formula bar showing the use of the logical name cr5e3_customfield for the field.](https://learn.microsoft.com/media/operators/customfield_logical.png)


Behind the scenes, a mapping is maintained between the display names seen in formulas and the underlying logical names. Since logical names must be used to interact with the data source, this mapping is used to convert from the current display name to the logical name automatically and that is what is seen in the network traffic. This mapping is also used to convert back to logical names to switch into new display names, for example, if a display name changes or a maker in a different language edits the app.

Note

Logical names are not translated when moving an app between environments. For Dataverse system table and field names, this should not be a problem as logical names are consistent across environments. But any custom fields, such as **cra3a_customfield** in this example above, may have a different environment prefix (**cra3a** in this case). Display names are preferred as they can be matched against display names in the new environment.


Since display names aren't unique, the same display name may appear more than once in the same table. When this happens, the logical name will be added to the end of the display name in parentheses for one of more of the conflicting names. Building on the example above, if there was a second field with the same display name of **Custom Field** with a logical name of **cra3a_customfieldalt** then the suggestions would show:

![Studio formula bar showing the use of the logical name cr5e3_customfieldalt to disambiguate the two versions of "Custom Field."](https://learn.microsoft.com/media/operators/customfield_suggest_alt.png)

Name disambiguation strings are added in other situations where name conflicts occur, such as the names of table, choices, and other Dataverse items.

Some functions create [record scopes](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#record-scope) for accessing the fields of table while processing each record, such as **Filter**, **AddColumns**, and **Sum**. Field names added with the record scope override the same names from elsewhere in the app. When this happens, you can still access values from outside the record scope with the **@** disambiguation operator:


- To access values from nested record scopes, use the **@** operator with the name of the table being operated upon using this pattern:*Table***[@***FieldName***]**

- To access global values, such as data sources, collections, and context variables, use the pattern **[@***ObjectName***]** (without a table designation).

For more information and examples, see [record scopes](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#record-scope).


