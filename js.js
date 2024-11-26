const details = {
    name: "sawon",
    home: "rangpur",
    add: {
        dis: "rangpur",
        jela : {
            union: "haridevpur",
            gram: {
                name: "Fokiran Bala Para"
            }
        }
    }
}
console.log(details.add.jela.gram.name);
function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments.length);
    console.log(arguments[1]);
}
add(12,13,14,5,6,2,5,)
const num = [12,13,14,5,6,2,5];
for(let i of num){
    console.log(i);
}
const products = [
    {name: "phone", brand: "samsung", model: "s24", chipset: "mediaTek"},
    {name: "laptop", brand: "asus", model: "vivobook", chipset: "core i7"},
    {name: "laptop", brand: "lenovo", model: "yoga", chipset: "core i9"},
    {name: "phone", brand: "iPhone", model: "16proMax", chipset: "snapdragon 8gen"}
]
function matchedProduct(obb, type){
    let match = [];
    for(let product of products){
        if(product.name.toLowerCase().includes(type.toLowerCase())){
            match.push(product)
        }
    }
    return match;
}
const result = matchedProduct(products, 'laptop');
console.log(result);







































































































