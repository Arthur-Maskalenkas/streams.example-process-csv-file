import { createReadStream } from 'node:fs'
import { pipeline } from 'stream/promises'
import csvtojson from 'csvtojson'

export class Services {
    constructor({ dataPath: dataPath }) {
        this.dataPath = dataPath
    }
    async #createReadableStream() {
        const file = `${this.dataPath}/Google-Playstore-partial-data.csv`
        return createReadStream(file)
    }

    async *#createWritableStream(stream) {
        for await (const chunk of stream) {
            console.log(chunk)
        }
    }

    async runPipeline() {
        return pipeline(
            this.#createReadableStream(),
            csvtojson(),
            this.#createWritableStream
        )
    }
}
