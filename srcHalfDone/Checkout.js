import React from 'react'
import axios from 'axios'

class Checkout extends React.Component {

    constructor() {
        super();
        this.state = {
                name: null,
                email: null,
                totalprice: null,
                area: null,
                city: null,
                phone: null,
                pincode: null,
                items: null

        }
    }

    componentDidMount() {

    }

    getName = (event) => {
        this.setState({
            name: event.target.value
        })

    }

    getPhone = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    getAddress = (event) => {
        this.setState({
            area: event.target.value
        })
    }

    getCity = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    getPin = (event) => {
        this.setState({
            pin: event.target.value
        })
    }

    placeOrder = () => {

        axios({
            method: 'POST',
            url: 'https://apibyashu.herokuapp.com/api/chekout',
            data: this.state
        }).
            then(
                (response) => {
                    console.log('order checkout resp: ', response);
                },
                (error) => {
                    console.log('error placing order :', error);
                }
            );
    }

    render() {
        return (
            <div className="card card-small">

                <h2 className="card-header">Order Summary</h2>
                <div className="card-body">
                    <div className="container-fluid">
                        <form className=" card-text">
                            <input onChange={this.getName.bind(this)} className="form-control" type="text" placeholder="Name" ></input>
                            <input onChange={this.getPhone.bind(this)} className="form-control" type="number" placeholder="Phone" ></input>
                            <input onChange={this.getAddress.bind(this)} className="form-control" type="text" placeholder="Address"></input>
                            <input onChange={this.getCity.bind(this)} className="form-control" type="text" placeholder="City"></input>
                            <input onChange={this.getPin.bind(this)} className="form-control" type="number" placeholder="Pincode"></input>
                            <input type="checkbox" checked disabled></input> &nbsp; COD &nbsp;
                        <button onClick={this.placeOrder.bind(this)} type="submit" className="btn btn-primary">Place Order</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Checkout