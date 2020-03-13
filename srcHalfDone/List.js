import React from "react"
import Product from "./Product"
import axios from "axios"

class List extends React.Component{
    constructor(){
        super()
        this.state = {
            products:[]
        }
    }
    componentDidMount(){
        axios({
            method:'get',
            url:'https://apibyashu.herokuapp.com/api/allproducts'
            }).then(
                (response)=>{
                    console.log("response from get products api", response)
                    this.setState({
                        products:response["data"]["data"]
                    })
                },
                (error)=>{
                    console.log("error from all products api", error)
                }
            )
    }
    render(){
    
        return(
        
            <div>
                <div className="row">
                {this.state.products.map((each)=>{
                    return <Product    product={each} />
                })}
                </div>
            </div>
            
        )
    }
}

export default List