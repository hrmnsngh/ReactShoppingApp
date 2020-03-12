import React from 'react'
import Login from './Login'
import Header from './Header'
import Products from './Products'
import Signup from './Signup'
import AddProduct from './AddProduct'

function App(){
  var prod1 = {
    name: 'Legion 540',
    price: 78000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTqxZPkDdyPLgDHsTq3PUvKyOgQMLjLn-6_VPDKb7BeIQWp4SRyrMsSCvGTSaDyWccy4nXB6NK&usqp=CAc'
    
  }
  
  return(
    <div id="app" className='container'>
      <Header/>
      <Products/>
      <Signup/>
     <Login/>
      <AddProduct/>
      

      
{/*       <Forget/>
 */}    </div>
  );
}

export default App;
