import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import store from './Redux/Store'

class Navbar extends React.Component {
    constructor() {
        super()
        this.state = {
            onlineusers: 0,
            user: null,
            isLoggedIn: false
        }
    }
    goonline = function () {
        this.setState({
            onlineusers: this.state.onlineusers + 1
        })
    }
    onLogout= ()=>{
        this.props.dispatch({
            type: 'LOGOUT',
            payload: {
                user: 'Harman'
            }
        });
        delete sessionStorage.name;
        delete sessionStorage.email;
    }

    componentWillMount() {
        store.subscribe(() => {
            let storeState = store.getState();
            console.log('Store State form NAV: ', storeState);
            if (storeState['user'] && storeState['isLoggedIn'] == true) {
                this.setState({
                    user: storeState['user'],
                    isLoggedIn: storeState['isLoggedIn']
                })
            }
            else {
                this.setState({...storeState});
                console.log('component state : ',this.state);
            }
        });

    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/"><a class="navbar-brand">My Kart</a></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                My Account
              </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/addproduct"><a class="dropdown-item" >Add Product</a></Link>
                                <Link to="/deleteproduct"><a class="dropdown-item" >Delete Account</a></Link>
                            </div>
                        </li>
                    </ul>
                    <div class="form-inline my-2 my-lg-0">
                        <Link to="/cart">
                            <button class="btn btn-warning my-2 my-sm-0" type="submit">Cart</button>
                        </Link>
                        { !this.state.isLoggedIn &&  <Link to="/login">
                            <button class="btn btn-warning my-2 my-sm-0" type="submit">Login</button>
                        </Link>}
                     { this.state.isLoggedIn &&
                            <button onClick={this.onLogout} class="btn btn-warning my-2 my-sm-0" type="submit">Logout</button>
                       }
                    </div>
                </div>
            </nav>
        )
    }
}

export default connect()(Navbar);