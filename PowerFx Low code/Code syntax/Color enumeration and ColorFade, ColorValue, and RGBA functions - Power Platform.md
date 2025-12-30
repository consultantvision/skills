---
title: Color enumeration and ColorFade, ColorValue, and RGBA functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:30:23 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:31:47 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The text provides a list of colors with their corresponding ColorValue and RGBA representations.
- Each color is represented in three ways: by its name (e.g. Color.AliceBlue), by its hex code (e.g. #f0f8ff), and by its RGBA values (e.g. RGBA(240, 248, 255, 1)).
- The list includes a wide range of colors, from basic colors like Color.Black and Color.White to more specific colors like Color.MediumTurquoise and Color.PaleVioletRed.


Detailed summary


## Introduction and Document Overview
- The provided text is a section from a larger document titled 'Color enumeration and ColorFade, ColorValue, and RGBA functions - Power Platform', which lists various colors along with their corresponding ColorValue and RGBA representations.
- Each color is represented in three different ways: using the Color enumeration, the ColorValue function with a hexadecimal code, the ColorValue function with the color name, and the RGBA function with the red, green, blue, and alpha values.
- The colors listed include AliceBlue, AntiqueWhite, Aqua, Aquamarine, Azure, Beige, Bisque, Black, BlanchedAlmond, Blue, BlueViolet, Brown, Burlywood, CadetBlue, Chartreuse, Chocolate, Coral, CornflowerBlue, Cornsilk, Crimson, Cyan, DarkBlue, DarkCyan, DarkGoldenRod, DarkGray, DarkGreen, DarkGrey, DarkKhaki, DarkMagenta, DarkOliveGreen, DarkOrange, DarkOrchid, DarkRed, DarkSalmon, DarkSeaGreen, DarkSlateBlue, DarkSlateGray, DarkSlateGrey, DarkTurquoise, DarkViolet, DeepPink, DeepSkyBlue, DimGray, DimGrey, DodgerBlue, FireBrick, FloralWhite, ForestGreen, Fuchsia, Gainsboro, and many others.
- The RGBA function represents each color using four values: the red, green, and blue intensity, which range from 0 to 255, and the alpha value, which is always 1 in the provided text, indicating that all colors are fully opaque.

## Color Representation Methods
- The ColorValue function can take either a hexadecimal code or a color name as an argument, providing an alternative way to represent each color.
- The document provides a comprehensive list of colors that can be used in the Power Platform, along with their corresponding representations using different functions.
- The provided text section from the document 'Color enumeration and ColorFade, ColorValue, and RGBA functions - Power Platform' lists various colors along with their corresponding ColorValue and RGBA representations.

## Color Examples and Lists
- Each color is represented in three different ways: using the Color enum, the ColorValue function with a hex code, and the ColorValue function with the color name, as well as the RGBA function with the red, green, blue, and alpha values.
- For example, the color GhostWhite can be represented as Color.GhostWhite, ColorValue("#f8f8ff"), ColorValue("GHOSTWHITE"), or RGBA(248, 248, 255, 1), demonstrating the different ways to specify the same color.
- The text includes a wide range of colors, including GhostWhite, Gold, GoldenRod, Gray, Green, GreenYellow, Grey, Honeydew, HotPink, IndianRed, Indigo, Ivory, Khaki, Lavender, LavenderBlush, LawnGreen, LemonChiffon, LightBlue, LightCoral, LightCyan, LightGoldenRodYellow, LightGray, LightGreen, LightGrey, LightPink, LightSalmon, LightSeaGreen, LightSkyBlue, LightSlateGray, LightSlateGrey, LightSteelBlue, LightYellow, Lime, LimeGreen, Linen, Magenta, Maroon, MediumAquamarine, MediumBlue, MediumOrchid, MediumPurple, MediumSeaGreen, MediumSlateBlue, MediumSpringGreen, MediumTurquoise, MediumVioletRed, MidnightBlue, MintCream, and MistyRose.

## RGBA Function Details
- The RGBA function is used to represent colors using the red, green, blue, and alpha values, with the alpha value typically set to 1, indicating full opacity.
- The ColorValue function can take either a hex code or a color name as an argument, providing flexibility in how colors are specified.
- The document provides a comprehensive list of colors that can be used in the Power Platform, along with their different representations, allowing for consistency and accuracy in color specification.

## Comprehensive Color List and Representations
- The provided text section from the document 'Color enumeration and ColorFade, ColorValue, and RGBA functions - Power Platform' lists various colors along with their corresponding RGBA values and ColorValue representations.
- Each color is represented in multiple ways, including its name, RGBA value, and ColorValue in both hexadecimal and string formats, such as Color.Moccasin being equivalent to RGBA(255, 228, 181, 1) and ColorValue("#ffe4b5") or ColorValue("Moccasin").
- The colors listed include a wide range of options, from basic colors like Color.Red, Color.Blue, and Color.Green, to more complex and nuanced colors like Color.OldLace, Color.SandyBrown, and Color.SteelBlue.

## RGBA Explanation and Transparency
- The RGBA values are represented as RGBA(red, green, blue, alpha), where red, green, and blue are values between 0 and 255, and alpha is a value between 0 and 1, with 0 being fully transparent and 1 being fully opaque.
- The ColorValue function can take either a hexadecimal color code, such as "#ffffff" for white, or a color name, such as "White", to represent a specific color.
- The list of colors includes Color.Transparent, which is represented as RGBA(0, 0, 0, 0) and ColorValue("#00000000") or ColorValue("Transparent"), indicating that it has no color and is fully transparent.

## Conclusion and Summary
- Overall, the text provides a comprehensive enumeration of colors that can be used in the Power Platform, along with their various representations and equivalent values.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-colors)
**Color.AliceBlue** **ColorValue( "#f0f8ff" )****ColorValue( "aliceblue" )** **RGBA( 240, 248, 255, 1 )**

