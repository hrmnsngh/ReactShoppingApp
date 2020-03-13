import React from "react"

class CartItem extends React.Component{
   constructor(){
       super()
   }
   render(){
       return(
           <div className="row">
           <div className="col-md-8">
            <img style={{height:"60px"}} src={this.props.item.image} />
            <label>{this.props.item.name}</label>
            <label>{this.props.item.price}</label>
           </div>
           <div class="col-md-4">
           <button className="btn btn-danger">Remove</button>
           </div>
           </div>
       )
   }
}

export default CartItem