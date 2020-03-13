import React from "react"
import Forgot from "./Forgot"
import Product from "./Product"
import Navbar from "./Navbar"
import Login from "./Login"
import Signup from "./Signup"
import AddProduct from "./Addproduct"
import "./App.css"
import List from "./List";

let p1 = {
  name:'Product1',
  image:'image.jpg',
  price:4500
}


function App(){
  return <div>

    <Navbar />
    <List />
    {/* <Signup /> */}
   {/* <Login /> */}

  {/* <Forgot />
  <AddProduct /> */}
  </div>
}

export default App