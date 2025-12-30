---
title: User function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 20:01:28 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 20:01:33 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The User function returns information about the current Power Apps user, including their email address, full name, Microsoft Entra Object ID, and image.
- The function provides properties such as `User().Email`, `User().FullName`, `User().EntraObjectId`, and `User().Image` to access specific user details.
- The information returned by the User function is specific to the current Power Apps user and may not match the user's information in other services like Office 365.


Detailed summary

- The User function in Power Platform returns a record of information about the current user, including their email address, full name, Microsoft Entra Object ID, and image, which can be used in various applications such as Canvas apps, Dataverse functions, and Power Pages.
- The User function provides access to specific properties, such as User().Email, which returns the user's UPN and not the SMTP email address, User().EntraObjectId, which is a unique GUID value for each user, User().FullName, which includes the user's first and last names, and User().Image, which is an image URL that can be used to display the user's image in an app.
- The information returned by the User function is specific to the current Power Apps user and may not match the user's information in Office 365 or other services, and it is worth noting that the User function was updated in March 2020 to fix issues with retrieving photos, so users who published their application prior to this date may need to re-open, save, and republish their application to take advantage of the updated implementation.
- The User function can be used in various formulas, such as User(), which returns a record of all information for the current Power Apps user, User().Email, which returns the email address of the current user, User().FullName, which returns the full name of the current user, User().EntraObjectId, which returns the Microsoft Entra Object ID of the current user, and User().Image, which returns the image URL for the current user and can be used to display the image in an app by setting the Image property of the Image control to this value.
- To use the User function effectively, it is essential to understand the properties and formulas available, such as the example provided, which shows how to use the User function to retrieve information about a user named "John Doe" with an email address of "[john.doe@contoso.com](mailto:john.doe@contoso.com)", an Entra Object Id of "aaaaaaa-0000-1111-2222-bbbbbbbbbbbb", and an image URL of "blob:1234...5678", and how to display the user's image in an app using the Image control.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-user)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Dataverse functions Power Pages

Returns information about the current user.

The **User** function returns a [record](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables#records) of information about the current user:

| Property | Description |
| --- | --- |
| **User().Email** | Email address of the current user. The `User().Email` function returns the user's UPN and not the SMTP email address. |
| **User().EntraObjectId** | [Microsoft Entra](https://app.getrecall.ai/item/c271a6ea-1478-4883-a63a-5665c35fd0b9) Object ID of the current user, useful for calling APIs that use this value. This is a GUID value and unique for each user. |
| **User().FullName** | Full name of the current user, including first and last names. |
| **User().Image** | Image of the current user. This will be an image URL of the form "blob:*identifier*". Set the [Image](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-visual) property of the [Image](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-image) control to this value to display the image in the app. |

Note


The information returned is for the current Power Apps user. It will match the "Account" information that is displayed in the Power Apps players and studio, which can be found outside of any authored apps. This may not match the current user's information in Office 365 or other services.

Note

If you published your application with a User function prior to March 2020, you may find that it, intermittently, will not retrieve photos. The issues were fixed in the late March 2020 release. To take advantage of the updated implementation, simply re-open your application, save it, and republish it.

**User**()

The current Power Apps user has the following information:

- Full Name: **"John Doe"**

- Email address: **"**[john.doe@contoso.com](mailto:john.doe@contoso.com)**"**

- Entra Object Id: **aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb** *(GUID)*

- Image:


| Formula | Description | Result |
| --- | --- | --- |
| **User()** | Record of all information for the current Power Apps user. | { FullName: "John Doe", Email: "[john.doe@contoso.com](mailto:john.doe@contoso.com)", Image: "blob:1234...5678", EntraObjectId: a90c6800‑e58c‑4495‑81f7‑55819b56fe2a } |
| **User().Email** | The email address of the current Power Apps user. | "[john.doe@contoso.com](mailto:john.doe@contoso.com)" |
| **User().FullName** | The full name of the current Power Apps user. | "John Doe" |
| **User().EntraObjectId** | [Microsoft Entra](https://app.getrecall.ai/item/c271a6ea-1478-4883-a63a-5665c35fd0b9) Object ID of the current user. | aaaaaaaa-0000-1111-2222-bbbbbbbbbbbb *(GUID)* |
| **User().Image** | The image URL for the current Power Apps user. Set the **Image** property of the **Image** control to this value to display the image in the app. | "blob:1234...5678"<br><br>With **ImageControl.Image**: |

