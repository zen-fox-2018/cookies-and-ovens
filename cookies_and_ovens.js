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
const fs = require("fs")
var options = fs.readFileSync('cookies.txt', 'utf8').split('\n')
const Coklat = require('./Coklat')
const Kacang = require('./Kacang')
const Keju = require('./Keju')
const Oven = require('./Oven')

let oven = new Oven()

options.forEach(cookie => {
    cookie = cookie.split(' = ')
    let cookieName = cookie[0]
    let cookieIngred = cookie[1]
    if (cookieName === 'peanut butter') {
        oven.add(new Coklat(cookieName, cookieIngred))
    } else if (cookieName === 'chocolate chip') {
        oven.add(new Kacang(cookieName, cookieIngred))
    } else {
        oven.add(new Keju(cookieName, cookieIngred))
    }
});
// console.log(oven.cookie);

oven.startBake(60)
