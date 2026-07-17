"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//...
class AuthenticatableUser {
    email;
    password;
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    login() {
        console.log(`Logging in ${this.email}`);
    }
    logout() {
        console.log(`Logging out ${this.email}`);
    }
}
//...
function authenticate(user) {
    user.login();
    user.logout();
}
let user1;
user1 = {
    email: 'cessar@cesar.com',
    password: 'password',
    login() {
        console.log(`Logging in ${this.email}`);
    },
    logout() {
        console.log(`Logging out ${this.email}`);
    }
};
//# sourceMappingURL=interfaces.js.map