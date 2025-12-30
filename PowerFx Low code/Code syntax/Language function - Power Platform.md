---
title: Language function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:19:46 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:23:05 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Language function in Power Platform returns the language tag of the current user, including language, script, and region.
- The language tag can be in three formats: "lg-RE", "lg", or "lg-scrp-RE", and follows the IETF BCP-47 language tag format.
- The Language function can be used to tailor an app across locales, and can be combined with other functions, such as Text and Value, for translating text strings in a globally aware manner.


Detailed summary

- The Language function in Power Platform returns the language tag of the current user, which includes the language, script, and region, and can be used to tailor an app across different locales.
- The language tag can be in one of three formats: "lg-RE", where "lg" is the two-character abbreviation for the language and "RE" is the two-character abbreviation for the region, "lg", where only the language is specified, or "lg-scrp-RE", where "lg" is the language, "scrp" is the four-character abbreviation for the script, and "RE" is the region.
- Power Apps uses the IETF BCP-47 language tag format, and the list of supported language tags can be viewed by typing Value("1",) in the formula bar or advanced view and scrolling through the list of suggested locales.
- The Language function can be used in conjunction with the Text and Value functions to translate text strings in a globally aware manner, and when passing a language tag to these functions, the region can be omitted if it is not relevant.
- To demonstrate the use of the Language function, examples are provided for different locations, such as Lisbon, Portugal, Rio de Janeiro, Brazil, Atlanta, USA, Manchester, United Kingdom, Paris, France, Roseau, Dominica, and Belgrade, Serbia, which return language tags such as "pt-PT", "pt-BR", "en-US", "en-GB", "fr-FR", "en", and "sr-cyrl-RS" or "sr-latn-RS".
- A simple approach to localization is to create an Excel spreadsheet that maps an author-defined TextID to a translated text for the user's language, and then use the LookUp function in Power Apps to retrieve the translated text based on the language tag returned by the Language function.
- The Excel spreadsheet can be connected to Power Apps as a data source, and the LookUp function can be used to retrieve the translated text, with a fallback to a default text if no translation is found for the user's language.
- Alternatively, the Microsoft Translator service can be used to translate text on demand, using the Language function to determine the target language, but this approach has drawbacks such as lag and mechanical translations.
- The Microsoft Translator service uses the same language tags as the Language function, and can be used in Power Apps by adding it as a data source and using the Translate function to translate text.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-language)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Power Platform CLI Dataverse functions Power Pages

Returns the language tag of the current user.

The **Language** function returns the language, script, and region of the current user as a language tag.

Use the language information to tailor your app across locales. For example, if you're creating an app that is used in Italy and France, you can use **Language** to automatically display Italian and French strings to your users in those different locations.

A *language tag* can be in one of three formats:


| Return value | Description |
| --- | --- |
| **"*****lg‑RE*****"** | *lg* is the two character abbreviation for the language and *RE* is the two character abbreviation for the region. It's the most common return type. For example, "en-GB" is returned for United Kingdom. |
| **"*****lg*****"** | *lg* is the two character abbreviation for the language. It's the format used when Power Apps has information about the language, but doesn't have information for the specific region. |
| **"*****lg‑scrp‑RE*****"** | *lg* is the two character abbreviation for the language, *scrp* is the four character abbreviation for the script, and *RE* is the two character abbreviation for the region. |

Power Apps uses the [IETF BCP-47 language tag](https://tools.ietf.org/html/bcp47) format.

To see the list of supported language tags, type **Value("1",)** in the formula bar or advanced view and scroll through the list of locales suggested for the second argument.


The [Text](https://learn.microsoft.com/function-text) and [Value](https://learn.microsoft.com/function-value) functions also use language tags. Use these functions for translating to and from text strings in a globally aware manner. When passing a language tag to these functions and the region wouldn't make a difference, you can use just the language portion of the tag.

**Language**()

It's assumed that the host operating system and/or browser are using the default locale for the location.

| Formula | Location | Return Value |
| --- | --- | --- |
| **Language()** | Lisbon, Portugal | "pt-PT" |
| **Language()** | Rio de Janeiro, Brazil | "pt-BR" |
| **Language()** | Atlanta, USA | "en-US" |
| **Language()** | Manchester, United Kingdom | "en-GB" |
| **Language()** | Paris, France | "fr-FR" |
| **Language()** | Roseau, Dominica | "en" |
| **Language()** | Belgrade, Serbia | "sr-cyrl-RS" or "sr-latn-RS," depending on the user's system settings |


A simple approach to localization is to create an Excel spreadsheet mapping an author defined **TextID** to a translated text for the user's language. Although you could use a collection or any other data source for this table, we chose Excel because it's easy to edit and manage outside of the app by translators.

1. Create the following table in Excel:

![Localization table.](https://learn.microsoft.com/media/function-language/loc-table.png)

The entry with *blank* for the **Language** column is used as the default if there's no specific text string found for a given language. This entry must appear after all other entries for a given **TextID**.

For our purposes, we only need to look at the language of the locale and not the region. If regional considerations were important, we could included the full language tag value in the table above.

2. Use the **Insert** ribbon, **Table** command, to make this into a proper Excel table. By default, it's named **Table1** but you can name it whatever you like with the **Table Tools/Design** ribbon and the **Table Name:** text box on the far left hand side.


3. Save the Excel file to your local file system.

4. In Power Apps, in the right-hand pane, click, or tap the **Data Sources** tab, and then click or tap **Add data source**.

5. Click or tap **Add static data to your app**, click, or tap the Excel file that you saved, and then click or tap **Open**.

6. Select the table that you created, and then click, or tap **Connect**.

In your app, wherever you used the text **"Hello"** before, use this formula instead:

- **LookUp( Table1, TextID = "Hello" && (LanguageTag = Left( Language(), 2 ) || IsBlank( LanguageTag ))).LocalizedText**

This formula will lookup the appropriate **LocalizedText** value for the language of the user, and if that isn't found, will fall back on the default *blank* version.

Translated strings in other languages could be longer than they're in your language. In many cases, the labels and other elements that display the strings in your user interface are needed to be wider to accommodate.


You can translate text on demand using a translation service, such as the [Microsoft Translator](https://app.getrecall.ai/item/1e515522-2c36-48a7-9ad8-6fc896162c39) service:

1. In Power Apps, in the right-hand pane, click or tap the **Data Sources** tab, and then click or tap **Add data source**.

2. Click or tap **Microsoft Translator**.

In your app, wherever you would have used the text **"Hello"** before, use this formula instead:

- **MicrosoftTranslator.Translate( "Hello", Language() )**

The [Microsoft Translator](https://app.getrecall.ai/item/1e515522-2c36-48a7-9ad8-6fc896162c39) service uses the same language tags that the **Language** function returns.

This approach comes with some drawbacks when compared to the previous example which utilized a pretranslated table of text strings:

- The translation takes time to complete, requiring a call to a service across the network. It results in a lag to see the translated text in your app.

- The translation is mechanical and may not be what you anticipate or be the best choice for the situation within your app.