![aliceblue.](https://learn.microsoft.com/media/function-colors/color-aliceblue.png)

**Color.AntiqueWhite** **ColorValue( "#faebd7" )****ColorValue( "AntiqueWhite" )** **RGBA( 250, 235, 215, 1 )**

![antiquewhite.](https://learn.microsoft.com/media/function-colors/color-antiquewhite.png)

**Color.Aqua** **ColorValue( "#00ffff" )****ColorValue( "AQUA" )** **RGBA( 0, 255, 255, 1 )**

![aqua.](https://learn.microsoft.com/media/function-colors/color-aqua.png)

**Color.Aquamarine** **ColorValue( "#7fffd4" )****ColorValue( "Aquamarine" )** **RGBA( 127, 255, 212, 1 )**

![aquamarine.](https://learn.microsoft.com/media/function-colors/color-aquamarine.png)

**Color.Azure** **ColorValue( "#f0ffff" )****ColorValue( "azure" )** **RGBA( 240, 255, 255, 1 )**

![azure.](https://learn.microsoft.com/media/function-colors/color-azure.png)

**Color.Beige** **ColorValue( "#f5f5dc" )****ColorValue( "Beige" )** **RGBA( 245, 245, 220, 1 )**

![beige.](https://learn.microsoft.com/media/function-colors/color-beige.png)

**Color.Bisque** **ColorValue( "#ffe4c4" )****ColorValue( "BISQUE" )** **RGBA( 255, 228, 196, 1 )**

![bisque.](https://learn.microsoft.com/media/function-colors/color-bisque.png)

**Color.Black** **ColorValue( "#000000" )****ColorValue( "Black" )** **RGBA( 0, 0, 0, 1 )**

![black.](https://learn.microsoft.com/media/function-colors/color-black.png)

**Color.BlanchedAlmond** **ColorValue( "#ffebcd" )****ColorValue( "blanchedalmond" )** **RGBA( 255, 235, 205, 1 )**

![blanchedalmond.](https://learn.microsoft.com/media/function-colors/color-blanchedalmond.png)

**Color.Blue** **ColorValue( "#0000ff" )****ColorValue( "Blue" )** **RGBA( 0, 0, 255, 1 )**

![blue.](https://learn.microsoft.com/media/function-colors/color-blue.png)

**Color.BlueViolet** **ColorValue( "#8a2be2" )****ColorValue( "BLUEVIOLET" )** **RGBA( 138, 43, 226, 1 )**

![blueviolet.](https://learn.microsoft.com/media/function-colors/color-blueviolet.png)


**Color.Brown** **ColorValue( "#a52a2a" )****ColorValue( "Brown" )** **RGBA( 165, 42, 42, 1 )**

![brown.](https://learn.microsoft.com/media/function-colors/color-brown.png)

**Color.Burlywood** **ColorValue( "#deb887" )****ColorValue( "burlywood" )** **RGBA( 222, 184, 135, 1 )**

![burlywood.](https://learn.microsoft.com/media/function-colors/color-burlywood.png)

**Color.CadetBlue** **ColorValue( "#5f9ea0" )****ColorValue( "CadetBlue" )** **RGBA( 95, 158, 160, 1 )**

![cadetblue.](https://learn.microsoft.com/media/function-colors/color-cadetblue.png)

**Color.Chartreuse** **ColorValue( "#7fff00" )****ColorValue( "CHARTREUSE" )** **RGBA( 127, 255, 0, 1 )**

![chartreuse.](https://learn.microsoft.com/media/function-colors/color-chartreuse.png)

**Color.Chocolate** **ColorValue( "#d2691e" )****ColorValue( "Chocolate" )** **RGBA( 210, 105, 30, 1 )**

![chocolate.](https://learn.microsoft.com/media/function-colors/color-chocolate.png)

**Color.Coral** **ColorValue( "#ff7f50" )****ColorValue( "coral" )** **RGBA( 255, 127, 80, 1 )**

![coral.](https://learn.microsoft.com/media/function-colors/color-coral.png)

**Color.CornflowerBlue** **ColorValue( "#6495ed" )****ColorValue( "CornflowerBlue" )** **RGBA( 100, 149, 237, 1 )**

![cornflowerblue.](https://learn.microsoft.com/media/function-colors/color-cornflowerblue.png)

**Color.Cornsilk** **ColorValue( "#fff8dc" )****ColorValue( "CORNSILK" )** **RGBA( 255, 248, 220, 1 )**

![cornsilk.](https://learn.microsoft.com/media/function-colors/color-cornsilk.png)

**Color.Crimson** **ColorValue( "#dc143c" )****ColorValue( "Crimson" )** **RGBA( 220, 20, 60, 1 )**

![crimson.](https://learn.microsoft.com/media/function-colors/color-crimson.png)

**Color.Cyan** **ColorValue( "#00ffff" )****ColorValue( "cyan" )** **RGBA( 0, 255, 255, 1 )**

![cyan.](https://learn.microsoft.com/media/function-colors/color-cyan.png)


**Color.DarkBlue** **ColorValue( "#00008b" )****ColorValue( "DarkBlue" )** **RGBA( 0, 0, 139, 1 )**

![darkblue.](https://learn.microsoft.com/media/function-colors/color-darkblue.png)

**Color.DarkCyan** **ColorValue( "#008b8b" )****ColorValue( "DARKCYAN" )** **RGBA( 0, 139, 139, 1 )**

![darkcyan.](https://learn.microsoft.com/media/function-colors/color-darkcyan.png)

**Color.DarkGoldenRod** **ColorValue( "#b8860b" )****ColorValue( "DarkGoldenRod" )** **RGBA( 184, 134, 11, 1 )**

![darkgoldenrod.](https://learn.microsoft.com/media/function-colors/color-darkgoldenrod.png)

**Color.DarkGray** **ColorValue( "#a9a9a9" )****ColorValue( "darkgray" )** **RGBA( 169, 169, 169, 1 )**

![darkgray.](https://learn.microsoft.com/media/function-colors/color-darkgray.png)

**Color.DarkGreen** **ColorValue( "#006400" )****ColorValue( "DarkGreen" )** **RGBA( 0, 100, 0, 1 )**

![darkgreen.](https://learn.microsoft.com/media/function-colors/color-darkgreen.png)

**Color.DarkGrey** **ColorValue( "#a9a9a9" )****ColorValue( "DARKGREY" )** **RGBA( 169, 169, 169, 1 )**

![darkgrey.](https://learn.microsoft.com/media/function-colors/color-darkgrey.png)

**Color.DarkKhaki** **ColorValue( "#bdb76b" )****ColorValue( "DarkKhaki" )** **RGBA( 189, 183, 107, 1 )**

![darkkhaki.](https://learn.microsoft.com/media/function-colors/color-darkkhaki.png)

**Color.DarkMagenta** **ColorValue( "#8b008b" )****ColorValue( "darkmagenta" )** **RGBA( 139, 0, 139, 1 )**

![darkmagenta.](https://learn.microsoft.com/media/function-colors/color-darkmagenta.png)

**Color.DarkOliveGreen** **ColorValue( "#556b2f" )****ColorValue( "DarkOliveGreen" )** **RGBA( 85, 107, 47, 1 )**

![darkolivegreen.](https://learn.microsoft.com/media/function-colors/color-darkolivegreen.png)

**Color.DarkOrange** **ColorValue( "#ff8c00" )****ColorValue( "DARKORANGE" )** **RGBA( 255, 140, 0, 1 )**

![darkorange.](https://learn.microsoft.com/media/function-colors/color-darkorange.png)


**Color.DarkOrchid** **ColorValue( "#9932cc" )****ColorValue( "DarkOrchid" )** **RGBA( 153, 50, 204, 1 )**

![darkorchid.](https://learn.microsoft.com/media/function-colors/color-darkorchid.png)

**Color.DarkRed** **ColorValue( "#8b0000" )****ColorValue( "darkred" )** **RGBA( 139, 0, 0, 1 )**

![darkred.](https://learn.microsoft.com/media/function-colors/color-darkred.png)

**Color.DarkSalmon** **ColorValue( "#e9967a" )****ColorValue( "DarkSalmon" )** **RGBA( 233, 150, 122, 1 )**

![darksalmon.](https://learn.microsoft.com/media/function-colors/color-darksalmon.png)

**Color.DarkSeaGreen** **ColorValue( "#8fbc8f" )****ColorValue( "DARKSEAGREEN" )** **RGBA( 143, 188, 143, 1 )**

![darkseagreen.](https://learn.microsoft.com/media/function-colors/color-darkseagreen.png)

**Color.DarkSlateBlue** **ColorValue( "#483d8b" )****ColorValue( "DarkSlateBlue" )** **RGBA( 72, 61, 139, 1 )**

![darkslateblue.](https://learn.microsoft.com/media/function-colors/color-darkslateblue.png)

**Color.DarkSlateGray** **ColorValue( "#2f4f4f" )****ColorValue( "darkslategray" )** **RGBA( 47, 79, 79, 1 )**

![darkslategray.](https://learn.microsoft.com/media/function-colors/color-darkslategray.png)

**Color.DarkSlateGrey** **ColorValue( "#2f4f4f" )****ColorValue( "DarkSlateGrey" )** **RGBA( 47, 79, 79, 1 )**

![darkslategrey.](https://learn.microsoft.com/media/function-colors/color-darkslategrey.png)

**Color.DarkTurquoise** **ColorValue( "#00ced1" )****ColorValue( "DARKTURQUOISE" )** **RGBA( 0, 206, 209, 1 )**

![darkturquoise.](https://learn.microsoft.com/media/function-colors/color-darkturquoise.png)

**Color.DarkViolet** **ColorValue( "#9400d3" )****ColorValue( "DarkViolet" )** **RGBA( 148, 0, 211, 1 )**

![darkviolet.](https://learn.microsoft.com/media/function-colors/color-darkviolet.png)

**Color.DeepPink** **ColorValue( "#ff1493" )****ColorValue( "deeppink" )** **RGBA( 255, 20, 147, 1 )**

![deeppink.](https://learn.microsoft.com/media/function-colors/color-deeppink.png)


**Color.DeepSkyBlue** **ColorValue( "#00bfff" )****ColorValue( "DeepSkyBlue" )** **RGBA( 0, 191, 255, 1 )**

![deepskyblue.](https://learn.microsoft.com/media/function-colors/color-deepskyblue.png)

**Color.DimGray** **ColorValue( "#696969" )****ColorValue( "DIMGRAY" )** **RGBA( 105, 105, 105, 1 )**

![dimgray.](https://learn.microsoft.com/media/function-colors/color-dimgray.png)

**Color.DimGrey** **ColorValue( "#696969" )****ColorValue( "DimGrey" )** **RGBA( 105, 105, 105, 1 )**

![dimgrey.](https://learn.microsoft.com/media/function-colors/color-dimgrey.png)

**Color.DodgerBlue** **ColorValue( "#1e90ff" )****ColorValue( "dodgerblue" )** **RGBA( 30, 144, 255, 1 )**

![dodgerblue.](https://learn.microsoft.com/media/function-colors/color-dodgerblue.png)

**Color.FireBrick** **ColorValue( "#b22222" )****ColorValue( "FireBrick" )** **RGBA( 178, 34, 34, 1 )**

![firebrick.](https://learn.microsoft.com/media/function-colors/color-firebrick.png)

**Color.FloralWhite** **ColorValue( "#fffaf0" )****ColorValue( "FLORALWHITE" )** **RGBA( 255, 250, 240, 1 )**

![floralwhite.](https://learn.microsoft.com/media/function-colors/color-floralwhite.png)

**Color.ForestGreen** **ColorValue( "#228b22" )****ColorValue( "ForestGreen" )** **RGBA( 34, 139, 34, 1 )**

![forestgreen.](https://learn.microsoft.com/media/function-colors/color-forestgreen.png)

**Color.Fuchsia** **ColorValue( "#ff00ff" )****ColorValue( "fuchsia" )** **RGBA( 255, 0, 255, 1 )**

![fuchsia.](https://learn.microsoft.com/media/function-colors/color-fuchsia.png)

**Color.Gainsboro** **ColorValue( "#dcdcdc" )****ColorValue( "Gainsboro" )** **RGBA( 220, 220, 220, 1 )**

![gainsboro.](https://learn.microsoft.com/media/function-colors/color-gainsboro.png)

**Color.GhostWhite** **ColorValue( "#f8f8ff" )****ColorValue( "GHOSTWHITE" )** **RGBA( 248, 248, 255, 1 )**

![ghostwhite.](https://learn.microsoft.com/media/function-colors/color-ghostwhite.png)


**Color.Gold** **ColorValue( "#ffd700" )****ColorValue( "Gold" )** **RGBA( 255, 215, 0, 1 )**

![gold.](https://learn.microsoft.com/media/function-colors/color-gold.png)

**Color.GoldenRod** **ColorValue( "#daa520" )****ColorValue( "goldenrod" )** **RGBA( 218, 165, 32, 1 )**

![goldenrod.](https://learn.microsoft.com/media/function-colors/color-goldenrod.png)

**Color.Gray** **ColorValue( "#808080" )****ColorValue( "Gray" )** **RGBA( 128, 128, 128, 1 )**

![gray.](https://learn.microsoft.com/media/function-colors/color-gray.png)

**Color.Green** **ColorValue( "#008000" )****ColorValue( "GREEN" )** **RGBA( 0, 128, 0, 1 )**

![green.](https://learn.microsoft.com/media/function-colors/color-green.png)

**Color.GreenYellow** **ColorValue( "#adff2f" )****ColorValue( "GreenYellow" )** **RGBA( 173, 255, 47, 1 )**

![greenyellow.](https://learn.microsoft.com/media/function-colors/color-greenyellow.png)

**Color.Grey** **ColorValue( "#808080" )****ColorValue( "grey" )** **RGBA( 128, 128, 128, 1 )**

![grey.](https://learn.microsoft.com/media/function-colors/color-grey.png)

**Color.Honeydew** **ColorValue( "#f0fff0" )****ColorValue( "Honeydew" )** **RGBA( 240, 255, 240, 1 )**

![honeydew.](https://learn.microsoft.com/media/function-colors/color-honeydew.png)

**Color.HotPink** **ColorValue( "#ff69b4" )****ColorValue( "HOTPINK" )** **RGBA( 255, 105, 180, 1 )**

![hotpink.](https://learn.microsoft.com/media/function-colors/color-hotpink.png)

**Color.IndianRed** **ColorValue( "#cd5c5c" )****ColorValue( "IndianRed" )** **RGBA( 205, 92, 92, 1 )**

![indianred.](https://learn.microsoft.com/media/function-colors/color-indianred.png)

**Color.Indigo** **ColorValue( "#4b0082" )****ColorValue( "indigo" )** **RGBA( 75, 0, 130, 1 )**

![indigo.](https://learn.microsoft.com/media/function-colors/color-indigo.png)

**Color.Ivory** **ColorValue( "#fffff0" )****ColorValue( "Ivory" )** **RGBA( 255, 255, 240, 1 )**

![ivory.](https://learn.microsoft.com/media/function-colors/color-ivory.png)


**Color.Khaki** **ColorValue( "#f0e68c" )****ColorValue( "KHAKI" )** **RGBA( 240, 230, 140, 1 )**

![khaki.](https://learn.microsoft.com/media/function-colors/color-khaki.png)

**Color.Lavender** **ColorValue( "#e6e6fa" )****ColorValue( "Lavender" )** **RGBA( 230, 230, 250, 1 )**

![lavender.](https://learn.microsoft.com/media/function-colors/color-lavender.png)

**Color.LavenderBlush** **ColorValue( "#fff0f5" )****ColorValue( "lavenderblush" )** **RGBA( 255, 240, 245, 1 )**

![lavenderblush.](https://learn.microsoft.com/media/function-colors/color-lavenderblush.png)

**Color.LawnGreen** **ColorValue( "#7cfc00" )****ColorValue( "LawnGreen" )** **RGBA( 124, 252, 0, 1 )**

![lawngreen.](https://learn.microsoft.com/media/function-colors/color-lawngreen.png)

**Color.LemonChiffon** **ColorValue( "#fffacd" )****ColorValue( "LEMONCHIFFON" )** **RGBA( 255, 250, 205, 1 )**

![lemonchiffon.](https://learn.microsoft.com/media/function-colors/color-lemonchiffon.png)

**Color.LightBlue** **ColorValue( "#add8e6" )****ColorValue( "LightBlue" )** **RGBA( 173, 216, 230, 1 )**

![lightblue.](https://learn.microsoft.com/media/function-colors/color-lightblue.png)

**Color.LightCoral** **ColorValue( "#f08080" )****ColorValue( "lightcoral" )** **RGBA( 240, 128, 128, 1 )**

![lightcoral.](https://learn.microsoft.com/media/function-colors/color-lightcoral.png)

**Color.LightCyan** **ColorValue( "#e0ffff" )****ColorValue( "LightCyan" )** **RGBA( 224, 255, 255, 1 )**

![lightcyan.](https://learn.microsoft.com/media/function-colors/color-lightcyan.png)

**Color.LightGoldenRodYellow** **ColorValue( "#fafad2" )****ColorValue( "lightgoldenrodyellow" )** **RGBA( 250, 250, 210, 1 )**

![lightgoldenrodyellow.](https://learn.microsoft.com/media/function-colors/color-lightgoldenrodyellow.png)

**Color.LightGray** **ColorValue( "#d3d3d3" )****ColorValue( "LightGray" )** **RGBA( 211, 211, 211, 1 )**

![lightgray.](https://learn.microsoft.com/media/function-colors/color-lightgray.png)


**Color.LightGreen** **ColorValue( "#90ee90" )****ColorValue( "lightgreen" )** **RGBA( 144, 238, 144, 1 )**

![lightgreen.](https://learn.microsoft.com/media/function-colors/color-lightgreen.png)

**Color.LightGrey** **ColorValue( "#d3d3d3" )****ColorValue( "LightGrey" )** **RGBA( 211, 211, 211, 1 )**

![lightgrey.](https://learn.microsoft.com/media/function-colors/color-lightgrey.png)

**Color.LightPink** **ColorValue( "#ffb6c1" )****ColorValue( "LIGHTPINK" )** **RGBA( 255, 182, 193, 1 )**

![lightpink.](https://learn.microsoft.com/media/function-colors/color-lightpink.png)

**Color.LightSalmon** **ColorValue( "#ffa07a" )****ColorValue( "LightSalmon" )** **RGBA( 255, 160, 122, 1 )**

![lightsalmon.](https://learn.microsoft.com/media/function-colors/color-lightsalmon.png)

**Color.LightSeaGreen** **ColorValue( "#20b2aa" )****ColorValue( "lightseagreen" )** **RGBA( 32, 178, 170, 1 )**

![lightseagreen.](https://learn.microsoft.com/media/function-colors/color-lightseagreen.png)

**Color.LightSkyBlue** **ColorValue( "#87cefa" )****ColorValue( "LightSkyBlue" )** **RGBA( 135, 206, 250, 1 )**

![lightskyblue.](https://learn.microsoft.com/media/function-colors/color-lightskyblue.png)

**Color.LightSlateGray** **ColorValue( "#778899" )****ColorValue( "LIGHTSLATEGRAY" )** **RGBA( 119, 136, 153, 1 )**

![lightslategray.](https://learn.microsoft.com/media/function-colors/color-lightslategray.png)

**Color.LightSlateGrey** **ColorValue( "#778899" )****ColorValue( "LightSlateGrey" )** **RGBA( 119, 136, 153, 1 )**

![lightslategrey.](https://learn.microsoft.com/media/function-colors/color-lightslategrey.png)

**Color.LightSteelBlue** **ColorValue( "#b0c4de" )****ColorValue( "lightsteelblue" )** **RGBA( 176, 196, 222, 1 )**

![lightsteelblue.](https://learn.microsoft.com/media/function-colors/color-lightsteelblue.png)

**Color.LightYellow** **ColorValue( "#ffffe0" )****ColorValue( "LightYellow" )** **RGBA( 255, 255, 224, 1 )**

![lightyellow.](https://learn.microsoft.com/media/function-colors/color-lightyellow.png)


**Color.Lime** **ColorValue( "#00ff00" )****ColorValue( "LIME" )** **RGBA( 0, 255, 0, 1 )**

![lime.](https://learn.microsoft.com/media/function-colors/color-lime.png)

**Color.LimeGreen** **ColorValue( "#32cd32" )****ColorValue( "LimeGreen" )** **RGBA( 50, 205, 50, 1 )**

![limegreen.](https://learn.microsoft.com/media/function-colors/color-limegreen.png)

**Color.Linen** **ColorValue( "#faf0e6" )****ColorValue( "linen" )** **RGBA( 250, 240, 230, 1 )**

![linen.](https://learn.microsoft.com/media/function-colors/color-linen.png)

**Color.Magenta** **ColorValue( "#ff00ff" )****ColorValue( "Magenta" )** **RGBA( 255, 0, 255, 1 )**

![magenta.](https://learn.microsoft.com/media/function-colors/color-magenta.png)

**Color.Maroon** **ColorValue( "#800000" )****ColorValue( "MAROON" )** **RGBA( 128, 0, 0, 1 )**

![maroon.](https://learn.microsoft.com/media/function-colors/color-maroon.png)

**Color.MediumAquamarine** **ColorValue( "#66cdaa" )****ColorValue( "MediumAquamarine" )** **RGBA( 102, 205, 170, 1 )**

![mediumaquamarine.](https://learn.microsoft.com/media/function-colors/color-mediumaquamarine.png)

**Color.MediumBlue** **ColorValue( "#0000cd" )****ColorValue( "mediumblue" )** **RGBA( 0, 0, 205, 1 )**

![mediumblue.](https://learn.microsoft.com/media/function-colors/color-mediumblue.png)

**Color.MediumOrchid** **ColorValue( "#ba55d3" )****ColorValue( "MediumOrchid" )** **RGBA( 186, 85, 211, 1 )**

![mediumorchid.](https://learn.microsoft.com/media/function-colors/color-mediumorchid.png)

**Color.MediumPurple** **ColorValue( "#9370db" )****ColorValue( "MEDIUMPURPLE" )** **RGBA( 147, 112, 219, 1 )**

![mediumpurple.](https://learn.microsoft.com/media/function-colors/color-mediumpurple.png)

**Color.MediumSeaGreen** **ColorValue( "#3cb371" )****ColorValue( "MediumSeaGreen" )** **RGBA( 60, 179, 113, 1 )**

![mediumseagreen.](https://learn.microsoft.com/media/function-colors/color-mediumseagreen.png)


**Color.MediumSlateBlue** **ColorValue( "#7b68ee" )****ColorValue( "mediumslateblue" )** **RGBA( 123, 104, 238, 1 )**

![mediumslateblue.](https://learn.microsoft.com/media/function-colors/color-mediumslateblue.png)

**Color.MediumSpringGreen** **ColorValue( "#00fa9a" )****ColorValue( "MediumSpringGreen" )** **RGBA( 0, 250, 154, 1 )**

![mediumspringgreen.](https://learn.microsoft.com/media/function-colors/color-mediumspringgreen.png)

**Color.MediumTurquoise** **ColorValue( "#48d1cc" )****ColorValue( "MEDIUMTURQUOISE" )** **RGBA( 72, 209, 204, 1 )**

![mediumturquoise.](https://learn.microsoft.com/media/function-colors/color-mediumturquoise.png)

**Color.MediumVioletRed** **ColorValue( "#c71585" )****ColorValue( "MediumVioletRed" )** **RGBA( 199, 21, 133, 1 )**

![mediumvioletred.](https://learn.microsoft.com/media/function-colors/color-mediumvioletred.png)

**Color.MidnightBlue** **ColorValue( "#191970" )****ColorValue( "midnightblue" )** **RGBA( 25, 25, 112, 1 )**

![midnightblue.](https://learn.microsoft.com/media/function-colors/color-midnightblue.png)

**Color.MintCream** **ColorValue( "#f5fffa" )****ColorValue( "MintCream" )** **RGBA( 245, 255, 250, 1 )**

![mintcream.](https://learn.microsoft.com/media/function-colors/color-mintcream.png)

**Color.MistyRose** **ColorValue( "#ffe4e1" )****ColorValue( "MISTYROSE" )** **RGBA( 255, 228, 225, 1 )**

![mistyrose.](https://learn.microsoft.com/media/function-colors/color-mistyrose.png)

**Color.Moccasin** **ColorValue( "#ffe4b5" )****ColorValue( "Moccasin" )** **RGBA( 255, 228, 181, 1 )**

![moccasin.](https://learn.microsoft.com/media/function-colors/color-moccasin.png)

**Color.NavajoWhite** **ColorValue( "#ffdead" )****ColorValue( "navajowhite" )** **RGBA( 255, 222, 173, 1 )**

![navajowhite.](https://learn.microsoft.com/media/function-colors/color-navajowhite.png)

**Color.Navy** **ColorValue( "#000080" )****ColorValue( "Navy" )** **RGBA( 0, 0, 128, 1 )**

![navy.](https://learn.microsoft.com/media/function-colors/color-navy.png)


**Color.OldLace** **ColorValue( "#fdf5e6" )****ColorValue( "OLDLACE" )** **RGBA( 253, 245, 230, 1 )**

![oldlace.](https://learn.microsoft.com/media/function-colors/color-oldlace.png)

**Color.Olive** **ColorValue( "#808000" )****ColorValue( "Olive" )** **RGBA( 128, 128, 0, 1 )**

![olive.](https://learn.microsoft.com/media/function-colors/color-olive.png)

**Color.OliveDrab** **ColorValue( "#6b8e23" )****ColorValue( "olivedrab" )** **RGBA( 107, 142, 35, 1 )**

![olivedrab.](https://learn.microsoft.com/media/function-colors/color-olivedrab.png)

**Color.Orange** **ColorValue( "#ffa500" )****ColorValue( "Orange" )** **RGBA( 255, 165, 0, 1 )**

![orange.](https://learn.microsoft.com/media/function-colors/color-orange.png)

**Color.OrangeRed** **ColorValue( "#ff4500" )****ColorValue( "ORANGERED" )** **RGBA( 255, 69, 0, 1 )**

![orangered.](https://learn.microsoft.com/media/function-colors/color-orangered.png)

**Color.Orchid** **ColorValue( "#da70d6" )****ColorValue( "Orchid" )** **RGBA( 218, 112, 214, 1 )**

![orchid.](https://learn.microsoft.com/media/function-colors/color-orchid.png)

**Color.PaleGoldenRod** **ColorValue( "#eee8aa" )****ColorValue( "palegoldenrod" )** **RGBA( 238, 232, 170, 1 )**

![palegoldenrod.](https://learn.microsoft.com/media/function-colors/color-palegoldenrod.png)

**Color.PaleGreen** **ColorValue( "#98fb98" )****ColorValue( "PaleGreen" )** **RGBA( 152, 251, 152, 1 )**

![palegreen.](https://learn.microsoft.com/media/function-colors/color-palegreen.png)

**Color.PaleTurquoise** **ColorValue( "#afeeee" )****ColorValue( "PALETURQUOISE" )** **RGBA( 175, 238, 238, 1 )**

![paleturquoise.](https://learn.microsoft.com/media/function-colors/color-paleturquoise.png)

**Color.PaleVioletRed** **ColorValue( "#db7093" )****ColorValue( "PaleVioletRed" )** **RGBA( 219, 112, 147, 1 )**

![palevioletred.](https://learn.microsoft.com/media/function-colors/color-palevioletred.png)


**Color.PapayaWhip** **ColorValue( "#ffefd5" )****ColorValue( "papayawhip" )** **RGBA( 255, 239, 213, 1 )**

![papayawhip.](https://learn.microsoft.com/media/function-colors/color-papayawhip.png)

**Color.PeachPuff** **ColorValue( "#ffdab9" )****ColorValue( "PeachPuff" )** **RGBA( 255, 218, 185, 1 )**

![peachpuff.](https://learn.microsoft.com/media/function-colors/color-peachpuff.png)

**Color.Peru** **ColorValue( "#cd853f" )****ColorValue( "PERU" )** **RGBA( 205, 133, 63, 1 )**

![peru.](https://learn.microsoft.com/media/function-colors/color-peru.png)

**Color.Pink** **ColorValue( "#ffc0cb" )****ColorValue( "Pink" )** **RGBA( 255, 192, 203, 1 )**

![pink.](https://learn.microsoft.com/media/function-colors/color-pink.png)

**Color.Plum** **ColorValue( "#dda0dd" )****ColorValue( "plum" )** **RGBA( 221, 160, 221, 1 )**

![plum.](https://learn.microsoft.com/media/function-colors/color-plum.png)

**Color.PowderBlue** **ColorValue( "#b0e0e6" )****ColorValue( "PowderBlue" )** **RGBA( 176, 224, 230, 1 )**

![powderblue.](https://learn.microsoft.com/media/function-colors/color-powderblue.png)

**Color.Purple** **ColorValue( "#800080" )****ColorValue( "PURPLE" )** **RGBA( 128, 0, 128, 1 )**

![purple.](https://learn.microsoft.com/media/function-colors/color-purple.png)

**Color.Red** **ColorValue( "#ff0000" )****ColorValue( "Red" )** **RGBA( 255, 0, 0, 1 )**

![red.](https://learn.microsoft.com/media/function-colors/color-red.png)

**Color.RosyBrown** **ColorValue( "#bc8f8f" )****ColorValue( "rosybrown" )** **RGBA( 188, 143, 143, 1 )**

![rosybrown.](https://learn.microsoft.com/media/function-colors/color-rosybrown.png)

**Color.RoyalBlue** **ColorValue( "#4169e1" )****ColorValue( "RoyalBlue" )** **RGBA( 65, 105, 225, 1 )**

![royalblue.](https://learn.microsoft.com/media/function-colors/color-royalblue.png)

**Color.SaddleBrown** **ColorValue( "#8b4513" )****ColorValue( "SADDLEBROWN" )** **RGBA( 139, 69, 19, 1 )**

![saddlebrown.](https://learn.microsoft.com/media/function-colors/color-saddlebrown.png)


**Color.Salmon** **ColorValue( "#fa8072" )****ColorValue( "Salmon" )** **RGBA( 250, 128, 114, 1 )**

![salmon.](https://learn.microsoft.com/media/function-colors/color-salmon.png)

**Color.SandyBrown** **ColorValue( "#f4a460" )****ColorValue( "sandybrown" )** **RGBA( 244, 164, 96, 1 )**

![sandybrown.](https://learn.microsoft.com/media/function-colors/color-sandybrown.png)

**Color.SeaGreen** **ColorValue( "#2e8b57" )****ColorValue( "SeaGreen" )** **RGBA( 46, 139, 87, 1 )**

![seagreen.](https://learn.microsoft.com/media/function-colors/color-seagreen.png)

**Color.SeaShell** **ColorValue( "#fff5ee" )****ColorValue( "SEASHELL" )** **RGBA( 255, 245, 238, 1 )**

![seashell.](https://learn.microsoft.com/media/function-colors/color-seashell.png)

**Color.Sienna** **ColorValue( "#a0522d" )****ColorValue( "Sienna" )** **RGBA( 160, 82, 45, 1 )**

![sienna.](https://learn.microsoft.com/media/function-colors/color-sienna.png)

**Color.Silver** **ColorValue( "#c0c0c0" )****ColorValue( "silver" )** **RGBA( 192, 192, 192, 1 )**

![silver.](https://learn.microsoft.com/media/function-colors/color-silver.png)

**Color.SkyBlue** **ColorValue( "#87ceeb" )****ColorValue( "SkyBlue" )** **RGBA( 135, 206, 235, 1 )**

![skyblue.](https://learn.microsoft.com/media/function-colors/color-skyblue.png)

**Color.SlateBlue** **ColorValue( "#6a5acd" )****ColorValue( "SLATEBLUE" )** **RGBA( 106, 90, 205, 1 )**

![slateblue.](https://learn.microsoft.com/media/function-colors/color-slateblue.png)

**Color.SlateGray** **ColorValue( "#708090" )****ColorValue( "SlateGray" )** **RGBA( 112, 128, 144, 1 )**

![slategray.](https://learn.microsoft.com/media/function-colors/color-slategray.png)

**Color.SlateGrey** **ColorValue( "#708090" )****ColorValue( "slategrey" )** **RGBA( 112, 128, 144, 1 )**

![slategrey.](https://learn.microsoft.com/media/function-colors/color-slategrey.png)

**Color.Snow** **ColorValue( "#fffafa" )****ColorValue( "Snow" )** **RGBA( 255, 250, 250, 1 )**

![snow.](https://learn.microsoft.com/media/function-colors/color-snow.png)


**Color.SpringGreen** **ColorValue( "#00ff7f" )****ColorValue( "SPRINGGREEN" )** **RGBA( 0, 255, 127, 1 )**

![springgreen.](https://learn.microsoft.com/media/function-colors/color-springgreen.png)

**Color.SteelBlue** **ColorValue( "#4682b4" )****ColorValue( "SteelBlue" )** **RGBA( 70, 130, 180, 1 )**

![steelblue.](https://learn.microsoft.com/media/function-colors/color-steelblue.png)

**Color.Tan** **ColorValue( "#d2b48c" )****ColorValue( "tan" )** **RGBA( 210, 180, 140, 1 )**

![tan.](https://learn.microsoft.com/media/function-colors/color-tan.png)

**Color.Teal** **ColorValue( "#008080" )****ColorValue( "Teal" )** **RGBA( 0, 128, 128, 1 )**

![teal.](https://learn.microsoft.com/media/function-colors/color-teal.png)

**Color.Thistle** **ColorValue( "#d8bfd8" )****ColorValue( "THISTLE" )** **RGBA( 216, 191, 216, 1 )**

![thistle.](https://learn.microsoft.com/media/function-colors/color-thistle.png)

**Color.Tomato** **ColorValue( "#ff6347" )****ColorValue( "Tomato" )** **RGBA( 255, 99, 71, 1 )**

![tomato.](https://learn.microsoft.com/media/function-colors/color-tomato.png)

**Color.Transparent** **ColorValue( "#00000000" )****ColorValue( "Transparent" )** **RGBA( 0, 0, 0, 0 )**

![transparent.](https://learn.microsoft.com/media/function-colors/color-transparent.png)

**Color.Turquoise** **ColorValue( "#40e0d0" )****ColorValue( "turquoise" )** **RGBA( 64, 224, 208, 1 )**

![turquoise.](https://learn.microsoft.com/media/function-colors/color-turquoise.png)

**Color.Violet** **ColorValue( "#ee82ee" )****ColorValue( "Violet" )** **RGBA( 238, 130, 238, 1 )**

![violet.](https://learn.microsoft.com/media/function-colors/color-violet.png)

**Color.Wheat** **ColorValue( "#f5deb3" )****ColorValue( "WHEAT" )** **RGBA( 245, 222, 179, 1 )**

![wheat.](https://learn.microsoft.com/media/function-colors/color-wheat.png)

**Color.White** **ColorValue( "#ffffff" )****ColorValue( "White" )** **RGBA( 255, 255, 255, 1 )**

![white.](https://learn.microsoft.com/media/function-colors/color-white.png)


**Color.WhiteSmoke** **ColorValue( "#f5f5f5" )****ColorValue( "whitesmoke" )** **RGBA( 245, 245, 245, 1 )**

![whitesmoke.](https://learn.microsoft.com/media/function-colors/color-whitesmoke.png)

**Color.Yellow** **ColorValue( "#ffff00" )****ColorValue( "Yellow" )** **RGBA( 255, 255, 0, 1 )**

![yellow.](https://learn.microsoft.com/media/function-colors/color-yellow.png)

**Color.YellowGreen** **ColorValue( "#9acd32" )****ColorValue( "YELLOWGREEN" )** **RGBA( 154, 205, 50, 1 )**

![yellowgreen.](https://learn.microsoft.com/media/function-colors/color-yellowgreen.png)

