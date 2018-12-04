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

class Ovens {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
}

class Cookies {

    static bake(input) {
        let treats = input.name;
        let time = input.time;

        if(treats === "Chocolate Cake") {
            for(let i = 0; i <= time; i+= 3) {
                // console.log(i)
                if(i === 3) {
                    console.log(`${treats}, menit ke ${i} : mentah`)
                } else if (i > 3 && i <= 12) {
                    console.log(`${treats}, menit ke ${i}: hampir matang`)
                } else if (i === 15) {
                    console.log(`${treats}, menit ke ${i}: matang`)
                } else if (i> 15){
                    console.log(`${treats} sudah hangus :(`)
                }
            }
        } else if (treats === "Peanut Cake") {
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
            for(let i = 0; i <= time; i+= 5) {
                // console.log(i)
                if(i === 5) {
                    console.log(`${treats}, menit ke ${i}: mentah`)
                } else if (i > 5 && i <= 15) {
                    console.log(`${treats}, menit ke ${i}: hampir matang`)
                } else if (i === 20) {
                    console.log(`${treats}, menit ke ${i}: matang`)
                } else if (i > 20 ) {
                    console.log(`${treats} sudah hangus :(`)
                }
            }
        } else if (treats === "Cheese Cake") {
            console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
            for(let i = 0; i <= time; i+= 4) {
                // console.log(i)
                if(i >= 4 && i <= 20) {
                    console.log(`${treats}, menit ke ${i}: mentah`)
                } else if (i >= 20 && i<= 24) {
                    console.log(`${treats}, menit ke ${i}: hampir matang`)
                } else if (i === 28) {
                    console.log(`${treats}, menit ke ${i}: matang`)
                } else if (i >= 28) {
                    console.log(`${treats} sudah hangus :(`)
                }
            }
        }
    }
}

let chocoCake = new Ovens("Chocolate Cake", 20);
let peanutCake = new Ovens("Peanut Cake", 30);
let cheeseCake = new Ovens("Cheese Cake", 35);
// console.log(Muffins)
Cookies.bake(chocoCake)
Cookies.bake(peanutCake)
Cookies.bake(cheeseCake)
