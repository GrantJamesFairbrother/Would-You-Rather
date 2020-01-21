import React from 'react';

const Question = () => {
  return (
    <div className='card'>
      <div className='card-header'>Sarah Edo Asks...</div>
      <div className='card-body'>
        <div className='row'>
          <div className='border-right p-2 col-5 '>
            <img
              className='card-img-left flex-auto d-none d-lg-block rounded-circle center'
              alt='Thumbnail [150x150]'
              src='//placeimg.com/250/250/person'
              style={{ width: '150px', height: '150px' }}
            />
          </div>
          <div className='col-md-7 col-12 w-100'>
            <strong>Would you rather...</strong>
            <p className='mt-3'>Make a lot of money... OR...</p>
            <button className='btn w-100 btn-primary mt-3'>View Poll</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
