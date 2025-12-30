---
title: Work with global variables - Microsoft Copilot Studio
tags: PowerFx Reference
createdAt: Mon Dec 29 2025 20:15:03 GMT+1100 (Australian Eastern Daylight Time)
updatedAt: Mon Dec 29 2025 20:15:19 GMT+1100 (Australian Eastern Daylight Time)
---




Concise summary

- Global variables in Microsoft Copilot Studio are available across all topics in an agent and can be set from external sources.
- To create a global variable, change the scope of a topic variable to "Global (any topic can access)" and give it a unique name.
- Global variables can be used to store customer information, such as name and email address, and can be passed from one topic to another or set from external sources like a website or Dynamics 365 Customer Service.


Detailed summary


## Understanding Variables and Scope in Microsoft Copilot Studio
- Variables in Microsoft Copilot Studio store customer responses to questions from an agent, and by default, their values can only be used in the topic where they are created, but they can be reused across topics by passing them from one topic to another or by making them global in scope.
- Global variables are available in all topics across the entire agent and can also be set from external sources, applying during a single user session, and they must have unique names across all topics to distinguish them from topic-level variables.
- To create a global variable, users can change the scope of a topic variable by selecting "Global" in the Variable properties panel, which adds a "Global." prefix to the variable name, such as "Global.UserName", and saves the topic.
- Global variables can be viewed and accessed in the Custom tab along with topic variables when composing a message in a Message node or a Question node, and they are listed in alphabetical order, allowing users to find where a global variable is defined and what other topics are using it.

## Managing Global Variable References and Session Persistence
- Users can also view all references to a global variable by selecting it and going to the Variable properties panel, which enables them to navigate to any topic where the variable is used, and if a global variable is removed, references to it in other topics are marked as Unknown, and users receive a warning before confirming the operation.
- The value of a global variable persists until the session ends, but it can be reset using the Clear variable values node, which is typically used in the Reset Conversation system topic, and global variables can also be set from external sources, such as a user's name, to provide context to the agent before the conversation starts.
- To set a global variable from an external source, users can create a dedicated topic to hold the configuration for all variables meant to be set from external sources, and they can specify how long the agent can wait for a value and set a default value to use when the external source fails to respond in a timely fashion, although agents published to the Dynamics 365 Contact Center channel for IVR use cases do not support time-out values configured for global variables set by external sources.

## Configuring Global Variables from External Sources
- To work with global variables in Microsoft Copilot Studio, you need to add a Set variable value node to your dedicated topic and create a new variable with a name that matches the one being passed in from an external system.
- The Variable properties panel allows you to configure the variable as Global, enabling any topic to access it, and permitting external sources to set values, while also setting a reference to get the value from the node if it is empty.
- You can optionally set a time-out delay in milliseconds to determine how long your agent waits for the variable to be set by an external source before timing out and using the default value, with a suggested maximum wait time of 10 seconds for variables from Omnichannel for Customer Service.

## Passing Variables via URL Query Strings and Script Code
- When configuring the Set variable value node, you should enter the default value to use if the time-out is reached, ensuring that the data type matches the expected value from the external system, and you can use Text("") as a formula for an empty string.
- Your agent can be embedded in a web page, and variables can be passed in using the URL query string or a script code block, with the variable name in the query string matching the name of the global variable without the Global prefix.
- To pass variables using the URL query string, you append the variables and their definitions to the agent's URL in the format botURL?variableName1=variableDefinition1&variableName2=variableDefinition2, and the parameter name is case-insensitive.
- Alternatively, you can define variables in the script section of the page using the format variableName1 = variableDefinition1, substituting variableName1 for the variable name without the Global prefix and variableDefinition1 for the definition.

## Implementing WebChat Integration with Global Variables
- The code snippet provided demonstrates how to work with global variables in Microsoft Copilot Studio, specifically in the context of WebChat, by creating a store that dispatches an event to set context with variable names and definitions.
- To separate multiple variables, commas (,) should be used, and the `store` is called when embedding the agent in the `<script>` section, just before `styleOptions` is called, with the `BOT_ID` replaced with the actual agent's ID.
- The `store` is created using `WebChat.createStore` and includes a function that checks for the `DIRECT_LINE/CONNECT_FULFILLED` action type, and if true, dispatches a `WEB_[CHAT](41f88d6e-fae1-4270-97d6-5657e6f68c83)/SEND_EVENT` payload with the variable names and definitions.
- The example code also shows how to render the WebChat using `window.WebChat.renderWebChat`, passing in the `directLine` token, `store`, and `styleOptions`, and handling any errors that may occur during this process.

## Authentication and Customization Considerations
- Depending on the agent's authentication setup, a set of global variables is available, and for more information on which variables are available and how to use them, users can refer to the "Add user authentication to topics" section, which also provides details on customizing the look and feel of an agent.




