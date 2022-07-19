//Create a Set
let diceEntries = new Set<number>();

//Add values
diceEntries.add(1);
diceEntries.add(2);
diceEntries.add(3);
diceEntries.add(4).add(5).add(6);   //Chaining of add() method is allowed

//Check value is present or not
diceEntries.has(1);                 //true
diceEntries.has(10);                //false

//Size of Set 
diceEntries.size;                   //6

//Delete a value from set
diceEntries.delete(6);              // true

//Clear whole Set
diceEntries.clear();                //Clear all entries


// 3. Iterating over a Set
// Use for loop to iterate over the values in a Set.

// Set Iteration Example
let diceEntries2 = new Set<number>();

//Added 6 entries into the set
diceEntries2.add(1).add(2).add(3).add(4).add(5).add(6);

//Iterate over set entries
for (let currentNumber of diceEntries2) {
 console.log(currentNumber);     //Prints 1 2 3 4 5 6
}

// Iterate set entries with forEach
diceEntries.forEach(function (value) {
 console.log(value);               //Prints 1 2 3 4 5 6
});