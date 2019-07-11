import React, { Component } from 'react';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            teacher: {
                first_name: '',
                last_name: '',
                username: '',
                email: '',
                password: ''
            }
        }
    }

    render() {
        return(
            <form>
                <label for="first_name">First Name</label>
                <input type="text" name="first_name" id=""/>
                <label for="last_name">Last Name</label>
                <input type="text" name="last_name" id=""/>
                <label for="username">Username</label>
                <input type="text" name="username" id=""/>
                <label for="email">Email</label>
                <input type="email" name="email" id=""/>
                <label for="password">Password</label>
                <input type="password" name="password" id=""/>
            </form>
        );
    }

}

export default SignUp;