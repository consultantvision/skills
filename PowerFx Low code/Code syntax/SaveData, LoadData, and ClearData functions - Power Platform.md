---
title: SaveData, LoadData, and ClearData functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:27:10 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:27:16 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `SaveData`, `LoadData`, and `ClearData` functions in Power Platform allow you to save, load, and clear collections from the app host's storage.
- `SaveData` stores a collection under a name, `LoadData` reloads a previously saved collection by name, and `ClearData` clears the storage under a specific name or all storage associated with the app.
- These functions can be used to improve app-startup performance, add simple offline capabilities, and store data locally, but have limitations such as a 1 MB data limit in Power Apps running in Teams and web browsers.


Detailed summary


## Introduction to SaveData, LoadData, and ClearData Functions
- The SaveData, LoadData, and ClearData functions in Power Platform are used to save, reload, and clear collections from the app host's storage, with the name shared between these functions serving as a key, not a file name, and must not contain certain characters such as *".?:\\<>|/ to ensure uniqueness and avoid conflicts.
- The SaveData function has a limit of 1 MB of data for Power Apps running in Teams and web browsers, but has practical limits for mobile players, and should not be used to store sensitive data as it is stored in plain text, making it suitable for caching data and improving app-startup performance.
- The LoadData function reloads a previously saved collection by name, and the ClearData function clears the storage under a specific name or all storage associated with the app if no name is provided, allowing for simple offline capabilities and improved performance.

## Limitations and Memory Constraints
- The SaveData function has a limit of 1 MB of data for Power Apps running in Teams and web browsers, but has practical limits for mobile players, and should not be used to store sensitive data as it is stored in plain text, making it suitable for caching data and improving app-startup performance.
- The LoadData function reloads a previously saved collection by name, and the ClearData function clears the storage under a specific name or all storage associated with the app if no name is provided, allowing for simple offline capabilities and improved performance.
- These functions are limited by the amount of available app memory, which can vary depending on factors such as the device, operating system, and complexity of the app, and generally have between 30 MB and 70 MB of available memory, requiring testing with expected scenarios on target devices.

## Dependencies, Isolation, and Security Considerations
- The functions depend on the collection being implicitly defined with Collect or ClearCollect, and the loaded data will be appended to the collection, unless the Clear function is used before calling LoadData to start with an empty collection.
- Data stored with SaveData is isolated from other Power Apps by the Power Apps players, and the operating system and browser are responsible for isolating data between Power Apps and other apps on a device, as well as between different operating system level users, although the behavior may vary between Power Apps players and devices.
- It is essential to consider the isolation and encryption of data stored with SaveData, especially when devices are shared by multiple users, and to use mobile device management tools such as Microsoft Intune to ensure the security and integrity of the data.

## Parameters and Function Requirements
- The SaveData, LoadData, and ClearData functions in the Power Platform are used to store, retrieve, and clear data in a user's device, with the data being stored in a collection and given a specific name that must match when saving and loading the same set of data.
- The Collection and Name parameters are required for the SaveData and LoadData functions, where Collection refers to the collection to be stored or loaded, and Name is the name of the storage, which must be unique and not contain certain characters such as *".?:\\<>|/ .
- The IgnoreNonexistentFile parameter is optional for the LoadData function, allowing users to specify whether to return an error or suppress it if the file does not exist, with the default value being false, which returns an error.

## Example Usage and Offline Capabilities
- The ClearData function can be used to clear specific storage by providing the Name parameter or clear all storage associated with the app by not providing a Name, with the data being removed from the app host.
- The SaveData function has a limitation of 1 MB of data when running in Teams or a web browser, which can affect its usage, such as in the example provided, where capturing and storing images may not work as expected.
- The example provided demonstrates how to use the SaveData and LoadData functions to capture and store names and pictures of everyday items while offline, storing the information in the device's local storage for later use, and allowing the app to be closed or the device to restart without losing data.

