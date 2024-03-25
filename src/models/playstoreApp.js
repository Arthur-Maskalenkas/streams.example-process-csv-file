export class ModelPlayStoreApp {
    constructor(params) {
        this.name = params[0]
        this.installs = params[7]
        this.rating = params[3]
        this.category = params[2]
        this.ratingCount = params[4]
    }
}
