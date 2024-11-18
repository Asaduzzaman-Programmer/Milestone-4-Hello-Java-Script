function make_avg(array, size){
    let sum = 0;
    for(let num of array){
        sum = sum + num
    }
    return sum / size
}
const array = [1,2,3,4,5,6,7,8,9,10]
const size = array.length
const result = make_avg(array, size)
console.log(result);






