---
title: Sequence function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 19:01:30 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 19:01:38 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Sequence function generates a single column table of sequential numbers, with the column name 'Value'.
- The function can be used with ForAll to iterate a specific number of times and perform actions such as collecting random numbers or transforming values into other data types.
- Sequence has limitations, including a maximum of 50,000 records, and its syntax is Sequence( Records [, Start [, Step ] ] ), where Records is required and Start and Step are optional.


Detailed summary

- The Sequence function in Power Platform generates a single column table of sequential numbers, with the column name being Value, and it can be used to create a table with a specified number of records, such as 1, 2, 3, by using the formula Sequence(4), which is equivalent to [1,2,3,4].
- The Sequence function can be used in conjunction with the ForAll function to iterate a specific number of times, for example, to add 10 random numbers to a collection called MyRandomNumbers, using the formula ForAll( Sequence( 10 ), Collect( MyRandomNumbers, Rand() ) ).
- The ForAll function can also be used to transform the value into other data types and return a new table, such as returning a table of the next 10 days, using the formula ForAll( Sequence( 10 ), DateAdd( Today(), Value, Days ) ).
- The number of records to generate using the Sequence function is rounded down to the nearest whole number and must be in the range 0 to 50,000, and generating a table with zero records results in an empty table, with the function being limited to 50,000 records.
- The Sequence function has three parameters: Records, Start, and Step, where Records is required and specifies the number of records to create, Start is optional and specifies the starting number for the sequence with a default of 1, and Step is optional and specifies the increment for each successive number in the sequence with a default of 1.
- The Sequence function can be used with various formulas to generate different types of tables, such as a 4 record table starting at the default 1 and incrementing by the default 1, using the formula Sequence( 4 ), or a 4 record table starting at 24 and incrementing by the default 1, using the formula Sequence( 4, 24 ).
- The Sequence function can also be used with other functions, such as the Concat function, to generate a string of numbers, or with the Char function, to display a character map in a two-dimensional layout, and with the As operator, to create a chessboard in a text string and in two nested galleries.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-sequence)
**Applies to:**

![](https://learn.microsoft.com/media/yes-icon.svg)

Canvas apps Copilot Studio Desktop flows Model-driven apps Power Platform CLI Dataverse functions

Generate a table of sequential numbers.

The **Sequence** function generates a single column table of sequential numbers, such as 1, 2, 3. The name of the column is **Value**. `Sequence( 4 )` is equivalent to `[1,2,3,4]`.

Use **Sequence** with the **ForAll** function to iterate a specific number of times. For example, the following formula adds 10 random numbers to the collection **MyRandomNumbers**:

```
ForAll( Sequence( 10 ), Collect( MyRandomNumbers, Rand() ) )
```

**ForAll** can also be used to transform the value into other data types and return a new table. For example, the following formula returns a table of the next 10 days:

```
ForAll( Sequence( 10 ), DateAdd( Today(), Value, Days ) )
```

The number of records to generate is rounded down to the nearest whole number and must be in the range 0 to 50,000. Generating a table with zero records results in an *empty* table.

Note

**Sequence** is limited to 50,000 records.


**Sequence**( *Records* [, *Start* [, *Step* ] ] )

- *Records* – Required. The number of records to create. Must be in the range 0 to 50,000.

- *Start* – Optional. The starting number for the sequence. Default is 1.

- *Step* – Optional. The increment for each successive number in the sequence. *Step* can be negative to count down from the *Start*. Default is 1.


| Formula | Description | Result |
| --- | --- | --- |
| **Sequence( 4 )** | Generates a 4 record table starting at the default 1 and incrementing by the default 1. | ![Sequence # 4.](https://learn.microsoft.com/media/function-sequence/sequence-4.png)<br> |
| **Sequence( 4, 24 )** | Generates a 4 record table starting at 24 and incrementing by the default 1. | ![Sequence 4, 24.](https://learn.microsoft.com/media/function-sequence/sequence-4-24.png)<br> |
| **Sequence( 4, 4, -1 )** | Generates a 4 record table starting at 4 and incrementing by -1, effectively counting backward. | ![Sequence 4, 4, -1.](https://learn.microsoft.com/media/function-sequence/sequence-4-4-n1.png)<br> |
| **Sequence( 4, -100, 0.5 )** | Generates a 4 record table starting at -100 and incrementing by 0.5. | ![Sequence 4, -100, 0.5.](https://learn.microsoft.com/media/function-sequence/sequence-4-n100-p5.png)<br> |
| **Sequence( 0.9 )** | Generates an *empty* table as the count rounds down to 0. | ![Sequence 0.9.](https://learn.microsoft.com/media/function-sequence/sequence-empty.png)<br> |
| **ForAll( Sequence( 4 ), Rand() )** | Generates a 4 record table of random numbers. | ![Sequence # 4 with Random.](https://learn.microsoft.com/media/function-sequence/sequence-4-random.png)<br>*Actual numbers will vary.* |
| **Concat( Sequence( 5 ),Text( Value ) & " " )** | Generates a string of numbers from 1 to 5. | **"1 2 3 4 5 "** |

See the [Char](https://learn.microsoft.com/function-char#display-a-character-map) function reference for two **Sequence** functions working together to display a character map in a two-dimensional layout.

See the [As](https://learn.microsoft.com/operators#as-operator) operator reference for two **Sequence** functions working together to create a chessboard in a text string and in two nested galleries.

