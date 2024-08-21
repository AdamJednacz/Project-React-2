import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import japan_nd from "../assets/japan_nd.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };



    return (
        <header className="header" role="banner">
            <div className="container">
            <img src={japan_nd} alt="japan_nd" className="title"/>
            <nav id="nav" className={`nav ${isOpen ? 'nav--open' : ''}`} role="navigation">
                <ul className="nav__menu" id="menu" tabIndex="-1" aria-label="main navigation" hidden={!isOpen}>

                    <li className="nav__item" >About</li>
                    <li className="nav__item" >Rental</li>
                    <img src={japan_nd} alt="japan_nd" className="title_phone"/>
                    <li className="nav__item" >Garage</li>
                    <li className="nav__item" >Contact</li>
                </ul>

                <a onClick={handleOpenMenu} className="nav__toggle" role="button" aria-expanded="false" aria-controls="menu">
                    <svg className="menuicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                        <g>
                            <line className="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5"/>
                            <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                            <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5"/>
                            <line className="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5"/>
                            <circle className="menuicon__circle" r="23" cx="25" cy="25" />
                        </g>
                    </svg>
                </a>
                <div className="splash"></div>
            </nav>
            </div>
        </header>
    );
};

export default Header;
