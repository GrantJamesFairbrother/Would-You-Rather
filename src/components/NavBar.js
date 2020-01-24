import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const NavBar = ({ name, authedUser, avatarURL, dispatch }) => {
  let history = useHistory();

  const handleLogout = e => {
    e.preventDefault();

    dispatch(setAuthedUser(null));
    let path = '/';
    history.push(path);
  };

  return (
    <div className='col-12'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <ul className='nav nav-pills mr-auto'>
          <li className='nav-item '>
            <Link
              className={
                'nav-link ' + (history.location.pathname === '/' && 'active')
              }
              to='/'>
              Home <span className='sr-only'>(current)</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={
                'nav-link ' + (history.location.pathname === '/add' && 'active')
              }
              to='/add'>
              New Question
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className={
                'nav-link ' +
                (history.location.pathname === '/leaderboard' && 'active')
              }
              to='/leaderboard'>
              Leaderboard
            </Link>
          </li>
        </ul>
        <form className='form-inline my-2 my-lg-0'>
          {authedUser && (
            <img
              className='d-none d-lg-block rounded-circle center mr-2'
              alt='Thumbnail [25x25]'
              src={avatarURL}
              style={{
                width: '30px',
                height: '30px'
              }}
            />
          )}
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
  const avatarURL = users[authedUser] && users[authedUser].avatarURL;

  return {
    name,
    authedUser,
    avatarURL
  };
}

export default connect(mapStateToProps)(NavBar);
