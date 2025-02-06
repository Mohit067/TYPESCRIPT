// union type specify that we can say that value can be many type
// symbol --> {  |  }
let id : string | number;
id = 'abc';
console.log(id);
id = 123;
console.log(id);


// usecase in funtion
function printId(id: string | number, nam: string | boolean){
    console.log(`id: ${id}`);
    console.log(`name: ${nam}`);
}
printId(123, "mohit");
