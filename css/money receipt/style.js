// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// const personArray = Object.values(person);

// for (let i = 0; i < personArray.length; i++){
//   console.log(personArray[i]);
// }

// console.log(JSON.stringify(person));

// let c = "Hello Peter!";
// console.log(c.toUpperCase());





// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "",
//   get fullName(){
//     return this.firstName + " " + this.lastName;
//   }
// };



// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };


function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fullName = function(){
    return this.firstName + ' ' + this.lastName;
  }
}


const riaj = new Person('Rayhanul Islam', 'Riaj', 25);
const sumit = new Person('Sumit', 'Saha', 35);
const Jadid = new Person('Jadid', 'Rahman', 25);

riaj.country = 'Bangladesh';
console.log(riaj);