import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light nav-bg ps-5 pe-5">
            <a className="navbar-brand text-color" href="#">Programming Hero</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link text-color" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-color" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-color" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-color" href="#">Login</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
            <div className="hero p-2">
                <h4 className="text-center">Programming Hero</h4>
                <p className="font-weight-bold text-center pt-2">Total budget: $14326431</p>
            </div>  
        </>
    );
};

export default Navbar;