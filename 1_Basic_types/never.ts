// The never type in TypeScript represents values that never occur
/**
    * When to Use never?
    * Functions that throw errors
    * Infinite loops
    * Exhaustive type checking (in switch statements)
*/

function throwError(message: string): never {
    throw new Error(message);
}

try {
    throwError("something went wrong");
} catch (error) {
    console.error("Caught an error:", (error as Error).message);
}
