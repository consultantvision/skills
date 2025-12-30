---
title: Microsoft Power Fx expression grammar - Power Platform
tags: Low-Code Development
createdAt: Mon Dec 29 2025 20:27:18 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 20:27:26 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- Microsoft Power Fx is a formula language for canvas apps, based on formulas that bind a name to an expression, similar to Excel worksheets.
- The language consists of expressions, which are made up of literals, identifiers, operators, and references, and can be used to create formulas, function calls, and inline records and tables.
- The grammar of Power Fx is defined using grammar productions, which describe the possible expansions of non-terminal symbols into sequences of non-terminal or terminal symbols, covering elements such as whitespace, comments, literals, identifiers, and operators.


Detailed summary


## Introduction to Power Fx and Grammar Structure
- Microsoft Power Fx is the new name for the formula language for canvas apps, and it is based on formulas that bind a name to an expression, which is recalculated when inbound dependencies change, similar to Excel worksheets.
- The grammar covered in the document focuses on the expression part of the formula, and binding to a name to create a formula depends on how Power Fx is integrated with other Microsoft Power Platform products.
- The lexical and syntactic grammars are presented using grammar productions, where non-terminal symbols are shown in italic type and terminal symbols are shown in a fixed-width font, and each production defines a non-terminal symbol and its possible expansions.
- The grammar productions are used to define the structure of Power Fx expressions, including the use of optional symbols, alternatives, and shorthand notation, such as the "opt" subscript to indicate an optional symbol and the "one of" phrase to list multiple alternatives on a single line.

## Whitespace and Comments in Power Fx
- The lexical-unit production defines the lexical grammar for a Microsoft Power Fx expression, which consists of a stream of Whitespace, Comment, and Token elements, with only Token elements being significant in the syntactic grammar.
- Whitespace is used to separate comments and tokens within a Microsoft Power Apps document and includes various Unicode space separators, line separators, and other characters, such as horizontal tab, line feed, and carriage return.
- Two forms of comments are supported in Power Fx: single-line comments that start with // and extend to the end of the source line, and delimited comments that start with /* and end with */ and can span multiple lines.

## Comment Syntax and Rules
- The document provides a comprehensive overview of the Microsoft Power Fx expression grammar, including the lexical and syntactic grammars, and is intended to be used as a reference for working with Power Fx in various Microsoft Power Platform products, such as Power Apps.
- The Microsoft Power Fx expression grammar includes comments, which can be either single-line comments or delimited comments, and comments are not nested, meaning that the character sequences /* and */ have no special meaning within a single-line comment, and the character sequences // and /* have no special meaning within a delimited comment.
- Single-line comments are denoted by the // symbol, followed by any Unicode characters except a NewLineCharacter, and delimited comments are denoted by the /* and */ symbols, with any Unicode characters except * (asterisk) allowed between the /* and */ symbols.
- Comments are not processed within text-literal strings, and the character sequences /* and */ have no special meaning within a single-line comment, and the character sequences // and /* have no special meaning within a delimited comment, as shown in the examples provided, which include two delimited comments and three single-line comments.

## Literals in Power Fx Expressions
- A literal is a source code representation of a value, and there are three types of literals: LogicalLiteral, NumberLiteral, and TextLiteral, where LogicalLiteral is used to write the values true and false, NumberLiteral is used to write a numeric value, and TextLiteral is used to write a sequence of Unicode characters.
- NumberLiteral can be written in three different formats: DecimalDigits with an optional ExponentPart, DecimalDigits with a DecimalSeparator and optional DecimalDigits and ExponentPart, or a DecimalSeparator with DecimalDigits and an optional ExponentPart, and DecimalDigits are composed of one or more DecimalDigit characters, which can be any of the digits 0 through 9.
- TextLiteral is used to write a sequence of Unicode characters and produce a text value, and text literals are enclosed in double quotation marks, with double quotation marks escaped by repeating them, as shown in the example "The ""quoted"" text", which produces the text value "The "quoted" text".

