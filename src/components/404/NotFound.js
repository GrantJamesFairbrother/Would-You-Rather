import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='col-md-12 p-5'>
      <p>This is not the page you are looking for...</p>
      <p>
        Try: <Link to='/'>Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
