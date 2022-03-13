import React, { useState, useEffect } from 'react'
import { DiCoda } from 'react-icons/di'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
function Navbar() {
    const [click, setClick] = useState(false);//boolean toggle to check if the menu has been clicked
    const [button, setButton] = useState(true);//boolean toggle to render the signup button in the ul

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else {
            setButton(true);
        }
    };

    //this will run once on the first render
    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        TRVL <DiCoda className='fab fa-typo3'></DiCoda>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {!click ? <HiMenu></HiMenu> : <HiX></HiX> }
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link 
                                to='/' 
                                className='nav-links' 
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                to='/services' 
                                className='nav-links' 
                                onClick={closeMobileMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                to='/products' 
                                className='nav-links' 
                                onClick={closeMobileMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                to='/sign-up' 
                                className='nav-links-mobile' 
                                onClick={closeMobileMenu}
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar