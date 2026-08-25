// // let fruits = ["apple", "banana", "orange"];

// fruits.push("mango")
// console.log(fruits)

// let fruits = ["apple", "banana", "orange", "mango"];
// fruits.pop();
// console.log(fruits)

// let numbers = [20, 30, 40];
// numbers.unshift(10);
// console.log(numbers)

// let numbers = [10, 20, 30, 40];

// // numbers.shift()

// // console.log(numbers)

// let colors = ["red", "blue", "green", "yellow"];
// colors.splice(1,1)
// console.log(colors)

// let animals = ["cat", "dog", "rabbit"];
// animals.splice(1,0,"lion")
// console.log(animals)

// let numbers = [10, 20, 30, 40, 50];
// const result=numbers.slice(1,4);
// console.log(numbers)
// console.log(result);

// let fruits = ["apple", "banana", "orange", "mango", "grape"];
// const res =fruits.slice(2,4)
// console.log(fruits)
// console.log(res)
/*-----------------------------------------------------------------------*/

// let student = {
//   name: "Rahim",
//   age: 22,
//   city: "Tokyo"
// };

// console.log(student.name)

// let student = {
//   name: "Rahim",
//   age: 22,
//   city: "Tokyo"
// };

// console.log(student["city"])

// let person = {
//   name: "Karim",
//   age: 25,
//   country: "Japan"
// };

// person.age =26;
// console.log(person);

// let product = {
//   name: "Laptop",
//   price: 80000
// };

// product.brand="Dell";
// product.price=75000

// console.log(product)

// let user = {
//   name: "Hasan",
//   age: 28,
//   city: "Osaka",
//   job: "Developer"
// };

// delete user.city
// console.log(user);


// let car = {
//   brand: "Toyota",
//   model: "Prius",
//   year: 2022
// };

// console.log(Object.keys(car));

// let phone = {
//   brand: "Apple",
//   model: "iPhone 15",
//   price: 100000
// };

// console.log(Object.values(phone))

// let employee = {
//   name: "Shahid",
//   position: "Developer",
//   salary: 300000
// };

// console.log(Object.entries(employee))

// let user = {
//   name: "Rahim",
//   age: 25,
//   city: "Tokyo"
// };

// let key = "city";
// console.log(`${user[key]}`)

let student = {
  name: "Rahim",
  age: 20,
  course: "JavaScript",
  city: "Tokyo"
};

let key ="city";
student.age =21;
student.course = "React";
student.level = "Beginner";
delete student.city;
console.log(student.name);
console.log(student[key]);
console.log(student.age)
console.log(student.course);
console.log(student.level);
console.log(student);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));