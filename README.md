**ck-rasa** is separate module that connects to the widget. It is used to describe scripts and dialog rules.

## Install
For install `ck-rasa` enter next command:
```javascript
npm i ck-rasa
```

## Quick start
For quick start `ck-rasa` enter next command:
```
import ckModuleInit from 'ck-rasa'
const rasaModule = ckRasaInit(rasaConfig) 
 ```
 
# Description
## Rasa config
Configuration file includes:   
```javascript
const rasaConfig = {
 info: {
 greetingPhrase: string,
 },
 api?: {
 rasaURL?: string,
 },
 moduleEvents?: {
 chatInit: (module: RasaModule, data: ChatInitData) => void,
 chatRequest: (module: RasaModule, data: ChatRequestData) => void,
 reset: (module: RasaModule, data: ChatInitData) => void,
 },
 uiEvents?: {
 sendMessage?: (data: SendMessageData) => void,
 uiManagment?: (uiManagmentEvent: UIManagmentEvents, data: UIManagmentData) => void,
 notifications?: (notificationsEvent: NotificationsEvents, data: NotificationsData) => void,
 modules?: (modulesEvent: ModulesEvents , data: ModulesData)=> void,
 }
 }
 ```

## API methods
`ck-rasa` has next API methods:

| API method                                                                                                                        |                                  | 
|-----------------------------------------------------------------------------------------------------------------------------------|----------------------------------| 
| [chatInit](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/chatInit.md "Read about this method")               | Dialog Initialization            |
| [chatRequest](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/chatRequest.md "Read about this method")         | Sending user messages            |
| [reset](https://github.com/sovaai/chatKit-dl-module/blob/master/APImethods/reset.md "Read about this method")                     | Reset dialogue                   |


## DL.ModuleDispatcher
`moduleDispatcher` - method of event management.   
`moduleDispatcher` select method and transmits necessary data to it.  

For example:
```javascript
import moduleInit from 'ck-rasa'   
const ck-rasa = moduleInit(dlConfig)   
ck-rasa.moduleDispatcher('chatInit', { clientConfig: { siteLang: 'ru' } })
```
