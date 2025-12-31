# Prompt: Create 'powerfx-yaml' Skill

**Instructions**:
Copy the following prompt and run it to generate the complete `powerfx-yaml` Skill structure. This skill will enable the AI to generate syntactically correct PowerFx YAML code for PowerApps.

---

**Role**: You are an expert methodologist for AI Skills. Your task is to create a new Skill named `powerfx-yaml` that strictly follows the repository's structure and the *Microsoft Power Fx YAML Formula Grammar*.

**Objective**:
Create a directory named `powerfx-yaml` containing the following files:
1.  [SKILL.md](file:///c:/Users/Public/GitHub/CVSkills/skills/skills/docx/SKILL.md): The main entry point.
2.  `syntax-guide.md`: A detailed reference for the YAML syntax rules.
3.  [LICENSE.txt](file:///c:/Users/Public/GitHub/CVSkills/skills/skills/docx/LICENSE.txt): A standard MIT license file.

**Requirements for [SKILL.md](file:///c:/Users/Public/GitHub/CVSkills/skills/skills/docx/SKILL.md)**:
-   **Frontmatter**:
    ```yaml
    ---
    name: powerfx-yaml
    description: Generate PowerApps PowerFx YAML code for screens and components. Use when the user asks for PowerApps code, YAML definitions, or specific screen logic.
    license: Complete terms in LICENSE.txt
    ---
    ```
-   **Content**:
    -   **Overview**: Briefly explain that this skill generates valid PowerFx YAML.
    -   **Progressive Disclosure**: Link to `syntax-guide.md` for strict grammar rules.
    -   **Workflow**:
        1.  Understand the user's component/screen requirements (Controls, Logic, Layout).
        2.  Apply the grammar rules from `syntax-guide.md`.
        3.  Output the code in a YAML code block.
    -   **Examples**: Provide 1-2 concise examples of valid output (e.g., a simple Button with an `OnSelect` formula).

**Requirements for `syntax-guide.md`**:
-   This file should serve as the "Source of Truth" for the syntax.
-   **Critical Rules** (Must be included):
    1.  **Formulas**: MUST start with a leading `=` (e.g., `Text: ="Submit"`).
    2.  **Single-line**: `Property: =Expression`. NO colons (`:`) or hashes (`#`) inside the expression line.
    3.  **Multi-line**: Use `|` or `|+` block scalars. Indent strictly.
        ```yaml
        Visible: |
          =If(
              varShow,
              true,
              false
          )
        ```
    4.  **Components**: `Name As Type:` or `Name As Type.Template:`.
    5.  **Comments**: Use `//` inside formulas. Do NOT use `#` for comments in the YAML structure.
    6.  **Control Nesting**: Use the `Children:` key with list items (`- Name:`).

**Requirements for `LICENSE.txt`**:
-   Include a standard MIT License text.

**Output Format**:
Please generate the full content for each of the three files (`SKILL.md`, `syntax-guide.md`, `LICENSE.txt`) inside code blocks so I can copy them directly.

---
