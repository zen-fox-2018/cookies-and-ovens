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

class Kue {
  constructor (waktuMatang) {
    this.status = "mentah";
    this.waktuMatang = waktuMatang;
    this.waktuBerjalan = 0;
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

}

class KueCoklat extends Kue {
  constructor () {
    super (20)
  }
}

class KueKacang extends Kue {
  constructor () {
    super (30)
  }
}

class KueKeju extends Kue {
  constructor () {
    super (35)
  }
}

module.exports = {KueCoklat, KueKacang, KueKeju};
