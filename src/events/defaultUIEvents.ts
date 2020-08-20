import { SendMessageData, UIManagmentEvents, NotificationsEvents, ModulesEvents, ModulesData } from '../@types/UIEvents'

export const defaultSendMessage = (data: SendMessageData) => console.log('no SendMessage')
export const defaultUIManagment = (uiManagmentEvent: UIManagmentEvents, data: any) => console.log('no UIManagment')
export const defaultNotifications = (notificationsEvent: NotificationsEvents, data: any) =>
  console.log('no Notifications')
export const defaultModules = (notificationsEvent: ModulesEvents, data: any) => console.log('no modules')

const defaultUIEvents = {
  sendMessage: defaultSendMessage,
  uiManagment: defaultUIManagment,
  notifications: defaultNotifications,
  modules: defaultModules,
}

export default defaultUIEvents
