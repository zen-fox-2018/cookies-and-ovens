const Cookie = require(`./Cookie`)
const Oven = require(`./Oven`)

let kueCoklat = new Cookie("kue coklat", 20)
let kueKacang = new Cookie("kue kacang", 30)
let kueKeju = new Cookie("kue keju", 40)
let kue = [kueCoklat, kueKacang, kueKeju]
let oven = new Oven()


console.log(oven.addCookie(kueKeju));
console.log(oven.addCookie(kueKacang));
console.log(oven.addCookie(kueCoklat));
console.log(oven.bake(30));



