const user = { firstname: 'Emon', lastname: 'Islam', age: 22 };

const user2 = {
 firstName: 'Emon',
 lastname: 'Islam', Age: 22
};
const { firstname, age }: { firstname: string, age: number } = user;

interface User2 {
 firstName: string;
 Age: number;
}
const { firstName, Age }: User2 = user2;