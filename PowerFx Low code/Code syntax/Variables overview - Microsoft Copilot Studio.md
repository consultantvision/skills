---
title: Variables overview - Microsoft Copilot Studio
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 20:16:09 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 20:16:30 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- Variables in Microsoft Copilot Studio exist at four levels: topic, global, system, and environment variables.
- Each variable has a base type, such as String, Boolean, Number, Table, Record, DateTime, Choice, or Blank, which determines the values it can hold and the operators that can be used with it.
- System variables, such as Activity.Channel and User.DisplayName, provide extra information about a conversation and can be used in Microsoft Power Fx formulas, while environment variables are read-only and can be used to store parameter keys and values.


Detailed summary


## Variable Scopes and Types
- Variables in Microsoft Copilot Studio exist at four levels, or scopes, which include topic variables, global variables, system variables, and environment variables, each with its own specific characteristics and uses.
- Topic variables are limited to the topics where they are created, while global variables can be used in all topics, and system variables are automatically created by Copilot Studio to provide contextual information about the conversation or user.
- Environment variables, on the other hand, are created in Power Platform, are read-only in Copilot Studio, and store parameter keys and values that serve as input to various application objects, allowing for flexibility when changing environments or migrating solutions.
- Each variable in Copilot Studio has a base type, which determines the values it can hold and the operators that can be used with it, and includes types such as String, Boolean, Number, Table, Record, DateTime, Choice, and Blank.

## Variable Order and Entities
- The type of a variable is set the first time a value is assigned to it and cannot be changed afterwards, and variables can temporarily appear with an unknown type when testing an agent if they do not have a value yet.
- The order of variables in Copilot Studio is determined from top to bottom of the authoring canvas, with nodes at the top considered before nodes at the bottom, and branches created with Condition nodes are ordered from left to right.
- Copilot Studio uses entities to identify specific types of information from a user's responses, which are saved in variables with the appropriate base type, such as Choice for multiple-choice options or String for a user's entire response.

## Environment Variables Overview
- Environment variables are a Power Platform concept that enables basic application lifecycle management scenarios, such as moving an application between Power Platform environments, and can be used in the same way as topic, global, and system variables, but are read-only in Copilot Studio.
- In Copilot Studio, agent authors are unable to modify environment variables, but administrators have the ability to change the value of environment variables in Power Apps, which is the authoring experience for environment variables.
- The Variables panel in Copilot Studio provides information about environment variables, and the Variable properties panel includes a link to Power Apps, allowing users to access and modify environment variables.
- When an agent is published, it uses the values of environment variables that are set at the time of publication, and any subsequent updates to environment variables require the agent to be republished in order to take effect at runtime, with the exception of secret variables, which are retrieved at runtime.

## Environment Variable Types and Management
- Environment variable types in Copilot Studio are mapped to Power Apps data types, including decimal number, JSON, text, yes/no, data source, and secret, each corresponding to a specific data type in Power Apps, such as number, string, or boolean.
- Environment variable errors are visible in the test chat and when publishing, but are not shown in the Topic list because they are not topic variables, and every agent comes with built-in system variables that provide extra information about a conversation.

## System Variables and Access
- Copilot Studio does not show all system variables, but users can access hidden system variables using a Microsoft Power Fx formula by adding "System." before the variable name, and system variables include information such as activity attachments, channel ID, and sender ID, which can be used in Power Fx formulas to customize the agent's behavior.
- The available system variables include Activity.Attachments, Activity.Channel, Activity.ChannelData, Activity.ChannelId, Activity.From.Id, Activity.From.Name, Activity.Name, Activity.Recipient.Id, and Activity.Recipient.Name, each with a specific definition and data type, such as table, choice, or string.

