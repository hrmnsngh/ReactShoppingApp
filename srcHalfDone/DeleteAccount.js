import React from "react"
import {Link} from "react-router-dom"

class DeleteAccount extends React.Component{
render(){
    return(
        <div className="center">
         <p className="alert alert-danger">Are You Sure You Want to Delete this Account?</p>
        <button  className="btn btn-danger">Delete</button>
        <Link to="/"><button style={{"margin-left":"50px"}} className="btn btn-primary">Cancel</button></Link>
        </div>
    )
}
}

export default DeleteAccount