import React, { useState } from 'react';
import Question from './Question';
import { connect } from 'react-redux';

const Home = ({ sortedUnansweredQuestions, sortedAnsweredQuestions }) => {
  const [text, setText] = useState('unanswered');

  const handleAnswerToggle = value => {
    setText(value);
  };

  return (
    <div className='col-md-8 offset-md-2 mt-3'>
      <div className='card'>
        <div className='d-flex flex-row bd-highlight'>
          <button
            onClick={() => handleAnswerToggle('unanswered')}
            className={
              'text-center w-100 p-3 border-0 white-text' +
              (text === 'unanswered' ? ' bg-primary' : ' bg-secondary')
            }>
            Unanswered Questions
          </button>
          <button
            onClick={() => handleAnswerToggle('answered')}
            className={
              'text-center w-100 p-3 border-0 white-text' +
              (text === 'answered' ? ' bg-primary' : ' bg-secondary')
            }>
            Answered Questions
          </button>
        </div>
        <div className='card-body'>
          {text === 'unanswered'
            ? sortedUnansweredQuestions.map(id => <Question key={id} id={id} />)
            : sortedAnsweredQuestions.map(id => <Question key={id} id={id} />)}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ users, questions, authedUser }) {
  let unansweredQuestions = [];
  let answeredQuestions = [];
  if (users[authedUser])
    unansweredQuestions = Object.keys(questions).filter(
      questionId =>
        Object.keys(users[authedUser].answers).indexOf(questionId) < 0
    );

  let sortedUnansweredQuestions = unansweredQuestions.sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  if (users[authedUser])
    answeredQuestions = Object.keys(questions).filter(
      questionId =>
        Object.keys(users[authedUser].answers).indexOf(questionId) >= 0
    );

  let sortedAnsweredQuestions = answeredQuestions.sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  return {
    sortedUnansweredQuestions,
    sortedAnsweredQuestions
  };
}

export default connect(mapStateToProps)(Home);
