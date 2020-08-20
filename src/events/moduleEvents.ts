import { postFetch,  } from '../utils/helpers'

import {  ChatInitData, ChatRequestData } from '../@types/moduleEvents'
import { RasaModule } from '../@types/rasa'
import { resultControl } from '../utils/resultControl'

export const reset = async (module: RasaModule, data: ChatInitData) => {
  module.uiDispatcher('modules', {
    modulesEvent: 'updateModule',
    data: { moduleName: module.name, config: { info: module.info, api: module.api } },
  })
}

export const chatRequest = async (module: RasaModule, data: ChatRequestData) => {
  const { rasaURL } = module.api
  const { text } = data
  const url = `${rasaURL}`
  const body = {
    sender: 'Rasa',
    message: text,
  }
  const result = await postFetch(body, url)
  resultControl(module, result)
}
export const chatInit = async (module: RasaModule, data: any) => {
  const message = {
    text: 'Hi',
  }
  chatRequest(module, message)
}
const defaultModuleEvents = {  chatRequest, reset, chatInit }

export default defaultModuleEvents
