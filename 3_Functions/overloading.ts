// verloads define multiple function signatures.
function valLength(value: string): number;
function valLength(value: any[]): number;
function valLength(value: any){
    return value.length;
}
console.log(valLength("mohit"));



function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(10, 20)); 
console.log(add("Hello, ", "World!"));
