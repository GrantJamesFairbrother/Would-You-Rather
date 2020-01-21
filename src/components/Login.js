import React from 'react';

const Login = () => {
  return (
    <div className='col-md-6 offset-md-3 col-12 mt-3'>
      <div
        className='card mb-3 offset-md-3 offset-1'
        style={{ maxWidth: '18rem' }}>
        <div className='card-header bg-primary text-white'>Login</div>
        <div className='card-body'>
          <h5 className='card-title'>Select User Below</h5>
          <form>
            <div className='form-group'>
              <select className='form-control'>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <button type='submit' className='btn btn-primary w-100'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
