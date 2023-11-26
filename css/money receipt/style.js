// array = [1, 3, 10, 11, 14];
// goal = 13;

// const twoSum = (array, goal) => {
//   let mapOfNumbers = {};
//   let twoIndexes = [];

//   for(let i = 0; i < array.length; i++) {
//     mapOfNumbers[array[i]] = i;
//   }

//   for(let i = 0; i < array.length; i++) {
//     let target = goal - arr[i];
//     if(mapOfNumbers[target] !== null && mapOfNumbers[target] !== i){
//       twoIndexes.push(i);
//       twoIndexes.push(mapOfNumbers[target]);
//     }
//   }
//   // return twoIndexes;
//   console.log(twoIndexes);
// }


// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// let myCar = new Model("Ford", "Mustang");

// console.log(myCar.show());


class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

const myCar = new Car("Ford");