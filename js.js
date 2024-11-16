function feetInch(x){
    let a = x / 12
    let b = parseInt(a)
    let c = x % 12
    let d = `${b} fit ${c} inch.`
    return d;
}
const result = feetInch(75)
console.log(result);
































