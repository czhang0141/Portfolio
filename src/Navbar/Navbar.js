import React from 'react';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import Logo from '../Images/logo.jpg'
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <>
        <div className='navbar'>
          <nav className='nav-menu'>
            <ul className='nav-menu-items'>
              <li className='logo'>
                <img src={Logo} alt="Cristina Zhang" />
                <h3>Cristina Zhang</h3>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.className}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <li className='nav-text icons'>
              <a href="https://github.com/czhang0141"><BsIcons.BsGithub /></a>
              <a href="https://www.linkedin.com/in/cristina-zhang/"><BsIcons.BsLinkedin /></a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
  
  export default Navbar;