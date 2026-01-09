---
name: powerfx-yaml
description: Generate PowerApps PowerFx YAML code for screens and components. Use when the user asks for PowerApps code, YAML definitions, or specific screen logic.
license: Complete terms in LICENSE.txt
---

# PowerFx YAML Generation

This skill enables the generation of syntactically correct PowerFx YAML code for PowerApps Canvas Apps.

## Critical Syntax Rules

1. **Control Definition**: ALWAYS use the `Control:` key with specific versions (e.g., `Button@0.0.45`) to ensure compatibility.
2. **Formulas with Colons**: Use block scalars (`|`) for any formula containing `:` (e.g., `UpdateContext`, `If`).
3. **Leading `=`**: All property expressions MUST start with `=`.
4. **Properties Block**: Controls must have a `Properties:` section for their attributes.
5. **Unique Names**: Ensure all control names are unique across the screen (suffixing with `_1` or similar is a good practice).

## Control Types Reference

### Standard Controls (Use Specific Versions)
```yaml
- btnSubmit_1:
    Control: Button@0.0.45
    Properties:
      Text: ="Submit"
      OnSelect: |
        =Notify("Saved")

- lblTitle_1:
    Control: Label@2.5.1
    Properties:
      Text: ="Welcome"
      FontWeight: =FontWeight.Bold

- radChoice_1:
    Control: Radio@0.0.25
    Properties:
      Items: =["Yes", "No"]
      Layout: =Layout.Horizontal

- cmbOptions_1:
    Control: ComboBox@0.0.51
    Properties:
      Items: =["Option 1", "Option 2"]
      SelectMultiple: =true
```

### Form Inputs
Use `Classic/TextInput@2.3.2` for text fields to ensure access to properties like `Mode`.
```yaml
- txtName_1:
    Control: Classic/TextInput@2.3.2
    Properties:
      Mode: =TextInputMode.Multiline
      Height: =100
```
**Important**: Do NOT use `Default`, `DefaultValue`, `Hint`, or `HintText` property keys directly if they are not supported by the schema version. Use `Value:` for input text.

### Visual Shapes & Icons
```yaml
- rectSeparator_1:
    Control: Rectangle@2.3.0
    Properties:
      Fill: =RGBA(100, 100, 100, 1)
      Height: =1

- icoStatus_1:
    Control: Classic/Icon
    Properties:
      Icon: =Icon.CheckBadge
      Color: =RGBA(0, 128, 0, 1)
```

### Layout & Containers
Always use `GroupContainer@1.3.0` with `Variant: AutoLayout`.
```yaml
- MainContainer_1:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      LayoutDirection: =LayoutDirection.Vertical
      LayoutGap: =16
      LayoutAlignItems: =LayoutAlignItems.Stretch
      LayoutJustifyContent: =LayoutJustifyContent.SpaceBetween
    Children:
      - ChildControl_1:
          Control: Label@2.5.1
          Properties:
            AlignInContainer: =AlignInContainer.Stretch
            FillPortions: =1
```

## Common Patterns

### Dashboard Cards
Create cards using containers with DropShadow and generic visual styling.
```yaml
- DashboardCard_1:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.Light
      Fill: =RGBA(255, 255, 255, 1)
      PaddingLeft: =20
      PaddingRight: =20
```

### Tab Navigation
```yaml
- TabContainer_1:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      LayoutDirection: =LayoutDirection.Horizontal
    Children:
      - btnTab1_1:
          Control: Button@0.0.45
          Properties:
             Text: ="Tab 1"
             OnSelect: |=UpdateContext({ varTab: "Tab1" })
```

## Reference
For detailed syntax rules, see [syntax-guide.md](syntax-guide.md).
