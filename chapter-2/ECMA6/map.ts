let person = new Map();
person.set('name', "Emon");
person.set('name1', "Emon1");
person.set('name2', "Emon2");
person.set('nam3', "Emon3");
person.set('nam4', "Emon4");
console.log(person.get('name'));
console.log(person.has("name5"));
console.log(person.keys());
console.log(person.values());
person.forEach(function (person) {
 console.log(person)
});
let Emon = ['Emon', '29', 'programmer', 'playing game']
let person2: any = new Map([
 [new Date(), 'today']
])