## Identifiers and Identifier Syntax
- An identifier is a name used to refer to a value, and identifiers can be either regular identifiers or single quoted identifiers, although the specific syntax for identifiers is not fully defined in this section of the document.
- The Microsoft Power Fx expression grammar defines the rules for identifiers, which are names given to variables, tables, and other elements in Microsoft Power Apps, and an identifier is defined as an IdentifierName that is not an Operator or ContextKeyword.
- The IdentifierName is composed of an IdentifierStartCharacter followed by optional IdentifierContinueCharacters, and the IdentifierStartCharacter can be a LetterCharacter or an underscore, while the IdentifierContinueCharacter can be a LetterCharacter, a DecimalDigitCharacter, a ConnectingCharacter, a CombiningCharacter, or a FormattingCharacter.
- A single quoted identifier, denoted by surrounding single quotation marks, can contain any sequence of Unicode characters, including keywords, whitespace, comments, and operators, and single quotation mark characters are supported with an escape sequence of two single quotation marks.
- DisambiguatedIdentifiers are used to clarify the meaning of an identifier, and they include TableColumnIdentifiers, which are used to refer to a column in a table, and GlobalIdentifiers, which are used to refer to a global variable or function.

## Context Keywords and Separators
- ContextKeywords are reserved words that have a specific meaning in Microsoft Power Apps, and they include Parent, Self, ThisItem, and ThisRecord, and Power Apps identifiers are case-sensitive, but the authoring tool will automatically change them to the correct case when a formula is being written.
- The DecimalSeparator, ListSeparator, and ChainingSeparator are used to separate decimal numbers, lists, and chained operations, respectively, and their values depend on the language being used, with the DecimalSeparator being a dot or a comma, the ListSeparator being a comma or a semicolon, and the ChainingSeparator being a semicolon or a double semicolon.

## Operators and Expression Operators
- Operators are used in formulas to describe operations involving one or more operands, and they are used to perform calculations, comparisons, and other operations, such as the + operator used to add two operands.
- The Microsoft Power Fx expression grammar defines various operators, including BinaryOperator, BinaryOperatorRequiresWhitespace, PrefixOperator, PrefixOperatorRequiresWhitespace, and PostfixOperator, which are used to construct expressions in the Power Platform.
- The BinaryOperator includes a range of operators such as =, <, <=, >, >=, <>, +, -, *, /, ^, &, &&, ||, in, and exactin, which are used for comparison, arithmetic, and logical operations.
- The BinaryOperatorRequiresWhitespace and PrefixOperatorRequiresWhitespace are specific operators that require whitespace, including And, Or, and Not, which are used to separate keywords and ensure correct syntax.
- The PrefixOperator includes the ! operator, while the PostfixOperator includes the % operator, and the ReferenceOperator includes . and !, which are used to access properties and navigate through data structures.

## References and Expression Constructs
- A Reference is constructed using a BaseReference, which can be an Identifier, DisambiguatedIdentifier, or ContextKeyword, followed by a ReferenceOperator and a ReferenceList, which can include multiple Identifiers separated by ReferenceOperators.
- The grammar also defines InlineRecord and InlineTable, which are used to create records and tables inline, using { } and [ ] respectively, and can include lists of key-value pairs or expressions separated by ListSeparators.
- An Expression can take various forms, including Literal, Reference, InlineRecord, InlineTable, FunctionCall, and nested expressions using parentheses, as well as PrefixOperator, PostfixOperator, and BinaryOperator expressions.

## Function Calls and Chained Expressions
- A ChainedExpression allows for chaining multiple expressions together using a ChainingSeparator, and a FunctionCall consists of a FunctionIdentifier followed by an optional list of FunctionArguments, which can be ChainedExpressions separated by ListSeparators.
- The FunctionIdentifier can be a simple Identifier or a nested identifier using the . operator, and the FunctionArguments can include multiple ChainedExpressions separated by ListSeparators, allowing for flexible and expressive function calls in the Power Platform.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/expression-grammar)
Note

