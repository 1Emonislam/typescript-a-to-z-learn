//TypeScript has a specific syntax for typing arrays.
const names: string[] = [];
names.push("Emon");
console.log(names);
names.push('Sumon');
console.log(names, 'read update delete data permission accept')

// Readonly
// The readonly keyword can prevent arrays from being changed.
const names2: readonly string[] = ["Emon"];
console.log(names2, 'readonly only reading data')
