import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';
import { receiveUsers, saveUserAnswer, addUserQuestion } from './users';
import { receiveQuestions, addQuestion, saveAnswer } from './questions';
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
  return (dispatch, getState) => {
    let { authedUser } = getState();
    dispatch(showLoading());
    return _saveQuestion({
      ...question,
      author: authedUser
    })
      .then((formattedQuestion) => {
        dispatch(addQuestion(formattedQuestion));
        dispatch(addUserQuestion({authedUser, id: formattedQuestion.id}));
      })
      .finally(() => {
        dispatch(hideLoading());
      });
  };
}

export function handleSaveQuestionAnswer({qid, answer}) {
  return (dispatch, getState) => {
    let { authedUser } = getState();
    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer
    }).then(() => {
      dispatch(saveAnswer({authedUser, qid, answer}));
      dispatch(saveUserAnswer({authedUser, qid, answer}));
    });
  };
}