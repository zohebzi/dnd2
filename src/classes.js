
/*
const UserObject = {
    firstName: 'Zoheb',
    lastName: 'Iqbal',
    signup: function () {
        console.log(this.firstName, 'signed up!')
    }
}

//Classes are data structures that allow us to create blueprints for future objects
class User {
    // constructor tell JS what any given instance of a User consists of
    // constrictor() is called automatically any time you say "new" in JS
    constructor(name, email, password) {
        this.name = name
        this.email = email
        this.password = password

    }

    signup() {
        console.log(this.name, 'signed up!')

    }

}

class AdminUser extends User {
    constructor(name, email, password) {
        super(name, email, password)
        this.admin = true
    }
}


// this is an instance of User
// a user is a data structure that has these attrs: name, email, and password
let user = new User('Zoheb', 'zoheb.zafar.iqbal@gmail.com', '1111112')

console.log()

*/


import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,

        }
    }
    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <h2> Count is {this.count}</h2>
                <button onClick={() => {
                    this.setState({ count })
                }></button>
            </div>
        )
    }
}
