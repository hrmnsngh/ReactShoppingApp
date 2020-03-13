import React from "react"
import Product from "./Product"
import axios from "axios"


class Forgot extends React.Component{
  constructor(){
    super()
    this.state ={
      errorMessage :null
    }
  }
  email
  getEmail = function(event){
    this.email = event.target.value
  }

  sendMail = function(){
    axios({
      method:'post',
      data:{
        email:this.email
      },
      url:'https://apibyashu.herokuapp.com/api/resetpassword'
    }).then((response)=>{
       console.log("response from send password api " , response)
       if(response["data"]["message"]=="No Such Email exists"){
        this.setState({
          errorMessage:response["data"]["message"]
        })
       }
     
    },(error)=>{
      console.log("error from send password api", error)
    })
  }
  render(){
    return(
      <div className="center">
      <h1>Forgot Your Password! </h1>

     { this.state.errorMessage &&  <div class="alert alert-danger">{this.state.errorMessage}</div> }
      <input onChange={this.getEmail.bind(this)} className="form-control" placeholder="Enter your email"/>
      <button onClick={this.sendMail.bind(this)} class="btn btn-warning">Send Password</button>
     </div>
    )
  }
}

export default Forgot





