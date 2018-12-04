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

const Chocolate = require('./Chocolate')
const Peanut = require('./Peanut')
const Cheese = require('./Cheese')
const Oven = require('./Oven')

let chocolate = new Chocolate()
let peanut = new Peanut()
let cheese = new Cheese()

let oven = new Oven()

oven.addToTray(chocolate)
oven.addToTray(peanut)
oven.addToTray(cheese)

oven.bake(35)