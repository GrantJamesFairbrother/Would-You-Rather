import { GET_USERS, SAVE_USER_ANSWER } from './types';

export function getUsers(users) {
  return {
    type: GET_USERS,
    users
  };
}

export function saveUserAnswer(authedUser, qid, answer) {
  return {
    type: SAVE_USER_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function handleUserAnswer(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    dispatch(saveUserAnswer(authedUser, qid, answer));
  };
}
