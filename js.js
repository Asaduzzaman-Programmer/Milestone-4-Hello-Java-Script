// const nam = ['abul', 'babul', 'cabul', 'babul' , 'mokbul', 'cabul']
// const num = [1,1,2,7,8,4,7,8,5,4]
// function noDup(arr){
//     let uniqe = [];
//     for(let one of arr){
//         if(uniqe.includes(one)=== false){
//             uniqe.push(one)
//         }
//     }
//     return uniqe
// }
// const result = noDup(num)
// console.log(result);

const num = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
function uniqe(arr){
    let even = [];
    let evenn = []
    for(let one of arr){
        if(one % 2 === 0){
            even.push(one)
        }
    }
    for(let one of even){
        if(evenn.includes(one) === false){
            evenn.push(one)
        }
    }
    return evenn
}
const result = uniqe(num)
console.log(result);






































































































































































