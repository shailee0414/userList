import React from "react";
import Link from "./Link";
import { useNavigate } from "react-router-dom";
const Navbar=()=>{
    const navigate=useNavigate();
    return(
        <div className="ui secondary pointing menu ">
            <Link className="item" text="Home">Home</Link>
            <Link className="item ui right floated button " text="Logout" onClick={()=>{
                localStorage.removeItem('foo')
                navigate('/')
            }}>Logout</Link>
        </div>
    )
}
export default Navbar;