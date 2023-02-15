import React from 'react';
import './styles/style.css';
import CartWidget from './CartWidget';


export const NavBar = () => {
    return (
        <div className='nav_container'>
            <nav className='navBar'>
                <div className='logo'>
                    <a href='/'> <img src="logo.png" alt="Logo JIMP" /> </a>
                </div>
                <ul className='nav_list'>
                    <li><a className='nav_link' href='/'>Inicio</a></li>
                    <li><a className='nav_link' href='/'>Apple</a></li>
                    <li><a className='nav_link' href='/'>Android</a></li>
                    <li><a className='nav_link' href='/'>Proyectos</a></li>
                    <li><a className='nav_link' href='/'>Contacto</a></li>
                </ul>
                <div className='divCart'>
                <a className='cartW' href='/'><CartWidget /></a>
                <a className='cartW' href='/'><span>3</span></a>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;