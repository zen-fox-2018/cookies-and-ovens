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

class Oven {
  constructor() {
    this.tray = [];
    this.waktuBerjalan = 0;
  }

  addKue (namaKue) {
    this.tray.push(namaKue);
  }

  // removeKue (namaKue, waktu) {
  //   if (waktu === this.waktuBerjalan) {
  //     let removeTray = [];
  //     this.tray.forEach ( e => {
  //       if (e.name != namaKue.name) {
  //         removeTray.push(e);
  //       }
  //     });
  //     this.tray = removeTray.slice(0);
  //   }
  // }

  start(waktuMasak) {
    while (this.waktuBerjalan < waktuMasak && this.tray.length !== 0) {
      this.waktuBerjalan += 5;
      console.log(`Menit Ke ${this.waktuBerjalan}
===========================================`);
      this.tray.forEach ( e => {
        e.bake(this.waktuBerjalan);
        console.log(`${e.constructor.name} status ${e.status}`);
      });
      console.log('\n');
    }
  }
}

module.exports = Oven;
