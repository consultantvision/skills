# PowerFx YAML Syntax Guide

This guide defines the strict syntax rules for generating PowerApps YAML.

## 1. Leading Equal Sign

**Rule**: All property values that are expressions (including literals treated as formulas) MUST start with a leading `=`.

* Correct: `Text: ="Hello"`
* Correct: `Width: =100`

## 2. Block Scalars (CRITICAL)

**Rule**: You MUST use YAML block scalars (`|`) if the formula:

* Spans multiple lines.
* Contains a colon (`:`) even if on a single line (e.g., `UpdateContext({ a: 1 })`).
* Contains a hash sign (`#`).
* Example:

    ```yaml
    OnSelect: |
      =UpdateContext({ varCurrentTab: "Home" })
    ```

## 3. Component Definition

**Standard Syntax**: `Name As Type:`

* Example: `MyButton As Button:`

**Container Syntax (GroupContainer)**:
For advanced containers, use the explicit `Control` and `Variant` keys instead of `As Type`.

* Example:

    ```yaml
    MainContainer:
      Control: GroupContainer@1.4.0
      Variant: AutoLayout
      Properties:
        LayoutDirection: =LayoutDirection.Vertical
        PaddingTop: =20 # Use Padding*, not LayoutPadding*
    ```

## 4. Control Nesting

**Rule**: Use the `Children:` key with list items (`-`) to nest controls.

## 5. Identifiers

**Rule**: If a name contains special characters, use single quotes `'Name with space'`.
