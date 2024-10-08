import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import japan_nd from "../assets/japan_nd.png";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollDirection, setScrollDirection] = useState(null);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            if (scrollY > lastScrollY && scrollY > 50) {
                setScrollDirection('down');
            } else if (scrollY < lastScrollY) {
                setScrollDirection('up');
            }
            lastScrollY = scrollY;
        };

        window.addEventListener('scroll', updateScrollDirection);

        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, []);

    return (
        <header className={`header ${scrollDirection === 'down' ? 'header--hidden' : ''}`} role="banner">
            <div className="container">
                <img src={japan_nd} alt="japan_nd" className="title" />
                <nav id="nav" className={`nav ${isOpen ? 'nav--open' : ''}`} role="navigation">
                    <ul className="nav__menu" id="menu" tabIndex="-1" aria-label="main navigation" hidden={!isOpen}>
                        <li className="nav__item">
                            <Link
                                to="rental"
                                smooth={true}
                                duration={500}
                                offset={-50} // Adjust this offset value based on your header height
                                onClick={() => setIsOpen(false)} // Close the menu after clicking
                            >
                                Rental
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <img src={japan_nd} alt="japan_nd" className="title_phone" />
                        <li className="nav__item">
                            <Link
                                to="opinions"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                onClick={() => setIsOpen(false)}
                            >
                                Opinions
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <a onClick={handleOpenMenu} className="nav__toggle" role="button" aria-expanded="false" aria-controls="menu">
                        <svg className="menuicon" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                            <g>
                                <line className="menuicon__bar" x1="13" y1="16.5" x2="37" y2="16.5" />
                                <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
                                <line className="menuicon__bar" x1="13" y1="24.5" x2="37" y2="24.5" />
                                <line className="menuicon__bar" x1="13" y1="32.5" x2="37" y2="32.5" />
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
