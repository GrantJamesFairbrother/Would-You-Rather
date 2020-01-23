import { saveQuestion } from '../utils/api';
import { GET_QUESTIONS, ADD_QUESTION } from './types';

export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }).then(question => dispatch(addQuestion(question)));
  };
}
