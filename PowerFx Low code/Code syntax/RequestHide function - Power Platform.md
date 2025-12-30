---
title: RequestHide function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:55:12 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:55:17 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The RequestHide function is used to hide the SharePoint form in Canvas apps.
- It only works with SharePoint forms and is often used for the OnSuccess property.
- The function has no parameters and can be called using RequestHide().


Detailed summary

- The RequestHide function in the Power Platform is used to hide the SharePoint form, and it is specifically designed to work with SharePoint forms, making it a useful tool for customizing these forms.
- The RequestHide function is often utilized as the default setting for the OnSuccess property of a SharePoint form that is being customized, allowing for seamless integration and functionality.
- This function is not necessary for the SharePointIntegration control's OnCancel event, as SharePoint automatically hides the form when a user selects the Cancel option, and the RequestHide function is primarily intended to react to a SharePoint form.
- The syntax for the RequestHide function is straightforward, consisting of RequestHide() with no parameters, making it easy to implement and use in various scenarios.
- An example of using the RequestHide function is by applying the formula RequestHide() to hide the form, demonstrating its simplicity and effectiveness in achieving the desired outcome.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-requesthide)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps

Hides the [SharePoint form](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/sharepoint-form-integration#understand-the-sharepointintegration-control).

Note

Only works with [SharePoint forms](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/sharepoint-form-integration).

## Description

Use the **RequestHide** function to hide the [SharePoint](https://app.getrecall.ai/item/824cb046-25df-4d66-8e76-94cd0c23e337) form. By default, RequestHide() is used for the *OnSuccess* property of a SharePoint form being customized.

![RequestHide example.](https://learn.microsoft.com/media/function-requesthide/requesthide-fuction.png)

This function is not required for the **SharePointIntegration** control's **OnCancel** event as SharePoint by default hides the form when a user selects **Cancel**, and the function only reacts to a SharePoint form.

## Syntax

**RequestHide** ( )

- No parameters.

## Examples

| Formula | Description |
| --- | --- |
| **RequestHide()** | Hides the form. |

