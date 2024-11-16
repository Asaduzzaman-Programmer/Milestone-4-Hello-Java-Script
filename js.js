function oddAvg(array) {
    const odds = [];
    for (const i of array){
    if(i % 2 !==0){
        odds.push(i)
     }
    }
    let sum = 0
    for (const i of odds){
        sum = sum + i
    }
    const count = odds.length
    const avg = sum / count
    return avg
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = oddAvg(array);
console.log(result);

























