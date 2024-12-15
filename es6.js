const num = [1,2,3,54,6,8]
const max = Math.max(...num);
const neww = num;
const ob = {
    name: "glass",
    brand : "texas",
    isClean : true,
}
const k = Object.keys(ob);
const v = Object.values(ob)
const data = [{id: 1, name: "abul", address: "kochu khet"}];
console.log(data[0].address);
const product = {
    name: "iPhone",
    model:[
        {
            mobile: "iPhone 14",
            ram: 8,
            price: 156000
        },
        {
            mobile: "iPhone 15",
            ram: 8,
            price: 166000
        },
        {
            mobile: "iPhone 16",
            ram: 8,
            price: 197000
        }
    ]
}
console.log(product.model[2].mobile);
const doubles = [2,3,4,5,6,7];
const doubled = []
for(let i of doubles){
    const u = i * 2;
    doubled.push(u)
}
console.log(doubled);
const num2 = [1,2,3,4,5,6,7,8,9];
const result = num2.map(i => i * 2)
console.log(result);
const result2 = num2.map(i => i * 2 +5);
console.log(result2);
const friends = ["sawon", "rakiob", "hridoy", "sarkar"];
const result3 = friends.map(i => i.length);
const result4 = friends.map(i => i[0])
console.log(result4, result3);