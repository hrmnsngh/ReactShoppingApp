import React from "react"
import axios from "axios"
import CartItem from "./Cartitem"
import store from "./reduxdemo/store"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class Cart extends React.Component {
    
    totalprice;
    constructor() {
        super()
        this.state = {
            cartitems: store.getState()["cart"]
        }
        this.totalprice = 0
    }

    removeFromCart = function (product) {
        axios({
            method: 'post',
            url: 'https://apibyashu.herokuapp.com/api/removefromcart',
            data: {
                email: localStorage.email,
                productid: product.productid
            }
        }).then((response) => {
            console.log("response from remove from cart api", response)
            this.props.dispatch({
                type: 'REMOVEFROMCART',
                payload: product
            })
        },
            (error) => {
                console.log("error from remove from cart api", error)
            })
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                cartitems: store.getState()["cart"]
            })
            this.state.cartitems.forEach((each) => {
                this.totalprice += +each.price;
            });
            console.log('total price : ', this.totalprice);
        })

    }
    render() {
        return (
            <div>
                {this.state.cartitems.map((each) => {
                    return <div className="row">
                        <div className="col-md-8">
                            <img style={{ height: "60px" }} src={each.image} />
                            <label>{each.name}</label>
                            <label>{each.price}</label>
                        </div>
                        <div class="col-md-4">
                            <button onClick={this.removeFromCart.bind(this, each)} className="btn btn-danger">Remove</button>
                        </div>
                    </div>
                })}
                <div className="row">
                    <div className="col-md-8">
                        <label className="alert alert-success">Total Price is : {this.totalprice }</label>

                    </div>
                    <div className="col-md-4">
                       <Link to="/checkout"><button className="btn btn-success">Checkout</button></Link> 
                    </div>

                </div>
            </div>
        )
    }
}

export default connect()(Cart) 