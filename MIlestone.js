// var age = 15;
// var can = "You can";
// var canNot = "You can Not";

// if(age >= 18){
//     console.log(can);
// }

// else{
//     console.log(canNot);
// }


// var mode = "pik";
// var color;

// if(mode == "dark"){
//     color = "black";
// } 
// else if(mode == "pink"){
//     color = "pink";
// }
// else{
//     color = "white"
// }

// console.log(color); 

// var age = 18;

// var result = age >= 18 ? "can vote" : "can not vote";

// console.log(result);


// var num = prompt("Number");

// if(num % 5 === 0){
//     console.log(num, "is multiple of 5");
// }

// else{
//     console.log(num, "is not multiple of 5");
// }

// var mark = prompt("Mark");

// if(mark >= 80 && mark <=100){
//     console.log("A garde");
// }
// if (mark >= 70 && mark <= 79){
//     console.log("B grade");
// }
// if(mark >= 60 && mark <= 69){
//     console.log("C garde");
// }
// if(mark >= 50 && mark <= 59){
//     console.log("D grade");
// }
// if(mark > 0 && mark <= 49){
//     console.log("Tumi fail");
// }
// else{
//     console.log("Result Error");
// }



var mark = prompt("Mark")
var grade;

if(mark >= 80 && mark <= 100){
    grade = "A+"
}else if(mark >= 70 && mark <= 79){
    grade = "A-"
}else if(mark >= 60 && mark <= 69){
    grade = "B"
}else if(mark >= 50 && mark <= 59){
    grade = "C"
}else if(mark >= 40 && mark <=49){
    grade = "D"
}else if(mark >= 33 && mark <= 39){
    grade = "Pass"
}else{
    grade = "Your Not eligible for result"
}

console.log(grade);


































