// let numbers= [1,2,3,2,4,2,5,5,5,5,6];
// let count = {}
//     for(let i = 0; i < numbers.length;i++){
//         let num = numbers[i]
//         if(count[num]){
//              count[num] = count[num]+1;
//         }else{
//             count[num] = 1;
//         }
//     }
// let ans = 0
// let ct = 0
// for(let key in count){

//     if(count[key] > ct){
//         ans = key
//         ct = count[key];
//     }
// }
// console.log(ans)

// let employees= {
// aman:25000,
// ritik:50000,
// priya:45000
// };

// let ans = ''
// let salary = 0
// for(let key in employees){
//     if(employees[key] > salary){
//         ans = key
//         salary = employees[key];
//     }
// }
// console.log(ans)

// function calculateDiscount(price,percentage){
//     let discountAmount = price*(percentage/100)
//     return price - discountAmount
// }

// console.log(calculateDiscount(500,50))

// let cart= [
// { name:"Mouse", price:500, qty:2 },
// { name:"Keyboard", price:1000, qty:1 },
// { name:"Monitor", price:10000, qty:1 }
// ];

// function getCartTotal(cart){
//     let total =  cart.reduce((acc,val)=>{
//         return acc+(val.price*val.qty);
//     },0)
//     return total;
// }
// console.log(getCartTotal(cart))

// let students = [
//   {
//     name: "Ritik",
//     marks: [80, 90, 85],
//   },
//   {
//     name: "Aman",
//     marks: [50, 40, 60],
//   },
// ];

// var ans = function generateReport(students) {
//   let gardeSheet = [];

//   students.forEach((student) =>{
//     let totalMarks = student.marks.reduce((acc, val) => acc + val, 0);
//     let avg = totalMarks / student.marks.length;
//       let ob = {
//         name : student.name,
//         average : avg,
//         grade:""
//       }

//     if (avg >= 80) {
//       ob.grade = "A";
//     } else if (avg < 80 && avg >= 60) {
//       ob.grade = "B";
//     } else {
//       ob.grade = "C";
//     }
//     gardeSheet.push(ob);
//   });

//   return gardeSheet;
// }
// console.log(ans(students))

// let books = [];
// let id = 1;

// function addBook(title,author){
//     let book = {}
//     book.id=id;
//     book.title = title;
//     book.author = author;
//     book.borrowed = false;
//     id++;
//     books.push(book);
// }
// function borrowBook(id){
//     let arr = books.filter((elem)=>elem.id == id);
//     let obj = arr[0];
//     obj.borrowed=true;
// }
// function returnBook(id){
//     let arr = books.filter((elem)=>elem.id == id);
//     return arr[0].title;
// }
// function showAvailableBooks(){
//     let availableBooks = books.map((book)=>book.title);
//     return availableBooks;
// }

// addBook('Atomioc Habits','James Clear')
// addBook('Rich Dad Poor Dad','Robert Kiyosaki')
// addBook('IKIGAI','Hector Garcia')
// addBook('Don Quixote','Miguel de Cervantes')
// addBook('Tomb of Sand','Geetanjali Shree')
// borrowBook(1)
// // console.log(returnBook(1))
// console.log(showAvailableBooks())

// class BankAccount {
//   #balance = 0;
//   deposit(amount) {
//     this.#balance += amount;
//   }
//   withdraw(amount) {
//     this.#balance -= amount;
//     console.log(this.#balance)
//   }
// }

// let ob = new BankAccount();
// ob.deposit(1000)
// ob.withdraw(300)

// function Person(name) {
// this.name=name;
// }
// let p1 = new Person("Ritik");
// console.log(p1)

// const user = {
//   name: "Ritik",
//   greet() {
//     console.log(this.name);
//   },
// };

// const fn = user.greet.bind(user);

// fn();

// const user1= {
//   name:"Ritik"
// };

// const user2= {
//   name:"Aman"
// };
// function greet() {
//   console.log(this.name);
// }

// greet.call(user1);
// greet.call(user2);

// const arr = [10, 20, 50, 5];

// let max = Math.max.apply(null,arr)

// console.log(max)

// const animal= {
//   eats:true
// };

// const dog = Object.create(animal);

// console.log(dog.eats)

// function Person (name){
//     this.name = name;
// }

// function greet(){
//     console.log(`hello i m ${this.name}`)
// }
// Person.prototype.greet = greet;
// let p1 =new Person("biswo")
// p1.greet()

// class Car{
//     constructor(brand){
//         this.brand = brand;
//     }
//     start() {
//         console.log(this.brand,' started')
//     }
// }

// let car = new Car('BMW');
// car.start()

// class Person{
//     constructor(fName,lName){
//         this.fName = fName;
//         this.lName = lName;
//     }
//     get fullName(){
//         return `${this.fName} ${this.lName}`
//     }
//     set fullName(fullname){
//         const value = fullname.split(' ')
//         this.first =value[0];
//         this.last = value[1];
//     }
// }

