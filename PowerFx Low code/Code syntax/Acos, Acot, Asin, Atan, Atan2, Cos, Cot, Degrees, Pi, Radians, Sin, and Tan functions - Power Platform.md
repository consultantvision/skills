---
title: Acos, Acot, Asin, Atan, Atan2, Cos, Cot, Degrees, Pi, Radians, Sin, and Tan functions - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 17:13:53 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 17:15:00 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Power Platform provides various trigonometric functions, including Cos, Cot, Sin, Tan, Acos, Acot, Asin, Atan, and Atan2, to calculate trigonometric values.
- The Degrees and Radians functions are used to convert between degrees and radians, while the Pi function returns the transcendental number π.
- These functions can accept single numbers or single-column tables as arguments and return single results or single-column tables of results, with undefined values resulting in blank results.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-trig)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions Power Pages

Calculates trigonometric values.

The **Cos** function returns the cosine of its argument, an angle specified in radians.

The **Cot** function returns the cotangent of its argument, an angle specified in radians.

The **Sin** function returns the sine of its argument, an angle specified in radians.

The **Tan** function returns the tangent of its argument, an angle specified in radians.

The **Acos** function returns the arccosine, or inverse cosine, of its argument. The arccosine is the angle whose cosine is the argument. The returned angle is given in radians in the range 0 (zero) to π.

The **Acot** function returns the principal value of the arccotangent, or inverse cotangent, of its argument. The returned angle is given in radians in the range 0 (zero) to π.


The **Asin** function returns the arcsine, or inverse sine, of its argument. The arcsine is the angle whose sine is the argument. The returned angle is given in radians in the range -π/2 to π/2.

The **Atan** function returns the arctangent, or inverse tangent, of its argument. The arctangent is the angle whose tangent is the argument. The returned angle is given in radians in the range -π/2 to π/2.

