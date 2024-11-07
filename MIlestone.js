// let love = 1;
// do{
//     console.log("i love my jann Taskin", love);
//     love++;
// } while (love >=10);
// let love = "Sawon";
// let num = 0;
// for (let val of love){
//     num++;
// }
// console.log(num);
// let student = {
//     name : "Sawon",
//     cgp : 3.11,
//     ins : "Kurigram Polytechnic"
// };
// for (let i in student){
//     console.log(i, student[i]);
// }
// for (let num = 0; num <= 100; num++ ){
//    let even
//    if(num%2 !==0 && num>0){
//     even = num
//     console.log("Odd Number =", even);
//    }
// }
// let score = 75;
// let grade;
// if (score >= 90) {
//  grade = "A";
// } else if (score >= 80) {
//  grade = "B";
// }
// console.log(grade);
// let str = "apna collage";
// console.log(typeof str[9]);
// let product = {
//     name : "pen",
//     price : 5,
// }
// let out = `The price of ${product.name} is ${product.price}`
// console.log(out);
// let nam = "pana \t collage"
// console.log(nam.length);
// let str1 = "Apna";
// let str2 = "Collage";
// let str3 = str1.concat(str1)
// console.log(str3);
// let hello = "Hello";
// let res = hello.replace("He", "pl")
// console.log(res);
// let from = prompt("Enter Your Full Name");
// let nam = from;
// let prefix = "@"
// let sufix = nam.length;
// let userName = prefix.concat(from).concat(sufix);
// console.log("Your user Name is =", userName);
// let write = prompt("Guease a Number");
// let win = 4;
// while(write != win){
//     write = prompt("Guease a Number");
// }
// console.log("You top");
// let write = prompt("Gues a Number");
// let result = 4;
// if(write == result){
//     console.log("Your The Right Thinker");
// }else{
//     write = prompt("Try another Number")
// }
//
// const num = [1, 2, 3, 4, 5, 6];
// console.log(num);
// num.push(4, 5, 9);
// console.log(num);
// num.pop();
// console.log(num);
// const nam = ["siyam", "rejoyan", "mubassir"]
// let out = nam.shift();
// nam.unshift("dipu")
// console.log(nam);
// console.log(out);
// Include JavaScript
// const nam = ["siyam", "saon", "dipu",]
// if(nam.includes("sawon")){
//     console.log("mil on hbe");
// }
// else{
//     console.log("mil on hbe na");
// }
// console.log(nam.indexOf("siym"));
// const nam = 15
// console.log(Array.isArray(nam));
// const nam = ["sawon"];
// const nam2 = ["sawon2"]
// console.log(nam.concat(nam2));
// const nam = ["sawon", "balk", "botol"];
// for (let print = 0; print < nam.length; print++){
//         console.log(nam[print]);
// }
// const nam = ["sawon", "bal", "botol"];
// for (let print = 0; print < nam.length; print++){
//     // console.log(nam[print]);
// }
// const citis = ["rangpur", "kurigram", "chattrogram"];
// for ( let city of citis){
//     console.log(city.toUpperCase());
// }
// let marks = [1,2,3,4,5,6,7];
// let total = 0;
// for (let val of marks){
//     console.log(val);
//     total += val;
// }
// let avg = total / marks.length;
// console.log(avg);
// let marks = [10,12,13,14,15,16,4,5]
// console.log(marks[(marks.length - 1)]);
// const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(a.flat());
// const Mobile = {
//     mobile : "samsung",
//     "model" : "s24 ulta",
//     camera : ["200mp", "12 tele", "12 ultrawi"],
//     zoom : true,
// };
// Object.freeze(Mobile)
// Mobile.model = "s25 ulta"
// console.log(Mobile);
// console.log(Mobile.camera);
// console.log(Mobile["model"]);
// const Mobile = {
//     nam : "samsung",
//     brand : "s24 ulta",
//     camera : ["200mp", "12mp", "12mp ulta"]
// };
// Mobile.nam = "iPhone"
// console.log(Mobile.hasOwnProperty('nam'));
// console.log(Object.keys(Mobile));
// console.log(Object.values(Mobile));
// const ob1 = {
//     a :1,
//     b :2,
//     c : 3
// }
// const ob2 = {
//     d :4,
//     e :5,
//     f :6
// }
// const ob3 = {
//     g :7,
//     h :8,
//     i : 9
// }
// const obF = Object.assign({}, ob1, ob2, ob3)
// console.log(obF);
// let nam = prompt("Enter Your Name")
// function myFunction(nam){
//     console.log("Hello " +nam);
// }
// myFunction(nam)
// function myFunction(){
//     console.log("Subscribed");
// }
// document.getElementById('btn').addEventListener("click", myFunction)
// function bal(){
//     console.log("Unsubscribed");
// }
// document.getElementById('btn2').addEventListener('click', bal)
// let nam = prompt("Enter Your Name")
// function myName(nam){
//     console.log("My name is " +nam);
// }
// myName(nam)
// function subcribe() {
//     console.log("You Subscribed");
// }
// document.getElementById('btn').addEventListener("click", subcribe)
// function Unsubscribed() {
//     console.log("You Unsubscribed");
// }
// document.getElementById('btn2').addEventListener("click", Unsubscribed)
// (function(nzm){
//     console.log("I am self Invoking Function " + nzm);
// })
// ("self")
// let math = function(x, y){
//     console.log("dadhad");
//     return x * y
// }
// console.log(math(4,8));
// console.log(math(3,8));
// console.log(math(2,8));
// let numbers = [4,5,6,414];
// let res = numbers.map(function(x){
// return x *x 
// })
// console.log(res);
// let arrow = (x, y) => x / y;
// console.log(arrow(8, 2));
// let numbers = [4,5]
// let sqNum = numbers.map(function(num){
//         return num *num;
// })
// console.log(sqNum);
// let sqNum = function(num){
//    return num * num
// }
// console.log(sqNum(4));
// let nam = prompt("Enter Your Name")
// function greet(){
//     function wish(){
//         alert("Hello " + nam)
//     }
//     return wish()
// }
// greet()
// let car = ['bmw', 'volvo', 'audi'];
// car.push('xm9')

// for (let i = 0; i < car.length; i++){
//     console.log(car[i]);
// }
// let nam = {
//     brand : 'iPhone',
//     model : "14pro Max",
//     ram : "8/256gb"
// }
// for (let i in nam){
//     console.log(i+ ": " + nam[i]);
// }

// let car = ['volvo', 'audi', 'marcedes'];
// car.push('xm8')
// car.forEach(function(I){
//     console.log(I);
// })
// let nam = ['sawon', 'taskin', 'faiyaz'];
// nam.push('manha')
// nam.forEach(function(i){
//     console.log(i);
// })
// let car = ['volvo', 'marcedes', 'audi'];
// car.push('i8')
// for (let i of car){
//     console.log(i);
// }
// let num = 0;
// while(num < 10){
//     console.log(num);
//     num++
// }

 