[Microsoft Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) is the new name for the formula language for canvas apps. These articles are a work in progress as we extract the language from canvas apps, integrate it with other [Microsoft Power Platform](https://app.getrecall.ai/item/9f62b652-2cb9-45c6-8fd9-7c1a55d86cc9) products, and make it available as open source. Start with the [Microsoft Power Fx overview](https://learn.microsoft.com/overview) for an introduction to the language.

Microsoft Power Fx is based on formulas that bind a name to an expression. Just like in Excel worksheets, as inbound dependencies to the expression change, the expression is recalculated and the value of the name changes, possibly cascading the recalculation into other formulas.


This grammar covers the expression part of the formula. Binding to a name to create a formula is dependent on how Power Fx is integrated. In worksheets, the binding syntax isn't exposed, it's implied by the location where the expression is written—for example, entering `=B1` in the A1 cell. In some cases, no binding is required at all and Power Fx is used as an expression evaluator, for example in supporting calculated columns of a database table. For [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685), the binding is implied when working in Power Apps Studio with [a serialization format based on YAML for use outside Power Apps Studio](https://learn.microsoft.com/yaml-formula-grammar).

The lexical and syntactic grammars are presented by using grammar productions. Each grammar production defines a non-terminal symbol and the possible expansions of that non-terminal symbol into sequences of non-terminal or terminal symbols. In grammar productions, non-terminal symbols are shown in italic type, and terminal symbols are shown in a fixed-width font.


The first line of a grammar production is the name of the non-terminal symbol being defined, followed by a colon. Each successive indented line contains a possible expansion of the non-terminal symbol given as a sequence of non-terminal or terminal symbols. For example, the production:

*GlobalIdentifier* **:**     `[@` *Identifier* `]`

defines a *GlobalIdentifier* to consist of the token `[@`, followed by an *Identifier*, followed by the token `]`.

When there is more than one possible expansion of a non-terminal symbol, the alternatives are listed on separate lines. The subscript "opt" is used to indicate an optional symbol. For example, the production:

*FunctionCall* **:**     *FunctionIdentifier* `(` _FunctionArguments_opt `)`

is shorthand for:

*FunctionCall* **:**     *FunctionIdentifier* `(` `)`     *FunctionIdentifier* `(` *FunctionArguments* `)`


Alternatives are normally listed on separate lines, though in cases where there are many alternatives, the phrase "one of" might precede a list of expansions given on a single line. This is simply shorthand for listing each of the alternatives on separate lines.

For example, the production:

*DecimalDigit* **:** **one of**     `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`

is shorthand for:

*DecimalDigit* **:**     `0`     `1`     `2`     `3`     `4`     `5`     `6`     `7`     `8`     `9`

The lexical-unit production defines the lexical grammar for a [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) expression. Every valid Power Fx expression conforms to this grammar.

*ExpressionUnit* **:**     _[ExpressionElements](https://learn.microsoft.com/#ExpressionElements)_opt

*ExpressionElements* **:**     [ExpressionElement](https://learn.microsoft.com/#ExpressionElement)     [ExpressionElement](https://learn.microsoft.com/#ExpressionElement) _[ExpressionElements](https://learn.microsoft.com/#ExpressionElements)_opt

*ExpressionElement* **:**     [Whitespace](https://learn.microsoft.com/#Whitespace)     [Comment](https://learn.microsoft.com/#Comment)

At the lexical level, a [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) expression consists of a stream of *Whitespace*, *Comment*, and *Token* elements. Each of these productions is covered in the following sections. Only *Token* elements are significant in the syntactic grammar.


Whitespace is used to separate comments and tokens within a [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) document.

*Whitespace* **:**     any Unicode Space separator (class Zs)     any Unicode Line separator (class Zl)     any Unicode Paragraph separator (class Zp)     Horizontal tab character (U+0009)     Line feed character (U+000A)     Vertical tab character (U+000B)     Form feed character (U+000C)     Carriage return character (U+000D)     Next line character (U+0085)

Two forms of comments are supported:

- Single-line comments that start with the characters `//` and extend to the end of the source line.

- Delimited comments that start with the characters `/*` and end with the characters `*/`. Delimited comments can span multiple lines.

*Comment* **:**     [DelimitedComment](https://learn.microsoft.com/#DelimitedComment)     [SingleLineComment](https://learn.microsoft.com/#SingleLineComment)

*SingleLineComment* **:**     `//` _[SingleLineCommentCharacters](https://learn.microsoft.com/#SingleLineCommentCharacters)_opt

*SingleLineCommentCharacters* **:**     [SingleLineCommentCharacter](https://learn.microsoft.com/#SingleLineCommentCharacter)     [SingleLineCommentCharacter](https://learn.microsoft.com/#SingleLineCommentCharacter) _[SingleLineCommentCharacters](https://learn.microsoft.com/#SingleLineCommentCharacters)_opt


*SingleLineCommentCharacter* **:**     any Unicode characters except a NewLineCharacter

*DelimitedComment* **:**     `/*` _[DelimitedCommentCharacters](https://learn.microsoft.com/#DelimitedCommentCharacters)_opt `*/`

*DelimitedCommentCharacters* **:**     [DelimitedCommentCharactersNoAsterisk](https://learn.microsoft.com/#DelimitedCommentCharactersNoAsterisk) _[DelimitedCommentCharacters](https://learn.microsoft.com/#DelimitedCommentCharacters)_opt     `*` [DelimitedCommentAfterAsteriskCharacters](https://learn.microsoft.com/#DelimitedCommentAfterAsteriskCharacters)

*DelimitedCommentAfterAsteriskCharacters* **:**     [DelimitedCommentNoSlashAsteriskCharacter](https://learn.microsoft.com/#DelimitedCommentNoSlashAsteriskCharacter) _[DelimitedCommentCharacters](https://learn.microsoft.com/#DelimitedCommentCharacters)_opt     `*` [DelimitedCommentAfterAsteriskCharacters](https://learn.microsoft.com/#DelimitedCommentAfterAsteriskCharacters)

*DelimitedCommentCharactersNoAsterisk* **:**     any Unicode character except * (asterisk)

*DelimitedCommentNoSlashAsteriskCharacter* **:**     any Unicode character except a / (slash) or * (asterisk)

Comments aren't nested. The character sequences `/*` and `*/` have no special meaning within a single-line comment, and the character sequences `//` and `/*` have no special meaning within a delimited comment.

Comments aren't processed within text-literal strings.

The following example includes two delimited comments:


```
/* Hello, world
*/
"Hello, world"    /* This is an example of a text literal */
```

The following examples include three single-line comments:

```
// Hello, world
//
"Hello, world"    // This is an example of a text literal
```

A *literal* is a source code representation of a value.

*Literal* **:**     [LogicalLiteral](https://learn.microsoft.com/#LogicalLiteral)     [NumberLiteral](https://learn.microsoft.com/#NumberLiteral)     [TextLiteral](https://learn.microsoft.com/#TextLiteral)

A *logical literal* is used to write the values true and false, and produce a logical value.

*LogicalLiteral* **:** **one of**     `true` `false`

A *number literal* is used to write a numeric value and produce a number value.

*NumberLiteral* **:**     [DecimalDigits](https://learn.microsoft.com/#DecimalDigits) _[ExponentPart](https://learn.microsoft.com/#ExponentPart)_opt     [DecimalDigits](https://learn.microsoft.com/#DecimalDigits) [DecimalSeparator](https://learn.microsoft.com/#DecimalSeparator) _[DecimalDigits](https://learn.microsoft.com/#DecimalDigits)_opt _[ExponentPart](https://learn.microsoft.com/#ExponentPart)_opt     [DecimalSeparator](https://learn.microsoft.com/#DecimalSeparator) [DecimalDigits](https://learn.microsoft.com/#DecimalDigits) _[ExponentPart](https://learn.microsoft.com/#ExponentPart)_opt

*DecimalDigits* **:**     [DecimalDigit](https://learn.microsoft.com/#DecimalDigit)     [DecimalDigits](https://learn.microsoft.com/#DecimalDigits) [DecimalDigit](https://learn.microsoft.com/#DecimalDigit)

*DecimalDigit* **:** **one of**     `0` `1` `2` `3` `4` `5` `6` `7` `8` `9`

*ExponentPart* **:**     [ExponentIndicator](https://learn.microsoft.com/#ExponentIndicator) _[Sign](https://learn.microsoft.com/#Sign)_opt [DecimalDigits](https://learn.microsoft.com/#DecimalDigits)

*ExponentIndicator* **:** **one of**     `e` `E`

*Sign* **:** **one of**     `+` `-`


A *text literal* is used to write a sequence of Unicode characters and produce a text value. Text literals are enclosed in double quotation marks. To include double quotation marks in the text value, repeat the double quotation marks, as shown in the following example:

```
"The ""quoted"" text" // The "quoted" text
```

*TextLiteral* **:**     `"` _[TextLiteralCharacters](https://learn.microsoft.com/#TextLiteralCharacters)_opt `"`

*TextLiteralCharacters* **:**     [TextLiteralCharacter](https://learn.microsoft.com/#TextLiteralCharacter) _[TextLiteralCharacters](https://learn.microsoft.com/#TextLiteralCharacters)_opt

*TextLiteralCharacter* **:**     [TextCharacterNoDoubleQuote](https://learn.microsoft.com/#TextCharacterNoDoubleQuote)     [DoubleQuoteEscapeSequence](https://learn.microsoft.com/#DoubleQuoteEscapeSequence)

*TextCharacterNoDoubleQuote* **:**     any Unicode code point except double quote

*DoubleQuoteEscapeSequence* **:**     `"` `"`

An *identifier* is a name used to refer to a value. Identifiers can either be regular identifiers or single quoted identifiers.

*Identifier* **:**     [IdentifierName](https://learn.microsoft.com/#IdentifierName) **but** **not** [Operator](https://learn.microsoft.com/#Operator) **or** [ContextKeyword](https://learn.microsoft.com/#ContextKeyword)

*IdentifierName* **:**     [IdentifierStartCharacter](https://learn.microsoft.com/#IdentifierStartCharacter) _[IdentifierContinueCharacters](https://learn.microsoft.com/#IdentifierContinueCharacters)_opt     `'` [SingleQuotedIdentifier](https://learn.microsoft.com/#SingleQuotedIdentifier) `'`

*IdentifierStartCharacter* **:**     [LetterCharacter](https://learn.microsoft.com/#LetterCharacter)     `_`


*IdentifierContinueCharacter* **:**     [IdentifierStartCharacter](https://learn.microsoft.com/#IdentifierStartCharacter)     [DecimalDigitCharacter](https://learn.microsoft.com/#DecimalDigitCharacter)     [ConnectingCharacter](https://learn.microsoft.com/#ConnectingCharacter)     [CombiningCharacter](https://learn.microsoft.com/#CombiningCharacter)     [FormattingCharacter](https://learn.microsoft.com/#FormattingCharacter)

*IdentifierContinueCharacters* **:**     [IdentifierContinueCharacter](https://learn.microsoft.com/#IdentifierContinueCharacter) _[IdentifierContinueCharacters](https://learn.microsoft.com/#IdentifierContinueCharacters)_opt

*LetterCharacter* **:**     any Unicode character of the class **Uppercase letter** (**Lu**) or **Lowercase letter** (**Ll**)     any Unicode character of the class **Titlecase letter** (**Lt**)     any Unicode character of the class **Letter modifier** (**Lm**) or **Letter other** (**Lo**)     any Unicode character of the class **Number letter** (**Nl**)

*CombiningCharacter* **:**     any Unicode character of the class **Non-spacing mark** (**Mn**) or **Spacing combining mark** (**Mc**)

*DecimalDigitCharacter* **:**     any Unicode character of the class **Decimal digit** (**Nd**)

*ConnectingCharacter* **:**     any Unicode character of the class **Connector punctuation** (**Pc**)

*FormattingCharacter* **:**     any Unicode character of the class **Format** (**Cf**)


A *single quoted identifier* can contain any sequence of Unicode characters to be used as an identifier, including keywords, whitespace, comments, and operators. Single quotation mark characters are supported with an escape sequence of two single quotation marks.

*SingleQuotedIdentifier* **:**     [SingleQuotedIdentifierCharacters](https://learn.microsoft.com/#SingleQuotedIdentifierCharacters)

*SingleQuotedIdentifierCharacters* **:**     [SingleQuotedIdentifierCharacter](https://learn.microsoft.com/#SingleQuotedIdentifierCharacter) _[SingleQuotedIdentifierCharacters](https://learn.microsoft.com/#SingleQuotedIdentifierCharacters)_opt

*SingleQuotedIdentifierCharacter* **:**     [TextCharactersNoSingleQuote](https://learn.microsoft.com/#TextCharactersNoSingleQuote)     [SingleQuoteEscapeSequence](https://learn.microsoft.com/#SingleQuoteEscapeSequence)

*TextCharactersNoSingleQuote* **:**     any Unicode character except ' (U+0027)

*SingleQuoteEscapeSequence* **:**     `'` `'`

*DisambiguatedIdentifier:*     [TableColumnIdentifier](https://learn.microsoft.com/#TableColumnIdentifier)     [GlobalIdentifier](https://learn.microsoft.com/#GlobalIdentifier)

*TableColumnIdentifier* **:**     [Identifier](https://learn.microsoft.com/#Identifier) `[@` [Identifier](https://learn.microsoft.com/#Identifier) `]`

*GlobalIdentifier:*     `[@` [Identifier](https://learn.microsoft.com/#Identifier) `]`

*ContextKeyword:*     `Parent`     `Self`     `ThisItem`     `ThisRecord`


[Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) identifiers are case-sensitive. The authoring tool will automatically change them to the correct case when a formula is being written.

*DecimalSeparator:*     `.` (dot) for languages that use a dot as the separator for decimal numbers, for example `1.23`     `,` (comma) for languages that use a comma as the separator for decimal numbers, for example `1,23`

*ListSeparator:*     `,` (comma) if [DecimalSeparator](https://learn.microsoft.com/#DecimalSeparator) is `.` (dot)     `;` (semicolon) if [DecimalSeparator](https://learn.microsoft.com/#DecimalSeparator) is `,` (comma)

*ChainingSeparator:*     `;` (semicolon) if [DecimalSeparator](https://learn.microsoft.com/#DecimalSeparator) is `.` (dot)     `;;` (double semicolon) if [DecimalSeparator](https://learn.microsoft.com/#DecimalSeparator) is `,` (comma)

Operators are used in formulas to describe operations involving one or more operands. For example, the expression `a + b` uses the `+` operator to add the two operands `a` and `b`.

*Operator:*     [BinaryOperator](https://learn.microsoft.com/#BinaryOperator)     [BinaryOperatorRequiresWhitespace](https://learn.microsoft.com/#BinaryOperatorRequiresWhitespace)     [PrefixOperator](https://learn.microsoft.com/#PrefixOperator)     [PrefixOperatorRequiresWhitespace](https://learn.microsoft.com/#PrefixOperatorRequiresWhitespace)     [PostfixOperator](https://learn.microsoft.com/#PostfixOperator)

*BinaryOperator:* **one of**     `=` `<` `<=` `>` `>=` `<>`     `+` `-` `*` `/` `^`     `&`     `&&` `||`     `in` `exactin`


*BinaryOperatorRequiresWhitespace:*     `And` [Whitespace](https://learn.microsoft.com/#Whitespace)     `Or` [Whitespace](https://learn.microsoft.com/#Whitespace)

*PrefixOperator:*     `!`

*PrefixOperatorRequiresWhitespace:*     `Not` [Whitespace](https://learn.microsoft.com/#Whitespace)

*PostfixOperator:*     `%`

*ReferenceOperator:* **one of**     `.` `!`

*Reference:*     [BaseReference](https://learn.microsoft.com/#BaseReference)     [BaseReference](https://learn.microsoft.com/#BaseReference) [ReferenceOperator](https://learn.microsoft.com/#ReferenceOperator) [ReferenceList](https://learn.microsoft.com/#ReferenceList)

*BaseReference:*     [Identifier](https://learn.microsoft.com/#Identifier)     [DisambiguatedIdentifier](https://learn.microsoft.com/#DisambiguatedIdentifier)     [ContextKeyword](https://learn.microsoft.com/#ContextKeyword)

*ReferenceList:*     [Identifier](https://learn.microsoft.com/#Identifier)     [Identifier](https://learn.microsoft.com/#Identifier) [ReferenceOperator](https://learn.microsoft.com/#ReferenceOperator) [ReferenceList](https://learn.microsoft.com/#ReferenceList)

*InlineRecord:*     `{` _[InlineRecordList](https://learn.microsoft.com/#InlineRecordList)_opt `}`

*InlineRecordList:*     [Identifier](https://learn.microsoft.com/#Identifier) `:` [Expression](https://learn.microsoft.com/#Expression)     [Identifier](https://learn.microsoft.com/#Identifier) `:` [Expression](https://learn.microsoft.com/#Expression) [ListSeparator](https://learn.microsoft.com/#ListSeparator) [InlineRecordList](https://learn.microsoft.com/#InlineRecordList)

*InlineTable:*     `[` _[InlineTableList](https://learn.microsoft.com/#InlineTableList)_opt `]`

*InlineTableList:*     [Expression](https://learn.microsoft.com/#Expression)     [Expression](https://learn.microsoft.com/#Expression) [ListSeparator](https://learn.microsoft.com/#ListSeparator) [InlineTableList](https://learn.microsoft.com/#InlineTableList)

*Expression:*     [Literal](https://learn.microsoft.com/#Literal)     [Reference](https://learn.microsoft.com/#Reference)     [InlineRecord](https://learn.microsoft.com/#InlineRecord)     [InlineTable](https://learn.microsoft.com/#InlineTable)     [FunctionCall](https://learn.microsoft.com/#FunctionCall)     `(` [Expression](https://learn.microsoft.com/#Expression) `)`     [PrefixOperator](https://learn.microsoft.com/#PrefixOperator) [Expression](https://learn.microsoft.com/#Expression)     [Expression](https://learn.microsoft.com/#Expression) [PostfixOperator](https://learn.microsoft.com/#PostfixOperator)     [Expression](https://learn.microsoft.com/#Expression) [BinaryOperator](https://learn.microsoft.com/#BinaryOperator) [Expression](https://learn.microsoft.com/#Expression)


*ChainedExpression:*     [Expression](https://learn.microsoft.com/#Expression)     [Expression](https://learn.microsoft.com/#Expression) [ChainingSeparator](https://learn.microsoft.com/#ChainingSeparator) _[ChainedExpression](https://learn.microsoft.com/#ChainedExpression)_opt

*FunctionCall:*     [FunctionIdentifier](https://learn.microsoft.com/#FunctionIdentifier) `(` _[FunctionArguments](https://learn.microsoft.com/#FunctionArguments)_opt `)`

*FunctionIdentifier:*     [Identifier](https://learn.microsoft.com/#Identifier)     [Identifier](https://learn.microsoft.com/#Identifier) `.` [FunctionIdentifier](https://learn.microsoft.com/#FunctionIdentifier)

*FunctionArguments:*     [ChainedExpression](https://learn.microsoft.com/#ChainedExpression)     [ChainedExpression](https://learn.microsoft.com/#ChainedExpression) [ListSeparator](https://learn.microsoft.com/#ListSeparator) [FunctionArguments](https://learn.microsoft.com/#FunctionArguments)

