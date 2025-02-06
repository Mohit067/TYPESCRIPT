// In any we can Re-assign the value 
let numAny : any;

numAny = 3;
console.log(numAny);

numAny = 'a';
console.log(numAny);


// any in Arrays
let arr: any[] = [1, "text", true];
console.log(arr);


// Using any in Functions
function logMessage(msg: any) {
    console.log(msg);
}

logMessage("Hello");
logMessage(42);
logMessage({ key: "value" });


// type Assertion
let someValue : any = "mohit";
let strLenght = someValue.length;
console.log(strLenght); // 5

let strLenght1 = (someValue as string).length; // type assertion
console.log(strLenght1); // 5
