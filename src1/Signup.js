import React from 'react'
import axios from 'axios'

class Signup extends React.Component {
    constructor() {
        super()
        this.user = {
            name: '',
            email: '',
            password: ''
        }
    }

    margins = {
        margintop: '10px'
    };

    register = () => {
        console.log(this.user);
        axios({
            method: 'POST',
            data: this.user,
            url: 'https://apibyashu.herokuapp.com/api/register'
        }).then((response) => {
            console.log('response : ', response);
        },
            (error) => {
                console.log('error: ', error);
            })
    }

    getEmail = (event) => {
        this.user.email = event.target.value;
    }

    getUser = (event) => {
        this.user.name = event.target.value;

    }

    getPassword = (event) => {
        this.user.password = event.target.value;
    }

    render() {
        return (
            <div id="login" class="well">
                <label >Email</label>
                <input type="email" onChange={this.getEmail.bind(this)} name="email" class="form-control"></input>

                <label for="username">Username</label>
                <input type="text" onChange={this.getUser.bind(this)} name="name" class="form-control"></input>

                <label for="password">Password</label>
                <input type="password" name="password" onChange={this.getPassword.bind(this)} className="form-control"></input>

                <button className="btn btn-primary" style={this.margins} onClick={this.register.bind(this)}>Sign-up</button>
            </div>
        )
    }
}

export default Signup;