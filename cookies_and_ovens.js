// Answer These Questions:
//
// - What are essential classes?
    // class cookie
    // class kue coklat
    // class kue kacang
    // class kue keju
    // class oven
// - What attributes will each class have?
        // bake duration
// - What interface will each class provide?

// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

const Oven = require('./Oven')
const KueKeju = require('./KueKeju')
const KueCoklat = require('./Kuecoklat')
const KueKacang = require('./KueKacang')

let kuekeju = new KueKeju()
let kuecoklat = new KueCoklat()
let kuekacang = new KueKacang()
let oven = new Oven()
oven.tambahkue(kuekeju)
oven.tambahkue(kuecoklat)
oven.bake(40)
// console.log(oven.tray)

