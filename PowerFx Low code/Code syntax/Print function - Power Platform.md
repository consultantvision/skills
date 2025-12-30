---
title: Print function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:31:10 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:31:21 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Print function in Power Platform opens the current screen in the default browser print dialog, allowing you to print or save as a PDF.
- To use the Print function, you must add a button to a screen and define the Print function on the button's OnSelect property.
- The Print function has limitations, including not working on mobile devices, not printing multiple pages, and requiring specific browser settings to display all images and colors.


Detailed summary

- The Print function in Power Platform is a feature that allows users to print the current screen in a canvas app, either by sending it to a printer or saving it as a PDF file, and it can be accessed by adding a button to the screen and defining the Print function on the OnSelect property of the button.
- To use the Print function, users need to go to Microsoft Power Apps, select their app or create a new one, insert a button, and enter the formula Print() in the OnSelect property, then save and publish the app to print the screen when the button is selected.
- The Print function can be customized by accessing the screen properties when printing, such as hiding buttons or changing a form to view mode, and users can use the formula Not Screen1.Printing to hide buttons while printing.
- To create a print-friendly screen, users can use a screen template, such as the Portrait print option, which sizes the screen to a specific size, such as letter size, and allows for more custom control over the experience.
- The Print function has some limitations, including not working on mobile devices and SharePoint forms, and it can only print to the default browser printers, and in some cases, the Background graphics setting needs to be enabled to see all images and colors in the print.
- The Print function also has specific screen size requirements for different print sizes, such as A4 portrait, A4 landscape, Letter portrait, and Letter landscape, which are listed in a table with their corresponding screen heights and widths.
- Additionally, the Print function cannot print multiple pages, and users need to be aware of these limitations when using the feature in their canvas apps.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-print)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps

Opens the current screen in the default browser print dialog.

The print function allows you to select any screen and fit it to a page in order to send it to a printer for printing or allows you to save it as a PDF file.

The different configurations of the screen enable different printing outcomes. For fixed screens, they fit the size of the page, for use of the screen templates/special sized screens, we will fit the content to the size of the print.

Note

You can only print the screen you have added a button and defined **Print** function on `OnSelect` property of the button. For example, if you have added a button on `screen 2` and when you select the button, only the content in the `screen 2` gets printed.

`Print()`

1. Go to [Power Apps](https://make.powerapps.com/).

2. Select **Apps** from the left navigation pane.

3. Select your app or create an app from scratch.

4. Select **Insert** from the menu and then select **Button**.

5. From the property list on the top left, select **OnSelect**.

6. Enter the formula `Print()`.

7. Save and publish the app.


8. Play the app.

9. Select the button that you added. When you select the button, a default print browser pops up and allows you to choose from the available options to print or save it as a PDF file.

![Default print browser to print or save.](https://learn.microsoft.com/media/function-print/functions-print-screen.png)

To enable more customizable content, you can access the screen when the screen is printing to the change properties of the canvas app. For example, hiding buttons, or changing a form to view mode.

From the above example, where you insert a button on the screen and when you print the screen, you notice that the button is also gets printed. To remove the button from the screen while printing, on the button’s **Visible** property add the formula `Not Screen1.Printing`. Preview the app and select the button. Observe that the button does not show in the content in the browser preview print dialog.

An easy way to get started is to use a screen template to size your print to the letter size.

- Open or create a new canvas app.

- Select **New Screen** and select **Portrait print** option.

![New portrait print screen.](https://learn.microsoft.com/media/function-print/new-screen-portrait-print.png)


- Observe that the screen is sized differently from other screens with the print button on the top-right corner.

![Screen size portrait print.](https://learn.microsoft.com/media/function-print/screen-size-portrait-print.png)

- Add content to this screen.

- Observe that the content is sized to the print. This enables more custom control over the experience.

To build out a print for a specific size, you can build a [responsive app](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/build-responsive-apps), or create a special screen to manage your print.

| Print size | Screen height | Screen width |
| --- | --- | --- |
| A4 portrait | 1123 | 794 |
| A4 landscape | 794 | 1123 |
| Letter portrait | 1056 | 816 |
| Letter landscape | 816 | 1056 |

- The **Print** function currently doesn't work on mobile devices and on SharePoint forms.

- The default browser printers are the ones that will be available to print to.

- In some browser print dialogs, a setting called **Background graphics** should be enabled to see all the images and colors in the print.

- The **Print** function can't print multiple pages.

[Canvas app formula reference](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/formula-reference)

