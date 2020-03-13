import React from "react"
import axios from "axios"

var centerdiv =  {
    margin: "auto",
    width: "50%",
    border: "3px solid grey",
    padding: "10px"
  }


class AddProduct extends React.Component{
constructor(){
    super()  // to call base class Constructor
    this.state = {
        errorMessage:null
    }
    this.product = {
        owner:{}
    }
}
componentWillMount(){
    if(!localStorage.email){
        this.props.history.push('/login')
    }
}

getPrice  = function(event){
    console.log(".... this", this)
    this.product.price = event.target.value
}
getName  = function(event){
    this.product.name = event.target.value
}
getImage  = function(event){
    this.product.image = event.target.value
}

addproduct  = function(){
 if(localStorage.email && localStorage.name)
{
    this.product.owner.name= localStorage.name
    this.product.owner.email=localStorage.email
    axios({
       method:'Post',
       data:this.product,
       url:'https://apibyashu.herokuapp.com/api/createproduct' 
    }).then((response)=>{
        console.log("response from add product api", response)
    },(error)=>{
        console.log("error from add product api", error) 
    })
}else{
    alert("Login First")
}     
}
render(){
    return(
        <div className="center">
        Add Product here
        <input onChange={this.getName.bind(this)} className="form-control" placeholder="Name"></input>
        <input onChange={this.getImage.bind(this)}   type="text" className="form-control" placeholder="Image"></input>
        <input onChange={this.getPrice.bind(this)}   type="text" className="form-control" placeholder="Price"></input>
       
        <button onClick={this.addproduct.bind(this)} className="btn btn-danger">Add Product</button>  
    </div>
    )
   
}
}


export default AddProduct