"use strict"
const Ingredient = require('./Ingredient.js');
class ChocolateChipCrumbled {
  constructor (name, ingredients) {
    this.name = name;
    this.status = "mentah";
    this.ingredients = this.makeIngedients(ingredients);
    this.has_sugar = false;
    this.waktuMatang = 60;
    this.waktuBerjalan = 0;
    this.checkSugar();
  }

  bake (waktuBerjalan) {
    this.waktuBerjalan = waktuBerjalan;
    if (this.waktuBerjalan <= this.waktuMatang * 0.5) {
      this.status = "mentah";
    } else if (this.waktuBerjalan > this.waktuMatang * 0.5 && this.waktuBerjalan < this.waktuMatang) {
      this.status = "hampir matang";
    } else if (this.waktuBerjalan === this.waktuMatang) {
      this.status = "matang";
    } else {
      this.status = "hangus";
    }
  }
  checkSugar() {
    this.ingredients.forEach( e => {
      if(e.name === 'sugar') {
        this.has_sugar = true;
      }
    });
  }

  makeIngedients (ingredients) {
    let tempReceipt = ingredients.split(', ');
    let ingredientsResult = []
    tempReceipt.forEach( e => {
      let ingredient = e.split(' : ');
      ingredientsResult.push(new Ingredient({name : ingredient[1], amount : ingredient[0]}));
    });
    return ingredientsResult;
  }
}

module.exports = ChocolateChipCrumbled;
