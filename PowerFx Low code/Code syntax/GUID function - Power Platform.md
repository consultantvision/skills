---
title: GUID function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:58:21 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:58:27 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The GUID function in Power Platform converts a GUID string to a GUID value or creates a new GUID value.
- The function accepts a string with 32 hexadecimal digits, with or without hyphens, and returns a GUID value that can be passed to a database like Microsoft Dataverse or Microsoft SQL Server.
- If no argument is specified, the function generates a new GUID using pseudo-random numbers, creating a version 4 IETF RFC 4122 GUID.


Detailed summary

- The GUID function in Power Platform is used to convert a string with the hexadecimal representation of a GUID into a GUID value that can be passed to a database, such as Microsoft Dataverse and Microsoft SQL Server, which use GUID values as keys.
- The GUID function can accept a string with 32 hexadecimal digits in one of two formats: with hyphens in standard locations, such as "123e4567-e89b-12d3-a456-426655440000", or without hyphens, such as "123e4567e89b12d3a456426655440000".
- If no argument is specified, the GUID function creates a new GUID using pseudo-random numbers to generate a version 4 IETF RFC 4122 GUID.
- When converting a GUID value to a string, it is automatically converted to a hexadecimal string with hyphens and lowercase letters, such as "f9168c5e-ceb2-4faa-b6bf-329bf39fa1e4".
- The GUID function is volatile when used without an argument, meaning it returns a different value each time it is evaluated, but in a data-flow formula, it only returns a different value if the formula is reevaluated.
- The GUID function can be used in various contexts, such as setting the Text property of a label control to a GUID, generating a new GUID each time a user changes the value of a Text input control, or creating a table of GUIDs using the ForAll function.
- To return a GUID value based on a hexadecimal string representation, the GUID function can be used with a string argument, such as GUID("0f8fad5b-d9cb-469f-a165-70867728950e"), or without hyphens, such as GUID("0f8fad5bd9cb469fa16570867728950e").
- The GUID function is useful for debugging purposes, as it can help generate unique identifiers for records or items in a database, and can be used in formulas, such as Patch, to set the value of a field to a specific GUID.
- Examples of using the GUID function include setting the Status field of a new database record to a well-established value, showing the value of the Status field in a Label control, creating a single-column table of GUIDs using the ForAll function, and generating a single GUID using the Set function.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-guid)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions

Convert a GUID ([globally unique identifier](https://en.wikipedia.org/wiki/Universally_unique_identifier)) string to a GUID value, or create a new GUID value.

Use the **GUID** function to convert a string with the hexadecimal representation of a GUID into a GUID value you can pass to a database. Database systems like Microsoft Dataverse and [SQL Server](https://app.getrecall.ai/item/450d8bdf-1741-4a8d-81e9-60d9e5b72b55) use GUID values as keys.

The string can have uppercase or lowercase letters, but it must be 32 hexadecimal digits in one of these formats:

- **"123e4567-e89b-12d3-a456-426655440000"** (hyphens in standard locations)

- **"123e4567e89b12d3a456426655440000"** (no hyphens)

If you don't specify an argument, the function creates a new GUID.

To convert a GUID value to a string, use it in a string context. The GUID value converts to a hexadecimal string with hyphens and lowercase letters.


When generating a new GUID, the function uses pseudo-random numbers to create a version 4 [IETF RFC 4122](https://www.ietf.org/rfc/rfc4122.txt) GUID. When converting a string to a GUID, the function supports any GUID version by accepting any string of 32 hexadecimal digits.

**GUID** is a volatile function when used without an argument. Each time the function is evaluated, it returns a different value.

When you use a volatile function in a data-flow formula, it returns a different value only if the formula is reevaluated. If nothing else changes in the formula, it keeps the same value while your app is open.

For example, if you set the **Text** property of a label control to **GUID()**, it doesn't change while your app is active. You get a different value only when you close and reopen the app.

The function is reevaluated if it's part of a formula where something else changes. For example, if you set the **Text** property of a **Label** control to this formula, a GUID is generated each time the user changes the value of the **Text input** control:


**TextInput1.Text & " " & GUID()**

When you use **GUID** in a [behavior formula](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth), it's evaluated each time the formula is evaluated. For more information, see the examples later in this topic.

**GUID**( [ *GUIDString* ] )

- *GUIDString* – Optional. A text string that has the hexadecimal representation of a GUID. If you don't supply a string, the function creates a new GUID.

**GUID**( *Dynamic* )

- *Dynamic* – Required. [Dynamic](https://learn.microsoft.com/untyped-object) value that represents a GUID. Acceptable values depend on the untyped provider. For [JSON](https://learn.microsoft.com/function-parsejson), the dynamic value is expected to be a GUID represented as a JSON string.

To return a GUID value based on the hexadecimal string representation:

```
GUID( "0f8fad5b-d9cb-469f-a165-70867728950e" )
```

You can also provide the GUID string without hyphens. This formula returns the same GUID value:

```
GUID( "0f8fad5bd9cb469fa16570867728950e" )
```

Used in context, to set the **Status** field of a new database record to a well-established value:

```
Patch( Products, Default( Products ), { Status: GUID( "F9168C5E-CEB2-4faa-B6BF-329BF39FA1E4" ) } )
```


You probably don't want to show GUIDs to users, but GUIDs can help you debug your app. To show the value of the **Status** field in the record you created in the previous example, set the **Text** property of a **Label** control to this formula:

```
First( Products ).Status
```

The **Label** control shows **f9168c5e-ceb2-4faa-b6bf-329bf39fa1e4**.

1. Set the [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control to this formula:

```
ClearCollect( NewGUIDs, ForAll( Sequence(5), GUID() ) )
```

This formula creates a single-column table that's used to iterate five times, resulting in five GUIDs.

2. Add a [Data table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-data-table) control, set its **Items** property to **NewGUIDs**, and show the **Value** field.

3. Hold down the Alt key and select the button.

The data table shows a list of GUIDs:

![A screen showing a data table with five different GUID values.](https://learn.microsoft.com/media/function-guid/guid-collection-1.png)

4. Select the button again to show a new list of GUIDs:

![The same screen showing a data table with a new set of five different GUID values.](https://learn.microsoft.com/media/function-guid/guid-collection-2.png)

To generate a single GUID instead of a table, use this formula:

```
Set( NewGUID, GUID() )
```

