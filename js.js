function add(a, b){
    return a + b;
}
function sub(a, b){
    return a - b;
}
function multi(a, b){
    return a * b;
}
function div(a, b){
    return a / b;
}
function cal(a, b, op){
    if(op === "+"){
        const result = add(a ,b);
        return result;
    }
    else if(op === "-"){
        return sub(a, b)
    }
    else if(op === "*"){
        return multi(a, b)
    }
    else if(op === "/"){
        return div(a, b)
    }
    else{
        return "MATH Eroro"
    }
}
const result = cal(5, 7, "")
console.log(result);
















































































































































