import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const NavBar = ({ name, authedUser, dispatch }) => {
  const handleLogout = e => {
    e.preventDefault();

    dispatch(setAuthedUser(null));
  };
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
            <Link className='nav-link' to='/add'>
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
          {authedUser && <span className='mr-2'>Welcome, {name} </span>}
          <Link
            to='/login'
            className='btn btn-outline-dark my-2 my-sm-0'
            onClick={authedUser ? handleLogout : null}
            type='submit'>
            {authedUser ? 'Logout' : 'Login'}
          </Link>
        </form>
      </nav>
    </div>
  );
};

function mapStateToProps({ users, authedUser }) {
  let name;
  if (users[authedUser]) name = users[authedUser].name;

  return {
    name,
    authedUser
  };
}

export default connect(mapStateToProps)(NavBar);
