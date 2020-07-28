**Sova-Rasa-Module** - отдельный модуль, подключаемый к виджету. Он используется для описания сценариев и правил работы с диалогами.

## Install
Для установки Sova-Rasa-Module введите следующую команду в терминал:
```
npm i --save Sova-Rasa-Module
```

## Quick start
Для быстрого старта Sova-Rasa-Module введите следующую команду в терминал:
```
import ckRasaInit from  'Sova-Rasa-Module'  
const rasaModule = ckRasaInit(rasaConfig) 
 ```
 
 # Description
 ## API method chatRequest
 В Sova-Rasa-Module есть один метод: chatRequest, по структуре совпадающий с методом [chatRequest (DL)](https://github.com/sovaai/chatKit-dl-module "Read me"). Метод отвечает за отправку сообщений пользователем.

### Типизация data:
```
ChatRequestData {
  text: string
  context?: RandomContext
}
```

### Пример data:
```
data = {
   text: 'Hello World!!'
}
```

### Пример вызова метода
```
moduleDispatcher('chatRequest',{text:'Hello World!!'})
```

# Использование moduleDispatcher
moduleDispatcher осуществляет переключение на выбранный метод и передает туда необходимые данные.   
moduleDispatcher включает в себя:   
* reset *(сброс данных)*  
* chatRequest *(отправка сообщений пользователем)*  
* chatInit *(инициализаия диалога)*  

# Rasa config
Конфигурационный файл включает в себя:   
* uiEvents
* moduleEvents
* Rasa Api Url (адрес обращения где развернута Rasa)
