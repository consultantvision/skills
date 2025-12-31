---
name: powerfx-yaml
description: Generate PowerApps PowerFx YAML code for screens and components. Use when the user asks for PowerApps code, YAML definitions, or specific screen logic.
license: Complete terms in LICENSE.txt
---

# PowerFx YAML Generation

This skill enables the generation of syntactically correct PowerFx YAML code for PowerApps Canvas Apps. It adheres to the Microsoft Power Fx YAML Formula Grammar.

## Workflow

1.  **Analyze Requirements**: Identify the screen controls, layout structure, and PowerFx logic (formulas) required by the user.
2.  **Apply Syntax Rules**: Strictly follow the grammar defined in [syntax-guide.md](syntax-guide.md).
    *   **Leading `=`**: All expressions must start with an equal sign.
    *   **Block Scalars**: Use multi-line syntax (`|`) for complex formulas or those with colons/hashes.
    *   **Component Structure**: Use correct `Name As Type` syntax.
3.  **Generate Output**: Produce the complete YAML structure within a code block.

## Examples

### Simple Button
```yaml
SubmitButton As Button:
    X: =100
    Y: =100
    Text: ="Submit Request"
    OnSelect: |
        =Notify( "Submitting..." );
        SubmitForm( RequestForm );
        Navigate( SuccessScreen, ScreenTransition.Fade )
```

### Gallery Component
```yaml
UserGallery As Gallery.horizontalGallery:
    Items: =UsersList
    TemplatePadding: =10
    Children:
        - TitleLabel As Label:
            Text: =ThisItem.FullName
            FontWeight: =FontWeight.Bold
```

## Reference
For detailed syntax rules, see [syntax-guide.md](syntax-guide.md).
