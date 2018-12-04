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

const Kacang = require('./kacang.js');
const Keju = require('./keju.js');
const Coklat = require('./coklat.js');
const Cookie = require('./cookie_parent.js');



class Oven {
    constructor (typeofCookie,durasi, waktu) {
        this.name = typeofCookie
        this.status = null
        this.durasi = durasi
        this.waktu = waktu
    }

    cooking () {
        let time = 1
        while (time <= this.waktu) {
            if(time/this.durasi < 0.5) {
                this.status = 'mentah'
            }else if (time/this.durasi > 0.5 && time < this.durasi) {
                this.status = 'hampir matang'
            }else if (time === this.durasi) {
                this.status = 'matang'
            }else{
                this.status = 'hangus'
            }
            if(time % 5 == 0 || time == this.durasi) {
                console.log(`kue ${this.name}, menit ke ${time} : ${this.status}`)
            }
            time++
        }
        return 'cookie is done'
    }
}

console.log('KUE KACANG')
let kacang = new Kacang ()
let masakKacang = new Oven (kacang.name, kacang.durasi, 25)
masakKacang.cooking()
console.log(' ')
console.log('KUE COKLAT')
let coklat = new Coklat ()
let masakCoklat = new Oven (coklat.name, coklat.durasi, 40)
masakCoklat.cooking()
console.log(' ')
console.log('KUE KEJU')
let keju = new Keju ()
let masakKeju = new Oven (keju.name, keju.durasi, 15)
masakKeju.cooking()

