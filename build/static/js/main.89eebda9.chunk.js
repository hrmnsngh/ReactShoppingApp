(this["webpackJsonpreact-poc1"]=this["webpackJsonpreact-poc1"]||[]).push([[0],{38:function(e,t,a){e.exports=a(67)},43:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),l=(a(43),a(2)),s=a(3),i=a(5),m=a(4),u=a(6),p=a(8),d=a(14),h=a(7),g=a.n(h),b=a(11),f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).login=function(){var e=this;this.user.email=document.getElementById("email").value,this.user.password=document.getElementById("password").value,console.log("this state now",this.user),g()({method:"post",url:"https://apibyashu.herokuapp.com/api/login",data:this.user}).then((function(t){console.log("response from login api",t),t.data.token?(localStorage.email=t.data.email,localStorage.name=t.data.name,localStorage.user=t.data,e.props.dispatch({type:"LOGIN",payload:{user:t.data}}),e.props.history.push("/")):alert("Invalid Credentials")}),(function(e){console.log("error from login api",e)}))},e.state={errorMessage:null,email:"",password:""},e.user={},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){localStorage.email&&this.props.history.push("/")}},{key:"componentDidMount",value:function(){console.log(">>>>>>>>>>>>>>>>>>>>>>.",this.props)}},{key:"render",value:function(){return r.a.createElement("div",{className:"center"},"Login heress",r.a.createElement("input",{id:"email",className:"form-control",placeholder:"Email"}),r.a.createElement("input",{id:"password",type:"password",className:"form-control",placeholder:"Password"}),r.a.createElement("button",{onClick:this.login.bind(this),className:"btn btn-primary"},"Login"),r.a.createElement(p.b,{to:"/forgot"}," Forgot Your Password ? Click Here"))}}]),t}(r.a.Component),E=Object(b.b)()(f),v=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).getEmail=function(e){console.log(".... this",this),this.user.email=e.target.value},e.getName=function(e){this.user.name=e.target.value},e.getPassword=function(e){this.user.password=e.target.value},e.register=function(){g()({method:"Post",data:this.user,url:"https://apibyashu.herokuapp.com/api/register"}).then((function(e){console.log("response from signup api",e)}),(function(e){console.log("error from signup api",e)})),console.log("this user now",this.user)},e.state={errorMessage:null},e.user={},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){localStorage.email&&this.props.history.push("/")}},{key:"render",value:function(){return r.a.createElement("div",{className:"center"},"Signup here",r.a.createElement("input",{onChange:this.getEmail.bind(this),className:"form-control",placeholder:"Email"}),r.a.createElement("input",{onChange:this.getName.bind(this),className:"form-control",placeholder:"Name"}),r.a.createElement("input",{onChange:this.getPassword.bind(this),type:"password",className:"form-control",placeholder:"Password"}),r.a.createElement("button",{onClick:this.register.bind(this),className:"btn btn-primary"},"Register"))}}]),t}(r.a.Component);var y=Object(d.e)((function(e){return r.a.createElement("div",{onClick:function(t){var a="/product/"+t.productid,n="/product?productid="+t.productid;console.log("query url",n),e.history.push(a)}.bind(null,e.product),className:"card col-md-3",style:{width:"18rem"}},e.product&&r.a.createElement("img",{style:{height:"150px"},src:e.product.image,className:"card-img-top",alt:"..."}),e.product&&r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.product.name),r.a.createElement("p",{className:"card-text"},e.product.price)))})),O=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).getEmail=function(e){this.email=e.target.value},e.sendMail=function(){var e=this;g()({method:"post",data:{email:this.email},url:"https://apibyashu.herokuapp.com/api/resetpassword"}).then((function(t){console.log("response from send password api ",t),"No Such Email exists"==t.data.message&&e.setState({errorMessage:t.data.message})}),(function(e){console.log("error from send password api",e)}))},e.state={errorMessage:null},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"Forgot Your Password! "),this.state.errorMessage&&r.a.createElement("div",{class:"alert alert-danger"},this.state.errorMessage),r.a.createElement("input",{onChange:this.getEmail.bind(this),className:"form-control",placeholder:"Enter your email"}),r.a.createElement("button",{onClick:this.sendMail.bind(this),class:"btn btn-warning"},"Send Password"))}}]),t}(r.a.Component),w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).getPrice=function(e){console.log(".... this",this),this.product.price=e.target.value},e.getName=function(e){this.product.name=e.target.value},e.getImage=function(e){this.product.image=e.target.value},e.addproduct=function(){localStorage.email&&localStorage.name?(this.product.owner.name=localStorage.name,this.product.owner.email=localStorage.email,g()({method:"Post",data:this.product,url:"https://apibyashu.herokuapp.com/api/createproduct"}).then((function(e){console.log("response from add product api",e)}),(function(e){console.log("error from add product api",e)}))):alert("Login First")},e.state={errorMessage:null},e.product={owner:{}},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){localStorage.email||this.props.history.push("/login")}},{key:"render",value:function(){return r.a.createElement("div",{className:"center"},"Add Product here",r.a.createElement("input",{onChange:this.getName.bind(this),className:"form-control",placeholder:"Name"}),r.a.createElement("input",{onChange:this.getImage.bind(this),type:"text",className:"form-control",placeholder:"Image"}),r.a.createElement("input",{onChange:this.getPrice.bind(this),type:"text",className:"form-control",placeholder:"Price"}),r.a.createElement("button",{onClick:this.addproduct.bind(this),className:"btn btn-danger"},"Add Product"))}}]),t}(r.a.Component),N=(a(66),a(21)),C=a(16),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isloggedin:localStorage.email&&!0,user:localStorage.user,cart:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return(e=Object(C.a)({},e)).user=t.payload.user,e.isloggedin=!0,console.log("store after doing logginf task",e),e;case"LOGOUT":return delete(e=Object(C.a)({},e)).user,delete e.isloggedin,e;case"ADDTOCART":return(e=Object(C.a)({},e)).cart.push(t.payload),e;case"INITCART":return(e=Object(C.a)({},e)).cart=t.payload,e;case"EMPTYCART":return(e=Object(C.a)({},e)).cart=[],delete e.totalprice,e;case"PLACEORDER":return(e=Object(C.a)({},e)).totalprice=t.payload,e;case"REMOVEFROMCART":var a;e.cart.forEach((function(e,n){e.productid==t.payload.productid&&(a=n)})),e.cart.splice(a,1);default:return e}},k=Object(N.b)(j),S=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).logout=function(){localStorage.clear(),this.props.dispatch({type:"LOGOUT"}),this.setState({isloggedin:!1})},e.state={user:localStorage.user,isloggedin:localStorage.email&&!0},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.subscribe((function(){var t=k.getState();console.log("store changed",t),t.user&&e.setState({user:t.user,isloggedin:t.isloggedin})}))}},{key:"render",value:function(){return r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(p.b,{to:"/"},r.a.createElement("p",{class:"navbar-brand"},"My Kart")),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{class:"navbar-nav mr-auto"},this.state.isloggedin&&r.a.createElement("li",{class:"nav-item dropdown"},r.a.createElement("a",{class:"nav-link dropdown-toggle",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"My Account"),r.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement(p.b,{to:"/addproduct"},r.a.createElement("p",{class:"dropdown-item"},"Add Product")),r.a.createElement(p.b,{to:"/cart"}," ",r.a.createElement("p",{class:"dropdown-item"},"Cart")),r.a.createElement(p.b,{to:"/deleteaccount"}," ",r.a.createElement("p",{class:"dropdown-item"},"Delete Account"))))),!this.state.isloggedin&&r.a.createElement("div",{class:"form-inline my-2 my-lg-0"},r.a.createElement(p.b,{to:"/login"},r.a.createElement("button",{class:"btn btn-warning my-2 my-sm-0",type:"submit"},"Login")),r.a.createElement(p.b,{to:"/signup"},r.a.createElement("button",{class:"btn btn-warning my-2 my-sm-0",type:"submit"},"Signup"))),this.state.isloggedin&&r.a.createElement("div",{class:"form-inline my-2 my-lg-0"},r.a.createElement(p.b,{to:"/"},r.a.createElement("button",{onClick:this.logout.bind(this),class:"btn btn-warning my-2 my-sm-0",type:"submit"},"Logout")))))}}]),t}(r.a.Component),x=Object(b.b)()(S),A=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={products:[]},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;g()({method:"get",url:"https://apibyashu.herokuapp.com/api/allproducts"}).then((function(t){console.log("response from get products api",t),e.setState({products:t.data.data})}),(function(e){console.log("error from all products api",e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},this.state.products.map((function(e){return r.a.createElement(y,{product:e})}))))}}]),t}(r.a.Component),M=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"center"},r.a.createElement("p",{className:"alert alert-danger"},"Are You Sure You Want to Delete this Account?"),r.a.createElement("button",{className:"btn btn-danger"},"Delete"),r.a.createElement(p.b,{to:"/"},r.a.createElement("button",{style:{"margin-left":"50px"},className:"btn btn-primary"},"Cancel")))}}]),t}(r.a.Component),P=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).Addtocart=function(){if(localStorage.email){var t={productid:e.state.product.productid,name:e.state.product.name,price:e.state.product.price,image:e.state.product.image,email:localStorage.email};g()({method:"post",url:"https://apibyashu.herokuapp.com/api/addtocart",data:t}).then((function(t){console.log("response from add to cart api",t),t.data.data?(e.props.dispatch({type:"ADDTOCART",payload:t.data.data}),e.setState({itemalreadyincart:!0})):alert("Some Error Occured")}),(function(e){alert("Some Error Occured"),console.log("error from add to cart api",e)}))}else e.props.history.push("/login")},e.state={product:{},itemalreadyincart:!1},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.subscribe((function(){var t=k.getState().cart;t.length>0&&t.forEach((function(t){t.productid==e.state.product.productid&&e.setState({itemalreadyincart:!0})}))})),console.log("this props ",this.props.match.params.id);var t=this.props.match.params.id;g()({method:"get",url:"https://apibyashu.herokuapp.com/api/product/"+t}).then((function(t){e.setState({product:t.data.data});var a=k.getState().cart;a.length>0&&a.forEach((function(t){t.productid==e.state.product.productid&&e.setState({itemalreadyincart:!0})}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container",style:{padding:"20px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{src:this.state.product.image,alt:"image not avilable",style:{width:"416px",height:"416px"}}),r.a.createElement("br",null),r.a.createElement("button",{disabled:this.state.itemalreadyincart,onClick:this.Addtocart,className:"btn btn-outline-info col-md-5",style:{padding:"10px"}},"Add to Cart"),r.a.createElement("button",{className:"btn btn-outline-success col-md-5",style:{padding:"10px"}},"Buy now")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("h3",null,this.state.product.name))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("h3",null,"Rs.",this.state.product.price))),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("span",null,r.a.createElement("img",{src:"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90",width:"18",height:"18",class:"_3Amlen"})),"No cost EMI \u20b98,000/month. Standard EMI also availableView Plans")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("span",null,r.a.createElement("img",{src:"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90",width:"18",height:"18",class:"_3Amlen"}))," Bank Offer10% Instant Discount* with Axis Bank Credit and Debit CardsT&C")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("span",null,r.a.createElement("img",{src:"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90",width:"18",height:"18",class:"_3Amlen"})),"Bank Offer10% off* with Axis Bank Buzz Credit CardT&C")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("span",null,r.a.createElement("img",{src:"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90",width:"18",height:"18",class:"_3Amlen"})),"Free 16GB SD Card & Camera Bag with this DSLR")),r.a.createElement("tr",null,r.a.createElement("td",{className:"row"},r.a.createElement("span",{className:"col-md-4"},"Seller"),r.a.createElement("span",{className:"col-md-4"}," RetailNet"))),r.a.createElement("tr",null,r.a.createElement("td",{className:"row"},r.a.createElement("span",{className:"col-md-4"},"Highlights"),r.a.createElement("td",null,r.a.createElement("span",{className:"col-md-4"}),r.a.createElement("ul",null,r.a.createElement("li",null,"Effective Pixels: 24.2 MP"),r.a.createElement("li",null,r.a.createElement("span",{className:"col-md-4"},"Sensor Type: CMOS")),r.a.createElement("li",null,r.a.createElement("span",{className:"col-md-4"}),"WiFi Available"),r.a.createElement("li",null,r.a.createElement("span",{className:"col-md-4"}),"1080p at 60p + Time-Lapse")))))))))}}]),t}(n.Component),T=Object(b.b)()(P),D=(r.a.Component,function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).removeFromCart=function(e){var t=this;g()({method:"post",url:"https://apibyashu.herokuapp.com/api/removefromcart",data:{email:localStorage.email,productid:e.productid}}).then((function(a){console.log("response from remove from cart api",a),t.props.dispatch({type:"REMOVEFROMCART",payload:e})}),(function(e){console.log("error from remove from cart api",e)}))},e.checkout=function(){e.props.dispatch({type:"PLACEORDER",payload:e.state.totalprice})},e.state={cartitems:k.getState().cart,totalprice:0},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){localStorage.email||this.props.history.push("/login")}},{key:"componentDidMount",value:function(){var e=this,t=0;this.state.cartitems.forEach((function(a){t+=a.price,console.log(".............",typeof t,t),e.setState({totalprice:t})})),k.subscribe((function(){e.setState({cartitems:k.getState().cart,totalprice:0}),e.state.cartitems.forEach((function(t){e.setState({totalprice:e.state.totalprice+t.price})}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.cartitems.map((function(t){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("img",{style:{height:"60px"},src:t.image}),r.a.createElement("label",null,t.name),r.a.createElement("label",null,t.price)),r.a.createElement("div",{class:"col-md-4"},r.a.createElement("button",{onClick:e.removeFromCart.bind(e,t),className:"btn btn-danger"},"Remove")))})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},this.state.totalprice>0&&r.a.createElement("label",{className:"alert alert-success"},"Total Price is : ",this.state.totalprice)),r.a.createElement("div",{className:"col-md-4"},this.state.totalprice>0&&r.a.createElement(p.b,{to:"checkout"}," ",r.a.createElement("button",{onClick:this.checkout,className:"btn btn-success"},"Checkout"))),!this.state.totalprice>0&&r.a.createElement("div",{className:"alert alert-danger"},"Your Cart is Empty")))}}]),t}(r.a.Component)),R=Object(b.b)()(D),I=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).order={},e.getName=function(t){e.order.name=t.target.value},e.getArea=function(t){e.order.area=t.target.value},e.getCity=function(t){e.order.city=t.target.value},e.getPincode=function(t){e.order.pincode=t.target.value},e.getPhone=function(t){e.order.phone=t.target.value},e.placeOrder=function(){e.order.email=localStorage.email,e.order.items=k.getState().cart,e.order.totalprice=k.getState().totalprice,console.log("order object ready",e.order),g()({method:"post",url:"https://apibyashu.herokuapp.com/api/addorder",data:e.order}).then((function(t){console.log("response from add order api",t),e.props.dispatch({type:"EMPTYCART"})}),(function(e){console.log("error from add order api",e)}))},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){localStorage.email||this.props.history.push("/login")}},{key:"render",value:function(){return r.a.createElement("div",{className:"center"},r.a.createElement("h1",null,"Place Your Order Here"),r.a.createElement("input",{className:"form-control",placeholder:"Name",onChange:this.getName}),r.a.createElement("input",{className:"form-control",placeholder:"Area",onChange:this.getArea}),r.a.createElement("input",{className:"form-control",placeholder:"City",onChange:this.getCity}),r.a.createElement("input",{className:"form-control",placeholder:"PinCode",onChange:this.getPincode}),r.a.createElement("input",{className:"form-control",placeholder:"Phone",onChange:this.getPhone}),r.a.createElement("label",null," Cash On Delivery "),r.a.createElement("input",{disabled:"true",type:"checkBox",checked:"true"}),r.a.createElement("button",{onClick:this.placeOrder,className:"btn btn-primary"},"Place Order"))}}]),t}(r.a.Component),B=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;localStorage.email&&g()({method:"post",url:"https://apibyashu.herokuapp.com/api/cart",data:{email:localStorage.email}}).then((function(t){console.log("response from get cart api",t),e.props.dispatch({type:"INITCART",payload:t.data.data})}),(function(e){console.log("error from get cart api",e)}))}},{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(x,null),r.a.createElement(d.a,{exact:!0,path:"/",component:A}),r.a.createElement(d.a,{exact:!0,path:"/login",component:E}),r.a.createElement(d.a,{exact:!0,path:"/signup",component:v}),r.a.createElement(d.a,{exact:!0,path:"/forgot",component:O}),r.a.createElement(d.a,{exact:!0,path:"/addproduct",component:w}),r.a.createElement(d.a,{exact:!0,path:"/deleteaccount",component:M}),r.a.createElement(d.a,{exact:!0,path:"/product",component:T}),r.a.createElement(d.a,{exact:!0,path:"/product/:id",component:T}),r.a.createElement(d.a,{exact:!0,path:"/cart",component:R}),r.a.createElement(d.a,{exact:!0,path:"/checkout",component:I}))}}]),t}(r.a.Component),L=Object(b.b)()(B);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b.a,{store:k},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.89eebda9.chunk.js.map