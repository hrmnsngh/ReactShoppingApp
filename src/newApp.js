import React from 'react'
import Login from './Login'
import Header from './Header'
import Products from './Products'
import Signup from './Signup'
import AddProduct from './AddProduct'
import Navbar from './Nav'
import DeleteProduct from './DeleteProduct' 
import {
    BrowserRouter , Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Forget from './Forget'
import ShowProd from './showProd'
import Cart  from './Cart'

class NewApp extends React.Component {


    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Route exact path="/" component={Products} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/addproduct" component={AddProduct} />
                <Route exact path="/deleteproduct" component={DeleteProduct} />
                <Route exact path="/showproduct/:id" component={ShowProd}/>
                <Route exact path="/forget" component={Forget}/>
                <Route exact path="/cart" component={Cart}/>
                </BrowserRouter>


        )
    }
}

export default NewApp;