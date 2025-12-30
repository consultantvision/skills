---
title: ReadNFC function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:26:31 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:26:43 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The ReadNFC function in Power Platform reads a Near Field Communication (NFC) tag and returns its identifier and NDEF records.
- The function can only be used in behavior formulas and is supported on native mobile apps, such as iOS and Android apps, with NFC settings enabled.
- The ReadNFC function returns a record with two properties: Identifier (the NFC tag's identifier) and NDEFRecords (a table of supported NDEF records found on the tag).


Detailed summary

- The ReadNFC function in Power Platform is used to read a Near Field Communication (NFC) tag, and it can only be used in behavior formulas, specifically in canvas apps, to retrieve the identifier and NDEF records of the tag.
- When the ReadNFC function is invoked, it displays instructions for scanning an NFC tag on the screen and only returns after the tag has been scanned or it times out, providing a table with two columns: Identifier and NDEFRecords.
- The Identifier column contains the NFC tag's identifier if available, while the NDEFRecords column contains a table of supported NDEF records found on the tag, with each record having columns such as RTD, TNF, Text, and URI.
- The ReadNFC function currently supports Text and URI Record Type Definitions (RTD) and only Type Name Format (TNF) of Well Known, and it is recommended to check the payload values for blank using the IsBlank function before using them.
- The function does not require a tag containing NDEF records to be used, but it may still return the tag identifier if one is available, and it can only be used when running the app on a native mobile app, such as iOS and Android apps.
- To use the ReadNFC function, the device's NFC setting must be enabled, and the function will return an error if the device does not support NFC or if Formula-level error management is turned on.
- The ReadNFC function can be used in a canvas app by adding a button control and setting its OnSelect property to a formula that reads an NFC tag and collects the read NFC tags to populate a collection, which can then be used to display the tag information in a gallery control.
- To test the app, it must be opened on a mobile device, as the ReadNFC function cannot be used in Microsoft Power Apps Studio or in a web browser, and the app may take a few moments to appear on the mobile device after saving and publishing it.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-readnfc)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps

Reads a Near Field Communication (NFC) tag.

Use the **ReadNFC** function to read an NFC tag that is close to your device. When invoked, the screen displays instructions for scanning an NFC tag, and only returns after the tag has been scanned or it times out.

| **Column** | **Type** | **Description** |
| --- | --- | --- |
| Identifier | Text | The NFC tags identifier if available. |
| NDEFRecords | Table | The supported NDEF records found on the tag. |

A single **NDEFRecord** contains the following columns:

| **Column** | **Type** | **Description** |
| --- | --- | --- |
| RTD | Text | The tag's Record Type Definition (RTD). Only *Text* and *URI* are supported at this time. |
| TNF | Number | The tag's Type Name Format (TNF). Only TNFs of *Well Known(1)* are supported at this time. |
| Text | Text | The text payload of the NFC tag if RTD is *TEXT*, *blank* otherwise. |
| URI | Hyperlink | The URI payload of the NFC tag if RTD is *URI*, *blank* otherwise. |

If the NDEF record isn't supported (for example, the TNF isn't of type *Well Known*), then it won't be returned as part of the **NDEFRecords** table.


Always check the payload values for *blank* using the [IsBlank](https://learn.microsoft.com/function-isblank-isempty) function before using it. You don't need to check the **RTD** and **TNF** values yourself as they must be the correct values for **Text** and **URI** to have a non-*blank* value.

Additional **RTD** and **TNF** values may be supported in the future. If more values are supported, additional payload columns will also be added. The raw **RTD** and **TNF** values are provided for informational purposes and don't need to be consulted if the payload column is checked for *blank*. More information about these values and their use is available through the [NFC Forum](https://nfc-forum.org/).

**ReadNFC** doesn't require a tag containing NDEF records to be used, but you may still get the tag identifier if one is available.

**ReadNFC** can only be used in [behavior formulas](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth).

Note


- **ReadNFC** is only supported when running the app on a native mobile app, such as the [iOS](https://apps.apple.com/us/app/power-apps/id1047318566) and [Android](https://play.google.com/store/apps/details?id=com.microsoft.msapps) apps. Even with a supported player, a device may not support NFC. If your application has **Formula-level error management** turned on, the function will return an error. Otherwise, an error message will be shown to the user and the function will return a *blank* record.

- Ensure your device has the NFC setting enabled to use this capability.

**ReadNFC**()

| **Formula** | **Description** | **Result** |
| --- | --- | --- |
| `ReadNFC().Identifier` | Returns the identifier of the NFC tag if one exists. | `04A1C301314003` |
| `ReadNFC().NDEFRecords` | Returns a table of NDEF records found on the NFC tag if they're a supported type and payload. | ![NDEFRecords result with an example record.](https://learn.microsoft.com/media/function-readnfc/ndefrecords.png)<br> |

1. Create a [blank canvas app](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/create-blank-app) with **Phone** format.

2. Add a [Button](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-button) control.

3. Double-click the button control to change the button text to **Read NFC Tag** (or modify the **Text** property).

4. Set the **OnSelect** property of the button control to this formula that will add an item to our collection:


```
With(ReadNFC(),
    Set(id, Coalesce(Identifier, "No ID"));
    ForAll(NDEFRecords, Collect(tagRecords, {ID: id, Value: Coalesce(Text, URI)})))
```

![Above formula entered as the OnSelect property of the button.](https://learn.microsoft.com/media/function-readnfc/onselect-formula.png)

This formula reads an NFC tag using the `ReadNFC()` function, and displays type information about the result. Then it collects the read NFC tags to populate the `tagRecords` collection to be used for the gallery in the next steps.

5. Add a [Gallery](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/controls/control-gallery) control with a vertical layout.

6. When prompted, select the **tagRecords** collection as the data source for this gallery. This action will set the **Items** property of the **Gallery** control.

![Data source for gallery selected as tagRecords.](https://learn.microsoft.com/media/function-readnfc/tagrecords.png)

7. Reposition the gallery control so that it doesn't overlap the button, and change the layout type to **Title and subtitle**.

![Layout of the gallery.](https://learn.microsoft.com/media/function-readnfc/gallery-layout.png)

8. Change the **Title** formula in the gallery control to **ThisItem.Value** and change the **Subtitle** formula in the gallery control to **ThisItem.ID**.

You can also delete the **NextArrow** from the gallery control since it's not used.

9. [Save and publish](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/save-publish-app) the app.


10. Since the function `ReadNFC()` can't be used in [Power Apps](https://app.getrecall.ai/item/33454c96-457e-4b59-8f14-b32cd08ac685) Studio or in a web browser, open your app on a mobile device.

Tip

The app might take a few moments to appear on your mobile device. If you don't see the app listed, try refreshing your app list.

11. Select **Read NFC Tag** and scan a tag. Repeat the process to add multiple tags to your collection.

![App on mobile device with the NFC Tag reading example and the result inside the gallery.](https://learn.microsoft.com/media/function-readnfc/app-example.png)

