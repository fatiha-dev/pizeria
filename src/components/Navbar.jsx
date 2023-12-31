import { Pizza } from "phosphor-react";
import "./navbar.css";
import logo from "../assets/logopizzeria.png"
import { Link } from "react-router-dom";

export const Navbar = () => {
    
    return(
        <nav className="navbar flex">
            <div className="logo flex">
                <img src={logo} />
                <h1>
                    Pizeria
                </h1>
            </div>
            <div className="links flex">
                <Link to="/">
                    <p >Home</p>
                </Link>
                <Link to="/recipes">
                    <p>Recipes</p>
                </Link>
                <Link to="/orders">
                    <p>Order</p>
                </Link>
                <Link to="/about">
                    <p>About us</p>
                </Link>
                
            </div>
            
        </nav>
    )
}