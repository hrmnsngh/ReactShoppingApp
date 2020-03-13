import React from 'react'
import axios from 'axios'

class DeleteProduct extends React.Component {
    constructor() {
        super()
        this.product = {
            name: '',
            price: '',
            image: '',
            owner: {
                name: 'Harman',
                email: 'harman@gmail.com'
            }
        }
    }

    addProduct = () => {
        console.log(this.product);
        axios({
            method: 'POST',
            data: this.product,
            url: 'https://apibyashu.herokuapp.com/api/deleteproduct'
        }).then((response) => {
            console.log('response : ', response);
        },
            (error) => {
                console.log('error: ', error);
            })
    }

    getName = (event) => {
        this.product.name = event.target.value;
    }

    getPrice = (event) => {
        this.product.price = event.target.value;

    }

    getImage = (event) => {
        this.product.image = event.target.value;
    }

    render() {
        return (
            <div id="DeleteProduct" class="container">
                <h2 className="alert alert-warning">Are you sure you want to delete this product</h2>
               {/*  <label >Name</label>
                <input type="text" onChange={this.getName.bind(this)} name="name" class="form-control"></input>

                <label for="price">Price</label>
                <input type="text" onChange={this.getPrice.bind(this)} name="price" class="form-control"></input>

                <label for="image">Image</label>
                <input type="url" name="image" onChange={this.getImage.bind(this)} className="form-control"></input> */}

                <button className="btn btn-primary" onClick={this.addProduct.bind(this)}>Delete Product</button>
            </div>
        )
    }
}

export default DeleteProduct;