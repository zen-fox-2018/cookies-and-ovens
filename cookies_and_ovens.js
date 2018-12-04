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
// const Kue = require('./Kue.js');
// const KueCoklat = Kue.KueCoklat;
// const KueKacang = Kue.KueKacang;
// const KueKeju = Kue.KueKeju;
// const Oven = require('./Oven.js');
//
// let kueCoklat = new KueCoklat();
// let kueKacang = new KueKacang();
// let kueKeju = new KueKeju();
const fs = require ('fs');
const options = fs.readFileSync('./cookies.txt','utf-8');

const cookiesData = options.split('\n').slice(0, -1);

const ChocolateChipCrumbled = require ('./Cookies/ChocolateChipCrumbled.js');
const PeanutButterCrumbled = require ('./Cookies/PeanutButterCrumbled.js');
const ChocolateChip = require ('./Cookies/ChocolateChip.js');
const PeanutButter = require ('./Cookies/PeanutButter.js');
const OtherCookie = require ('./Cookies/OtherCookie.js');
const Oven = require ('./Oven.js');

let oven = new Oven();
//let cookiesList = [];
cookiesData.forEach( e => {
  let list = e.split(' = ');
  if (list[0] === 'peanut butter') {
    cookie = new PeanutButter(list[0], list[1]);
  } else if(list[0] === 'chocolate chip') {
    cookie = new ChocolateChip(list[0], list[1]);
  } else if(list[0] === 'chocolate chip crumbled') {
    cookie = new ChocolateChipCrumbled(list[0], list[1]);
  } else if(list[0] === 'peanut butter crumbled') {
    cookie = new PeanutButterCrumbled(list[0], list[1]);
  } else {
    cookie = new OtherCookie(list[0], list[1]);
  }
  oven.addKue(cookie);
});
//
oven.start(60);

// console.log(cookiesList);
