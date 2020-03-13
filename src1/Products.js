import React from 'react'
import axios from 'axios';
import Product from './Product'

class Products extends React.Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentWillMount() {
        axios({
            method: 'GET',
            url: 'https://apibyashu.herokuapp.com/api/allproducts'
        }).
            then(
                (response) => {
                   // console.log('response: ', response.data);
                    this.setState({
                        products: response["data"]["data"]
                    });
                   // console.log('products', this.state.products);
                },
                (error) => {
                    console.log('Error while fetching data: ', error);
                }
            );
    }
    render() {

        return (
            <>
                <h2>Today's Deal</h2>
                <div className="row">
                    {this.state.products.map(
                        product =>
                            <Product product={product} className="col-3" />)}
                </div>
            </>
        )
    }

}

export default Products