The **Atan2** function returns the arctangent, or inverse tangent, of the specified *x* and *y* coordinates as arguments. The arctangent is the angle from the *x*-axis to a line that contains the origin (0, 0) and a point with coordinates (*x*, *y*). The angle is given in radians between -π and π, excluding -π. A positive result represents a counterclockwise angle from the *x*-axis; a negative result represents a clockwise angle. **Atan2(** ***a*****,** ***b*** **)** equals **Atan(** ***b*****/*****a*** **)**, except that ***a*** can equal 0 (zero) with the **Atan2** function.

The **Degrees** function converts radians to degrees. π radians equals 180 degrees.


The **Pi** function returns the transcendental number π, which begins 3.141592...

The **Radians** function converts degrees to radians.

If you pass a single number to these functions, the return value is a single result. If you pass a single-column [table](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) that contains numbers, the return value is a single-column table of results with a **Value** column, one result for each record in the argument's table. If you have a multi-column table, you can shape it into a single-column table, as [working with tables](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-tables) describes.

If an argument would result in an undefined value, the result is *blank*. This can happen, for example, when using inverse functions with arguments that are out of range.

**Cos**( *Radians* )**Cot**( *Radians* )**Sin**( *Radians* )**Tan**( *Radians* )

- *Radians* - Required. Angle to operate on.

**Cos**( *SingleColumnTable* )**Cot**( *SingleColumnTable* )**Sin**( *SingleColumnTable* )**Tan**( *SingleColumnTable* )

- *SingleColumnTable* - Required. A single-column table of angles to operate on.

**Acos**( *Number* )**Acot**( *Number* )**Asin**( *Number* )**Atan**( *Number* )


- *Number* - Required. Number to operate on.

**Acos**( *SingleColumnTable* )**Acot**( *SingleColumnTable* )**Asin**( *SingleColumnTable* )**Atan**( *SingleColumnTable* )

- *SingleColumnTable* - Required. A single-column table of numbers to operate on.

**Atan2**( *X*, *Y* )

- *X* - Required. *X*-axis coordinate.

- *Y* - Required. *Y*-axis coordinate.

**Degrees**( *Radians* )

- *Radians* - Required. Angle in radians to convert to degrees.

**Pi**()

**Radians**( *Degrees* )

- *Degrees* - Required. Angle in degrees to convert to radians.


| Formula | Description | Result |
| --- | --- | --- |
| **Cos( 1.047197 )** | Returns the cosine of 1.047197 radians or 60 degrees. | 0.5 |
| **Cot( Pi()/4 )** | Returns the cotangent of 0.785398... radians or 45 degrees. | 1 |
| **Sin( Pi()/2 )** | Returns the sine of 1.570796... radians or 90 degrees. | 1 |
| **Tan( Radians(60) )** | Returns the tangent of 1.047197... radians or 60 degrees. | 1.732050... |
| **Acos( 0.5 )** | Returns the arccosine of 0.5, in radians. | 1.047197... |
| **Acot( 1 )** | Returns the arccotangent of 1, in radians. | 0.785398... |
| **Asin( 1 )** | Returns the arcsine of 1, in radians. | 1.570796... |
| **Atan( 1.732050 )** | Returns the arctangent of 1.732050, in radians. | 1.047197... |
| **Atan2( 5, 3 )** | Returns the arctangent of the angle from the *x*-axis of the line that contains the origin (0,0) and the coordinate (5,3), which is approximately 31 degrees. | 0.540419... |
| **Atan2( 4, 4 )** | Returns the arctangent of the angle from the *x*-axis of the line that contains the origin (0,0) and the coordinate (4,4), which is exactly π/4 radians or 45 degrees. | 0.785398... |
| **Degrees( 1.047197 )** | Returns the equivalent number of degrees for 1.047197 radians. | 60 |
| **Pi()** | Returns the transcendental number π. | 3.141592... |
| **Radians( 15 )** | Returns the equivalent number of radians for 15 degrees. | 0.261799... |


The examples in this section use a [data source](https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/working-with-data-sources) that's named **ValueTable** and that contains the following data. The last record in the table is π/2 radians or 90 degrees.

| Value |
| --- |
| 0.5 |
| -2 |
| 1.570796... |


| Formula | Description | Result |
| --- | --- | --- |
| **Cos( ValueTable )** | Returns the cosine of each number in the table. | A single-column table with a `Value` column containing the following values: 0.877582..., -0.416146..., 0 |
| **Cot( ValueTable )** | Returns the cotangent of each number in the table. | A single-column table with a `Value` column containing the following values: 1.830487..., 0.457657..., 0 |
| **Sin( ValueTable )** | Returns the sine of each number in the table. | A single-column table with a `Value` column containing the following values: 0.479425, -0.909297..., 1 |
| **Tan( ValueTable )** | Returns the tangent of each number in the table. | A single-column table with a `Value` column containing the following values: 0.546302..., 2.185039..., 3060023.306952... |
| **Acos( ValueTable )** | Returns the arccosine of each number in the table. | A single-column table with a `Value` column containing the following values: 1.047197..., Blank(), Blank() |
| **Acot( ValueTable )** | Returns the arccotangent of each number in the table. | A single-column table with a `Value` column containing the following values: 1.107138..., 2.677945..., 0.566911... |
| **Asin( ValueTable )** | Returns the arcsine of each number in the table. | A single-column table with a `Value` column containing the following values: 0.523598..., Blank(), Blank() |
| **Atan( ValueTable )** | Returns the arctangent of each number in the table. | A single-column table with a `Value` column containing the following values: 0.463647..., -1.107148..., 1.00388... |
| **Degrees( ValueTable )** | Returns the equivalent number of degrees for each number in the table, assumed to be angles in radians. | A single-column table with a `Value` column containing the following values: 28.647889..., -114.591559..., 90 |
| **Radians( ValueTable )** | Returns the equivalent number of radians for each number in the table, assumed to be angles in degrees. | A single-column table with a `Value` column containing the following values: 0.008726..., -0.034906..., 0.027415... |

