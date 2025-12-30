---
title: Microsoft Power Fx YAML Formula Grammar - Power Platform
tags: Low-Code Development
createdAt: Mon Dec 29 2025 20:29:58 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 20:30:05 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- Microsoft Power Fx uses a YAML formula grammar to represent formulas in a text format, with all expressions starting with a leading equal sign (=) for consistency with Excel.
- Single-line formulas are written in the form "Name: = Expression", while multiline formulas use YAML's block scalar indicators (|, |+, or |-) to span multiple lines.
- Components are instanced using YAML object notation, with the type of the object established using the "As" operator, and properties are added to communicate with the app in which they're hosted.


Detailed summary


## Introduction to Microsoft Power Fx and YAML Formula Language
- Microsoft Power Fx is the new name for the formula language used in canvas apps, and it has a well-established grammar for expressions based on Excel, with the addition of using YAML as the language for editing formula bindings as text.
- The formula language in YAML requires all expressions to begin with a leading equal sign =, which is consistent with Excel and helps to escape the formula language's syntax so that YAML doesn't attempt to parse it.
- The use of the leading equal sign = allows formulas to be differentiated from static scalar values, and it will be used to support both formulas and non-formulas in the same file in the future, across Microsoft Power Platform source files.
- Single-line formulas in YAML are written in the form Name : SPACE = Expression, where the space between the colon and the equal sign is required to be YAML-compliant, and the equal sign disrupts YAML's normal interpretation of the expression.

## Syntax Rules for Single-Line Formulas in YAML
- In single-line formulas, the number sign # and colon : are not allowed, even if they're in a quoted text string or identifier name, and to use these characters, a multiline formula must be used instead.
- Multiline formulas can be used by utilizing YAML's block scalar indicators, such as |, |+, or |-, which allow formulas to span multiple lines, and all lines that are part of the block must be indented at least one space in from the level of the first line.
- Components in YAML can be instanced using YAML object notation, where the type of the object is established with the As operator as a part of the left-side YAML tag, and objects can be nested for container controls.

## Component Definitions and Object Notation in YAML
- The Microsoft Power Fx overview provides an introduction to the language, and the canvas apps operators and identifiers documentation provides details on allowed names and the structure of an expression, which is essential for working with formulas in YAML.
- The Microsoft Power Fx YAML formula grammar is used to define components and their properties in the Power Platform, where a component can be any canvas component or control, but not base types such as Number.
- Component definitions can include properties that are added to the base type, and these properties can be used to communicate with the app in which the component is hosted, with the type of the formula implied by the type of the expression.

## Properties and Data Flow in Component Definitions
- Properties can be input properties, which provide a default value that can be modified by the maker, or output properties, which provide a calculation that is performed and cannot be modified by the maker, with all properties currently being data flow only and not containing side effects.
- The grammar uses a specific syntax, including the use of single or double quotation marks to wrap names that contain special characters, and the use of the colon (:) to separate the name from the component type, with examples including the Gallery and CanvasComponent base types.

