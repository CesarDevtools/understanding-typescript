let age: any = 36;

//.. 

age = "thirty six";
age = true;
age = [];
age = {};

//.. union type

let myAge: string | number | boolean = 36;

myAge = "thirty six";
myAge = true;
//myAge = []; --> error
//myAge = {}; --> error