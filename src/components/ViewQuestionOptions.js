import React, { useState } from 'react';
import { connect } from 'react-redux';
import { handleUserAnswer } from '../actions/users';

const ViewQuestionOptions = ({
  dispatch,
  id,
  author,
  optionOne,
  optionTwo,
  avatarURL
}) => {
  const [answer, setAnswer] = useState('');

  const handleAnswer = e => {
    setAnswer(e.target.value);
  };

  const handleSaveAnswer = e => {
    e.preventDefault();

    dispatch(handleUserAnswer(id, answer));
  };
  return (
    <div className='offset-md-2 col-md-8 mt-3'>
      <div className='card'>
        <div className='card-header'>{author} Asks...</div>
        <div className='card-body'>
          <div className='row'>
            <div className='border-right p-2 col-4 d-flex justify-content-center align-items-center'>
              <img
                className='card-img-left flex-auto d-none d-lg-block rounded-circle center'
                alt='Thumbnail [150x150]'
                src={avatarURL}
                style={{ width: '150px', height: '150px' }}
              />
            </div>
            <div className='col-md-7 ml-4'>
              <h2 className='mb-3'>Would You Rather...</h2>
              <div className='btn-group-toggle w-100' data-toggle='buttons'>
                <label
                  className={
                    'btn btn-success w-100' +
                    (answer === 'optionOne' ? ' active' : '')
                  }>
                  <input
                    type='radio'
                    value='optionOne'
                    onClick={handleAnswer}
                  />
                  {optionOne}
                </label>
                <p className='text-center mt-3'>OR</p>
                <label
                  className={
                    'btn btn-success w-100' +
                    (answer === 'optionTwo' ? ' active' : '')
                  }>
                  <input
                    type='radio'
                    value='optionTwo'
                    onClick={handleAnswer}
                  />
                  {optionTwo}
                </label>
              </div>
              <button
                type='submit'
                onClick={handleSaveAnswer}
                className='btn btn-primary mt-5 w-100'>
                Submit Answer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ users, questions }, { id }) {
  const authorId = questions[id] && questions[id].author;
  const author = questions[id] && users[authorId].name;
  let optionOne = questions[id] && questions[id].optionOne.text;
  let optionTwo = questions[id] && questions[id].optionTwo.text;
  const avatarURL = questions[id] && users[authorId].avatarURL;

  optionOne =
    optionOne[0].toUpperCase() + optionOne.substr(1, optionOne.length);

  optionTwo =
    optionTwo[0].toUpperCase() + optionTwo.substr(1, optionTwo.length);

  return {
    id,
    author,
    optionOne,
    optionTwo,
    avatarURL
  };
}

export default connect(mapStateToProps)(ViewQuestionOptions);
