---
title: Launch and Param functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:14:50 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:17:07 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The `Launch` function is used to launch a webpage or a canvas app and provides access to launch parameters, including address, parameters, and target.
- The `Param` function retrieves a parameter passed to the app when it was launched, and parameter names are case-sensitive.
- The `Launch` function can pass parameters to the webpage or canvas app in two ways: as an argument list of name-value pairs or as a record of field values.


Detailed summary


## Introduction to the Launch Function
- The Launch function in Power Platform is used to launch a webpage or a canvas app and provides access to launch parameters, supporting address, parameters, and target as its key components, with address being the required URL of the webpage or canvas app.
- The function can be used with various parameters, including named values to pass to the webpage or canvas app, which can be read with the Param function in a canvas app, and a target to specify the browser tab in which to launch the webpage or canvas app.
- The Launch function can only be used in behavior formulas and only supports https: URIs when used in the Power Apps Visual in PowerBI, with webpages launched via a URL address, such as Launch("https://Microsoft Bing"), and canvas apps launched with a Web link or App URI.
- To find the Web link or App URI for a canvas app, users can go to Power Apps, select the app, and copy the Web link from the Details section, which can then be used with the Launch function, such as Launch("[https://apps.powerapps.com/e/{environment](https://apps.powerapps.com/e/{environment) id}/a/{app id}?tenantId={tenantId}").

## Parameter Passing Methods for Launch
- The Launch function can pass parameters to the webpage or canvas app in two ways: as an argument list of name-value pairs, such as Launch("[https://bing.com/search](https://bing.com/search)", "q", "Power Apps", "count", 1), or as a record of field values, such as Launch("[https://bing.com/search](https://bing.com/search)", { q: "Power Apps", count: 1 }).
- The function also supports the LaunchTarget argument to specify the target browser window in which to open the webpage or app, with options including New, Replace, and a custom window name, although using a LaunchTarget with any value other than New in embedded scenarios may result in unexpected behavior.

## Query Strings and Cross-App Launching
- Additionally, when launching a webpage, a query string of parameters can be included at the end of the URL address, but query strings do not work when launching a canvas app, and parameters will not be refreshed in a running app on a mobile device without an app reload.
- The Param function is used to retrieve a parameter passed to the app when it was launched, and if the named parameter wasn't passed, it returns blank, with parameter names being case-sensitive and automatically URL decoded for use in the app.
- When launching a canvas app from another canvas app, the Parameter arguments to the Launch function are used, with parameter names and values being automatically URL encoded, and when launching from a web page, parameters are added to the query string of the canvas app web link.

## Syntax and Reserved Keywords
- The Launch function has several syntaxes, including Launch(Address [, ParameterName1, ParameterValue1, ... ]) and Launch(Address, { [ ParameterName1: ParameterValue1, ... ] } [, LaunchTarget ]), where Address is the address of a webpage or the ID of an app to launch, and ParameterName and ParameterValue are optional parameters to pass to the app or webpage.
- The Param function takes a ParameterName as an argument, which is the name of the parameter passed to the app, and there are certain reserved keywords that should not be used as custom parameters in the Param function, including amp%3Bauthmode, appmetadataversion, and tenantId.

## Launch Function Usage and Customization
- The Launch function can be used to open a webpage or launch an app, and it can take optional parameters such as LaunchTarget, which can be a LaunchTarget enum value or a custom name, and examples of using the Launch function include opening a webpage with parameters, such as a Microsoft Bing query, and launching an app with specific parameters.
- The type returned by the Param function is always a text string, even if the parameter contains a number, and conversion to other types can occur automatically or using explicit conversions such as the Value function, and parameter values do not change unless the app is reloaded, with some exceptions such as when using Launch on a mobile device where the app is already running.
- The Launch function in Power Apps is used to launch a canvas app from a web page or another canvas app, and it can be customized by updating the app ID, tenant ID, screen name, and record number as needed.

## Param Function Details and Behavior
- The Param function is used to retrieve parameters that were passed to the app when it was launched, and it can return values such as text strings or blank values if the parameter was not provided.
- The Launch function can be used with the Param function to launch a canvas app with specific parameters, such as navigating to a specific screen or record, and the Param function can be used to retrieve these parameters and use them in the app.

