---
title: Download function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:41:53 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:42:36 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Download function downloads a file from the web to the local device, prompting the user for a location to save the file in native players.
- The function's behavior on the web depends on the browser's settings and pop-up blocker configuration, and may open a new tab to display the file.
- The Download function can only be used in behavior formulas, and requires a URL address as an argument, with the syntax being `Download(Address)`.


Detailed summary

- The Download function in Power Platform is used to download a file from the web to the local device, and it applies to both Canvas apps and Model-driven apps.
- When the Download function is used in native players, such as Windows, Android, and iOS, the user is prompted for a location to save the file, whereas on the web, the function's behavior depends on the browser's settings and pop-up blocker configuration.
- The Download function can only be used in behavior formulas and requires the URL address of a web resource to download, which is specified using the Address parameter, and it returns the location where the file was stored locally as a text string, but only on Windows.
- Microsoft Power Apps cannot authenticate download requests to the address provided in the Download function, which means that if a file is stored on a site that requires authentication, such as a SharePoint site, the download request may not work in the Power Apps mobile app.
- The Download function can be used to download various types of files, including images, videos, and PDFs, and the behavior of the function may vary depending on the file type and the browser being used, with some browsers opening a new tab to display the file and others prompting the user to save the file.
- To use the Download function, users can create a formula, such as Download("[https://go.microsoft.com/fwlink/?linkid=827480](https://go.microsoft.com/fwlink/?linkid=827480)"), which downloads a specific file, in this case, a user guide for the Surface Book, and this formula can be used in an app, such as one created using the Product Showcase tablet layout template.
- When creating an app that uses the Download function, users can follow steps such as selecting the Product Showcase template, inserting a label, and setting the OnSelect property to the Download formula, and then saving and publishing the app to test the Download function.
- It is recommended to check the browser settings and pop-up blocker configuration if the Download formula is used to retrieve a file and the file is not downloaded successfully, as the browser may be blocking the download or waiting for the user's response to a dialog box asking for permission to download the file.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-download)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Model-driven apps

Downloads a file from the web to the local device.

The **Download** function downloads a file from the web to the local device.

In native players (Windows, Android, and iOS), the user is prompted for a location to save the file.

When used on the web, **Download** is dependent on the browser's settings and pop-up blocker configuration to determine what happens with the file. For images, videos, PDFs, and other file types that the browser natively supports, a new browser tab is opened to display the file. Many browsers support saving the contents to the local file system.

Only on Windows, **Download** returns the location where the file was stored locally as a text string.

**Download** can only be used in [behavior formulas](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth).

**Download**( *Address* )

- *Address* – Required. The URL address of a web resource to download.

Note

[Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) cannot authenticate download requests to the address provided in the Download() function.


For example, when using this function to download a file stored on a [SharePoint](https://app.getrecall.ai/item/824cb046-25df-4d66-8e76-94cd0c23e337) site that requires authentication, the request might work when using a web browser since the browser session might authenticate against the SharePoint site using cached credentials. However, in Power Apps mobile app, the request won't work since authenticating the download request is not handled by the mobile device.

The following formula downloads the user's guide for the Surface Book, a PDF file:

```
Download( "https://go.microsoft.com/fwlink/?linkid=827480" )
```

When run in a mobile device, the user is prompted for a location to save the file.

When run in most web browsers, a new tab is opened to display the PDF file as most browsers natively support this file type.

The **Product Showcase** tablet layout template was used for the following example. To create an app with this template, follow the steps from [create an app](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/get-started-test-drive) article and select the **Product Showcase** template. You can also use your own app.

1. Go to [Power Apps](https://make.powerapps.com/).


2. Select **Apps** from left navigation pane.

3. Select your app and then select **Edit**.

4. Select **Insert** from the menu and then select **Label**.

5. Move the label to the bottom right of the screen.

6. From the properties pane on the right-side, select **Color** as *white* and set **Border thickness** at *1*.

7. Select the **Text** property from right-side and enter text as *Download User Guide*.

8. From property list on top left, select **OnSelect**.

9. Enter formula as `Download("https://go.microsoft.com/fwlink/?linkid=827480")`. You can also use any other URL of your choice.

![Download example.](https://learn.microsoft.com/media/function-download/download-example-onselect.png)

10. Save and publish the app.

11. Play the app.

12. Select the **Download User Guide** button to download the guide.

Note

- Your browser settings determine whether to download the file or open the file directly in a new tab. For more details, go to [Download function description](https://learn.microsoft.com/#description).


- If the Download formula is used to retrieve a file and the file isn’t downloaded successfully, it’s recommended to check whether the download is blocked by a browser pop-up blocker or if the browser is waiting for the user’s response to a dialog box asking for permission to download the file.

[Canvas app formula reference](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/formula-reference)

