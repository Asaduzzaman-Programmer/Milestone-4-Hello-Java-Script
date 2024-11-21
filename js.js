const fon = [
    {name: "iPhoneXr", camera: "64MP", price: 50000, battary: "4500MaH"},
    {name: "iPhoneXs", camera: "64MP", price: 20000, battary: "4500MaH"},
    {name: "iPhone12", camera: "64MP", price: 60000, battary: "4500MaH"},
    {name: "iPhone13", camera: "64MP", price: 80000, battary: "4500MaH"},
    {name: "iPhone7",  camera: "64MP", price: 10000, battary: "4500MaH"}
]

function cheap(obb){
    let cheap = fon[0];
    for(let model of obb){
        if(cheap.price > model.price){
            cheap = model
        }
    }
    return cheap
}
const result = cheap(fon);
console.log(result);


























































































































































