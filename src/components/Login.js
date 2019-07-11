import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            teacher: {
                username: '',
                password: ''
            }
        }
    }

    render() {
        return(
            <form>
                <label for="username">Username</label>
                <input type="email" name="username" id=""/>
                <label for="password">Password</label>
                <input type="password" name="password" id=""/>
            </form>
        );
    }

}

export default Login;