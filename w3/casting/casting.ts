// TypeScript Casting
// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.

// Casting is the process of overriding a type.

// Casting with as
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
let e: unknown = 'hello';
console.log((e as string).length);

// Casting with <>
// Using <> works the same as casting with as.
let n: unknown = 'hello';
console.log((<string>n).length);

// Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
let p = 'hello';
console.log(((p as unknown) as number).length); // x is not actually a number so this will return undefined
