// Typed Arrays
// A tuple is a typed array with a pre - defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:

//define our tuple 
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'coding god was here'];

// You see the new valueTuples only have strongly defined types for the initial values:

const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// Property 'push' does not exist on type 'readonly [number, boolean,
// ourReadonlyTuple.push('Coding God took a day off');

// Named Tuples
// Named tuples allow us to provide context for our values at each index.
const graph: [x: number, y: number] = [55.2, 41.3];

// Since tuples are arrays we can also destructor them.
const graph2: [number, number] = [55.2, 41.3];
const [c, d] = graph2;