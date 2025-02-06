function add(a: number, b:number): number{
    return a + b;
}

console.log(add(2,4));


// fuction with optional parameter
function fun(name: string, age?: number){
    if(!age){
        console.log("Calling fun funtion", name);
    }
}
fun("mohit");
// if not age then it return only name
// if we can not bind with if condiontion then it wil return mohit undefine as place of age


// funciton with default parameter
function intro(name: string, age: number = 22){
    console.log("Calling intro function",name, age);
}

intro("mohit");