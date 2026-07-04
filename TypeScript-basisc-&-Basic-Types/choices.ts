enum Role {
    Admin,  // 0
    Editor, // 1
    User    // 2
}

let userRole: Role = 0

userRole = Role.User // --> 2
userRole = 0 // --> Admin
//userRole = 3  --> error

//.. 

// Literal types
let userRole1: 'admin' | 'editor' | 'user'

userRole1 = 'admin' // --> 'admin'
userRole1 = 'editor' // --> 'editor'
userRole1 = 'user' // --> 'user'
//userRole1 = 'developer' --> error

//..

// Literal types + tuple
let userInfo: ["Cesar" | "Pedro" | "Juan", 1 | 0] = ["Cesar", 1]

userInfo = ["Pedro", 0]
userInfo = ["Juan", 1]
//userInfo = ["Juan", 2] --> error
//userInfo = ["Maria", 1] --> error

//..

// Type aliases and custom types

type Roles = 'admin' | 'editor' | 'user' // this means : Roles = Roles.Admin | Roles.Editor | Roles.User

let userRole2: Roles = "admin" // --> "admin"
userRole2 = "editor" // --> "editor"
userRole2 = "user" // --> "user"
//userRole2 = "developer" // --> error

function login (role: Roles) {
    if (role === "admin") {
        return true
    }
}

//..
type User = {
    name: string,
    age: number,
    hobbies: string[],
    role: Roles
}

let user1: User = {
    name: "Cesar",
    age: 36,
    hobbies: ["Sports", "Cooking"],
    role: "admin"
}