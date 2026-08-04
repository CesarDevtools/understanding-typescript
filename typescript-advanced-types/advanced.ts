type DataStore = {
    [prop: string]: number | boolean;
};

let store: DataStore = {};

// store.name = 'John'; // --> error: string is not assignable to type number | boolean
store.value = 10;
store.isValid = true;

let roles = ['admin', 'guest', 'editor'] as const; // --> readonly array
// roles.push('developer'); // --> error: Property 'push' does not exist on type 'readonly ["admin", "guest", "editor"]'.
const firstRole = roles[0]; // --> "admin"


//..

const dataEntries = {
    entry1: 0.51,
    entry2: -1.23
} satisfies Record<string, number>;

dataEntries.entry3 = 555; // --> error, it's not allowed to add new properties to the object, because we used the 'satisfies' keyword.
