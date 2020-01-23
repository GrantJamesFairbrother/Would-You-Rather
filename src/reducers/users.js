import { GET_USERS, SAVE_USER_ANSWER } from '../actions/users';
import { ADD_QUESTION } from '../actions/questions';

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users
      };

    case ADD_QUESTION:
      const authorId = action.question.author;
      const newQId = action.question.id;
      return {
        ...state,
        [authorId]: {
          ...state[authorId],
          questions: state[authorId].questions.concat(newQId)
        }
      };

    case SAVE_USER_ANSWER:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: { ...state[authedUser].answers, [qid]: answer }
        }
      };

    default:
      return state;
  }
}
