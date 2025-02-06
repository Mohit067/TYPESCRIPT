// The void type in TypeScript is used when
// a function does not return a value.



function logMessage(message: string): void {
    console.log("Log:", message);
    return undefined; // this will allow in void 
}
logMessage("Hello, TypeScript!"); // Output: Log: Hello, TypeScript!
  


const greet = (name: string): void => {
    console.log(`Hello, ${name}!`);
};
greet("Mohit"); // Output: Hello, Mohit!
  