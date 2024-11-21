function add(a, b ){
    return a + b;
}
function sub(a, b ){
    return a - b;
}
function multi(a, b ){
    return a * b;
}
function div(a, b )   {
    return a / b;
}
function cal(a, b, op){
    if(op === "+"){
        const result = add(a, b);
        return result;
    }
    else if(op === "-"){
        const result = sub(a, b);
        return result;
    }
    else if(op === "*"){
        const result = multi(a, b);
        return result;
    }
    else  if(op === "/"){
        const result = div(a, b);
        return result;
    }
    else{
        return "Math Error"
    }
}
const result = cal(5, 8, "*")
console.log(result);






















































































































































