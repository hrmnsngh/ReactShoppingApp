import React from "react"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import store from './reduxdemo/store'

class Navbar extends React.Component{
  constructor(){
    super()
    this.state = {
      user:localStorage.user,
      isloggedin:localStorage.email && true
    }
  }
  componentDidMount(){
    store.subscribe(()=>{
      var storestate  = store.getState()
      console.log("store changed" ,storestate)
      if(storestate["user"]){
        this.setState({
          user:storestate["user"],
          isloggedin:storestate["isloggedin"], 
        })
      }
    })
  }
  logout = function(){
    localStorage.clear()
    this.props.dispatch({
      type:'LOGOUT'
    })
    this.setState({
      isloggedin:false
    })
  }
 
    render(){
      return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/"><p class="navbar-brand">My Kart</p></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {this.state.isloggedin && <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                My Account
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
               <Link to="/addproduct"><p class="dropdown-item" >Add Product</p></Link>
               <Link to="/cart"> <p class="dropdown-item" >Cart</p></Link>
               <Link to="/deleteaccount"> <p class="dropdown-item" >Delete Account</p></Link>
               
             </div>
            </li>}
          </ul>
         {!this.state.isloggedin && <div class="form-inline my-2 my-lg-0">
            <Link to="/login"><button class="btn btn-warning my-2 my-sm-0" type="submit">Login</button></Link>
            <Link to="/signup"><button class="btn btn-warning my-2 my-sm-0" type="submit">Signup</button></Link>
          </div>}
        { this.state.isloggedin &&  <div  class="form-inline my-2 my-lg-0">
            <Link to="/"><button onClick={this.logout.bind(this)} class="btn btn-warning my-2 my-sm-0" type="submit">Logout</button></Link>
      </div> }
        </div>
      </nav>
      )
    }
}

export default connect() (Navbar)