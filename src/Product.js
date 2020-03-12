import React from 'react'
import {withRouter} from 'react-router'

function Product(props) {
    //console.log(`Props:`, props);


    var applyDiscount = () => {
        props.product.price -= 1000;
    }

    var showProduct = ()=>{
     //   let queryUrl = '/product?productid='+props.product.productid;
     let url = '/showproduct/'+props.product.productid;
        props.history.push(url);
    }
    return (
        <div onClick={showProduct} class="card" style={{ width: "18rem", textAlign: "center", margin: "10px" }}>
            {props.product && <img src={props.product.image} class="card-img-top" alt="Image"></img>}
               {props.product && <div class="card-body">
                    <p class="card-title">{props.product.name}</p>
                    <p class="card-text">{props.product.price}</p>
                    <button onClick={applyDiscount}>Apply Discount</button>

    </div>}
        </div>
    );
}

export default withRouter(Product);