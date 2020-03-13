import React from "react"
import axios from "axios"
import CartItem from "./Cartitem"
import store from "./reduxdemo/store"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

class Cart extends React.Component{
   constructor(){
       super()
       this.state = {
            cartitems:store.getState()["cart"],
            totalprice:0
       }
   }

   removeFromCart = function(product){
       axios({
           method:'post',
           url:'https://apibyashu.herokuapp.com/api/removefromcart',
           data:{
               email:localStorage.email,
               productid:product.productid
           }
           
       }).then((response)=>{
           console.log("response from remove from cart api", response)
           this.props.dispatch({
               type:'REMOVEFROMCART',
               payload:product
           })
       },
       (error)=>{
        console.log("error from remove from cart api", error)
    })
   }
   checkout = ()=>{
       this.props.dispatch({
           type:'PLACEORDER',
           payload:this.state.totalprice
       })
   }

   componentWillMount(){
    if(!localStorage.email){
        this.props.history.push('/login')
    }
   }
   componentDidMount(){
    var price = 0
    this.state.cartitems.forEach((each)=>{
        price = price + each.price
        console.log("............." , typeof(price) , price)
        this.setState({
            totalprice:price
        })
        
    })
    
       store.subscribe(()=>{
           
        this.setState({
            cartitems : store.getState()["cart"],
            totalprice:0
        })
           this.state.cartitems.forEach((each)=>{
            this.setState({
                totalprice:this.state.totalprice+each.price
            })  
        })
        
         
       }) 
   }
   render(){
       return(
          <div>
              {this.state.cartitems.map((each)=>{
                  return  <div className="row">
                  <div className="col-md-8">
                   <img style={{height:"60px"}} src={each.image} />
                   <label>{each.name}</label>
                   <label>{each.price}</label>
                  </div>
                  <div class="col-md-4">
                  <button onClick={this.removeFromCart.bind(this,each)} className="btn btn-danger">Remove</button>
                  </div>
                  </div>
              })}
            <div className="row">
             <div className="col-md-8">
           {this.state.totalprice>0 &&   <label className="alert alert-success">Total Price is : {this.state.totalprice}</label> }
             
             </div>
             <div className="col-md-4">
             {this.state.totalprice>0 &&<Link to="checkout"> <button onClick={this.checkout} className="btn btn-success">Checkout</button></Link>}
             </div>

           { !this.state.totalprice>0 && <div className="alert alert-danger">Your Cart is Empty</div> }
             
            </div>
          </div>
       )
   }
}

export default connect()(Cart) 