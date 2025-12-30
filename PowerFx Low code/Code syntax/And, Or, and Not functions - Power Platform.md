---
title: And, Or, and Not functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:14:03 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:14:53 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The And function returns true if all its arguments are true.
- The Or function returns true if any of its arguments are true.
- The Not function returns true if its argument is false and returns false if its argument is true.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-logicals)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Dataverse formula columns Model-driven apps Power Platform CLI Dataverse functions Power Pages

Boolean logic functions, commonly used to manipulate the results of comparisons and tests.

The **And** function returns **true** if all of its arguments are **true**.

The **Or** function returns **true** if any of its arguments are **true**.

The **Not** function returns **true** if its argument is **false**; it returns **false** if its argument is **true**.

These functions work the same way as they do in Excel. You can also use [operators](https://learn.microsoft.com/operators) to perform these same operations, using either Visual Basic or JavaScript syntax:

| Function notation | Visual Basic operator notation | JavaScript operator notation |
| --- | --- | --- |
| **And( x, y )** | **x And y** | **x && y** |
| **Or( x, y )** | **x Or y** | **x | y** |
| **Not( x )** | **Not x** | **! x** |


These functions work with logical values. You can't pass them a number or a string directly; instead, you must make a comparison or a test. For example, this logical formula **x > 1** evaluates to the Boolean value **true** if **x** is greater than **1**. If **x** is less than **1**, the formula evaluates to **false**.

**And**( *LogicalFormula1*, *LogicalFormula2* [, *LogicalFormula3*, ... ] ) **Or**( *LogicalFormula1*, *LogicalFormula2* [, *LogicalFormula3*, ... ] ) **Not**( *LogicalFormula* )

- *LogicalFormula(s)* - Required. Logical formulas to evaluate and operate on.

The examples in this section use these global variables:

- **a** = *false*

- **b** = *true*

- **x** = 10

- **y** = 100

- **s** = "Hello World"

To create these global variables in an app, insert a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control, and set its **OnSelect** property to this formula:

```
Set( a, false ); Set( b, true ); Set( x, 10 ); Set( y, 100 ); Set( s, "Hello World" )
```

Select the button (by clicking it while you hold down the Alt key), and then set the **Text** property of a [Label](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-box) control to a formula in the first column of the next table.


| Formula | Description | Result |
| --- | --- | --- |
| **And( a, b )** | Tests the values of **a** and **b**. One of the arguments is *false*, so the function returns *false*. | *false* |
| **a And b** | Same as the previous example, using Visual Basic notation. | *false* |
| **a && b** | Same as the previous example, using JavaScript notation. | *false* |
| **Or( a, b )** | Tests the values of **a** and **b**. One of the arguments is *true*, so the function returns *true*. | *true* |
| **a Or b** | Same as the previous example, using Visual Basic notation. | *true* |
| **a | b** | Same as the previous example, using JavaScript notation. | *true* |
| **Not( a )** | Tests the value of **a**. The argument is *false*, so the function returns the opposite result. | *true* |
| **Not a** | Same as the previous example, using Visual Basic notation. | *true* |
| **! a** | Same as the previous example, using JavaScript notation. | *true* |
| **Len( s ) < 20 And Not IsBlank( s )** | Tests whether the length of **s** is less than 20 and whether it isn't a **blank** value. The length is less than 20, and the value isn't blank. Therefore, the result is *true*. | *true* |
| **Or( Len( s ) < 10, x < 100, y < 100 )** | Tests whether the length of **s** is less than 10, whether **x** is less than 100, and whether **y** is less than 100. The first and third arguments are false, but the second one is true. Therefore, the function returns *true*. | *true* |
| **Not IsBlank( s )** | Tests whether **s** is *blank*, which returns *false*. **Not** returns the opposite of this result, which is *true*. | *true* |

