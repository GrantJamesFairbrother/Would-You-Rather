import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom';

const NewQuestion = ({ dispatch }) => {
  const [options, setOptions] = useState({});
  const [newQues, setNewQues] = useState(false);

  const handleOptions = e => {
    setOptions({ ...options, [e.target.name]: e.target.value });
  };

  const handleNewQuesion = e => {
    e.preventDefault();

    const optionOneText = options.optionOneText;
    const optionTwoText = options.optionTwoText;

    dispatch(handleAddQuestion(optionOneText, optionTwoText));
    setNewQues(true);
  };

  return (
    <>
      {newQues ? (
        <Redirect to='/' />
      ) : (
        <div className='offset-md-4 '>
          <div className='card mt-3'>
            <div className='card-header text-center bg-primary'>
              <h1>Create New Question</h1>
            </div>
            <div className='card-body'>
              <small>Complete the question:</small>
              <h3>Would you rather...</h3>
              <form onSubmit={handleNewQuesion}>
                <input
                  type='text'
                  placeholder='Enter Question One Text Here'
                  name='optionOneText'
                  onChange={handleOptions}
                  className='form-control w-100'
                />
                <p className='mt-3 text-center'>OR</p>
                <input
                  type='text'
                  placeholder='Enter Question Two Text Here'
                  name='optionTwoText'
                  onChange={handleOptions}
                  className='form-control w-100'
                />
                <button
                  disabled={
                    options.optionOneText && options.optionTwoText
                      ? false
                      : true
                  }
                  type='submit'
                  className='btn btn-primary w-100 mt-5'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}{' '}
    </>
  );
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(NewQuestion);
