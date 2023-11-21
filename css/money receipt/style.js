class Car {
  constructor(name, year){
    this.name = name;
    this.year = year;
  }
  age(){
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

let car1 = new Car("Toyota", "2014");

console.log(`MY ${car1.name} car model is ${car1.year} and my car is ${car1.age()} years old.`);

