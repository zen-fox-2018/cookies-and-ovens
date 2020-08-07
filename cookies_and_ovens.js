// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here
const KueCoklat  = require('./KueCoklat.js')
const KueKacang  = require('./KueKacang.js')
const KueKeju  = require('./KueKeju.js')
const Oven = require('./Oven')
const OtherKue = require('./OtherKue.js')

let listKueYangAkanDimasak = ['Kue Coklat', 'Kue Keju', 'Kue Kacang', 'Kue Lala', 'Kue Lolo']
let kueYangAkanMasuk = []
for(let i = 0; i < listKueYangAkanDimasak.length; i++) {
    if(listKueYangAkanDimasak[i] == 'Kue Coklat'){
        kueYangAkanMasuk.push(new KueCoklat())
    } else if(listKueYangAkanDimasak[i] == 'Kue Keju') {
        kueYangAkanMasuk.push(new KueKeju())
    } else if(listKueYangAkanDimasak[i] == 'Kue Kacang') {
        kueYangAkanMasuk.push(new KueKacang())
    } else {
        kueYangAkanMasuk.push(new OtherKue(listKueYangAkanDimasak[i]))
    }
} 


let oven = new Oven(kueYangAkanMasuk , 50)

do{
    oven.masak()
    oven.getStatus()
    console.log('\n')
} while(oven.startTime <= oven.setTime)
