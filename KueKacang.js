const Kue = require('./Kue.js')

class KueKacang extends Kue {
    constructor() {
        super()
        this.name = 'Kue Kacang'
        this.timeMasak = 30
    }
}
module.exports = KueKacang