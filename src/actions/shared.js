import { getUsers } from './users';
import { getQuestions } from './questions';
import { setAuthedUser } from './authedUser';
import { getInitialData } from '../utils/api';

const AUTHED_ID = 'sarahedo';

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(getUsers(users));
      dispatch(getQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
