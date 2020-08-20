import { RasaInfo, ModuleEvents, UIEvents, RasaConfig, RasaApi } from '../@types/rasa'

import { ModuleEventsData, ChatInitData, ChatRequestData, SetInfoData, ModuleEventsNames } from '../@types/moduleEvents'

import {
  UIEventsNames,
  UIEventsData,
  SendMessageData,
  UIManagmentData,
  NotificationsData,
  ModulesData,
} from '../@types/UIEvents'
import defaultUIEvents from '../events/defaultUIEvents'
import defaultModuleEvents from '../events/moduleEvents'
const { RASA_URL } = process.env
class RasaModule {
  name: string
  api: RasaApi
  info: RasaInfo
  moduleEvents: ModuleEvents
  UIEvents: UIEvents

  constructor(config: RasaConfig) {
    const { info, api, moduleEvents, uiEvents } = config
    this.name = 'rasaModule'
    this.info = {
      ...info,
    }
    this.api = {
      rasaURL: api?.rasaURL || RASA_URL || '',
      ...api,
    }
    this.UIEvents = {
      ...defaultUIEvents,
      ...uiEvents,
    }
    this.moduleEvents = {
      ...defaultModuleEvents,
      ...moduleEvents,
    }
  }

  moduleDispatcher = async (event: ModuleEventsNames, data?: ModuleEventsData) => {
    event === 'chatRequest' && data && (await this.moduleEvents[event](this, data as ChatRequestData))
    event === 'reset' && (await this.moduleEvents[event](this, data as ChatInitData))
    event === 'chatInit' && (await this.moduleEvents[event](this, data as ChatInitData))
  }
  uiDispatcher = (event: UIEventsNames, data: UIEventsData) => {
    event === 'sendMessage' && this.UIEvents[event](data as SendMessageData)
    event === 'uiManagment' &&
      this.UIEvents[event]((data as UIManagmentData).uiManagmentEvent, (data as UIManagmentData).data)
    event === 'notifications' &&
      this.UIEvents[event]((data as NotificationsData).notificationEvent, (data as NotificationsData).data)
    event === 'modules' && this.UIEvents[event]((data as ModulesData).modulesEvent, (data as ModulesData).data)
  }
}
export default RasaModule
