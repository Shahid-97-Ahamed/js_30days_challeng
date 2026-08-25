// // // let fruits = ["apple", "banana", "orange"];

// // fruits.push("mango")
// // console.log(fruits)

// // let fruits = ["apple", "banana", "orange", "mango"];
// // fruits.pop();
// // console.log(fruits)

// // let numbers = [20, 30, 40];
// // numbers.unshift(10);
// // console.log(numbers)

// // let numbers = [10, 20, 30, 40];

// // // numbers.shift()

// // // console.log(numbers)

// // let colors = ["red", "blue", "green", "yellow"];
// // colors.splice(1,1)
// // console.log(colors)

// // let animals = ["cat", "dog", "rabbit"];
// // animals.splice(1,0,"lion")
// // console.log(animals)

// // let numbers = [10, 20, 30, 40, 50];
// // const result=numbers.slice(1,4);
// // console.log(numbers)
// // console.log(result);

// // let fruits = ["apple", "banana", "orange", "mango", "grape"];
// // const res =fruits.slice(2,4)
// // console.log(fruits)
// // console.log(res)
// /*-----------------------------------------------------------------------*/

// // let student = {
// //   name: "Rahim",
// //   age: 22,
// //   city: "Tokyo"
// // };

// // console.log(student.name)

// // let student = {
// //   name: "Rahim",
// //   age: 22,
// //   city: "Tokyo"
// // };

// // console.log(student["city"])

// // let person = {
// //   name: "Karim",
// //   age: 25,
// //   country: "Japan"
// // };

// // person.age =26;
// // console.log(person);

// // let product = {
// //   name: "Laptop",
// //   price: 80000
// // };

// // product.brand="Dell";
// // product.price=75000

// // console.log(product)

// // let user = {
// //   name: "Hasan",
// //   age: 28,
// //   city: "Osaka",
// //   job: "Developer"
// // };

// // delete user.city
// // console.log(user);


// // let car = {
// //   brand: "Toyota",
// //   model: "Prius",
// //   year: 2022
// // };

// // console.log(Object.keys(car));

// // let phone = {
// //   brand: "Apple",
// //   model: "iPhone 15",
// //   price: 100000
// // };

// // console.log(Object.values(phone))

// // let employee = {
// //   name: "Shahid",
// //   position: "Developer",
// //   salary: 300000
// // };

// // console.log(Object.entries(employee))

// // let user = {
// //   name: "Rahim",
// //   age: 25,
// //   city: "Tokyo"
// // };

// // let key = "city";
// // console.log(`${user[key]}`)

// let student = {
//   name: "Rahim",
//   age: 20,
//   course: "JavaScript",
//   city: "Tokyo"
// };

// let key ="city";

// student.age =21;
// student.course = "React";
// student.level = "Beginner";
// delete student.city;

// console.log(student.name);
// console.log(student[key]);
// console.log(student.age)
// console.log(student.course);
// console.log(student.level);
// console.log(student);
// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

/*----------------------------------------------------------------------------------*/

// let numbers = [
//   [10, 20, 30],
//   [40, 50, 60],
//   [70, 80, 90]
// ];

// // const find =Object.entries(numbers)
// console.log(numbers[1][1]);

// let fruits = [
//   ["apple", "banana"],
//   ["orange", "mango"],
//   ["grape", "watermelon"]
// ];

// // const find_fruits =Object.entries(fruits);
// console.log(fruits[1][1])

// let students = [
//   {
//     name: "Rahim",
//     age: 20
//   },
//   {
//     name: "Karim",
//     age: 22
//   },
//   {
//     name: "Hasan",
//     age: 21
//   }
// ];

// // const find_students =Object.entries(students);
// console.log(students[0].age);

// let products = [
//   {
//     name: "Laptop",
//     price: 80000
//   },
//   {
//     name: "Phone",
//     price: 50000
//   },
//   {
//     name: "Tablet",
//     price: 30000
//   }
// ];

// // const find_price_of_phone =Object.entries(products);
// console.log(products[1].price);


// let company = [
//   {
//     department: "IT",
//     employees: [
//       {
//         name: "Rahim",
//         salary: 300000
//       },
//       {
//         name: "Karim",
//         salary: 350000
//       }
//     ]
//   },
//   {
//     department: "HR",
//     employees: [
//       {
//         name: "Hasan",
//         salary: 280000
//       }
//     ]
//   }
// ];

// // const find_karims_salary =Object.entries(company);
// console.log(company[0].employees[1].salary)


/*----------------------------------------------------------------------------------*/

// for loop

// for(i = 1;i<=10;i++){
//     console.log(i);
// }

// for(i =2;i<=20;i+=2){
//     console.log(i)
// }

// let sum = 0;

// for(i=1;i<=100;i++){
//      sum = sum + i
     
// }

// //  console.log(sum)

// //  
// let cnt = 0
//  for(i = 0;i<=100;i++){
//     if(i % 2 === 0){
//          cnt = cnt + i
//     }
    
//  }
//  console.log(cnt)


// let count = 5;
// for(i =1;i<=10;i++){
//     const res = i * count;
//     console.log("5","*",i,"=",res)
// }

// for(i = 0;i<=30;i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     }else if(i % 3 === 0){
//         console.log("Fizz");
//     }else if(i % 5=== 0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i)
//     }
// }

// let students = [
//   { name: "Rahim", age: 20 },
//   { name: "Karim", age: 22 },
//   { name: "Hasan", age: 21 }
// ];

// for(i = 0;i <students.length;i++){
//     console.log(`${students[i].name} ${students[i].age}`)
// }

// let fruits = ["apple", "banana", "orange", "mango", "grape"];

// for(i=0;i <fruits.length;i++){
//     console.log(fruits[i])
// }


// while

// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++
// }

let i = 10;
while(i>=1){
    console.log(i);
    i--
}




  