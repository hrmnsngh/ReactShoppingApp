import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import {connect} from "react-redux"



class Login extends React.Component{
constructor(){
    super()  // to call base class Constructor
    this.state = {
        errorMessage:null,
        email:'',
        password:''
    }
    this.user = {

    }
}
componentDidMount(){
    console.log(">>>>>>>>>>>>>>>>>>>>>>." ,  this.props)
}
login  = function(){
    this.user.email = document.getElementById('email').value
    this.user.password = document.getElementById('password').value
    
    console.log("this state now" ,  this.user)
    axios({
        method:'post',
        url:'https://apibyashu.herokuapp.com/api/login',
        data:this.user
    }).then((response)=>{
        console.log("response from login api", response)
        if(response["data"]["token"]){
            localStorage.email = response["data"]["email"]
            localStorage.name=response["data"]["name"]
            localStorage.user=response["data"]
            
            this.props.dispatch({
                type:'LOGIN',
                payload:{user:response["data"]}
            })
            this.props.history.push('/')
        }
        else{
            alert("Invalid Credentials")
        }
    },(error)=>{
        console.log("error from login api", error) 
    })
}
render(){
    return(
        <div className="center">
        Login heress
        <input id="email"   className="form-control" placeholder="Email"></input>
        <input id="password" type="password" className="form-control" placeholder="Password"></input>
        <button onClick={this.login.bind(this)} className="btn btn-primary">Login</button> 
        <Link to="/forgot"> Forgot Your Password ? Click Here</Link>
    </div>
    )
   
}
}


export default connect()(Login)   