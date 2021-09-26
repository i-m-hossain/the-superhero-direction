import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light nav-bg ps-5 pe-5">
            <a class="navbar-brand text-color" href="#">Programming Hero</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link text-color" href="#">Home </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-color" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-color" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-color" href="#">Login</a>
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