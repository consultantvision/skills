**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Model-driven apps Power Platform CLI Dataverse functions Power Pages

Tests for a match or extracts parts of a text string based on a pattern.

The **IsMatch** function tests whether a text string matches a pattern that can comprise ordinary characters, predefined patterns, or a [regular expression](https://learn.microsoft.com/#regular-expressions). The **Match** and **MatchAll** functions return what was matched, including submatches.

Use **IsMatch** to validate what a user typed in a [Text input](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) control. For example, confirm whether the user entered a valid email address before the result is saved to your data source. If the entry doesn't match your criteria, add other controls that prompt the user to fix the entry.

Use **Match** to extract the first text string that matches a pattern and **MatchAll** to extract all text strings that match. Extract submatches to parse complex strings.

**Match** returns a record of information for the first match found, and **MatchAll** returns a table of records for every match found. The record or records contain:


| Column | Type | Description |
| --- | --- | --- |
| *named sub‑match or sub‑matches* | Text | Each named submatch has its own column. Create a named submatch by using **(?<*****name*****>**...**)** in the regular expression. If a named submatch has the same name as one of the predefined columns, the submatch takes precedence, and a warning is generated. Rename the submatch to avoid this warning. |
| **FullMatch** | Text | All of the text string that was matched. |
| **StartMatch** | Number | The starting position of the match within the input text string. The first character of the string returns 1. |
| **SubMatches**, only if **MatchOptions.NumberedSubMatches** is used. | Single-column table of Text (column **Value**) | The table of numbered submatches in the order in which they appear in the regular expression. Generally, named submatches are easier to work with and are encouraged. Use the [ForAll](https://learn.microsoft.com/function-forall) function or [Index](https://learn.microsoft.com/function-first-last) function to work with an individual sub-match. If no submatches are defined in the regular expression, this table will be present but empty. |

These functions support [MatchOptions](https://learn.microsoft.com/#match-options). By default:


- These functions perform a case-sensitive match. Use **MatchOptions.IgnoreCase** to perform case-insensitive matches.

- **IsMatch** matches the entire text string (**Complete** MatchOption), while **Match** and **MatchAll** search for a match anywhere in the text string (**Contains** MatchOption). Use **Complete**, **Contains**, **BeginsWith**, or **EndsWith** as appropriate for your scenario.

**IsMatch** returns *true* if the text string matches the pattern or *false* if it doesn't. **Match** returns *blank* if no match is found that can be tested with the [IsBlank](https://learn.microsoft.com/function-isblank-isempty) function. **MatchAll** returns an empty table if no match is found that can be tested with the [IsEmpty](https://learn.microsoft.com/function-isblank-isempty) function.

If you use **MatchAll** to split a text string, consider using the [Split](https://learn.microsoft.com/function-split) function, which is simpler and faster.

The key to using these functions is in describing the pattern to match. You describe the pattern in a text string as a combination of:

- Ordinary characters, such as **"abc"** or **"123"**.

- Predefined patterns, such as **Letter**, **MultipleDigits**, or **Email**. (The **Match** enum defines these patterns.)


- Regular-expression codes, such as **"\\d+\\s+\\d+"** or **"[a-z]+"**.

Combine these elements using the [string-concatenation operator ](https://learn.microsoft.com/operators). For example, **"abc" & Digit & "\\s+"** is a valid pattern that matches the characters "a", "b", and "c", followed by a digit from 0 to 9, followed by at least one whitespace character.

The simplest pattern is a sequence of ordinary characters that match exactly.

For example, when used with the **IsMatch** function, the string "Hello" matches the pattern **"Hello"** exactly. No more and no less. The string `"hello!"` doesn't match the pattern because of the exclamation point on the end and because the case is wrong for the letter "h". (See [Match options](https://learn.microsoft.com/#match-options) for ways to modify this behavior.)


In the pattern language, the characters `. ? * + ( ) [ ] ^ $ | \\` are reserved for special purposes. To use these characters, either prefix the character with a **\\** (backslash) to indicate that the character should be taken literally, or use one of the predefined patterns. For example, you can match the string `"Hello?"` by using the pattern `"Hello\\\\?"` with a backslash before the question mark.

Predefined patterns provide a simple way to match either one of a set of characters or a sequence of multiple characters. Use the [string-concatenation operator ](https://learn.microsoft.com/operators) to combine your own text strings with members of the **Match** enum:


| Match enum | Description | Regular expression |
| --- | --- | --- |
| **Any** | Matches any character. | `.` |
| **Comma** | Matches a comma `,`. | `,` |
| **Digit** | Matches a single digit ("0" through "9"). | `\\d` |
| **Email** | Matches an email address that contains an "at" symbol ("@") and a domain name that contains a dot (".") | *See note* |
| **Hyphen** | Matches a hyphen. | `-` *See note* |
| **LeftParen** | Matches a left parenthesis `(`. | `\\(` |
| **Letter** | Matches a letter. | `\\p{L}` |
| **MultipleDigits** | Matches one or more digits. | `\\d+` |
| **MultipleLetters** | Matches one or more letters. | `\\p{L}+` |
| **MultipleNonSpaces** | Matches one or more characters that don't add whitespace (not space, tab, or newline). | `\\S+` |
| **MultipleSpaces** | Matches one or more characters that add whitespace (space, tab, or newline). | `\\s+` |
| **NonSpace** | Matches a single character that doesn't add whitespace. | `\\S` |
| **OptionalDigits** | Matches zero, one, or more digits. | `\\d*` |
| **OptionalLetters** | Matches zero, one, or more letters. | `\\p{L}*` |
| **OptionalNonSpaces** | Matches zero, one, or more characters that don't add whitespace. | `\\S*` |
| **OptionalSpaces** | Matches zero, one, or more characters that add whitespace. | `\\s*` |
| **Period** | Matches a period or dot `.`. | `\\.` |
| **RightParen** | Matches a right parenthesis `)`. | `\\)` |
| **Space** | Matches a character that adds whitespace. | `\\s` |
| **Tab** | Matches a tab character. | `\\t` |


For example, the pattern **"A" & MultipleDigits** matches the letter "A" followed by one or more digits.

[Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) uses a different definition for **Match.EMail** and **Match.Hyphen**. Evaluate `Text( Match.Email )` to see the regular expression used by your host.

The pattern they these functions use is called a [regular expression](https://en.wikipedia.org/wiki/Regular_expression). Power Fx's specific dialect of regular expressions is detailed in [Regular expressions in Power Fx](https://learn.microsoft.com/regular-expressions).

Regular expressions are powerful and serve a wide variety of purposes. They can also look like a random sequence of punctuation marks. This article doesn't describe all aspects of regular expressions, but a wealth of information, tutorials, and tools are available online.


Regular expressions have a long history and are available in many programming languages. Every programming language has its own dialect of regular expressions, and there are few standards. We strive to ensure the same regular expression gives the same result across all [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) implementations. Compatibility isn't easy to accomplish as Power Fx runs on top of [JavaScript](https://app.getrecall.ai/item/46f8a8b9-b7c1-4975-8da6-5a9268598b43) and .NET which have significant differences. To accommodate running on different platforms, Power Fx regular expressions are limited to a subset of features that are widely supported across the industry.

As a result, some regular expressions that may work in other environments may be blocked or require a tweak in Power Fx. Authoring time errors are reported as unsupported features are encountered. This is one of the reasons that the regular expression and options must be an authoring time constant and not dynamic (for example, provided in a variable).

Note


[Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) uses an earlier version of [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) regular expressions that has fewer limitations but also fewer features. **MatchOptions.DotAll** and **MatchOptions.FreeSpacing** aren't available and the definitions of **Match.Email** and **Match.Hyphen** are different. Unicode surrogate pairs aren't treated as a single character. **MatchOptions.NumberedSubMatches** is the default. The version of regular expressions described here will be available in Power Apps soon, under a "Power Fx V1.0 compatibility" switch.

Here are some basic elements of regular expressions that build up complexity in parsing a number.


| Feature | Example | Description |
| --- | --- | --- |
| Predfined character class | `\\d` | This regular expression matches a single number, such as `1`. A character class matches a set of characters and `\\d` matches the standard digits `0` to `9` and also digits defined in the Unicode character category "Nd". There are character classes for letters and numbers with `\\w` and spaces including newlines with `\\s`. There are also inverse character classes that are capitalized: `\\D` matches everything that `\\d` does not. |
| One or More | `\\d+` | This regular expression matches one or more numbers, such as `123`. A `+` after an element says "one or more" of the last element. |
| Zero or One | `\\+?\\d` | This regular expression matches an optional `+` sign followed by one ore more numbers, such as `+123` as well as just `123`. A `?` after an element says "this is optional, it can occur zero or one time". The `+` has a backslash before it to distinguish it as a literal character rather than the "one or more" usage. |
| Grouping and alternation | `(-|\\+)?\\d+` | This regular expression matches either an `+` sign or a `-`, optionally, and then a series of numbers, such as `-123`, `+123`, and `123`. We are introducing two concepts here that are often used together. First, we have the parenthesis that group as set of elements together, for the `?` to act upon. Second, we have `|` which says "either this or that". |
| Custom character class | `(-|\\+)?\\d+[eE][\\-\\+]?\\d+` | This regular expression adds an exponent to the mix with two character classes, matching `+123e-12`. A character class is like `|` alternation providing a "match one of these things" in a more compact form. As with the `+`, `-` has special meaning in regular expression character classes so we need to escape it. |
| Zero or More | `(-|\\+)?\\d+\\.?\\d*[eE][\\-\\+]?\\d+` | This regular expression adds the decimal after the integer portion of the number, such as `-123.456e-89` or `-123.E+32`. The `\\d` after the decimal point has a `*` quantifier that says "zero or more times" for decimal digits after the `.` |
| Capture groups | `(?&lt;number&gt;(-|\\+)?\\d+\\.?\\d*)[eE](?&lt;exponent&gt;[\\-\\+]?\\d+)` | Finally, we add capture groups for `number` and `exponent`. Not only can a regular expression match the entire string, it can also extract portions for use in your formulas, in this case the part before the `e` (or `E`) and the part after. |


These examples only give a small taste of what regular expressions can do. They are commonly used to validate ID numbers, email addresses, phone numbers, dates and times, and to extract information from all kinds of text files. Continue your journey by reading [Regular expressions in Power Fx](https://learn.microsoft.com/regular-expressions), experiment, and use the web to learn more.

Modify the behavior of these functions by specifying one or more options, which you combine using the string- concatenation operator (**&**).


| MatchOptions enum | Description | Impact on a regular expression |
| --- | --- | --- |
| **MatchOptions.BeginsWith** | The pattern must match from the beginning of the text. | Adds a **^** to the start of the regular expression. |
| **MatchOptions.Complete** | Default for **IsMatch** on [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685). The pattern matches the entire string of text, from beginning to end. | Adds a **^** to the start and a **$** to the end of the regular expression. |
| **MatchOptions.Contains** | Default for **Match** and **MatchAll**, and **IsMatch** outside of Power Apps. The pattern must appear somewhere in the text but doesn't need to begin or end it. | Doesn't modify the regular expression. |
| **MatchOptions.DotAll** | Changes the behavior of the `.` (dot) operator to match all characters, including newline characters. Not available in Power Apps. | Doesn't modify the regular expression. This option is the equivalent of the standard "s" modifier for regular expressions. |
| **MatchOptions.EndsWith** | The pattern must match the end of the string of text. | Adds a **$** to the end of the regular expression. |
| **MatchOptions.FreeSpacing** | Whitespace characters, including newlines, are ignored in the regular expression. End-of-line comments beginning with a `#` are ignored. Not available in Power Apps. | Only changes how the regular expression syntax. This option is the equivalent of the standard "x" modifier for regular expressions. |
| **MatchOptions.IgnoreCase** | Treats uppercase and lowercase letters as identical. By default, matching is case sensitive. | Doesn't modify the regular expression. This option is the equivalent of the standard "i" modifier for regular expressions. |
| **MatchOptions.Multiline** | Changes the behavior of `^` and `$` to match at the end of aline. | Doesn't modify the regular expression. This option is the equivalent of the standard "m" modifier for regular expressions. |
| **MatchOptions.NumberedSubMatches** | Named captures are preferred because they are easier to understand and maintain. Performance also improves as unneeded captures aren't retained. But for older regular expressions, treats each set of parenthesis as a numbered capture that is included with the **SubMatches** table in the result. Default in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685). | Doesn't modify the regular expression. Named captures are disabled and `\\1` style back references are enabled. |


Using **MatchAll** is the same as using the standard "g" modifier for regular expressions.

**IsMatch**( *Text*, *Pattern* [, *Options* ] )

- *Text* – Required. The text string to test.

- *Pattern* – Required. The pattern to test as a text string. Concatenate predefined patterns that the **Match** enum defines or provide a regular expression. *Pattern* must be a constant formula without variables, data sources, or other dynamic references that change as the app runs. Note, that the formula must be expressed as "Match.PredefinedPattern" e.g. Match.Email

- *Options* – Optional. A text-string combination of **MatchOptions** enum values. By default, **MatchOptions.Complete** is used. *Options* must be a constant formula without variables, data sources, or other dynamic references that change as the app runs.

**Match**( *Text*, *Pattern* [, *Options* ] )

- *Text* – Required. The text string to match.


- *Pattern* – Required. The pattern to match as a text string. Concatenate predefined patterns that the **Match** enum defines, or provide a regular expression. *Pattern* must be a constant formula without any variables, data sources, or other dynamic references that change as the app runs.

- *Options* – Optional. A text-string combination of **MatchOptions** enum values. By default, **MatchOptions.Contains** is used. *Options* must be a constant formula without any variables, data sources, or other dynamic references that change as the app runs.

**MatchAll**( *Text*, *Pattern* [, *Options* ] )

- *Text* – Required. The text string to match.

- *Pattern* – Required. The pattern to match as a text string. Concatenate predefined patterns that the **Match** enum defines or provide a regular expression. *Pattern* must be a constant formula without variables, data sources, or other dynamic references that change as the app runs.


- *Options* – Optional. A text-string combination of **MatchOptions** enum values. By default, **MatchOptions.Contains** is used. *Options* must be a constant formula without variables, data sources, or other dynamic references that change as the app runs.

Imagine your app has a **Text input** control named **TextInput1**. Users enter values into this control to store them in a database.

Users type **Hello world** into **TextInput1**.

| Formula | Description | Result |
| --- | --- | --- |
| `IsMatch( TextInput1.Text, "Hello world" )` | Tests whether the user's input matches, exactly, the string "Hello world". | **true** |
| `IsMatch( TextInput1.Text, "Good bye" )` | Tests whether the user's input matches, exactly, the string "Good bye". | **false** |
| `IsMatch( TextInput1.Text, "hello", Contains )` | Tests whether the user's input contains the word "hello" (case sensitive). | **false** |
| `IsMatch( TextInput1.Text, "hello", Contains & IgnoreCase )` | Tests whether the user's input contains the word "hello" (case insensitive). | **true** |


| Formula | Description | Result |
| --- | --- | --- |
| `IsMatch( "123-45-7890", Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit )` | Matches a United States Social Security Number | **true** |
| `IsMatch( "joan@contoso.com", Match.Email )` | Matches an email address | **true** |
| `IsMatch( "123.456", Match.MultipleDigits & Match.Period & Match.OptionalDigits )` | Matches a sequence of digits, a period, and then zero or more digits. | **true** |
| `IsMatch( "123", Match.MultipleDigits & Match.Period & Match.OptionalDigits )` | Matches a sequence of digits, a period, and then zero or more digits. A period doesn't appear in the text to match, so this pattern isn't matched. | **false** |


| Formula | Description | Result |
| --- | --- | --- |
| `IsMatch( "986", "\\d+" )` | Matches an integer greater than zero. | **true** |
| `IsMatch( "1.02", "\\d+(\\.\\d\\d)?" )` | Matches a positive currency amount. If the input contains a decimal point, the input must also contain two numeric characters after the decimal point. For example, 3.00 is valid, but 3.1 isn't. | **true** |
| `IsMatch( "-4.95", "(-)?\\d+(\\.\\d\\d)?" )` | Matches a positive or negative currency amount. If the input contains a decimal point, the input must also contain two numeric characters after the decimal point. | **true** |
| `IsMatch( "111-11-1111", "\\d{3}-\\d{2}-\\d{4}" )` | Matches a United States Social Security number. Validates the format, type, and length of the supplied input field. The string to match must consist of three numeric characters followed by a dash, then two numeric characters followed by a dash, and then four numeric characters. | **true** |
| `IsMatch( "111-111-111", "\\d{3}-\\d{2}-\\d{4}" )` | Same as the previous example, but one of the hyphens is out of place in the input. | **false** |
| `IsMatch( "AStrongPasswordNot", "(?!^[0-9]\\*$)(?!^[a-zA-Z]\\*$)([a-zA-Z0-9]{8,10})" )` | Validates a strong password that must contain eight, nine, or 10 characters, at least one digit, and at least one alphabetic character. The string can't contain special characters. | **false** |


| Formula | Description | Result |
| --- | --- | --- |
| `Match( "Bob Jones <bob.jones@contoso.com>", "<(?<email>" & Match.Email & ")>")` | Extracts only the email portion of the contact information. | {email: "[bob.jones@contoso.com](mailto:bob.jones@contoso.com)",FullMatch: "[bob.jones@contoso.com](mailto:bob.jones@contoso.com)",StartMatch: 11} |
| `Match( "Bob Jones <InvalidEmailAddress>", "<(?<email>" & Match.Email & ")>"` | Extracts only the email portion of the contact information. No legal address is found (there is no @ sign), so the function returns *blank*. | *blank* |
| `Match( Language(), "(<language>\\w{2})(?:-(?<script>\\w{4}))?(?:-(?<region>\\w{2}))?" )` | Extracts the language, script, and region portions of the language tag that the [Language](https://learn.microsoft.com/function-language) function returns. These results reflect the United States; see the [Language](https://learn.microsoft.com/function-language) for more examples. The **(?:** operator groups characters without creating another sub-match. | {language: "en",script: *blank*, region: "US",FullMatch: "en-US", StartMatch: 1} |
| `Match( "PT2H1M39S", "PT(?:(?<hours>\\d+)H)?(?:(?<minutes>\\d+)M)?(?:(?<seconds>\\d+)S)?" )` | Extracts the hours, minutes, and seconds from an ISO 8601 duration value. The extracted numbers are still in a text string; use the [Value](https://learn.microsoft.com/function-value) function to convert it to a number before mathematical operations are performed on it. | { hours: "2",minutes: "1",seconds: "39",FullMatch: "PT2H1M39S",StartMatch: 1} |


Let's drill into that last example. If you wanted to convert this string to a date/time value using the [Time](https://learn.microsoft.com/function-date-time) function, you must pass in the named submatches individually. To do this, use the [With](https://learn.microsoft.com/function-with) function operating on the record that **Match** returns:

```
With(
    Match( "PT2H1M39S", "PT(?:(?<hours>\\d+)H)?(?:(?<minutes>\\d+)M)?(?:(?<seconds>\\d+)S)?" ),
   Time( Value( hours ), Value( minutes ), Value( seconds ) )
)
```

For these examples, add a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control, set its **OnSelect** property to this formula, and then select the button:

```
Set( pangram, "The quick brown fox jumps over the lazy dog." )
```


| Formula | Description | Result |
| --- | --- | --- |
| `Match( pangram, "THE", IgnoreCase )` | Find all matches of "THE" in the text string that the **pangram** variable contains. The string contains two matches, but only the first is returned because you're using **Match** and not **MatchAll**. | {FullMatch: "The",StartMatch: 32} |
| `MatchAll( pangram, "the" )` | Find all matches of "the" in the text string that the **pangram** variable contains. The test is case sensitive, so only the second instance of "the" is found. | ![MatchAll for pangram.](https://learn.microsoft.com/media/function-ismatch/pangram-the-one.png)<br> |
| `MatchAll( pangram, "the", IgnoreCase )` | Find all matches of "the" in the text string that the **pangram** variable contains. In this case, the test is case insensitive, so both instances of the word are found. | ![MatchAll with IgnoreCase.](https://learn.microsoft.com/media/function-ismatch/pangram-the-two.png)<br> |
| `MatchAll( pangram, "\\b\\wo\\w\\b" )` | Finds all three-letter words with an "o" in the middle. "brown" is excluded because it's not a three-letter word and, therefore, fails to match "\\b" (word boundary). | ![MatchAll for pangram with b, wo, w and b.](https://learn.microsoft.com/media/function-ismatch/pangram-fox-dog.png)<br> |
| `Match( pangram, "\\b\\wo\\w\\b\\s\\*(?<between>\\w.+\\w)\\s\\*\\b\\wo\\w\\b" )` | Matches all the characters between "fox" and "dog". | {between: "jumps over the lazy",FullMatch: "fox jumps over the lazy dog",StartMatch: 17 } |


To see the results of **MatchAll** in a gallery:

1. In an empty screen, insert a blank vertical [gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) control.

2. Set the gallery's **Items** property to **MatchAll( pangram, "\\w+" )** or **MatchAll( pangram, MultipleLetters )**.

![Items gallery.](https://learn.microsoft.com/media/function-ismatch/pangram-gallery1.png)

3. Select "Add an item from the Insert tab" in the middle of the gallery control to select the template of the gallery.

4. Add a [Label](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-box) control to the gallery's template.

5. Set the label's **Text** property to **ThisItem.FullMatch**.

The gallery is filled with each word in our example text. To see all the words on one screen, resize the gallery's template and the label control.

![Text property.](https://learn.microsoft.com/media/function-ismatch/pangram-gallery2.png)

---
title: IsMatch, Match, and MatchAll functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:02:41 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:04:58 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The IsMatch, Match, and MatchAll functions in Power Platform test for a match or extract parts of a text string based on a pattern, which can include ordinary characters, predefined patterns, or regular expressions.
- IsMatch returns true if the text string matches the pattern, while Match returns the first matched text string and MatchAll returns a table of all matched text strings.
- These functions support MatchOptions, including case-sensitive and case-insensitive matches, and can be used with predefined patterns, such as Letter, Digit, and Email, or with regular-expression codes.
- The `IsMatch`, `Match`, and `MatchAll` functions in Microsoft Power Fx use regular expressions to test and extract patterns from text strings.
- The `MatchOptions` enum allows modification of the behavior of these functions, with options such as `BeginsWith`, `Contains`, `IgnoreCase`, and `Multiline`.
- The `IsMatch` function tests whether a text string matches a pattern, while `Match` and `MatchAll` extract matches from a text string, with `MatchAll` returning all matches and `Match` returning only the first match.
- Set the gallery's Items property to `MatchAll( pangram, "\\w+" )` or `MatchAll( pangram, MultipleLetters )`.
- Add a Label control to the gallery's template and set its Text property to `ThisItem.FullMatch`.
- The gallery will be filled with each word in the example text, such as "pangram".


Detailed summary


## Introduction to IsMatch, Match, and MatchAll Functions
- The IsMatch, Match, and MatchAll functions in the Power Platform are used to test for a match or extract parts of a text string based on a pattern, which can include ordinary characters, predefined patterns, or a regular expression.
- The IsMatch function tests whether a text string matches a pattern and returns true if the text string matches the pattern or false if it doesn't, while th**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Model-driven apps Power Platform CLI Dataverse functions Power Pages

Tests for a match or extracts parts of a text string based on a pattern.

The **IsMatch** function tests whether a text string matches a pattern that can comprise ordinary characters, predefined patterns, or a [regular expression](https://learn.microsoft.com/#regular-expressions). The **Match** and **MatchAll** functions return what was matched, including submatches.

Use **IsMatch** to validate what a user typed in a [Text input](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) control. For example, confirm whether the user entered a valid email address before the result is saved to your data source. If the entry doesn't match your criteria, add other controls that prompt the user to fix the entry.

Use **Match** to extract the first text string that matches a pattern and **MatchAll** to extract all text strings that match. Extract submatches to parse complex strings.

**Match** returns a record of information for the first match found, and **MatchAll** returns a table of records for every match found. The record or records contain:


| Column | Type | Description |
| --- | --- | --- |
| *named sub‑match or sub‑matches* | Text | Each named submatch has its own column. Create a named submatch by using **(?<*****name*****>**...**)** in the regular expression. If a named submatch has the same name as one of the predefined columns, the submatch takes precedence, and a warning is generated. Rename the submatch to avoid this warning. |
| **FullMatch** | Text | All of the text string that was matched. |
| **StartMatch** | Number | The starting position of the match within the input text string. The first character of the string returns 1. |
| **SubMatches**, only if **MatchOptions.NumberedSubMatches** is used. | Single-column table of Text (column **Value**) | The table of numbered submatches in the order in which they appear in the regular expression. Generally, named submatches are easier to work with and are encouraged. Use the [ForAll](https://learn.microsoft.com/function-forall) function or [Index](https://learn.microsoft.com/function-first-last) function to work with an individual sub-match. If no submatches are defined in the regular expression, this table will be present but empty. |

These functions support [MatchOptions](https://learn.microsoft.com/#match-options). By default:


- These functions perform a case-sensitive match. Use **MatchOptions.IgnoreCase** to perform case-insensitive matches.

- **IsMatch** matches the entire text string (**Complete** MatchOption), while **Match** and **MatchAll** search for a match anywhere in the text string (**Contains** MatchOption). Use **Complete**, **Contains**, **BeginsWith**, or **EndsWith** as appropriate for your scenario.

**IsMatch** returns *true* if the text string matches the pattern or *false* if it doesn't. **Match** returns *blank* if no match is found that can be tested with the [IsBlank](https://learn.microsoft.com/function-isblank-isempty) function. **MatchAll** returns an empty table if no match is found that can be tested with the [IsEmpty](https://learn.microsoft.com/function-isblank-isempty) function.

If you use **MatchAll** to split a text string, consider using the [Split](https://learn.microsoft.com/function-split) function, which is simpler and faster.

The key to using these functions is in describing the pattern to match. You describe the pattern in a text string as a combination of:

- Ordinary characters, such as **"abc"** or **"123"**.

- Predefined patterns, such as **Letter**, **MultipleDigits**, or **Email**. (The **Match** enum defines these patterns.)


- Regular-expression codes, such as **"\\d+\\s+\\d+"** or **"[a-z]+"**.

Combine these elements using the [string-concatenation operator ](https://learn.microsoft.com/operators). For example, **"abc" & Digit & "\\s+"** is a valid pattern that matches the characters "a", "b", and "c", followed by a digit from 0 to 9, followed by at least one whitespace character.

The simplest pattern is a sequence of ordinary characters that match exactly.

For example, when used with the **IsMatch** function, the string "Hello" matches the pattern **"Hello"** exactly. No more and no less. The string `"hello!"` doesn't match the pattern because of the exclamation point on the end and because the case is wrong for the letter "h". (See [Match options](https://learn.microsoft.com/#match-options) for ways to modify this behavior.)


In the pattern language, the characters `. ? * + ( ) [ ] ^ $ | \\` are reserved for special purposes. To use these characters, either prefix the character with a **\\** (backslash) to indicate that the character should be taken literally, or use one of the predefined patterns. For example, you can match the string `"Hello?"` by using the pattern `"Hello\\\\?"` with a backslash before the question mark.

Predefined patterns provide a simple way to match either one of a set of characters or a sequence of multiple characters. Use the [string-concatenation operator ](https://learn.microsoft.com/operators) to combine your own text strings with members of the **Match** enum:


| Match enum | Description | Regular expression |
| --- | --- | --- |
| **Any** | Matches any character. | `.` |
| **Comma** | Matches a comma `,`. | `,` |
| **Digit** | Matches a single digit ("0" through "9"). | `\\d` |
| **Email** | Matches an email address that contains an "at" symbol ("@") and a domain name that contains a dot (".") | *See note* |
| **Hyphen** | Matches a hyphen. | `-` *See note* |
| **LeftParen** | Matches a left parenthesis `(`. | `\\(` |
| **Letter** | Matches a letter. | `\\p{L}` |
| **MultipleDigits** | Matches one or more digits. | `\\d+` |
| **MultipleLetters** | Matches one or more letters. | `\\p{L}+` |
| **MultipleNonSpaces** | Matches one or more characters that don't add whitespace (not space, tab, or newline). | `\\S+` |
| **MultipleSpaces** | Matches one or more characters that add whitespace (space, tab, or newline). | `\\s+` |
| **NonSpace** | Matches a single character that doesn't add whitespace. | `\\S` |
| **OptionalDigits** | Matches zero, one, or more digits. | `\\d*` |
| **OptionalLetters** | Matches zero, one, or more letters. | `\\p{L}*` |
| **OptionalNonSpaces** | Matches zero, one, or more characters that don't add whitespace. | `\\S*` |
| **OptionalSpaces** | Matches zero, one, or more characters that add whitespace. | `\\s*` |
| **Period** | Matches a period or dot `.`. | `\\.` |
| **RightParen** | Matches a right parenthesis `)`. | `\\)` |
| **Space** | Matches a character that adds whitespace. | `\\s` |
| **Tab** | Matches a tab character. | `\\t` |


For example, the pattern **"A" & MultipleDigits** matches the letter "A" followed by one or more digits.

[Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) uses a different definition for **Match.EMail** and **Match.Hyphen**. Evaluate `Text( Match.Email )` to see the regular expression used by your host.

The pattern they these functions use is called a [regular expression](https://en.wikipedia.org/wiki/Regular_expression). Power Fx's specific dialect of regular expressions is detailed in [Regular expressions in Power Fx](https://learn.microsoft.com/regular-expressions).

Regular expressions are powerful and serve a wide variety of purposes. They can also look like a random sequence of punctuation marks. This article doesn't describe all aspects of regular expressions, but a wealth of information, tutorials, and tools are available online.


Regular expressions have a long history and are available in many programming languages. Every programming language has its own dialect of regular expressions, and there are few standards. We strive to ensure the same regular expression gives the same result across all [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) implementations. Compatibility isn't easy to accomplish as Power Fx runs on top of [JavaScript](https://app.getrecall.ai/item/46f8a8b9-b7c1-4975-8da6-5a9268598b43) and .NET which have significant differences. To accommodate running on different platforms, Power Fx regular expressions are limited to a subset of features that are widely supported across the industry.

As a result, some regular expressions that may work in other environments may be blocked or require a tweak in Power Fx. Authoring time errors are reported as unsupported features are encountered. This is one of the reasons that the regular expression and options must be an authoring time constant and not dynamic (for example, provided in a variable).

Note


[Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) uses an earlier version of [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) regular expressions that has fewer limitations but also fewer features. **MatchOptions.DotAll** and **MatchOptions.FreeSpacing** aren't available and the definitions of **Match.Email** and **Match.Hyphen** are different. Unicode surrogate pairs aren't treated as a single character. **MatchOptions.NumberedSubMatches** is the default. The version of regular expressions described here will be available in Power Apps soon, under a "Power Fx V1.0 compatibility" switch.

Here are some basic elements of regular expressions that build up complexity in parsing a number.


| Feature | Example | Description |
| --- | --- | --- |
| Predfined character class | `\\d` | This regular expression matches a single number, such as `1`. A character class matches a set of characters and `\\d` matches the standard digits `0` to `9` and also digits defined in the Unicode character category "Nd". There are character classes for letters and numbers with `\\w` and spaces including newlines with `\\s`. There are also inverse character classes that are capitalized: `\\D` matches everything that `\\d` does not. |
| One or More | `\\d+` | This regular expression matches one or more numbers, such as `123`. A `+` after an element says "one or more" of the last element. |
| Zero or One | `\\+?\\d` | This regular expression matches an optional `+` sign followed by one ore more numbers, such as `+123` as well as just `123`. A `?` after an element says "this is optional, it can occur zero or one time". The `+` has a backslash before it to distinguish it as a literal character rather than the "one or more" usage. |
| Grouping and alternation | `(-|\\+)?\\d+` | This regular expression matches either an `+` sign or a `-`, optionally, and then a series of numbers, such as `-123`, `+123`, and `123`. We are introducing two concepts here that are often used together. First, we have the parenthesis that group as set of elements together, for the `?` to act upon. Second, we have `|` which says "either this or that". |
| Custom character class | `(-|\\+)?\\d+[eE][\\-\\+]?\\d+` | This regular expression adds an exponent to the mix with two character classes, matching `+123e-12`. A character class is like `|` alternation providing a "match one of these things" in a more compact form. As with the `+`, `-` has special meaning in regular expression character classes so we need to escape it. |
| Zero or More | `(-|\\+)?\\d+\\.?\\d*[eE][\\-\\+]?\\d+` | This regular expression adds the decimal after the integer portion of the number, such as `-123.456e-89` or `-123.E+32`. The `\\d` after the decimal point has a `*` quantifier that says "zero or more times" for decimal digits after the `.` |
| Capture groups | `(?&lt;number&gt;(-|\\+)?\\d+\\.?\\d*)[eE](?&lt;exponent&gt;[\\-\\+]?\\d+)` | Finally, we add capture groups for `number` and `exponent`. Not only can a regular expression match the entire string, it can also extract portions for use in your formulas, in this case the part before the `e` (or `E`) and the part after. |


These examples only give a small taste of what regular expressions can do. They are commonly used to validate ID numbers, email addresses, phone numbers, dates and times, and to extract information from all kinds of text files. Continue your journey by reading [Regular expressions in Power Fx](https://learn.microsoft.com/regular-expressions), experiment, and use the web to learn more.

Modify the behavior of these functions by specifying one or more options, which you combine using the string- concatenation operator (**&**).


| MatchOptions enum | Description | Impact on a regular expression |
| --- | --- | --- |
| **MatchOptions.BeginsWith** | The pattern must match from the beginning of the text. | Adds a **^** to the start of the regular expression. |
| **MatchOptions.Complete** | Default for **IsMatch** on [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685). The pattern matches the entire string of text, from beginning to end. | Adds a **^** to the start and a **$** to the end of the regular expression. |
| **MatchOptions.Contains** | Default for **Match** and **MatchAll**, and **IsMatch** outside of Power Apps. The pattern must appear somewhere in the text but doesn't need to begin or end it. | Doesn't modify the regular expression. |
| **MatchOptions.DotAll** | Changes the behavior of the `.` (dot) operator to match all characters, including newline characters. Not available in Power Apps. | Doesn't modify the regular expression. This option is the equivalent of the standard "s" modifier for regular expressions. |
| **MatchOptions.EndsWith** | The pattern must match the end of the string of text. | Adds a **$** to the end of the regular expression. |
| **MatchOptions.FreeSpacing** | Whitespace characters, including newlines, are ignored in the regular expression. End-of-line comments beginning with a `#` are ignored. Not available in Power Apps. | Only changes how the regular expression syntax. This option is the equivalent of the standard "x" modifier for regular expressions. |
| **MatchOptions.IgnoreCase** | Treats uppercase and lowercase letters as identical. By default, matching is case sensitive. | Doesn't modify the regular expression. This option is the equivalent of the standard "i" modifier for regular expressions. |
| **MatchOptions.Multiline** | Changes the behavior of `^` and `$` to match at the end of aline. | Doesn't modify the regular expression. This option is the equivalent of the standard "m" modifier for regular expressions. |
| **MatchOptions.NumberedSubMatches** | Named captures are preferred because they are easier to understand and maintain. Performance also improves as unneeded captures aren't retained. But for older regular expressions, treats each set of parenthesis as a numbered capture that is included with the **SubMatches** table in the result. Default in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685). | Doesn't modify the regular expression. Named captures are disabled and `\\1` style back references are enabled. |


Using **MatchAll** is the same as using the standard "g" modifier for regular expressions.

**IsMatch**( *Text*, *Pattern* [, *Options* ] )

- *Text* – Required. The text string to test.

- *Pattern* – Required. The pattern to test as a text string. Concatenate predefined patterns that the **Match** enum defines or provide a regular expression. *Pattern* must be a constant formula without variables, data sources, or other dynamic references that change as the app runs. Note, that the formula must be expressed as "Match.PredefinedPattern" e.g. Match.Email

- *Options* – Optional. A text-string combination of **MatchOptions** enum values. By default, **MatchOptions.Complete** is used. *Options* must be a constant formula without variables, data sources, or other dynamic references that change as the app runs.

**Match**( *Text*, *Pattern* [, *Options* ] )

- *Text* – Required. The text string to match.


- *Pattern* – Required. The pattern to match as a text string. Concatenate predefined patterns that the **Match** enum defines, or provide a regular expression. *Pattern* must be a constant formula without any variables, data sources, or other dynamic references that change as the app runs.

- *Options* – Optional. A text-string combination of **MatchOptions** enum values. By default, **MatchOptions.Contains** is used. *Options* must be a constant formula without any variables, data sources, or other dynamic references that change as the app runs.

**MatchAll**( *Text*, *Pattern* [, *Options* ] )

- *Text* – Required. The text string to match.

- *Pattern* – Required. The pattern to match as a text string. Concatenate predefined patterns that the **Match** enum defines or provide a regular expression. *Pattern* must be a constant formula without variables, data sources, or other dynamic references that change as the app runs.


- *Options* – Optional. A text-string combination of **MatchOptions** enum values. By default, **MatchOptions.Contains** is used. *Options* must be a constant formula without variables, data sources, or other dynamic references that change as the app runs.

Imagine your app has a **Text input** control named **TextInput1**. Users enter values into this control to store them in a database.

Users type **Hello world** into **TextInput1**.

| Formula | Description | Result |
| --- | --- | --- |
| `IsMatch( TextInput1.Text, "Hello world" )` | Tests whether the user's input matches, exactly, the string "Hello world". | **true** |
| `IsMatch( TextInput1.Text, "Good bye" )` | Tests whether the user's input matches, exactly, the string "Good bye". | **false** |
| `IsMatch( TextInput1.Text, "hello", Contains )` | Tests whether the user's input contains the word "hello" (case sensitive). | **false** |
| `IsMatch( TextInput1.Text, "hello", Contains & IgnoreCase )` | Tests whether the user's input contains the word "hello" (case insensitive). | **true** |


| Formula | Description | Result |
| --- | --- | --- |
| `IsMatch( "123-45-7890", Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit )` | Matches a United States Social Security Number | **true** |
| `IsMatch( "joan@contoso.com", Match.Email )` | Matches an email address | **true** |
| `IsMatch( "123.456", Match.MultipleDigits & Match.Period & Match.OptionalDigits )` | Matches a sequence of digits, a period, and then zero or more digits. | **true** |
| `IsMatch( "123", Match.MultipleDigits & Match.Period & Match.OptionalDigits )` | Matches a sequence of digits, a period, and then zero or more digits. A period doesn't appear in the text to match, so this pattern isn't matched. | **false** |


| Formula | Description | Result |
| --- | --- | --- |
| `IsMatch( "986", "\\d+" )` | Matches an integer greater than zero. | **true** |
| `IsMatch( "1.02", "\\d+(\\.\\d\\d)?" )` | Matches a positive currency amount. If the input contains a decimal point, the input must also contain two numeric characters after the decimal point. For example, 3.00 is valid, but 3.1 isn't. | **true** |
| `IsMatch( "-4.95", "(-)?\\d+(\\.\\d\\d)?" )` | Matches a positive or negative currency amount. If the input contains a decimal point, the input must also contain two numeric characters after the decimal point. | **true** |
| `IsMatch( "111-11-1111", "\\d{3}-\\d{2}-\\d{4}" )` | Matches a United States Social Security number. Validates the format, type, and length of the supplied input field. The string to match must consist of three numeric characters followed by a dash, then two numeric characters followed by a dash, and then four numeric characters. | **true** |
| `IsMatch( "111-111-111", "\\d{3}-\\d{2}-\\d{4}" )` | Same as the previous example, but one of the hyphens is out of place in the input. | **false** |
| `IsMatch( "AStrongPasswordNot", "(?!^[0-9]\\*$)(?!^[a-zA-Z]\\*$)([a-zA-Z0-9]{8,10})" )` | Validates a strong password that must contain eight, nine, or 10 characters, at least one digit, and at least one alphabetic character. The string can't contain special characters. | **false** |


| Formula | Description | Result |
| --- | --- | --- |
| `Match( "Bob Jones <bob.jones@contoso.com>", "<(?<email>" & Match.Email & ")>")` | Extracts only the email portion of the contact information. | {email: "[bob.jones@contoso.com](mailto:bob.jones@contoso.com)",FullMatch: "[bob.jones@contoso.com](mailto:bob.jones@contoso.com)",StartMatch: 11} |
| `Match( "Bob Jones <InvalidEmailAddress>", "<(?<email>" & Match.Email & ")>"` | Extracts only the email portion of the contact information. No legal address is found (there is no @ sign), so the function returns *blank*. | *blank* |
| `Match( Language(), "(<language>\\w{2})(?:-(?<script>\\w{4}))?(?:-(?<region>\\w{2}))?" )` | Extracts the language, script, and region portions of the language tag that the [Language](https://learn.microsoft.com/function-language) function returns. These results reflect the United States; see the [Language](https://learn.microsoft.com/function-language) for more examples. The **(?:** operator groups characters without creating another sub-match. | {language: "en",script: *blank*, region: "US",FullMatch: "en-US", StartMatch: 1} |
| `Match( "PT2H1M39S", "PT(?:(?<hours>\\d+)H)?(?:(?<minutes>\\d+)M)?(?:(?<seconds>\\d+)S)?" )` | Extracts the hours, minutes, and seconds from an ISO 8601 duration value. The extracted numbers are still in a text string; use the [Value](https://learn.microsoft.com/function-value) function to convert it to a number before mathematical operations are performed on it. | { hours: "2",minutes: "1",seconds: "39",FullMatch: "PT2H1M39S",StartMatch: 1} |


Let's drill into that last example. If you wanted to convert this string to a date/time value using the [Time](https://learn.microsoft.com/function-date-time) function, you must pass in the named submatches individually. To do this, use the [With](https://learn.microsoft.com/function-with) function operating on the record that **Match** returns:

```
With(
    Match( "PT2H1M39S", "PT(?:(?<hours>\\d+)H)?(?:(?<minutes>\\d+)M)?(?:(?<seconds>\\d+)S)?" ),
   Time( Value( hours ), Value( minutes ), Value( seconds ) )
)
```

For these examples, add a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control, set its **OnSelect** property to this formula, and then select the button:

```
Set( pangram, "The quick brown fox jumps over the lazy dog." )
```


| Formula | Description | Result |
| --- | --- | --- |
| `Match( pangram, "THE", IgnoreCase )` | Find all matches of "THE" in the text string that the **pangram** variable contains. The string contains two matches, but only the first is returned because you're using **Match** and not **MatchAll**. | {FullMatch: "The",StartMatch: 32} |
| `MatchAll( pangram, "the" )` | Find all matches of "the" in the text string that the **pangram** variable contains. The test is case sensitive, so only the second instance of "the" is found. | ![MatchAll for pangram.](https://learn.microsoft.com/media/function-ismatch/pangram-the-one.png)<br> |
| `MatchAll( pangram, "the", IgnoreCase )` | Find all matches of "the" in the text string that the **pangram** variable contains. In this case, the test is case insensitive, so both instances of the word are found. | ![MatchAll with IgnoreCase.](https://learn.microsoft.com/media/function-ismatch/pangram-the-two.png)<br> |
| `MatchAll( pangram, "\\b\\wo\\w\\b" )` | Finds all three-letter words with an "o" in the middle. "brown" is excluded because it's not a three-letter word and, therefore, fails to match "\\b" (word boundary). | ![MatchAll for pangram with b, wo, w and b.](https://learn.microsoft.com/media/function-ismatch/pangram-fox-dog.png)<br> |
| `Match( pangram, "\\b\\wo\\w\\b\\s\\*(?<between>\\w.+\\w)\\s\\*\\b\\wo\\w\\b" )` | Matches all the characters between "fox" and "dog". | {between: "jumps over the lazy",FullMatch: "fox jumps over the lazy dog",StartMatch: 17 } |


To see the results of **MatchAll** in a gallery:

1. In an empty screen, insert a blank vertical [gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) control.

2. Set the gallery's **Items** property to **MatchAll( pangram, "\\w+" )** or **MatchAll( pangram, MultipleLetters )**.

![Items gallery.](https://learn.microsoft.com/media/function-ismatch/pangram-gallery1.png)

3. Select "Add an item from the Insert tab" in the middle of the gallery control to select the template of the gallery.

4. Add a [Label](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-box) control to the gallery's template.

5. Set the label's **Text** property to **ThisItem.FullMatch**.

The gallery is filled with each word in our example text. To see all the words on one screen, resize the gallery's template and the label control.

![Text property.](https://learn.microsoft.com/media/function-ismatch/pangram-gallery2.png)

e Match function returns the first match found and the MatchAll function returns a table of all matches found.
- The Match and MatchAll functions return a record or table of records containing information about the match, including named submatches, the full match, the start position of the match, and numbered submatches if the MatchOptions.NumberedSubMatches option is used.
- These functions support MatchOptions, which allow for case-sensitive or case-insensitive matches, and different match types such as Complete, Contains, BeginsWith, or EndsWith, with IsMatch performing a case-sensitive match by default and Match and MatchAll searching for a match anywhere in the text string.

## Pattern Creation and Validation
- The pattern to match can be described using a combination of ordinary characters, predefined patterns, and regular-expression codes, which can be combined using the string-concatenation operator, and the pattern language reserves certain characters for special purposes, requiring them to be prefixed with a backslash to be taken literally.
- The functions can be used to validate user input, extract submatches to parse complex strings, and perform various matching operations, with the key to using these functions being in describing the pattern to match, and the IsBlank and IsEmpty functions can be used to test if no match is found.
- The IsMatch, Match, and MatchAll functions in Power Platform utilize regular expressions to match patterns in strings, with the Match enum providing various options such as Any, Comma, Digit, Email, and more, each corresponding to a specific regular expression.

## Match Enum and Power Fx Regular Expression Dialect
- The Match enum can be combined with custom text strings using the string-concatenation operator to create complex patterns, such as matching the letter "A" followed by one or more digits using the pattern "A" & MultipleDigits.
- Microsoft Power Fx has its own dialect of regular expressions, which is a subset of features widely supported across the industry, and is designed to ensure compatibility across different platforms, including JavaScript and .NET.
- The regular expressions used in Power Fx are limited to a subset of features to accommodate running on different platforms, and some regular expressions that work in other environments may be blocked or require tweaks in Power Fx.

## Regular Expression Elements and Power Apps Version
- The Match enum includes options such as Letter, MultipleLetters, NonSpace, MultipleNonSpaces, and more, each with its corresponding regular expression, and can be used to match a wide variety of patterns in strings.
- Microsoft Power Apps currently uses an earlier version of Power Fx regular expressions with fewer limitations but also fewer features, and will soon have the updated version available under a "Power Fx V1.0 compatibility" switch.
- Regular expressions in Microsoft Power Fx can be used to match complex patterns, such as email addresses, phone numbers, and more, and are a powerful tool for parsing and validating strings.

## Regular Expression Syntax and Features
- The use of regular expressions in Power Fx requires authoring time constants, and dynamic regular expressions provided in variables are not supported, with authoring time errors reported when unsupported features are encountered.
- The text provides a table with basic elements of regular expressions, including predefined character classes, such as \d, which matches a single number, and \w, which matches letters and numbers, and provides examples and descriptions for each feature.
- The IsMatch, Match, and MatchAll functions in Power Platform utilize regular expressions to match patterns in text, with various options available to modify their behavior, including MatchOptions enum values such as BeginsWith, Complete, Contains, DotAll, EndsWith, FreeSpacing, IgnoreCase, and Multiline.
- Regular expressions can be used to match a wide range of patterns, including numbers, characters, and strings, with quantifiers such as +, *, and ? allowing for flexible matching, as seen in examples like \\d+ matching one or more numbers and \\+?\\d matching an optional + sign followed by one or more numbers.

## Capture Groups and MatchOptions
- The use of grouping and alternation, such as in the regular expression (-|\\+)?\\d+, enables the matching of complex patterns, including optional characters and multiple alternatives, while character classes, like [eE][\\-\\+]?\\d+, provide a compact way to match specific sets of characters.
- Capture groups, denoted by (?<name>pattern), allow for the extraction of specific portions of a matched string, as demonstrated in the example (?<number>(-|\\+)?\\d+\\.?\\d*)eE, which captures the number and exponent parts of a matched string.
- The MatchOptions enum values can be combined using the string-concatenation operator (&) to modify the behavior of the IsMatch, Match, and MatchAll functions, with each option having a specific impact on the regular expression, such as adding ^ or $ to the start or end of the pattern, or changing the behavior of certain operators like the dot (.) operator.
- The available MatchOptions enum values include BeginsWith, Complete, Contains, DotAll, EndsWith, FreeSpacing, IgnoreCase, and Multiline, each with its own description and impact on the regular expression, and can be used to achieve specific matching behaviors, such as case-insensitive matching or matching across multiple lines.

## Function Parameters and Behavior
- The IsMatch, Match, and MatchAll functions in Power Platform are used for testing and matching text strings against patterns, with the IsMatch function testing whether a text string matches a pattern exactly, the Match function matching a text string against a pattern, and the MatchAll function matching all occurrences of a pattern in a text string.
- The IsMatch function takes three parameters: Text, Pattern, and Options, where Text is the text string to test, Pattern is the pattern to test as a text string, and Options is an optional text-string combination of MatchOptions enum values that defaults to MatchOptions.Complete if not specified.
- The Match function also takes three parameters: Text, Pattern, and Options, where Text is the text string to match, Pattern is the pattern to match as a text string, and Options is an optional text-string combination of MatchOptions enum values that defaults to MatchOptions.Contains if not specified.
- The MatchAll function takes the same parameters as the Match function, with the same defaults, and is equivalent to using the standard "g" modifier for regular expressions, allowing it to match all occurrences of a pattern in a text string.

## Pattern and Options Parameter Details
- The Pattern parameter in all three functions can be a predefined pattern from the Match enum, such as Match.Email, or a custom regular expression, and must be a constant formula without variables, data sources, or other dynamic references that change as the app runs.
- The Options parameter can include various MatchOptions enum values, such as Contains, Complete, and IgnoreCase, which can be combined using the & operator to specify multiple options, and can be used to modify the behavior of the matching function, such as making the match case-insensitive.
- The MatchOptions.NumberedSubMatches option is equivalent to the standard "m" modifier for regular expressions and treats each set of parentheses as a numbered capture, but named captures are generally preferred for better readability and performance.
- Examples of using the IsMatch function include testing whether a user's input matches a specific string, checking if a string contains a certain word, and validating a United States Social Security Number or an email address, demonstrating the function's versatility and usefulness in various scenarios.

## Usage Examples and Practical Applications
- The IsMatch function is used to validate the format, type, and length of input fields, such as currency amounts, United States Social Security numbers, and strong passwords, by checking if the input matches a specific pattern.
- The IsMatch function requires the input to contain two numeric characters after a decimal point if a decimal point is present, as seen in the example of a valid currency amount "3.00" versus an invalid amount "3.1".
- The Match function is used to extract specific portions of a string, such as an email address from a contact information string, and returns a record containing the matched text and its position in the original string.
- The Match function can also be used with named submatches to extract specific parts of a string, such as the language, script, and region from a language tag, or the hours, minutes, and seconds from an ISO 8601 duration value.
- The MatchAll function is used to find all matches of a pattern in a string, unlike the Match function which only returns the first match, and can be used with the IgnoreCase argument to make the search case-insensitive.
- The With function can be used in conjunction with the Match function to convert the extracted values to a different data type, such as a date/time value, by passing the named submatches individually to a function like the Time function.
- The examples provided demonstrate how to use the IsMatch, Match, and MatchAll functions in different scenarios, including validating input fields, extracting specific portions of a string, and finding all matches of a pattern in a string.
- The IsMatch, Match, and MatchAll functions in the Power Platform are used for various matching operations, and the provided examples demonstrate their usage with case-insensitive tests and regular expressions to find specific patterns in a given text, referred to as a "pangram".

## Visualization of Match Results in Gallery
- The MatchAll function can be used to find all occurrences of a specific pattern in the text, such as finding all three-letter words with an "o" in the middle, and the results can be displayed in a gallery control by setting the Items property to the MatchAll function with the desired pattern.
- To visualize the results of the MatchAll function in a gallery, a blank vertical gallery control can be inserted into an empty screen, and its Items property can be set to MatchAll with a specific pattern, such as "\w+" or a custom regular expression like "MultipleLetters", to display each word in the example text.
- The gallery can be customized by adding a Label control to its template and setting the label's Text property to ThisItem.FullMatch, allowing each word in the text to be displayed in the gallery, and the gallery's template and label control can be resized to show all the words on one screen.
- The Match function can be used to find a specific pattern in the text and capture groups, as demonstrated by the example that matches all characters between the words "fox" and "dog" and captures the matched text in a group named "between", returning a result set with the full match, start position, and captured group.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-ismatch)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Model-driven apps Power Platform CLI Dataverse functions Power Pages

Tests for a match or extracts parts of a text string based on a pattern.

The **IsMatch** function tests whether a text string matches a pattern that can comprise ordinary characters, predefined patterns, or a [regular expression](https://learn.microsoft.com/#regular-expressions). The **Match** and **MatchAll** functions return what was matched, including submatches.

Use **IsMatch** to validate what a user typed in a [Text input](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) control. For example, confirm whether the user entered a valid email address before the result is saved to your data source. If the entry doesn't match your criteria, add other controls that prompt the user to fix the entry.

Use **Match** to extract the first text string that matches a pattern and **MatchAll** to extract all text strings that match. Extract submatches to parse complex strings.

**Match** returns a record of information for the first match found, and **MatchAll** returns a table of records for every match found. The record or records contain:


| Column | Type | Description |
| --- | --- | --- |
| *named sub‑match or sub‑matches* | Text | Each named submatch has its own column. Create a named submatch by using **(?<*****name*****>**...**)** in the regular expression. If a named submatch has the same name as one of the predefined columns, the submatch takes precedence, and a warning is generated. Rename the submatch to avoid this warning. |
| **FullMatch** | Text | All of the text string that was matched. |
| **StartMatch** | Number | The starting position of the match within the input text string. The first character of the string returns 1. |
| **SubMatches**, only if **MatchOptions.NumberedSubMatches** is used. | Single-column table of Text (column **Value**) | The table of numbered submatches in the order in which they appear in the regular expression. Generally, named submatches are easier to work with and are encouraged. Use the [ForAll](https://learn.microsoft.com/function-forall) function or [Index](https://learn.microsoft.com/function-first-last) function to work with an individual sub-match. If no submatches are defined in the regular expression, this table will be present but empty. |

These functions support [MatchOptions](https://learn.microsoft.com/#match-options). By default:


- These functions perform a case-sensitive match. Use **MatchOptions.IgnoreCase** to perform case-insensitive matches.

- **IsMatch** matches the entire text string (**Complete** MatchOption), while **Match** and **MatchAll** search for a match anywhere in the text string (**Contains** MatchOption). Use **Complete**, **Contains**, **BeginsWith**, or **EndsWith** as appropriate for your scenario.

**IsMatch** returns *true* if the text string matches the pattern or *false* if it doesn't. **Match** returns *blank* if no match is found that can be tested with the [IsBlank](https://learn.microsoft.com/function-isblank-isempty) function. **MatchAll** returns an empty table if no match is found that can be tested with the [IsEmpty](https://learn.microsoft.com/function-isblank-isempty) function.

If you use **MatchAll** to split a text string, consider using the [Split](https://learn.microsoft.com/function-split) function, which is simpler and faster.

The key to using these functions is in describing the pattern to match. You describe the pattern in a text string as a combination of:

- Ordinary characters, such as **"abc"** or **"123"**.

- Predefined patterns, such as **Letter**, **MultipleDigits**, or **Email**. (The **Match** enum defines these patterns.)


- Regular-expression codes, such as **"\\d+\\s+\\d+"** or **"[a-z]+"**.

Combine these elements using the [string-concatenation operator ](https://learn.microsoft.com/operators). For example, **"abc" & Digit & "\\s+"** is a valid pattern that matches the characters "a", "b", and "c", followed by a digit from 0 to 9, followed by at least one whitespace character.

The simplest pattern is a sequence of ordinary characters that match exactly.

For example, when used with the **IsMatch** function, the string "Hello" matches the pattern **"Hello"** exactly. No more and no less. The string `"hello!"` doesn't match the pattern because of the exclamation point on the end and because the case is wrong for the letter "h". (See [Match options](https://learn.microsoft.com/#match-options) for ways to modify this behavior.)


In the pattern language, the characters `. ? * + ( ) [ ] ^ $ | \\` are reserved for special purposes. To use these characters, either prefix the character with a **\\** (backslash) to indicate that the character should be taken literally, or use one of the predefined patterns. For example, you can match the string `"Hello?"` by using the pattern `"Hello\\\\?"` with a backslash before the question mark.

Predefined patterns provide a simple way to match either one of a set of characters or a sequence of multiple characters. Use the [string-concatenation operator ](https://learn.microsoft.com/operators) to combine your own text strings with members of the **Match** enum:


| Match enum | Description | Regular expression |
| --- | --- | --- |
| **Any** | Matches any character. | `.` |
| **Comma** | Matches a comma `,`. | `,` |
| **Digit** | Matches a single digit ("0" through "9"). | `\\d` |
| **Email** | Matches an email address that contains an "at" symbol ("@") and a domain name that contains a dot (".") | *See note* |
| **Hyphen** | Matches a hyphen. | `-` *See note* |
| **LeftParen** | Matches a left parenthesis `(`. | `\\(` |
| **Letter** | Matches a letter. | `\\p{L}` |
| **MultipleDigits** | Matches one or more digits. | `\\d+` |
| **MultipleLetters** | Matches one or more letters. | `\\p{L}+` |
| **MultipleNonSpaces** | Matches one or more characters that don't add whitespace (not space, tab, or newline). | `\\S+` |
| **MultipleSpaces** | Matches one or more characters that add whitespace (space, tab, or newline). | `\\s+` |
| **NonSpace** | Matches a single character that doesn't add whitespace. | `\\S` |
| **OptionalDigits** | Matches zero, one, or more digits. | `\\d*` |
| **OptionalLetters** | Matches zero, one, or more letters. | `\\p{L}*` |
| **OptionalNonSpaces** | Matches zero, one, or more characters that don't add whitespace. | `\\S*` |
| **OptionalSpaces** | Matches zero, one, or more characters that add whitespace. | `\\s*` |
| **Period** | Matches a period or dot `.`. | `\\.` |
| **RightParen** | Matches a right parenthesis `)`. | `\\)` |
| **Space** | Matches a character that adds whitespace. | `\\s` |
| **Tab** | Matches a tab character. | `\\t` |


For example, the pattern **"A" & MultipleDigits** matches the letter "A" followed by one or more digits.

[Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) uses a different definition for **Match.EMail** and **Match.Hyphen**. Evaluate `Text( Match.Email )` to see the regular expression used by your host.

The pattern they these functions use is called a [regular expression](https://en.wikipedia.org/wiki/Regular_expression). Power Fx's specific dialect of regular expressions is detailed in [Regular expressions in Power Fx](https://learn.microsoft.com/regular-expressions).

Regular expressions are powerful and serve a wide variety of purposes. They can also look like a random sequence of punctuation marks. This article doesn't describe all aspects of regular expressions, but a wealth of information, tutorials, and tools are available online.


Regular expressions have a long history and are available in many programming languages. Every programming language has its own dialect of regular expressions, and there are few standards. We strive to ensure the same regular expression gives the same result across all [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) implementations. Compatibility isn't easy to accomplish as Power Fx runs on top of [JavaScript](https://app.getrecall.ai/item/46f8a8b9-b7c1-4975-8da6-5a9268598b43) and .NET which have significant differences. To accommodate running on different platforms, Power Fx regular expressions are limited to a subset of features that are widely supported across the industry.

As a result, some regular expressions that may work in other environments may be blocked or require a tweak in Power Fx. Authoring time errors are reported as unsupported features are encountered. This is one of the reasons that the regular expression and options must be an authoring time constant and not dynamic (for example, provided in a variable).

Note


[Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) uses an earlier version of [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) regular expressions that has fewer limitations but also fewer features. **MatchOptions.DotAll** and **MatchOptions.FreeSpacing** aren't available and the definitions of **Match.Email** and **Match.Hyphen** are different. Unicode surrogate pairs aren't treated as a single character. **MatchOptions.NumberedSubMatches** is the default. The version of regular expressions described here will be available in Power Apps soon, under a "Power Fx V1.0 compatibility" switch.

Here are some basic elements of regular expressions that build up complexity in parsing a number.


| Feature | Example | Description |
| --- | --- | --- |
| Predfined character class | `\\d` | This regular expression matches a single number, such as `1`. A character class matches a set of characters and `\\d` matches the standard digits `0` to `9` and also digits defined in the Unicode character category "Nd". There are character classes for letters and numbers with `\\w` and spaces including newlines with `\\s`. There are also inverse character classes that are capitalized: `\\D` matches everything that `\\d` does not. |
| One or More | `\\d+` | This regular expression matches one or more numbers, such as `123`. A `+` after an element says "one or more" of the last element. |
| Zero or One | `\\+?\\d` | This regular expression matches an optional `+` sign followed by one ore more numbers, such as `+123` as well as just `123`. A `?` after an element says "this is optional, it can occur zero or one time". The `+` has a backslash before it to distinguish it as a literal character rather than the "one or more" usage. |
| Grouping and alternation | `(-|\\+)?\\d+` | This regular expression matches either an `+` sign or a `-`, optionally, and then a series of numbers, such as `-123`, `+123`, and `123`. We are introducing two concepts here that are often used together. First, we have the parenthesis that group as set of elements together, for the `?` to act upon. Second, we have `|` which says "either this or that". |
| Custom character class | `(-|\\+)?\\d+[eE][\\-\\+]?\\d+` | This regular expression adds an exponent to the mix with two character classes, matching `+123e-12`. A character class is like `|` alternation providing a "match one of these things" in a more compact form. As with the `+`, `-` has special meaning in regular expression character classes so we need to escape it. |
| Zero or More | `(-|\\+)?\\d+\\.?\\d*[eE][\\-\\+]?\\d+` | This regular expression adds the decimal after the integer portion of the number, such as `-123.456e-89` or `-123.E+32`. The `\\d` after the decimal point has a `*` quantifier that says "zero or more times" for decimal digits after the `.` |
| Capture groups | `(?&lt;number&gt;(-|\\+)?\\d+\\.?\\d*)[eE](?&lt;exponent&gt;[\\-\\+]?\\d+)` | Finally, we add capture groups for `number` and `exponent`. Not only can a regular expression match the entire string, it can also extract portions for use in your formulas, in this case the part before the `e` (or `E`) and the part after. |


These examples only give a small taste of what regular expressions can do. They are commonly used to validate ID numbers, email addresses, phone numbers, dates and times, and to extract information from all kinds of text files. Continue your journey by reading [Regular expressions in Power Fx](https://learn.microsoft.com/regular-expressions), experiment, and use the web to learn more.

Modify the behavior of these functions by specifying one or more options, which you combine using the string- concatenation operator (**&**).


| MatchOptions enum | Description | Impact on a regular expression |
| --- | --- | --- |
| **MatchOptions.BeginsWith** | The pattern must match from the beginning of the text. | Adds a **^** to the start of the regular expression. |
| **MatchOptions.Complete** | Default for **IsMatch** on [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685). The pattern matches the entire string of text, from beginning to end. | Adds a **^** to the start and a **$** to the end of the regular expression. |
| **MatchOptions.Contains** | Default for **Match** and **MatchAll**, and **IsMatch** outside of Power Apps. The pattern must appear somewhere in the text but doesn't need to begin or end it. | Doesn't modify the regular expression. |
| **MatchOptions.DotAll** | Changes the behavior of the `.` (dot) operator to match all characters, including newline characters. Not available in Power Apps. | Doesn't modify the regular expression. This option is the equivalent of the standard "s" modifier for regular expressions. |
| **MatchOptions.EndsWith** | The pattern must match the end of the string of text. | Adds a **$** to the end of the regular expression. |
| **MatchOptions.FreeSpacing** | Whitespace characters, including newlines, are ignored in the regular expression. End-of-line comments beginning with a `#` are ignored. Not available in Power Apps. | Only changes how the regular expression syntax. This option is the equivalent of the standard "x" modifier for regular expressions. |
| **MatchOptions.IgnoreCase** | Treats uppercase and lowercase letters as identical. By default, matching is case sensitive. | Doesn't modify the regular expression. This option is the equivalent of the standard "i" modifier for regular expressions. |
| **MatchOptions.Multiline** | Changes the behavior of `^` and `$` to match at the end of aline. | Doesn't modify the regular expression. This option is the equivalent of the standard "m" modifier for regular expressions. |
| **MatchOptions.NumberedSubMatches** | Named captures are preferred because they are easier to understand and maintain. Performance also improves as unneeded captures aren't retained. But for older regular expressions, treats each set of parenthesis as a numbered capture that is included with the **SubMatches** table in the result. Default in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685). | Doesn't modify the regular expression. Named captures are disabled and `\\1` style back references are enabled. |


Using **MatchAll** is the same as using the standard "g" modifier for regular expressions.

**IsMatch**( *Text*, *Pattern* [, *Options* ] )

- *Text* – Required. The text string to test.

- *Pattern* – Required. The pattern to test as a text string. Concatenate predefined patterns that the **Match** enum defines or provide a regular expression. *Pattern* must be a constant formula without variables, data sources, or other dynamic references that change as the app runs. Note, that the formula must be expressed as "Match.PredefinedPattern" e.g. Match.Email

- *Options* – Optional. A text-string combination of **MatchOptions** enum values. By default, **MatchOptions.Complete** is used. *Options* must be a constant formula without variables, data sources, or other dynamic references that change as the app runs.

**Match**( *Text*, *Pattern* [, *Options* ] )

- *Text* – Required. The text string to match.


- *Pattern* – Required. The pattern to match as a text string. Concatenate predefined patterns that the **Match** enum defines, or provide a regular expression. *Pattern* must be a constant formula without any variables, data sources, or other dynamic references that change as the app runs.

- *Options* – Optional. A text-string combination of **MatchOptions** enum values. By default, **MatchOptions.Contains** is used. *Options* must be a constant formula without any variables, data sources, or other dynamic references that change as the app runs.

**MatchAll**( *Text*, *Pattern* [, *Options* ] )

- *Text* – Required. The text string to match.

- *Pattern* – Required. The pattern to match as a text string. Concatenate predefined patterns that the **Match** enum defines or provide a regular expression. *Pattern* must be a constant formula without variables, data sources, or other dynamic references that change as the app runs.


- *Options* – Optional. A text-string combination of **MatchOptions** enum values. By default, **MatchOptions.Contains** is used. *Options* must be a constant formula without variables, data sources, or other dynamic references that change as the app runs.

Imagine your app has a **Text input** control named **TextInput1**. Users enter values into this control to store them in a database.

Users type **Hello world** into **TextInput1**.

| Formula | Description | Result |
| --- | --- | --- |
| `IsMatch( TextInput1.Text, "Hello world" )` | Tests whether the user's input matches, exactly, the string "Hello world". | **true** |
| `IsMatch( TextInput1.Text, "Good bye" )` | Tests whether the user's input matches, exactly, the string "Good bye". | **false** |
| `IsMatch( TextInput1.Text, "hello", Contains )` | Tests whether the user's input contains the word "hello" (case sensitive). | **false** |
| `IsMatch( TextInput1.Text, "hello", Contains & IgnoreCase )` | Tests whether the user's input contains the word "hello" (case insensitive). | **true** |


| Formula | Description | Result |
| --- | --- | --- |
| `IsMatch( "123-45-7890", Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit & Match.Digit )` | Matches a United States Social Security Number | **true** |
| `IsMatch( "joan@contoso.com", Match.Email )` | Matches an email address | **true** |
| `IsMatch( "123.456", Match.MultipleDigits & Match.Period & Match.OptionalDigits )` | Matches a sequence of digits, a period, and then zero or more digits. | **true** |
| `IsMatch( "123", Match.MultipleDigits & Match.Period & Match.OptionalDigits )` | Matches a sequence of digits, a period, and then zero or more digits. A period doesn't appear in the text to match, so this pattern isn't matched. | **false** |


| Formula | Description | Result |
| --- | --- | --- |
| `IsMatch( "986", "\\d+" )` | Matches an integer greater than zero. | **true** |
| `IsMatch( "1.02", "\\d+(\\.\\d\\d)?" )` | Matches a positive currency amount. If the input contains a decimal point, the input must also contain two numeric characters after the decimal point. For example, 3.00 is valid, but 3.1 isn't. | **true** |
| `IsMatch( "-4.95", "(-)?\\d+(\\.\\d\\d)?" )` | Matches a positive or negative currency amount. If the input contains a decimal point, the input must also contain two numeric characters after the decimal point. | **true** |
| `IsMatch( "111-11-1111", "\\d{3}-\\d{2}-\\d{4}" )` | Matches a United States Social Security number. Validates the format, type, and length of the supplied input field. The string to match must consist of three numeric characters followed by a dash, then two numeric characters followed by a dash, and then four numeric characters. | **true** |
| `IsMatch( "111-111-111", "\\d{3}-\\d{2}-\\d{4}" )` | Same as the previous example, but one of the hyphens is out of place in the input. | **false** |
| `IsMatch( "AStrongPasswordNot", "(?!^[0-9]\\*$)(?!^[a-zA-Z]\\*$)([a-zA-Z0-9]{8,10})" )` | Validates a strong password that must contain eight, nine, or 10 characters, at least one digit, and at least one alphabetic character. The string can't contain special characters. | **false** |


| Formula | Description | Result |
| --- | --- | --- |
| `Match( "Bob Jones <bob.jones@contoso.com>", "<(?<email>" & Match.Email & ")>")` | Extracts only the email portion of the contact information. | {email: "[bob.jones@contoso.com](mailto:bob.jones@contoso.com)",FullMatch: "[bob.jones@contoso.com](mailto:bob.jones@contoso.com)",StartMatch: 11} |
| `Match( "Bob Jones <InvalidEmailAddress>", "<(?<email>" & Match.Email & ")>"` | Extracts only the email portion of the contact information. No legal address is found (there is no @ sign), so the function returns *blank*. | *blank* |
| `Match( Language(), "(<language>\\w{2})(?:-(?<script>\\w{4}))?(?:-(?<region>\\w{2}))?" )` | Extracts the language, script, and region portions of the language tag that the [Language](https://learn.microsoft.com/function-language) function returns. These results reflect the United States; see the [Language](https://learn.microsoft.com/function-language) for more examples. The **(?:** operator groups characters without creating another sub-match. | {language: "en",script: *blank*, region: "US",FullMatch: "en-US", StartMatch: 1} |
| `Match( "PT2H1M39S", "PT(?:(?<hours>\\d+)H)?(?:(?<minutes>\\d+)M)?(?:(?<seconds>\\d+)S)?" )` | Extracts the hours, minutes, and seconds from an ISO 8601 duration value. The extracted numbers are still in a text string; use the [Value](https://learn.microsoft.com/function-value) function to convert it to a number before mathematical operations are performed on it. | { hours: "2",minutes: "1",seconds: "39",FullMatch: "PT2H1M39S",StartMatch: 1} |


Let's drill into that last example. If you wanted to convert this string to a date/time value using the [Time](https://learn.microsoft.com/function-date-time) function, you must pass in the named submatches individually. To do this, use the [With](https://learn.microsoft.com/function-with) function operating on the record that **Match** returns:

```
With(
    Match( "PT2H1M39S", "PT(?:(?<hours>\\d+)H)?(?:(?<minutes>\\d+)M)?(?:(?<seconds>\\d+)S)?" ),
   Time( Value( hours ), Value( minutes ), Value( seconds ) )
)
```

For these examples, add a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control, set its **OnSelect** property to this formula, and then select the button:

```
Set( pangram, "The quick brown fox jumps over the lazy dog." )
```


| Formula | Description | Result |
| --- | --- | --- |
| `Match( pangram, "THE", IgnoreCase )` | Find all matches of "THE" in the text string that the **pangram** variable contains. The string contains two matches, but only the first is returned because you're using **Match** and not **MatchAll**. | {FullMatch: "The",StartMatch: 32} |
| `MatchAll( pangram, "the" )` | Find all matches of "the" in the text string that the **pangram** variable contains. The test is case sensitive, so only the second instance of "the" is found. | ![MatchAll for pangram.](https://learn.microsoft.com/media/function-ismatch/pangram-the-one.png)<br> |
| `MatchAll( pangram, "the", IgnoreCase )` | Find all matches of "the" in the text string that the **pangram** variable contains. In this case, the test is case insensitive, so both instances of the word are found. | ![MatchAll with IgnoreCase.](https://learn.microsoft.com/media/function-ismatch/pangram-the-two.png)<br> |
| `MatchAll( pangram, "\\b\\wo\\w\\b" )` | Finds all three-letter words with an "o" in the middle. "brown" is excluded because it's not a three-letter word and, therefore, fails to match "\\b" (word boundary). | ![MatchAll for pangram with b, wo, w and b.](https://learn.microsoft.com/media/function-ismatch/pangram-fox-dog.png)<br> |
| `Match( pangram, "\\b\\wo\\w\\b\\s\\*(?<between>\\w.+\\w)\\s\\*\\b\\wo\\w\\b" )` | Matches all the characters between "fox" and "dog". | {between: "jumps over the lazy",FullMatch: "fox jumps over the lazy dog",StartMatch: 17 } |


To see the results of **MatchAll** in a gallery:

1. In an empty screen, insert a blank vertical [gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) control.

2. Set the gallery's **Items** property to **MatchAll( pangram, "\\w+" )** or **MatchAll( pangram, MultipleLetters )**.

![Items gallery.](https://learn.microsoft.com/media/function-ismatch/pangram-gallery1.png)

3. Select "Add an item from the Insert tab" in the middle of the gallery control to select the template of the gallery.

4. Add a [Label](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-box) control to the gallery's template.

5. Set the label's **Text** property to **ThisItem.FullMatch**.

The gallery is filled with each word in our example text. To see all the words on one screen, resize the gallery's template and the label control.

![Text property.](https://learn.microsoft.com/media/function-ismatch/pangram-gallery2.png)

