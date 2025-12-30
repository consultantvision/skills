---
title: EncodeHTML, EncodeUrl, and PlainText functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:46:16 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:46:22 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `EncodeHTML` function encodes a string for an HTML context, replacing characters like `<`, `>`, and `&`.
- The `EncodeUrl` function encodes a URL string, replacing nonalphanumeric characters with `%` and a hexadecimal number.
- The `PlainText` function removes HTML and XML tags from a string, converting certain tags to symbols.


Detailed summary

- The Power Platform provides several functions, including EncodeHTML, EncodeUrl, and PlainText, which can be used to encode and decode strings in various applications, such as Canvas apps, Copilot Studio, Desktop flows, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The EncodeUrl function encodes a URL string by replacing certain nonalphanumeric characters with a percentage sign and a hexadecimal number, and it requires a URL string as input, which is specified by the String parameter.
- The EncodeHTML function encodes a string by replacing certain characters that need to be escaped to appear properly in an HTML context, such as the characters <, >, and &, which are replaced by <, >, and &, respectively, and it requires an HTML string as input, which is specified by the String parameter.
- The PlainText function removes HTML and XML tags from a string, converting certain tags to an appropriate symbol, and it requires a string as input, which is specified by the String parameter, although it does not remove all HTML and XML tags.
- These functions return the encoded or decoded string as their output, and they can be used in various scenarios, such as displaying an RSS feed in a text gallery, where the PlainText function can be used to strip HTML and XML tags from the text, or the EncodeHTML function can be used to encode HTML tags so that they show up as text when interpreted as HTML.
- The use of these functions can be demonstrated through examples, such as setting the Text property of a label to PlainText(ThisItem.description) to remove HTML and XML tags, or using the formula EncodeHTML(ThisItem.description) to encode HTML tags, which can be useful for seeing the HTML structure of the text.
- Additionally, the HTML text control in a gallery can interpret the tags as HTML, allowing the decoded text to be displayed, and the EncodeHTML function can be used to encode the HTML tags so that they appear as text when interpreted as HTML.


Detailed summary

- The Power Platform provides several functions, including EncodeHTML, EncodeUrl, and PlainText, which can be used to encode and decode strings in various applications, such as Canvas apps, Copilot Studio, Desktop flows, Model-driven apps, Power Platform CLI, Dataverse functions, and Power Pages.
- The EncodeUrl function encodes a URL string by replacing certain nonalphanumeric characters with a percentage sign and a hexadecimal number, and it requires a URL string as input, which is specified by the String parameter.
- The EncodeHTML function encodes a string by replacing certain characters that need to be escaped to appear properly in an HTML context, such as the characters <, >, and &, which are replaced by <, >, and &, respectively, and it requires an HTML string as input, which is specified by the String parameter.
- The PlainText function removes HTML and XML tags from a string, converting certain tags to an appropriate symbol, and it requires a string as input, which is specified by the String parameter, although it does not remove all HTML and XML tags.
- These functions return the encoded or decoded string as their output, and they can be used in various scenarios, such as displaying an RSS feed in a text gallery, where the PlainText function can be used to strip HTML and XML tags from the text, or the EncodeHTML function can be used to encode HTML tags so that they show up as text when interpreted as HTML.
- The use of these functions can be demonstrated through examples, such as setting the Text property of a label to PlainText(ThisItem.description) to remove HTML and XML tags, or using the formula EncodeHTML(ThisItem.description) to encode HTML tags, which can be useful for seeing the HTML structure of the text.
- Additionally, the HTML text control in a gallery can interpret the tags as HTML, allowing the decoded text to be displayed, and the EncodeHTML function can be used to encode the HTML tags so that they appear as text when interpreted as HTML.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-encode-decode)
| Functions | Applies to |
| --- | --- |
| **EncodeHTML** | ![](https://learn.microsoft.com/media/yes-icon.svg)<br> Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions |
| **EncodeUrl****PlainText** | Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages |

Encodes and decodes strings.

The **EncodeUrl** function encodes a URL string, replacing certain nonalphanumeric characters with % and a hexadecimal number.

The **EncodeHTML** function encodes a string, replacing certain characters that need to be escaped to appear properly in an HTML context. For example, the characters <, >, and & are replaced by <, >, and &, respectively.

The **PlainText** function removes HTML and XML tags, converting certain tags such as these to an appropriate symbol:

- ****

- **"**

The return value from these functions is the encoded or decoded string. This function doesn't remove all HTML and XML tags.

**EncodeUrl**( *String* )

- *String* - Required. URL to be encoded.

**EncodeHTML**( *String* )

- *String* - Required. HTML to be encoded.

**PlainText**( *String* )


- *String* - Required. String from which HTML and XML tags are stripped.

If you show an RSS feed in a text gallery and then set the [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of a label in that gallery to **ThisItem.description**, the label might show raw HTML or XML code as in this example:

```
<p>
  We have done an unusually&nbsp;&quot;deep&quot; globalization and
  localization.
</p>
```

If you set the [Text](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of the label to **PlainText(ThisItem.description)**, the text appears as in this example:

```
We have done an unusually "deep" globalization and localization.
```

With the formula **EncodeHTML(ThisItem.description)**, the HTML tags are encoded so that they show up as text when interpreted as HTML, which can be useful to see the HTML structure:

```
&lt;p&gt;
  We have done an unusually&amp;nbsp;&amp;quot;deep&amp;quot; globalization and
  localization.
&lt;/p&gt;
```


If instead of a label you have an [HTML text control](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-html-text) in the gallery, and you set the [HtmlText](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-html-text) property of that control to **ThisItem.description** you also see the decoded text, because the HTML text control is interpreting the tags as HTML.

