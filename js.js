function res (main){
    let start = 0;
    for(num of main){
        console.log(num);
        start = start + num;
    }
    return start
}
const main = [1,2,3,4,5]
const total = res(main)
console.log("The sum of the array is", total);


















