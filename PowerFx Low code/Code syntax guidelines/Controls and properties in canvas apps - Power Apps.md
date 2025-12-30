---
title: Controls and properties in canvas apps - Power Apps
tags: Low-Code Development
createdAt: Mon Dec 29 2025 16:57:00 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 16:57:09 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- Controls in Microsoft Power Apps have properties that configure their appearance and behavior, with some properties being common to most controls and others being specific to certain control types.
- There are various types of controls available, including buttons, checkboxes, dropdowns, galleries, and more, each with their own set of properties.
- Properties can be used to customize the look and feel of controls, such as setting colors, borders, and fonts, as well as configuring their behavior, like enabling or disabling user input.
- The text describes various properties and controls in Power Apps, including Display form, Edit form, Pie chart, PDF viewer, and other controls.
- Properties such as Fill, Font, FontWeight, and Color are used to customize the appearance of controls.
- Other properties like OnChange, OnSelect, and OnStart define the behavior of controls and the app in response to user interactions.
- The text describes various properties and controls in Microsoft Power Apps, including properties such as ReadOnly, Repeat, and Required.
- These properties apply to different controls, including Rating, Slider, Timer, Card, and Gallery controls, among others.
- The properties control aspects such as user input, control behavior, and visual appearance, and are used to customize the functionality and design of canvas apps in Power Apps.


Detailed summary


## Overview of Controls and Properties
- The appearance and behavior of a control in a canvas app can be configured by setting one of its properties, with each type of control having a different set of properties, including common properties like Height and Width, as well as specific properties like CheckboxSize.
- There are various types of controls available in Microsoft Power Apps, including Add picture, Address input, Attachments, Audio, Barcode reader, Button, Camera, Card, Check box, Column chart, Combo box, Container, Data table, Date picker, Display form, Drop down, Edit form, Export, Gallery, Grid container, HTML text, Horizontal container, Icon, Image, Import, Line chart, List box, Map, Measuring Camera, Microphone, PDF viewer, Pen input, Pie chart, Power BI tile, Radio, Rating, Rich text editor, Screen, Shape, Slider, Stream Video, Label, Text input, Timer, Toggle, Video, Vertical container, 3D object, View in MR, and View shape in MR.
- These controls enable various functionalities, such as loading images, displaying dynamic address suggestions, downloading and uploading files, playing audio and video clips, scanning barcodes, interacting with the app through buttons and checkboxes, displaying and editing records, showing data in tabular formats, specifying dates, and more.
- Some controls, like the Barcode scanner, have been retired and replaced by newer controls, such as the Barcode reader, while others, like the Container and PDF viewer, are still experimental and may be subject to change.

## App Creation and Customization
- The controls can be used to create a wide range of apps, from simple data entry forms to complex multimedia presentations, and can be customized using various properties to suit the specific needs of the app and its users.
- Microsoft Power Apps also provides features like mixed reality, which allows users to view and interact with 3D objects and shapes in a real-world environment, using controls like the 3D object, View in MR, and View shape in MR.
- The controls and properties in Power Apps canvas apps include a range of options, such as the Web barcode scanner, which is an experimental feature that allows users to scan codes in a web browser, and the Color and border properties, which enable users to configure the color and border of a control that can change as a user interacts with it.

## Core and Image Properties
- The Core properties determine whether the user can see and interact with a control, while the Image properties configure what image is shown and how it fills the control, and the Size and location properties configure how big a control is and where it is in relation to the screen it's on.
- The Text properties configure how text appears in controls, including font characteristics, alignment, and line height, and the AccessibleLabel property provides reference information about properties related to accessibility in Power Apps.
- Other properties include the ActualZoom property, which determines the actual zoom of the control, and the Align property, which determines the location of text in relation to the horizontal center of its control, as well as properties such as AllItems, AutoDisableOnSelect, AutoHeight, AutoPause, and AutoStart, which apply to specific controls like the Gallery control, Button control, Label control, Audio control, Timer control, and Video control.