## Testing, Device-Specific Behavior, and Practical Implementation
- To test the SaveData and LoadData functions, users need to save the app and open it on a device, as testing in a web browser will result in an error, and the functions can be used in conjunction with other controls, such as a camera control, to capture and store images.
- The example also shows how to use a Gallery control to display the stored data, with the Items property of the Gallery control set to the MyItems collection, and the image and label controls in the gallery template set to display the picture and item name, respectively.
- The SaveData and LoadData functions in Power Platform can only be used on a device such as a phone or tablet, and not in Studio or a web browser, requiring the app to be opened on the device to utilize these functions.
- To use the SaveData function, the app must be saved, and if it is not the first time it has been saved, the app must be published after saving, allowing the changes to take effect.
- After saving the app, it can be run offline by disconnecting from the network, and any data collected can be saved to the local device using the Save Data button, which will store the data even after the app is closed.
- When the app is launched again, the collection in memory will be empty, but the saved data can be repopulated using the Load Data button, which will retrieve the stored data from the device and display it in the gallery.

## Data Handling and Additional Resources
- If the Load Data button is selected again, the stored data will be appended to the end of the collection, but if the collection needs to be replaced instead of appended, the Clear function can be used to clear out the collection before calling the LoadData function.
- The article on simple offline capabilities provides a detailed example of how to use the SaveData and LoadData functions to enable offline capabilities in an app, offering a more comprehensive understanding of these functions and their applications.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-savedata-loaddata)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps

