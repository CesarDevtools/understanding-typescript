function add(a: number, b: number): number /* return value */ {
    return a + b
}

//..

function log(message: string): void{ // void is used when a function doesn't return anything (no value is returned)
    console.log(message);
}

//..

function logAndThrow(errorMessage: string): never { // never is used when a function throws an error, this ensures that the function will never be used where a value is expected
    console.log(errorMessage);
    throw new Error(errorMessage)
}

//.. 

//Function type

function perfomJob(cb: (message: string) => void) { 
    cb('This is the message'); 
}

perfomJob(log);

//.. 
 
type UserTest = {
    name: string,
    age: number,
    greet: () => string
}

let user3: UserTest = {
    name: "Cesar",
    age: 36,
    greet() {
        console.log("Hello");
        return this.name
    }
}

console.log(user3.greet());
// user3.greet()

//..