import { Services } from './services.js'

export class Controller {
    /**
     *
     * @param {Object}
     * @param {import('./services.js').Services} services
     */
    constructor({ services }) {
        this.services = services
    }

    static async initialize(...args) {
        const controller = new Controller(...args)
        return controller._init()
    }

    async _init() {
        await this.services.runPipeline()
    }
}
