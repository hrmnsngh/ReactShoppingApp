import React from 'react'
import axios from 'axios'
import Product from './Product'

class Cart extends React.Component{

    constructor(){
        super()
        this.state ={
            products: []
        }
    }

    componentWillMount(){
        let email = sessionStorage.email;
        axios({
            method: 'POST',
            url:'https://apibyashu.herokuapp.com/api/cart',
            data: {'email':email}
        }).
        then(
            (response)=>{
                console.log('cart response: ', response.data);
                this.setState({
                    products: response.data.data
                })
            },
            (error)=>{console.log('error while getting cart items: ',error);}        );
    }

    render(){
        return(
            <>
                <h2>Cart</h2>
                <div className="row">
                    {this.state.products.map(
                        product =>
                            <Product product={product} className="col-3" />)}
                </div>
            </>
        )
    }
}

export default Cart