const num = [1,2,3,54,6,8]
const max = Math.max(...num);
console.log(max);
console.log(...num);

const neww = num;
console.log(...neww);

const ob = {
    name: "glass",
    brand : "texas",
    isClean : true,
}

const k = Object.keys(ob);
const v = Object.values(ob)
console.log(k, v);
