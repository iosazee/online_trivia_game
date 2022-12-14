import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-home">Home</Link>
            <Link to="/gameplay" className="navbar-gameplay">Game Play</Link>
            <Link to="/contactus" className="navbar-contactus">Contact Us</Link>
        </nav>
    )
}

export default Navbar;