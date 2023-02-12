import React, {useState, useEffect} from 'react'
import Logo from "./img/Logo.png"
import {Link} from "react-router-dom"

const Navbar = () => {
    



    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">

                <Link to="/" style={{textDecoration: "none"}} className="navbar-box" onClick={() => {window.scrollTo({top: 0, left: 0})}}>
                    <img src={Logo}></img>
                </Link>
                <div className="navbar-box">
                    <div className="navbar-sign-button">
                        Log In
                    </div>

                    <div className="navbar-sign-button">
                        Register
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Navbar