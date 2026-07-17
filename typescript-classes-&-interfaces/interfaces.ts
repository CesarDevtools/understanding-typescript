interface Authenticatable {
    email: string;
    password: string;

    login(): void;
    logout(): void;
}

//...

class AuthenticatableUser implements Authenticatable { // --> implementing an interface means that the class must have all the properties and methods of the interface. In other words, the class must adhere to the contract defined by the interface.
    constructor(
        public email: string,
        public password: string
    ){}

    login() {
        console.log(`Logging in ${this.email}`)
    }

    logout() {
        console.log(`Logging out ${this.email}`)
    }
}

//...

function authenticate(user: Authenticatable){ // --> we can create functions that accept interfaces as parameters. This is very useful for creating flexible and reusable code.
    user.login()
    user.logout()
}

//...

/*
interface Authenticatable  { --> merging interfaces can be used to add more properties to an existing interface
    role: string;
}
*/

//...

interface AuthenticatableAdmin extends Authenticatable { // --> interfaces can extend other interfaces. 
    role: 'admin' | 'superadmin';
}

let user1: Authenticatable;

user1 = {
    email: 'cessar@cesar.com',
    password: 'password',
    login() {
        console.log(`Logging in ${this.email}`)
    },
    logout() {
        console.log(`Logging out ${this.email}`)
    }
} 