## Variables Overview and Bot/Conversation Variables
- The variables overview section in the Microsoft Copilot Studio document describes various variables that can be used in different contexts, including telephony channel, activities, bot information, conversations, errors, and user interactions.
- The variables include Activity.Text, which represents the most recent message sent by the user, and Activity.Type, which indicates the type of activity, as well as Bot.EnvironmentId, Bot.Id, Bot.Name, Bot.SchemaName, and Bot.TenantId, which provide information about the agent.
- Conversation-related variables, such as Conversation.Id, Conversation.InTestMode, Conversation.LocalTimeZone, and Conversation.LocalTimeZoneOffset, are also available to provide context about the current conversation, including its unique ID, test mode status, local time zone, and time offset from UTC.

## Error and Inactivity Variables
- Error handling variables, including Error.Code and Error.Message, are supported only when the trigger is On Error, while FallbackCount is supported only when the trigger is On Unknown Intent, and it counts the times a topic couldn't be matched to the user input.
- Inactivity-related variables, such as InactivityTimer.Continue and InactivityTimer.Count, are supported only when the trigger is Inactivity, and they represent whether the timer needs to be continued and the number of times the OnInactivity timer fired due to user inactivity.

## Message and Recognizer Variables
- Variables like LastMessage.Id and LastMessage.Text provide information about the previous message sent by the user, while Recognizer.ExtractedEntities, Recognizer.IntentOptions, and Recognizer.SelectedIntent are supported only when the trigger is On Select Intent, and they represent extracted entities, intent options, and the selected intent from the recognizer.
- Additional variables, including Recognizer.TriggeringMessage.Id, Recognizer.TriggeringMessage.Text, and Recognizer.MultipleTopicsMatchedReason, provide further context about the user message that triggered the current topic and why multiple topics were matched.

## User Authentication Variables
- The document also mentions that certain variables are available for agents configured to authenticate with Microsoft using Microsoft Entra ID authentication, which is the default for new agents, and variables like User.Language can be used to set the user language locale per conversation.
- Other variables, such as ClientPluginActions, SignInReason, and Bot variables, are also available to provide additional functionality and information about the agent and user interactions.
- The variables overview section in the Microsoft Copilot Studio document provides information on various variables that are available for use, including those related to user authentication, such as User.DisplayName, User.Email, User.FirstName, User.Id, User.IsLoggedIn, User.LastName, and User.PrincipalName, which represent the display name, email address, first name, unique ID, login status, last name, and principal name of the user currently interacting with the agent.
- For agents configured to use the Generic OAuth 2 service provider, specific variables are available, including User.AccessToken, User.DisplayName, User.Id, and User.IsLoggedIn, which provide the access token, display name, unique ID, and login status of the user authenticating with the agent.
- Agents configured to use the Microsoft Entra ID (formerly Azure Active Directory) service providers have access to a range of variables, including User.AccessToken, User.DisplayName, User.Email, User.FirstName, User.Id, User.IsLoggedIn, User.LastName, and User.PrincipalName, which offer detailed information about the user, such as their access token, display name, email address, first name, unique ID, login status, last name, and principal name.

## Voice-Enabled Agents and Authentication References
- Additionally, voice-enabled agents have exclusive access to variables like Activity.InputDTMFKeys, Activity.SpeechRecognition.Confidence, Activity.SpeechRecognition.MinimallyFormattedText, Activity.UserInputType, Conversation.OnlyAllowDTMF, and Conversation.SipUuiHeaderValue, which provide insights into the user's input, such as the raw DTMF key value, speech recognition confidence score, formatted text of the speech recognition result, type of user input, DTMF-only mode status, and UUI header string used to pass context into IVR on call start.
- The Authentication variables section, which is referenced at the beginning of the document, likely contains more detailed information on the variables related to user authentication, and users can refer to this section for further clarification on these variables.




