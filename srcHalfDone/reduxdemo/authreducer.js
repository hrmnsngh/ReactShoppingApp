let authreducer  = function(state = {
    isloggedin:localStorage.email && true,
    user:localStorage.user,
    cart:[]
},action){
  switch(action.type){
      case "LOGIN" :{
          state = {...state}
          state["user"] = action.payload["user"]
          state["isloggedin"] = true
          console.log("store after doing logginf task", state)
          return state
      }
      case "LOGOUT" :{
          state = {...state}
          delete state["user"]
          delete state["isloggedin"]
          return state
      }
      case "ADDTOCART":{
          state={...state}
          state["cart"].push(action.payload)
          return state
      }
      case "INITCART":{
        state={...state}
        state["cart"] = action.payload
        return state
    }
      case "REMOVEFROMCART":{
          var findindex 
          state.cart.forEach((each,index)=>{
              if(each.productid==action.payload.productid)
              findindex = index
          })
          state["cart"].splice(findindex,1)
      }
      default : return state
  }
}



export default authreducer