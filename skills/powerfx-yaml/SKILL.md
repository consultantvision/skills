---
name: powerfx-yaml
description: Generate PowerApps PowerFx YAML code for screens and components. Use when the user asks for PowerApps code, YAML definitions, or specific screen logic.
license: Complete terms in LICENSE.txt
---

# PowerFx YAML Generation

This skill enables the generation of syntactically correct PowerFx YAML code for PowerApps Canvas Apps.

## Critical Syntax Rules

1. **Control Definition**: ALWAYS use the `Control:` key (never use `Name As Type` syntax)
2. **Formulas with Colons**: Use block scalars (`|`) for any formula containing `:` (e.g., `UpdateContext`)
3. **Leading `=`**: All property expressions MUST start with `=`
4. **Properties Block**: Controls must have a `Properties:` section for their attributes

## Control Types Reference

### Standard Controls

```yaml
- btnSubmit:
    Control: Button
    Properties:
      Text: ="Submit"
      OnSelect: |
        =Notify("Saved")

- lblTitle:
    Control: Label
    Properties:
      Text: ="Welcome"
      FontWeight: =FontWeight.Bold

- radChoice:
    Control: Radio
    Properties:
      Items: =["Yes", "No"]
      Layout: =Layout.Horizontal

- cmbOptions:
    Control: ComboBox
    Properties:
      Items: =["Option 1", "Option 2"]
      SelectMultiple: =true
```

### Classic/TextInput (Form Inputs)

Use `Classic/TextInput` for text entry controls:

```yaml
- txtName:
    Control: Classic/TextInput
    Properties:
      Mode: =TextInputMode.Multiline
      Height: =100

- txtEmail:
    Control: Classic/TextInput
    Properties:
```

**Important**: Do NOT use `Default`, `DefaultValue`, `Hint`, or `HintText` properties - they are not supported.

### GroupContainer (Layout Containers)

MUST use versioned syntax with `Variant`:

```yaml
- MainContainer:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      LayoutDirection: =LayoutDirection.Vertical
      LayoutGap: =16
      Fill: =RGBA(245, 245, 245, 1)
    Children:
      - ChildControl:
          Control: Label
          Properties:
            Text: ="Child Content"
```

## Common Patterns

### Tab Navigation with Conditional Visibility

```yaml
- btnTab1:
    Control: Button
    Properties:
      Text: ="Tab 1"
      OnSelect: |
        =UpdateContext({ varCurrentTab: "Tab1" })

- conTab1Content:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      Visible: =varCurrentTab = "Tab1"
    Children:
      - lblContent:
          Control: Label
          Properties:
            Text: ="Tab 1 Content"
```

### Conditional Container

```yaml
- conConditional:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      Visible: =varShowDetails = true
    Children:
      - txtDetails:
          Control: Classic/TextInput
          Properties:
            Mode: =TextInputMode.Multiline
```

## Reference

For detailed syntax rules, see [syntax-guide.md](syntax-guide.md).
