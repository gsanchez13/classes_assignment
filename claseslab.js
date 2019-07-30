// ## Question 1
// a. Write a class called `Person` that has 3 properties:
// a first name, a last name and a middle name. Create 2 instances
// of a `Person`. Print one of their first names.
// b. Write a method in `Person` called `fullName` that will return
// a formatted string of an instance's full name. Call this method
// on both the instances you created in part a.
console.log('Number 1:')
class Person {
  constructor(firstName, middleName, lastName) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName
  }
  fullName() {
    return console.log(`${this.firstName} ${this.middleName} ${this.lastName}`)
  }
}
let person1 = new Person('John', 'Mark', 'Doe')
let person2 = new Person('Jane', 'Mary', 'Doe')
console.log(person1.firstName)
person1.fullName()
person2.fullName()

// ## Question 2
// a. Create a class called `Book` that has properties `title`, `author` and `rating`.
//  Create some instances of `Book`.
// b. Add a method to `Book` called `isGood` that returns `true` if its rating is
// greater than or equal to 7
console.log('Number 2:')
class Book {
  constructor(title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating
  }
  isGood(){
    return console.log(this.rating >=7)
  }
}
let firstBook = new Book('The Catcher in the Rye', 'J.D. Salinger', 6)
let secondBook = new Book('Life of Pi', 'Yaan Martel', 8)
firstBook.isGood()
secondBook.isGood()

console.log('Number 3: ')
// ## Question 3
// a. Create a `Dog` class with four properties: `name (string), breed (string),
// mood (string), and hungry (boolean)`.
// b. Add a method called `playFetch`. It should set the dog's `hungry` property
// to `true`, set its mood property to `playful`, and log "Ruff!"
// c. Add a method called `feed`. If the dog is hungry, it should set `hungry`
// to `false` and print "Woof!" If the dog is not hungry, it should log "The
// dog doesn't look hungry"
// d. Add a method called `toString` that returns a description of the dog:
class Dog {
  constructor(name,breed, mood, hungry){
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry
  }
  playFetch(){
    this.hungry = true;
    this.mood = 'playful'
    return console.log('Ruff!')
  }
  feed(){
    if(this.hungry = true) {
      this.hungry = false
      return console.log('Woof!')
    } else{
      console.log('The dog doesn\'t look hungry')
    }
  }
  toString(){
    return console.log(`${this.name} is a ${this.mood} ${this.breed}.`)
  }
}
let nala = new Dog('Nala', 'Rhodesian Ridgeback', 'hyper', true)
nala.playFetch()
nala.toString()
nala.feed()

console.log('Number 4:')
// ## Question 4
// There are three common scales that are used to
// measure temperature: Celsius, Fahrenheit, and Kelvin:
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
// a. Make an object called `freezingPoint` that has three
// properties: `celsius`, `fahrenheit`, and `kelvin`. Give
// them all values equal to the freezing point of water.
// b. Make a class called `Celsius` that has one property:
// `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
// c. Give `Celsius` a method called `isBelowFreezing` that returns a
// `Bool` (true if the temperature is below freezing).
let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273.2
}
class Celsius {
  constructor(celsius){
    this.celsius = celsius
  }
  getFahrenheitTemp(){
    return console.log(`It is ${(this.celsius * 1.8) + 32} degrees in Fahrenheit`)
  }
  getKelvinTemp() {
    return console.log(`It is ${this.celsius + 273.15} degrees in Kevlin`)
  }
  isBelowFreezing() {
    return console.log(this.celsius < freezingPoint.celsius)
  }
}
let outsideTempt = new Celsius(10.0)
console.log(outsideTempt.celsius)
outsideTempt.getFahrenheitTemp()
outsideTempt.getKelvinTemp()
outsideTempt.isBelowFreezing()