## Appearance Customization
- Additionally, properties like BackgroundImage, BorderColor, BorderStyle, and BorderThickness can be used to customize the appearance of controls, and properties like Brightness, CalculateOriginalDimensions, and Camera can be used to configure the behavior of controls like the Camera control and Image control.
- Other notable properties include CheckboxBackgroundFill, CheckboxBorderColor, CheckboxSize, CheckmarkFill, ChevronBackground, and ChevronFill, which apply to specific controls like the Check box control and Drop down control, as well as properties like Clear, Color, ContentLanguage, and Contrast, which can be used to customize the appearance and behavior of various controls.
- The Data, DataField, DataSource, Default, and DefaultDate properties are also available, and can be used to configure the data source and default values of controls like the Export control, Card control, Display form control, Edit form control, and Date Picker control.

## Data and Form Properties
- The DefaultMode property determines the initial mode of a form control, which can be set to Edit, New, or View, and applies to the Edit form control, allowing developers to configure the control's behavior.
- The DelayOutput property is useful for delaying expensive operations until the user completes inputting text, and it applies to the Text input control, allowing developers to optimize the control's performance by setting it to true, which registers user input after a half-second delay.
- The Direction property controls the orientation of the first item in a gallery, determining whether it appears near the left or right edge, and applies to the Gallery control, giving developers flexibility in designing the control's layout.
- The Disabled property determines whether the user can interact with a control, and applies to many controls, allowing developers to enable or disable user input as needed, while the DisabledBorderColor, DisabledColor, and DisabledFill properties control the control's appearance when it is disabled.

## Layout and Positioning
- The DisplayName property sets the user-friendly name for a field in a data source, and applies to the Card control, making it easier for users to understand the control's purpose, while the DisplayMode property configures whether a control allows user input, displays data, or is disabled, with values that can be set to Edit, View, or Disabled.
- The Document property specifies the URL of a PDF file, enclosed in double-quotation marks, and applies to the PDF viewer control, enabling developers to display external documents within the control, while the Drop shadow property adds shadow effects around a control, and applies to the Horizontal container and Vertical container controls, enhancing the control's visual appearance.
- The Duration property sets the length of time a timer runs, and applies to the Timer control, allowing developers to configure the control's timing behavior, while the EnableSpellCheck property determines whether a Text input control uses the browser's spell-check function, although this property is not supported in Microsoft Power Apps for Windows.

## Interactive Behavior and Accessibility
- The EndYear property sets the latest year to which the user can set the value of a date-picker control, and applies to the Date Picker control, giving developers control over the control's date range, while the Error property has different meanings depending on the control, such as displaying an error message for the Add picture control, Card control, or Edit form control, and the ErrorKind property specifies the kind of error that occurred when the SubmitForm function fails, and applies to the Display form and Edit form controls.
- The Explode property sets the distance between wedges in a pie chart, and applies to the Pie chart control, allowing developers to customize the control's appearance, while the Fill property sets the background color of a control, and applies to many controls, giving developers flexibility in designing the control's layout.
- The FindNext, FindPrevious, and FindText properties are used to search for text in a document, and apply to the PDF viewer control, enabling developers to implement search functionality within the control, while the FocusedBorderColor and FocusedBorderThickness properties control the appearance of a control's border when it is focused, and apply to many controls.

## Typography and Chart Customization
- The Font and FontWeight properties control the appearance of text in a control, with the Font property setting the font family and the FontWeight property setting the weight of the text, which can be set to Bold, Semibold, Normal, or Lighter, and apply to many controls, giving developers flexibility in designing the control's typography.
- The GridStyle property determines whether a column or line chart shows its x-axis, y-axis, both, or neither, and applies to the Column chart and Line chart controls, allowing developers to customize the control's appearance, while the HandleActiveFill, HandleFill, and HandleHoverFill properties control the appearance of a slider's handle, and apply to the Slider control, enabling developers to customize the control's interactive elements.
- The Height property sets the distance between a control's top and bottom edges, and applies to many controls, giving developers flexibility in designing the control's layout, while the HintText property sets the light-grey text that appears in a text-input control if it is blank, and applies to the Text input control, providing a hint to the user about the expected input.

