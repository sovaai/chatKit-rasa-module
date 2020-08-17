**Sova-Rasa-Module** is separate module that connects to the widget. It is used to describe scripts and dialog rules.

## Install
For install Sova-Rasa-Module enter next command:
```javascript
npm i --save Sova-Rasa-Module
```

## Quick start
For quick start Sova-Rasa-Module enter next command:
```
import ckRasaInit from  'Sova-Rasa-Module'  
const rasaModule = ckRasaInit(rasaConfig) 
 ```
 
 # Description
 ## API method chatRequest
Sova-Rasa-Module has a method `chatRequest`, that coincides in structure with a method [chatRequest (DL)](https://github.com/sovaai/chatKit-dl-module "Read me"). This method is responsible for sending messages by the user.

### typification of data:
```javascript
ChatRequestData {
  text: string
  context?: RandomContext
}
```

### Example data:
```javascript
data = {
   text: 'Hello World!!'
}
```

### Example of calling a method
```javascript
moduleDispatcher('chatRequest',{text:'Hello World!!'})
```

# Using a moduleDispatcher
`moduleDispatcher` select method and transmits necessary data to it.
`moduleDispatcher` includes:   
* reset *(reseting data)*  
* chatRequest *(sending messages by the user)*  
* chatInit *(chat initialization)*  

# Rasa config
Configuration file includes:   
* uiEvents
* moduleEvents
* Rasa Api Url *(case address where Rasa is deployed)*
