import React from "react"
import axios from "axios"

var centerdiv =  {
    margin: "auto",
    width: "50%",
    border: "3px solid grey",
    padding: "10px"
  }


class Singup extends React.Component{
constructor(){
    super()  // to call base class Constructor
    this.state = {
        errorMessage:null
    }
    this.user = {
    }
}

getEmail  = function(event){
    console.log(".... this", this)
    this.user.email = event.target.value
}
getName  = function(event){
    this.user.name = event.target.value
}
getPassword  = function(event){
    this.user.password = event.target.value
}
register  = function(){
    axios({
       method:'Post',
       data:this.user,
       url:'https://apibyashu.herokuapp.com/api/register' 
    }).then((response)=>{
        console.log("response from signup api", response)
    },(error)=>{
        console.log("error from signup api", error)
        
    })
        console.log("this user now" ,  this.user)
}
render(){
    return(
        <div className="center">
        Signup here
        <input onChange={this.getEmail.bind(this)}   className="form-control" placeholder="Email"></input>
        <input onChange={this.getName.bind(this)} className="form-control" placeholder="Name"></input>
        <input onChange={this.getPassword.bind(this)}   type="password" className="form-control" placeholder="Password"></input>
        <button onClick={this.register.bind(this)} className="btn btn-primary">Register</button>  
    </div>
    )
   
}
}


export default Singup