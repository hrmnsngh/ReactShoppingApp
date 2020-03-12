import React from 'react'
import axios from 'axios'

class Forget extends React.Component {

    constructor() {
        super();
        this.state = {
            errMsg: null
        }
        this.email = '';
    }
    getEmail = (event) => {
        this.email = event.target.value;
    }
    resetPassword = () => {
        axios({
            method: 'POST',
            data: this.email,
            url: 'https://apibyashu.herokuapp.com/api/resetpassword'
        }).then((response) => {
            console.log('response : ', response);
            if(response.data.message == 'No Such Email exists'){
               this.setState({
                errMsg: response.data.message
               });
            }
        },
            (error) => {
                console.log('error: ', error);
            })
    }
    render() {

        return (
            <div id="forget" class="container">
                {this.state.errMsg}
                <input class="input-group" onChange={this.getEmail.bind(this)} placeholder="Enter the registered email" />
                <button class="btn btn-primary" onClick={this.resetPassword.bind(this)}>Reset Password</button>
            </div>
        )

    }
}

export default Forget;