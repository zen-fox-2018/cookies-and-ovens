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
    if (this.tray.length == 0 ) {
      console.log(`Cannot bake, There is no cookie in the oven!`)
    } else {
      this.tray.forEach(x => {
        for (let i = 0; i <= time; i+=5) {
          let status = x.status
          if (i > x.finished) {
            x.status = 'hangus'
          } else if (i === x.finished ){
            x.status = 'matang'
          } else if (i >=  x.finished - 10 ) {
            x.status = 'hampir matang'
          }
          console.log(`Kue ${x.name}, menit ke ${i} : ${x.status}`)
        }
        console.log(`========================================================`)
      })
    }
  }

  addCookie(cookie) {
    if (this.tray.length < 3) {
      this.tray.push(cookie)
      console.log(`Cookie in oven`)
    } else {
      console.log(`Oven is full`)
    }
  }

  serve() {
    if(this.tray.length == 0) {
      console.log(`Oven already empty`)
    } else {
      this.tray.forEach(x => {
        if (x.status == 'matang') {
          console.log(`~ ${x.name} successfully baked`)
        } else {
          console.log(`${x.name} can't be eaten`)
        }
      })
      this.tray = []
    }
  }
}

const cheese = new CheeseCookie()
const chocolate = new ChocolateCookie() 
const peanut = new PeanutCookie() 

const oven = new Oven()

oven.addCookie(cheese)
oven.addCookie(chocolate)
oven.addCookie(peanut)
console.log(`======================================`)
oven.bake(30)
oven.serve()
oven.bake(32)


