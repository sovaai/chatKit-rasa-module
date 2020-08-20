import {
  ModuleEventsData,
  ChatInitData,
  ChatRequestData,
  ChatEventData,
  SetInfoData,
  ChatRateData,
  ChatTrackData,
  NotificationDisplayData,
  ChatTimerAnnouncementsRequestData,
  ModuleEventsNames,
} from './moduleEvents'
import {
  SendMessageData,
  UiData,
  NotificationsEvents,
  NotificationsData,
  UIManagmentData,
  ModulesEvents,
  ModulesData,
} from './UIEvents'
import { CKModule, InitConfig, UIEventsList } from './module'

export interface RasaInfo {
  greetingPhrase: string
}
export interface RasaApi {
  rasaURL: string
}


export interface RasaEvents {}
export interface ModuleEvents {
  chatRequest: (module: RasaModule, data: ChatRequestData) => void
  reset: (module: RasaModule, data: ChatInitData) => void
  chatInit: (module: RasaModule, data: any) => void
}
export interface UIEvents {
  sendMessage: (data: SendMessageData) => void
  uiManagment: (uiManagmentEvent: uiManagmentEvents, data: UIManagmentData) => void
  notifications: (notificationsEvent: NotificationsEvents, data: NotificationsData) => void
  modules: (modulesEvent: ModulesEvents, data: ModulesData) => void
}
export interface RasaModule extends CKModule {
  info: RasaInfo
  moduleEvents: ModuleEvents
  api: RasaApi
  UIEvents: UIEvents
  moduleDispatcher: (event: ModuleEventsNames, data?: ModuleEventsData) => void
}
export interface RasaConfig {
  info: {
    greetingPhrase: string
  }
  api?: {
    rasaURL?: string
  }
  moduleEvents?: ModuleEvents
  uiEvents?: UIEventsList
}
