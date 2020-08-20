import { RasaEventsNames, RasaInfo } from './rasa'

export interface RandomContext {
  [key: string]: any
}
export interface ChatRequestData {
  text: string
  context?: RandomContext
}
export interface ChatInitData {
  moduleInfo?: RasaInfo
  clientConfig: RandomContext
}
export interface SetInfoData {
  cuid: string
  events: string[]
}
export interface ChatEventData {
  eventName: RasaEventsNames
  context?: RandomContext
}
export interface ChatRateData {
  rating: number
}

export interface ChatTrackData {
  action: string
  args: {
    id: string
    url: string
    text: string
  }
}

export type ModuleEventsNames =
  | 'chatInit'
  | 'chatRequest'
  | 'chatEvent'
  | 'chatRate'
  | 'chatTrack'
  | 'reset'

export type ModuleEventsData =
  | ChatRequestData
  | ChatEventData
  | ChatInitData
  | SetInfoData
  | ChatRateData
  | ChatTimerAnnouncementsRequestData
  | NotificationDisplayData
  | ChatTrackData
