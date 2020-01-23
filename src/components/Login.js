import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { useHistory } from 'react-router-dom';

const Login = ({ users, dispatch, authedUser }) => {
  const [selectedUser, setSelectedUser] = useState('');

  const handleUserFormChange = e => {
    e.preventDefault();

    setSelectedUser(e.target.value);
  };

  let history = useHistory();

  const handleLogin = e => {
    e.preventDefault();

    dispatch(setAuthedUser(selectedUser));
    let path = '/';
    history.push(path);
  };

  return (
    <div className='col-md-6 offset-md-3 col-12 mt-3'>
      <div
        className='card mb-3 offset-md-3 offset-1'
        style={{ maxWidth: '18rem' }}>
        <div className='card-header bg-primary text-white'>Login</div>
        <div className='card-body'>
          <h5 className='card-title'>Select User Below</h5>
          <form onSubmit={handleLogin}>
            <div className='form-group'>
              <select
                onChange={handleUserFormChange}
                className='form-control'
                defaultValue=''>
                <option value=''></option>
                {users &&
                  Object.values(users).map(user => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
              </select>
            </div>
            <button
              type='submit'
              className='btn btn-primary w-100'
              disabled={!selectedUser && 'disabled'}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ users, authedUser }) {
  return {
    users,
    authedUser
  };
}

export default connect(mapStateToProps)(Login);