## Practical Implementation Examples
- To use the Launch and Param functions, users can create a new app in Power Apps, select a template such as the Product Showcase template, and then add a label and set its OnSelect property to a Launch function with the desired parameters.
- The Launch function can also be used to launch a web page with specific parameters, such as a news search with specific keywords, and the Param function can be used to retrieve these parameters and display them in the app.
- For scalability, users can replace manually entered keywords in the Launch function with variables, and then pass these variables as parameters when launching the app.
- The If function can be used with the Param function to check if a parameter equals a certain value, and if it matches, return a specific screen control to the StartScreen property, allowing the app to launch with a specific screen based on the parameter passed.
- Users can test the Launch and Param functions by saving and publishing their app, and then launching it with specific parameters to see how the app behaves.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-param)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps

Launches a webpage or a canvas app and provides access to launch parameters.

Launches a webpage or a canvas app. The function supports:

- **Address** (required), the URL of the webpage of the canvas app.

- **Parameters** (optional), named values to pass to the webpage or canvas app. In a canvas app, parameters can be read with the [Param](https://learn.microsoft.com/#param) function.

- **Target** (optional), the browser tab in which to launch the webpage or canvas app.

**Launch** can only be used in [behavior formulas](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-formulas-in-depth).

Note

- If the Launch formula is used to open Power Apps and the app isn't visible to the end user, it's recommended to check if the app is blocked by a browser pop-up blocker or if the browser is wait for the user's response to a dialog box that asks whether they want to navigate to a new screen.

- Only **https**: URIs are supported when using Launch in the Power Apps Visual in PowerBI.

Webpages are launched via a URL address. For example:

```
Launch( "https://[bing.com](https://app.getrecall.ai/item/c6651b98-6687-48d5-aed2-e72666f13e70)" )
```


You can launch canvas apps with **Web link** or **App URI** (app id prefixed with `/providers/[Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d).PowerApps/apps/`). To find these values for an app:

1. Go to [Power Apps](https://make.powerapps.com/).

2. Select **Apps** from left navigation pane.

3. Select your app.

4. Select **Details** from top menu. You can also select **...** (**More Commands**) and then select **Details** from the drop-down menu.

![App details option.](https://learn.microsoft.com/media/function-param/portal-details.png)

5. Copy **Web link**.

![App details with web link and app id.](https://learn.microsoft.com/media/function-param/portal-links.png)

The **Web link** can be used in any web page and will launch the canvas app. It can also be used with the **Launch** function. For example:

```
Launch( "https://apps.powerapps.com/e/{environment id}/a/{app id}?tenantId={tenantId}" )
```

Native apps on a device can't be launched directly. There may be indirect options available on some platforms, such as a native app installing a custom URL scheme or registering with the web browser to offer an option for specific web sites.

**Launch** can pass parameters to the webpage or canvas app. Parameters can be provided in two ways:

- An argument list of name value pairs. For example:


```
Launch( "https://[bing.com](https://app.getrecall.ai/item/c6651b98-6687-48d5-aed2-e72666f13e70)/search", "q", "Power Apps", "count", 1 )
```

- A record of field values. For example:

```
Launch( "https://[bing.com](https://app.getrecall.ai/item/c6651b98-6687-48d5-aed2-e72666f13e70)/search", { q: "Power Apps", count: 1 } )
```

This form can be easier to work with as it makes the association between name and value clearer. It's the only form that supports the optional *LaunchTarget* argument.

The address and parameters are URL encoded before being passed to replace certain non-alphanumeric characters with `%` and a hexadecimal number as if the [EncodeUrl](https://learn.microsoft.com/function-encode-decode) function has been used on each.

When launching a webpage, a [query string](https://en.wikipedia.org/wiki/Query_string) of parameters can be included at the end of the URL address. Any additional parameters provided to **Launch** will be added to the end of the query string. Query strings don't work when launching a canvas app.

When launching an app on a mobile device where that app is already running, parameters will not be refreshed in the running app. An app reload is required for parameters to be refreshed.


Use the *LaunchTarget* argument to specify the target browser window in which to open the webpage or app. Use one of the following **LaunchTarget** enum values or provide a custom window *name*.

| LaunchTarget enum | Description |
| --- | --- |
| **New** | The webpage or app is opened in a new window or tab. |
| **Replace** | The webpage or app replaces the current window or tab. |
| *name* | Instead of an enum value, use your own text string to *name* the window or tab. *Self* is an internal only name that is only used by the **Launch** function. It has no impact on nor will it match the title of the window that your users see. If a window or tab with the given *name* already exists, its contents will be replaced. Otherwise, a new window or tab will be created. *name* can't begin with the underscore character "_". |

**New** is the default enum when running in a web browser with **Replace** and *name* as available options. In a mobile player, **New** is the default for webpages with *name* as an available option; while the current canvas app will always be replaced by another canvas app.

Note


- Using a *LaunchTarget* with any value other than **New** in embedded scenarios (for example, Power BI or SharePoint) is not supported and may result in unexpected behavior. In the future, this behavior may change, or may cause an error.

The **Param** function retrieves a parameter passed to the app when it was launched. If the named parameter wasn't passed, **Param** returns *blank*.

- When launching a canvas app from another canvas app, use the *Parameter* arguments to the **Launch** function. Parameter names and values will be automatically URL encoded.


- When launching a canvas app from a web page, add parameters to the [query string](https://en.wikipedia.org/wiki/Query_string) of the [canvas app web link](https://learn.microsoft.com/#address). This involves adding `&parametername=parametervalue` assuming the query string has already been started for the `tenantId`. For example, adding `&First%20Name=Vicki&category=3` would pass two parameters: `First Name` with a value of `"Vicki"` and `category` with a value of `"3"` (value type is *text*). The parameter name and value must be URL encoded if they contain spaces or special characters, similar to using the [EncodeURL](https://learn.microsoft.com/function-encode-decode) function.

- Param names are case-sensitive.

- Param names and values will be automatically URL decoded for use in your app.

- Parameter values do not change unless the app is reloaded. Using **Launch** on a mobile device where the app is already running does not refresh the parameters.


- Even if the parameter contains a number, the type returned by **Param** will always be a text string. Conversion to other types will automatically occur or use explicit conversions such as the [Value](https://learn.microsoft.com/function-value) function to convert explicitly to a number.

Note

For [custom pages](https://learn.microsoft.com/en-us/power-apps/maker/model-driven-apps/add-page-to-model-app), the only parameters accepted by the page are: recordId and entityName.

**Launch**( *Address* [, *ParameterName1*, *ParameterValue1*, ... ] )

- *Address* – Required. The address of a webpage or the ID of an app to launch.

- *ParameterName(s)* – Optional. Parameter name.

- *ParameterValue(s)* – Optional. Corresponding parameter values to pass to the app or the webpage.

**Launch**( *Address*, { [ *ParameterName1*: *ParameterValue1*, ... ] } [, *LaunchTarget* ] )

- *Address* – Required. The address of a webpage or the ID of an app to launch.

- *ParameterName(s)* – Optional. Parameter name.

- *ParameterValue(s)* – Optional. Corresponding parameter values to pass to the app or the webpage.

- *LaunchTarget* – Optional. A **LaunchTarget** enum value or a custom *name*.

**Param**( *ParameterName* )


- *ParameterName* - Required. The name of the parameter passed to the app.

The following keywords are reserved (regardless of case) for internal use, and shouldn't be used as a custom parameter in the **Param()** function:

- amp%3Bauthmode

- amp%3Benableonbehalfof

- amp%3Bhidenavbar

- amp%3Blocale

- appmetadataversion

- authmode

- channeltype

- cordovapath

- correlationid

- debug

- delegatelaunchurl

- delegatelaunchurl

- disablepreviewredirect

- embedderorigin

- enableonbehalfof

- groupid

- hideappsplash

- hidenavbar

- hint

- hostclienttype

- hostmode

- iframecontainerid

- isfullscreen

- ispreviewmode

- loader

- loaderType

- locale

- location

- packagekind

- packageproperties

- playerresourcespath

- playersessionid

- powerappslanguage

- screencolor

- sdkversion

- site

- skipappmetadata

- skipiframecreation

- skiplaunchappcache

- source

- sourcetime

- standaloneconsent

- teamid

- teamtype

- tenantId

- theme

- uselocalpackagehostresources

- userteamrole


| Formula | Description |
| --- | --- |
| **Launch( "**[http://bing.com/search](http://bing.com/search)**", "q", "Power Apps", "count", 1 )** | Opens the webpage [https://bing.com/search?q=Power%20Apps&count=1](https://bing.com/search?q=Power%20Apps&count=1). A new window or tab is opened. |
| **Launch( "**[http://bing.com/search](http://bing.com/search)**", { q: "Power Apps", count: 1 } )** | The same as the previous examples using the equivalent record notation. A new window or tab is opened. |
| **Launch( "**[http://bing.com/search](http://bing.com/search)**", { q: "Power Apps", count: 1 }, LaunchTarget.Replace )** | The same as the previous examples, replacing the current window or tab with the result if running in a web browser. |
| **Launch( "**[http://bing.com/search](http://bing.com/search)**", { q: "Power Apps", count: 1 }, "Search Results" )** | The same as the previous example, creating or replacing the contents of the window or tab named **Search Results**. |

Update the app ID, screen name, and record number as appropriate.

```
Launch( "/providers/[Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d).PowerApps/apps/YOUR-APP-ID",
        { Navigate: "Second Screen", Record: 34 }
)
```

Update the app ID, tenant ID, screen name, and record number as appropriate.


```
<html>
  <body>
    <a
      href="https://apps.powerapps.com/play/e/YOUR-APP-ENVIRONMENT-ID/a/YOUR-APP-ID?tenantId=YOUR-TENANT-ID&Navigate=Second%20Screen&Record=34"
    >
      Launch canvas app
    </a>
  </body>
</html>
```

Simple launch examples above to launch canvas app [from web page](https://learn.microsoft.com/#from-a-web-page-to-a-canvas-app) or [from another canvas app](https://learn.microsoft.com/#from-a-canvas-app-to-a-canvas-app) show simple examples for Param function:

| Formula | Description | Result |
| --- | --- | --- |
| **Param( "Navigate" )** | The **Navigate** parameter was provided when the app was launched and is returned. | "Second Screen" |
| **Param( "Record" )** | The **Record** parameter was provided when the app was launched. Even though it was passed in as a number to the **Launch** function, the result from **Param** will be a text string that can be implicitly or explicitly converted to other types. | "34" |
| **Param( "User" )** | The **User** parameter wasn't provided. A *blank* value is returned that can be tested with the [IsBlank](https://learn.microsoft.com/function-isblank-isempty) function. | *blank* |


The **Product Showcase** tablet layout template was used for the following examples. To create an app with this template, follow the steps from [create an app](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/get-started-test-drive) article and select the **Product Showcase** template. You can also use your own app.

1. Go to [Power Apps](https://make.powerapps.com/).

2. Select **Apps** from left navigation pane.

3. Select your app and then select **Edit**.

4. Select **Insert** from the menu and then select **Label**.

5. Move the label to the bottom right of the screen.

6. From the properties pane on the right-side, select **Color** as *white* and set **Border thickness** at *1*.

7. Select the **Text** property from right-side and enter text as *Surface tablets in news*.

8. From property list on top left, select **OnSelect**.

9. Enter formula as `Launch("https://www.bing.com/news/search","q","[Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d) Surface tablets")`. You can also use any other URL, parameter, and keywords of your choice.

![Launch example.](https://learn.microsoft.com/media/function-param/launch-example-onselect.png)

10. Save and publish the app.

11. Play the app.

12. Select label **Surface tablets in news** to launch news search with keywords *[Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d) Surface tablets*.

Tip


For scalability, you can replace the manually entered keywords in Launch function with [variables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-variables).

1. Go to [Power Apps](https://make.powerapps.com/).

2. Select **Apps** from left navigation pane.

3. Select your app and then select **Edit**.

4. Select **Insert** from the menu and then select **Label**.

5. Move the label to the bottom right of the screen.

6. Select **Text** property for the label from top left.

7. Enter formula as `Param("browser")`. You can also use a different parameter of your choice.

![Param example.](https://learn.microsoft.com/media/function-param/param-example.png)

8. Save and publish the app.

9. Copy [web link](https://learn.microsoft.com/#address) for your app from [Power Apps](https://make.powerapps.com/).

10. Open a new browser.

11. Paste the app web link in the browser and append `&browser=[Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d)%20Edge` at the end.

```
!Web address.
```

12. When your app launches, the label shows the parameter value passed.

```
!Param example label.
```

13. Close the app player and edit the app.

14. Select **App** from the Tree view on left navigation.

15. Select **StartScreen** property on top left.

16. Enter the formula as `If( Param("screen") = "techspecs", TechSpecs )`.

```
!Param example for navigation.
```


```
If function in StartScreen property checks if parameter equals a certain value, in this case the value _techspecs_. And if it matches, returns the _TechSpecs_ screen control to the **StartScreen** property.

Note

Replace the **TechSpecs** control name in the **If** function with the name of a screen control in your own app if you're not using the **Product Showcase** app template.
```

17.  Save and publish the app.

18. Open a new browser.

19. Paste the app web link in the browser and append `&screen=techspecs` at the end.

```
!Web address for TechSpecs screen.
```

20. The app directly launches with **TechSpecs** as the startscreen.

[Canvas app formula reference](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/formula-reference)


