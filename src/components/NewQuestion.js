import React from 'react';

const NewQuestion = () => {
  return (
    <div className='offset-md-4 '>
      <div className='card mt-3'>
        <div className='card-header text-center bg-primary'>
          <h1>Create New Question</h1>
        </div>
        <div className='card-body'>
          <small>Complete the question:</small>
          <h3>Would you rather...</h3>
          <form>
            <input
              type='text'
              placeholder='Enter Question One Text Here'
              // value=''
              className='form-control w-100'
            />
            <p className='mt-3 text-center'>OR</p>
            <input
              type='text'
              placeholder='Enter Question Two Text Here'
              // value=''
              className='form-control w-100'
            />
            <button className='btn btn-primary w-100 mt-5'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewQuestion;
