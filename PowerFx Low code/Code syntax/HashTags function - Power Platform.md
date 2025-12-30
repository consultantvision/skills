---
title: HashTags function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:58:57 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:59:02 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The HashTags function extracts hashtags from a string of text, starting with a pound character (#) followed by letters, numerals, underscores, or currency symbols.
- The function returns a one-column table containing the hashtags found in the string, or an empty table if no hashtags are present.
- The syntax for the HashTags function is `HashTags( String )`, where `String` is the required input to scan for hashtags.


Detailed summary

- The HashTags function in Power Platform is used to extract hashtags from a string of text, and it applies to Canvas apps, Model-driven apps, and Power Pages.
- The function scans a string for hashtags that start with a pound character (#) followed by any combination of uppercase and lowercase letters, numerals, underscores, and currency symbols, such as $.
- The HashTags function returns a one-column table that contains the hashtags in the string, and if the string contains no hashtags, it returns an empty one-column table.
- The syntax of the HashTags function is HashTags(String), where String is a required parameter that represents the string to scan for hashtags.
- To use the HashTags function, a string can be passed to it, such as a sentence typed into a Text input control, and the function will return a table of hashtags found in the string.
- The returned table can be used as the Items property of a gallery control, allowing the hashtags to be displayed in a vertical custom gallery, with each hashtag shown in a Label control within the gallery template.
- The HashTags function is case-sensitive and will treat #app and #App as different hashtags, and it will also extract hashtags that contain numerals and underscores, such as #coUnt123 and #123abc.
- The function will not extract strings that start with a pound character but are not followed by valid characters, such as #1-23 or #$*(#@"), and it will only extract the valid part of the string, such as #1 from #$*(#@").
- The HashTags function is a useful tool for extracting and displaying hashtags from text strings in Power Platform applications, and it can be used in a variety of scenarios, such as displaying hashtags from social media posts or user input.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-hashtags)
