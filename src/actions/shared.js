import { _getUsers, _getQuestions, _saveQuestion } from '../utils/_DATA';
import { receiveUsers } from './users';
import { receiveQuestions, addQuestion } from './questions';
import { setAuthedUser } from './authedUser';
import {showLoading, hideLoading} from 'react-redux-loading-bar'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading())
    });
  };
}

export function handleLogin(userId) {
  return (dispatch) => {
    dispatch(setAuthedUser(userId));
  };
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading());
    return _saveQuestion(question)
      .then((formattedQuestion) => {
        dispatch(addQuestion(formattedQuestion));
      })
      .finally(() => {
        dispatch(hideLoading());
      });
  };
}