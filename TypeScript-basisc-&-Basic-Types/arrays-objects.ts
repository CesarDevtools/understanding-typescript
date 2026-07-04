let hobbies = ["Sports", "Cooking"];

hobbies.push("Movies");
// hobbies.push(10) --> error

//let users: (string | number)[];
let users: Array<string | number>; // <-- this is the same as the previous line!

users = ["Cesar", 36];
//users = ["Cesar", 36, true] --> error


//..

// Tuple type

let role: [number, string] // [1, "Admin"]

role = [2, "User"];
//role = [2, "User", "Admin"] --> error
//role = ["User", 2] --> error 


// Object types

let user: {
    name: string,
    age: number,
    hobbies: string[],
    role: {
        description: string,
        id: number
    }
} = {
    name: "Cesar",
    age: 36,
    hobbies: ["Sports", "Cooking"],
    role: {
        description: "Admin",
        id: 1
    }
};

//..

let val: {} = 'Some text' // --> this means any value that is not null or undefined
//val = null --> error

val = {};
val = 35;
val = true 
val = [];
val = "Hello";

// Flexible objects with the Record type

let data: Record<string, number | string>; // --> this means data must be an objet where all the keys are string values and all the values are numbers or string values

data = {
    name: "Cesar",
    age: 36,
    job: "developer",
    //working: true --> error (only values are number or string)
    //hobbies: ["Sports", "Cooking"] --> error (only values are number or string)
}