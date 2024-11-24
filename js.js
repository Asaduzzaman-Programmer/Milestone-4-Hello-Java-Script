function btn(){
    document.getElementById('btn').innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked'
}


function add(num1, num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num1 + num2; 
}
function multi(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    return num1 / num2;
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
    else if(op === "/"){
        const result = div(a, b);
        return result;
    }
}

const result = cal(24, 5, "/")
console.log(result);




























































































































