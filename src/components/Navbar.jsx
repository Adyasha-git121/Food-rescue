import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return(
        <>
        <header>
            <div className="container">
                <div className="Logo">
                    <a href="/">Annaseva</a>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/Home">Home</NavLink></li>                       
                        <li><NavLink to="/About">About</NavLink></li>
                        <li><NavLink to="/Login">Log-in</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>


        </>
    );
}