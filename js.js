const jim = 58;
const kim = 85;
const tim = 10;
if(jim > kim && jim > tim){
    console.log("The hero Jim");
}
else if(kim > jim && kim > tim){
    console.log("The hero kim");
}
else {
    console.log("The hero tim");
}
function big(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
       return num1
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3
    }
}
const result = big(12,2,8)
console.log(result);




































































































































































