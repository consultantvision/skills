---
title: ShowHostInfo object in Power Apps - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 19:48:15 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 19:48:30 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The ShowHostInfo function displays information to the user in a pop-up, related to the selected type of information.
- The `HostInfo` parameter is required to specify the type of information to display, such as `HostInfo.OfflineSync`.
- The `ShowHostInfo` function can be used to enable offline sync in a canvas app and display details like sync status and last sync date.


Detailed summary

- The ShowHostInfo object in Microsoft Power Apps is a function used to display information to the user in the app, specifically through a pop-up that contains details related to the selected type of information.
- The ShowHostInfo function requires one argument, HostInfo, which determines the type of information to be displayed to the user, and this argument is necessary for the function to work properly.
- To enable a canvas app for offline use and display offline sync details, the OnSelect property of the Sync icon can be set to ShowHostInfo(HostInfo.OfflineSync), allowing users to view their sync status, last sync date, and downloaded tables when they select the Sync icon on their mobile device.
- After setting up the ShowHostInfo function for offline sync, it is essential to save and publish the app to ensure that the changes take effect and the offline sync details are accessible to users.
- The pop-up that displays the offline sync details shows the table name instead of the display name in the table column of the available table section, providing users with specific information about the tables that have been synced.
- When the pop-up is loaded on a Windows device, it is displayed in full screen, allowing users to easily view the offline sync details and other information provided by the ShowHostInfo function.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/showhostinfo)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps

Show [Host object](https://learn.microsoft.com/object-host) information to a user.

The **[ShowHostInfo](https://app.getrecall.ai/item/4b370f72-94a0-4616-a49e-b03680e8e0f5)** function is used to display information to the user in the app. The user will see a pop-up with the appropriate details related to the selected type of information.

**ShowHostInfo(HostInfo)**

HostInfo – Required. The type of information to display.

1. Enable a [canvas app for offline](https://learn.microsoft.com/en-us/power-apps/mobile/canvas-mobile-offline-overview).

2. Set the [OnSelect](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/properties-core) property of the [Sync icon](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-shapes-icons) to `[ShowHostInfo](https://app.getrecall.ai/item/4b370f72-94a0-4616-a49e-b03680e8e0f5)(HostInfo.OfflineSync)`

3. Save and publish the app.

When the users selects the Sync icon on their mobile device, a pop-up with the offline sync details such as sync status, last sync date, and downloaded tables are displayed.

- The table column in the available table section shows the table name instead of the display name.

- The popup on Windows is loaded in full screen.

