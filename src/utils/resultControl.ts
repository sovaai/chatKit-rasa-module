import { RasaModule } from '../@types/rasa'
import { SendMessageData, UIManagmentData } from '../@types/UIEvents'
import { msgPrepare } from './regExp'

export const resultControl = async (module: RasaModule, result: any) => {
  const text = result.reduce((string: string, { text, image }: { text: string; image: string }) => {
    if (image)
      return `${string}<img class="sova-ck-rasa-response-img" style="width: 100%;padding: 1rem 0;" src="${image}"/>`

    return `${string}<span>${text}</span>`
  }, '')
  const data: SendMessageData = {
    text: text,
    sender: 'request',
    showRate: false,
  }
  await module.uiDispatcher('sendMessage', data)
}
