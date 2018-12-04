// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
// Your code here

class Cookies {
  constructor(name, baked) {
    this.name = name
    this.status = 'mentah'
    this.baked = baked
  }
}

class CheeseCookies extends Cookies {
  constructor() {
    super('CheeseCookies', 35)
  }
}

class PeanutCookies extends Cookies {
  constructor() {
    super('PeanutCookies', 30)
  }
}

class ChocoCookies extends Cookies {
  constructor() {
    super('ChocoCookies', 20)
  }
}

class Oven {
  constructor() {
    this.loyang = null
  }

  putCookies(cookies) {
    this.loyang = cookies
  }

  bake(bakeTime) {
    let time = 0
    while (time < bakeTime) {
      time += 5
      if (time > bakeTime){
        time = bakeTime
      }

      let precentage = time / this.loyang.baked

      if (precentage < 0.5) {
        this.loyang.status = 'mentah';
      } else if (precentage <= 0.9) {
        this.loyang.status = 'hampir matang'
      } else if (precentage  > 0.9 && precentage < 1.1) {
        this.loyang.status = 'Matang, WELL DONE!'
      } else {
        this.loyang.status = 'Hangus X('
      }

      console.log(`${this.loyang.name} menit ke ${time} : ${this.loyang.status}`);
    }
  }
}

let kueCoklat = new ChocoCookies()
let kueKacang = new PeanutCookies()
let kueKeju = new CheeseCookies()
let oven = new Oven()

console.log('=====', 'Kue Keju', '=====');
oven.putCookies(kueKeju)
oven.bake(35)

console.log('=====', 'Kue Coklat', '=====');
oven.putCookies(kueCoklat)
oven.bake(40)

console.log('=====', 'Kue Kacang', '=====');
oven.putCookies(kueKacang)
oven.bake(30)
