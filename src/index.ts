import RasaModule from './module/rasaModule'
import { RasaConfig } from './@types/rasa'
const ckRasaInit = (config: RasaConfig) => new RasaModule(config)
export default ckRasaInit
