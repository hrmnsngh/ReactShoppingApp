import React from "react"
import {connect} from "react-redux"
import store from "./reduxdemo/store"
import axios from "axios"

class Placeorder extends React.Component{
    constructor(){
        super()
    }
    order = {

    }
    componentWillMount(){
        if(!localStorage.email){
            this.props.history.push('/login')
        }
    }

    getName = (event)=>{
     this.order.name = event.target.value
    }
    getArea = (event)=>{
        this.order.area = event.target.value
    }
    getCity = (event)=>{
        this.order.city = event.target.value
    }
    getPincode = (event)=>{
        this.order.pincode = event.target.value
    }
    getPhone = (event)=>{
        this.order.phone = event.target.value
    }

    placeOrder = ()=>{
        this.order.email = localStorage.email
        this.order.items = store.getState()["cart"]
        this.order.totalprice = store.getState()["totalprice"]
        console.log("order object ready", this.order)
        axios({
            method:'post',
            url:'https://apibyashu.herokuapp.com/api/addorder',
            data:this.order
        }).then((response)=>{
            console.log("response from add order api", response)
            this.props.dispatch({
                type:'EMPTYCART'
            })
        }, (error)=>{
            console.log("error from add order api", error)
        })
    }
    render(){
        return(
            <div className="center">
            <h1>Place Your Order Here</h1>
             <input className="form-control" placeholder="Name" onChange={this.getName}/>
             <input className="form-control" placeholder="Area" onChange={this.getArea}/>
             <input className="form-control" placeholder="City" onChange={this.getCity}/>
             <input className="form-control" placeholder="PinCode" onChange={this.getPincode}/>
             <input className="form-control" placeholder="Phone" onChange={this.getPhone}/>
             <label> Cash On Delivery </label><input disabled="true" type="checkBox" checked="true"/>
             <button onClick={this.placeOrder} className="btn btn-primary">Place Order</button>
            </div>

        )
    }
}

export default Placeorder