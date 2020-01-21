import React from 'react';
import Question from './Question';

const Home = () => {
  return (
    <div className='col-md-8 offset-md-2 mt-3'>
      <div className='card'>
        <div className='d-flex flex-row bd-highlight'>
          <button className='text-center w-100 p-3 bg-primary border-0 white-text'>
            Unanswered Questions
          </button>
          <button className='text-center w-100 p-3 bg-secondary border-0 white-text'>
            Answered Questions
          </button>
        </div>
        <div className='card-body'>
          <Question />
        </div>
      </div>
    </div>
  );
};

export default Home;