Saves and reloads a [collection](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources#collections) from the app host's storage.

The **SaveData** function stores a collection for later use under a name.

The **LoadData** function reloads a collection by name that was previously saved with **SaveData**. You can't use this function to load a collection from another source.

The **ClearData** function clears the storage under a specific name or clears all storage associated with the app if no name is provided.

Note

- The name shared between **SaveData**, **LoadData**, and **ClearData** is a key, not a file name. It need not be complex as names are unique to each app and there is no danger of name conflict. The name must not contain any of these characters: `*".?:\\<>|/`.

- SaveData is limited to 1 MB of data for Power Apps running in Teams and in a web browser. There is no fixed limit for Power Apps running in a mobile player but there are practical limits discussed below.

- Don't use **SaveData** to store sensitive data in the web since it'll be stored in plain text.


Use these functions to improve app-startup performance by:

- Caching data in the [App.OnStart](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-screen#additional-properties) formula on a first run.

- Reloading the local cache on next runs.

You can also use these functions to add [simple offline capabilities](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/offline-apps) to your app.

You can't use these functions inside a browser when:

- Authoring the app in Power Apps Studio.

To test your app, run it in Power Apps Mobile on an iPhone or Android device.

These functions are limited by the amount of available app memory as they operate on an in-memory collection. Available memory can vary depending on factors such as:

- The device and operating system.

- The memory that the Power Apps player uses.

- Complexity of the app with screens and controls.

Test your app with expected scenarios on the type of devices you expect the app to run when storing large data. Expect to have between 30 MB and 70 MB of available memory generally.


These functions depend on the collection being implicitly defined with [Collect](https://learn.microsoft.com/function-clear-collect-clearcollect) or [ClearCollect](https://learn.microsoft.com/function-clear-collect-clearcollect). You don't need to call **Collect** or **ClearCollect** to load data into the collection for defining it. It's a common case when using **LoadData** after a previous **SaveData**. All that is needed is the presence of these functions in a formula to implicitly define the structure of the collection. For more information, see [creating and removing variables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-variables#create-and-remove-variables).

The loaded data will be appended to the collection. Use the [Clear](https://learn.microsoft.com/function-clear-collect-clearcollect) function before calling **LoadData** if you want to start with an empty collection.

Consider carefully the isolation and encryption of data stored with **SaveData** and decide if it's appropriate for your needs, especially if devices are shared by multiple users.

Data stored with **SaveData** is isolated from other Power Apps by the Power Apps players. Data is stored based on the app's App ID, automatically isolating the **SaveData** name space between Power Apps.


The operating system and browser is responsible for isolating data between Power Apps and other apps on a device and with websites. For example, the operating system is responsible for isolating data stored in Microsoft Outlook from data stored in Power Apps, and also isolating that data from websites such as Bing.com or PowerApps.com. The operating system's built in app sandbox facilities are used for **SaveData** storage which is usually not accessible to or hidden from the user.

When using the same app, the operating system and browser is also responsible for isolating the data between different operating system level users. For example, if two different users share a computer and use two different Windows login credentials, the operating system is responsible for isolating data between the two Windows users.


Data may or may not be isolated between different Power Apps users if the operating system user is the same. Not every Power Apps player treats this the same way. For example, while logged in as the same Windows user, in the Power Apps player, the user signs out of Power Apps and signs in as a different Power Apps user. Data stored in an app before the change of Power Apps user, may be accessible to the second Power Apps user within the same app. The data may also be removed and the first Power Apps user may no longer be able to access it. The behavior varies between Power Apps players.

The operating system may also encrypt the data or you can use a mobile device management tool such as [Microsoft Intune](https://www.microsoft.com/microsoft-365/enterprise-mobility-security/microsoft-intune). Data stored when playing an app in a web browser is not encrypted.

**SaveData**( *Collection*, *Name* )**LoadData**( *Collection*, *Name* [, *IgnoreNonexistentFile* ])

- *Collection* - Required. Collection to be stored or loaded.


- *Name* - Required. Name of the storage. The name must be same to save and load same set of data. The name space isn't shared with other apps. Names must not contain any of these characters: `*".?:\\<>|/`.

- *IgnoreNonexistentFile* - Optional. A Boolean value indicating what to do if the file doesn't already exist. Use *false* (default) to return an error and *true* to suppress the error.

**ClearData**( [*Name*] )

- *Name* - Optional. Name of the storage previously saved with **SaveData**. If *Name* is not provided, all storage associated with the app is cleared.


| Formula | Description | Result |
| --- | --- | --- |
| **SaveData( LocalCache, "MyCache" )** | Save the **LocalCache** collection to the user's device under the name "MyCache", suitable for **LoadData** to retrieve later. | Data is saved to the app host under the name "MyCache". |
| **LoadData( LocalCache, "MyCache" )** | Loads the **LocalCache** collection from the user's device under the name "MyCache", previously stored with a call to **SaveData**. | Data is loaded from the app host under the name "MyCache". |
| **ClearData( "MyCache" )** | Clears the storage under the name "MyCache". Any data stored under this name will no longer be available through **LoadData**. | Data is removed from the app host under the name "MyCache". |
| **ClearData()** | Clear all storage associated with this app. Data stored by other apps is not affected. | All data is removed from the app host. |


Following simple example captures and stores the names and pictures of everyday items while offline. It stores the information in the device's local storage for later use. This allows the app to be closed or the device to restart without losing data.

Note

This example uses a camera control to capture images. Since **SaveData** is limited to 1 MB of data when running in Teams or a web browser, this example will not work with more than a few images. Also, depending on the camera, it may not work with even one image. Use a device to work through this full example, or remove the camera control and picture part of this example to run in Teams or in a web browser.

1. Create a blank canvas app with a tablet layout. For more details, read [creating an app from a template](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/get-started-test-drive) and select **Tablet layout** under **Blank app**.

2. Add a [Text input](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-text-input) control and a [Camera](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-camera) control and arrange them roughly as shown:

![A text input and camera control added to a blank screen.](https://learn.microsoft.com/media/function-savedata-loaddata/simple-text-camera.png)

3. Add a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control.

4. Double-click the button control to change the button text to **Add Item** (or modify the **Text** property).


5. Set the **OnSelect** property of the button control to this formula that will add an item to our collection:

```
Collect( MyItems, { Item: TextInput1.Text, Picture: Camera1.Photo } )
```

![A button control added with the text "Add Item" and the OnSelect property set](https://learn.microsoft.com/media/function-savedata-loaddata/simple-additem.png)

6. Add another **Button** control.

7. Double-click the button control to change the button text to **Save Data** (or modify the **Text** property).

8. Set the **OnSelect** property of the button control to this formula in order to save our collection to the local device:

```
SaveData( MyItems, "LocalSavedItems" )
```

![A button control added with the text "Save Data" and the OnSelect property set](https://learn.microsoft.com/media/function-savedata-loaddata/simple-savedata.png)

It's tempting to test the button as it doesn't affect anything. But you'll only see an error as you're authoring in a web browser. Save the app first and open on a device before you follow the next steps to test this formula:

9. Add a third **Button** control.

10. Double-click the button control to change the button text to **Load Data** (or modify the **Text** property).

11. Set the **OnSelect** property of the button control to this formula in order to load our collection from the local device:

```
LoadData( MyItems, "LocalSavedItems" )
```

![A button control added with the text "Load Data" and the OnSelect property set](https://learn.microsoft.com/media/function-savedata-loaddata/simple-loaddata.png)


12. Add a [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) control with a Vertical layout that includes a picture and text areas:

![Gallery variety selection, "Vertical" selected with image and text areas](https://learn.microsoft.com/media/function-savedata-loaddata/simple-gallery-add.png)

13. When prompted, select the **MyItems** collection as the data source for this gallery. This will set the **Items** property of the **Gallery** control:

![Gallery selection of data source.](https://learn.microsoft.com/media/function-savedata-loaddata/simple-gallery-collection.png)

The image control in the gallery template should default its **Image** property to **ThisItem.Picture** and the label controls should both default their **Text** properties to **ThisItem.Item**. Check these formulas if after adding items in the following steps you don't see anything in the gallery.

14. Position the control to the right of the other controls:

![Gallery repositioned to the right of the screen.](https://learn.microsoft.com/media/function-savedata-loaddata/simple-gallery-placed.png)

15. Save your app. If it's the first time it has been saved, there's no need to publish it. If it's not the first time, publish the app after you save.

16. Open your app on a device such as a phone or tablet. **SaveData** and **LoadData** can't be used in Studio or in a web browser. Refresh your app list if you don't see your app immediately, it can take a few seconds for the app to appear on your device. Signing out and back in to your account can help too.

![App running with no items added.](https://learn.microsoft.com/media/function-savedata-loaddata/simple-mobile.png)


Once your app has been downloaded, you can disconnect from the network and run the app offline.

17. Enter the name and take a picture of an item.

18. Select the **Add Item** button. Repeat adding items a couple of times to load up your collection.

![App running with three items added.](https://learn.microsoft.com/media/function-savedata-loaddata/simple-mobile-with3.png)

19. Select the **Save Data** button. This will save the data in your collection to your local device.

20. Close the app. Your collection in memory will be lost including all item names and pictures, but they'll still be there in the device's storage.

21. Launch the app again. The collection in memory will again show as empty in the gallery.

22. Select the **Load Data** button. The collection will be repopulated from the stored data on your device and your items will be back in the gallery. The collection was empty before this button calls the **LoadData** function; there was no need to call **Collect** or **ClearCollect** before loading the data from storage.

![App running with three items restored after calling the LoadData function.](https://learn.microsoft.com/media/function-savedata-loaddata/simple-mobile-load1.png)


23. Select the **Load Data** button again. The stored data will be appended to the end of the collection and a scroll bar will appear on the gallery. If you would like to replace rather than append, use the **Clear** function first to clear out the collection before calling the **LoadData** function.

![App running with six items restored after calling the LoadData function twice.](https://learn.microsoft.com/media/function-savedata-loaddata/simple-mobile-load2.png)

For a detailed example, see the article on [simple offline capabilities](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/offline-apps).

