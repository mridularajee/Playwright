import { test, expect } from '@playwright/test';

test('Test', async ({ page }) => {



interface Person
{
    name:string;
    age:number;
}

let person1: Person ={
    name:"amit",
    age:25
}

let person2: Person ={
    name:"sumit",
    age:36
}

console.log(person1.name);
console.log(person1.age);


console.log(person2.name);
console.log(person2.age);
});