## Media and Image Handling
- The HoverBorderColor, HoverColor, and HoverFill properties control the appearance of a control when the user hovers over it, and apply to many controls, enabling developers to customize the control's interactive behavior, while the HTMLText property sets the text that appears in an HTML text control, which can contain HTML tags, and applies to the HTML text control, allowing developers to display formatted text.
- The Image property sets the name of the image that appears in an image, audio, or microphone control, allowing developers to customize the control's appearance and behavior.
- The properties and controls in Microsoft Power Apps canvas apps include various options such as ImagePosition, which determines the position of an image in a screen or control, and can be set to Fill, Fit, Stretch, Tile, or Center, applying to Audio, Image, Microphone, and Video controls.

## Control Modes and Input Types
- Other properties like Input, Italic, Item, ItemBorderColor, ItemBorderThickness, ItemColorSet, ItemPaddingLeft, Items, ItemsGap, LabelPosition, LastSubmit, Layout, LineHeight, Loop, Markers, MarkerSuffix, Max, MaxLength, Media, Mic, Min, MinimumBarWidth, and Mode are available for specific controls, such as Display form, Edit form, Pen input, Text input, Gallery, Slider, Rating, Column chart, Line chart, and Pie chart controls.
- The Mode property has different meanings depending on the control, such as Edit or New mode for the Edit form control, Draw, Erase, or Select mode for the Pen input control, and SingleLine, MultiLine, or Password mode for the Text input control.
- Additional properties like NavigationStep, NumberOfSeries, OnChange, OnCheck, OnEnd, OnFailure, OnHidden, OnPause, OnReset, and OnSelect define the behavior of an app in response to user interactions, such as changing the value of a control, checking a checkbox, or navigating away from a screen, and apply to various controls, including Gallery, Column chart, Line chart, Edit form, Check box, Toggle, Audio, Video, and Screen controls.

## Event-Driven Properties
- These properties and controls provide a wide range of options for customizing and enhancing the functionality of Microsoft Power Apps canvas apps, allowing developers to create tailored and interactive user experiences.
- The OnStart property determines the behavior of an app when the user opens it or starts to record with a microphone control, and it applies to Audio, Microphone, Screen, and Video controls.
- The OnStateChange property determines the behavior of an app when the state of the control changes, and it applies to the PDF viewer control, while the OnStop property determines the behavior of an app when the user stops recording with a microphone control, and it applies to the Microphone control.

## Timers and Visibility
- The OnStream property determines the behavior of an app when the Stream property is updated, and it applies to the Camera control, and the OnSuccess property determines the behavior of an app when a data operation has been successful, and it applies to the Edit form control.
- The OnTimerEnd and OnTimerStart properties determine the behavior of an app when a timer finishes running and when a timer starts to run, respectively, and they both apply to the Timer control.
- The OnUncheck property determines the behavior of an app when the value of a checkbox or a toggle changes to false, and it applies to Check box and Toggle controls, while the OnVisible property determines the behavior of an app when the user navigates to a screen, and it applies to the Screen control.

## Spacing and Pagination
- The OriginalHeight and OriginalWidth properties represent the original height and width of an image, respectively, and they are enabled with the CalculateOriginalDimensions property, applying to the Image control.
- The Overflow property determines whether a scrollbar appears in a label if its Wrap property is set to true and the value of the control's Text property contains more characters than the control can show at one time, and it applies to the Label control.
- The Padding, PaddingBottom, PaddingLeft, PaddingRight, and PaddingTop properties represent the distance between the text on an import or export button and the edges of that button, or the distance between text in a control and the edges of that control, and they apply to various controls such as Add picture, Export, Import, and many others.

## Media Playback and States
- The Page and PageCount properties represent the number of the page that you want to show and the number of pages in a document, respectively, and they apply to the PDF viewer control.
- The Paused property indicates whether a media playback control is currently paused, and it applies to Audio and Video controls, while the Photo property represents the image captured when the user takes a picture, and it applies to the Camera control.
- The Pressed property indicates whether a control is being pressed, and it applies to the Button control, and the PressedBorderColor, PressedColor, and PressedFill properties represent the color of a control's border, the color of text in a control, and the background color of a control when the user taps or clicks that control, respectively, and they apply to many controls.

