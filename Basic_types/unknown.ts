// The unknown type in TypeScript is a safer alternative to any
let value: unknown;
value = "Hello"; //  OK
value = 42;      //  OK
value = true;    //  OK


let data: any = "Hello";
console.log(data.toUpperCase()); // No error, but unsafe

let input: unknown = "Hello";
// console.log(input.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'unknown'.


let value1: unknown = "TypeScript";

if (typeof value1 === "string") {
  console.log(value1.toUpperCase()); //  Safe usage
}
