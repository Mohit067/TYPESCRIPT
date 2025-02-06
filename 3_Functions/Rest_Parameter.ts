/*
    * rest parameter allows a function to 
    * accept an indefinite number of arguments 
    * as an array
*/
// A rest parameter is declared using ... (spread operator) before the parameter name.
// The rest parameter is always an array type.


function sum(...number: number[]): number{
    return number.reduce((total, num) => {
        return total + num;
    }, 0);
}
console.log(sum(1,2));