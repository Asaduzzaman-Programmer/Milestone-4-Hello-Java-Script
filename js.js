let a = 0.6;
let b = 0.7;
let c = (a*10 + b*10)/ 10
console.log(c );

let myDate = new Date();

console.log(myDate.toDateString());
let date = Date.now()
function test(){
    for(let i = 0; i < 1000; i++){
        console.log(i);
    }
}
let start = Date.now()
test();
let end = Date.now()


console.log(`The exticaution Time is ${end - start} milisecond`);




















































































































