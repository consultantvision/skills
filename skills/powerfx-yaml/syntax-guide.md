# PowerFx YAML Syntax Guide

This guide defines the strict syntax rules for generating PowerApps YAML.

## 1. Leading Equal Sign
**Rule**: All property values that are expressions (including literals treated as formulas) MUST start with a leading `=`.
*   Correct: `Text: ="Hello"`
*   Correct: `Width: =100`
*   Incorrect: `Text: "Hello"`
*   Incorrect: `Width: 100`

## 2. Single-line vs Multi-line
**Rule**: Use single-line only if the expression does not contain colons (`:`) or hash signs (`#`).
*   Example: `Color: =RGBA(0, 0, 0, 1)`

**Rule**: If the expression contains `:` or `#`, or spans multiple lines, YOU MUST use YAML block scalars (`|` or `|+`).
*   Example:
    ```yaml
    Items: |
      =Filter(
          Accounts,
          'Account Name' = "Contoso"
      )
    ```

## 3. Component Definition
**Rule**: Use `Name As Type` or `Name As Type.Template` where applicable, or adhere to the provided structure if nesting in a `Children` list.
*   Example: `MyGallery As Gallery.horizontalGallery:`

## 4. Control Nesting
**Rule**: Use the `Children:` key with list items (`-`) to nest controls.
*   Example:
    ```yaml
    MainContainer As GroupContainer:
        Children:
          - SubmitButton As Button:
              Text: ="Submit"
    ```

## 5. Comments
**Rule**:
*   YAML comments (`#`) are allowed but not preserved in the formula.
*   PowerFx comments (`//` or `/* */`) MUST be placed inside the formula (after the `=` or inside the block).

## 6. Identifiers
**Rule**: If a name contains special characters, use single quotes `'Name with space'`:
*   Example: `'Submit Button' As Button:`
