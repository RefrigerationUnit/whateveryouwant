/*
    ----------------------------------------
    PART 1
    ----------------------------------------
    Imagine you work the information booth at a theme park and help recommend rides to guests.

    1. Declare a variable age. Assign it the value 25.
    2. Declare a variable height. Assign it the value 5.
    3. Log each variable to the console, example: console.log(age)

    ----------------------------------------
    PART 2
    ----------------------------------------
    Write out an if / else if / else statement for the following conditions:

    1. If a person is less than 8 years old, recommend the merry-go-round.
        console.log("Check out the Merry-Go-Round. You'll love it!");
    2. Otherwise if a person is more than 8 years old AND less than 65 years old AND more than 4.5 feet tall, recommend the roller coaster.
        console.log("Check out the Roller Coaster. It's awesome!");
    3. Otherwise, recommend the lazy river
        console.log('Why not enjoy a float down the Lazy River?');
*/

let ages = [5, 7, 8, 10, 25, 40, 65, 70];
let heights = [3, 4, 4.5, 5, 6];

for (let i = 0; i < ages.length; i++) {
    console.log(ages[i]);
}

let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hannah'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
 let c = 0;
function multiply(a, b) {
    c = a * b;
    return c;
}
multiply(4, 7);
console.log(c);

