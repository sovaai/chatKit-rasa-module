import {
  SendMessageData,
  UIEventsData,
  UIEventsNames,
  UIManagmentEvents,
  UIManagmentData,
  ModulesEvents,
  ModulesData,
  NotificationsData,
} from './UIEvents'
import { ModuleEventData, SetInfoData, ChatInitData, ChatEventData, ChatRequestData } from './moduleEvents'

export interface ModuleEvents {
  chatRequest: (module: CKModule, data: RandomData) => void
}
export interface UIEventsList {
  sendMessage?: (data: SendMessageData) => void
  uiManagment?: (uiManagmentEvent: UIManagmentEvents, data: UIManagmentData) => void
  notifications?: (notificationsEvent: NotificationsEvents, data: NotificationsData) => void
  modules?: (modulesEvent: ModulesEvents, data: ModulesData) => void
}
export interface CKModule {
  name: string
  info: RandomInfo
  api: RandomApi
  UIEvents: UIEvents
  moduleEvents: ModuleEvents
  moduleDispatcher: (event: 'chatRequest', data?: ModuleEventData) => void
  uiDispatcher: (event: UIEventsNames, data: UIEventsData) => void
}
export interface InitConfig {
  info: RandomInfo
  customization: RandomInfo
  connectToStore: {
    getConfig: (moduleName: string) => RandomInfo
  }
  UIEvents: UIEventsList
}
export interface RandomData {
  [key: string]: any
}
export interface RandomInfo {
  [key: string]: any
}
export interface RandomApi {
  [key: string]: any
}
