/** tuples are a special type of array that allows
*   you to define a fixed number of elements with 
*   specific types 
**/

let user: [number, string];
user = [1, "Mohit"]; // Valid
// user = ["Mohit", 1]; // Error: Type 'string' is not assignable to type 'number'
console.log(user[0]); // 1
console.log(user[1]); // Mohit


// Tuple with Optional Elements
let userInfo: [number, string, string?]; // { ? }
userInfo = [1, "Mohit"];
console.log(userInfo);
userInfo = [1, "Mohit", "Developer"];
console.log(userInfo);


// Named Tuples (Labeled Tuples)
let person: [id: number, name: string] = [1, "Mohit"];

// Destructuring Tuples
let [id, nam] = person;
console.log(id);   // 1
console.log(nam); // Mohit

person.push("enrollment", 108);
console.log(person);
person.pop();
person.pop();
console.log(person);