## Sources
- [website](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-about?tabs=webApp#system-variables)
Variables exist at four levels, or scopes:

- Topic variables you can use only in the topics where you create them. This scope is the default for variables that you create.

- [Global variables](https://learn.microsoft.com/authoring-variables-bot) you can use in all topics. You can change the scope of a topic variable to make it a global variable.

- [System variables](https://learn.microsoft.com/#system-variables) Copilot Studio automatically creates for an agent. They provide more contextual information about the conversation or the user. They're available in all topics.

- [Environment variables](https://learn.microsoft.com/#environment-variables) you create in Power Platform. They're read-only in Copilot Studio. They store the parameter keys and values, which then serve as input to various other application objects, including Copilot Studio. Separating the parameters from the consuming objects allows you to change the values within the same environment or when you migrate solutions to other environments. The alternative is leaving hard-coded parameter values within the components that use them.


Each variable has a *base type*. The type determines what values the variable can hold and the operators you can use when you build a logical expression with it.

| Type | Description |
| --- | --- |
| String | A sequence of characters used to represent text |
| Boolean | A logical value that can only be `true` or `false` |
| Number | Any real number |
| Table | A list of values, but all values must be of the same type |
| Record | A collection of name-value pairs where values can be of any type |
| DateTime | A date, time, day of the week, or month relative to a point in time |
| Choice | A list of string values with associated synonyms |
| Blank | A placeholder for "no value" or "unknown value"; for more information, see [Blank](https://learn.microsoft.com/en-us/power-platform/power-fx/data-types#blank) in the [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) documentation |

You set a variable's type the first time you assign a value to it. After that, the type is fixed and you can't assign values of any other type. For example, if you assign the starting value `1` to a variable, you set its type to **Number**. If you then try to assign a **String** value like `"apples"`, you get an error.


When you test an agent, a variable might temporarily appear with the type **unknown**. An unknown variable doesn't have a value yet.

The order of variables is determined from top to bottom of the authoring canvas. Nodes at the top of the authoring canvas are considered before nodes at the bottom.

When you create branches with **Condition** nodes, branches are ordered from left to right. Nodes in the leftmost branch are considered before nodes in the rightmost branch.

- [Web app](https://learn.microsoft.com/#tabpanel_1_webApp)

- [Classic](https://learn.microsoft.com/#tabpanel_1_classic)

Copilot Studio uses [entities](https://learn.microsoft.com/advanced-entities-slot-filling) to identify specific types of information from a user's responses. The identified information is saved in a variable of the type that's appropriate for the information. The following table lists the variable base type associated with prebuilt entities.


| Entity | Variable base type |
| --- | --- |
| Multiple-choice options | Choice |
| User's entire response | String |
| Age | Number |
| Boolean | Boolean |
| City | String |
| Color | String |
| Continent | String |
| Country or region | String |
| Date and time | DateTime |
| Email | String |
| Event | String |
| Integer | Integer |
| Language | String |
| Money | Number |
| Number | Number |
| Ordinal | Number |
| Organization | String |
| Percentage | Number |
| Person name | String |
| Phone number | String |
| Point of interest | String |
| Speed | Number |
| State | String |
| Street address | String |
| Temperature | Number |
| URL | String |
| Weight | Number |
| Zip code | String |
| Custom entity | Choice |

[Environment variables](https://learn.microsoft.com/en-us/power-apps/maker/data-platform/environmentvariables) are a Power Platform concept. Environment variables enable the basic application lifecycle management (ALM) scenario of moving an application between Power Platform environments. In this scenario, the application stays exactly the same except for a few key external references that are different between the source environment and the destination environment.


Use *environment* variables in the same way as topic, global, and system variables. One notable difference is that environment variables are *read-only* in Copilot Studio. Agent authors can't modify environment variables in Copilot Studio. However, administrators can change the value of environment variables in Power Apps. In Copilot Studio, you can use the [Variables panel](https://learn.microsoft.com/authoring-variables#variables-panel) to see information about an environment variable. The [Variable properties panel](https://learn.microsoft.com/authoring-variables#variable-properties-panel) also has a link to Power Apps, the authoring experience for environment variables.


The published version of an agent that uses environment variables has the values that are set for these variables when you publish the agent. Whenever an administrator updates environment variables, you must republish any agents that use these variables, for the changes to be effective at runtime. However, there's one exception: you don't need to republish your agents when the value of an environment variable of type *secret* changes. Unlike other environment variables, secret variables are retrieved at runtime.

Environment variable types in Copilot Studio map to Power Apps data types as follows:

| Type in Copilot Studio | Type in Power Apps |
| --- | --- |
| Decimal number | Number |
| JSON | Detect the type from the value. If not JSON => Unspecified (validation error) |
| Text | String |
| Yes/No | Boolean |
| Data source | String |
| Secret | String |

Note

Environment variable errors are visible in the test chat and when publishing. However, these errors aren't shown in the *Topic* list because they aren't topic variables.


Every agent comes with built-in system variables that provide extra information about a conversation.

![Screenshot of system variables in an agent topic.](https://learn.microsoft.com/media/authoring-variables/authoring-variables-system-variable-picker.png)

Copilot Studio doesn't show all system variables. To access hidden system variables, use a [Power Fx formula](https://learn.microsoft.com/advanced-power-fx).

To use system variables in a [Power Fx](https://app.getrecall.ai/item/d1b8596d-27f0-469b-b066-e8dd944787e6) formula, add `System.` before the variable name. For example, to include the system variable `User.DisplayName` in a formula, refer to it as `System.User.DisplayName`.


| Name | Type | Definition |
| --- | --- | --- |
| Activity.Attachments | table | The file attachments that the user provides. |
| Activity.Channel | choice | The channel ID of the current conversation. |
| Activity.ChannelData | any | An object that contains channel-specific content. |
| Activity.ChannelId | string | The channel ID of the current conversation, as a string. |
| Activity.From.Id | string | The channel-specific unique ID of the sender. |
| Activity.From.Name | string | The channel-specific user-friendly name of the sender. |
| Activity.Name | string | The name of the event. |
| Activity.Recipient.Id | string | The incoming activity's Type property. |
| Activity.Recipient.Name | string | Represents the display name for the agent within the channel. In telephony channel context, the value of this variable is the phone number to which the agent is attached to. |
| Activity.Text | string | The most recent message sent by the user. |
| Activity.Type | choice | Type of [activity](https://learn.microsoft.com/en-us/azure/bot-service/bot-activity-handler-concept). |
| Activity.TypeId | string | Type of [activity](https://learn.microsoft.com/en-us/azure/bot-service/bot-activity-handler-concept), as a string. |
| Activity.Value | any | Open-ended value. |
| Bot.EnvironmentId | string | The environment ID of the agent. |
| Bot.Id | string | The ID of the agent. |
| Bot.Name | string | The name of your agent. |
| Bot.SchemaName | string | The schema name of the agent. |
| Bot.TenantId | string | The tenant ID of the agent. |
| ClientPluginActions | choice | Collection of Dynamic Client Plugin Actions to consider for generative orchestration. |
| Conversation.Id | string | The unique ID of the current conversation. |
| Conversation.InTestMode | Boolean | Boolean flag that represents if the conversation is happening in test canvas. |
| Conversation.LocalTimeZone | string | Name of the time zone to be used by the user in the IANA Time Zone database format. |
| Conversation.LocalTimeZoneOffset | datetime | The time offset from UTC for the current local time zone. |
| Error.Code | string | The error code for the current error.The error message for the current error. |
| Error.Message | string | The error message for the current error.**Note**: This variable is supported only if the trigger is `On Error`. |
| FallbackCount | number | This variable counts the times that a topic couldn't be matched to the user input.**Note**: This variable is supported only if the trigger is `On Unknown Intent`. |
| InactivityTimer.Continue | Boolean | Boolean flag that represents whether the timer needs to continued.**Note**: This variable is supported only if the trigger is `Inactivity`. |
| InactivityTimer.Count | number | Number of times the *OnInactivity* timer fired due to user inactivity after the configured time.**Note**: This variable is supported only if the trigger is `Inactivity`. |
| LastMessage.Id | string | The ID of the previous message sent by the user. |
| LastMessage.Text | string | The previous message sent by the user. |
| Recognizer.ExtractedEntities | choice | Represents the extracted entities from triggering message.**Note**: This variable is supported only if the trigger is `On Select Intent`. |
| Recognizer.IntentOptions | choice | Represents the intent options when recognizer returns ambiguous results.**Note**: This variable is supported only if the trigger is `On Select Intent`. |
| Recognizer.SelectedIntent | choice | Represents the intent selected from recognizer.**Note**: This variable is supported only if the trigger is `On Select Intent`. |
| Recognizer.TriggeringMessage.Id | string | The ID of the user message that triggered the current topic. |
| Recognizer.TriggeringMessage.Text | string | The user message that triggered the current topic. |
| Recognizer.MultipleTopicsMatchedReason | string | Used to determine why multiple topics were matched.**Note**: This variable is supported only if the trigger is `On Select Intent`. |
| SignInReason | choice | Used to determine what sign-in option is needed when triggering the topic.**Note**: This variable is supported only if the trigger is `On Sign In`. |
| User.Language | choice | This variable is used to set the user language locale per conversation. |


The following variables are available for agents configured to authenticate with [Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d). This configuration uses Microsoft Entra ID authentication and is the default for new agents.

For more information, see [Authentication variables](https://learn.microsoft.com/advanced-end-user-authentication#authentication-variables).

| Name | Type | Definition |
| --- | --- | --- |
| User.DisplayName | string | The display name of the user currently talking to the agent. |
| User.Email | string | The email address of the user currently talking to the agent. |
| User.FirstName | string | The first name of the user currently talking to the agent. |
| User.Id | string | The unique ID of the user currently talking to the agent. |
| User.IsLoggedIn | Boolean | Boolean flag that represents whether the user currently talking to the agent is authenticated or not. |
| User.LastName | string | The family name of the user currently talking to the agent. |
| User.PrincipalName | string | The user principal name of the user currently talking to the agent. |

The following variables are available for agents configured to use the Generic OAuth 2 service provider.


| Name | Type | Definition |
| --- | --- | --- |
| User.AccessToken | string | The access token for the user authenticating with the agent. |
| User.DisplayName | string | The display name of the user currently talking to the agent. |
| User.Id | string | The unique ID of the user currently talking to the agent. |
| User.IsLoggedIn | Boolean | Boolean flag that represents whether the user currently talking to the agent is authenticated or not. |

The following variables are available for agents configured to use the [Microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d) Entra ID (formerly Azure Active Directory) service providers.


| Name | Type | Definition |
| --- | --- | --- |
| User.AccessToken | string | The access token for the user authenticating with the agent. |
| User.DisplayName | string | The display name of the user currently talking to the agent. |
| User.Email | string | The email address of the user currently talking to the agent. |
| User.FirstName | string | The first name of the user currently talking to the agent. |
| User.Id | string | The unique ID of the user currently talking to the agent. |
| User.IsLoggedIn | Boolean | Boolean flag that represents whether the user currently talking to the agent is authenticated or not. |
| User.LastName | string | The family name of the user currently talking to the agent. |
| User.PrincipalName | string | The principal name of the user currently talking to the agent. |

The following variables are only available for voice-enabled agents.


| Name | Type | Definition |
| --- | --- | --- |
| Activity.InputDTMFKeys | string | The raw DTMF key value from telephony. |
| Activity.SpeechRecognition.Confidence | number | The confidence score for the Azure Site Recovery hypothesis entire result, 0 to 1. |
| Activity.SpeechRecognition.MinimallyFormattedText | string | Slightly formatted text of the Azure Site Recovery hypothesis result. For example, "Five hundred dollars." Words are spelled out, but basic capitalization and punctuation are included. |
| Activity.UserInputType | choice | The type of the most recent input from the agent user. The value can be either test, speech, or DTMF. |
| Conversation.OnlyAllowDTMF | Boolean | Boolean flag that represents whether the IVR should be set to DTMF-only mode at runtime. |
| Conversation.SipUuiHeaderValue | string | The UUI header string used to pass context into IVR on call start. |