## Radio and Toggle Customization
- The RadioBackgroundFill, RadioBorderColor, RadioSelectionFill, and RadioSize properties represent the background color of the circles in a radio-button control, the color of the circle for each option, the color that appears inside the circle of the selected option, and the diameter of the circles, respectively, and they apply to the Radio control.
- The RadiusBottomLeft, RadiusBottomRight, RadiusTopLeft, and RadiusTopRight properties represent the degree to which the corners of a control are rounded, and they apply to many controls.
- The RailFill and RailHoverFill properties represent the background color of the rectangle in a toggle control when its value is false or the color of the line to the right of the handle in a slider control, and the background color of the rectangle in a toggle control when its value is false or the color of the line to the right of the handle in a slider control when you hover on it, respectively, and they apply to Slider and Toggle controls.

## Rating and Slider Controls
- The properties of controls in Microsoft Power Apps include RatingFill, which determines the color of the stars in a rating control, and ReadOnly, which specifies whether a user can change the value of a slider or rating control.
- Other properties, such as Repeat, Required, Reset, Selected, SelectedDate, SelectionColor, SelectionFill, SelectionThickness, and SelectMultiple, control various aspects of controls, including timers, cards, drop-downs, galleries, list boxes, and pen input controls.
- Properties like SeriesAxisMax, SeriesAxisMin, ShowControls, ShowLabels, ShowNavigation, ShowScrollbar, and ShowValue customize the behavior and appearance of charts, audio and video players, galleries, and other controls.

## Advanced Customization Options
- The Size, Snap, Start, StartTime, StartYear, Stream, StreamRate, Strikethrough, TemplateFill, TemplatePadding, TemplateSize, Text, Time, Tooltip, Transition, Transparency, and Underline properties provide further customization options for various controls, including images, galleries, and media controls.
- These properties apply to a range of controls, including Rating, Slider, Timer, Card, Drop down, Gallery, List Box, Pen input, Audio, Video, Pie chart, Column chart, and Image controls, allowing developers to tailor the user experience in their Microsoft Power Apps canvas apps.
- The properties can be used to control aspects such as the color and size of text, the visibility of controls and labels, the behavior of timers and media players, and the appearance of galleries and charts, giving developers a high degree of flexibility and control over their apps.

## Form Validation and Updates
- The Unsaved property is true if the Edit form control contains user changes that have not been saved, and it applies specifically to the Edit form control in Power Apps.
- The Update property determines the value to write back to the data source for a field, and it applies to the Card control, while the Updates property determines the values to write back to the data source for a record loaded in a form control, applying to the Edit form control.
- The Valid property checks whether a Card or Edit form control contains valid entries, ready to be submitted to the data source, and it applies to both Card and Edit form controls.

## Value and Visibility Properties
- The Value property represents the value of an input control, such as Check box, Radio, Slider, and Toggle controls, and the ValueFill property represents the background color of the rectangle in a toggle control or the color of the line to the left of the handle in a slider control, applying to Slider and Toggle controls.
- The ValueHoverFill property changes the background color of the rectangle in a toggle control or the color of the line to the left of the handle in a slider control when the mouse pointer is kept on it, and it applies to Slider and Toggle controls.
- The VerticalAlign property determines the location of text on a control in relation to the vertical center of that control, applying to many controls, while the Visible property determines whether a control appears or is hidden, also applying to many controls.

## Size and Positioning
- The Width property represents the distance between a control's left and right edges, applying to many controls, and the WidthFit property allows a control to automatically grow horizontally to fill any empty space of a container control, such as an Edit form control.
- The Wrap property determines whether text that's too long to fit in a label wraps to the next line, applying to the Label control, and the WrapCount property determines how many records appear in each item of a gallery, applying to the Gallery control.
- The X and Y properties represent the distance between the left or top edge of a control and the left or top edge of its parent container, applying to many controls, with specific applications for Card controls in containers with multiple columns or rows.

## Chart Axes and Zoom
- The XLabelAngle and YLabelAngle properties determine the angle of the labels below the x-axis or next to the y-axis of a column or line chart, applying to Column chart and Line chart controls, while the YAxisMax and YAxisMin properties determine the maximum and minimum values of the y-axis for a line chart, applying to the Line chart control.
- The Zoom property represents the percentage by which an image from a camera is magnified or the view of a file in a PDF viewer, applying to Camera and PDF viewer controls, highlighting the various limitations and capabilities of controls in Microsoft Power Apps.




## Sources
- [website](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/reference-properties)
