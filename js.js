let person = {
    name: "sodor uddin",
    profession: "developer",
    sallary: 20000,
    uniqe: {
        color: "vivid",
        result: {
            gpa: 5,
            viw: {
                theme: "blavck"
            }
        }
    }
}
let keys = Object.keys(person)


let mobile = {
    brand: "Samsung",
    model: "s24",
    ram: 8,
    rom: 256,
}

console.log(mobile);

let key = Object.keys(mobile);
console.log(key);

for (let a of key){
    console.log(a, ' ', mobile[a]);
}




