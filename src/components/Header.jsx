import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className='header-wrapper bg-dark'>
        <div className='container vh-10 d-flex justify-content-between align-items-center'>
          <div className='brand font-styled fs-1 text-light'>Brand Logo</div>

          <nav className='nav-wrapper'>
            <ul className='main-nav nav d-flex gap-2'>
              <li className='nav-item'>
                <NavLink
                  to='/'
                  aria-label='Homepage'
                  title='Homepage'
                  className='main-nav-link'>
                  Home
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  to='/about'
                  aria-label='About page'
                  title='About page'
                  className='main-nav-link'>
                  About
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink
                  to='/contact'
                  aria-label='Contact page'
                  title='Contact page'
                  className='main-nav-link'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
