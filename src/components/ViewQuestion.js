import React from 'react';
import { connect } from 'react-redux';
import ViewQuestionOptions from './ViewQuestionOptions';
import ViewQuestionResults from './ViewQuestionResults';
import { Redirect } from 'react-router-dom';

const ViewQuestion = ({ answered, id, idExists }) => {
  return (
    <>
      {!idExists ? (
        <Redirect to='/notfound' />
      ) : answered ? (
        <ViewQuestionResults id={id} />
      ) : (
        <ViewQuestionOptions id={id} />
      )}
    </>
  );
};

function mapStateToProps({ users, questions, authedUser }, props) {
  const { id } = props.match.params;
  const answered = questions[id] && users[authedUser].answers[id];

  let idExists;

  if (questions[id]) idExists = true;
  else idExists = false;

  return {
    answered,
    id,
    idExists
  };
}

export default connect(mapStateToProps)(ViewQuestion);