console.log('Number 5:')
// ## Question 5
//
// a. Create a class called `Movie` that has properties for `name`, `year`,
// `genre`, `cast`, and `description`. Create an instance of your `Movie`
//
// b. Create an method inside `Movie` called `blurb` that returns a formatted
// string describing the movie.
class Movie{
  constructor(name, year, genre, cast, description){
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description
  }
  blurb(){
    console.log(`${this.name} came out in ${this.year}. It is a ${this.genre} film starring ${this.cast}. The plot is : ${this.description}`)
  }
}
let myMovie = new Movie('The Theory of Everything', 2014, 'drama',
['Eddie Redmayne', ' Felicity Jones', ' Charlie Cox', ' Emily Watson', ' Simon McBurney', ' and David Thewlis'],
'In the 1960s, Cambridge University student and future physicist Stephen Hawking (Eddie Redmayne) falls in love with fellow collegian Jane Wilde (Felicity Jones). At 21, Hawking learns that he has motor neuron disease. Despite this -- and with Jane at his side -- he begins an ambitious study of time, of which he has very little left, according to his doctor. He and Jane defy terrible odds and break new ground in the fields of medicine and science, achieving more than either could hope to imagine.')
myMovie.blurb()

console.log('Number 6: ')
// ## Question 6
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved
// o properties of the same name.
// Give the Vector prototype two methods, `plus` and `minus`, that take another
// vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’
// (the one in `this` and the parameter) x and y values.
// Add a method `getLength` to the prototype that computes the length of the
// vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).
// (a^2 + b^2 = c^2)
class Vector{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  plus(v){
    return console.log(`${this.x + v.x}, ${this.y + v.y}`)
  }
  minus(v){
    return console.log(`${this.y - v.y}, ${this.y - v.y}`)
  }
  getLength(){
    let a2 = Math.pow(this.x, 2)
    let b2 = Math.pow(this.y, 2)
    let c2 = Math.sqrt(a2 + b2)
    return console.log(Math.floor(c2))
  }
}
let v1 = new Vector(10, 5)
let v2 = new Vector(5, 3)
v1.plus(v2)
v1.minus(v2)
v1.getLength()

console.log('Number 7: ')
// ## Question 7
// a. Make a class called `Car` with properties `make` and `model`.  Create an
// instance of a `Car`
// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create
// an instance of `Bike`
// c. Give each class a static method called `numberOfWheels` that returns the
// number of wheels (2 for bikes, 4 for cars).  Why does it make sense for this
// to be a static method instead of an instance method?
class Car{
  constructor(make, model) {
    this.make = make;
    this.model = model
  }
  static numberOfWheels(wheels){
    return console.log(`Has 4 wheels`)
  }
}

let myCar = new Car('Audi', 'R8')
Car.numberOfWheels(myCar)

class Bike {
  constructor(gears, hasBell){
    this.gears = gears;
    this.hasBell = hasBell
  }
  static numberOfWheels(vehicle){
    return console.log(`Has 2 wheels`)
  }
}
let myBike = new Bike('Fixed', true)
Bike.numberOfWheels(myBike)

// ## Question 8
// a. Make a class called `Vehicle` with properties `color` and `name`.
// Give it a method called `makeSound` which logs "WHHOOSSSH" to the console
// b. Modify your `Car` and `Bike` classes from Question 7 to extend the`Vehicle` class.
// c. Create a new `Bike` instance that has a `color` of "green" and `name`"Bikey McBikeface"
// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"
class Vehicle {
  constructor(color, name){
    this.color = color;
    this.name = name
  }
  makeSound(){
    return console.log('WHHOOSSSH')
  }
}
class Car2 extends Vehicle{
  constructor(color, name, make, model){
    super(color, name)
    this.make = make;
    this.model = model
  }
}
class Bike2 extends Vehicle{
  constructor(color, name, gears, hasBell){
    super(color, name)
    this.gears = gears;
    this.hasBell = hasBell
  }
}
let newBike = new Bike2('green', 'Bikey', 'fixed', true)
console.log(newBike.name)
console.log(newBike.color)
newBike.makeSound()
let newCar = new Car2('red', 'Carry McCarface', 'Audi', 'R8')
console.log(newCar.name)
console.log(newCar.color)
newCar.makeSound()
