// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + " " + this.firstName + " " + city + " " + country;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// This will return "John Doe":
// let x = person.fullName.apply(person1, ['Dhaka', 'Bangladesh']);

// console.log(x);

// Math.max(45,34,37);

// let maxValue = Math.max.apply(null, [45,34,37]);

// console.log(maxValue);


function temporary() {
  let counter = 0;

  return function() {
    counter += 1;
  }
}

const add = temporary();

console.dir(add);
add();
add();