let userName: string;
let userAge = 22;

//..

userName = "Cesar";
// userAge = 18;

function add(a: number, b = 5) {
  return a + b;
}

add(10);
// add("10") --> Argument of type 'string' is not assignable to parameter of type 'number'.
add(10, 6);
// add(10, "6") --> Argument of type 'string' is not assignable to parameter of type 'number'.