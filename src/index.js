import { Controller } from './controller.js'
import { Services } from './services.js'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const currentDir = dirname(fileURLToPath(import.meta.url))
const teste = import.meta.url
const dataPath = join(currentDir, '..', 'data')

const services = new Services({ dataPath })
const controller = Controller.initialize({ services })
