function sum(array){
    let number = 0;
    for(i of array){
        number = number + i
    }
    return number
}
const array = [1,2,3,4,5,6]
const result = sum(array);
console.log("The sum of full array :",result);
function even(arry){
    let num = 0;
    for(i of arry){
        if(i % 2 ===0){
            num = num + i
        } 
    }
    return num;
}
const arry = [1,2,3,4,5,6]
const resul = even(arry);
console.log("The sum of EvenNumbers :", resul);















