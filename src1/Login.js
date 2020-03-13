import React from 'react'
import axios from 'axios'
import Forget from './Forget'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            loginErr: 'Invalid Username',
            isLoggedIn: false
        }

        this.user = {
            email: '',
            password: ''
        }
    }

    componentWillMount() {
        if (sessionStorage.name) {
            console.log('inside component mount');
            this.setState({
                isLoggedIn: true
            });
            this.user.email = sessionStorage.email;
            console.log('state : ', this.state);
        }
    }

    onLogin = () => {
        axios({
            method: 'POST',
            data: this.user,
            url: 'https://apibyashu.herokuapp.com/api/login'
        }).then((response) => {
            console.log('response : ', response);
            if (response.data.token) {
                sessionStorage.email = response.data.email;
                sessionStorage.user = response.data.name;
                sessionStorage.isLoggedIn = true;
                this.setState({
                    isLoggedIn: true
                });
                this.user.email = sessionStorage.email;
                this.props.dispatch({
                    type: 'LOGIN',
                    payload: {
                        user: 'Harman'
                    }
                });
                this.props.history.push('/');

            }
        },
            (error) => {
                console.log('error: ', error);
            })
        console.log(this.user);
    }

    getUser = (event) => {
        this.user.email = event.target.value

    }
    getPassword = (event) => {
        this.user.password = event.target.value
    }

    render() {
        return (
            <div id="login" class="well" >
                <div isLoggedIn={false} className="row">
                    <label >Username</label>
                    <input type="email" onChange={this.getUser.bind(this)} className="form-control"></input>
                    <label for="password">Password</label>
                    <input type="password" name="password" onChange={this.getPassword.bind(this)} className="form-control"></input>
                    <button className="btn btn-primary" onClick={this.onLogin.bind(this)} style={{ margin: "20px" }}>Login</button>
                    <Link to="/forget"><a>Forget password? Reset</a></Link>
                </div>


                <div className="row">
                    Create new account 
                    <Link to="/signup">
                        <button class="btn btn-warning my-2 my-sm-0" type="submit">Signup</button></Link>
                </div>
            </div>
        )
    }
}

export default connect()(Login);