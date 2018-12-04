// Answer These Questions:
//
// - What are essential classes? cookie and oven
// - What attributes will each class have? time
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
const CheeseCookie = require('./CheeseCookie')
const ChocolateCookie = require('./ChocolateCookie')
const PeanutCookie = require('./PeanutCookie')

class Oven {
  constructor() {
    this.tray =[]
  }
  bake(time) {
    // for (let i = 0; i <= time; i+=5) {
    //   this.tray.forEach(x => {
    //     let status = x.status
    //     if (i > x.finished) {
    //       status = 'hangus'
    //     } else if (i === x.finished ){
    //       status = 'matang'
    //     } else if (i >=  x.finished - 10 ) {
    //       status = 'hampir matang'
    //     }
    //     console.log(`Kue ${x.name}, menit ke ${i} : ${status}`)

    //   })
    //   console.log(`=============================`)
    // }

    this.tray.forEach(x => {
      for (let i = 0; i <= time; i+=5) {
        let status = x.status
        if (i > x.finished) {
          status = 'hangus'
        } else if (i === x.finished ){
          status = 'matang'
        } else if (i >=  x.finished - 10 ) {
          status = 'hampir matang'
        }
        console.log(`Kue ${x.name}, menit ke ${i} : ${status}`)
      }
      console.log(`========================================================`)
    })
  }

  addCookie(cookie) {
    this.tray.push(cookie)
  }
}

const cheese = new CheeseCookie()
const chocolate = new ChocolateCookie() 
const peanut = new PeanutCookie() 

const oven = new Oven()

oven.addCookie(cheese)
oven.addCookie(chocolate)
oven.addCookie(peanut)

oven.bake(30)
