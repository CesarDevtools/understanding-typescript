let a: null;

a = null
//a = 1 --> error
//a = "Cesar" --> error
//a = true --> error
//a = [] --> error
//a = {} --> error

//..

const inputElement = document.getElementById("name") as HTMLInputElement | null // --> Type assertion

//if (!inputElement){
//    throw new Error("Element not found") // --> throw new Error() is used to throw an error, and ! is used to assert that the element is not null
//}

console.log(inputElement?.value) // --> optional chaining, prevents the error if the element is null, and if it is null it will return undefined