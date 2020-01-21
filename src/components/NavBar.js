import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='col-12'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/new'>
              New Question
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/leaderboard'>
              Leaderboard
            </Link>
          </li>
        </ul>
        <form className='form-inline my-2 my-lg-0'>
          <Link
            to='/login'
            className='btn btn-outline-dark my-2 my-sm-0'
            type='submit'>
            Login
          </Link>
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
