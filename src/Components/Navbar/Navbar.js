import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav>
                <input type="checkbox" id="check"/>
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars">Menu</i>
                </label>
                <label onClick={()=>window.location.href='/'} className="logo">AirCnC</label>
                <ul>
                    <li><a className="active" href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;