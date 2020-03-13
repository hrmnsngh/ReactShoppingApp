import React from "react"
import {BrowserRouter,Route} from "react-router-dom"
import Login from "./Login";
import Signup from "./Signup"
import Forgot from "./Forgot";
import AddProduct from "./Addproduct";
import "./App.css"
import Navbar from "./Navbar";
import List from "./List";
import DeleteAccount from "./DeleteAccount";
import ShowProduct from "./ShowProduct";
import Cart from "./Cart"
import axios from "axios"
import {connect} from "react-redux"
import Placeorder from "./Placeorder"

class NewApp extends React.Component{
constructor(){
    super()
}
componentDidMount(){
    if(localStorage.email){
        axios({
            method:'post',
            url:'https://apibyashu.herokuapp.com/api/cart',
            data:{email:localStorage.email}
         }).then((response)=>{
             console.log("response from get cart api", response)
             this.props.dispatch({
                 type:'INITCART',
                 payload:response["data"]["data"]
             })
         },(error)=>{
             console.log("error from get cart api", error)
         })
    }
}
render(){
    return(
       <BrowserRouter>
       <Navbar />
       <Route exact path="/" component={List} />       
       <Route exact path="/login" component={Login} />
       <Route exact path="/signup" component={Signup} />
       <Route exact path="/forgot" component={Forgot}/>
       <Route exact path="/addproduct" component={AddProduct}/>
       <Route exact path="/deleteaccount" component={DeleteAccount}/>
       <Route exact path="/product" component={ShowProduct}/>
       <Route exact path="/product/:id" component={ShowProduct}/>
       <Route exact path="/cart" component={Cart}/>
       <Route exact path="/checkout" component={Placeorder}/>
       
       
       

       </BrowserRouter>
    )
}
}

export default connect()(NewApp) 