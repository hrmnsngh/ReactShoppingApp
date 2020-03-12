import React, {Component} from 'react'
import axios from 'axios'

class ShowProduct extends React.Component {
    //console.log(`Props:`, props);

    constructor(){
        super();
        this.state= {
            product:{}
        }
        console.log(this.props);
    }

    applyDiscount=()=> {
     //   props.product.price -= 1000;
    }

    componentWillMount(){
        let pid = this.props.match.params.id;
        console.log('props',this.props);
        axios({
            method: 'GET',
            url: 'https://apibyashu.heroku.com/api/product/'+pid
        }).
        then(
            (response)=>{
                console.log('response : ',response);
                this.setState({
                    product: response.data.data
                })
            },
            (error)=>{
                console.log('error while fetching product details: ',error);
            }
        );
    } 
    componentDidMount(){
        console.log('component mounted');
    }

    render() {
        return (
            <div className="card" style={{ width: "18rem", textAlign: "center", margin: "10px" }}>
                Dummy Product
{/*                 {props.product && <img src={props.product.image} className="card-img-top" alt="Image"></img>}
                {props.product && <div className="card-body">
                    <p className="card-title">{props.product.name}</p>
                    <p className="card-text">{props.product.price}</p>
                    <button onClick={applyDiscount}>Apply Discount</button>

                </div>} */}
            </div>
        )
    }

}

export default ShowProduct;