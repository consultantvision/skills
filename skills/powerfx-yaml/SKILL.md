---
name: powerfx-yaml
description: Generate PowerApps PowerFx YAML code for screens and components. Use when the user asks for PowerApps code, YAML definitions, or specific screen logic.
license: Complete terms in LICENSE.txt
---

# PowerFx YAML Generation

This skill enables the generation of syntactically correct PowerFx YAML code for PowerApps Canvas Apps.

## Critical Syntax Rules

1. **Block Scalars for Colons**: ALWAYS use block scalars (`|`) for formulas containing colons (e.g., `UpdateContext`, `If`, records) to avoid YAML parsing errors (PA1001).

    ```yaml
    OnVisible: |
      =UpdateContext({ varStep: 1 })
    ```

2. **Control Definition & Versioning**: Use tested, specific versions or valid namespaces.
    * **Containers**: Use `GroupContainer@1.4.0` (avoid deprecated 1.3.0).
    * **Buttons**: Use `Classic/Button` (supports `Fill`).
    * **Text Inputs**: Use `Classic/TextInput@2.3.2`.
    * **Radio**: Use `Radio@0.0.25`.
    * **ComboBox**: Use `ComboBox@0.0.51`.
3. **Leading `=`**: All property expressions MUST start with `=`.
4. **Properties Block**: Controls must have a `Properties:` section.

## Root Structure

Define multiple screens under a `Screens:` key.

```yaml
Screens:
  Screen1_Name:
    Properties:
      Fill: =RGBA(255, 255, 255, 1)
    Children:
      - MainContainer: ...
  Screen2_Name: ...
```

## Layout Patterns

### Split Column Layout (50/50)

Use a horizontal parent container with two vertical child containers, both set to `FillPortions: =1`.

```yaml
- conRow:
    Control: GroupContainer@1.4.0
    Variant: AutoLayout
    Properties:
      LayoutDirection: =LayoutDirection.Horizontal
      LayoutGap: =20
    Children:
      - conLeft:
          Control: GroupContainer@1.4.0
          Variant: AutoLayout
          Properties:
            LayoutDirection: =LayoutDirection.Vertical
            FillPortions: =1
      - conRight:
          Control: GroupContainer@1.4.0
          Variant: AutoLayout
          Properties:
            LayoutDirection: =LayoutDirection.Vertical
            FillPortions: =1
```

### Fixed Height Headers/Dashboards

Use `LayoutMinHeight` and `LayoutMaxHeight` to enforce fixed sizes in auto-layout.

```yaml
- Dashboard:
    Control: GroupContainer@1.4.0
    Variant: AutoLayout
    Properties:
      LayoutDirection: =LayoutDirection.Vertical
      LayoutMinHeight: =50
      LayoutMaxHeight: =120

### Horizontal Field Row (Side-by-Side Label & Input)

Wrap each Label and Input pair in a horizontal container. Set the Label to a fixed width and the Input to `FillPortions: =1`.

```yaml
- conRow_Field:
    Control: GroupContainer@1.4.0
    Variant: AutoLayout
    Properties:
      LayoutDirection: =LayoutDirection.Horizontal
      LayoutGap: =10
      LayoutAlignItems: =LayoutAlignItems.Center
    Children:
      - lblField:
          Control: Label@2.5.1
          Properties:
            Text: ="Field Name"
            Width: =225
      - txtField:
          Control: Classic/TextInput@2.3.2
          Properties:
            FillPortions: =1
```

### Nested Sub-Field Groups

For complex forms where a main label covers multiple sub-fields (e.g., "Contact Details" -> Name, Role, Phone), use nested containers.

1. **Parent Container**: Functionally acts as the group wrapper.
2. **Child Rows**: Nested horizontal containers for each sub-field.
3. **Label Sizing**: Use smaller fixed widths (e.g., `Width: =80`) for sub-labels to maximize input space.

```yaml
- conContactDetailsNested:
    Control: GroupContainer@1.4.0
    Variant: AutoLayout
    Properties:
      LayoutDirection: =LayoutDirection.Vertical
      LayoutGap: =5
      FillPortions: =1
    Children:
      - conSubRow_Name:
          Control: GroupContainer@1.4.0
          Variant: AutoLayout
          Properties:
            LayoutDirection: =LayoutDirection.Horizontal
            LayoutGap: =10
            LayoutAlignItems: =LayoutAlignItems.Center
          Children:
            - lblName:
                Control: Label@2.5.1
                Properties:
                  Text: ="Name"
                  Width: =80
            - txtName:
                Control: Classic/TextInput@2.3.2
                Properties:
                  FillPortions: =1
```

```

## Control Types Reference

### Buttons & Navigation

```yaml
- btnNext:
    Control: Classic/Button
    Properties:
      Text: ="Next"
      OnSelect: =Navigate(Screen2_Name)
```

### Form Inputs

`Classic/TextInput@2.3.2` supports `HintText` and `Mode`.

```yaml
- txtAddress:
    Control: Classic/TextInput@2.3.2
    Properties:
      HintText: ="Enter Address"
      Mode: =TextInputMode.Multiline
      Height: =60
```

### Radio & Selection

```yaml
- radOption:
    Control: Radio@0.0.25
    Properties:
      Items: =["Option A", "Option B"]
      Layout: =Layout.Horizontal
```

## Error Handling Guide

### PA1001: YamlInvalidSyntax

**Cause**: Presence of `:` in single-line formula without quoting or block scalar.
**Fix**: Convert to block scalar (`|`).

### PA2108: Unknown Property 'Fill'

**Cause**: Modern controls often lack styling properties like `Fill`.
**Fix**: Use `Classic/Button` namespace.

### PA2105/PA2107: Version Conflicts

**Cause**: Mixing control versions (e.g., `GroupContainer@1.3.0` vs `1.4.0`).
**Fix**: standardize on `GroupContainer@1.4.0` globally.

## Reference

For detailed syntax rules, see [syntax-guide.md](syntax-guide.md).

## Full Examples

For complete, working screen examples demonstrating these patterns, see:

* [Screen1_ServiceDetails_Refined.yaml](../../PowerFx%20Low%20code/Examples/Screen1_ServiceDetails_Refined.yaml)
* [Screen2_SupplierDetails_Refined.yaml](../../PowerFx%20Low%20code/Examples/Screen2_SupplierDetails_Refined.yaml)
* [Screen3_Procurement_Refined.yaml](../../PowerFx%20Low%20code/Examples/Screen3_Procurement_Refined.yaml)
