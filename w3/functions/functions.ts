// Return Type
// The type of the value returned by the function can be explicitly defined.
function fullName(fname: string, lname: string): string {
 return fname + ' ' + lname;
}
console.log(fullName('Emon', 'Islam'));


// Void Return Type
// The type void can be used to indicate a function doesn't return any value.

function sayHello(): void {
 console.log('Hello!');
}
console.log(sayHello());

// Parameters
// Function parameters are typed with a similar syntax as variable declarations.

function multiply(a: number, b: number): number {
 return a * b;
}
console.log(multiply(4, 9));
// Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.

// the `?` operator here marks parameter `c` as optional
function addition(a: number, b: number, c?: number) {
 return a + b + (c || 0);
}
console.log(addition(5, 10, 15));

// Default Parameters
// For parameters with default values, the default value goes after the type annotation:
function pow(value: number, exponent: number = 10): number {
 return value ** exponent;
}
console.log(pow(5, 25));

// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.
function divided({ dividend, divisor }: { dividend: number, divisor: number }): number {
 return dividend / divisor;
}

// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
function additon2(a: number, b: number, ...rest: number[]) {
 return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(additon2(10, 10, 10, 10, 10));

// Type Alias
// Function types can be specified separately from functions with type aliases.

// These types are written similarly to arrow functions, read more about arrow functions here.
type Negate = (value: number) => number;
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(15));