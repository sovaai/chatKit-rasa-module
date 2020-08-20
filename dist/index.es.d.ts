import { RasaInfo, ModuleEvents, UIEvents, RasaConfig, RasaApi } from "../@types/rasa";
import { ModuleEventsData, ModuleEventsNames } from "../@types/moduleEvents";
import { UIEventsNames, UIEventsData } from "../@types/UIEvents";
import { RasaConfig as RasaConfig$0 } from './@types/rasa';
declare class RasaModule {
    name: string;
    api: RasaApi;
    info: RasaInfo;
    moduleEvents: ModuleEvents;
    UIEvents: UIEvents;
    constructor(config: RasaConfig);
    moduleDispatcher: (event: ModuleEventsNames, data?: ModuleEventsData) => Promise<void>;
    uiDispatcher: (event: UIEventsNames, data: UIEventsData) => void;
}
declare const ckRasaInit: (config: RasaConfig$0) => RasaModule;
export { ckRasaInit as default };
