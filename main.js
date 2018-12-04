const {ChocolateChip, PeanutButter} = require ('./cookie')
const Oven = require('./oven')

let kueCoklat = new ChocolateChip('Kue Coklat', 30)
let kueKacang = new PeanutButter('Kue Kacang', 20)
let oven = new Oven('Kue Kacang')

oven.bake(kueKacang.time)