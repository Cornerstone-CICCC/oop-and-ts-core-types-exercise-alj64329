// Exercise: Write a function `logValues` that takes an array of any type of values (numbers, strings, booleans, etc.).
// The function should iterate through the array and log each value along with its type.

function logValues(values:any[]) {

    values.forEach(val => {
        if(typeof val === "object"){
            for(let key in val){
             console.log(`{${key}: '${val[key]}'} (${typeof val})`)           
            }
        }else if(typeof val === "string"){
            console.log(`"${val}" (${typeof val})`)
        }else{
        console.log(`${val} (${typeof val})`)
        }
    });
}

logValues([42, "Hello", true, { name: "Alice" }]);
// Expected output:
// 42 (number)
// "Hello" (string)
// true (boolean)
// { name: "Alice" } (object)