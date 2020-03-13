import React, { Component } from "react";
import axios from "axios"

// var apiurl = 'https://learningmeanwithashu.herokuapp.com/api/product/' + this.state.productid;
class ShowProd extends Component {
    Addtocart = () => {
        if(sessionStorage.email){
           var requestObj = {
               productid:this.state.product.productid,
               name:this.state.product.name,
               price:this.state.product.price,
               image:this.state.product.image,
               email:sessionStorage.email
           }
           axios({
               method:'post',
               url:'https://apibyashu.herokuapp.com/api/addtocart',
               data:requestObj
           }).then((response)=>{
               console.log("response from add to cart api" , response)
               if(response['data']['data']){
                   alert("Added Successfully")
               }
               else{
                   alert("Some Error Occured")
               }
           }, (error)=>{
            alert("Some Error Occured")
               
            console.log("error from add to cart api" , error)
        })
        }
        else{
            this.props.history.push('/login')
        }
    }
    constructor() {
        super();
        this.state = {
            product: {}
        }
    }

    componentWillMount(){
        
        console.log("this props " , this.props.match.params.id)
        var pid = this.props.match.params.id
        axios({
            method:'get',
            url:'https://apibyashu.herokuapp.com/api/product/'+pid
        }).then((response)=>{
            this.setState({
                product:response["data"]["data"]
            })
        })
    }
 
    render() {
        return <div className="container" style={{ padding: "20px" }}>

            <div className="row">
                <div className="col-md-6">
                    {/* {this.state.productid} */}
                    <img src={this.state.product.image} alt="image not avilable" style={{ width: "416px", height: "416px" }} /><br></br>
                    <button onClick={this.Addtocart} className="btn btn-outline-info col-md-5" style={{ padding: "10px" }}>Add to Cart</button>
                    <button className="btn btn-outline-success col-md-5" style={{ padding: "10px" }} >Buy now</button>
                </div>
                <div className="col-md-6">

                    <table>
                        <tr>
                            <td><h3>{this.state.product.name}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Rs.{this.state.product.price}</h3></td>
                        </tr>
                        <tr>

                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90" width="18" height="18" class="_3Amlen" /></span>No cost EMI ₹8,000/month. Standard EMI also availableView Plans</td></tr>

                        <tr>
                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="_3Amlen" /></span> Bank Offer10% Instant Discount* with Axis Bank Credit and Debit CardsT&C</td></tr>
                        <tr>
                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="_3Amlen" /></span>Bank Offer10% off* with Axis Bank Buzz Credit CardT&C</td></tr>
                        <tr>
                            <td><span><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="18" height="18" class="_3Amlen" /></span>Free 16GB SD Card & Camera Bag with this DSLR</td></tr>
                        <tr><td className="row"><span className="col-md-4">Seller</span>
                            <span className="col-md-4"> RetailNet</span>
                        </td></tr>
                        <tr>
                            <td className="row">
                                <span className="col-md-4">Highlights</span>

                                <td><span className="col-md-4"></span><ul><li>Effective Pixels: 24.2 MP</li>
                                    <li><span className="col-md-4">Sensor Type: CMOS</span></li>
                                    <li><span className="col-md-4"></span>WiFi Available</li>
                                    <li><span className="col-md-4"></span>1080p at 60p + Time-Lapse</li></ul></td>

                            </td></tr>
                    </table>
                </div>
            </div >

        </div >
    };
}
export default ShowProd