## Sources
- [website](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-variables-bot?tabs=webApp)
[Variables](https://learn.microsoft.com/authoring-variables-about) store your customers' responses to questions from your agent. For example, you can save a customer's name in a variable called `UserName`. The agent can then address the customer by name as the conversation continues.

By default, a variable's value can only be used in the topic where the variable is created. However, it's possible to reuse the same value across topics. For example, a Welcome topic asks for the customer's name and email address. In the Appointment Booking topic, you want the agent to remember what the customer entered and not ask again.

One way to reuse a variable is to [pass the variable](https://learn.microsoft.com/authoring-variables#pass-variables-between-topics) from one topic to another. The other way is to make the variable global in scope, and that's what this article covers. Global variables are called that because they're available in all topics across the entire agent. They can also be set from external sources.


Global variables apply during a single user session. You specify which variables are global variables to distinguish them from topic-level variables.

You create a global variable by changing the scope of a topic variable.

Note

The name of a global variable must be unique across all topics.

- [Web app](https://learn.microsoft.com/#tabpanel_1_webApp)

- [Classic / Teams](https://learn.microsoft.com/#tabpanel_1_classic+teams)

1. [Create a variable](https://learn.microsoft.com/authoring-variables#create-a-variable) or [use the Variables panel](https://learn.microsoft.com/authoring-variables#variables-panel) to open an existing variable.

2. On the **Variable properties** panel, select **Global (any topic can access)**.

The variable name is given the prefix `Global.` to differentiate it from topic-level variables. For example, the variable `UserName` is displayed as `Global.UserName`.

3. Save the topic.

- [Web app](https://learn.microsoft.com/#tabpanel_2_webApp)

- [Classic / Teams](https://learn.microsoft.com/#tabpanel_2_classic+teams)

When you're composing a message in a **Message** node or a **Question** node, select the  icon to view the variables that are available to the topic. Global variables appear in the **Custom** tab along with any topic variables. Variables are listed in alphabetical order.


You can find where a global variable is defined and what other topics are using it. This feature can be useful if you're working on a new agent, or if you have multiple variables and [complex topic branching](https://learn.microsoft.com/authoring-using-conditions).

- [Web app](https://learn.microsoft.com/#tabpanel_3_webApp)

- [Classic / Teams](https://learn.microsoft.com/#tabpanel_3_classic+teams)

1. Select the desired global variable on the authoring canvas, or in the [Variables](https://learn.microsoft.com/authoring-variables#variables-panel) panel.

2. On the **Variable properties** panel, in the **Reference** section, select **View all references**.

3. Switch to the **Other** tab, and select any topic where the variable is used to go directly to that topic and node.

If you remove a global variable used in other topics, the references to that variable in the topics are marked as `Unknown`. You receive a warning about deleting the global variable before you can confirm the operation.

Nodes that contain references to a deleted global variable indicate that they contain an unknown variable.


Topics with nodes that contain references to deleted global variables might stop working. Ensure that you remove or correct all the topics that were using the deleted variable before publishing your agent.

- [Web app](https://learn.microsoft.com/#tabpanel_4_webApp)

- [Classic / Teams](https://learn.microsoft.com/#tabpanel_4_classic+teams)

By default, the value of a global variable persists until the [session](https://learn.microsoft.com/requirements-messages-management) ends. The **Clear variable values** node resets the values of global variables and is used in the [Reset Conversation](https://learn.microsoft.com/authoring-system-topics#reset-conversation) system topic. When a redirection triggers that topic (or when the user enters a phrase such as "Start over"), all global variables are reset.

- [Web app](https://learn.microsoft.com/#tabpanel_5_webApp)

- [Classic / Teams](https://learn.microsoft.com/#tabpanel_5_classic+teams)


To make sure the agent starts a conversation with some context, you can use a global variable and set its value from an external source. Let's say that your site requires users to sign in. If you store a user's name in a global variable and pass it to your agent, the agent can greet customers by name before they start typing their first question. Another example scenario is passing context from Dynamics 365 Customer Service to an agent so it can start the conversation with knowledge of what the customer wants to achieve.

To prevent undesirable latency, you can specify how long your agent can wait for a value. You can also set a default value to use when the external source fails to respond in a timely fashion.

Note

Agents that are published to the Dynamics 365 Contact Center channel for IVR use cases don't support time-out values configured for global variables set by external sources.


1. Create a dedicated topic to hold the configuration for all the variables meant to be set from external sources. You might name this topic "Set context variables" for example. This topic doesn't serve any other purposes, so it doesn't need to have trigger phrases set.

2. Add a [Set variable value](https://learn.microsoft.com/authoring-variables#set-a-variable) node to your dedicated topic.

3. Under **Set variable**, open the variable picker, and select **Create a new variable**.

4. Select the default name of the new variable. The **Variable properties** panel appears.

5. Replace the default name to one that matches *exactly* the name of the variable being passed in from the external system.

6. Under **Usage**, select **Global (any topic can access)**, and **External sources can set values**.

7. Under **Reference**, select the three dots (**⋮**) in the upper-right corner, and select **Get value from this node if empty**.


8. (Optional) Set a time-out delay, in milliseconds. This value determines how long your agent can wait for the variable to be set by an external source before timing out and continuing with the default value you set in the **Set variable value** node. This setting is relevant in scenarios where the variable depends on a long-running or asynchronous process, but your agent must respect a maximum latency to ensure a good user experience.

For variables coming from Omnichannel for Customer Service, we suggest a value of 10 seconds (10,000 ms) as a maximum wait time.

9. In the **Set variable value** node, enter the default value to use if the time-out is reached. At runtime, your agent will expect values with the same data type. If you want this default value to be an empty string, use `Text("")` as a formula.

![Screenshot of the configuration for a global variable to be set from an external source.](https://learn.microsoft.com/media/authoring-variables-bot/context-variable-with-timeout.png)

10. For any other values you expect to come from an external system, add more **Set variable value** nodes to your dedicated topic, and configure the required global variables in the same fashion.


Thus configured, your agent is ready to test. When the agent is invoked, instead of waiting indefinitely for all variables to be populated, your agent can immediately start sending any messages that aren't dependent on the variables being passed in. When your agent attempts to access a variable that's being set externally, it pauses until the value arrives or the time-out occurs. Learn more about [optimizing agents to minimize latency](https://learn.microsoft.com/guidance/optimize-minimize-latency).

Important

During the normal flow of a conversation, if your agent sets a variable that would otherwise come for an external value, the value set from within your agent prevails. Any value passed in context is ignored. This rule prevents your agent from overwriting values intentionally set in topics.

- [Web app](https://learn.microsoft.com/#tabpanel_6_webApp)

- [Classic / Teams](https://learn.microsoft.com/#tabpanel_6_classic+teams)

If you're [embedding your agent in a simple web page](https://learn.microsoft.com/publication-connect-bot-to-web-channels#add-your-agent-to-your-website), you can append variables and their definitions to the agent's URL. Or, if you'd like a little more control, you can use a `<script>` code block to call and use variables programmatically.


The variable name in the query string of the URL must match the name of the global variable without the `Global.` prefix. For example, a global variable `Global.UserName` would be referred to as `UserName` in the query.

The examples that follow uses a basic declaration for the variables. In a production scenario, you might pass in as the query parameter or variable definition another variable that already stores the user's name (for example, if you have the user name from a sign-in script).

Append the variables and their definitions to the agent's URL as [query string parameters](https://en.wikipedia.org/wiki/Query_string) in the format `botURL?variableName1=variableDefinition1&variableName2=variableDefinition2`.

For example:

- You have a global variable named `Global.UserName`.

- Your agent's URL is [https://web.powerva.microsoft.com/webchat/bots/12345](https://web.powerva.microsoft.com/webchat/bots/12345).

- To pass in the user's name when starting an agent conversation on your website, attach the `UserName=` query string as: [https://web.powerva.microsoft.com/webchat/bots/12345?UserName=Ana](https://web.powerva.microsoft.com/webchat/bots/12345?UserName=Ana).


The parameter name is case-insensitive. `username=Ana` would also work in this example.

You can also add the variable to a [custom canvas](https://learn.microsoft.com/customize-default-canvas).

- [Web app](https://learn.microsoft.com/#tabpanel_7_webApp)

- [Classic / Teams](https://learn.microsoft.com/#tabpanel_7_classic+teams)

1. In the `<script>` section on the page where you have your agent, define the variables as follows, substituting `variableName1` for the variable name without the `Global.` prefix and `variableDefinition1` for the definition. Separate multiple variables with commas (`,`).

```
const store = WebChat.createStore({}, ({ dispatch }) => next => action => {
     if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
       dispatch({
          type: "WEB_[CHAT](https://app.getrecall.ai/item/28ee08a8-ddea-486d-a6f8-82f98a60d389)/SEND_EVENT",
          payload: {
            name: "pvaSetContext",
            value: {
               "variableName1": "variableDefinition1",
               "variableName2": "variableDefinition2"
            }
          },
        });
      }
        return next(action);
    });
```


2. In your `<script>` section, call the `store` when you embed your agent, as in the following example where `store` is called just before where `styleOptions` is called (you must replace the `BOT_ID` with your agent's ID):

```
const BOT_ID = "12345-5678";
const theURL = "https://powerva.[microsoft](https://app.getrecall.ai/item/c8d3c802-b294-481e-a63d-5940c5a7294d).com/api/botmanagement/v1/directline/directlinetoken?botId=" + BOT_ID;

fetch(theURL)
    .then(response => response.json())
    .then(conversationInfo => {
        window.WebChat.renderWebChat(
            {
                directLine: window.WebChat.createDirectLine({
                    token: conversationInfo.token,
                }),
                store,
                styleOptions
            },
            document.getElementById('webchat')
        );
    })
    .catch(err => console.error("An error occurred: " + err));
```


Depending on the agent's authentication setup, you have a set of global variables associated with the selected authentication provider. For details about which set of variables are available and how to use them, see [Add user authentication to topics](https://learn.microsoft.com/advanced-end-user-authentication).

- [Work with variables](https://learn.microsoft.com/authoring-variables)

- [Customize the look and feel of an agent](https://learn.microsoft.com/customize-default-canvas)