// let p = new Person('Biswojit','Sahoo');
// console.log(p.fullName)
// p.fullName = "Jos Butler"
// console.log(p.first)
// console.log(p.__proto__)

// class Employee {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }
// }

// class Developer extends Employee {
//   constructor(name, salary, designation) {
//     super(name, salary);
//     this.designation = designation;
//   }
//   show() {
//     console.log(`name:${this.name} salary:${this.salary} ${this.designation}`);
//   }
// }

// let d = new Developer('Biswo',75000,'Developer');
// d.show()

// class Animal {
//     constructor (name){
//         this.name = name;
//     }
//     eat(){
//         console.log(`${this.name} is eat` )
//     }
// }
// class Dog extends Animal{
//     constructor(name){
//         super(name)
//     }
//     bark(){
//         console.log('dog is barking')
//     }
// }

// class Labrador extends Dog{
//     constructor(name){
//         super(name)
//     }
//     run(){
//         console.log('dog is runing')
//     }
// }

// let l = new Labrador('kutte');

// l.eat();
// l.bark();
// l.run()

// class Person {
//     constructor(name){
//         this.name = name;
//     }
//     show(){
//         console.log(this.name)
//     }
// }

// console.log(typeof(Person))

// let arr = [1,2,3]

// Array.prototype.last = function (){
//     if(this.length === 0) return -1;
//     return this[this.length-1];
// }

// console.log(arr.last())

//Question 26 — Shopping Cart Class
// class ShoppingCart {
//   constructor() {
//     this.items = [];
//   }
// }
// ShoppingCart.prototype.addItem = function (n, p) {
//    this.items.push ({
//     name: n,
//     price: p,
//   });
// };
// ShoppingCart.prototype.removeItem =function (n) {
//   this.items = this.items.filter((item) => item.name !== n);
// };
// ShoppingCart.prototype.getTotal = function () {
//   return this.items.reduce((acc, val) => acc + val.price, 0);
// };

// let c = new ShoppingCart();
// c.addItem("keyword", 2799);
// c.addItem("Mouse", 499);
// c.addItem("Monitor", 4999);
// c.addItem("iPhone 17", 79999);
// c.addItem("Moto pad 60 neo", 15999);

// console.log(c.items);
// c.removeItem("iPhone 17");
// console.log(c.items);
// console.log(c.getTotal());

// class Library {
//   constructor() {
//     this.books = [];
//   }
//   addBook(book) {
//     this.books.push(book);
//     console.log(`${book.title} is added`);
//   }
//   borrowBook(title) {
//     let book = this.books.find((b)=>b.title == title)
//     book.isBorrowed = true;
//   }
//   returnBook(title) {
//         let book = this.books.find((b)=>b.title == title)
//         console.log(`
//             book : ${book.title}
//             author: ${book.author}`)
//   }
// }
// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//     this.isBorrowed = false;
//   }
// }

// let b1 = new Book("Atomic Habits", "James Clear");
// let b2 = new Book("Harry Potter", "J.K. Rowling");
// let b3 = new Book("The Alchemist", "Paulo Coelho");

// let lib = new Library();
// lib.addBook(b1)
// lib.addBook(b2)
// lib.addBook(b3)
// lib.borrowBook("The Alchemist")
// lib.returnBook('Harry Potter')

// function greet(name){
//     console.log(name);
// }

// function welcome(callback){
//     callback('ritik');
// }
// welcome(greet);

// function greet(name) {
// console.log(`Hello ${name}`);
// }

// let timerId=setTimeout(greet,5000,'biswojit')
// clearTimeout(timerId)
// let i = 5;
// function timer(){
//     console.log(i)
//     i--
// }

// let timerId = setInterval(timer,1000)
// setTimeout(() => {
//   clearInterval(timerId);
//   console.log("Time Out !");
// }, 5000);

// function user() {
//   console.log({
//     id: 1,
//     name: "Ritik",
//   });
// }
// function fetchUser(callback) {
//   console.log("Fetching User...");
//   setTimeout(callback, 2000);
// }
// fetchUser(user)

// let myPromise = new Promise((resolve,reject)=>{
//     let isDataReceived = true;
//     if(isDataReceived){
//         console.log('data recived')
//         resolve();
//     }else{
//         console.log('data not recived')
//         reject();
//     }
// })

// let myPromise = new Promise((resolve,reject)=>{
//     let isDataReceived = false;
//     if(isDataReceived){
//         resolve('data recived');
//     }else{
//         reject('Server Down');
//     }
// })

// myPromise.then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })

// function addTen(num){
//     return new Promise((res)=>{
//         res(num+10);
//     })
// }
// addTen(0).then((result)=>{
//     console.log(result)
//    return addTen(result)
// }).then((result)=>{
//     console.log(result)
//    return addTen(result)
// }).then((result)=>{
//     console.log(result)
//    return addTen(result)
// })
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end"); 
}

async function async2() {
  console.log("async2");
}

console.log("script start");

async1();

console.log("script end");