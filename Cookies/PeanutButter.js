"use strict"
const Cookie = require ('./Cookie.js');

class PeanutButter extends Cookie {
  constructor (name, ingredients) {
    super(name, ingredients, 20);
    this.peanut_count = 100;
  }
}

module.exports = PeanutButter;