## Handling Incompatibilities and Comments in YAML
- The Microsoft Power Fx and YAML grammars can be incompatible in certain cases, such as when using the number sign (#) character, which is treated as a comment by YAML, and errors will be thrown in these cases to avoid confusion, with alternative syntax such as YAML multiline forms available to avoid these issues.
- Comments in the YAML formula grammar are delimited by the number sign (#) for line comments, but these are not preserved, and instead, comments within a formula can be delimited by // characters or block comments with /* and */, with more information available on comments in the documentation.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/yaml-formula-grammar)
Note

[Microsoft Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) is the new name for the formula language for canvas apps. These articles are a work in progress as we extract the language from canvas apps, integrate it with other [Microsoft Power Platform](https://app.getrecall.ai/item/9f62b652-2cb9-45c6-8fd9-7c1a55d86cc9) products, and make it available as open source. Start with the [Microsoft Power Fx overview](https://learn.microsoft.com/overview) for an introduction to the language.

Microsoft Power Fx has a well-established grammar for expressions based on Excel. However, when used in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) and other hosts where UI provides the name-to-expression binding for a formula, there is no standard way of editing the formula binding as text.

We've selected the industry standard [YAML](https://yaml.org/spec/1.2/spec.html) as our language for this binding. There are already a large number of editors, tools, and libraries for working with [YAML](https://app.getrecall.ai/item/36b99961-3bf3-439c-9983-138339e7a81a). This article describes how we represent formulas in YAML.

At this time, we support only a restricted subset of YAML. Only the constructs described in this article are supported.


Not everything that defines a canvas app is represented here; additional information flows through other files that the tool produces and consumes.

First and foremost, all expressions must begin with a leading equal sign `=`:

```
Visible: =true
X: =34
Text: |
	="Hello, " &
	"World"
```

We use the `=` in this manner for three reasons:

- It's consistent with Excel, which uses a leading `=` to bind an expression to a cell.

- It effectively escapes the formula language's syntax so that [YAML](https://app.getrecall.ai/item/36b99961-3bf3-439c-9983-138339e7a81a) doesn't attempt to parse it. Normally, YAML would treat `text: 1:00` as minutes and seconds, converting it to a number. By inserting an `=`, YAML won't use its implicit typing rules and formulas won't be harmed. Using `=` covers most cases, but not all, and those exceptions are described in the following section, [Single-line formulas](https://learn.microsoft.com/#single-line-formulas).


- In the future, we will support both formulas (starts with `=`) and non-formulas (no `=`) in the same file, just as Excel does We can do this in YAML and non-YAML files alike across [Microsoft Power Platform](https://app.getrecall.ai/item/9f62b652-2cb9-45c6-8fd9-7c1a55d86cc9) source files. Anywhere a formula is supported, the leading `=` differentiates a [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) formula expression from a static scalar value.

Single-line formulas are written in the form:

*Name* `:` `SPACE` `=` *Expression*

The space between the colon and the equal sign is required to be YAML-compliant. The equal sign disrupts YAML's normal interpretation of the expression, allowing the rest of the line to be interpreted as [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6). For example:

```
Text1: ="Hello, World"
Text2: ="Hello " & ", " & "World"
Number1: =34
Boolean1: =true
Time1: =1:34
```


The number sign `#` and colon `:` aren't allowed anywhere in single-line formulas, even if they're in a quoted text string or identifier name. To use a number sign or colon, you must express the formula as a multiline formula. The number sign is interpreted as a comment in [YAML](https://app.getrecall.ai/item/36b99961-3bf3-439c-9983-138339e7a81a), and the colon is interpreted as a new name map in YAML. To add a comment to a single-line comment, use the [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) line comment starting with `//`.

Using normal YAML escaping with single quotes and C-like backslashes isn't supported; use a multiline formula instead. This is for consistency and to facilitate cut/paste between the formula bar in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) Studio and YAML source files.

See the canvas apps [operators and identifiers](https://learn.microsoft.com/reference/operators) documentation for details on allowed names and the structure of an expression.

Formulas can span multiple lines by using YAML's block scalar indicators:

*Name* `:` `SPACE` ( `|` or `|+` or `|-` )  `=` *Expression-Line*  *Expression-Line*  ...


All lines that are a part of the block must be indented at least one space in from the level of the first line.

For example:

```
Text1: |
    ="Hello, World"
Text2: |
    ="Hello" &
    "," &
    "World"
```

All forms of [YAML](https://app.getrecall.ai/item/36b99961-3bf3-439c-9983-138339e7a81a) multiline scalar notations are accepted on import, including `>+`, for example. However, to ensure that whitespace is properly preserved, only `|`, `|+`, or `|-` are produced.

Components are instanced by using YAML object notation. The type of the object is established with the `As` operator as a part of the left-side YAML tag. For container controls, objects can be nested.

*Name* `As` *Component-Type* [ `.` *Component-Template* ] `:`  ( *Single-Line-Formula* or *Multi-Line-Formula* or *Object-instance* )  ...

All lines that are a part of the block must be indented at least one space in from the level of the first line.

For example:


```
Gallery1 As Gallery.horizontalGallery:
    Fill: = Color.White
    Label1 As Label:
        Text: ="Hello, World"
        X: =20
        Y: =40
        Fill: |
            =If( Lower( Left( Self.Text, 6 ) ) = "error:",
                Color.Red,
                Color.Black
            )
```

*Component-Type* can be any canvas component or control. Base types, such as *Number*, aren't supported.

*Component-Template* is an optional specifier for components that have different templates, such as the Gallery. Not all components have templates.

If *Name* contains special characters and is wrapped with single quotation marks, the entire phrase to the left side of the colon will need to be escaped. This can be done in one of the following ways:

- Use single quotation marks to wrap the entire left side, which requires that the existing single quotation marks be used twice:```
'''A name with a space'' As Gallery':

```

```


- Use double quotation marks to wrap the entire left side, but be sure that there are no double quotation marks in the name:```
"'A name with a space' As Gallery":

```

```

Similarly, components are defined by creating an instance of one of the supported base types. The base types can't be instanced directly. Within an object definition, properties can be added to what the base type provides.

The supported base types are: CanvasComponent

Components use properties to communicate with the app in which they're hosted.

*Name* `:` ( *Single-Line-Expression* or *Multi-Line-Expression* )

The type of the formula is implied by the type of the expression.

For input properties, the expression provides the default to be inserted into the app when the component is instanced. The maker can modify this expression as they see fit, but can't change the type.

For output properties, the expression provides the calculation to be performed. The maker can't modify this expression, it's encapsulated in the component.


At this time, all properties are data flow only and can't contain side effects.

At this time, additional metadata about the property isn't defined here but is instead defined in the other files of the `.msapp` file, for example the property's description.

For example:

```
DateRangePicker As CanvasComponent:
    DefaultStart: |-
		=// input property, customizable default for the component instance
		Now()                      
    DefaultEnd: |-
		=// input property, customizable default for the component instance
		DateAdd( Now(), 1, Days )    
    SelectedStart: =DatePicker1.SelectedDate   // output property
    SelectedEnd: =DatePicker2.SelectedDate     // output property
```

[YAML](https://app.getrecall.ai/item/36b99961-3bf3-439c-9983-138339e7a81a) line comments delimited by the number sign `#` aren't preserved anywhere in the source format. Instead, within a formula, delimit line comments with `//` characters or block comments with `/*` and `*/`. More information: [Comments](https://learn.microsoft.com/expression-grammar#comments)


There are a few places where the [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) and YAML grammars are incompatible or might be confusing for a user. In these cases, an error is thrown.

For example, in the following:

```
Text: ="Hello #[PowerApps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685)"
Record: ={ a: 1, b: 2 }
```

the number sign `#` is treated as a comment by [YAML](https://app.getrecall.ai/item/36b99961-3bf3-439c-9983-138339e7a81a), even though it's embedded in what Excel considers a text string (wrapped by double quotation marks). To avoid confusion, this case will throw an error during import. A YAML multiline form can be used instead.

In the case of the value for `record`, YAML considers `a:` and `b:` to be another name map binding. YAML allows the same name map to be reused, with the last one silently overriding any previous definitions. Because this can be confusing for a low-code maker and can result in the loss of a property formula, an error is thrown if the same name is encountered twice.


