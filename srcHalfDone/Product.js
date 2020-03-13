import React from "react"
import {withRouter} from "react-router"

function Product(props){

    var showProduct = function(product){
        var url ="/product/" + product.productid 
        var queryurl = "/product?productid="+product.productid 
        console.log("query url" ,  queryurl)
        props.history.push(url)
    }
   
return (
   <div onClick={showProduct.bind(null,props.product)} className="card col-md-3" style={{width:"18rem"}}>
 {props.product && <img style={{height:"150px"}}  src={props.product.image} className="card-img-top" alt="..."></img>}
  { props.product && <div className="card-body">
    <h5 className="card-title">{props.product.name}</h5>
    <p className="card-text">{props.product.price}</p>
</div> }
</div> 
)
}

export default withRouter(Product)