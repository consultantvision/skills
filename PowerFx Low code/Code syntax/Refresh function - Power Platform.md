---
title: Refresh function - Power Platform
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 18:54:29 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 18:54:35 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- The Refresh function in Power Platform refreshes the records of a data source, showing changes made by other users.
- The function has no return value and can only be used in behavior formulas.
- The syntax for the Refresh function is `Refresh(DataSource)`, where `DataSource` is the required data source to be refreshed.


Detailed summary

- The Refresh function in the Power Platform is used to retrieve a fresh copy of a data source, allowing users to see changes made by other users, and it has no return value, making it only usable in behavior formulas.
- The Refresh function applies to various Power Platform components, including Canvas apps, Copilot Studio, Model-driven apps, Power Platform CLI, and Dataverse functions, providing a unified way to update data sources across different platforms.
- The syntax of the Refresh function is Refresh( DataSource ), where DataSource is a required parameter that specifies the data source to be refreshed, such as a table or a dataset.
- An example of using the Refresh function is provided, where a data source named IceCream is refreshed after another user changes the Quantity in the Strawberry record, and the updated value is then reflected in galleries bound to the IceCream data source.
- The Refresh function is an important tool for ensuring data consistency and accuracy in Power Platform applications, and it can be used in various scenarios where data needs to be updated in real-time.
- Additional resources and support are available for users who need help with the Refresh function, including the Ask Learn AI assistant, which can provide guidance and answer questions using trusted Microsoft documentation.




## Sources
- [website](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-refresh)
