function generateError(message?: string): never { // -->  Never means that the function will never return a value, and the ? after message means that the message is optional
    throw new Error(message);
}

generateError();

type User = {
    name: string,
    age: number,
    role?: "admin" | "user" // --> optional property
};

const user: User = {
    name: "Cesar",
    age: 30
};

// Nullish coalesing operator (??)

let input = '';
const didProvideInput = input ?? false; // if input is null or undefined, then it will be false, otherwise it will be true