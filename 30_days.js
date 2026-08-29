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

// let i = 10;
// while(i>=1){
//     console.log(i);
//     i--
// }


// let numbers = [10, 20, 30, 40, 50];

// let i =0
// while(i <numbers.length){
//     console.log("Found ",numbers[2]);
//     i++
// }

// let prices = [100, -50, 300, -20, 150];

// let sum = 0
// for(const price of prices){
//     if(price < 0){
//         continue
//     }
//     sum = sum +price
// }
// console.log(sum)

// let users = { name: "Anis", role: "Developer", city: "Dhaka" };

// for(const user in users){
//     console.log(`${user}: ${users[user]}`)
// }

// let words = ["Hello", "how", "are", "you", "bad", "word", "here"];

// for(const word of words){
//     if(word ==="bad"){
//         break
//     }
//     console.log(word) 
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(const number of numbers){
//     if(number % 2 !== 0){
//         continue
//     }
//     console.log(number)
// }

// let stocks = { apple: 10, banana: 5, orange: 0, mango: 8 };

// for(const stock in stocks){
//     if(stocks[stock] === 0){
//          console.log(`Out of Stock:  ${stock}`)
//         break
//     }
   
// }

// let cart = [
//   { name: "Shirt", price: 1200, quantity: 2 },
//   { name: "Pants", price: 1800, quantity: 1 },
//   { name: "Socks", price: 150, quantity: 3 }
// ];

// let totalPrice  = 0;
// let totalProduct  =0;

// for(const item of cart){
//     totalPrice =totalPrice+item.price * item.quantity
//     totalProduct+=item.quantity
// }

// console.log(`total price is: ${totalPrice}`)

// let employees = [
//   { name: "Rahim", salary: 3000 },
//   { name: "Karim", salary: 4500 },
//   { name: "Hasan", salary: 3500 },
//   { name: "Rafi", salary: 5000 }
// ];

// let totalSalary = 0;

// for(const sumOfAllSalary of employees){
//     totalSalary+=sumOfAllSalary.salary;
// }

// console.log(totalSalary)

// let students = [
//   { name: "Rahim", marks: 45 },
//   { name: "Karim", marks: 72 },
//   { name: "Hasan", marks: 38 },
//   { name: "Rafi", marks: 85 },
//   { name: "Sakib", marks: 55 }
// ];

// let marks =0
// for(const mark of students){
//     // console.log(mark)
//     const studentMark=mark.marks;
//     // console.log(studentMark)
//     if(studentMark >= 50){
//         console.log(`${mark.name}: ${mark.marks}`)
//     }
// }


// let cart = [
//   { name: "Laptop", price: 45000, quantity: 1 },
//   { name: "Mouse", price: 1200, quantity: 0 }, // এটি স্টকে নেই (quantity 0)
//   { name: "Monitor", price: 15000, quantity: 2 },
//   { name: "Keyboard", price: 2500, quantity: 0 }, // এটিও স্টকে নেই
//   { name: "Headphones", price: 3500, quantity: 1 }
// ];

// let cartPrice =0
// for(const item of cart){
//     // console.log(item);
//     const quent =item.quantity;
//     // console.log(quent)
//     if(quent === 0){
//         cartPrice+=item.price
        
//     }
// }

// console.log(cartPrice)

// let shoppingCart = [
//   { name: "Smart Watch", price: 5000, category: "Electronics", quantity: 1 },
//   { name: "T-Shirt", price: 1200, category: "Clothing", quantity: 3 },
//   { name: "Bluetooth Speaker", price: 3000, category: "Electronics", quantity: 2 },
//   { name: "Running Shoes", price: 4000, category: "Footwear", quantity: 1 }
// ];

// let shoppingCategory = 0

// for(const item of shoppingCart){
//     // console.log(item);
//     const catgr =item.category;
//     console.log(item.category);
//     if(catgr === "Electronics" && item.category){
//         // console.log("Ok")
//         const disEPrice =item.price-(item.price *0.10)
//         const aftDis =disEPrice+item.quantity
//         // console.log(disPrice)
//     }else{
//         const oDisPrice =item.price-(item.price*0.05);
//         const aferdis =oDisPrice+item.quantity
//         // console.log(oDisPrice)
//     }
//     const afterDisTotalAmount =aferdis+aftDis;
//     console.log(afterDisTotalAmount)
// }

// dry-------------------------------------------------------

// function isValidPrice(price){
//     return typeof price === "number" && price > 0;
// }

// function isValidEmail(email){
//     return email.includes("@") && email.includes(".")
// }

// function calculateDiscount(price,discountedPrice){
//     if(!isValidPrice(price)){
//         return 0;
//     }
//     let discountedAmount =(price*discountedPrice)/100;
//     return price -discountedAmount
// }


// function calculateFinalBill(price,vatPercentage=15){
//     let vat =(price*vatPercentage)/100;
//     return price+vat;
// }

// function formetBDT(amount){
//     return `${amount.toFixed(2)} BDT`
// }

// function capitalized(str){
//     if(!str) return "";
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// function processOrder(user,itemPrice,discountCode){
//     console.log(`---Process order for ${capitalized(user.name)}---`);
//     if(!isValidEmail(user.email)){
//         console.log("Error:Invalid user email");
//         return;
//     }

//     let currentPrice =itemPrice;

//     if(discountCode =="SAR"){
//         currentPrice =calculateDiscount(itemPrice,20);
//         console.log("20% discount applied");
//     }

//     let totallBill =calculateFinalBill(currentPrice);

//     console.log("Final amount to pay: ",formetBDT(totallBill));
//     console.log("Order compleate Successfully");
// }

// let user1 ={name:"shahid",email:"shahid.97ahamed@gmail.com"};

// processOrder(user1,12568,"SAR");


/*---------------------------------------------------------------------------------------------------------------------------------*/

// we will build a order system  processed to unserstood dry and how import to understand a function this is

// function isValidPrice(price){
//     return typeof price === "number" && price > 0;
// }

// // console.log(isValidPrice("20"));

// function isValidEmail(email){
//     return email.includes("@")+email.includes(".")
// }

// // console.log(isValidEmail("shahid.97ahamed@gmail.com"));

// function calculateDiscount(price,discount){
//     if(!isValidPrice(price)) {
//         return 0;
//     };

//     let disAmount = (price*discount)/100;
//     return price -disAmount
// }

// // console.log(calculateDiscount(100,15,"shush@xscsj.kwjj"));

// function calculateFinalBill(price,vatPercentage = 8){
//     let billWithVat = (price * vatPercentage)/100;
//     return price +billWithVat;
// }

// function formetBDT(amount){
//     return `${amount.toFixed(2)} BDT`

// }

// function capitalized(str){
//     if(!str) return "";
//     return str.charAt(0).toUpperCase() +str.slice(1);
// }

// // now system calculate

// function orderProcess(user,itemPrice,discountCode){
//     console.log(`------Order is processing ${user.name}----------`);
//     if(!isValidEmail(user.email)){
//         console.log("Error: Invalid user email");
//         return;
//     }

//     let currentPrice = itemPrice;

//     if(discountCode === "SAR97"){
//         currentPrice = calculateDiscount(itemPrice,8);
//         console.log("8% discount is applied")
//     }

//     let totallBill =calculateFinalBill(currentPrice);
//     console.log("Final Bill: ",formetBDT(totallBill));
    
//     console.log("----------Thank You for your order-------------")
// };

// let user ={name:"shahid Ahamed",email:"shahid.97@gmail.com"};

// orderProcess(user,1000,"SAR97");


// -------------------------------------------------------------------------------------------------------------------------------

// Mini Project

// let students =[
//     {id:101,name:"Ajim",age:36,dept:"FrontEnd"},
//     {id:102,name:"Rasel",age:26,dept:"BackEnd"},
//     {id:103,name:"Jon",age:35,dept:"Softwear"},
// ];

// function addStudent(name,age,dept){
//     let addNewStdID =students.length > 0 ?students[students.length - 1].id + 1:101; /*new id created*/

//     let newStd ={
//         id:addNewStdID,
//         name:name,
//         department:dept
//     }

//     students.push(newStd);

//     console.log("----New Student Successfully---");
// };

// addStudent("Hataim",40,"DB");
// addStudent("Hataim",40,"DB");

// console.log(students)

// function getAll(){
//     for(const student of students){
//         console.log(student);
//     }
// };



// function findStudent(name){
//     let findStd = null;

//     for(let student of students){
//         if(student.name == name){
//             findStd = student;
//             break
//         }
//     }

//     if(findStd){
//         console.log("Your Student Name Is: ",findStd);
//     }else{
//         console.log("404 not  found");
//     }
// };

// findStudent("Jon");

// function delatedStudent(id){
//     let dltStd = -1;

//     for(i=0;i<students.length;i++){
//         if(students[i].id == id){
//             dltStd = i;
//             break
//         }
//     }

//     if(dltStd){
//         let deletStd =students.splice(dltStd,1);
//         console.log(`deleted ${deletStd[0].name} id:${dltStd} deleted`)
//     }else{
//         console.log("404 not found");
//     }
// }

// delatedStudent(102)
// getAll();

// ----------------------------------------------------------------------------------------------------------------------------------------


/*

শুধু In-Stock Product, Price অনুযায়ী কম থেকে বেশি সাজানো, শুধু Title+Price বের করা, টোটাল কত টাকা লাগবে স্টক আউট করতে চাইলে সেটা ক্যালকুলেট করুন।
*/

let products = [
  { id: 1, title: "Mouse", price: 500, category: "Accessories", inStock: true },
  { id: 2, title: "Keyboard", price: 1200, category: "Accessories", inStock: false },
  { id: 3, title: "Monitor", price: 8000, category: "Display", inStock: true },
  { id: 4, title: "Laptop", price: 55000, category: "Computer", inStock: true },
  { id: 5, title: "Headphone", price: 1500, category: "Accessories", inStock: true }
];

const res =products.filter((p)=>p.inStock === true).sort((a,b) => a.price - b.price);

const formetedProduct =res.map(p => `Title ${p.title} and ${p.price} taka`);

const totalOutOFstockAmount =res.reduce((acc,current)=>acc +current.price,0)

console.log(totalOutOFstockAmount);
