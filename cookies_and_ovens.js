const {Cookie, Coklat, Kacang, Keju} = require('./Cookie.js')
const Oven = require('./Oven.js')

let kueCoklat = new Coklat()
let kueKacang = new Kacang()
let kueKeju = new Keju()

let oven = new Oven()

oven.addCookie(kueCoklat)
oven.addCookie(kueKacang)
oven.addCookie(kueKeju)

oven.bake(35)